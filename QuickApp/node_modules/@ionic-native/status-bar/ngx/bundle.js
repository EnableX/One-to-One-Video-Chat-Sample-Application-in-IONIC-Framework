'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var StatusBar = /** @class */ (function (_super) {
    tslib.__extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return core.cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return core.cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return core.cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return core.cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return core.cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return core.cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return core.cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return core.cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return core.cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { core.cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
    StatusBar.decorators = [
        { type: core$1.Injectable }
    ];
    return StatusBar;
}(core.IonicNativePlugin));

exports.StatusBar = StatusBar;
