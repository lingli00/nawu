<?php
if (!defined('GF_ROOT')) {
    http_response_code(403);
    exit;
}

/**
 * ★v1.6.5 · Muse / 外部智能体接入层
 *
 * 目标：让「对着 Muse 说一句话」就能完成纳物记账与查询。
 *
 * 能力面（全部只读写本人数据，按 owner 隔离）：
 *   GET  /api/ai/openapi.json  OpenAPI 3.1 规范（供 Muse / 任意 Agent 导入）
 *   GET  /api/ai/context       上下文：分类、物品库、订阅、最近流水、统计口径
 *   POST /api/ai/parse         自然语言 → 结构化草案（规则引擎，见 NawuAI）
 *   POST /api/ai/commit        草案/文本 → 落库（写入「云端待入账箱」并合并最新快照）
 *   POST /api/ai/ask           数值问答（含「值不值」评估）
 *   GET  /api/ai/inbox         待入账事件（客户端增量拉取用）
 *   POST /api/ai/inbox/apply   标记事件已被客户端合并
 *   POST /api/ai/keys          签发个人 API Key（nawu_sk_…）
 *   GET  /api/ai/keys          列出自己的 API Key
 *   DELETE /api/ai/keys        撤销 API Key
 *
 * 鉴权两种：
 *   ① Authorization: Bearer <用户 token>（App/网页版/小程序同款会话）
 *   ② Authorization: Bearer nawu_sk_xxx（给 Muse 用的长期 API Key）
 *
 * ★为什么需要「待入账箱」：
 *   纳物是本地优先架构，服务端只保存**整份快照**（flyme_backups）。
 *   如果直接改快照，客户端下一次自动备份会把整份覆盖回去，Muse 记的账就丢了。
 *   所以：Muse 的记录先进「待入账箱」（flyme_ai_events），
 *   ①立刻合并进最新快照（马上能在「云备份 → 恢复」看到）；
 *   ②客户端推新快照时，服务端自动把待入账事件再合并一次（保证不丢）；
 *   ③客户端可用 /api/ai/inbox 增量拉取并合并到本地（最理想的路径）。
 */
class GF_Ai
{
    /** API Key 前缀（便于识别与吊销） */
    const KEY_PREFIX = 'nawu_sk_';

    /** 单个用户最多保留多少条待入账事件（超出丢弃最旧的 pending） */
    const MAX_PENDING = 500;

    /* ==========================================================
     * 表与设置
     * ========================================================== */

