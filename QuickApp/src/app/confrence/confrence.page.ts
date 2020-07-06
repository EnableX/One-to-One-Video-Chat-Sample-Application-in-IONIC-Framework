import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

declare var window: any;
@Component({
  selector: 'app-confrence',
  templateUrl: './confrence.page.html',
  styleUrls: ['./confrence.page.scss'],
})
export class ConfrencePage implements OnInit {
  audioimgSrc: string = "../../assets/icon/unmute_audio.png";
  videoimgSrc: string = "../../assets/icon/unmute_video.png";
  speakerImgSrc: string = "../../assets/icon/mute_speaker.png";
  audioMute: boolean = false;
  videoMute: boolean = false;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }
  ngOnInit() {
    console.log('ionViewDidLoad SegmentPage');
    this.route.queryParams.subscribe(params => {
      console.log('ionViewDidLoad SegmentPage' + params["token"]);
      var videoSize = {
        minWidth: 320,
        minHeight: 180,
        maxWidth: 1280,
        maxHeight: 720,
      };
      var streamOpt = {
        audio: true,
        video: true,
        data: true,
        audioOnlyMode: false,
        framerate: 30,
        maxVideoBW: 1500,
        minVideoBW: 150,
        videoSize: videoSize,
        audioMuted: false,
        videoMuted: false,
        maxVideoLayers: 1,
        name: params["name"]
      };
      var playerConfiguration = {
        audiomute: true,
        videomute: true,
        bandwidth: true,
        screenshot: true,
        avatar: true,
        iconHeight: 30,
        iconWidth: 30,
        avatarHeight: 200,
        avatarWidth: 200,
      };
      var roomOpt = {
        activeviews: "list",
        allow_reconnect: true,
        number_of_attempts: 3,
        timeout_interval: 15,
        playerConfiguration: playerConfiguration,
        chat_only: false,
      };
      window.EnxCordovaPlugin.joinRoom(params["token"], streamOpt, roomOpt)
      this.addEnxListner();
    });

  }

  //Init LocalView
  initLocalView() {
    console.log('Excelsior initLocalView! ');
    var initLocalViewOptions = {
      height: 130,
      width: 100,
      margin_top: 60,
      margin_left: 0,
      margin_right: 15,
      margin_bottom: 10,
      position: "top"
    };
    window.EnxCordovaPlugin.initLocalView(initLocalViewOptions, function (data) {
      console.log('Local player Excelsior succuss! ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error' + JSON.stringify(err));
    });
  }
  initRemoteView() {
    var initRemoteViewOptions = {
      margin_top: 32,
      margin_bottom: 60
    };
    window.EnxCordovaPlugin.initRemoteView(initRemoteViewOptions, function (data) {
      console.log('Remore Player Excelsior succuss! ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error' + JSON.stringify(err));
    });
  }
  //Add listoner 
  addEnxListner() {
    let _this = this;
    window.EnxCordovaPlugin.addEventListner("onRoomConnected", function (data) {
      console.log('Excelsior succuss! resizeViewOptions ' + JSON.stringify(data.data));
      _this.initLocalView();
      _this.initRemoteView();
    });
    window.EnxCordovaPlugin.addEventListner("onRoomDisConnected", function (data) {
      console.log('Excelsior succuss! onRoomDisConnected ' + JSON.stringify(data.data));
      _this.goBackToPriviousPage();
    });
    window.EnxCordovaPlugin.addEventListner("onEventError", function (data) {
      console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
    });
    window.EnxCordovaPlugin.addEventListner("onAudioEvent", function (data) {
      console.log('Excelsior succuss! onAudioEvent ' + JSON.stringify(data.data.result));
      var response = data.data;
      console.log("audio msg" + typeof response.msg);
      console.log("audio variable msg" + response.msg + 'hello');
      if (response.msg === 'Audio Off') {
        console.log("function condition get");
        _this.audioMute = true;
        _this.audioimgSrc = "../../assets/icon/unmute_audio.png";
      }
      else {
        console.log("function condition offff get");
        _this.audioMute = false;
        _this.audioimgSrc = "../../assets/icon/mute_audio.png";
      }
    });
    window.EnxCordovaPlugin.addEventListner("onVideoEvent", function (data) {
      console.log('Excelsior succuss! onVideoEvent ' + JSON.stringify(data.data));
      var response = data.data;
      console.log("Video msg" + response.msg);
      if (response.msg === "Video Off") {
        _this.videoMute = true;
        _this.videoimgSrc = "../../assets/icon/unmute_video.png";
      }
      else {
        _this.videoMute = false;
        _this.videoimgSrc = "../../assets/icon/mute_video.png";
      }

    });
    window.EnxCordovaPlugin.addEventListner("onEventError", function (data) {
      console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
    });
    window.EnxCordovaPlugin.addEventListner("onNotifyDeviceUpdate", function (data) {
      console.log('Excelsior EventError! onNotifyDeviceUpdate ' + JSON.stringify(data.data));
      var deviceName = data.data;
      if (deviceName === "EARPIECE") {
        _this.speakerImgSrc = "../../assets/icon/unmute_speaker.png";
      }
      else {
        _this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
      }
    });
  }
  goBackToPriviousPage() {
    this.navCtrl.pop();
  }
  muteUnMuteAudio() {
    console.log("Image Click");
    if (!this.audioMute) {
      console.log("Audio Mute");
      window.EnxCordovaPlugin.muteSelfAudio(true);
    }
    else {
      console.log("Audio unMute");
      window.EnxCordovaPlugin.muteSelfAudio(false);
    }
  }
  muteUnMuteVideo() {
    console.log("Image Click");
    if (!this.videoMute) {
      window.EnxCordovaPlugin.muteSelfVideo(true);
    }
    else {
      window.EnxCordovaPlugin.muteSelfVideo(false);
    }
  }
  disconnect() {
    window.EnxCordovaPlugin.disconnect(false, function (data) {
      console.log('Excelsior succuss! hideSelfView ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
    });
  }
  switchCamera() {
    window.EnxCordovaPlugin.switchCamera(false, function (data) {
      console.log('Excelsior succuss! Switch Camera ' + JSON.stringify(data.data));
    }, function (err) {
      console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
    });
  }
  cheangAudioMedia() {
    window.EnxCordovaPlugin.getSelectedDevice(function (data) {
      console.log('Excelsior succuss! getSelectedDevice ' + JSON.stringify(data.data));
      var currentDevice = data.data;
      window.EnxCordovaPlugin.getDevices(function (data) {
        console.log('Excelsior succuss! getDevices ' + JSON.stringify(data.data));
        var connectedMedia = data.data;
        console.log("fileter media " + connectedMedia);
        var meida;
        for (meida of connectedMedia) {
          if (meida === currentDevice) {
            console.log("Available Media" + meida);
          }
          else {
            window.EnxCordovaPlugin.switchMediaDevice(meida, function (data) {
              console.log('Excelsior succuss! switchMediaDevice ' + JSON.stringify(data.data));
            }, function (err) {
              console.log('Uh oh... error resizeLocalView ' + JSON.stringify(err));
            });
            break;
          }
        }
      })
    })
  }
}



