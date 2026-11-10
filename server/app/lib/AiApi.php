<?php
if (!defined('GF_ROOT')) {
    http_response_code(403);
    exit;
}
require_once GF_ROOT . '/app/lib/AiSchema.php';

/**
 * ★v1.6.6 · Muse / 外部智能体接入层（通用数据平面）
 *
 * 能力面（全部只读写本人数据，按 owner 隔离）：
 *   公开：
 *     GET  /api/ai/openapi.json     OpenAPI 3.1 规范（含全部端点与 12 个集合字段字典）
 *     POST /api/ai/keys/bootstrap   一次性引导签发首把 Key（凭证文件在 storage/）
 *   需鉴权：
 *     GET  /api/ai/schema           字段字典 + 自定义配置（「能调用设置的一切」的自描述入口）
 *     GET  /api/ai/context          上下文：分类、归需选项、物品、订阅、流水、动作
 *     GET  /api/ai/collections      读任意集合（支持 name / limit / offset / filter）
 *     POST /api/ai/query            多条件查询（过滤 / 排序 / 投影 / 分页）
 *     POST /api/ai/mutate           通用写入：upsert / update / delete / replace 任意集合任意字段
 *     GET|POST|DELETE /api/ai/categories   自定义分类（生活流 / 物品 / 订阅）
 *     GET|POST /api/ai/options      自定义归需选项、判定规则、自定义字段、任意设置
 *     GET|POST|DELETE /api/ai/actions      自定义功能（动作模板，AI 自己扩展能力）
 *     POST /api/ai/actions/run      调用自定义功能
 *     POST /api/ai/parse            自然语言 → 结构化草案
 *     POST /api/ai/commit           文本 / items / draft / operations → 落库
 *     POST /api/ai/ask              数值问答（含值不值）
 *     GET|DELETE /api/ai/inbox      云端待入账（逐条明细，可撤销）
 *     POST /api/ai/inbox/apply      标记事件已被客户端合并
 *     GET|POST|DELETE /api/ai/keys  API Key 管理
 *
 * 鉴权两种：Bearer <用户 token> / Bearer nawu_sk_xxx。
 *
 * ★为什么需要「待入账箱」：纳物本地优先，服务端只存整份快照。AI 写入先进
 *   flyme_ai_events，①立刻合并进最新快照；②客户端推新快照时再合并一次；
 *   ③客户端用 /api/ai/inbox 增量拉取，用户逐条确认后才写进本机，避免误入账。
 */
class GF_Ai
{
    const KEY_PREFIX = 'nawu_sk_';
    const MAX_PENDING = 500;

    /* ==========================================================
     * 表与用户级配置
     * ========================================================== */