    /** 惰性建表（与 Schema::ensureRulesTable 同款做法，不改动任何既有表）。 */
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
        } catch (Exception $e) {
            /* 无 DDL 权限的老库：AI 接口降级为不可用，其余功能不受影响 */
        }
    }

    /* ==========================================================
     * API Key
     * ========================================================== */

    /** 读全部 API Key 映射（存在 flyme_admin_settings，无建表成本）。 */
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

    /** 签发一把 API Key。 */
    public static function createKey($email, $name)
    {
        $map = self::keyMap();
        $plain = self::KEY_PREFIX . bin2hex(random_bytes(24));
        $id = substr(sha1($plain), 0, 12);
        $map[$plain] = array(
            'id' => $id,
            'email' => $email,
            'name' => $name,
            'createdAt' => time(),
            'lastUsedAt' => 0,
        );
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

    /** 列出自己的 Key（不返回明文，只返回 id/名字/时间）。 */
    public static function listKeys($email)
    {
        $out = array();
        foreach (self::keyMap() as $k => $v) {
            if ($v['email'] === $email) {
                $out[] = array(
                    'id' => $v['id'],
                    'name' => $v['name'],
                    'prefix' => substr($k, 0, 12) . '…',
                    'createdAt' => date('Y-m-d H:i', $v['createdAt']),
                    'lastUsedAt' => $v['lastUsedAt'] ? date('Y-m-d H:i', $v['lastUsedAt']) : null,
                );
            }
        }
        return $out;
    }

    /* ==========================================================
     * 身份识别
     * ========================================================== */

    /**
     * 解析请求身份：API Key 或用户会话 → owner email。
     * @return string '' 表示匿名（仅 openapi/health 允许）
     */
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
     * 快照读写
     * ========================================================== */

    /** 读用户最新一份备份快照（解码后的 payload）。 */
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

    /** 把待入账事件合并进快照（按 id 去重），返回是否发生变更。 */
    public static function mergeIntoPayload($payload, $events)
    {
        if (!is_array($payload)) {
            $payload = array();
        }
        if (!isset($payload['collections']) || !is_array($payload['collections'])) {
            $payload['collections'] = array();
        }
        $changed = false;
        foreach ((array) $events as $ev) {
            $records = json_decode($ev['payload'], true);
            if (!is_array($records)) {
                continue;
            }
            foreach (array('valueRecords', 'goods', 'subscriptions') as $col) {
                if (empty($records[$col]) || !is_array($records[$col])) {
                    continue;
                }
                if (!isset($payload['collections'][$col]) || !is_array($payload['collections'][$col])) {
                    $payload['collections'][$col] = array();
                }
                $existing = array();
                foreach ($payload['collections'][$col] as $row) {
                    if (isset($row['id'])) {
                        $existing[$row['id']] = true;
                    }
                }
                foreach ($records[$col] as $row) {
                    if (isset($row['id']) && isset($existing[$row['id']])) {
                        continue;
                    }
                    $payload['collections'][$col][] = $row;
                    $changed = true;
                }
            }
        }
        if ($changed) {
            $g = isset($payload['collections']['goods']) ? count($payload['collections']['goods']) : 0;
            $s = isset($payload['collections']['subscriptions']) ? count($payload['collections']['subscriptions']) : 0;
            $v = isset($payload['collections']['valueRecords']) ? count($payload['collections']['valueRecords']) : 0;
            $payload['count'] = $g + $s + $v;
            if (empty($payload['app'])) {
                $payload['app'] = 'flyme-web';
            }
            if (empty($payload['version'])) {
                $payload['version'] = 1;
            }
            if (empty($payload['exportedAt'])) {
                $payload['exportedAt'] = gmdate('Y-m-d\TH:i:s\Z');
            }
        }
        return $changed ? $payload : null;
    }

    /** 把合并结果写回备份行。 */
    public static function writeSnapshot($backupId, $payload)
    {
        $json = json_encode($payload, JSON_UNESCAPED_UNICODE);
        $count = 0;
        if (isset($payload['collections'])) {
            foreach (array('goods', 'subscriptions', 'valueRecords') as $c) {
                if (isset($payload['collections'][$c]) && is_array($payload['collections'][$c])) {
                    $count += count($payload['collections'][$c]);
                }
            }
        }
        GF_Db::q(
            'UPDATE `flyme_backups` SET `payload` = ?, `item_count` = ?, `bytes` = ? WHERE `id` = ?',
            array($json, $count, strlen($json), $backupId)
        );
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
            $out[] = array(
                'id' => (int) $r['id'],
                'kind' => $r['kind'],
                'source' => $r['source'],
                'createdAt' => $r['created_at'],
                'records' => is_array($records) ? $records : array(),
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
        // 控制积压
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

    /**
     * 客户端推快照时调用：把该用户还没落地的待入账事件合并进新快照。
     * ★这是「Muse 记的账不会被自动备份冲掉」的关键。
     */
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

    /**
     * 把「待入账箱」里的记录并入内存集合（不落库）。
     *
     * ★为什么问账也要算：用户让 Muse 记一笔后立刻问「这个月花了多少」，
     * 如果只看快照会答不到刚记的那笔 —— 体验上就是「说完没生效」。
     */
    public static function withPending($email, $collections)
    {
        $events = self::pendingEvents($email, self::MAX_PENDING);
        if (!$events) {
            return $collections;
        }
        foreach ($events as $ev) {
            $records = $ev['records'];
            foreach (array('valueRecords', 'goods', 'subscriptions') as $col) {
                if (empty($records[$col]) || !is_array($records[$col])) {
                    continue;
                }
                if (!isset($collections[$col]) || !is_array($collections[$col])) {
                    $collections[$col] = array();
                }
                foreach ($records[$col] as $row) {
                    $collections[$col][] = $row;
                }
            }
        }
        return $collections;
    }

    /* ==========================================================
     * 路由
     * ========================================================== */

    public static function handle($path, $method)
    {
        $sub = substr($path, strlen('/api/ai/'));

        // 公开：OpenAPI 规范
        if ($sub === 'openapi.json' && $method === 'GET') {
            self::openapi();
        }
        // 公开（但需一次性文件凭证）：首把 API Key 引导，必须在鉴权之前处理
        if ($sub === 'keys/bootstrap' && $method === 'POST') {
            self::bootstrap();
        }

        $email = self::owner();

        switch ($sub) {
            case 'context':
                self::context($email);
                break;
            case 'parse':
                self::parse($email);
                break;
            case 'commit':
                self::commit($email);
                break;
            case 'ask':
                self::ask($email);
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
                flyme_fail('未知的 AI 接口：' . $sub, 404);
        }
    }

    /** 上下文：给 Muse 看的「你能对什么数据做什么」。 */
    private static function context($email)
    {
        $snap = self::latestSnapshot($email);
        $collections = $snap && isset($snap['payload']['collections']) ? $snap['payload']['collections'] : array();
        // ★把尚未合并的「云端记账」也算进去，Muse 记完立刻问就能看到
        $collections = self::withPending($email, $collections);
        $records = isset($collections['valueRecords']) ? $collections['valueRecords'] : array();
        $goods = isset($collections['goods']) ? $collections['goods'] : array();
        $subs = isset($collections['subscriptions']) ? $collections['subscriptions'] : array();
        $categories = isset($collections['categories']) ? $collections['categories'] : NawuAI::defaultCategories();

        $today = NawuAI::today();
        $range = array('start' => date('Y-m-01'), 'end' => date('Y-m-t'), 'label' => '本月');
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

        $recent = array_slice((array) $records, -20);
        $goodsBrief = array();
        foreach ((array) $goods as $g) {
            $goodsBrief[] = array(
                'id' => isset($g['id']) ? $g['id'] : '',
                'name' => isset($g['name']) ? $g['name'] : '',
                'price' => isset($g['price']) ? $g['price'] : 0,
                'buyDate' => isset($g['buyDate']) ? $g['buyDate'] : '',
                'status' => isset($g['status']) ? $g['status'] : 'active',
            );
        }

        flyme_ok(array(
            'user' => array('email' => $email),
            'today' => $today,
            'snapshotAt' => $snap ? date('Y-m-d H:i', $snap['id']) : null,
            'categories' => $categories,
            'goods' => $goodsBrief,
            'subscriptions' => array_values((array) $subs),
            'recentRecords' => $recent,
            'monthly' => array('income' => NawuAI::money($income), 'expense' => NawuAI::money($expense)),
            'capabilities' => array(
                'record' => '记账（生活流）、物品入库、订阅登记',
                'ask' => '花了多少 / 值不值 / 日均成本 / 订阅摊销 / 归需否结构',
                'note' => '文本解析为服务端规则引擎（无需大模型）；Muse 若能自行结构化，可直接调 commit 传 items',
            ),
        ));
    }

    /** 解析：文本 → 草案。 */
    private static function parse($email)
    {
        $text = flyme_str(flyme_param('text', ''), 2000);
        if ($text === '') {
            flyme_fail('缺少 text', 400);
        }
        $snap = self::latestSnapshot($email);
        $collections = $snap && isset($snap['payload']['collections']) ? $snap['payload']['collections'] : array();
        $categories = isset($collections['categories']) ? $collections['categories'] : array();

        $draft = NawuAI::parseText($text, array('categories' => $categories));
        flyme_ok(array(
            'draft' => $draft,
            'hint' => '可把 draft 直接回传给 /api/ai/commit 落库；也可自行修改后传 items',
        ));
    }

    /** 落库：草案/文本 → 待入账箱 + 合并最新快照。 */
    private static function commit($email)
    {
        $dryRun = (bool) flyme_param('dryRun', false);
        $text = flyme_str(flyme_param('text', ''), 2000);
        $items = flyme_param('items', null);
        $draft = flyme_param('draft', null);

        $snap = self::latestSnapshot($email);
        $collections = $snap && isset($snap['payload']['collections']) ? $snap['payload']['collections'] : array();
        $categories = isset($collections['categories']) ? $collections['categories'] : array();

        if (is_array($items) && $items) {
            $parsed = array('items' => $items, 'warnings' => array(), 'needsConfirm' => false, 'source' => 'external');
        } elseif (is_array($draft) && !empty($draft['items'])) {
            $parsed = $draft;
        } elseif ($text !== '') {
            $parsed = NawuAI::parseText($text, array('categories' => $categories));
        } else {
            flyme_fail('需要 text、items 或 draft 之一', 400);
        }

        $records = NawuAI::draftToRecords($parsed, array());
        $counts = array(
            'valueRecords' => count($records['valueRecords']),
            'goods' => count($records['goods']),
            'subscriptions' => count($records['subscriptions']),
        );
        $total = $counts['valueRecords'] + $counts['goods'] + $counts['subscriptions'];

        if ($dryRun) {
            flyme_ok(array('dryRun' => true, 'counts' => $counts, 'records' => $records, 'warnings' => $parsed['warnings']));
        }
        if ($total === 0) {
            flyme_ok(array('committed' => 0, 'counts' => $counts, 'warnings' => $parsed['warnings'], 'records' => array()));
        }

        $kind = $counts['goods'] > 0 ? 'goods' : ($counts['subscriptions'] > 0 ? 'subscription' : 'ledger');
        $eventId = self::addEvent($email, $kind, $records, 'muse');

        // 立刻合并进最新快照（用户马上能在「云备份 → 恢复」看到）
        $merged = false;
        if ($snap) {
            $newPayload = self::mergeIntoPayload($snap['payload'], array(array('payload' => json_encode($records, JSON_UNESCAPED_UNICODE))));
            if ($newPayload !== null) {
                self::writeSnapshot($snap['id'], $newPayload);
                $merged = true;
            }
        }

        flyme_ok(array(
            'committed' => $total,
            'counts' => $counts,
            'eventId' => $eventId,
            'mergedToSnapshot' => $merged,
            'records' => $records,
            'warnings' => $parsed['warnings'],
            'next' => '客户端可用 GET /api/ai/inbox 增量拉取并合并到本地',
        ));
    }

    /** 数值问答。 */
    private static function ask($email)
    {
        $q = flyme_str(flyme_param('question', flyme_param('text', '')), 500);
        if ($q === '') {
            flyme_fail('缺少 question', 400);
        }
        $snap = self::latestSnapshot($email);
        $collections = $snap && isset($snap['payload']['collections']) ? $snap['payload']['collections'] : array();
        $collections = self::withPending($email, $collections);
        $ctx = array(
            'valueRecords' => isset($collections['valueRecords']) ? $collections['valueRecords'] : array(),
            'goods' => isset($collections['goods']) ? $collections['goods'] : array(),
            'subscriptions' => isset($collections['subscriptions']) ? $collections['subscriptions'] : array(),
            'today' => NawuAI::today(),
        );
        $out = NawuAI::ask($q, $ctx);
        flyme_ok(array('question' => $q, 'answer' => $out['answer'], 'data' => $out['data']));
    }

    /** 待入账箱。 */
    private static function inbox($email)
    {
        $events = self::pendingEvents($email, 200);
        $count = 0;
        foreach ($events as $e) {
            $r = $e['records'];
            $count += count(isset($r['valueRecords']) ? $r['valueRecords'] : array())
                + count(isset($r['goods']) ? $r['goods'] : array())
                + count(isset($r['subscriptions']) ? $r['subscriptions'] : array());
        }
        flyme_ok(array('events' => $events, 'count' => $count));
    }

    /** 删除一条待入账事件（撤销 Muse 记错的一条）。 */
    private static function inboxDelete($email)
    {
        self::ensureTables();
        $id = (int) flyme_param('id', 0);
        if ($id <= 0) {
            flyme_fail('缺少 id', 400);
        }
        GF_Db::q('DELETE FROM `flyme_ai_events` WHERE `id` = ? AND `owner_id` = ?', array($id, $email));
        flyme_ok(array('deleted' => $id));
    }

    /** 客户端确认已合并。 */
    private static function inboxApply($email)
    {
        $ids = flyme_param('ids', array());
        $n = self::markApplied($email, (array) $ids);
        flyme_ok(array('applied' => $n));
    }

    /**
     * 一次性引导：签发第一把 API Key。
     *
     * 为什么需要：API Key 本身要登录态才能生成，而「刚接入 Muse」时往往还没有任何
     * 客户端可用。这里用 **storage/.ai-bootstrap 文件**（FTP 上传、非 web 可读）
     * 里的随机 token 做一次性凭证：校验通过 → 签发 Key → **立刻删除该文件**。
     * 文件不存在时接口永远返回 404，不留常驻后门。
     */
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
            'id' => $k['id'],
            'email' => $email,
            'key' => $k['key'],
            'usage' => 'Authorization: Bearer ' . $k['key'],
            'notice' => '引导文件已删除，此接口不再可用；请妥善保存该 Key',
        ));
    }

    /** API Key 管理。 */
    private static function keys($email, $method)
    {
        if ($method === 'POST') {
            $name = flyme_str(flyme_param('name', 'Muse'), 60);
            $k = self::createKey($email, $name);
            flyme_ok(array(
                'id' => $k['id'],
                'name' => $k['name'],
                'key' => $k['key'],
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

    /** OpenAPI 3.1 规范（供 Muse / 其它 Agent 导入为工具）。 */
    private static function openapi()
    {
        $base = self::baseUrl();
        $auth = array('type' => 'http', 'scheme' => 'bearer');
        $json = array(
            'openapi' => '3.1.0',
            'info' => array(
                'title' => '纳物 NaWu API',
                'version' => '1.6.5',
                'description' => '自然语言记账 + 生活流/值不值查询。认证：Authorization: Bearer <API Key 或用户 token>。'
                    . '记账请优先调用 parse → （可选让用户确认）→ commit；查询调用 ask。',
            ),
            'servers' => array(array('url' => $base)),
            'components' => array(
                'securitySchemes' => array('bearerAuth' => $auth),
            ),
            'security' => array(array('bearerAuth' => array())),
            'paths' => array(
                '/api/ai/context' => array(
                    'get' => array(
                        'summary' => '获取纳物上下文',
                        'description' => '返回分类表、物品库、订阅、最近流水与本月收支，用于给用户做自我介绍与记账确认。',
                        'responses' => array('200' => array('description' => 'ok')),
                    ),
                ),
                '/api/ai/parse' => array(
                    'post' => array(
                        'summary' => '把一句话解析成记账草案',
                        'requestBody' => array(
                            'required' => true,
                            'content' => array('application/json' => array(
                                'schema' => array('type' => 'object', 'properties' => array(
                                    'text' => array('type' => 'string', 'description' => '如「昨天买了个耳机 899」'),
                                ), 'required' => array('text')),
                            )),
                        ),
                        'responses' => array('200' => array('description' => 'draft 草案')),
                    ),
                ),
                '/api/ai/commit' => array(
                    'post' => array(
                        'summary' => '落库记账',
                        'description' => '三选一传参：text（原始话术）/ items（自行结构化的条目数组）/ draft（parse 的结果）。'
                            . 'dryRun=true 时只返回将要写入的内容，不落库。',
                        'requestBody' => array(
                            'required' => true,
                            'content' => array('application/json' => array(
                                'schema' => array('type' => 'object', 'properties' => array(
                                    'text' => array('type' => 'string'),
                                    'items' => array('type' => 'array', 'items' => array('type' => 'object')),
                                    'draft' => array('type' => 'object'),
                                    'dryRun' => array('type' => 'boolean'),
                                )),
                            )),
                        ),
                        'responses' => array('200' => array('description' => '落库结果')),
                    ),
                ),
                '/api/ai/ask' => array(
                    'post' => array(
                        'summary' => '问账（含值不值）',
                        'description' => '支持「这个月花了多少」「耳机值不值」「空调日均多少」「订阅每月多少钱」「归需否结构」。',
                        'requestBody' => array(
                            'required' => true,
                            'content' => array('application/json' => array(
                                'schema' => array('type' => 'object', 'properties' => array(
                                    'question' => array('type' => 'string'),
                                ), 'required' => array('question')),
                            )),
                        ),
                        'responses' => array('200' => array('description' => 'answer + data')),
                    ),
                ),
                '/api/ai/inbox' => array(
                    'get' => array('summary' => '拉取云端待入账记录', 'responses' => array('200' => array('description' => 'events'))),
                ),
                '/api/ai/inbox/apply' => array(
                    'post' => array(
                        'summary' => '确认已合并待入账记录',
                        'requestBody' => array(
                            'required' => true,
                            'content' => array('application/json' => array(
                                'schema' => array('type' => 'object', 'properties' => array(
                                    'ids' => array('type' => 'array', 'items' => array('type' => 'integer')),
                                ), 'required' => array('ids')),
                            )),
                        ),
                        'responses' => array('200' => array('description' => 'ok')),
                    ),
                ),
            ),
        );
        flyme_json($json, 200);
    }

    /** 站点基址（用于 OpenAPI servers）。 */
    public static function baseUrl()
    {
        $https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
            || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
        $host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'x.133388.xyz';
        $scheme = $https ? 'https' : 'http';
        return $scheme . '://' . $host;
    }
}
