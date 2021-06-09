
var exec = require('cordova/exec');

var PLUGIN_NAME = 'EnxRtc';

var EnxCordovaPlugin = {

  /**
   * Its a Event Listener to liseten callbacks in the room.
   * @param {String} eventName 
   * @param {CallableFunction} successCallback 
   */
  addEventListner: function (eventName, successCallback) {
    console.log('deviceready  addEventListner');
    var options = {};
    exec(successCallback, null, PLUGIN_NAME, eventName, [options]);
  },

  /**
   * To quick start and join the room.
   * @param {String} token token it is encoded token string received from Enx application server.
   * @param {JSON} publishStreamInfo  publishStreamInfo for local streams
   * @param {JSON} roomInfo 
   */
  joinRoom: function (token, publishStreamInfo, roomInfo, successCallback, errorCallback) {
    var options = {};
    options.token = token;
    options.publishStreamInfo = publishStreamInfo;
    options.roomInfo = roomInfo;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'joinRoom', [options]);
  },

  /**
   * This method is used to initialize the Local view.
   * @param {JSON} localviewOptions 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  initLocalView: function (localviewOptions, successCallback, errorCallback) {
    var options = {};
    options.localviewOptions = localviewOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'initLocalView', [options]);
  },

  /**
   * This method is used to initialize the Remote view.
   * @param {JSON} remoteviewOptions
   * @param {CallableFunction} successCallback
   * @param {CallableFunction} errorCallback
   */
  initRemoteView: function (remoteviewOptions, successCallback, errorCallback) {
    var options = {};
    options.remoteviewOptions = remoteviewOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'initRemoteView', [options]);
  },

  /**
   * Used to add screen share view in the room.
   * @param {JSON} options 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  addScreenShare: function (viewoptions, successCallback, errorCallback) {
    var options = {};
    options.viewOptions = viewoptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'addScreenShare', [options]);
  },

  /**
   * Used to remove screenshare view which is already stopped in the room.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  removeScreenShare: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'removeScreenShare', [options]);
  },

  /**
   * Used to add canvas screen view in the room.
   * @param {JSON} options 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  addCanvasScreen: function (viewoptions, successCallback, errorCallback) {
    var options = {};
    options.viewOptions = viewoptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'addCanvasScreen', [options]);
  },

  /**
   * Used to remove canvas screen view which is already stopped in the room.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  removeCanvasScreen: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'removeCanvasScreen', [options]);
  },

  /**
   * Used to start or stop dragging and moving view.
   * @param {String} view - It should be local for localview and remote for remoteview
   * @param {boolean} drag - true for start dragging/moving and false for stop dragging/moving
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  startDragging: function (view, drag, successCallback, errorCallback) {
    var options = {};
    options.view = view;
    options.drag = drag;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'startDragging', [options]);
  },

  /**
   * Used to hide(true) and unhide(false) localView during conference
   * @param {boolean} hide 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  hideSelfView: function (hide, successCallback, errorCallback) {
    var options = {};
    options.hide = hide;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'hideSelfView', [options]);
  },


  /**
   * Used to hide(true) and unhide(false) remote during conference
   * @param {boolean} hide 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  hideRemoteView: function (hide, successCallback, errorCallback) {
    var options = {};
    options.hide = hide;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'hideRemoteView', [options]);
  },

  /**
   * Used to hide(true) and unhide(false) screen share during conference
   * @param {boolean} hide 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  hideScreenShareView: function (hide, successCallback, errorCallback) {
    var options = {};
    options.hide = hide;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'hideScreenShareView', [options]);
  },

  /**
   * Used to hide(true) and unhide(false) canvas during conference
   * @param {boolean} hide 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  hideCanvasScreen: function (hide, successCallback, errorCallback) {
    var options = {};
    options.hide = hide;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'hideCanvasScreen', [options]);
  },


  /**
   * This method is used to resize the Local view.
   * @param {JSON} resizeOptions
   * @param {CallableFunction} successCallback
   * @param {CallableFunction} errorCallback
   */
  resizeLocalView: function (resizeOptions, successCallback, errorCallback) {
    var options = {};
    options.resizeOptions = resizeOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'resizeLocalView', [options]);
  },

  /**
   * This method is used to resize the Remote view.
   * @param {JSON} resizeOptions
   * @param {CallableFunction} successCallback
   * @param {CallableFunction} errorCallback
   */
  resizeRemoteView: function (resizeOptions, successCallback, errorCallback) {
    var options = {};
    options.resizeOptions = resizeOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'resizeRemoteView', [options]);
  },

  /**
  * This method is used to mute/unmute audio during conference.
  * @param {Boolean} audio - true/fase
  */
  muteSelfAudio: function (audio) {
    var options = {};
    options.muteAudio = audio;
    exec(null, null, PLUGIN_NAME, 'muteSelfAudio', [options]);
  },

  /**
   * This method is used to mute/unmute video during conference.
   * @param {boolean} video  - true/false
   */
  muteSelfVideo: function (video) {
    var options = {};
    options.muteVideo = video;
    exec(null, null, PLUGIN_NAME, 'muteSelfVideo', [options]);
  },

  /**
   * Method used to switch camrera
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  switchCamera: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'switchCamera', [options]);
  },

  /**
   * To disconnect the connected room.
   */
  disconnect: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'disconnect', [options]);
  },

  /**
   * This method will Switch to selected media device
   * @param {String} device 
   */
  switchMediaDevice: function (device) {
    var options = {};
    options.device = device;
    exec(null, null, PLUGIN_NAME, 'switchMediaDevice', [options]);
  },

  /**
   * This method is used to check current selected Audio device 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getSelectedDevice: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getSelectedDevice', [options]);
  },

  /**
   * This method is used to get all list of connected Audio Device
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getDevices: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getDevices', [options]);
  },

  /**
   * To get of number of talker count 
   */
  getTalkerCount: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'getTalkerCount', [options]);
  },

  /**
   * This method is available for all users during Active Talker Mode. Using this method, you can get maximum number of allowed Active Talkers in the room. 
   */
  getMaxTalkers: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'getMaxTalkers', [options]);
  },

  /**
   * The setTalkerCount method is used to opt total number of streams to receive at a Client End point in Active Talkers.
   * @param {Number} count 
   */
  setTalkerCount: function (count) {
    var options = {};
    options.count = count;
    exec(null, null, PLUGIN_NAME, 'setTalkerCount', [options]);
  },

  /**
   * To post Enx client SDK logs to server use the below method.
   Note: To post client logs, first developer needs to enable the logs.
   */
  postClientLogs: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'postClientLogs', [options]);
  },

  /**
   * To enable logs of EnableX SDK.
   * @param {boolean} enable 
   */
  enableLogs: function (enable) {
    var options = {};
    options.enable = enable;
    exec(null, null, PLUGIN_NAME, 'enableLogs', [options]);
  },

  /**
   * Client end point use this method to active/inactive audio of all subscribe streams.
   * @param {boolean} mute 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  muteSubscribeStreamsAudio: function (mute, successCallback, errorCallback) {
    var options = {};
    options.mute = mute;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'muteSubscribeStreamsAudio', [options]);
  },

  /**
   * To run the call on audio only mode. True to enable and false to disable
   * @param {boolean} audioOnly 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  setAudioOnlyMode: function (audioOnly, successCallback, errorCallback) {
    var options = {};
    options.audioOnly = audioOnly;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'setAudioOnlyMode', [options]);
  },

  /**
   * streamType which should be "talker/canvas".
     This API use to get the remote video stream quality.
   * @param {String} streamType 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getReceiveVideoQuality: function (streamType, successCallback, errorCallback) {
    var options = {};
    options.streamType = streamType;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getReceiveVideoQuality', [options]);
  },

  /**
   * This method is used to set video quality.
   * @param {JSON} videoQualityOptions 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  setReceiveVideoQuality: function (videoQualityOptions, successCallback, errorCallback) {
    var options = {};
    options.videoQualityOptions = videoQualityOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'setReceiveVideoQuality', [options]);
  },

  /**
   * This method is used to adjust div of remote streams. if user pass view in the remoteviewOptions of initRemoteView function.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  adjustLayout: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'adjustLayout', [options]);
  },

  /**
   * This method is used to update bandwidth configuaration on the streams.
   * @param {JSON} configuartionOptions 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  updateConfiguration: function (configuartionOptions, successCallback, errorCallback) {
    var options = {};
    options.configuartionOptions = configuartionOptions;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'updateConfiguration', [options]);
  },

  /**
   * This API is only available during Lecture Mode of a Session. Each Participant Raise hand Control can individually be asked to Join the floor using this API Call. This API calls are only available to users with role “Participant”
   */
  requestFloor: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'requestFloor', [options]);
  },

  /**
   * This API is only available during Lecture Mode of a Session. Each Participant can cancel the Raise hand using this API Call. This API calls are only available to users with role “Participant”
   */
  cancelFloor: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'cancelFloor', [options]);
  },

  /**
  * This API is only available during Lecture Mode of a Session. Each Participant can finish the Raise hand using this API Call. This API calls are only available to users with role “Participant”
  */
  finishFloor: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'finishFloor', [options]);
  },

  /**
   * This API is only available during Lecture Mode. Each Participant requested Floor Control can individually be granted access to the Floor using this API Call. 
   * These API calls are only available to users with role “Moderator”.
   * @param {String} clientId It’s the Client ID for the participant whom access is being granted.
   */
  grantFloor: function (clientId) {
    var options = {};
    options.clientId = clientId;
    exec(null, null, PLUGIN_NAME, 'grantFloor', [options]);
  },

  /**
   * This API is only available during Lecture Mode of a Session. Each Participant requested Floor Control can individually be denied access to the Floor using this API Call.
   * This API calls are only available to users with role “Moderator”.
   * @param {String} clientId It’s the Client ID for the participant who is being denied access to the floor.
   */
  denyFloor: function (clientId) {
    var options = {};
    options.clientId = clientId;
    exec(null, null, PLUGIN_NAME, 'denyFloor', [options]);
  },

  /**
   * This API is only available during Lecture Mode of a Session. Each Participant granted Floor Control can individually be asked to release the floor Control using this API Call. 
   * This API calls are only available to users with role “Moderator”.
   * @param {String} clientId It’s the Client ID for the participant who is being release to the floor.
   */
  releaseFloor: function (clientId) {
    var options = {};
    options.clientId = clientId;
    exec(null, null, PLUGIN_NAME, 'releaseFloor', [options]);
  },

  /**
   * To extend conference duration.
   */
  extendConferenceDuration: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'extendConferenceDuration', [options]);
  },

  /**
   * To lock room and no participant allow to join when room is lock.
   * This method is only for moderator.
   */
  lockRoom: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'lockRoom', [options]);
  },

  /**
   * To unlock room when room is locked.
   * This method is only for moderator.
   */
  unLockRoom: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'unLockRoom', [options]);
  },

  /**
   * To drop/disconnect other clients.
   * This method is only for modeartor.
   * @param {Array} jsonArray 
   */
  dropUser: function (jsonArray) {
    var options = {};
    options.jsonArray = jsonArray;
    exec(null, null, PLUGIN_NAME, 'dropUser', [options]);
  },

  /**
   * To disconnect all the participants present in the room.
   * This method is only for moderator.
   */
  destroy: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'destroy', [options]);
  },

  /**
   * To mute all other participants audio stream.
   * Hardmute functionality is only applicable to moderator.
   */
  hardMute: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'hardMute', [options]);
  },

  /**
   * To unmute all other participants audio stream.
   * Hardmute functionality is only applicable to moderator. 
   */
  hardUnMute: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'hardUnMute', [options]);
  },

  /**
   * To start recording in the connected room.
   */
  startRecord: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'startRecord', [options]);
  },

  /**
   * To stop recording in the connected room.
   */
  stopRecord: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'stopRecord', [options]);
  },

  /**
   * Client endpoint will call this method to a mute/unmute remote stream while application in the background.
   * @param {boolean} videoMuteRemoteStream 
   * @param {boolean} videoMuteLocalStream 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  stopVideoTracksOnApplicationBackground: function (videoMuteRemoteStream, videoMuteLocalStream, successCallback, errorCallback) {
    var options = {};
    options.videoMuteRemoteStream = videoMuteRemoteStream;
    options.videoMuteLocalStream = videoMuteLocalStream;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'stopVideoTracksOnApplicationBackground', [options]);
  },

  /**
   * Client endpoint will call this method to a mute/unmute remote stream while application in the foreground.
   * @param {boolean} restoreVideoRemoteStream 
   * @param {boolean} restoreVideoLocalStream 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  startVideoTracksOnApplicationForeground: function (restoreVideoRemoteStream, restoreVideoLocalStream, successCallback, errorCallback) {
    var options = {};
    options.restoreVideoRemoteStream = restoreVideoRemoteStream;
    options.restoreVideoLocalStream = restoreVideoLocalStream;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'startVideoTracksOnApplicationForeground', [options]);
  },

  /**
   * Client End point will call this method to enable/disable stats by passing flag = true/false
   * 'true' for enable stats and 'false' for disable Stats
   * @param {boolean} enableStats 
   */
  enableStats: function (enableStats) {
    var options = {};
    options.enableStats = enableStats;
    exec(null, null, PLUGIN_NAME, 'enableStats', [options]);
  },

  /**
   * Client endpoint can use this method to switch role moderator can pass the role to any participant.
   * @param {String} clientId 
   */
  switchUserRole: function (clientId) {
    var options = {};
    options.clientId = clientId;
    exec(null, null, PLUGIN_NAME, 'switchUserRole', [options]);
  },

  /**
   * To make outbound call using client number.
   * @param {String} text use mobile number with std code.
   */
  makeOutboundCall: function (text,callid) {
    var options = {};
    options.text = text;
    options.callerId = callid;
    exec(null, null, PLUGIN_NAME, 'makeOutboundCall', [options]);
  },

  /**
   * To send chat message to the other clients.
   * @param {String} text 
   * @param {boolean} broadcast 
   * @param {Array} array 
   */
  sendMessage: function (text, broadcast, array) {
    var options = {};
    options.text = text;
    options.broadcast = broadcast;
    options.array = array;
    exec(null, null, PLUGIN_NAME, 'sendMessage', [options]);
  },

  /**
   * To send custom chat message to the other clients.
   * @param {JSON} json 
   * @param {boolean} broadcast 
   * @param {Array} array 
   */
  sendUserData: function (json, broadcast, array) {
    var options = {};
    options.message = json;
    options.broadcast = broadcast;
    options.array = array;
    exec(null, null, PLUGIN_NAME, 'sendUserData', [options]);
  },

  /**
   * To set advance option in the connected room
   * @param {Array} array 
   */
  setAdvancedOptions: function (array) {
    var options = {};
    options.array = array;
    exec(null, null, PLUGIN_NAME, 'setAdvancedOptions', [options]);
  },

  /**
   * To get Advance options set by client endpoint.
   */
  getAdvancedOptions: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'getAdvancedOptions', [options]);
  },


  /**
   * To send files to the other clients.
   * @param {boolean} broadcast broadCast true to send all the clients and false to send given recipientIDs.
   * @param {Array} array clientIds/recipientIDs
   */
  sendFiles: function (broadcast, array) {
    var options = {};
    options.broadcast = broadcast;
    options.array = array;
    exec(null, null, PLUGIN_NAME, 'sendFiles', [options]);
  },

  /**
   * *To download files that received from other clients
   * @param {JSON} json 
   * @param {boolean} isAutoSave 
   */
  downloadFile: function (json, isAutoSave) {
    var options = {};
    options.json = json;
    options.isAutoSave = isAutoSave;
    exec(null, null, PLUGIN_NAME, 'downloadFile', [options]);
  },

  /**
   * To cancel upload files to the other clients.
   * @param {Number} jobId 
   */
  cancelUpload: function (jobId) {
    var options = {};
    options.jobId = jobId;
    exec(null, null, PLUGIN_NAME, 'cancelUpload', [options]);
  },

  /**
   * To cancel download files that received from other clients.
   * @param {Number} jobId 
   */
  cancelDownload: function (jobId) {
    var options = {};
    options.jobId = jobId;
    exec(null, null, PLUGIN_NAME, 'cancelDownload', [options]);
  },

  /**
   * To cancel all upload files to the other clients.
   */
  cancelAllUploads: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'cancelAllUploads', [options]);
  },

  /**
   * To cancel all downloads files to the other clients.
   */
  cancelAllDownloads: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'cancelAllDownloads', [options]);
  },

  /**
   * Get all available files in connected room
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getAvailableFiles: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getAvailableFiles', [options]);
  },

  /**
   * To get self client Id.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getClientId: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getClientId', [options]);
  },

  /**
   *  To get roomId. 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getRoomId: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getRoomId', [options]);
  },

  /**
   * To get self client Name.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getClientName: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getClientName', [options]);
  },

  /**
   * To get local Streamid
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getLocalStreamID: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getLocalStreamID', [options]);
  },

  /**
   *  Get all available users in connected room
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getUserList: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getUserList', [options]);
  },

  /**
   * Get RoomMeta data of the room.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getRoomMetadata: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getRoomMetadata', [options]);
  },

  /**
   * Used lto check client is connected or not. 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  isConnected: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'isConnected', [options]);
  },

  /**
   * To eanble proximity sensor. true for enable and false for disable.
   * @param {boolean} status 
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback
   */
  enableProximitySensor: function (status,successCallback, errorCallback) {
    var options = {};
    options.status = status;
    exec(successCallback, errorCallback, PLUGIN_NAME, 'enableProximitySensor', [options]);
  },

  /**
   * TO get mode of room.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getMode: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getMode', [options]);
  },

  /**
   * To get self client role.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  getRole: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getRole', [options]);
  },

  /**
   * Method used to get user-meta information about the user connected on a End-Point.
   * @param {CallableFunction} successCallback 
   * @param {CallableFunction} errorCallback 
   */
  whoAmI: function (successCallback, errorCallback) {
    var options = {};
    exec(successCallback, errorCallback, PLUGIN_NAME, 'whoAmI', [options]);
  },

  /**
   * To start Annotation on given client ID
   * @param {String} clientid 
   */
  startAnnotation: function (clientid) {
    var options = {};
    options.clientId = clientid;
    exec(null, null, PLUGIN_NAME, 'startAnnotation', [options]);
  },

  /**
   * To stop Annotation.
   */
  stopAnnotations: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'stopAnnotations', [options]);
  },

  /**
   * To pin user.
   */
  pinUsers: function (jsonArray) {
    var options = {};
    options.jsonArray = jsonArray;
    exec(null, null, PLUGIN_NAME, 'pinUsers', [options]);
  },


  /**
   * To unpin user.
   */
  unpinUsers: function (jsonArray) {
    var options = {};
    options.jsonArray = jsonArray;
    exec(null, null, PLUGIN_NAME, 'unpinUsers', [options]);
  },

  /**
  * Dumy Method.
  * @param nil
  * @param nil
  */
  getPrint: function () {
    var options = {};
    exec(null, null, PLUGIN_NAME, 'getPrint', [options]);
  }
};

module.exports = EnxCordovaPlugin;
