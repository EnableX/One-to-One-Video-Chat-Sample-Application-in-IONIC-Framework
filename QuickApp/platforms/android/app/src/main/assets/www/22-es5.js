function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-popover.entry.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-popover.entry.js ***!
    \****************************************************************/

  /*! exports provided: ion_popover */

  /***/
  function node_modulesIonicCoreDistEsmIonPopoverEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_popover", function () {
      return Popover;
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


    var _framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./framework-delegate-94e770cc.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js");
    /* harmony import */


    var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlays-a62f858b.js */
    "./node_modules/@ionic/core/dist/esm/overlays-a62f858b.js");
    /* harmony import */


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    /* harmony import */


    var _index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-a7711c1e.js */
    "./node_modules/@ionic/core/dist/esm/index-a7711c1e.js");
    /* harmony import */


    var _animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./animation-822d986b.js */
    "./node_modules/@ionic/core/dist/esm/animation-822d986b.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /* harmony import */


    var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hardware-back-button-4a6b37fb.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js");
    /**
     * iOS Popover Enter Animation
     */


    var iosEnterAnimation = function iosEnterAnimation(baseEl, ev) {
      var originY = 'top';
      var originX = 'left';
      var contentEl = baseEl.querySelector('.popover-content');
      var contentDimentions = contentEl.getBoundingClientRect();
      var contentWidth = contentDimentions.width;
      var contentHeight = contentDimentions.height;
      var bodyWidth = baseEl.ownerDocument.defaultView.innerWidth;
      var bodyHeight = baseEl.ownerDocument.defaultView.innerHeight; // If ev was passed, use that for target element

      var targetDim = ev && ev.target && ev.target.getBoundingClientRect();
      var targetTop = targetDim != null && 'top' in targetDim ? targetDim.top : bodyHeight / 2 - contentHeight / 2;
      var targetLeft = targetDim != null && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
      var targetWidth = targetDim && targetDim.width || 0;
      var targetHeight = targetDim && targetDim.height || 0;
      var arrowEl = baseEl.querySelector('.popover-arrow');
      var arrowDim = arrowEl.getBoundingClientRect();
      var arrowWidth = arrowDim.width;
      var arrowHeight = arrowDim.height;

      if (targetDim == null) {
        arrowEl.style.display = 'none';
      }

      var arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
      };
      var popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
      }; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust
      //

      var checkSafeAreaLeft = false;
      var checkSafeAreaRight = false; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust
      // 25 is a random/arbitrary number. It seems to work fine for ios11
      // and iPhoneX. Is it perfect? No. Does it work? Yes.

      if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
      } else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 > bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
      } // make it pop up if there's room above


      if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
      } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
      }

      arrowEl.style.top = arrowCSS.top + 'px';
      arrowEl.style.left = arrowCSS.left + 'px';
      contentEl.style.top = popoverCSS.top + 'px';
      contentEl.style.left = popoverCSS.left + 'px';

      if (checkSafeAreaLeft) {
        contentEl.style.left = "calc(".concat(popoverCSS.left, "px + var(--ion-safe-area-left, 0px))");
      }

      if (checkSafeAreaRight) {
        contentEl.style.left = "calc(".concat(popoverCSS.left, "px - var(--ion-safe-area-right, 0px))");
      }

      contentEl.style.transformOrigin = originY + ' ' + originX;
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.01, 1);
      return baseAnimation.addElement(baseEl).easing('ease').duration(100).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    var POPOVER_IOS_BODY_PADDING = 5;
    /**
     * iOS Popover Leave Animation
     */

    var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
      return baseAnimation.addElement(baseEl).easing('ease').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * Md Popover Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(baseEl, ev) {
      var POPOVER_MD_BODY_PADDING = 12;
      var doc = baseEl.ownerDocument;
      var isRTL = doc.dir === 'rtl';
      var originY = 'top';
      var originX = isRTL ? 'right' : 'left';
      var contentEl = baseEl.querySelector('.popover-content');
      var contentDimentions = contentEl.getBoundingClientRect();
      var contentWidth = contentDimentions.width;
      var contentHeight = contentDimentions.height;
      var bodyWidth = doc.defaultView.innerWidth;
      var bodyHeight = doc.defaultView.innerHeight; // If ev was passed, use that for target element

      var targetDim = ev && ev.target && ev.target.getBoundingClientRect(); // As per MD spec, by default position the popover below the target (trigger) element

      var targetTop = targetDim != null && 'bottom' in targetDim ? targetDim.bottom : bodyHeight / 2 - contentHeight / 2;
      var targetLeft = targetDim != null && 'left' in targetDim ? isRTL ? targetDim.left - contentWidth + targetDim.width : targetDim.left : bodyWidth / 2 - contentWidth / 2;
      var targetHeight = targetDim && targetDim.height || 0;
      var popoverCSS = {
        top: targetTop,
        left: targetLeft
      }; // If the popover left is less than the padding it is off screen
      // to the left so adjust it, else if the width of the popover
      // exceeds the body width it is off screen to the right so adjust

      if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
        // Note: in LTR, originX is already 'left'

        originX = 'left';
      } else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left > bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING; // Same origin in this case for both LTR & RTL
        // Note: in RTL, originX is already 'right'

        originX = 'right';
      } // If the popover when popped down stretches past bottom of screen,
      // make it pop up if there's room above


      if (targetTop + targetHeight + contentHeight > bodyHeight && targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight - targetHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom'; // If there isn't room for it to pop up above the target cut it off
      } else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
      }

      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var contentAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var viewportAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.01, 1);
      contentAnimation.addElement(contentEl).beforeStyles({
        'top': "".concat(popoverCSS.top, "px"),
        'left': "".concat(popoverCSS.left, "px"),
        'transform-origin': "".concat(originY, " ").concat(originX)
      }).fromTo('transform', 'scale(0.001)', 'scale(1)');
      viewportAnimation.addElement(baseEl.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1);
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(300).addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
    };
    /**
     * Md Popover Leave Animation
     */


    var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
      return baseAnimation.addElement(baseEl).easing('ease').duration(500).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    var popoverIosCss = ".sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}";
    var popoverMdCss = ".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}";

    var Popover = /*#__PURE__*/function () {
      function Popover(hostRef) {
        var _this = this;

        _classCallCheck(this, Popover);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverDidPresent", 7);
        this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverWillPresent", 7);
        this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverWillDismiss", 7);
        this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionPopoverDidDismiss", 7);
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * If `true`, the popover will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the popover.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the popover will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the popover will animate.
         */

        this.animated = true;

        this.onDismiss = function (ev) {
          ev.stopPropagation();
          ev.preventDefault();

          _this.dismiss();
        };

        this.onBackdropTap = function () {
          _this.dismiss(undefined, _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
        };

        this.onLifecycle = function (modalEvent) {
          var el = _this.usersElement;
          var name = LIFECYCLE_MAP[modalEvent.type];

          if (el && name) {
            var event = new CustomEvent(name, {
              bubbles: false,
              cancelable: false,
              detail: modalEvent.detail
            });
            el.dispatchEvent(event);
          }
        };
      }

      _createClass(Popover, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
        }
        /**
         * Present the popover overlay after it has been created.
         */

      }, {
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var container, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.presented) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  container = this.el.querySelector('.popover-content');

                  if (container) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error('container is undefined');

                case 5:
                  data = Object.assign(Object.assign({}, this.componentProps), {
                    popover: this.el
                  });
                  _context.next = 8;
                  return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['popover-viewport', this.el['s-sc']], data);

                case 8:
                  this.usersElement = _context.sent;
                  _context.next = 11;
                  return Object(_index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this.usersElement);

                case 11:
                  return _context.abrupt("return", Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, this.event));

                case 12:
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
         * Dismiss the popover overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
         */

      }, {
        key: "dismiss",
        value: function () {
          var _dismiss = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data, role) {
            var shouldDismiss;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, this.event);

                case 2:
                  shouldDismiss = _context2.sent;

                  if (!shouldDismiss) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 6;
                  return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.delegate, this.usersElement);

                case 6:
                  return _context2.abrupt("return", shouldDismiss);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function dismiss(_x, _x2) {
            return _dismiss.apply(this, arguments);
          }

          return dismiss;
        }()
        /**
         * Returns a promise that resolves when the popover did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionPopoverDidDismiss');
        }
        /**
         * Returns a promise that resolves when the popover will dismiss.
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionPopoverWillDismiss');
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign;

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var onLifecycle = this.onLifecycle,
              htmlAttributes = this.htmlAttributes;
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
            "aria-modal": "true",
            "no-router": true,
            tabindex: "-1"
          }, htmlAttributes, {
            style: {
              zIndex: "".concat(20000 + this.overlayIndex)
            },
            "class": Object.assign(Object.assign({}, Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'popover-translucent', this.translucent), _Object$assign)),
            onIonPopoverDidPresent: onLifecycle,
            onIonPopoverWillPresent: onLifecycle,
            onIonPopoverWillDismiss: onLifecycle,
            onIonPopoverDidDismiss: onLifecycle,
            onIonDismiss: this.onDismiss,
            onIonBackdropTap: this.onBackdropTap
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            tappable: this.backdropDismiss,
            visible: this.showBackdrop
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-wrapper ion-overlay-wrapper"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-arrow"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "popover-content"
          })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return Popover;
    }();

    var LIFECYCLE_MAP = {
      'ionPopoverDidPresent': 'ionViewDidEnter',
      'ionPopoverWillPresent': 'ionViewWillEnter',
      'ionPopoverWillDismiss': 'ionViewWillLeave',
      'ionPopoverDidDismiss': 'ionViewDidLeave'
    };
    Popover.style = {
      ios: popoverIosCss,
      md: popoverMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=22-es5.js.map