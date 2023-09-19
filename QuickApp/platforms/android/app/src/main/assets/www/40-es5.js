function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-toast.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-toast.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_toast */

  /***/
  function node_modulesIonicCoreDistEsmIonToastEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_toast", function () {
      return Toast;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ionic-global-63a97a32.js */
    "./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */


    var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./overlays-a62f858b.js */
    "./node_modules/@ionic/core/dist/esm/overlays-a62f858b.js");
    /* harmony import */


    var _index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index-9e3fe806.js */
    "./node_modules/@ionic/core/dist/esm/index-9e3fe806.js");
    /* harmony import */


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    /* harmony import */


    var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./animation-822d986b.js */
    "./node_modules/@ionic/core/dist/esm/animation-822d986b.js");
    /* harmony import */


    var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hardware-back-button-4a6b37fb.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /**
     * iOS Toast Enter Animation
     */


    var iosEnterAnimation = function iosEnterAnimation(baseEl, position) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var hostEl = baseEl.host || baseEl;
      var wrapperEl = baseEl.querySelector('.toast-wrapper');
      var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
      var top = "calc(10px + var(--ion-safe-area-top, 0px))";
      wrapperAnimation.addElement(wrapperEl);

      switch (position) {
        case 'top':
          wrapperAnimation.fromTo('transform', 'translateY(-100%)', "translateY(".concat(top, ")"));
          break;

        case 'middle':
          var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
          wrapperEl.style.top = "".concat(topPosition, "px");
          wrapperAnimation.fromTo('opacity', 0.01, 1);
          break;

        default:
          wrapperAnimation.fromTo('transform', 'translateY(100%)', "translateY(".concat(bottom, ")"));
          break;
      }

      return baseAnimation.addElement(hostEl).easing('cubic-bezier(.155,1.105,.295,1.12)').duration(400).addAnimation(wrapperAnimation);
    };
    /**
     * iOS Toast Leave Animation
     */


    var iosLeaveAnimation = function iosLeaveAnimation(baseEl, position) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var hostEl = baseEl.host || baseEl;
      var wrapperEl = baseEl.querySelector('.toast-wrapper');
      var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
      var top = "calc(10px + var(--ion-safe-area-top, 0px))";
      wrapperAnimation.addElement(wrapperEl);

      switch (position) {
        case 'top':
          wrapperAnimation.fromTo('transform', "translateY(".concat(top, ")"), 'translateY(-100%)');
          break;

        case 'middle':
          wrapperAnimation.fromTo('opacity', 0.99, 0);
          break;

        default:
          wrapperAnimation.fromTo('transform', "translateY(".concat(bottom, ")"), 'translateY(100%)');
          break;
      }

      return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
    };
    /**
     * MD Toast Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(baseEl, position) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var hostEl = baseEl.host || baseEl;
      var wrapperEl = baseEl.querySelector('.toast-wrapper');
      var bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))";
      var top = "calc(8px + var(--ion-safe-area-top, 0px))";
      wrapperAnimation.addElement(wrapperEl);

      switch (position) {
        case 'top':
          wrapperEl.style.top = top;
          wrapperAnimation.fromTo('opacity', 0.01, 1);
          break;

        case 'middle':
          var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
          wrapperEl.style.top = "".concat(topPosition, "px");
          wrapperAnimation.fromTo('opacity', 0.01, 1);
          break;

        default:
          wrapperEl.style.bottom = bottom;
          wrapperAnimation.fromTo('opacity', 0.01, 1);
          break;
      }

      return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation(wrapperAnimation);
    };
    /**
     * md Toast Leave Animation
     */


    var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_5__["c"])();
      var hostEl = baseEl.host || baseEl;
      var wrapperEl = baseEl.querySelector('.toast-wrapper');
      wrapperAnimation.addElement(wrapperEl).fromTo('opacity', 0.99, 0);
      return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
    };

    var toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
    var toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";

    var Toast = /*#__PURE__*/function () {
      function Toast(hostRef) {
        var _this = this;

        _classCallCheck(this, Toast);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionToastDidPresent", 7);
        this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionToastWillPresent", 7);
        this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionToastWillDismiss", 7);
        this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionToastDidDismiss", 7);
        this.presented = false;
        /**
         * How many milliseconds to wait before hiding the toast. By default, it will show
         * until `dismiss()` is called.
         */

        this.duration = 0;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = false;
        /**
         * The position of the toast on the screen.
         */

        this.position = 'bottom';
        /**
         * If `true`, the toast will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the toast will animate.
         */

        this.animated = true;

        this.dispatchCancelHandler = function (ev) {
          var role = ev.detail.role;

          if (Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["i"])(role)) {
            var cancelButton = _this.getButtons().find(function (b) {
              return b.role === 'cancel';
            });

            _this.callButtonHandler(cancelButton);
          }
        };
      }

      _createClass(Toast, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.el);
        }
        /**
         * Present the toast overlay after it has been created.
         */

      }, {
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);

                case 2:
                  if (this.duration > 0) {
                    this.durationTimeout = setTimeout(function () {
                      return _this2.dismiss(undefined, 'timeout');
                    }, this.duration);
                  }

                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function present() {
            return _present.apply(this, arguments);
          }

          return present;
        }()
        /**
         * Dismiss the toast overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the toast.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the toast.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role) {
          if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
          }

          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
        }
        /**
         * Returns a promise that resolves when the toast did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.el, 'ionToastDidDismiss');
        }
        /**
         * Returns a promise that resolves when the toast will dismiss.
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.el, 'ionToastWillDismiss');
        }
      }, {
        key: "getButtons",
        value: function getButtons() {
          var buttons = this.buttons ? this.buttons.map(function (b) {
            return typeof b === 'string' ? {
              text: b
            } : b;
          }) : [];
          return buttons;
        }
      }, {
        key: "buttonClick",
        value: function () {
          var _buttonClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(button) {
            var role, shouldDismiss;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  role = button.role;

                  if (!Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["i"])(role)) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return", this.dismiss(undefined, role));

                case 3:
                  _context2.next = 5;
                  return this.callButtonHandler(button);

                case 5:
                  shouldDismiss = _context2.sent;

                  if (!shouldDismiss) {
                    _context2.next = 8;
                    break;
                  }

                  return _context2.abrupt("return", this.dismiss(undefined, role));

                case 8:
                  return _context2.abrupt("return", Promise.resolve());

                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function buttonClick(_x) {
            return _buttonClick.apply(this, arguments);
          }

          return buttonClick;
        }()
      }, {
        key: "callButtonHandler",
        value: function () {
          var _callButtonHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(button) {
            var rtn;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(button && button.handler)) {
                    _context3.next = 12;
                    break;
                  }

                  _context3.prev = 1;
                  _context3.next = 4;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_2__["s"])(button.handler);

                case 4:
                  rtn = _context3.sent;

                  if (!(rtn === false)) {
                    _context3.next = 7;
                    break;
                  }

                  return _context3.abrupt("return", false);

                case 7:
                  _context3.next = 12;
                  break;

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](1);
                  console.error(_context3.t0);

                case 12:
                  return _context3.abrupt("return", true);

                case 13:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[1, 9]]);
          }));

          function callButtonHandler(_x2) {
            return _callButtonHandler.apply(this, arguments);
          }

          return callButtonHandler;
        }()
      }, {
        key: "renderButtons",
        value: function renderButtons(buttons, side) {
          var _this3 = this;

          if (buttons.length === 0) {
            return;
          }

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

          var buttonGroupsClasses = _defineProperty({
            'toast-button-group': true
          }, "toast-button-group-".concat(side), true);

          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": buttonGroupsClasses
          }, buttons.map(function (b) {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
              type: "button",
              "class": buttonClass(b),
              tabIndex: 0,
              onClick: function onClick() {
                return _this3.buttonClick(b);
              },
              part: "button"
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "toast-button-inner"
            }, b.icon && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
              icon: b.icon,
              slot: b.text === undefined ? 'icon-only' : undefined,
              "class": "toast-icon"
            }), b.text), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
              type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded'
            }));
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var allButtons = this.getButtons();
          var startButtons = allButtons.filter(function (b) {
            return b.side === 'start';
          });
          var endButtons = allButtons.filter(function (b) {
            return b.side !== 'start';
          });
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

          var wrapperClass = _defineProperty({
            'toast-wrapper': true
          }, "toast-".concat(this.position), true);

          var role = allButtons.length > 0 ? 'dialog' : 'status';
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
            role: role,
            tabindex: "-1"
          }, this.htmlAttributes, {
            style: {
              zIndex: "".concat(60000 + this.overlayIndex)
            },
            "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color, Object.assign(Object.assign(_defineProperty({}, mode, true), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)), {
              'toast-translucent': this.translucent
            })),
            onIonToastWillDismiss: this.dispatchCancelHandler
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": wrapperClass
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "toast-container",
            part: "container"
          }, this.renderButtons(startButtons, 'start'), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "toast-content"
          }, this.header !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "toast-header",
            part: "header"
          }, this.header), this.message !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "toast-message",
            part: "message",
            innerHTML: Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.message)
          })), this.renderButtons(endButtons, 'end'))));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return Toast;
    }();

    var buttonClass = function buttonClass(button) {
      var _Object$assign2;

      return Object.assign((_Object$assign2 = {
        'toast-button': true,
        'toast-button-icon-only': button.icon !== undefined && button.text === undefined
      }, _defineProperty(_Object$assign2, "toast-button-".concat(button.role), button.role !== undefined), _defineProperty(_Object$assign2, 'ion-focusable', true), _defineProperty(_Object$assign2, 'ion-activatable', true), _Object$assign2), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(button.cssClass));
    };

    Toast.style = {
      ios: toastIosCss,
      md: toastMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=40-es5.js.map