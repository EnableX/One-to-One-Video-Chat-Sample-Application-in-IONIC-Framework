/**
 * EnableX Cordova Native Wrapper.
 */
package com.enablex;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.os.Handler;
import android.os.Looper;
import android.support.v7.widget.RecyclerView;
import android.util.Base64;
import android.util.DisplayMetrics;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.RelativeLayout;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import enx_rtc_android.Controller.EnxActiveTalkerListObserver;
import enx_rtc_android.Controller.EnxActiveTalkerViewObserver;
import enx_rtc_android.Controller.EnxAdvancedOptionsObserver;
import enx_rtc_android.Controller.EnxAnnotationObserver;
import enx_rtc_android.Controller.EnxBandwidthObserver;
import enx_rtc_android.Controller.EnxCanvasObserver;
import enx_rtc_android.Controller.EnxChairControlObserver;
import enx_rtc_android.Controller.EnxFileShareObserver;
import enx_rtc_android.Controller.EnxLockRoomManagementObserver;
import enx_rtc_android.Controller.EnxLogsObserver;
import enx_rtc_android.Controller.EnxMuteAudioStreamObserver;
import enx_rtc_android.Controller.EnxMuteRoomObserver;
import enx_rtc_android.Controller.EnxMuteVideoStreamObserver;
import enx_rtc_android.Controller.EnxNetworkObserever;
import enx_rtc_android.Controller.EnxOutBoundCallObserver;
import enx_rtc_android.Controller.EnxPlayerStatsObserver;
import enx_rtc_android.Controller.EnxPlayerView;
import enx_rtc_android.Controller.EnxReconnectObserver;
import enx_rtc_android.Controller.EnxRecordingObserver;
import enx_rtc_android.Controller.EnxRoom;
import enx_rtc_android.Controller.EnxRoomObserver;
import enx_rtc_android.Controller.EnxRtc;
import enx_rtc_android.Controller.EnxScreenShareObserver;
import enx_rtc_android.Controller.EnxScreenShotObserver;
import enx_rtc_android.Controller.EnxStatsObserver;
import enx_rtc_android.Controller.EnxStream;
import enx_rtc_android.Controller.EnxStreamObserver;
import enx_rtc_android.Controller.EnxTalkerObserver;
import enx_rtc_android.Controller.EnxUtilityManager;

import static android.Manifest.permission.CAMERA;
import static android.Manifest.permission.READ_EXTERNAL_STORAGE;
import static android.Manifest.permission.RECORD_AUDIO;
import static android.Manifest.permission.WRITE_EXTERNAL_STORAGE;


