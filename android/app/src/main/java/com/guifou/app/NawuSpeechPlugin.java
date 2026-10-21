package com.guifou.app;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;

import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

import java.util.ArrayList;

/**
 * ★v1.3.6 · 端侧语音识别插件（NawuSpeech）。
 *
 * 需求原点：语音转文字不能再依赖云端。旧版走 WebView 的 Web Speech API，
 * 在 Android 上那套 API 实际是把音频送到 **Google 在线识别服务**——
 * 于是「服务端/外网一抖，语音输入就报网络错误」，而用户明明只想记一笔账。
 *
 * 本插件把识别改到**手机本地**：
 *  - Android 12（API 31）及以上，系统提供 `createOnDeviceSpeechRecognizer()`，
 *    完全在本机跑声学模型（Flyme/各家 ROM 都随系统带中文离线包）；
 *  - 低版本或本机没有离线引擎时，退回系统识别器并强制 `EXTRA_PREFER_OFFLINE=true`，
 *    仍然优先本地、不走网络；
 *  - 万一系统连识别服务都没有，`isAvailable()` 返回 supported=false，
 *    前端提示「本机没有离线语音引擎，请用键盘输入」，绝不静默失败。
 *
 * 生命周期：SpeechRecognizer 必须在主线程创建/销毁，本插件所有调用都投递到
 * UI 线程；同一时刻只保留一个识别实例（destroy 前先 cancel）。
 */
@CapacitorPlugin(
    name = "NawuSpeech",
    permissions = { @Permission(strings = { Manifest.permission.RECORD_AUDIO }, alias = "microphone") }
)
public class NawuSpeechPlugin extends Plugin {

    private SpeechRecognizer recognizer = null;
    /** 当前是否用的是「纯离线」识别器（onDevice=true 时不会走网络）。 */
    private boolean onDevice = false;
    /** ★v1.3.7：系统识别器不可用时的兜底——拉起任意能处理识别 Intent 的应用。 */
    private static final int REQ_SPEECH = 0x5350;

    /* ==================== 能力探测 ==================== */

    @PluginMethod
    public void isAvailable(PluginCall call) {
        JSObject ret = new JSObject();
        boolean supported = SpeechRecognizer.isRecognitionAvailable(getContext());
        boolean device = false;
        if (Build.VERSION.SDK_INT >= 31) {
            device = SpeechRecognizer.isOnDeviceRecognitionAvailable(getContext());
        }
        // ★v1.3.7：绑不到识别器时，只要系统里有应用能处理识别 Intent 就算「可用」，
        // 否则前端会提前判成「功能不可用」，连兜底机会都没有。
        boolean intentOk = false;
        try {
            Intent probe = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            intentOk = probe.resolveActivity(getContext().getPackageManager()) != null;
        } catch (Exception ignored) {
            /* 查询失败按不可用处理 */
        }
        ret.put("supported", supported || device || intentOk);
        ret.put("onDevice", device);
        ret.put(
            "engine",
            device ? "android-ondevice" : supported ? "android-service" : intentOk ? "android-intent" : "none"
        );
        ret.put("permission", getPermissionState("microphone").toString());
        call.resolve(ret);
    }

    /* ==================== 开始识别 ==================== */

    @PluginMethod
    public void start(PluginCall call) {
        if (getPermissionState("microphone") != PermissionState.GRANTED) {
            requestPermissionForAlias("microphone", call, "micPermsCallback");
            return;
        }
        startListening(call);
    }

    @PermissionCallback
    private void micPermsCallback(PluginCall call) {
        if (getPermissionState("microphone") == PermissionState.GRANTED) {
            startListening(call);
            return;
        }
        emitError("not-allowed", "麦克风权限被拒绝");
        call.reject("not-allowed");
    }

