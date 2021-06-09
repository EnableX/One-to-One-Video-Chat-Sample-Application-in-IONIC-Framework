function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confrence-confrence-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfrenceConfrencePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div class=\"myClass\">\n    <div id=\"bottom_link\" #bottom_link>\n      <img class=\"image\" src=\"{{audioimgSrc}}\" id=\"button1\" (click)=\"muteUnMuteAudio()\">\n      <img class=\"image\" src=\"{{videoimgSrc}}\" id=\"button2\" (click)=\"muteUnMuteVideo()\">\n      <img class=\"image\" src=\"../../assets/icon/disconnect.png\" id=\"button3\" (click)=\"disconnect()\">\n      <img class=\"image\" src=\"../../assets/icon/camera_switch.png\" id=\"button4\" (click)=\"switchCamera()\">\n      <img class=\"image\" src=\"{{speakerImgSrc}}\" id=\"button5\" (click)=\"cheangAudioMedia()\">\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/confrence/confrence-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/confrence/confrence-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ConfrencePageRoutingModule */

  /***/
  function srcAppConfrenceConfrenceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePageRoutingModule", function () {
      return ConfrencePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _confrence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confrence.page */
    "./src/app/confrence/confrence.page.ts");

    var routes = [{
      path: '',
      component: _confrence_page__WEBPACK_IMPORTED_MODULE_3__["ConfrencePage"]
    }];

    var ConfrencePageRoutingModule = function ConfrencePageRoutingModule() {
      _classCallCheck(this, ConfrencePageRoutingModule);
    };

    ConfrencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfrencePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/confrence/confrence.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/confrence/confrence.module.ts ***!
    \***********************************************/

  /*! exports provided: ConfrencePageModule */

  /***/
  function srcAppConfrenceConfrenceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePageModule", function () {
      return ConfrencePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confrence-routing.module */
    "./src/app/confrence/confrence-routing.module.ts");
    /* harmony import */


    var _confrence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confrence.page */
    "./src/app/confrence/confrence.page.ts");

    var ConfrencePageModule = function ConfrencePageModule() {
      _classCallCheck(this, ConfrencePageModule);
    };

    ConfrencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confrence_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfrencePageRoutingModule"]],
      declarations: [_confrence_page__WEBPACK_IMPORTED_MODULE_6__["ConfrencePage"]]
    })], ConfrencePageModule);
    /***/
  },

  /***/
  "./src/app/confrence/confrence.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/confrence/confrence.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfrenceConfrencePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#bottom_link {\n  position: absolute;\n  display: inline-block;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  width: 100%;\n  height: 60px;\n}\n\n.myClass {\n  background-color: lightgray;\n  height: 100%;\n  width: 100%;\n}\n\n#button1, #button2, #button3, #button4, #button5 {\n  width: 40px;\n  height: 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYW5rYWpwYW5kZXkvRGVza3RvcC9Db3Jkb3ZhL09uZS10by1PbmUtVmlkZW8tQ2hhdC1TYW1wbGUtQXBwbGljYXRpb24taW4tSU9OSUMtRnJhbWV3b3JrL1F1aWNrQXBwL3NyYy9hcHAvY29uZnJlbmNlL2NvbmZyZW5jZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbmZyZW5jZS9jb25mcmVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENDO0VBQ0csMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb25mcmVuY2UvY29uZnJlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3R0b21fbGlua3tcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgICAgICAgICAgICAgXG4gICAgYm90dG9tOjA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgbGVmdDowOyAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiB9XG4gLm15Q2xhc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2J1dHRvbjEsICNidXR0b24yLCNidXR0b24zLCNidXR0b240LCNidXR0b241e1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIG1hcmdpbi1yaWdodDogNCU7XG59XG4gICAgIiwiI2JvdHRvbV9saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5teUNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYnV0dG9uMSwgI2J1dHRvbjIsICNidXR0b24zLCAjYnV0dG9uNCwgI2J1dHRvbjUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/confrence/confrence.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/confrence/confrence.page.ts ***!
    \*********************************************/

  /*! exports provided: ConfrencePage */

  /***/
  function srcAppConfrenceConfrencePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfrencePage", function () {
      return ConfrencePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ConfrencePage = /*#__PURE__*/function () {
      function ConfrencePage(route, navCtrl) {
        _classCallCheck(this, ConfrencePage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.audioimgSrc = "../../assets/icon/unmute_audio.png";
        this.videoimgSrc = "../../assets/icon/unmute_video.png";
        this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
        this.audioMute = false;
        this.videoMute = false;
      }

      _createClass(ConfrencePage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad SegmentPage');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          console.log('ionViewDidLoad SegmentPage');
          this.route.queryParams.subscribe(function (params) {
            console.log('ionViewDidLoad SegmentPage' + params["token"]);
            var videoSize = {
              minWidth: 320,
              minHeight: 180,
              maxWidth: 1280,
              maxHeight: 720
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
              avatarWidth: 200
            };
            var roomOpt = {
              activeviews: "list",
              allow_reconnect: true,
              number_of_attempts: 3,
              timeout_interval: 15,
              playerConfiguration: playerConfiguration,
              chat_only: false
            };
            window.EnxRtc.joinRoom(params["token"], streamOpt, roomOpt);

            _this2.addEnxListner();
          });
        } //Init LocalView

      }, {
        key: "initLocalView",
        value: function initLocalView() {
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
          window.EnxRtc.initLocalView(initLocalViewOptions, function (data) {
            console.log('Local player Excelsior succuss! ' + JSON.stringify(data.data));
          }, function (err) {
            console.log('Uh oh... error' + JSON.stringify(err));
          });
        }
      }, {
        key: "initRemoteView",
        value: function initRemoteView() {
          var initRemoteViewOptions = {
            margin_top: 32,
            margin_bottom: 60
          };
          window.EnxRtc.initRemoteView(initRemoteViewOptions, function (data) {
            console.log('Remore Player Excelsior succuss! ' + JSON.stringify(data.data));
          }, function (err) {
            console.log('Uh oh... error' + JSON.stringify(err));
          });
        } //Add listoner 

      }, {
        key: "addEnxListner",
        value: function addEnxListner() {
          var _this = this;

          window.EnxRtc.addEventListner("onRoomConnected", function (data) {
            console.log('Excelsior succuss! resizeViewOptions ' + JSON.stringify(data.data));

            _this.initLocalView();

            _this.initRemoteView();
          });
          window.EnxRtc.addEventListner("onRoomDisConnected", function (data) {
            console.log('Excelsior succuss! onRoomDisConnected ' + JSON.stringify(data.data));

            _this.goBackToPriviousPage();
          });
          window.EnxRtc.addEventListner("onEventError", function (data) {
            console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
          });
          window.EnxRtc.addEventListner("onAudioEvent", function (data) {
            console.log('Excelsior succuss! onAudioEvent ' + JSON.stringify(data.data.result));
            var response = data.data;
            console.log("audio msg" + typeof response.msg);
            console.log("audio variable msg" + response.msg + 'hello');

            if (response.msg === 'Audio Off') {
              console.log("function condition get");
              _this.audioMute = true;
              _this.audioimgSrc = "../../assets/icon/unmute_audio.png";
            } else {
              console.log("function condition offff get");
              _this.audioMute = false;
              _this.audioimgSrc = "../../assets/icon/mute_audio.png";
            }
          });
          window.EnxRtc.addEventListner("onVideoEvent", function (data) {
            console.log('Excelsior succuss! onVideoEvent ' + JSON.stringify(data.data));
            var response = data.data;
            console.log("Video msg" + response.msg);

            if (response.msg === "Video Off") {
              _this.videoMute = true;
              _this.videoimgSrc = "../../assets/icon/unmute_video.png";
            } else {
              _this.videoMute = false;
              _this.videoimgSrc = "../../assets/icon/mute_video.png";
            }
          });
          window.EnxRtc.addEventListner("onEventError", function (data) {
            console.log('Excelsior EventError! onEventError ' + JSON.stringify(data.data));
          });
          window.EnxRtc.addEventListner("onNotifyDeviceUpdate", function (data) {
            console.log('Excelsior EventError! onNotifyDeviceUpdate ' + JSON.stringify(data.data));
            var deviceName = data.data;

            if (deviceName === "EARPIECE") {
              _this.speakerImgSrc = "../../assets/icon/unmute_speaker.png";
            } else {
              _this.speakerImgSrc = "../../assets/icon/mute_speaker.png";
            }
          });
        }
      }, {
        key: "goBackToPriviousPage",
        value: function goBackToPriviousPage() {
          this.navCtrl.pop();
        }
      }, {
        key: "muteUnMuteAudio",
        value: function muteUnMuteAudio() {
          console.log("Image Click");

          if (!this.audioMute) {
            console.log("Audio Mute");
            window.EnxRtc.muteSelfAudio(true);
          } else {
            console.log("Audio unMute");
            window.EnxRtc.muteSelfAudio(false);
          }
        }
      }, {
        key: "muteUnMuteVideo",
        value: function muteUnMuteVideo() {
          console.log("Image Click");

          if (!this.videoMute) {
            window.EnxRtc.muteSelfVideo(true);
          } else {
            window.EnxRtc.muteSelfVideo(false);
          }
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          window.EnxRtc.disconnect(false, function (data) {
            console.log('Excelsior succuss! hideSelfView ' + JSON.stringify(data.data));
          }, function (err) {
            console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
          });
        }
      }, {
        key: "switchCamera",
        value: function switchCamera() {
          window.EnxRtc.switchCamera(false, function (data) {
            console.log('Excelsior succuss! Switch Camera ' + JSON.stringify(data.data));
          }, function (err) {
            console.log('Uh oh... error hideSelfView ' + JSON.stringify(err));
          });
        }
      }, {
        key: "cheangAudioMedia",
        value: function cheangAudioMedia() {
          window.EnxRtc.getSelectedDevice(function (data) {
            console.log('Excelsior succuss! getSelectedDevice ' + JSON.stringify(data.data));
            var currentDevice = data.data;
            window.EnxRtc.getDevices(function (data) {
              console.log('Excelsior succuss! getDevices ' + JSON.stringify(data.data));
              var connectedMedia = data.data;
              console.log("fileter media " + connectedMedia);
              var meida;

              var _iterator = _createForOfIteratorHelper(connectedMedia),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  meida = _step.value;

                  if (meida === currentDevice) {
                    console.log("Available Media" + meida);
                  } else {
                    window.EnxRtc.switchMediaDevice(meida, function (data) {
                      console.log('Excelsior succuss! switchMediaDevice ' + JSON.stringify(data.data));
                    }, function (err) {
                      console.log('Uh oh... error resizeLocalView ' + JSON.stringify(err));
                    });
                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          });
        }
      }]);

      return ConfrencePage;
    }();

    ConfrencePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    ConfrencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confrence',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confrence.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/confrence/confrence.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confrence.page.scss */
      "./src/app/confrence/confrence.page.scss"))["default"]]
    })], ConfrencePage);
    /***/
  }
}]);
//# sourceMappingURL=confrence-confrence-module-es5.js.map