public class EnxCordovaPlugin extends CordovaPlugin implements EnxRoomObserver, EnxStreamObserver, EnxBandwidthObserver,
        EnxChairControlObserver, EnxLogsObserver, EnxMuteRoomObserver, EnxRecordingObserver, EnxMuteAudioStreamObserver,
        EnxMuteVideoStreamObserver, EnxNetworkObserever, EnxReconnectObserver, EnxPlayerStatsObserver,
        EnxAdvancedOptionsObserver, EnxOutBoundCallObserver, EnxScreenShotObserver, EnxFileShareObserver,
        EnxLockRoomManagementObserver, EnxStatsObserver, EnxTalkerObserver, EnxActiveTalkerViewObserver,
        EnxActiveTalkerListObserver, EnxScreenShareObserver, EnxCanvasObserver, EnxAnnotationObserver {

    private EnxRtc mEnxRtc;
    private EnxRoom mEnxRoom;
    private EnxStream mLocalStream;
    private HashMap<String, CallbackContext> mEventListeners;
    private RelativeLayout mLocalView;
    private RelativeLayout mRemoteView;
    private RecyclerView mRecyclerView;
    private ViewGroup parent;

    private boolean isActiveTalkerFirst = true;

    private int mScreenHeight;
    private int mScreenWidth;
    private float scale;

    SharedPreferences sharedPreferences;
    SharedPreferences.Editor editor;
    private static final int PERMISSION_REQUEST_CODE = 200;

    String token;
    JSONObject publishStreamInfo;
    JSONObject roomInfo;
    RelativeLayout screenShareView;

    boolean screenShared;
    boolean canvasShared;
    EnxStream screenShareStream;
    EnxStream canvasShareStream;

    JSONArray remoteArgs;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {

        mEventListeners = new HashMap<String, CallbackContext>();

        parent = (ViewGroup) webView.getView().getParent();
        scale = cordova.getContext().getResources().getDisplayMetrics().density;

        sharedPreferences = cordova.getActivity().getSharedPreferences("enablex", Context.MODE_PRIVATE);
        editor = sharedPreferences.edit();

        DisplayMetrics displayMetrics = new DisplayMetrics();
        cordova.getActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
        mScreenHeight = displayMetrics.heightPixels;
        mScreenWidth = displayMetrics.widthPixels;
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) {

        if (action.equals("joinRoom")) {
            joinRoom(args);
        } else if (action.equals("initLocalView")) {
            mEventListeners.put(action, callbackContext);
            initLocalView(args);
        } else if (action.equals("initRemoteView")) {
            mEventListeners.put(action, callbackContext);
            remoteArgs = args;
            initRemoteView(args);
        } else if (action.equals("addScreenShare")) {
            mEventListeners.put(action, callbackContext);
            addScreenShare(args);
        } else if (action.equals("addCanvasScreen")) {
            mEventListeners.put(action, callbackContext);
            addCanvasScreen(args);
        } else if (action.equals("removeScreenShare")) {
            mEventListeners.put(action, callbackContext);
            removeScreenShare();
        } else if (action.equals("removeCanvasScreen")) {
            mEventListeners.put(action, callbackContext);
            removeCanvasScreen();
        } else if (action.equals("hideSelfView")) {
            mEventListeners.put(action, callbackContext);
            hideSelfView(args);
        } else if (action.equals("hideRemoteView")) {
            mEventListeners.put(action, callbackContext);
            hideRemoteView(args);
        } else if (action.equals("hideScreenShareView")) {
            mEventListeners.put(action, callbackContext);
            hideScreenShareView(args);
        } else if (action.equals("hideCanvasScreen")) {
            mEventListeners.put(action, callbackContext);
            hideCanvasScreen(args);
        } else if (action.equals("resizeLocalView")) {
            mEventListeners.put(action, callbackContext);
            resizeLocalView(args);
        } else if (action.equals("resizeRemoteView")) {
            mEventListeners.put(action, callbackContext);
            resizeRemoteView(args);
        } else if (action.equals("startDragging")) {
            mEventListeners.put(action, callbackContext);
            startDragging(args);
        } else if (action.equals("muteSelfAudio")) {
            muteSelfAudio(args);
        } else if (action.equals("muteSelfVideo")) {
            muteSelfVideo(args);
        } else if (action.equals("switchCamera")) {
            mEventListeners.put(action, callbackContext);
            switchCamera();
        } else if (action.equals("disconnect")) {
            disconnect();
        } else if (action.equals("switchMediaDevice")) {
            mEventListeners.put(action, callbackContext);
            switchMediaDevice(args);
        } else if (action.equals("getSelectedDevice")) {
            mEventListeners.put(action, callbackContext);
            getSelectedDevice();
        } else if (action.equals("getDevices")) {
            mEventListeners.put(action, callbackContext);
            getDevices();
        } else if (action.equals("getTalkerCount")) {
            getTalkerCount();
        } else if (action.equals("getMaxTalkers")) {
            getMaxTalkers();
        } else if (action.equals("setTalkerCount")) {
            setTalkerCount(args);
        } else if (action.equals("postClientLogs")) {
            mEventListeners.put(action, callbackContext);
            postClientLogs(args);
        } else if (action.equals("enableLogs")) {
            enableLogs(args);
        } else if (action.equals("muteSubscribeStreamsAudio")) {
            mEventListeners.put(action, callbackContext);
            muteSubscribeStreamsAudio(args);
        } else if (action.equals("setAudioOnlyMode")) {
            mEventListeners.put(action, callbackContext);
            setAudioOnlyMode(args);
        } else if (action.equals("getReceiveVideoQuality")) {
            mEventListeners.put(action, callbackContext);
            getReceiveVideoQuality(args);
        } else if (action.equals("setReceiveVideoQuality")) {
            mEventListeners.put(action, callbackContext);
            setReceiveVideoQuality(args);
        } else if (action.equals("adjustLayout")) {
            mEventListeners.put(action, callbackContext);
            adjustLayout();
        } else if (action.equals("updateConfiguration")) {
            mEventListeners.put(action, callbackContext);
            updateConfiguration(args);
        } else if (action.equals("requestFloor")) {
            requestFloor();
        } else if (action.equals("cancelFloor")) {
            cancelFloor();
        } else if (action.equals("finishFloor")) {
            finishFloor();
        } else if (action.equals("grantFloor")) {
            grantFloor(args);
        } else if (action.equals("denyFloor")) {
            denyFloor(args);
        } else if (action.equals("releaseFloor")) {
            releaseFloor(args);
        } else if (action.equals("extendConferenceDuration")) {
            extendConferenceDuration();
        } else if (action.equals("lockRoom")) {
            lockRoom();
        } else if (action.equals("unLockRoom")) {
            unLockRoom();
        } else if (action.equals("dropUser")) {
            dropUser(args);
        } else if (action.equals("destroy")) {
            destroy();
        } else if (action.equals("hardMute")) {
            hardMute();
        } else if (action.equals("hardUnMute")) {
            hardUnMute();
        } else if (action.equals("startRecord")) {
            startRecord();
        } else if (action.equals("stopRecord")) {
            stopRecord();
        } else if (action.equals("stopVideoTracksOnApplicationBackground")) {
            mEventListeners.put(action, callbackContext);
            stopVideoTracksOnApplicationBackground(args);
        } else if (action.equals("startVideoTracksOnApplicationForeground")) {
            mEventListeners.put(action, callbackContext);
            startVideoTracksOnApplicationForeground(args);
        } else if (action.equals("enableStats")) {
            enableStats(args);
        } else if (action.equals("switchUserRole")) {
            switchUserRole(args);
        } else if (action.equals("makeOutboundCall")) {
            makeOutboundCall(args);
        } else if (action.equals("sendMessage")) {
            sendMessage(args);
        } else if (action.equals("sendUserData")) {
            sendUserData(args);
        } else if (action.equals("setAdvancedOptions")) {
            setAdvancedOptions(args);
        } else if (action.equals("getAdvancedOptions")) {
            getAdvancedOptions();
        } else if (action.equals("sendFiles")) {
            sendFiles(args);
        } else if (action.equals("downloadFile")) {
            downloadFile(args);
        } else if (action.equals("cancelUpload")) {
            cancelUpload(args);
        } else if (action.equals("cancelDownload")) {
            cancelDownload(args);
        } else if (action.equals("cancelAllUploads")) {
            cancelAllUploads();
        } else if (action.equals("cancelAllDownloads")) {
            cancelAllDownloads();
        } else if (action.equals("getAvailableFiles")) {
            getAvailableFiles();
        } else if (action.equals("startAnnotation")) {
            startAnnotation(args);
        } else if (action.equals("stopAnnotations")) {
            stopAnnotations();
        } else if (action.equals("getClientId")) {
            mEventListeners.put(action, callbackContext);
            getClientId();
        } else if (action.equals("getRoomId")) {
            mEventListeners.put(action, callbackContext);
            getRoomId();
        } else if (action.equals("getClientName")) {
            mEventListeners.put(action, callbackContext);
            getClientName();
        } else if (action.equals("getLocalStreamID")) {
            mEventListeners.put(action, callbackContext);
            getLocalStreamID();
        } else if (action.equals("getUserList")) {
            mEventListeners.put(action, callbackContext);
            getUserList();
        } else if (action.equals("getRoomMetadata")) {
            mEventListeners.put(action, callbackContext);
            getRoomMetadata();
        } else if (action.equals("isConnected")) {
            mEventListeners.put(action, callbackContext);
            isConnected();
        } else if (action.equals("enableProximitySensor")) {
            mEventListeners.put(action, callbackContext);
            enableProximitySensor(args);
        } else if (action.equals("getMode")) {
            mEventListeners.put(action, callbackContext);
            getMode();
        } else if (action.equals("getRole")) {
            mEventListeners.put(action, callbackContext);
            getRole();
        } else if (action.equals("whoAmI")) {
            mEventListeners.put(action, callbackContext);
            whoAmI();
        } else if (action.equals("onRoomConnected")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRoomError")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUserConnected")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUserDisConnected")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onEventError")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onEventInfo")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAcknowledgedSendData")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onMessageReceived")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onSwitchedUserRole")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUserRoleChanged")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onConferencessExtended")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onConferenceRemainingDuration")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAckDropUser")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAckDestroy")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAudioEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onVideoEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRoomDisConnected")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onNotifyDeviceUpdate")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onBandWidthUpdated")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onShareStreamEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onCanvasStreamEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAckLockRoom")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAckUnLockRoom")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onLockedRoom")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUnLockedRoom")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onLogUploaded")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardMutedAudio")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardUnMutedAudio")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardMuteAudio")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardUnMuteAudio")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardMutedVideo")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardUnMutedVideo")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardMuteVideo")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardUnMuteVideo")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardMuted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onHardUnMuted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedHardUnMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onConnectionInterrupted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onConnectionLost")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onOutBoundCallInitiated")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onDialStateEvents")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onPlayerStats")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReconnect")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUserReconnectSuccess")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStartRecordingEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRoomRecordingOn")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStopRecordingEvent")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRoomRecordingOff")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAcknowledgeStats")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReceivedStats")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onSetTalkerCount")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onGetTalkerCount")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onMaxTalkerCount")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRemoteStreamAudioMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRemoteStreamAudioUnMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRemoteStreamVideoMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onRemoteStreamVideoUnMute")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("OnCapturedView")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAdvancedOptionsUpdate")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onGetAdvancedOptions")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFloorRequested")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFloorRequestReceived")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onProcessFloorRequested")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onGrantedFloorRequest")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onDeniedFloorRequest")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onReleasedFloorRequest")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileUploadStarted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileAvailable")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onInitFileUpload")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileUploaded")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileUploadCancelled")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileUploadFailed")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileDownloaded")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileDownloadCancelled")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onFileDownloadFailed")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onInitFileDownload")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onUserDataReceived")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onCanvasStarted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onCanvasStopped")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onScreenSharedStarted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onScreenSharedStopped")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAnnotationStarted")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStartAnnotationAck")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onAnnotationStopped")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStoppedAnnotationAck")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStartCanvasAck")) {
            mEventListeners.put(action, callbackContext);
        } else if (action.equals("onStoppedCanvasAck")) {
            mEventListeners.put(action, callbackContext);
        }
        return true;
    }

    private void joinRoom(JSONArray args) {
        try {

            JSONObject options = args.getJSONObject(0);
            token = options.getString("token");
            String publishStreamInfoString = options.getString("publishStreamInfo");
            String roomInfoString = options.getString("roomInfo");

            publishStreamInfo = new JSONObject(publishStreamInfoString);
            roomInfo = new JSONObject(roomInfoString);
            roomInfo.put("activeviews","view");
            roomInfo.getJSONObject("playerConfiguration").put("activeviews","view");

            boolean status = sharedPreferences.getBoolean("isEnxPluginPluginFirst", false);
            if (!status) {
                requestPermission();
            } else {
                joinCall();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void joinCall() {
        mEnxRtc = new EnxRtc(cordova.getActivity(), this, this);
        mLocalStream = mEnxRtc.joinRoom(token, publishStreamInfo, roomInfo, null);
    }

    private void requestPermission() {
        cordova.requestPermissions(this, PERMISSION_REQUEST_CODE,
                new String[] { CAMERA, RECORD_AUDIO, WRITE_EXTERNAL_STORAGE, READ_EXTERNAL_STORAGE });

    }

    @Override
    public void onRequestPermissionResult(int requestCode, String[] permissions, int[] grantResults)
            throws JSONException {
        super.onRequestPermissionResult(requestCode, permissions, grantResults);
        switch (requestCode) {
            case PERMISSION_REQUEST_CODE:
                if (grantResults.length > 0) {

                    editor.putBoolean("isEnxPluginPluginFirst", true);
                    editor.commit();
                    joinCall();
                }
                break;
        }
    }

    private void initLocalView(JSONArray args) {
        if (mLocalStream != null) {

            try {

                JSONObject jsonObject = args.getJSONObject(0);
                JSONObject options = new JSONObject(jsonObject.getString("localviewOptions"));

                int height = options.optInt("height");
                if (height == 0) {
                    height = 300;
                }
                int width = options.optInt("width");
                if (width == 0) {
                    width = 300;
                }
                int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
                int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
                int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
                int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);
                String position = options.optString("position");

                if (height > mScreenHeight) {
                    height = mScreenHeight;
                    height = height - (topMargin + bottomMargin);
                }

                if (width > mScreenWidth) {
                    width = mScreenWidth;
                }

                int ht = (int) (height * scale + 0.5f);
                int wh = (int) (width * scale + 0.5f);

                cordova.getActivity().runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (mLocalStream.mEnxPlayerView != null && mLocalStream.mEnxPlayerView.getParent() == null) {

                            mLocalView = new RelativeLayout(cordova.getContext());
                            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(wh, ht);

                            if (position != null) {
                                if (position.equalsIgnoreCase("right")) {
                                    layoutParams.gravity = Gravity.RIGHT;
                                } else if (position.equalsIgnoreCase("left")) {
                                    layoutParams.gravity = Gravity.LEFT;
                                } else if (position.equalsIgnoreCase("bottom")) {
                                    layoutParams.gravity = Gravity.BOTTOM;
                                } else if (position.equalsIgnoreCase("top")) {
                                    layoutParams.gravity = Gravity.TOP;
                                } else if (position.equalsIgnoreCase("center")) {
                                    layoutParams.gravity = Gravity.CENTER;
                                } else {
                                    layoutParams.gravity = Gravity.RIGHT;
                                }
                            } else {
                                layoutParams.gravity = Gravity.RIGHT;
                            }

                            layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);

                            mLocalView.setLayoutParams(layoutParams);
                            mLocalView.setPadding(5, 5, 5, 5);
                            mLocalView.setBackgroundColor(Color.WHITE);

                            mLocalStream.mEnxPlayerView.setZOrderMediaOverlay(false);
                            mLocalStream.mEnxPlayerView.setScalingType(EnxPlayerView.ScalingType.SCALE_ASPECT_FILL);
                            mLocalStream.detachRenderer();
                            mLocalStream.mEnxPlayerView.release();
                            mLocalStream.mEnxPlayerView = null;

                            EnxPlayerView enxPlayerView = new EnxPlayerView(cordova.getActivity(),
                                    EnxPlayerView.ScalingType.SCALE_ASPECT_FILL, true);
                            mLocalStream.attachRenderer(enxPlayerView);
                            mLocalView.addView(enxPlayerView);

                            parent.addView(mLocalView);
                            triggerSuccussJSEvent("initLocalView", "initLocalView", "Success");
                        }
                    }
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void initRemoteView(JSONArray args) {
        try {

            JSONObject jsonObject = args.getJSONObject(0);
            JSONObject options = new JSONObject(jsonObject.getString("remoteviewOptions"));

            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {

                    int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
                    int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
                    int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
                    int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);

                    int height = options.optInt("height");
                    height = (int) (height * scale + 0.5f);
                    if (height == 0) {
                        height = mScreenHeight;
                        height = height - (topMargin + bottomMargin);
                    }

                    if (height > mScreenHeight) {
                        height = mScreenHeight;
                        height = height - (topMargin + bottomMargin);
                    }

                    int width = options.optInt("width");
                    width = (int) (width * scale + 0.5f);
                    if (width == 0) {
                        width = mScreenWidth;
                        width = width - (leftMargin + rightMargin);
                    }

                    if (width > mScreenWidth) {
                        width = mScreenWidth;
                    }

                    String position = options.optString("position");

                    if (mRecyclerView != null) {
                        mRemoteView.removeView(mRecyclerView);
                    }

                    if (mRemoteView != null) {
                        parent.removeView(mRemoteView);
                        mRemoteView = null;
                    }

                    mRemoteView = new RelativeLayout(cordova.getActivity());
                    FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(width, height);

                    if (position != null && !position.equalsIgnoreCase("")) {
                        if (position.equalsIgnoreCase("right")) {
                            layoutParams.gravity = Gravity.RIGHT;
                        } else if (position.equalsIgnoreCase("left")) {
                            layoutParams.gravity = Gravity.LEFT;
                        } else if (position.equalsIgnoreCase("bottom")) {
                            layoutParams.gravity = Gravity.BOTTOM;
                        } else if (position.equalsIgnoreCase("top")) {
                            layoutParams.gravity = Gravity.TOP;
                        } else if (position.equalsIgnoreCase("center")) {
                            layoutParams.gravity = Gravity.CENTER;
                        } else {
                            layoutParams.gravity = Gravity.RIGHT;
                        }
                    }

                    layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);
                    mRemoteView.setLayoutParams(layoutParams);

                    if (mRecyclerView != null) {
                        mRemoteView.addView(mRecyclerView);
                        parent.addView(mRemoteView);
                        if (mLocalView != null) {
                            mLocalView.bringToFront();
                        }
                    }
                    triggerSuccussJSEvent("initRemoteView", "initRemoteView", "Success");
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void addScreenShare(JSONArray args) {
        try {

            if (screenShared) {

                JSONObject jsonObject = args.getJSONObject(0);
                JSONObject options = new JSONObject(jsonObject.getString("viewOptions"));

                if (screenShareView == null) {
                    screenShareView = new RelativeLayout(cordova.getActivity());
                }

                int childCount = screenShareView.getChildCount();
                if (childCount > 0 && screenShareStream != null) {
                    screenShareView.removeView(screenShareStream.mEnxPlayerView);
                    parent.removeView(screenShareView);
                }

                int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
                int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
                int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
                int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);

                int height = options.optInt("height");
                height = (int) (height * scale + 0.5f);

                int width = options.optInt("width");
                width = (int) (width * scale + 0.5f);

                FrameLayout.LayoutParams layoutParams;
                if (height == 0 || width == 0) {
                    layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.WRAP_CONTENT,
                            FrameLayout.LayoutParams.WRAP_CONTENT);
                } else {
                    if (width > mScreenWidth) {
                        width = mScreenWidth - (leftMargin + rightMargin);
                    }
                    if (height > mScreenHeight) {
                        height = mScreenHeight;
                        height = height - (topMargin + bottomMargin);
                    }
                    layoutParams = new FrameLayout.LayoutParams(width, height);
                }

                String position = options.optString("position");
                if (position != null && !position.equalsIgnoreCase("")) {
                    if (position.equalsIgnoreCase("right")) {
                        layoutParams.gravity = Gravity.RIGHT;
                    } else if (position.equalsIgnoreCase("left")) {
                        layoutParams.gravity = Gravity.LEFT;
                    } else if (position.equalsIgnoreCase("bottom")) {
                        layoutParams.gravity = Gravity.BOTTOM;
                    } else if (position.equalsIgnoreCase("top")) {
                        layoutParams.gravity = Gravity.TOP;
                    } else if (position.equalsIgnoreCase("center")) {
                        layoutParams.gravity = Gravity.CENTER;
                    } else {
                        layoutParams.gravity = Gravity.RIGHT;
                    }
                } else {
                    layoutParams.gravity = Gravity.CENTER;
                }

                layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);
                screenShareView.setLayoutParams(layoutParams);

                cordova.getActivity().runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        screenShareView.addView(screenShareStream.mEnxPlayerView);
                        parent.addView(screenShareView);
                        triggerSuccussJSEvent("addScreenShare", "addScreenShare", "Success");
                    }
                });
            } else {
                triggerErrorJSEvent("addScreenShare", "addScreenShare", "Error");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void removeScreenShare() {
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (screenShareView != null) {
                    parent.removeView(screenShareView);
                    screenShareView = null;
                }
            }
        });
    }

    private void addCanvasScreen(JSONArray args) {
        try {

            if (canvasShared) {

                JSONObject jsonObject = args.getJSONObject(0);
                JSONObject options = new JSONObject(jsonObject.getString("viewOptions"));

                if (screenShareView == null) {
                    screenShareView = new RelativeLayout(cordova.getActivity());
                }

                int childCount = screenShareView.getChildCount();
                if (childCount > 0 && screenShareStream != null) {
                    screenShareView.removeView(screenShareStream.mEnxPlayerView);
                    parent.removeView(screenShareView);
                }

                int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
                int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
                int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
                int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);

                int height = options.optInt("height");
                height = (int) (height * scale + 0.5f);

                int width = options.optInt("width");
                width = (int) (width * scale + 0.5f);

                FrameLayout.LayoutParams layoutParams;
                if (height == 0 || width == 0) {
                    layoutParams = new FrameLayout.LayoutParams(FrameLayout.LayoutParams.WRAP_CONTENT,
                            FrameLayout.LayoutParams.WRAP_CONTENT);
                } else {
                    if (width > mScreenWidth) {
                        width = mScreenWidth - (leftMargin + rightMargin);
                    }
                    if (height > mScreenHeight) {
                        height = mScreenHeight;
                        height = height - (topMargin + bottomMargin);
                    }
                    layoutParams = new FrameLayout.LayoutParams(width, height);
                }

                String position = options.optString("position");
                if (position != null && !position.equalsIgnoreCase("")) {
                    if (position.equalsIgnoreCase("right")) {
                        layoutParams.gravity = Gravity.RIGHT;
                    } else if (position.equalsIgnoreCase("left")) {
                        layoutParams.gravity = Gravity.LEFT;
                    } else if (position.equalsIgnoreCase("bottom")) {
                        layoutParams.gravity = Gravity.BOTTOM;
                    } else if (position.equalsIgnoreCase("top")) {
                        layoutParams.gravity = Gravity.TOP;
                    } else if (position.equalsIgnoreCase("center")) {
                        layoutParams.gravity = Gravity.CENTER;
                    } else {
                        layoutParams.gravity = Gravity.RIGHT;
                    }
                } else {
                    layoutParams.gravity = Gravity.CENTER;
                }

                layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);
                screenShareView.setLayoutParams(layoutParams);

                cordova.getActivity().runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        screenShareView.addView(canvasShareStream.mEnxPlayerView);
                        parent.addView(screenShareView);
                        triggerSuccussJSEvent("addCanvasScreen", "addCanvasScreen", "Success");
                    }
                });
            } else {
                triggerErrorJSEvent("addCanvasScreen", "addCanvasScreen", "Error");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void removeCanvasScreen() {
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (screenShareView != null) {
                    parent.removeView(screenShareView);
                    screenShareView = null;
                }
            }
        });
    }

    private void hideSelfView(JSONArray args) {
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    JSONObject options = args.getJSONObject(0);
                    boolean status = options.getBoolean("hide");
                    if (status) {
                        mLocalView.setVisibility(View.GONE);
                        mLocalView.removeView(mLocalStream.mEnxPlayerView);
                    } else {
                        mLocalView.setVisibility(View.VISIBLE);
                        mLocalView.addView(mLocalStream.mEnxPlayerView);
                        mLocalView.bringToFront();
                    }

                    triggerSuccussJSEvent("hideSelfView", "hideSelfView", "Success");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void hideRemoteView(JSONArray args) {

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    JSONObject options = args.getJSONObject(0);
                    boolean status = options.getBoolean("hide");
                    if (status) {
                        mRemoteView.setVisibility(View.GONE);
                        mRemoteView.removeView(mRecyclerView);
                    } else {
                        mRemoteView.setVisibility(View.VISIBLE);
                        mRemoteView.addView(mRecyclerView);
                    }

                    triggerSuccussJSEvent("hideRemoteView", "hideRemoteView", "Success");
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void hideScreenShareView(JSONArray args) {

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    if (screenShared) {
                        JSONObject options = args.getJSONObject(0);
                        boolean status = options.getBoolean("hide");
                        if (status) {
                            parent.removeView(screenShareView);
                        } else {
                            parent.addView(screenShareView);
                        }
                        triggerSuccussJSEvent("hideScreenShareView", "hideScreenShareView", "Success");
                    } else {
                        triggerErrorJSEvent("hideScreenShareView", "hideScreenShareView", "Error");
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void hideCanvasScreen(JSONArray args) {

        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                try {
                    if (canvasShared) {
                        JSONObject options = args.getJSONObject(0);
                        boolean status = options.getBoolean("hide");
                        if (status) {
                            parent.removeView(screenShareView);
                        } else {
                            parent.addView(screenShareView);
                        }

                        triggerSuccussJSEvent("hideCanvasScreen", "hideCanvasScreen", "Success");
                    } else {
                        triggerErrorJSEvent("hideCanvasScreen", "hideCanvasScreen", "Error");
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }

    private void resizeLocalView(JSONArray args) {
        try {

            JSONObject jsonObject = args.getJSONObject(0);
            JSONObject options = new JSONObject(jsonObject.getString("resizeOptions"));

            int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
            int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
            int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
            int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);

            int height = options.optInt("height");
            height = (int) (height * scale + 0.5f);
            if (height == 0) {
                height = mScreenHeight;
                height = height - (topMargin + bottomMargin);
            }

            if (height > mScreenHeight) {
                height = mScreenHeight;
                height = height - (topMargin + bottomMargin);
            }

            int width = options.optInt("width");
            width = (int) (width * scale + 0.5f);
            if (width == 0) {
                width = mScreenWidth;
            }

            if (width > mScreenWidth) {
                width = mScreenWidth;
            }

            String position = options.optString("position");

            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(width, height);

            if (position != null) {
                if (position.equalsIgnoreCase("right")) {
                    layoutParams.gravity = Gravity.RIGHT;
                } else if (position.equalsIgnoreCase("left")) {
                    layoutParams.gravity = Gravity.LEFT;
                } else if (position.equalsIgnoreCase("bottom")) {
                    layoutParams.gravity = Gravity.BOTTOM;
                } else if (position.equalsIgnoreCase("top")) {
                    layoutParams.gravity = Gravity.TOP;
                } else if (position.equalsIgnoreCase("center")) {
                    layoutParams.gravity = Gravity.CENTER;
                } else {
                    layoutParams.gravity = Gravity.RIGHT;
                }
            } else {
                layoutParams.gravity = Gravity.RIGHT;
            }

            layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);

            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (mLocalView != null) {
                        mLocalView.setLayoutParams(layoutParams);
                        triggerSuccussJSEvent("resizeLocalView", "resizeLocalView", "Success");
                    }
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void resizeRemoteView(JSONArray args) {
        try {

            JSONObject jsonObject = args.getJSONObject(0);
            JSONObject options = new JSONObject(jsonObject.getString("resizeOptions"));

            int topMargin = (int) (options.optInt("margin_top") * scale + 0.5f);
            int leftMargin = (int) (options.optInt("margin_left") * scale + 0.5f);
            int rightMargin = (int) (options.optInt("margin_right") * scale + 0.5f);
            int bottomMargin = (int) (options.optInt("margin_bottom") * scale + 0.5f);

            int height = options.optInt("height");
            height = (int) (height * scale + 0.5f);
            if (height == 0) {
                height = mScreenHeight;
                height = height - (topMargin + bottomMargin);
            }

            if (height > mScreenHeight) {
                height = mScreenHeight;
                height = height - (topMargin + bottomMargin);
            }

            int width = options.optInt("width");
            width = (int) (width * scale + 0.5f);
            if (width == 0) {
                width = mScreenWidth;
                width = width - (leftMargin + rightMargin);
            }

            if (width > mScreenWidth) {
                width = mScreenWidth;
                width = width - (leftMargin + rightMargin);
            }

            String position = options.optString("position");

            FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(width, height);

            if (position != null && !position.equalsIgnoreCase("")) {
                if (position.equalsIgnoreCase("right")) {
                    layoutParams.gravity = Gravity.RIGHT;
                } else if (position.equalsIgnoreCase("left")) {
                    layoutParams.gravity = Gravity.LEFT;
                } else if (position.equalsIgnoreCase("bottom")) {
                    layoutParams.gravity = Gravity.BOTTOM;
                } else if (position.equalsIgnoreCase("top")) {
                    layoutParams.gravity = Gravity.TOP;
                } else if (position.equalsIgnoreCase("center")) {
                    layoutParams.gravity = Gravity.CENTER;
                } else {
                    layoutParams.gravity = Gravity.RIGHT;
                }
            }

            layoutParams.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);

            cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    if (mRemoteView != null) {
                        mRemoteView.setLayoutParams(layoutParams);
                        triggerSuccussJSEvent("resizeRemoteView", "resizeRemoteView", "Success");
                    }
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void startDragging(JSONArray args) {
        try {

            JSONObject options = args.getJSONObject(0);
            String string = options.optString("view");
            boolean drag = options.optBoolean("drag");

            if (string != null) {
                if (string.equalsIgnoreCase("local")) {
                    if (mLocalView != null) {
                        startLocalTouchListener(drag);
                    } else {
                        reportErrorToJS("local view is not initialize : initLocalView ");
                    }

                } else if (string.equalsIgnoreCase("remote")) {
                    if (mRemoteView != null) {
                        startRemoteTouchListener(drag);
                    } else {
                        reportErrorToJS("remote view is not initialize : initRemoteView ");
                    }
                } else {
                    reportErrorToJS("Wrong value : Should be local or remote ");
                }
            } else {
                reportErrorToJS("Wrong JSON : " + options);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void startLocalTouchListener(boolean drag) {
        if (drag) {
            mLocalView.setOnTouchListener(new OnDragTouchListener(mLocalView));
            triggerSuccussJSEvent("startDragging", "startDragging", "dragging started");
        } else {
            mLocalView.setOnTouchListener(null);
            triggerSuccussJSEvent("startDragging", "startDragging", "dragging stopped");
        }
    }

    private void startRemoteTouchListener(boolean drag) {
        if (drag) {
            mRecyclerView.setOnTouchListener(new OnDragTouchListener(mRemoteView));
            triggerSuccussJSEvent("startDragging", "startDragging", "dragging started");
        } else {
            mRecyclerView.setOnTouchListener(null);
            triggerSuccussJSEvent("startDragging", "startDragging", "dragging stopped");
            initRemoteView(remoteArgs);
        }
    }

    private void muteSelfAudio(JSONArray args) {
        try {
            if (mLocalStream != null) {
                JSONObject options = args.getJSONObject(0);
                boolean audio = options.getBoolean("muteAudio");
                mLocalStream.muteSelfAudio(audio);
            } else {
                reportErrorToJS("Object is not initialize : LocalStream");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void muteSelfVideo(JSONArray args) {
        try {
            if (mLocalStream != null) {
                JSONObject options = args.getJSONObject(0);
                boolean video = options.getBoolean("muteVideo");
                mLocalStream.muteSelfVideo(video);
            } else {
                reportErrorToJS("Object is not initialize : LocalStream");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void switchCamera() {
        if (mLocalStream != null) {
            mLocalStream.switchCamera();
            triggerSuccussJSEvent("switchCamera", "switchCamera", "Success");
        } else {
            reportErrorToJS("Object is not initialize : LocalStream");
        }
    }

    private void getSelectedDevice() {
        if (mEnxRoom != null) {
            String device = mEnxRoom.getSelectedDevice();
            triggerSuccussJSEvent("getSelectedDevice", "getSelectedDevice", device);
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void getDevices() {
        if (mEnxRoom != null) {
            List<String> deviceList = mEnxRoom.getDevices();
            try{
                JSONArray jsonArray = new JSONArray();
                for (int i = 0; i < deviceList.size(); i++) {
                    jsonArray.put(deviceList.get(i));
                }
                triggerSuccussJSEvent("getDevices", "getDevices", jsonArray);
            }catch (Exception e){
                e.printStackTrace();
            }
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void getTalkerCount() {
        if (mEnxRoom != null) {
            mEnxRoom.getTalkerCount();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void getMaxTalkers() {
        if (mEnxRoom != null) {
            mEnxRoom.getMaxTalkers();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void setTalkerCount(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                int talkerCount = options.getInt("count");
                mEnxRoom.setTalkerCount(talkerCount);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void postClientLogs(JSONArray args) {
        if (mEnxRoom != null) {
            mEnxRoom.postClientLogs();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void muteSubscribeStreamsAudio(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean mute = options.getBoolean("mute");
                mEnxRoom.muteSubscribeStreamsAudio(mute);
                triggerSuccussJSEvent("muteSubscribeStreamsAudio", "muteSubscribeStreamsAudio", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setAudioOnlyMode(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean audioOnly = options.getBoolean("audioOnly");
                mEnxRoom.changeToAudioOnly(audioOnly);
                // mEnxRoom.setAudioOnlyMode(audioOnly);
                triggerSuccussJSEvent("setAudioOnlyMode", "setAudioOnlyMode", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void getReceiveVideoQuality(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String streamType = options.getString("streamType");
                String videoQuality = mEnxRoom.getReceiveVideoQuality(streamType);
                triggerSuccussJSEvent("getReceiveVideoQuality", "getReceiveVideoQuality", videoQuality);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setReceiveVideoQuality(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                JSONObject videoQualityOptions = options.getJSONObject("videoQualityOptions");
                mEnxRoom.setReceiveVideoQuality(videoQualityOptions);
                triggerSuccussJSEvent("setReceiveVideoQuality", "setReceiveVideoQuality", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void adjustLayout() {
        cordova.getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (mEnxRoom != null) {
                    mEnxRoom.adjustLayout();
                    triggerSuccussJSEvent("adjustLayout", "adjustLayout", "Success");
                } else {
                    reportErrorToJS("Object is not initialize : EnxRoom");
                }
            }
        });
    }

    private void updateConfiguration(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                JSONObject configuartionOptions = options.getJSONObject("configuartionOptions");
                mLocalStream.updateConfiguration(configuartionOptions);
                triggerSuccussJSEvent("updateConfiguration", "updateConfiguration", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void requestFloor() {
        if (mEnxRoom != null) {
            mEnxRoom.requestFloor();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void cancelFloor() {
        if (mEnxRoom != null) {
            mEnxRoom.cancelFloor();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void finishFloor() {
        if (mEnxRoom != null) {
            mEnxRoom.finishFloor();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void grantFloor(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String clientId = options.getString("clientId");
                mEnxRoom.grantFloor(clientId);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void denyFloor(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String clientId = options.getString("clientId");
                mEnxRoom.denyFloor(clientId);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void releaseFloor(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String clientId = options.getString("clientId");
                mEnxRoom.releaseFloor(clientId);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void extendConferenceDuration() {
        if (mEnxRoom != null) {
            mEnxRoom.extendConferenceDuration();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void lockRoom() {
        if (mEnxRoom != null) {
            mEnxRoom.lockRoom();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void unLockRoom() {
        if (mEnxRoom != null) {
            mEnxRoom.unLockRoom();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void dropUser(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                JSONArray jsonArray = options.getJSONArray("jsonArray");

                List<String> list = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    String clientId = jsonArray.getString(i);
                    list.add(clientId);
                }

                if (mEnxRoom != null) {
                    mEnxRoom.dropUser(list);
                } else {
                    reportErrorToJS("Object is not initialize : EnxRoom");
                }

            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    private void destroy() {
        if (mEnxRoom != null) {
            mEnxRoom.destroy();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }

    }

    private void hardMute() {
        if (mEnxRoom != null) {
            mEnxRoom.hardMute();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void hardUnMute() {
        if (mEnxRoom != null) {
            mEnxRoom.hardUnMute();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void startRecord() {
        if (mEnxRoom != null) {
            mEnxRoom.startRecord();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void stopRecord() {
        if (mEnxRoom != null) {
            mEnxRoom.stopRecord();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void stopVideoTracksOnApplicationBackground(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean videoMuteRemoteStream = options.getBoolean("videoMuteRemoteStream");
                boolean videoMuteLocalStream = options.getBoolean("videoMuteLocalStream");

                mEnxRoom.stopVideoTracksOnApplicationBackground(videoMuteRemoteStream, videoMuteLocalStream);
                triggerSuccussJSEvent("stopVideoTracksOnApplicationBackground",
                        "stopVideoTracksOnApplicationBackground", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void startVideoTracksOnApplicationForeground(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean restoreVideoRemoteStream = options.getBoolean("restoreVideoRemoteStream");
                boolean restoreVideoLocalStream = options.getBoolean("restoreVideoLocalStream");

                mEnxRoom.startVideoTracksOnApplicationForeground(restoreVideoRemoteStream, restoreVideoLocalStream);
                triggerSuccussJSEvent("startVideoTracksOnApplicationForeground",
                        "startVideoTracksOnApplicationForeground", "Success");
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void enableStats(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean enableStats = options.getBoolean("enableStats");

                mEnxRoom.enableStats(enableStats, this);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void switchUserRole(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String clientId = options.getString("clientId");

                mEnxRoom.switchUserRole(clientId);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void makeOutboundCall(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String number = options.getString("text");

                mEnxRoom.makeOutboundCall(number);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void sendMessage(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String txtMessage = options.getString("text");
                boolean broadcast = options.getBoolean("broadcast");

                JSONArray jsonArray = options.getJSONArray("array");

                List<String> list = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    String clientId = jsonArray.getString(i);
                    list.add(clientId);
                }

                mEnxRoom.sendMessage(txtMessage, broadcast, list);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void sendUserData(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                JSONObject txtMessage = options.getJSONObject("message");
                boolean broadcast = options.getBoolean("broadcast");

                JSONArray jsonArray = options.getJSONArray("array");

                List<String> list = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    String clientId = jsonArray.getString(i);
                    list.add(clientId);
                }

                mEnxRoom.sendUserData(txtMessage, broadcast, list);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setAdvancedOptions(JSONArray args) {
        try {
            JSONObject options = args.getJSONObject(0);
            JSONArray jsonArray = options.getJSONArray("array");
            if (mEnxRoom != null) {
                mEnxRoom.setAdvancedOptions(jsonArray, this);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void getAdvancedOptions() {
        if (mEnxRoom != null) {
            mEnxRoom.getAdvancedOptions();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void sendFiles(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                JSONArray jsonArray = options.getJSONArray("array");
                boolean broadcast = options.getBoolean("broadcast");

                List<String> list = new ArrayList<>();
                for (int i = 0; i < jsonArray.length(); i++) {
                    String clientId = jsonArray.getString(i);
                    list.add(clientId);
                }

                mEnxRoom.sendFiles(broadcast, list, cordova.getActivity());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void downloadFile(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean isAutoSave = options.getBoolean("isAutoSave");
                JSONObject jsonObject = options.getJSONObject("json");

                mEnxRoom.downloadFile(jsonObject, isAutoSave);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void cancelUpload(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                int jobId = options.getInt("jobId");

                mEnxRoom.cancelUpload(jobId);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void cancelDownload(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                int jobId = options.getInt("jobId");

                mEnxRoom.cancelDownload(jobId);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void cancelAllUploads() {
        if (mEnxRoom != null) {
            mEnxRoom.cancelAllUploads();
        }
    }

    private void cancelAllDownloads() {
        if (mEnxRoom != null) {
            mEnxRoom.cancelAllDownloads();
        }
    }

    private void getAvailableFiles() {
        try {
            if (mEnxRoom != null) {
                mEnxRoom.getAvailableFiles();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void startAnnotation(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String clientId = options.optString("clientId");
                if(clientId == null || clientId == ""){
                    reportErrorToJS("ClientId is blank");
                    return;
                }

                EnxStream annotationStream = null;
                if (mEnxRoom != null) {
                    Map<String, EnxStream> map = mEnxRoom.getRemoteStreams();
                    for (String key : map.keySet()) {
                        EnxStream stream = (EnxStream) map.get(key);
                        if (clientId.equalsIgnoreCase(stream.getClientId())) {
                            annotationStream = stream;
                            break;
                        }
                    }
                }

                if (annotationStream != null) {
                    mEnxRoom.startAnnotation(annotationStream);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void stopAnnotations() {

    }

    private void getClientId() {
        if (mEnxRoom != null) {
            String clientId = mEnxRoom.getClientId();
            triggerSuccussJSEvent("getClientId", "getClientId", clientId);
        }
    }

    private void getRoomId() {
        if (mEnxRoom != null) {
            String roomID = mEnxRoom.getRoomId();
            triggerSuccussJSEvent("getRoomId", "getRoomId", roomID);
        }
    }

    private void getClientName() {
        if (mEnxRoom != null) {
            String clientName = mEnxRoom.getClientName();
            triggerSuccussJSEvent("getClientName", "getClientName", clientName);
        }
    }

    private void getLocalStreamID() {
        if (mEnxRoom != null) {
            String clientId = mEnxRoom.getLocalStreamID();
            triggerSuccussJSEvent("getLocalStreamID", "getLocalStreamID", clientId);
        }
    }

    private void getUserList() {
        if (mEnxRoom != null) {
            JSONArray clientIds = mEnxRoom.getUserList();
            triggerSuccussJSEvent("getUserList", "getUserList", clientIds);
        }
    }

    private void getRoomMetadata() {
        if (mEnxRoom != null) {
            JSONObject roomMetadata = mEnxRoom.getRoomMetadata();
            triggerSuccussJSEvent("getRoomMetadata", "getRoomMetadata", roomMetadata);
        }
    }

    private void isConnected() {
        if (mEnxRoom != null) {
            boolean isConnected = mEnxRoom.isConnected();
            triggerSuccussJSEvent("isConnected", "isConnected", isConnected);
        }
    }

    private void enableProximitySensor(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                boolean status = options.getBoolean("status");

                mEnxRoom.enableProximitySensor(status);
                triggerSuccussJSEvent("enableProximitySensor","enableProximitySensor",status);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void getMode() {
        if (mEnxRoom != null) {
            String mode = mEnxRoom.getMode();
            triggerSuccussJSEvent("getMode", "getMode", mode);
        }
    }

    private void getRole() {
        if (mEnxRoom != null) {
            String mRole = mEnxRoom.getRole();
            triggerSuccussJSEvent("getRole", "getRole", mRole);
        }
    }

    private void whoAmI() {
        if (mEnxRoom != null) {
            JSONObject whoAmI = mEnxRoom.whoAmI();
            triggerSuccussJSEvent("whoAmI", "whoAmI", whoAmI);
        }
    }

    private void switchMediaDevice(JSONArray args) {
        try {
            if (mEnxRoom != null) {
                JSONObject options = args.getJSONObject(0);
                String deviceName = options.getString("device");
                mEnxRoom.switchMediaDevice(deviceName);
            } else {
                reportErrorToJS("Object is not initialize : EnxRoom");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void disconnect() {
        if (mEnxRoom != null) {
            mEnxRoom.disconnect();
        } else {
            reportErrorToJS("Object is not initialize : EnxRoom");
        }
    }

    private void enableLogs(JSONArray args) {
        try {
            JSONObject options = args.getJSONObject(0);
            boolean enable = options.getBoolean("enable");
            /*
             * EnxUtilityManager enxLogsUtil = EnxUtilityManager.getInstance();
             * enxLogsUtil.enableLogs(true);
             */
            EnxUtilityManager enxLogsUtil = EnxUtilityManager.getInstance();
            enxLogsUtil.enableLogs(enable);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void triggerSuccussJSEvent(String actionType, String type, Object data) {
        JSONObject message = new JSONObject();

        try {
            message.put("eventType", type);
            message.put("data", data);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, message);
        pluginResult.setKeepCallback(true);
        if (mEventListeners.get(actionType) != null) {
            mEventListeners.get(actionType).sendPluginResult(pluginResult);
        }
    }

    private void triggerErrorJSEvent(String actionType, String type, Object data) {
        JSONObject message = new JSONObject();

        try {
            message.put("eventType", type);
            message.put("data", data);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, message);
        pluginResult.setKeepCallback(true);
        if (mEventListeners.get(actionType) != null) {
            mEventListeners.get(actionType).sendPluginResult(pluginResult);
        }
    }

    private void reportErrorToJS(String msg) {
        try {
            String message = "Cordova Plugin Error: " + msg;
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("msg", message);
            jsonObject.put("errorCode", 0);
            onEventError(jsonObject);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void releaseAllResources() {

        if (mLocalView != null) {
            parent.removeView(mLocalView);
        }
        mLocalView = null;

        if (mRecyclerView != null) {
            mRemoteView.removeView(mRecyclerView);
        }
        mRecyclerView = null;

        if (mRemoteView != null) {
            parent.removeView(mRemoteView);
        }
        mRemoteView = null;

        if (screenShareView != null) {
            parent.removeView(screenShareView);
        }

        mLocalStream = null;
        mEnxRoom = null;
        mEnxRtc = null;
        isActiveTalkerFirst = true;
        // mEventListeners.clear();

    }

    /*
     * Below are the all callbacks which implemented in the plugin class
     */

    @Override
    public void onRoomConnected(EnxRoom enxRoom, JSONObject jsonObject) {
        this.mEnxRoom = enxRoom;
        if (enxRoom != null) {
            mEnxRoom.setActiveTalkerViewObserver(this::onActiveTalkerList);
            enxRoom.setBandwidthObserver(this);
            enxRoom.setChairControlObserver(this);
            enxRoom.setLogsObserver(this);
            enxRoom.setMuteRoomObserver(this);
            enxRoom.setRecordingObserver(this);
            enxRoom.setFileShareObserver(this);
            enxRoom.setScreenShareObserver(this);
            enxRoom.setTalkerObserver(this);
            enxRoom.setNetworkChangeObserver(this);
            enxRoom.setReconnectObserver(this);
            enxRoom.setCanvasObserver(this);
            enxRoom.setAnnotationObserver(this);
            enxRoom.setOutBoundCallObserver(this);
            enxRoom.setLockRoomManagementObserver(this);
            enxRoom.publish(mLocalStream);
        }
        triggerSuccussJSEvent("onRoomConnected", "onRoomConnected", jsonObject);
    }

    @Override
    public void onRoomError(JSONObject jsonObject) {
        triggerErrorJSEvent("onRoomError", "onRoomError", jsonObject);
    }

    @Override
    public void onUserConnected(JSONObject jsonObject) {
        triggerSuccussJSEvent("onUserConnected", "onUserConnected", jsonObject);
    }

    @Override
    public void onUserDisConnected(JSONObject jsonObject) {
        triggerSuccussJSEvent("onUserDisConnected", "onUserDisConnected", jsonObject);
    }

    @Override
    public void onPublishedStream(EnxStream enxStream) {
        triggerSuccussJSEvent("onPublishedStream", "onPublishedStream", "Stream Published");
    }

    @Override
    public void onUnPublishedStream(EnxStream enxStream) {
        triggerSuccussJSEvent("onUnPublishedStream", "onUnPublishedStream", "Stream Unpublished");
    }

    @Override
    public void onStreamAdded(EnxStream enxStream) {
        mEnxRoom.subscribe(enxStream);
    }

    @Override
    public void onSubscribedStream(EnxStream enxStream) {
        triggerSuccussJSEvent("onSubscribedStream", "onSubscribedStream", "Stream Subscribed " + enxStream.getId());

    }

    @Override
    public void onUnSubscribedStream(EnxStream enxStream) {

    }

    @Override
    public void onRoomDisConnected(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRoomDisConnected", "onRoomDisConnected", jsonObject);
        releaseAllResources();
    }

    @Override
    public void onActiveTalkerList(JSONObject jsonObject) {

    }

    @Override
    public void onActiveTalkerList(RecyclerView recyclerView) {
        if (mRemoteView != null) {
            if (recyclerView == null) {
                mRemoteView.removeAllViews();
                parent.removeView(mRemoteView);
            } else {
                mRecyclerView = recyclerView;
                mRemoteView.removeAllViews();
                parent.removeView(mRemoteView);
                mRemoteView.addView(recyclerView);
                parent.addView(mRemoteView);
                if (isActiveTalkerFirst) {
                    isActiveTalkerFirst = false;
                    Handler handler = new Handler(Looper.getMainLooper());
                    handler.postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            if (mEnxRoom != null) {
                                mEnxRoom.adjustLayout();
                                mLocalView.bringToFront();
                            }
                        }
                    }, 600);
                }
            }
        }
    }

    @Override
    public void onActiveTalkerList(List<EnxStream> list) {

    }

    @Override
    public void onEventError(JSONObject jsonObject) {
        triggerErrorJSEvent("onEventError", "onEventError", jsonObject);
    }

    @Override
    public void onEventInfo(JSONObject jsonObject) {
        triggerErrorJSEvent("onEventInfo", "onEventInfo", jsonObject);
    }

    @Override
    public void onNotifyDeviceUpdate(String s) {
        triggerSuccussJSEvent("onNotifyDeviceUpdate", "onNotifyDeviceUpdate", s);
    }

    @Override
    public void onAcknowledgedSendData(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAcknowledgedSendData", "onAcknowledgedSendData", jsonObject);
    }

    @Override
    public void onMessageReceived(JSONObject jsonObject) {
        triggerSuccussJSEvent("onMessageReceived", "onMessageReceived", jsonObject);
    }

    @Override
    public void onUserDataReceived(JSONObject jsonObject) {
        triggerSuccussJSEvent("onUserDataReceived", "onUserDataReceived", jsonObject);
    }

    @Override
    public void onSwitchedUserRole(JSONObject jsonObject) {
        triggerSuccussJSEvent("onSwitchedUserRole", "onSwitchedUserRole", jsonObject);
    }

    @Override
    public void onUserRoleChanged(JSONObject jsonObject) {
        triggerSuccussJSEvent("onUserRoleChanged", "onUserRoleChanged", jsonObject);
    }

    @Override
    public void onConferencessExtended(JSONObject jsonObject) {
        triggerSuccussJSEvent("onConferencessExtended", "onConferencessExtended", jsonObject);
    }

    @Override
    public void onConferenceRemainingDuration(JSONObject jsonObject) {
        triggerSuccussJSEvent("onConferenceRemainingDuration", "onConferenceRemainingDuration", jsonObject);
    }

    @Override
    public void onAudioEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAudioEvent", "onAudioEvent", jsonObject);
    }

    @Override
    public void onVideoEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onVideoEvent", "onVideoEvent", jsonObject);
    }

    @Override
    public void onReceivedData(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedData", "onReceivedData", jsonObject);
    }

    @Override
    public void onRemoteStreamAudioMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRemoteStreamAudioMute", "onRemoteStreamAudioMute", jsonObject);
    }

    @Override
    public void onRemoteStreamAudioUnMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRemoteStreamAudioUnMute", "onRemoteStreamAudioUnMute", jsonObject);
    }

    @Override
    public void onRemoteStreamVideoMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRemoteStreamVideoMute", "onRemoteStreamVideoMute", jsonObject);
    }

    @Override
    public void onRemoteStreamVideoUnMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRemoteStreamVideoUnMute", "onRemoteStreamVideoUnMute", jsonObject);
    }

    @Override
    public void OnCapturedView(Bitmap bitmap) {
        try{
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream);
            byte[] byteArray = byteArrayOutputStream .toByteArray();

            String encoded = Base64.encodeToString(byteArray, Base64.DEFAULT);

            triggerSuccussJSEvent("OnCapturedView","OnCapturedView",encoded);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void onAdvancedOptionsUpdate(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAdvancedOptionsUpdate", "onAdvancedOptionsUpdate", jsonObject);
    }

    @Override
    public void onGetAdvancedOptions(JSONObject jsonObject) {
        triggerSuccussJSEvent("onGetAdvancedOptions", "onGetAdvancedOptions", jsonObject);
    }

    @Override
    public void onBandWidthUpdated(JSONArray jsonArray) {
        triggerSuccussJSEvent("onBandWidthUpdated", "onBandWidthUpdated", jsonArray);
    }

    @Override
    public void onShareStreamEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onShareStreamEvent", "onShareStreamEvent", jsonObject);
    }

    @Override
    public void onCanvasStreamEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onCanvasStreamEvent", "onCanvasStreamEvent", jsonObject);
    }

    @Override
    public void onFloorRequested(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFloorRequested", "onFloorRequested", jsonObject);
    }

    @Override
    public void onFloorRequestReceived(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFloorRequestReceived", "onFloorRequestReceived", jsonObject);
    }

    @Override
    public void onProcessFloorRequested(JSONObject jsonObject) {
        triggerSuccussJSEvent("onProcessFloorRequested", "onProcessFloorRequested", jsonObject);
    }

    @Override
    public void onGrantedFloorRequest(JSONObject jsonObject) {
        triggerSuccussJSEvent("onGrantedFloorRequest", "onGrantedFloorRequest", jsonObject);
    }

    @Override
    public void onDeniedFloorRequest(JSONObject jsonObject) {
        triggerSuccussJSEvent("onDeniedFloorRequest", "onDeniedFloorRequest", jsonObject);
    }

    @Override
    public void onReleasedFloorRequest(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReleasedFloorRequest", "onReleasedFloorRequest", jsonObject);
    }

    @Override
    public void onFileUploadStarted(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileUploadStarted", "onFileUploadStarted", jsonObject);
    }

    @Override
    public void onFileAvailable(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileAvailable", "onFileAvailable", jsonObject);
    }

    @Override
    public void onInitFileUpload(JSONObject jsonObject) {
        triggerSuccussJSEvent("onInitFileUpload", "onInitFileUpload", jsonObject);
    }

    @Override
    public void onFileUploaded(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileUploaded", "onFileUploaded", jsonObject);
    }

    @Override
    public void onFileUploadCancelled(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileUploadCancelled", "onFileUploadCancelled", jsonObject);
    }

    @Override
    public void onFileUploadFailed(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileUploadFailed", "onFileUploadFailed", jsonObject);
    }

    @Override
    public void onFileDownloaded(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileDownloaded", "onFileDownloaded", jsonObject);
    }

    @Override
    public void onFileDownloadCancelled(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileDownloadCancelled", "onFileDownloadCancelled", jsonObject);
    }

    @Override
    public void onFileDownloadFailed(JSONObject jsonObject) {
        triggerSuccussJSEvent("onFileDownloadFailed", "onFileDownloadFailed", jsonObject);
    }

    @Override
    public void onInitFileDownload(JSONObject jsonObject) {
        triggerSuccussJSEvent("onInitFileDownload", "onInitFileDownload", jsonObject);
    }

    @Override
    public void onAckLockRoom(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAckLockRoom", "onAckLockRoom", jsonObject);
    }

    @Override
    public void onAckUnLockRoom(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAckUnLockRoom", "onAckUnLockRoom", jsonObject);
    }

    @Override
    public void onLockedRoom(JSONObject jsonObject) {
        triggerSuccussJSEvent("onLockedRoom", "onLockedRoom", jsonObject);
    }

    @Override
    public void onUnLockedRoom(JSONObject jsonObject) {
        triggerSuccussJSEvent("onUnLockedRoom", "onUnLockedRoom", jsonObject);
    }

    @Override
    public void onLogUploaded(JSONObject jsonObject) {
        triggerSuccussJSEvent("onLogUploaded", "onLogUploaded", jsonObject);
    }

    @Override
    public void onHardMutedAudio(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardMutedAudio", "onHardMutedAudio", jsonObject);
    }

    @Override
    public void onHardUnMutedAudio(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardUnMutedAudio", "onHardUnMutedAudio", jsonObject);
    }

    @Override
    public void onReceivedHardMuteAudio(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardMuteAudio", "onReceivedHardMuteAudio", jsonObject);
    }

    @Override
    public void onReceivedHardUnMuteAudio(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardUnMuteAudio", "onReceivedHardUnMuteAudio", jsonObject);
    }

    @Override
    public void onHardMuted(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardMuted", "onHardMuted", jsonObject);
    }

    @Override
    public void onReceivedHardMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardMute", "onReceivedHardMute", jsonObject);
    }

    @Override
    public void onHardUnMuted(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardUnMuted", "onHardUnMuted", jsonObject);
    }

    @Override
    public void onReceivedHardUnMute(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardUnMute", "onReceivedHardUnMute", jsonObject);
    }

    @Override
    public void onHardMutedVideo(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardMutedVideo", "onHardMutedVideo", jsonObject);
    }

    @Override
    public void onHardUnMutedVideo(JSONObject jsonObject) {
        triggerSuccussJSEvent("onHardUnMutedVideo", "onHardUnMutedVideo", jsonObject);
    }

    @Override
    public void onReceivedHardMuteVideo(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardMuteVideo", "onReceivedHardMuteVideo", jsonObject);
    }

    @Override
    public void onReceivedHardUnMuteVideo(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedHardUnMuteVideo", "onReceivedHardUnMuteVideo", jsonObject);
    }

    @Override
    public void onConnectionInterrupted(JSONObject jsonObject) {
        triggerSuccussJSEvent("onConnectionInterrupted", "onConnectionInterrupted", jsonObject);
    }

    @Override
    public void onConnectionLost(JSONObject jsonObject) {
        triggerSuccussJSEvent("onConnectionLost", "onConnectionLost", jsonObject);
    }

    @Override
    public void onOutBoundCallInitiated(JSONObject jsonObject) {
        triggerSuccussJSEvent("onOutBoundCallInitiated", "onOutBoundCallInitiated", jsonObject);
    }

    @Override
    public void onDialStateEvents(EnxRoom.EnxOutBoundCallState enxOutBoundCallState) {
        triggerSuccussJSEvent("onDialStateEvents", "onDialStateEvents", enxOutBoundCallState);
    }

    @Override
    public void onPlayerStats(JSONObject jsonObject) {
        triggerSuccussJSEvent("onPlayerStats", "onPlayerStats", jsonObject);
    }

    @Override
    public void onReconnect(String s) {
        triggerSuccussJSEvent("onReconnect", "onReconnect", s);
    }

    @Override
    public void onUserReconnectSuccess(EnxRoom enxRoom, JSONObject jsonObject) {
        triggerSuccussJSEvent("onUserReconnectSuccess", "onUserReconnectSuccess", jsonObject);
    }

    @Override
    public void onStartRecordingEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStartRecordingEvent", "onStartRecordingEvent", jsonObject);
    }

    @Override
    public void onRoomRecordingOn(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRoomRecordingOn", "onRoomRecordingOn", jsonObject);
    }

    @Override
    public void onStopRecordingEvent(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStopRecordingEvent", "onStopRecordingEvent", jsonObject);
    }

    @Override
    public void onRoomRecordingOff(JSONObject jsonObject) {
        triggerSuccussJSEvent("onRoomRecordingOff", "onRoomRecordingOff", jsonObject);
    }

    @Override
    public void onAcknowledgeStats(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAcknowledgeStats", "onAcknowledgeStats", jsonObject);
    }

    @Override
    public void onReceivedStats(JSONObject jsonObject) {
        triggerSuccussJSEvent("onReceivedStats", "onReceivedStats", jsonObject);
    }

    @Override
    public void onSetTalkerCount(JSONObject jsonObject) {
        triggerSuccussJSEvent("onSetTalkerCount", "onSetTalkerCount", jsonObject);
    }

    @Override
    public void onGetTalkerCount(JSONObject jsonObject) {
        triggerSuccussJSEvent("onGetTalkerCount", "onGetTalkerCount", jsonObject);
    }

    @Override
    public void onMaxTalkerCount(JSONObject jsonObject) {
        triggerSuccussJSEvent("onMaxTalkerCount", "onMaxTalkerCount", jsonObject);
    }

    @Override
    public void onCanvasStarted(JSONObject jsonObject) {

    }

    @Override
    public void onCanvasStarted(EnxStream enxStream) {
        canvasShared = true;
        this.canvasShareStream = enxStream;
        triggerSuccussJSEvent("onCanvasStarted", "onCanvasStarted", "Canvas started");
    }

    @Override
    public void onCanvasStopped(JSONObject jsonObject) {

    }

    @Override
    public void onCanvasStopped(EnxStream enxStream) {
        canvasShared = false;
        triggerSuccussJSEvent("onCanvasStopped", "onCanvasStopped", "Canvas stopped");
    }

    @Override
    public void onScreenSharedStarted(JSONObject jsonObject) {

    }

    @Override
    public void onScreenSharedStopped(JSONObject jsonObject) {

    }

    @Override
    public void onScreenSharedStarted(EnxStream enxStream) {
        this.screenShared = true;
        this.screenShareStream = enxStream;
        triggerSuccussJSEvent("onScreenSharedStarted", "onScreenSharedStarted", "Screen shared started");
    }

    @Override
    public void onScreenSharedStopped(EnxStream enxStream) {
        this.screenShared = false;
        triggerSuccussJSEvent("onScreenSharedStopped", "onScreenSharedStopped", "Screen shared stopped");
    }

    @Override
    public void onAnnotationStarted(EnxStream enxStream) {
        triggerSuccussJSEvent("onAnnotationStarted", "onAnnotationStarted", "Annotation started");
    }

    @Override
    public void onStartAnnotationAck(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStartAnnotationAck", "onStartAnnotationAck", "Annotation started");
    }

    @Override
    public void onAnnotationStopped(EnxStream enxStream) {
        triggerSuccussJSEvent("onAnnotationStopped", "onAnnotationStopped", "Annotation stopped");
    }

    @Override
    public void onStoppedAnnotationAck(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStoppedAnnotationAck", "onStoppedAnnotationAck", "Annotation stopped");
    }

    @Override
    public void onStartCanvasAck(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStartCanvasAck", "onStartCanvasAck", jsonObject);
    }

    @Override
    public void onStoppedCanvasAck(JSONObject jsonObject) {
        triggerSuccussJSEvent("onStoppedCanvasAck", "onStoppedCanvasAck", jsonObject);
    }

    @Override
    public void onAckDropUser(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAckDropUser", "onAckDropUser", jsonObject);
    }

    @Override
    public void onAckDestroy(JSONObject jsonObject) {
        triggerSuccussJSEvent("onAckDestroy", "onAckDestroy", jsonObject);
    }

    private class OnDragTouchListener implements View.OnTouchListener {

        private View mView;
        private View mParent;
        private boolean isDragging;
        private boolean isInitialized = false;

        private int width;
        private float xWhenAttached;
        private float maxLeft;
        private float maxRight;
        private float dX;

        private int height;
        private float yWhenAttached;
        private float maxTop;
        private float maxBottom;
        private float dY;

        public OnDragTouchListener(View view) {
            initListener(view, (View) view.getParent());
        }

        @Override
        public boolean onTouch(View v, MotionEvent event) {
            if (isDragging) {
                float[] bounds = new float[4];
                // LEFT
                bounds[0] = event.getRawX() - 250 /* + dX */;
                if (bounds[0] < maxLeft) {
                    bounds[0] = maxLeft;
                }
                // RIGHT
                bounds[2] = bounds[0] + width;
                if (bounds[2] > maxRight) {
                    bounds[2] = maxRight;
                    bounds[0] = bounds[2] - width;
                }
                // TOP
                bounds[1] = event.getRawY() - 250/* + dY */;
                if (bounds[1] < maxTop) {
                    bounds[1] = maxTop;
                }
                // BOTTOM
                bounds[3] = bounds[1] + height;
                if (bounds[3] > maxBottom) {
                    bounds[3] = maxBottom;
                    bounds[1] = bounds[3] - height;
                }

                switch (event.getAction()) {
                    case MotionEvent.ACTION_CANCEL:
                    case MotionEvent.ACTION_UP:
                        onDragFinish();
                        break;
                    case MotionEvent.ACTION_MOVE:
                        mView.animate().x(bounds[0]).y(bounds[1]).setDuration(0).start();
                        break;
                }
                return true;
            } else {
                switch (event.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        isDragging = true;
                        if (!isInitialized) {
                            updateBounds();
                        }
                        dX = v.getX() - event.getRawX();
                        dY = v.getY() - event.getRawY();
                        return true;
                }
            }
            return false;
        }

        public void initListener(View view, View parent) {
            mView = view;
            mParent = parent;
            isDragging = false;
            isInitialized = false;
        }

        public void updateBounds() {
            updateViewBounds();
            updateParentBounds();
            isInitialized = true;
        }

        public void updateViewBounds() {
            width = mView.getWidth();
            xWhenAttached = mView.getX();
            dX = 0;

            height = mView.getHeight();
            yWhenAttached = mView.getY();
            dY = 0;
        }

        public void updateParentBounds() {
            maxLeft = 0;
            maxRight = maxLeft + mParent.getWidth();

            maxTop = 0;
            maxBottom = maxTop + mParent.getHeight();
        }

        private void onDragFinish() {
            dX = 0;
            dY = 0;
            isDragging = false;
        }
    }
}