    private void startListening(final PluginCall call) {
        final Activity activity = getActivity();
        if (activity == null) {
            emitError("no-activity", "插件未绑定 Activity");
            call.reject("no-activity");
            return;
        }
        final String lang = call.getString("lang", "zh-CN");
        activity.runOnUiThread(() -> {
            destroyRecognizer();
            try {
                boolean useOnDevice = false;
                if (Build.VERSION.SDK_INT >= 31 && SpeechRecognizer.isOnDeviceRecognitionAvailable(getContext())) {
                    recognizer = SpeechRecognizer.createOnDeviceSpeechRecognizer(getContext());
                    useOnDevice = true;
                } else if (SpeechRecognizer.isRecognitionAvailable(getContext())) {
                    recognizer = SpeechRecognizer.createSpeechRecognizer(getContext());
                } else {
                    // ★v1.3.7：系统里绑不到识别器时（不少 ROM 精简掉了 SpeechRecognizer 服务），
                    // 仍然可能有应用能处理 ACTION_RECOGNIZE_SPEECH。用 Intent 兜底拉起，
                    // 总比直接告诉用户「语音功能不可用」强。
                    startIntentRecognizer(call, lang);
                    return;
                }
                onDevice = useOnDevice;
                recognizer.setRecognitionListener(listener);

                Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, lang);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, lang);
                intent.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
                intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1);
                // 关键：优先离线（API 23+ 的官方开关）
                intent.putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, true);
                recognizer.startListening(intent);