    public static function ensureTables()
    {
        static $done = false;
        if ($done) {
            return;
        }
        $done = true;
        try {
            GF_Db::q(
                'CREATE TABLE IF NOT EXISTS `flyme_ai_events` (
                    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                    `owner_id` VARCHAR(190) NOT NULL,
                    `kind` VARCHAR(32) NOT NULL DEFAULT \'ledger\',
                    `payload` LONGTEXT NOT NULL,
                    `source` VARCHAR(64) NOT NULL DEFAULT \'muse\',
                    `status` VARCHAR(16) NOT NULL DEFAULT \'pending\',
                    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY (`id`),
                    KEY `idx_owner_status` (`owner_id`, `status`),
                    KEY `idx_owner_created` (`owner_id`, `created_at`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4',
                array()
            );
            GF_Db::q(
                'CREATE TABLE IF NOT EXISTS `flyme_ai_config` (
                    `owner_id` VARCHAR(190) NOT NULL,
                    `cfg` LONGTEXT NOT NULL,
                    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    PRIMARY KEY (`owner_id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4',
                array()
            );
        } catch (Exception $e) {
            /* 无 DDL 权限的老库：AI 接口降级，其余功能不受影响 */
        }
    }

    /** 每个账号一份自定义配置（归需选项 / 规则 / 自定义字段 / 自定义功能 / 任意设置）。 */
    public static function config($email)
    {
        self::ensureTables();
        $row = null;
        try {
            $row = GF_Db::one('SELECT `cfg` FROM `flyme_ai_config` WHERE `owner_id` = ?', array($email));
        } catch (Throwable $e) {
            /* 老库没有这张表 / 无 DDL 权限：降级为「无自定义配置」，接口本身照常可用 */
            $row = null;
        }
        $cfg = $row ? json_decode($row['cfg'], true) : array();
        if (!is_array($cfg)) {
            $cfg = array();
        }
        foreach (array('judgementOptions', 'judgementRules', 'customFields', 'actions') as $k) {
            if (!isset($cfg[$k]) || !is_array($cfg[$k])) {
                $cfg[$k] = array();
            }
        }
        if (!isset($cfg['settings']) || !is_array($cfg['settings'])) {
            $cfg['settings'] = array();
        }
        return $cfg;
    }

    public static function saveConfig($email, $cfg)
    {
        self::ensureTables();
        try {
            GF_Db::q(
                'INSERT INTO `flyme_ai_config` (`owner_id`, `cfg`) VALUES (?, ?)
                 ON DUPLICATE KEY UPDATE `cfg` = VALUES(`cfg`)',
                array($email, json_encode($cfg, JSON_UNESCAPED_UNICODE))
            );
            return true;
        } catch (Throwable $e) {
            return false;
        }
    }

    /* ==========================================================
     * API Key（沿用 v1.6.5）
     * ========================================================== */

    public static function keyMap()
    {
        $raw = GF_Auth::get('aiApiKeys', '');
        if (!is_string($raw) || $raw === '') {
            return array();
        }
        $map = json_decode($raw, true);
        return is_array($map) ? $map : array();
    }

    public static function saveKeyMap($map)
    {
        GF_Auth::set('aiApiKeys', json_encode($map, JSON_UNESCAPED_UNICODE));
    }

    public static function createKey($email, $name)
    {
        $map = self::keyMap();
        $plain = self::KEY_PREFIX . bin2hex(random_bytes(24));
        $id = substr(sha1($plain), 0, 12);
        $map[$plain] = array('id' => $id, 'email' => $email, 'name' => $name, 'createdAt' => time(), 'lastUsedAt' => 0);
        self::saveKeyMap($map);
        return array('id' => $id, 'key' => $plain, 'name' => $name);
    }

    public static function revokeKey($email, $id)
    {
        $map = self::keyMap();
        $removed = false;
        foreach ($map as $k => $v) {
            if ($v['id'] === $id && $v['email'] === $email) {
                unset($map[$k]);
                $removed = true;
            }
        }
        if ($removed) {
            self::saveKeyMap($map);
        }
        return $removed;
    }

    public static function listKeys($email)
    {
        $out = array();
        foreach (self::keyMap() as $k => $v) {
            if ($v['email'] === $email) {
                $out[] = array(
                    'id' => $v['id'], 'name' => $v['name'], 'prefix' => substr($k, 0, 12) . '…',
                    'createdAt' => date('Y-m-d H:i', $v['createdAt']),
                    'lastUsedAt' => $v['lastUsedAt'] ? date('Y-m-d H:i', $v['lastUsedAt']) : null,
                );
            }
        }
        return $out;
    }

    /** 解析请求身份：API Key 或用户会话 → owner email。 */
    public static function owner()
    {
        self::ensureTables();
        $token = flyme_bearer();
        if ($token) {
            if (strpos($token, self::KEY_PREFIX) === 0) {
                $map = self::keyMap();
                if (isset($map[$token])) {
                    $map[$token]['lastUsedAt'] = time();
                    self::saveKeyMap($map);
                    return $map[$token]['email'];
                }
                flyme_fail('API Key 无效或已撤销', 401);
            }
            $me = GF_Auth::currentUser();
            if ($me && !empty($me['email'])) {
                return $me['email'];
            }
        }
        flyme_fail('需要登录，或用 Authorization: Bearer <API Key> 鉴权', 401);
        return '';
    }

    /* ==========================================================
     * 快照读写（★支持全部 12 个集合 + 修改 / 删除 / 替换）
     * ========================================================== */

    public static function latestSnapshot($email)
    {
        $row = GF_Db::one(
            'SELECT `id`, `payload` FROM `flyme_backups` WHERE `owner_id` = ? ORDER BY `id` DESC LIMIT 1',
            array($email)
        );
        if (!$row) {
            return null;
        }
        $p = json_decode($row['payload'], true);
        if (!is_array($p)) {
            return null;
        }
        return array('id' => (int) $row['id'], 'payload' => $p);
    }

    /**
     * 把若干事件合并进一份快照 payload。
     *
     * 事件 payload 支持的键（全部可选、可混用）：
     *   <集合名>: [行…]            按 id upsert（新增或覆盖）
     *   patches: {集合: [{id,patch}]}   局部更新
     *   deletes: {集合: [id…]}      按 id 删除
     *   replace: {集合: [行…]}      整个集合替换
     *
     * @return array|null 发生变更返回新 payload，否则 null
     */
    public static function mergeIntoPayload($payload, $events)
    {
        if (!is_array($payload)) {
            $payload = array();
        }
        if (!isset($payload['collections']) || !is_array($payload['collections'])) {
            $payload['collections'] = array();
        }
        $cols = &$payload['collections'];
        $changed = false;
        $names = GF_AiSchema::COLLECTIONS;

        foreach ((array) $events as $ev) {
            $records = is_array($ev) ? (isset($ev['payload']) ? json_decode($ev['payload'], true) : $ev) : array();
            if (!is_array($records)) {
                continue;
            }
            // ① 顶层集合：按 id upsert
            foreach ($names as $col) {
                if (empty($records[$col]) || !is_array($records[$col])) {
                    continue;
                }
                if (!isset($cols[$col]) || !is_array($cols[$col])) {
                    $cols[$col] = array();
                }
                $index = array();
                foreach ($cols[$col] as $i => $row) {
                    if (is_array($row) && isset($row['id'])) {
                        $index[(string) $row['id']] = $i;
                    }
                }
                foreach ($records[$col] as $row) {
                    if (!is_array($row)) {
                        continue;
                    }
                    $id = isset($row['id']) ? (string) $row['id'] : '';
                    if ($id !== '' && isset($index[$id])) {
                        $cols[$col][$index[$id]] = array_merge($cols[$col][$index[$id]], $row);
                    } else {
                        $cols[$col][] = $row;
                        if ($id !== '') {
                            $index[$id] = count($cols[$col]) - 1;
                        }
                    }
                    $changed = true;
                }
            }
            // ② 局部更新
            if (!empty($records['patches']) && is_array($records['patches'])) {
                foreach ($records['patches'] as $col => $ops) {
                    if (!in_array($col, $names, true) || !is_array($ops)) {
                        continue;
                    }
                    foreach ($ops as $op) {
                        if (!is_array($op) || empty($op['id']) || !isset($op['patch']) || !is_array($op['patch'])) {
                            continue;
                        }
                        foreach ((array) $cols[$col] as $i => $row) {
                            if (is_array($row) && isset($row['id']) && (string) $row['id'] === (string) $op['id']) {
                                $cols[$col][$i] = array_merge($row, $op['patch']);
                                $changed = true;
                                break;
                            }
                        }
                    }
                }
            }
            // ③ 删除
            if (!empty($records['deletes']) && is_array($records['deletes'])) {
                foreach ($records['deletes'] as $col => $ids) {
                    if (!in_array($col, $names, true) || !is_array($ids)) {
                        continue;
                    }
                    $kill = array();
                    foreach ($ids as $id) {
                        $kill[(string) $id] = true;
                    }
                    $before = isset($cols[$col]) ? count($cols[$col]) : 0;
                    $cols[$col] = array_values(array_filter((array) (isset($cols[$col]) ? $cols[$col] : array()), function ($r) use ($kill) {
                        return !(is_array($r) && isset($r['id']) && isset($kill[(string) $r['id']]));
                    }));
                    if (count($cols[$col]) !== $before) {
                        $changed = true;
                    }
                }
            }
            // ④ 整体替换
            if (!empty($records['replace']) && is_array($records['replace'])) {
                foreach ($records['replace'] as $col => $rows) {
                    if (!in_array($col, $names, true) || !is_array($rows)) {
                        continue;
                    }
                    $cols[$col] = array_values($rows);
                    $changed = true;
                }
            }
        }
        if (!$changed) {
            return null;
        }
        $n = 0;
        foreach ($names as $c) {
            if (isset($cols[$c]) && is_array($cols[$c])) {
                $n += count($cols[$c]);
            }
        }
        $payload['count'] = $n;
        if (empty($payload['app'])) {
            $payload['app'] = 'flyme-web';
        }
        if (empty($payload['version'])) {
            $payload['version'] = 1;
        }
        if (empty($payload['exportedAt'])) {
            $payload['exportedAt'] = gmdate('Y-m-d\TH:i:s\Z');
        }
        return $payload;
    }

    public static function writeSnapshot($backupId, $payload)
    {
        $json = json_encode($payload, JSON_UNESCAPED_UNICODE);
        $count = isset($payload['count']) ? (int) $payload['count'] : 0;
        GF_Db::q(
            'UPDATE `flyme_backups` SET `payload` = ?, `item_count` = ?, `bytes` = ? WHERE `id` = ?',
            array($json, $count, strlen($json), $backupId)
        );
    }

    /** 把某个事件写进最新快照（commit / mutate 后立刻可见）。 */
    private static function commitToSnapshot($email, $records)
    {
        $snap = self::latestSnapshot($email);
        if (!$snap) {
            return false;
        }
        $newPayload = self::mergeIntoPayload($snap['payload'], array(array('payload' => json_encode($records, JSON_UNESCAPED_UNICODE))));
        if ($newPayload === null) {
            return false;
        }
        self::writeSnapshot($snap['id'], $newPayload);
        return true;
    }

    /** 撤销待入账时，把该事件写入的记录从快照里一并剔除（不留残账）。 */
    private static function removeFromSnapshot($email, $events)
    {
        $snap = self::latestSnapshot($email);
        if (!$snap) {
            return false;
        }
        $kill = array();
        foreach ((array) $events as $ev) {
            $r = json_decode($ev['payload'], true);
            if (!is_array($r)) {
                continue;
            }
            foreach (GF_AiSchema::COLLECTIONS as $c) {
                if (empty($r[$c]) || !is_array($r[$c])) {
                    continue;
                }
                foreach ($r[$c] as $row) {
                    if (is_array($row) && isset($row['id'])) {
                        $kill[$c][(string) $row['id']] = true;
                    }
                }
            }
        }
        if (!$kill) {
            return false;
        }
        $cols = &$snap['payload']['collections'];
        $changed = false;
        foreach ($kill as $c => $ids) {
            if (empty($cols[$c]) || !is_array($cols[$c])) {
                continue;
            }
            $before = count($cols[$c]);
            $cols[$c] = array_values(array_filter($cols[$c], function ($row) use ($ids) {
                return !(is_array($row) && isset($row['id']) && isset($ids[(string) $row['id']]));
            }));
            if (count($cols[$c]) !== $before) {
                $changed = true;
            }
        }
        if (!$changed) {
            return false;
        }
        $n = 0;
        foreach (GF_AiSchema::COLLECTIONS as $c) {
            if (isset($cols[$c]) && is_array($cols[$c])) {
                $n += count($cols[$c]);
            }
        }
        $snap['payload']['count'] = $n;
        self::writeSnapshot($snap['id'], $snap['payload']);
        return true;
    }

    /* ==========================================================
     * 待入账箱
     * ========================================================== */

    public static function pendingEvents($email, $limit = 100)
    {
        self::ensureTables();
        $rows = GF_Db::rows(
            'SELECT `id`, `kind`, `payload`, `source`, `created_at` FROM `flyme_ai_events`
             WHERE `owner_id` = ? AND `status` = \'pending\' ORDER BY `id` ASC LIMIT ' . (int) $limit,
            array($email)
        );
        $out = array();
        foreach ((array) $rows as $r) {
            $records = json_decode($r['payload'], true);
            if (!is_array($records)) {
                $records = array();
            }
            $sum = GF_AiSchema::summarize($records);
            $out[] = array(
                'id' => (int) $r['id'],
                'kind' => $r['kind'],
                'source' => $r['source'],
                'createdAt' => $r['created_at'],
                'records' => $records,
                'summary' => $sum['items'],
                'itemCount' => $sum['total'],
            );
        }
        return $out;
    }

    public static function addEvent($email, $kind, $records, $source = 'muse')
    {
        self::ensureTables();
        $json = json_encode($records, JSON_UNESCAPED_UNICODE);
        GF_Db::q(
            'INSERT INTO `flyme_ai_events` (`owner_id`, `kind`, `payload`, `source`, `status`) VALUES (?, ?, ?, ?, \'pending\')',
            array($email, $kind, $json, $source)
        );
        $id = (int) GF_Db::insertId();
        try {
            GF_Db::q(
                'DELETE FROM `flyme_ai_events` WHERE `owner_id` = ? AND `status` = \'pending\' AND `id` < ?',
                array($email, $id - self::MAX_PENDING)
            );
        } catch (Exception $e) {
            /* 清理失败不影响记账 */
        }
        return $id;
    }

    public static function markApplied($email, $ids)
    {
        self::ensureTables();
        $ids = array_values(array_filter(array_map('intval', (array) $ids)));
        if (!$ids) {
            return 0;
        }
        $in = implode(',', $ids);
        GF_Db::q(
            'UPDATE `flyme_ai_events` SET `status` = \'applied\' WHERE `owner_id` = ? AND `id` IN (' . $in . ')',
            array($email)
        );
        return count($ids);
    }

    public static function mergePendingIntoSnapshot($email, &$payload)
    {
        $events = self::pendingEvents($email, self::MAX_PENDING);
        if (!$events) {
            return false;
        }
        $merged = self::mergeIntoPayload($payload, $events);
        if ($merged !== null) {
            $payload = $merged;
            $ids = array();
            foreach ($events as $e) {
                $ids[] = $e['id'];
            }
            self::markApplied($email, $ids);
            return true;
        }
        return false;
    }

    /** 把待入账事件并入内存集合（读 / 问账都要算，AI 记完立刻问得到）。 */
    public static function withPending($email, $collections)
    {
        $events = self::pendingEvents($email, self::MAX_PENDING);
        if (!$events) {
            return $collections;
        }
        $boxes = array();
        foreach ($events as $ev) {
            $boxes[] = array('payload' => json_encode($ev['records'], JSON_UNESCAPED_UNICODE));
        }
        $tmp = array('collections' => $collections);
        $merged = self::mergeIntoPayload($tmp, $boxes);
        return $merged !== null ? $merged['collections'] : $collections;
    }

    /** 当前完整集合（快照 + 待入账）。 */
    private static function collectionsOf($email)
    {
        $snap = self::latestSnapshot($email);
        $cols = $snap && isset($snap['payload']['collections']) ? $snap['payload']['collections'] : array();
        return self::withPending($email, $cols);
    }

    /** 把集合里所有 judgement 归一到客户端枚举（修 v1.6.5 中英文不一致的历史问题）。 */
    private static function normalizeCollections($cols, $cfg)
    {
        if (!isset($cols['valueRecords']) || !is_array($cols['valueRecords'])) {
            return $cols;
        }
        foreach ($cols['valueRecords'] as $i => $r) {
            if (is_array($r)) {
                $cols['valueRecords'][$i]['judgement'] = GF_AiSchema::judgement(
                    isset($r['judgement']) ? $r['judgement'] : 'xu', $cfg['judgementOptions']
                );
            }
        }
        return $cols;
    }

    /* ==========================================================
     * 写入编排
     * ========================================================== */

    /**
     * 把通用操作列表转成一份「事件 payload」。
     * operations: [{op,collection,record|records|patch|id|ids}, …]
     */
    private static function operationsToRecords($operations, $cfg, $defaultSource = 'muse')
    {
        $out = array();
        $names = GF_AiSchema::COLLECTIONS;
        $skip = array('op', 'collection', 'kind', 'record', 'records', 'patch', 'id', 'ids', 'source', 'dryRun');
        foreach ((array) $operations as $op) {
            if (!is_array($op)) {
                continue;
            }
            $col = isset($op['collection']) ? (string) $op['collection'] : '';
            if ($col === '' && isset($op['kind'])) {
                $k = (string) $op['kind'];
                $map = array('ledger' => 'valueRecords', 'goods' => 'goods', 'subscription' => 'subscriptions', 'sub' => 'subscriptions');
                $col = isset($map[$k]) ? $map[$k] : $k;
            }
            if (!in_array($col, $names, true)) {
                flyme_fail('未知集合：' . $col . '（可用集合见 /api/ai/schema）', 400);
            }
            $action = isset($op['op']) ? (string) $op['op'] : 'upsert';
            if ($action === 'upsert' || $action === 'insert' || $action === 'create') {
                $rows = isset($op['records']) ? (array) $op['records'] : array(isset($op['record']) ? $op['record'] : $op);
                foreach ($rows as $row) {
                    if (!is_array($row)) {
                        continue;
                    }
                    $clean = $row;
                    foreach ($skip as $s) {
                        unset($clean[$s]);
                    }
                    $clean = GF_AiSchema::normalizeRow($col, $clean, $cfg);
                    if ($clean !== null) {
                        $out[$col][] = $clean;
                    }
                }
            } elseif ($action === 'update' || $action === 'patch') {
                $id = isset($op['id']) ? (string) $op['id'] : '';
                $patch = isset($op['patch']) ? (array) $op['patch'] : $op;
                foreach ($skip as $s) {
                    unset($patch[$s]);
                }
                if ($id === '' || !$patch) {
                    continue;
                }
                if ($col === 'valueRecords' && isset($patch['judgement'])) {
                    $patch['judgement'] = GF_AiSchema::judgement($patch['judgement'], $cfg['judgementOptions']);
                }
                $out['patches'][$col][] = array('id' => $id, 'patch' => $patch);
            } elseif ($action === 'delete' || $action === 'remove') {
                $ids = isset($op['ids']) ? (array) $op['ids'] : array(isset($op['id']) ? $op['id'] : '');
                foreach ($ids as $id) {
                    if ((string) $id !== '') {
                        $out['deletes'][$col][] = (string) $id;
                    }
                }
            } elseif ($action === 'replace' || $action === 'set') {
                $rows = isset($op['records']) ? (array) $op['records'] : array();
                $clean = array();
                foreach ($rows as $row) {
                    if (is_array($row)) {
                        $clean[] = GF_AiSchema::normalizeRow($col, $row, $cfg);
                    }
                }
                $out['replace'][$col] = $clean;
            }
        }
        return $out;
    }

    /** 写入一份 records（事件 + 快照），返回事件 id。 */
    private static function persistRecords($email, $records, $source = 'muse', $dryRun = false)
    {
        $sum = GF_AiSchema::summarize($records);
        if ($dryRun) {
            return array('dryRun' => true, 'records' => $records, 'itemCount' => $sum['total'], 'summary' => $sum['items']);
        }
        if ($sum['total'] === 0) {
            return array('committed' => 0, 'records' => $records, 'itemCount' => 0, 'eventId' => 0, 'mergedToSnapshot' => false);
        }
        $kind = 'mutate';
        foreach (GF_AiSchema::COLLECTIONS as $c) {
            if (!empty($records[$c])) {
                $kind = $c;
                break;
            }
        }
        $eventId = self::addEvent($email, $kind, $records, $source);
        $merged = self::commitToSnapshot($email, $records);
        return array(
            'committed' => $sum['total'], 'records' => $records, 'itemCount' => $sum['total'],
            'eventId' => $eventId, 'mergedToSnapshot' => $merged, 'summary' => $sum['items'],
            'next' => '客户端可在 AI 接入页逐条确认后合并；或 GET /api/ai/inbox 拉取',
        );
    }

    /* ==========================================================
     * 路由
     * ========================================================== */

    public static function handle($path, $method)
    {
        $sub = substr($path, strlen('/api/ai/'));

        if ($sub === 'openapi.json' && $method === 'GET') {
            self::openapi();
        }
        if ($sub === 'keys/bootstrap' && $method === 'POST') {
            self::bootstrap();
        }

        $email = self::owner();
        $cfg = self::config($email);

        switch ($sub) {
            case 'schema':
                self::schema($email, $cfg);
                break;
            case 'context':
                self::context($email, $cfg);
                break;
            case 'collections':
                self::collections($email, $cfg);
                break;
            case 'query':
                self::query($email, $cfg);
                break;
            case 'mutate':
                self::mutate($email, $cfg);
                break;
            case 'categories':
                self::categories($email, $cfg, $method);
                break;
            case 'options':
                self::options($email, $cfg, $method);
                break;
            case 'actions':
                self::actions($email, $cfg, $method);
                break;
            case 'actions/run':
                self::runAction($email, $cfg);
                break;
            case 'parse':
                self::parse($email, $cfg);
                break;
            case 'commit':
                self::commit($email, $cfg);
                break;
            case 'ask':
                self::ask($email, $cfg);
                break;
            case 'inbox':
                if ($method === 'DELETE') {
                    self::inboxDelete($email);
                } else {
                    self::inbox($email);
                }
                break;
            case 'inbox/apply':
                self::inboxApply($email);
                break;
            case 'keys':
                self::keys($email, $method);
                break;
            default:
                flyme_fail('未知的 AI 接口：' . $sub . '（可用端点见 /api/ai/openapi.json）', 404);
        }
    }

    /* ---------- 自描述 ---------- */

    private static function schema($email, $cfg)
    {
        $collections = GF_AiSchema::collections($cfg['customFields']);
        $cols = self::collectionsOf($email);
        $counts = array();
        foreach (GF_AiSchema::COLLECTIONS as $c) {
            $counts[$c] = isset($cols[$c]) && is_array($cols[$c]) ? count($cols[$c]) : 0;
        }
        flyme_ok(array(
            'version' => '1.6.6',
            'collections' => $collections,
            'collectionNames' => GF_AiSchema::COLLECTIONS,
            'counts' => $counts,
            'judgementOptions' => array_merge(GF_AiSchema::defaultJudgements(), $cfg['judgementOptions']),
            'judgementRules' => $cfg['judgementRules'],
            'customFields' => $cfg['customFields'],
            'actions' => array_values($cfg['actions']),
            'settings' => $cfg['settings'],
            'categories' => isset($cols['categories']) ? $cols['categories'] : NawuAI::defaultCategories(),
            'rules' => array(
                'additionalFields' => true,
                'note' => '所有集合都允许附加任意自定义字段，写入时原样保留；用 /api/ai/options 声明 customFields 可让字段出现在字典里。',
                'write' => 'POST /api/ai/mutate（通用增删改）或 POST /api/ai/commit（items / operations）',
                'read' => 'GET /api/ai/collections 或 POST /api/ai/query',
                'confirm' => '写入先落「云端待入账」，用户在 AI 接入页逐条确认后才进本机；DELETE /api/ai/inbox 可撤销',
            ),
        ));
    }

    private static function context($email, $cfg)
    {
        $cols = self::normalizeCollections(self::collectionsOf($email), $cfg);
        $records = isset($cols['valueRecords']) ? $cols['valueRecords'] : array();
        $goods = isset($cols['goods']) ? $cols['goods'] : array();
        $subs = isset($cols['subscriptions']) ? $cols['subscriptions'] : array();
        $categories = isset($cols['categories']) ? $cols['categories'] : NawuAI::defaultCategories();
        $today = NawuAI::today();
        $range = array('start' => date('Y-m-01'), 'end' => date('Y-m-t'));
        $income = 0;
        $expense = 0;
        foreach ((array) $records as $r) {
            $d = isset($r['date']) ? $r['date'] : '';
            if ($d < $range['start'] || $d > $range['end']) {
                continue;
            }
            $amt = (float) (isset($r['amount']) ? $r['amount'] : 0);
            if (isset($r['type']) && $r['type'] === 'income') {
                $income += $amt;
            } else {
                $expense += $amt;
            }
        }
        $monthlySub = 0;
        foreach ((array) $subs as $s) {
            $a = (float) (isset($s['amount']) ? $s['amount'] : 0);
            $e = max(1, (int) (isset($s['every']) ? $s['every'] : 1));
            $p = isset($s['period']) ? $s['period'] : 'month';
            if ($p === 'year') {
                $monthlySub += $a / (12 * $e);
            } elseif ($p === 'week') {
                $monthlySub += $a * 52 / (12 * $e);
            } else {
                $monthlySub += $a / $e;
            }
        }
        flyme_ok(array(
            'user' => array('email' => $email),
            'today' => $today,
            'collections' => GF_AiSchema::COLLECTIONS,
            'schemaUrl' => self::baseUrl() . '/api/ai/schema',
            'categories' => $categories,
            'judgementOptions' => array_merge(GF_AiSchema::defaultJudgements(), $cfg['judgementOptions']),
            'judgementRules' => $cfg['judgementRules'],
            'customFields' => $cfg['customFields'],
            'actions' => array_values($cfg['actions']),
            'goods' => array_values((array) $goods),
            'subscriptions' => array_values((array) $subs),
            'monthlySubscriptionCost' => NawuAI::money($monthlySub),
            'recentRecords' => array_slice((array) $records, -20),
            'monthly' => array('income' => NawuAI::money($income), 'expense' => NawuAI::money($expense)),
            'capabilities' => array(
                'record' => '生活流 / 物品 / 订阅 / 账单 / 分类 / 心愿 / 冷静期 / 情绪 / 时间 / 打卡 / 提醒 / 心墙 —— 全部 12 个集合任意字段读写',
                'customize' => '自定义归需选项与判定规则、自定义分类、自定义字段、注册自定义功能（actions）',
                'ask' => '花了多少 / 值不值 / 日均成本 / 订阅摊销 / 归需否结构',
                'note' => '文本解析为服务端规则引擎；强模型可直接用 /api/ai/mutate 写任意结构化数据',
            ),
        ));
    }

    /* ---------- 通用读取 ---------- */

    private static function collections($email, $cfg)
    {
        $cols = self::normalizeCollections(self::collectionsOf($email), $cfg);
        $name = isset($_GET['name']) ? (string) $_GET['name'] : '';
        if ($name !== '' && !in_array($name, GF_AiSchema::COLLECTIONS, true)) {
            flyme_fail('未知集合：' . $name, 400);
        }
        $limit = isset($_GET['limit']) ? max(1, min(1000, (int) $_GET['limit'])) : 200;
        $offset = isset($_GET['offset']) ? max(0, (int) $_GET['offset']) : 0;
        $filter = isset($_GET['filter']) ? json_decode((string) $_GET['filter'], true) : array();
        $out = array('collections' => array(), 'total' => array());
        $names = $name !== '' ? array($name) : GF_AiSchema::COLLECTIONS;
        foreach ($names as $c) {
            $rows = isset($cols[$c]) && is_array($cols[$c]) ? array_values($cols[$c]) : array();
            if (is_array($filter) && $filter) {
                $rows = array_values(array_filter($rows, function ($r) use ($filter) {
                    return self::matchRow($r, $filter);
                }));
            }
            $out['total'][$c] = count($rows);
            $out['collections'][$c] = array_slice($rows, $offset, $limit);
        }
        flyme_ok($out);
    }

    private static function matchRow($row, $filter)
    {
        if (!is_array($row)) {
            return false;
        }
        foreach ((array) $filter as $k => $v) {
            if ($k === '$or' && is_array($v)) {
                $hit = false;
                foreach ($v as $sub) {
                    if (self::matchRow($row, $sub)) {
                        $hit = true;
                        break;
                    }
                }
                if (!$hit) {
                    return false;
                }
                continue;
            }
            // 支持 {"amount":{"$gte":100}} 这类运算符
            if (is_array($v)) {
                $val = isset($row[$k]) ? $row[$k] : null;
                foreach ($v as $op => $target) {
                    if ($op === '$gte' && !($val >= $target)) { return false; }
                    if ($op === '$lte' && !($val <= $target)) { return false; }
                    if ($op === '$gt' && !($val > $target)) { return false; }
                    if ($op === '$lt' && !($val < $target)) { return false; }
                    if ($op === '$ne' && $val == $target) { return false; }
                    if ($op === '$contains' && mb_strpos((string) $val, (string) $target, 0, 'UTF-8') === false) { return false; }
                    if ($op === '$in' && !in_array($val, (array) $target, false)) { return false; }
                }
                continue;
            }
            if (!isset($row[$k]) || $row[$k] != $v) {
                return false;
            }
        }
        return true;
    }

    private static function query($email, $cfg)
    {
        $col = flyme_str(flyme_param('collection', flyme_param('name', '')), 60);
        if ($col === '' || !in_array($col, GF_AiSchema::COLLECTIONS, true)) {
            flyme_fail('需要有效的 collection（见 /api/ai/schema）', 400);
        }
        $cols = self::normalizeCollections(self::collectionsOf($email), $cfg);
        $rows = isset($cols[$col]) && is_array($cols[$col]) ? array_values($cols[$col]) : array();
        $filter = flyme_param('filter', array());
        if (is_array($filter) && $filter) {
            $rows = array_values(array_filter($rows, function ($r) use ($filter) {
                return self::matchRow($r, $filter);
            }));
        }
        $sortBy = flyme_str(flyme_param('sortBy', ''), 60);
        if ($sortBy !== '') {
            $desc = (bool) flyme_param('desc', false);
            usort($rows, function ($a, $b) use ($sortBy, $desc) {
                $x = is_array($a) && isset($a[$sortBy]) ? $a[$sortBy] : null;
                $y = is_array($b) && isset($b[$sortBy]) ? $b[$sortBy] : null;
                $c = is_numeric($x) && is_numeric($y) ? ($x - $y) : strcmp((string) $x, (string) $y);
                return $desc ? -$c : $c;
            });
        }
        $total = count($rows);
        $offset = max(0, (int) flyme_param('offset', 0));
        $limit = max(1, min(1000, (int) flyme_param('limit', 100)));
        $rows = array_slice($rows, $offset, $limit);
        $fields = flyme_param('fields', array());
        if (is_array($fields) && $fields) {
            $rows = array_map(function ($r) use ($fields) {
                $o = array();
                foreach ($fields as $f) {
                    if (is_array($r) && array_key_exists($f, $r)) {
                        $o[$f] = $r[$f];
                    }
                }
                return $o;
            }, $rows);
        }
        flyme_ok(array('collection' => $col, 'total' => $total, 'rows' => $rows, 'offset' => $offset, 'limit' => $limit));
    }

    /* ---------- 通用写入 ---------- */

    private static function mutate($email, $cfg)
    {
        $ops = flyme_param('operations', flyme_param('ops', array()));
        if (!is_array($ops) || !$ops) {
            flyme_fail('需要 operations 数组，例如 [{"op":"upsert","collection":"goods","record":{"name":"耳机","price":899,"note":"…","extraFees":[{"name":"手续费","amount":3}]}}]', 400);
        }
        $records = self::operationsToRecords($ops, $cfg);
        $res = self::persistRecords($email, $records, flyme_str(flyme_param('source', 'muse'), 60), (bool) flyme_param('dryRun', false));
        flyme_ok($res);
    }

    /* ---------- 自定义分类 ---------- */

    private static function categories($email, $cfg, $method)
    {
        $cols = self::collectionsOf($email);
        $list = isset($cols['categories']) && is_array($cols['categories']) ? $cols['categories'] : NawuAI::defaultCategories();
        if ($method === 'GET') {
            $kind = isset($_GET['kind']) ? (string) $_GET['kind'] : '';
            if ($kind !== '') {
                $list = array_values(array_filter($list, function ($c) use ($kind) {
                    return is_array($c) && isset($c['kind']) && $c['kind'] === $kind;
                }));
            }
            flyme_ok(array('categories' => array_values($list), 'count' => count($list), 'kinds' => array('ledger', 'goods', 'sub')));
            return;
        }
        if ($method === 'DELETE') {
            $id = flyme_str(flyme_param('id', ''), 80);
            $name = flyme_str(flyme_param('name', ''), 80);
            $kind = flyme_str(flyme_param('kind', ''), 20);
            $ids = array();
            foreach ($list as $c) {
                if (!is_array($c)) { continue; }
                if (($id !== '' && isset($c['id']) && $c['id'] === $id)
                    || ($name !== '' && isset($c['name']) && $c['name'] === $name && ($kind === '' || (isset($c['kind']) && $c['kind'] === $kind)))) {
                    $ids[] = (string) $c['id'];
                }
            }
            if (!$ids) {
                flyme_fail('没有找到要删除的分类', 404);
            }
            $res = self::persistRecords($email, array('deletes' => array('categories' => $ids)), 'muse');
            flyme_ok(array('deleted' => $ids) + $res);
            return;
        }
        if ($method !== 'POST') {
            flyme_fail('不支持的方法', 405);
        }
        $items = flyme_param('items', null);
        if (!is_array($items)) {
            $items = array(flyme_param('category', flyme_body()));
        }
        $ops = array();
        foreach ($items as $it) {
            if (!is_array($it) || trim((string) (isset($it['name']) ? $it['name'] : '')) === '') {
                continue;
            }
            $kind = isset($it['kind']) ? (string) $it['kind'] : 'ledger';
            if (!in_array($kind, array('ledger', 'goods', 'sub'), true)) {
                flyme_fail('kind 只能是 ledger / goods / sub', 400);
            }
            $row = array(
                'id' => isset($it['id']) && $it['id'] !== '' ? (string) $it['id'] : 'cu_' . bin2hex(random_bytes(6)),
                'name' => flyme_str($it['name'], 40),
                'kind' => $kind,
                'icon' => isset($it['icon']) ? flyme_str($it['icon'], 60) : 'tag',
                'order' => isset($it['order']) ? (int) $it['order'] : 99,
            );
            $ops[] = array('op' => 'upsert', 'collection' => 'categories', 'record' => $row);
        }
        if (!$ops) {
            flyme_fail('需要 name（分类名），可用 items 批量传', 400);
        }
        $records = self::operationsToRecords($ops, $cfg);
        $res = self::persistRecords($email, $records, 'muse', (bool) flyme_param('dryRun', false));
        flyme_ok(array('added' => count($ops)) + $res);
    }

    /* ---------- 自定义配置（归需 / 字段 / 任意设置） ---------- */

    private static function options($email, $cfg, $method)
    {
        if ($method === 'GET') {
            flyme_ok(array(
                'judgementOptions' => array_merge(GF_AiSchema::defaultJudgements(), $cfg['judgementOptions']),
                'judgementRules' => $cfg['judgementRules'],
                'customFields' => $cfg['customFields'],
                'actions' => array_values($cfg['actions']),
                'settings' => $cfg['settings'],
                'help' => 'POST 本端点可合并更新任意键：judgementOptions / judgementRules / customFields / settings。settings 可放任意自定义配置。',
            ));
            return;
        }
        if ($method !== 'POST') {
            flyme_fail('不支持的方法', 405);
        }
        $body = flyme_body();
        foreach (array('judgementOptions', 'judgementRules', 'customFields', 'actions') as $k) {
            if (isset($body[$k]) && is_array($body[$k])) {
                $cfg[$k] = array_values($body[$k]);
            }
        }
        if (isset($body['settings']) && is_array($body['settings'])) {
            $cfg['settings'] = array_merge($cfg['settings'], $body['settings']);
        }
        // 也允许顶层任意键落到 settings，方便「添加任意功能配置」
        foreach ($body as $k => $v) {
            if (in_array($k, array('judgementOptions', 'judgementRules', 'customFields', 'actions', 'settings'), true)) {
                continue;
            }
            $cfg['settings'][$k] = $v;
        }
        self::saveConfig($email, $cfg);
        flyme_ok(array('saved' => true, 'options' => array(
            'judgementOptions' => array_merge(GF_AiSchema::defaultJudgements(), $cfg['judgementOptions']),
            'judgementRules' => $cfg['judgementRules'],
            'customFields' => $cfg['customFields'],
            'actions' => array_values($cfg['actions']),
            'settings' => $cfg['settings'],
        )));
    }

    /* ---------- 自定义功能（让 AI 自己扩展能力） ---------- */

    private static function actions($email, $cfg, $method)
    {
        if ($method === 'GET') {
            flyme_ok(array('actions' => array_values($cfg['actions']), 'count' => count($cfg['actions'])));
            return;
        }
        $name = flyme_str(flyme_param('name', ''), 60);
        if ($method === 'DELETE') {
            if ($name === '') {
                flyme_fail('需要 name', 400);
            }
            $before = count($cfg['actions']);
            $cfg['actions'] = array_values(array_filter($cfg['actions'], function ($a) use ($name) {
                return is_array($a) && isset($a['name']) && $a['name'] !== $name;
            }));
            self::saveConfig($email, $cfg);
            flyme_ok(array('deleted' => $before - count($cfg['actions']), 'actions' => $cfg['actions']));
            return;
        }
        if ($method !== 'POST') {
            flyme_fail('不支持的方法', 405);
        }
        if ($name === '') {
            flyme_fail('需要 name（功能名）', 400);
        }
        $ops = flyme_param('operations', flyme_param('ops', array()));
        if (!is_array($ops) || !$ops) {
            flyme_fail('需要 operations 模板数组，参数用 {{参数名}} 占位', 400);
        }
        $action = array(
            'name' => $name,
            'description' => flyme_str(flyme_param('description', ''), 300),
            'params' => is_array(flyme_param('params', array())) ? flyme_param('params', array()) : array(),
            'operations' => $ops,
            'createdAt' => gmdate('Y-m-d\TH:i:s\Z'),
        );
        $found = false;
        foreach ($cfg['actions'] as $i => $a) {
            if (is_array($a) && isset($a['name']) && $a['name'] === $name) {
                $cfg['actions'][$i] = $action;
                $found = true;
                break;
            }
        }
        if (!$found) {
            $cfg['actions'][] = $action;
        }
        self::saveConfig($email, $cfg);
        flyme_ok(array('saved' => true, 'created' => !$found, 'action' => $action));
    }

    private static function runAction($email, $cfg)
    {
        $name = flyme_str(flyme_param('name', ''), 60);
        if ($name === '') {
            flyme_fail('需要 name（要调用的功能名）', 400);
        }
        $tpl = null;
        foreach ($cfg['actions'] as $a) {
            if (is_array($a) && isset($a['name']) && $a['name'] === $name) {
                $tpl = $a;
                break;
            }
        }
        if (!$tpl) {
            flyme_fail('没有这个功能：' . $name . '（可用 GET /api/ai/actions 查看，POST 注册）', 404);
        }
        $params = flyme_param('params', array());
        if (!is_array($params)) {
            $params = array();
        }
        foreach ((array) (isset($tpl['params']) ? $tpl['params'] : array()) as $p) {
            if (!is_array($p) || empty($p['name'])) {
                continue;
            }
            $n = (string) $p['name'];
            if (!empty($p['required']) && !isset($params[$n])) {
                flyme_fail('缺少必填参数：' . $n, 400);
            }
            if (!isset($params[$n]) && isset($p['default'])) {
                $params[$n] = $p['default'];
            }
        }
        $ops = GF_AiSchema::renderTemplate($tpl['operations'], $params);
        $records = self::operationsToRecords($ops, $cfg);
        $res = self::persistRecords($email, $records, 'action:' . $name, (bool) flyme_param('dryRun', false));
        flyme_ok(array('action' => $name, 'params' => $params) + $res);
    }

    /* ---------- 解析 / 落库 / 问答 ---------- */

    private static function parse($email, $cfg)
    {
        $text = flyme_str(flyme_param('text', ''), 2000);
        if ($text === '') {
            flyme_fail('缺少 text', 400);
        }
        $cols = self::collectionsOf($email);
        $categories = isset($cols['categories']) ? $cols['categories'] : array();
        $draft = NawuAI::parseText($text, array('categories' => $categories));
        if (!empty($draft['items'])) {
            foreach ($draft['items'] as $i => $it) {
                $draft['items'][$i]['judgement'] = GF_AiSchema::judgement(isset($it['judgement']) ? $it['judgement'] : 'xu', $cfg['judgementOptions']);
                $custom = GF_AiSchema::judgementByRules($text, $cfg['judgementRules']);
                if ($custom !== '') {
                    $draft['items'][$i]['judgement'] = GF_AiSchema::judgement($custom, $cfg['judgementOptions']);
                }
            }
        }
        flyme_ok(array(
            'draft' => $draft,
            'judgementOptions' => array_merge(GF_AiSchema::defaultJudgements(), $cfg['judgementOptions']),
            'hint' => '可把 draft 直接回传给 /api/ai/commit 落库；也可用 /api/ai/mutate 写任意字段',
        ));
    }

    /**
     * 落库：支持 text / items / draft / operations 四种入参。
     * ★items 现在支持全字段透传：collection 指定任意集合，所有字段原样保留。
     */
    private static function commit($email, $cfg)
    {
        $dryRun = (bool) flyme_param('dryRun', false);
        $text = flyme_str(flyme_param('text', ''), 2000);
        $items = flyme_param('items', null);
        $draft = flyme_param('draft', null);
        $operations = flyme_param('operations', flyme_param('ops', null));

        $cols = self::collectionsOf($email);
        $categories = isset($cols['categories']) ? $cols['categories'] : array();

        if (is_array($operations) && $operations) {
            $records = self::operationsToRecords($operations, $cfg);
            flyme_ok(self::persistRecords($email, $records, flyme_str(flyme_param('source', 'muse'), 60), $dryRun));
        }

        if (is_array($items) && $items) {
            $records = self::itemsToRecords($items, $cfg, $text);
        } elseif (is_array($draft) && !empty($draft['items'])) {
            $records = self::itemsToRecords($draft['items'], $cfg, $text);
        } elseif ($text !== '') {
            $parsed = NawuAI::parseText($text, array('categories' => $categories));
            foreach ($parsed['items'] as $i => $it) {
                $custom = GF_AiSchema::judgementByRules($text, $cfg['judgementRules']);
                if ($custom !== '') {
                    $parsed['items'][$i]['judgement'] = $custom;
                }
            }
            $records = self::itemsToRecords($parsed['items'], $cfg, $text);
        } else {
            flyme_fail('需要 text、items、draft 或 operations 之一', 400);
        }

        $warnings = is_array($draft) && isset($draft['warnings']) ? $draft['warnings'] : array();
        $res = self::persistRecords($email, $records, 'muse', $dryRun);
        $res['warnings'] = $warnings;
        flyme_ok($res);
    }

    /**
     * items → 事件 payload。
     * 兼容 v1.6.5 的 kind: ledger/goods/subscription（goods 仍自动补一笔支出），
     * 同时把 item 里的所有额外字段（备注 / 手续费 / 图片 / 截止日 / 自定义字段）合并进生成行。
     */
    private static function itemsToRecords($items, $cfg, $text = '')
    {
        $out = array();
        $meta = array('kind', 'collection', 'op', 'id', 'ledgerCategoryId', 'categoryName', 'warnings', 'needsConfirm');
        foreach ((array) $items as $item) {
            if (!is_array($item)) {
                continue;
            }
            $col = '';
            if (!empty($item['collection'])) {
                $col = (string) $item['collection'];
            } elseif (!empty($item['kind'])) {
                $k = (string) $item['kind'];
                $map = array('ledger' => 'valueRecords', 'goods' => 'goods', 'subscription' => 'subscriptions', 'sub' => 'subscriptions');
                $col = isset($map[$k]) ? $map[$k] : $k;
            } else {
                $col = 'valueRecords';
            }
            if (!in_array($col, GF_AiSchema::COLLECTIONS, true)) {
                flyme_fail('未知集合：' . $col . '（见 /api/ai/schema）', 400);
            }

            // 兼容老 kind：走规则引擎生成基础行（含 goods 自动记支出）
            $isLegacy = empty($item['collection']) && in_array((isset($item['kind']) ? $item['kind'] : 'ledger'), array('ledger', 'goods', 'subscription'), true);
            if ($isLegacy) {
                $one = NawuAI::draftToRecords(array('items' => array($item)), array());
                foreach (array('valueRecords', 'goods', 'subscriptions') as $c) {
                    if (empty($one[$c])) {
                        continue;
                    }
                    foreach ($one[$c] as $row) {
                        // 把 item 里的额外字段透传进生成行（不动服务端生成的 id / 关联字段）
                        foreach ($item as $k => $v) {
                            if (in_array($k, $meta, true) || $k === 'amount' || $k === 'date' || $k === 'type') {
                                continue;
                            }
                            if ($c === 'goods' || ($c === 'valueRecords' && in_array($k, array('judgement', 'note', 'image', 'categoryId', 'currency'), true))) {
                                $row[$k] = $v;
                            }
                            if ($c === 'subscriptions') {
                                $row[$k] = $v;
                            }
                        }
                        $out[$c][] = GF_AiSchema::normalizeRow($c, $row, $cfg);
                    }
                }
                continue;
            }

            // 通用写入：所有字段原样保留
            $row = $item;
            foreach ($meta as $m) {
                unset($row[$m]);
            }
            if ($col === 'valueRecords') {
                $custom = GF_AiSchema::judgementByRules($text, $cfg['judgementRules']);
                if ($custom !== '') {
                    $row['judgement'] = $custom;
                }
                if (empty($row['date'])) {
                    $row['date'] = NawuAI::today();
                }
                if (empty($row['categoryId'])) {
                    $row['categoryId'] = 'cl0';
                }
                if (empty($row['currency'])) {
                    $row['currency'] = 'CNY';
                }
                if (empty($row['createdAt'])) {
                    $row['createdAt'] = gmdate('Y-m-d\TH:i:s\Z');
                }
            }
            if ($col === 'goods' && empty($row['price']) && isset($row['amount'])) {
                $row['price'] = $row['amount'];
            }
            if ($col === 'goods' && empty($row['buyDate']) && isset($row['date'])) {
                $row['buyDate'] = $row['date'];
            }
            if (($col === 'subscriptions' || $col === 'goods') && empty($row['name']) && isset($row['note'])) {
                $row['name'] = $row['note'];
            }
            $out[$col][] = GF_AiSchema::normalizeRow($col, $row, $cfg);
        }
        return $out;
    }

    private static function ask($email, $cfg)
    {
        $q = flyme_str(flyme_param('question', flyme_param('text', '')), 500);
        if ($q === '') {
            flyme_fail('缺少 question', 400);
        }
        $cols = self::normalizeCollections(self::collectionsOf($email), $cfg);
        // NawuAI 的归需汇总按中文键统计，这里做一次中英映射，保证问答口径与客户端一致
        $map = array('gui' => '归', 'xu' => '需', 'fou' => '否');
        if (isset($cols['valueRecords']) && is_array($cols['valueRecords'])) {
            foreach ($cols['valueRecords'] as $i => $r) {
                if (is_array($r) && isset($r['judgement'], $map[$r['judgement']])) {
                    $cols['valueRecords'][$i]['judgement'] = $map[$r['judgement']];
                }
            }
        }
        $ctx = array(
            'valueRecords' => isset($cols['valueRecords']) ? $cols['valueRecords'] : array(),
            'goods' => isset($cols['goods']) ? $cols['goods'] : array(),
            'subscriptions' => isset($cols['subscriptions']) ? $cols['subscriptions'] : array(),
            'today' => NawuAI::today(),
        );
        $out = NawuAI::ask($q, $ctx);
        flyme_ok(array('question' => $q, 'answer' => $out['answer'], 'data' => $out['data']));
    }

    /* ---------- 待入账箱（明细） ---------- */

    private static function inbox($email)
    {
        $events = self::pendingEvents($email, 200);
        $count = 0;
        foreach ($events as $e) {
            $count += $e['itemCount'];
        }
        flyme_ok(array('events' => $events, 'count' => $count, 'eventCount' => count($events)));
    }

    /** 撤销一条或多条待入账（同时从云端快照剔除，不留残账）。 */
    private static function inboxDelete($email)
    {
        self::ensureTables();
        $ids = flyme_param('ids', array());
        if (!is_array($ids) || !$ids) {
            $one = (int) flyme_param('id', 0);
            $ids = $one > 0 ? array($one) : array();
        }
        $ids = array_values(array_filter(array_map('intval', $ids)));
        if (!$ids) {
            flyme_fail('缺少 id 或 ids', 400);
        }
        $in = implode(',', $ids);
        $rows = GF_Db::rows(
            'SELECT `id`, `payload` FROM `flyme_ai_events` WHERE `owner_id` = ? AND `id` IN (' . $in . ')',
            array($email)
        );
        self::removeFromSnapshot($email, (array) $rows);
        GF_Db::q('DELETE FROM `flyme_ai_events` WHERE `owner_id` = ? AND `id` IN (' . $in . ')', array($email));
        flyme_ok(array('deleted' => count((array) $rows), 'snapshotCleaned' => true));
    }

    private static function inboxApply($email)
    {
        $ids = flyme_param('ids', array());
        $n = self::markApplied($email, (array) $ids);
        flyme_ok(array('applied' => $n));
    }

    /* ---------- Key ---------- */

    private static function bootstrap()
    {
        $file = GF_ROOT . '/storage/.ai-bootstrap';
        if (!is_file($file)) {
            flyme_fail('引导未开启', 404);
        }
        $expect = trim((string) @file_get_contents($file));
        $given = trim((string) flyme_param('token', ''));
        if ($expect === '' || $given === '' || !hash_equals($expect, $given)) {
            flyme_fail('引导凭证不正确', 403);
        }
        $email = strtolower(trim(flyme_str(flyme_param('email', ''), 190)));
        if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            flyme_fail('需要有效的 email（要绑定的纳物账号）', 400);
        }
        $k = self::createKey($email, flyme_str(flyme_param('name', 'Muse'), 60));
        @unlink($file);
        flyme_ok(array(
            'id' => $k['id'], 'email' => $email, 'key' => $k['key'],
            'usage' => 'Authorization: Bearer ' . $k['key'],
            'notice' => '引导文件已删除，此接口不再可用；请妥善保存该 Key',
        ));
    }

    private static function keys($email, $method)
    {
        if ($method === 'POST') {
            $name = flyme_str(flyme_param('name', 'Muse'), 60);
            $k = self::createKey($email, $name);
            flyme_ok(array(
                'id' => $k['id'], 'name' => $k['name'], 'key' => $k['key'],
                'usage' => 'Authorization: Bearer ' . $k['key'],
                'notice' => '这是明文，只显示这一次；请立刻保存到你的助手上',
            ));
        }
        if ($method === 'GET') {
            flyme_ok(array('keys' => self::listKeys($email)));
        }
        if ($method === 'DELETE') {
            $id = flyme_str(flyme_param('id', ''), 40);
            flyme_ok(array('revoked' => self::revokeKey($email, $id)));
        }
        flyme_fail('不支持的方法', 405);
    }

    /* ==========================================================
     * OpenAPI 3.1（AI 平台导入后即可发现全部能力）
     * ========================================================== */

    private static function openapi()
    {
        $base = self::baseUrl();
        $ref = function ($name) {
            return array('$ref' => '#/components/schemas/' . $name);
        };
        $jsonBody = function ($schema) {
            return array('required' => true, 'content' => array('application/json' => array('schema' => $schema)));
        };
        $ok = array('200' => array('description' => 'ok'));
        $item = array('type' => 'object', 'additionalProperties' => true, 'description' => '一行记录。可以包含 /api/ai/schema 里声明的全部字段及任意自定义字段。');
        $op = array(
            'type' => 'object',
            'properties' => array(
                'op' => array('type' => 'string', 'enum' => array('upsert', 'update', 'delete', 'replace'), 'description' => '默认 upsert'),
                'collection' => array('type' => 'string', 'enum' => GF_AiSchema::COLLECTIONS),
                'record' => $item,
                'records' => array('type' => 'array', 'items' => $item),
                'id' => array('type' => 'string'),
                'ids' => array('type' => 'array', 'items' => array('type' => 'string')),
                'patch' => array('type' => 'object', 'additionalProperties' => true),
            ),
            'required' => array('collection'),
        );

        $paths = array(
            '/api/ai/schema' => array('get' => array(
                'operationId' => 'nawu_schema', 'summary' => '获取全部字段字典与自定义配置',
                'description' => '调用前先读这里：12 个集合、每个字段的类型/含义/示例、当前分类、归需选项、自定义字段与自定义功能。',
                'responses' => $ok,
            )),
            '/api/ai/context' => array('get' => array(
                'operationId' => 'nawu_context', 'summary' => '获取纳物上下文',
                'description' => '分类表、物品库、订阅、最近流水、本月收支、每月订阅成本、归需选项、自定义功能。',
                'responses' => $ok,
            )),
            '/api/ai/collections' => array('get' => array(
                'operationId' => 'nawu_collections', 'summary' => '读取任意集合的全部记录',
                'parameters' => array(
                    array('name' => 'name', 'in' => 'query', 'schema' => array('type' => 'string', 'enum' => GF_AiSchema::COLLECTIONS), 'description' => '不填返回全部集合'),
                    array('name' => 'limit', 'in' => 'query', 'schema' => array('type' => 'integer', 'default' => 200)),
                    array('name' => 'offset', 'in' => 'query', 'schema' => array('type' => 'integer', 'default' => 0)),
                ),
                'responses' => $ok,
            )),
            '/api/ai/query' => array('post' => array(
                'operationId' => 'nawu_query', 'summary' => '多条件查询（过滤 / 排序 / 投影 / 分页）',
                'description' => 'filter 支持精确匹配与 $gte/$lte/$gt/$lt/$ne/$contains/$in/$or。',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'collection' => array('type' => 'string', 'enum' => GF_AiSchema::COLLECTIONS),
                    'filter' => array('type' => 'object', 'additionalProperties' => true, 'example' => array('date' => array('$gte' => '2026-11-01'))),
                    'sortBy' => array('type' => 'string'), 'desc' => array('type' => 'boolean'),
                    'fields' => array('type' => 'array', 'items' => array('type' => 'string')),
                    'limit' => array('type' => 'integer'), 'offset' => array('type' => 'integer'),
                ), 'required' => array('collection'))),
                'responses' => $ok,
            )),
            '/api/ai/mutate' => array('post' => array(
                'operationId' => 'nawu_mutate', 'summary' => '★通用写入：任意集合、任意字段的增删改',
                'description' => '可写物品、备注、手续费、图片、日期、截止日、每月金额、分类、归需、自定义字段等一切数据。写入先落云端待入账，用户确认后进本机。dryRun=true 可预演。',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'operations' => array('type' => 'array', 'items' => $op),
                    'dryRun' => array('type' => 'boolean'), 'source' => array('type' => 'string'),
                ), 'required' => array('operations'))),
                'responses' => $ok,
            )),
            '/api/ai/categories' => array(
                'get' => array('operationId' => 'nawu_categories_list', 'summary' => '列出分类', 'responses' => $ok),
                'post' => array('operationId' => 'nawu_categories_add', 'summary' => '★自行添加分类（生活流/物品/订阅）',
                    'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                        'kind' => array('type' => 'string', 'enum' => array('ledger', 'goods', 'sub')),
                        'name' => array('type' => 'string'), 'icon' => array('type' => 'string'), 'order' => array('type' => 'integer'),
                        'items' => array('type' => 'array', 'items' => array('type' => 'object')),
                    ))), 'responses' => $ok),
                'delete' => array('operationId' => 'nawu_categories_delete', 'summary' => '删除分类',
                    'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array('id' => array('type' => 'string'), 'name' => array('type' => 'string')))), 'responses' => $ok),
            ),
            '/api/ai/options' => array(
                'get' => array('operationId' => 'nawu_options_get', 'summary' => '读取自定义配置', 'responses' => $ok),
                'post' => array('operationId' => 'nawu_options_set', 'summary' => '★自定义「是否归需」选项 / 判定规则 / 字段 / 任意设置',
                    'description' => 'judgementOptions:[{value,label,aliases,color}]；judgementRules:[{value,keywords}]；customFields:[{collection,name,type,label}]；settings 可放任意配置。',
                    'requestBody' => $jsonBody(array('type' => 'object', 'additionalProperties' => true)), 'responses' => $ok),
            ),
            '/api/ai/actions' => array(
                'get' => array('operationId' => 'nawu_actions_list', 'summary' => '列出自定义功能', 'responses' => $ok),
                'post' => array('operationId' => 'nawu_actions_add', 'summary' => '★注册任意新功能（动作模板）',
                    'description' => 'operations 里用 {{参数名}} 占位，调用 /api/ai/actions/run 时替换。',
                    'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                        'name' => array('type' => 'string'), 'description' => array('type' => 'string'),
                        'params' => array('type' => 'array', 'items' => array('type' => 'object')),
                        'operations' => array('type' => 'array', 'items' => $op),
                    ), 'required' => array('name', 'operations'))), 'responses' => $ok),
                'delete' => array('operationId' => 'nawu_actions_delete', 'summary' => '删除自定义功能',
                    'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array('name' => array('type' => 'string')))), 'responses' => $ok),
            ),
            '/api/ai/actions/run' => array('post' => array(
                'operationId' => 'nawu_actions_run', 'summary' => '调用自定义功能',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'name' => array('type' => 'string'), 'params' => array('type' => 'object', 'additionalProperties' => true),
                    'dryRun' => array('type' => 'boolean'),
                ), 'required' => array('name'))), 'responses' => $ok,
            )),
            '/api/ai/parse' => array('post' => array(
                'operationId' => 'nawu_parse', 'summary' => '把一句话解析成记账草案',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'text' => array('type' => 'string', 'description' => '如「昨天买了个耳机 899」'),
                ), 'required' => array('text'))), 'responses' => $ok,
            )),
            '/api/ai/commit' => array('post' => array(
                'operationId' => 'nawu_commit', 'summary' => '落库记账（text / items / draft / operations 四选一）',
                'description' => 'items 里可用 collection 指定任意集合，所有字段原样保留；也可用 operations（同 mutate）。',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'text' => array('type' => 'string'),
                    'items' => array('type' => 'array', 'items' => $item),
                    'draft' => array('type' => 'object'),
                    'operations' => array('type' => 'array', 'items' => $op),
                    'dryRun' => array('type' => 'boolean'),
                ))), 'responses' => $ok,
            )),
            '/api/ai/ask' => array('post' => array(
                'operationId' => 'nawu_ask', 'summary' => '问账（含值不值）',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'question' => array('type' => 'string'),
                ), 'required' => array('question'))), 'responses' => $ok,
            )),
            '/api/ai/inbox' => array(
                'get' => array('operationId' => 'nawu_inbox', 'summary' => '拉取云端待入账（含逐条明细）', 'responses' => $ok),
                'delete' => array('operationId' => 'nawu_inbox_delete', 'summary' => '撤销待入账（同时清掉云端快照里的对应记录）',
                    'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                        'id' => array('type' => 'integer'), 'ids' => array('type' => 'array', 'items' => array('type' => 'integer')),
                    ))), 'responses' => $ok),
            ),
            '/api/ai/inbox/apply' => array('post' => array(
                'operationId' => 'nawu_inbox_apply', 'summary' => '确认已合并待入账记录',
                'requestBody' => $jsonBody(array('type' => 'object', 'properties' => array(
                    'ids' => array('type' => 'array', 'items' => array('type' => 'integer')),
                ), 'required' => array('ids'))), 'responses' => $ok,
            )),
        );

        $json = array(
            'openapi' => '3.1.0',
            'info' => array(
                'title' => '纳物 NaWu API',
                'version' => '1.6.6',
                'description' => '纳物全量数据 API：12 个集合任意字段读写 + 自定义分类/归需/字段/功能。'
                    . '认证 Authorization: Bearer <API Key 或用户 token>。'
                    . '建议顺序：schema → context → query/mutate → 用户在「AI 接入」页确认合并。'
                    . '写入先落云端待入账，不会直接改用户本机数据。',
            ),
            'servers' => array(array('url' => $base)),
            'components' => array(
                'securitySchemes' => array('bearerAuth' => array('type' => 'http', 'scheme' => 'bearer')),
                'schemas' => GF_AiSchema::openapiSchemas(),
            ),
            'security' => array(array('bearerAuth' => array())),
            'paths' => $paths,
        );
        flyme_json($json, 200);
    }

    public static function baseUrl()
    {
        $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
            || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
        $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'x.133388.xyz';
        $scheme = $https ? 'https' : 'http';
        return $scheme . '://' . $host;
    }
}