                JSObject ret = new JSObject();
                ret.put("onDevice", useOnDevice);
                call.resolve(ret);
            } catch (Exception e) {
                emitError("start-failed", e.getMessage() == null ? "语音启动失败" : e.getMessage());
                call.reject("start-failed");
            }
        });
    }

    /**
     * ★v1.3.7 Intent 兜底：让系统里任意「语音输入」应用来转写。
     *
     * 场景：某些 ROM（尤其精简版系统）把 SpeechRecognizer 的绑定服务删了，
     * `isRecognitionAvailable()` 直接 false，但输入法/语音助手仍能处理
     * `ACTION_RECOGNIZE_SPEECH`。此时拉起该 Activity，用户说完后回到 App，
     * 结果在 `handleOnActivityResult` 里取 EXTRA_RESULTS。
     *
     * 这条路径**一定**会离开 App 界面，所以只在完全绑不到识别器时才走。
     */
    private void startIntentRecognizer(final PluginCall call, final String lang) {
        final Activity activity = getActivity();
        if (activity == null) {
            emitError("no-activity", "插件未绑定 Activity");
            call.reject("no-activity");
            return;
        }
        Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, lang);
        intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, lang);
        intent.putExtra(RecognizerIntent.EXTRA_PROMPT, "请说出要记的内容");
        if (intent.resolveActivity(activity.getPackageManager()) == null) {
            emitError("unavailable", "本机没有可用的语音识别引擎");
            call.reject("unavailable");
            return;
        }
        try {
            activity.startActivityForResult(intent, REQ_SPEECH);
            JSObject ret = new JSObject();
            ret.put("onDevice", false);
            ret.put("engine", "android-intent");
            call.resolve(ret);
        } catch (Exception e) {
            emitError("start-failed", e.getMessage() == null ? "语音启动失败" : e.getMessage());
            call.reject("start-failed");
        }
    }

    /** Intent 兜底路径的结果回传。 */
    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        if (requestCode != REQ_SPEECH) return;

        if (resultCode == Activity.RESULT_OK && data != null) {
            ArrayList<String> list = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            String text = (list != null && !list.isEmpty() && list.get(0) != null) ? list.get(0).trim() : "";
            if (!text.isEmpty()) {
                JSObject r = new JSObject();
                r.put("text", text);
                r.put("onDevice", false);
                notifyListeners("result", r);
                notifyListeners("end", new JSObject());
                return;
            }
        }
        // 用户返回/没说话：按「取消」处理，不弹错误提示
        JSObject err = new JSObject();
        err.put("code", "cancelled");
        err.put("message", "已取消");
        notifyListeners("error", err);
        notifyListeners("end", new JSObject());
    }

    /* ==================== 停止 / 取消 ==================== */
    @PluginMethod
    public void stop(PluginCall call) {
        final Activity activity = getActivity();
        if (activity == null) {
            call.resolve();
            return;
        }
        activity.runOnUiThread(() -> {
            try {
                if (recognizer != null) {
                    // stopListening 会让系统把已听到的内容作为 onResults 回调回来
                    recognizer.stopListening();
                }
            } catch (Exception ignored) {
                /* 已结束的实例再 stop 会抛，忽略即可 */
            }
            call.resolve();
        });
    }

    @PluginMethod
    public void cancel(PluginCall call) {
        final Activity activity = getActivity();
        if (activity == null) {
            call.resolve();
            return;
        }
        activity.runOnUiThread(() -> {
            destroyRecognizer();
            call.resolve();
        });
    }

    /** 销毁识别实例（必须在主线程调用）。 */
    private void destroyRecognizer() {
        if (recognizer == null) return;
        try {
            recognizer.cancel();
        } catch (Exception ignored) {
            /* noop */
        }
        try {
            recognizer.destroy();
        } catch (Exception ignored) {
            /* noop */
        }
        recognizer = null;
    }

    @Override
    protected void handleOnDestroy() {
        destroyRecognizer();
        super.handleOnDestroy();
    }

    /* ==================== 回调 ==================== */

    private void emitError(String code, String message) {
        JSObject r = new JSObject();
        r.put("code", code);
        r.put("message", message);
        notifyListeners("error", r);
    }

    /** 从 results Bundle 里取第一条转写。 */
    private String firstText(Bundle results) {
        if (results == null) return "";
        ArrayList<String> list = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        if (list == null || list.isEmpty()) return "";
        String s = list.get(0);
        return s == null ? "" : s.trim();
    }

    /** Android 错误码 → 前端可读的分类（前端据 code 出中文提示）。 */
    private String mapError(int error) {
        switch (error) {
            case SpeechRecognizer.ERROR_AUDIO:
                return "audio";
            case SpeechRecognizer.ERROR_CLIENT:
                return "client";
            case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                return "not-allowed";
            case SpeechRecognizer.ERROR_NETWORK:
            case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                return "network";
            case SpeechRecognizer.ERROR_NO_MATCH:
                return "no-match";
            case SpeechRecognizer.ERROR_RECOGNIZER_BUSY:
                return "busy";
            case SpeechRecognizer.ERROR_SERVER:
                return "server";
            case SpeechRecognizer.ERROR_SPEECH_TIMEOUT:
                return "speech-timeout";
            default:
                return "unknown";
        }
    }

    private final RecognitionListener listener = new RecognitionListener() {
        @Override
        public void onReadyForSpeech(Bundle params) {
            /* 前端按下即已进入录音态，无需额外事件 */
        }

        @Override
        public void onBeginningOfSpeech() {
            /* noop */
        }

        @Override
        public void onRmsChanged(float rmsdB) {
            /* noop：界面用计时条反馈，不做电平动画 */
        }

        @Override
        public void onBufferReceived(byte[] buffer) {
            /* noop */
        }

        @Override
        public void onEndOfSpeech() {
            /* noop */
        }

        @Override
        public void onError(int error) {
            String code = mapError(error);
            // no-match / speech-timeout 属于「没听清」，交给前端当普通提示，不当崩溃
            emitError(code, code);
            JSObject end = new JSObject();
            end.put("reason", "error");
            notifyListeners("end", end);
        }

        @Override
        public void onResults(Bundle results) {
            String text = firstText(results);
            JSObject r = new JSObject();
            r.put("text", text);
            r.put("onDevice", onDevice);
            notifyListeners("result", r);
            JSObject end = new JSObject();
            end.put("reason", "result");
            notifyListeners("end", end);
        }

        @Override
        public void onPartialResults(Bundle partialResults) {
            String text = firstText(partialResults);
            if (text.isEmpty()) return;
            JSObject r = new JSObject();
            r.put("text", text);
            r.put("onDevice", onDevice);
            notifyListeners("partial", r);
        }

        @Override
        public void onEvent(int eventType, Bundle params) {
            /* noop */
        }
    };
}
