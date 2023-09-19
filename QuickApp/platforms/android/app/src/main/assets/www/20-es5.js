function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-modal.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-modal.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_modal */

  /***/
  function node_modulesIonicCoreDistEsmIonModalEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_modal", function () {
      return Modal;
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


    var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cubic-bezier-eea9a7a9.js */
    "./node_modules/@ionic/core/dist/esm/cubic-bezier-eea9a7a9.js");
    /* harmony import */


    var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./index-34cb2743.js */
    "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /* harmony import */


    var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hardware-back-button-4a6b37fb.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js");
    /* harmony import */


    var _gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./gesture-controller-31cb6bb9.js */
    "./node_modules/@ionic/core/dist/esm/gesture-controller-31cb6bb9.js"); // Defaults for the card swipe animation


    var SwipeToCloseDefaults = {
      MIN_PRESENTING_SCALE: 0.93
    };

    var createSwipeToCloseGesture = function createSwipeToCloseGesture(el, animation, onDismiss) {
      var height = el.offsetHeight;
      var isOpen = false;

      var canStart = function canStart(detail) {
        var target = detail.event.target;

        if (target === null || !target.closest) {
          return true;
        }

        var contentOrFooter = target.closest('ion-content, ion-footer');

        if (contentOrFooter === null) {
          return true;
        } // Target is in the content or the footer so do not start the gesture.
        // We could be more nuanced here and allow it for content that
        // does not need to scroll.


        return false;
      };

      var onStart = function onStart() {
        animation.progressStart(true, isOpen ? 1 : 0);
      };

      var onMove = function onMove(detail) {
        var step = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(0.0001, detail.deltaY / height, 0.9999);
        animation.progressStep(step);
      };

      var onEnd = function onEnd(detail) {
        var velocity = detail.velocityY;
        var step = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(0.0001, detail.deltaY / height, 0.9999);
        var threshold = (detail.deltaY + velocity * 1000) / height;
        var shouldComplete = threshold >= 0.5;
        var newStepValue = shouldComplete ? -0.001 : 0.001;

        if (!shouldComplete) {
          animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
          newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        } else {
          animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
          newStepValue += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_7__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }

        var duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        animation.onFinish(function () {
          if (!shouldComplete) {
            gesture.enable(true);
          }
        }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);

        if (shouldComplete) {
          onDismiss();
        }
      };

      var gesture = Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_8__["createGesture"])({
        el: el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart: canStart,
        onStart: onStart,
        onMove: onMove,
        onEnd: onEnd
      });
      return gesture;
    };

    var computeDuration = function computeDuration(remaining, velocity) {
      return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_9__["k"])(400, remaining / Math.abs(velocity * 1.1), 500);
    };
    /**
     * iOS Modal Enter Animation for the Card presentation style
     */


    var iosEnterAnimation = function iosEnterAnimation(baseEl, presentingEl) {
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
        'opacity': 1
      }).fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(500).addAnimation(wrapperAnimation);

      if (presentingEl) {
        var isMobile = window.innerWidth < 768;
        var hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
        var presentingAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().beforeStyles({
          'transform': 'translateY(0)',
          'transform-origin': 'top center',
          'overflow': 'hidden'
        });
        var bodyEl = document.body;

        if (isMobile) {
          /**
           * Fallback for browsers that does not support `max()` (ex: Firefox)
           * No need to worry about statusbar padding since engines like Gecko
           * are not used as the engine for standlone Cordova/Capacitor apps
           */
          var transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
          var modalTransform = hasCardModal ? '-10px' : transformOffset;
          var toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
          var finalTransform = "translateY(".concat(modalTransform, ") scale(").concat(toPresentingScale, ")");
          presentingAnimation.afterStyles({
            'transform': finalTransform
          }).beforeAddWrite(function () {
            return bodyEl.style.setProperty('background-color', 'black');
          }).addElement(presentingEl).keyframes([{
            offset: 0,
            filter: 'contrast(1)',
            transform: 'translateY(0px) scale(1)',
            borderRadius: '0px'
          }, {
            offset: 1,
            filter: 'contrast(0.85)',
            transform: finalTransform,
            borderRadius: '10px 10px 0 0'
          }]);
          baseAnimation.addAnimation(presentingAnimation);
        } else {
          baseAnimation.addAnimation(backdropAnimation);

          if (!hasCardModal) {
            wrapperAnimation.fromTo('opacity', '0', '1');
          } else {
            var _toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;

            var _finalTransform = "translateY(-10px) scale(".concat(_toPresentingScale, ")");

            presentingAnimation.afterStyles({
              'transform': _finalTransform
            }).addElement(presentingEl.querySelector('.modal-wrapper')).keyframes([{
              offset: 0,
              filter: 'contrast(1)',
              transform: 'translateY(0) scale(1)'
            }, {
              offset: 1,
              filter: 'contrast(0.85)',
              transform: _finalTransform
            }]);
            var shadowAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().afterStyles({
              'transform': _finalTransform
            }).addElement(presentingEl.querySelector('.modal-shadow')).keyframes([{
              offset: 0,
              opacity: '1',
              transform: 'translateY(0) scale(1)'
            }, {
              offset: 1,
              opacity: '0',
              transform: _finalTransform
            }]);
            baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
          }
        }
      } else {
        baseAnimation.addAnimation(backdropAnimation);
      }

      return baseAnimation;
    };
    /**
     * iOS Modal Leave Animation
     */


    var iosLeaveAnimation = function iosLeaveAnimation(baseEl, presentingEl) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
        'opacity': 1
      }).fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(duration).addAnimation(wrapperAnimation);

      if (presentingEl) {
        var isMobile = window.innerWidth < 768;
        var hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
        var presentingAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().beforeClearStyles(['transform']).afterClearStyles(['transform']).onFinish(function (currentStep) {
          // only reset background color if this is the last card-style modal
          if (currentStep !== 1) {
            return;
          }

          presentingEl.style.setProperty('overflow', '');
          var numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(function (m) {
            return m.presentingElement !== undefined;
          }).length;

          if (numModals <= 1) {
            bodyEl.style.setProperty('background-color', '');
          }
        });
        var bodyEl = document.body;

        if (isMobile) {
          var transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
          var modalTransform = hasCardModal ? '-10px' : transformOffset;
          var toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
          var finalTransform = "translateY(".concat(modalTransform, ") scale(").concat(toPresentingScale, ")");
          presentingAnimation.addElement(presentingEl).keyframes([{
            offset: 0,
            filter: 'contrast(0.85)',
            transform: finalTransform,
            borderRadius: '10px 10px 0 0'
          }, {
            offset: 1,
            filter: 'contrast(1)',
            transform: 'translateY(0px) scale(1)',
            borderRadius: '0px'
          }]);
          baseAnimation.addAnimation(presentingAnimation);
        } else {
          baseAnimation.addAnimation(backdropAnimation);

          if (!hasCardModal) {
            wrapperAnimation.fromTo('opacity', '1', '0');
          } else {
            var _toPresentingScale2 = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;

            var _finalTransform2 = "translateY(-10px) scale(".concat(_toPresentingScale2, ")");

            presentingAnimation.addElement(presentingEl.querySelector('.modal-wrapper')).afterStyles({
              'transform': 'translate3d(0, 0, 0)'
            }).keyframes([{
              offset: 0,
              filter: 'contrast(0.85)',
              transform: _finalTransform2
            }, {
              offset: 1,
              filter: 'contrast(1)',
              transform: 'translateY(0) scale(1)'
            }]);
            var shadowAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])().addElement(presentingEl.querySelector('.modal-shadow')).afterStyles({
              'transform': 'translateY(0) scale(1)'
            }).keyframes([{
              offset: 0,
              opacity: '0',
              transform: _finalTransform2
            }, {
              offset: 1,
              opacity: '1',
              transform: 'translateY(0) scale(1)'
            }]);
            baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
          }
        }
      } else {
        baseAnimation.addAnimation(backdropAnimation);
      }

      return baseAnimation;
    };
    /**
     * Md Modal Enter Animation
     */


    var mdEnterAnimation = function mdEnterAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
        'pointer-events': 'none'
      }).afterClearStyles(['pointer-events']);
      wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.01,
        transform: 'translateY(40px)'
      }, {
        offset: 1,
        opacity: 1,
        transform: 'translateY(0px)'
      }]);
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * Md Modal Leave Animation
     */


    var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
      var baseAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var backdropAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperAnimation = Object(_animation_822d986b_js__WEBPACK_IMPORTED_MODULE_6__["c"])();
      var wrapperEl = baseEl.querySelector('.modal-wrapper');
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
      wrapperAnimation.addElement(wrapperEl).keyframes([{
        offset: 0,
        opacity: 0.99,
        transform: 'translateY(0px)'
      }, {
        offset: 1,
        opacity: 0,
        transform: 'translateY(40px)'
      }]);
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    var modalIosCss = ".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}";
    var modalMdCss = ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";

    var Modal = /*#__PURE__*/function () {
      function Modal(hostRef) {
        var _this = this;

        _classCallCheck(this, Modal);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.didPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionModalDidDismiss", 7); // Whether or not modal is being dismissed via gesture

        this.gestureAnimationDismissing = false;
        this.presented = false;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */

        this.animated = true;
        /**
         * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
         */

        this.swipeToClose = false;

        this.onBackdropTap = function () {
          _this.dismiss(undefined, _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["B"]);
        };

        this.onDismiss = function (ev) {
          ev.stopPropagation();
          ev.preventDefault();

          _this.dismiss();
        };

        this.onLifecycle = function (modalEvent) {
          var el = _this.usersElement;
          var name = LIFECYCLE_MAP[modalEvent.type];

          if (el && name) {
            var ev = new CustomEvent(name, {
              bubbles: false,
              cancelable: false,
              detail: modalEvent.detail
            });
            el.dispatchEvent(ev);
          }
        };
      }

      _createClass(Modal, [{
        key: "swipeToCloseChanged",
        value: function swipeToCloseChanged(enable) {
          if (this.gesture) {
            this.gesture.enable(enable);
          } else if (enable) {
            this.initSwipeToClose();
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this.el);
        }
        /**
         * Present the modal overlay after it has been created.
         */

      }, {
        key: "present",
        value: function () {
          var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var container, componentProps;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.presented) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  container = this.el.querySelector(".modal-wrapper");

                  if (container) {
                    _context.next = 5;
                    break;
                  }

                  throw new Error('container is undefined');

                case 5:
                  componentProps = Object.assign(Object.assign({}, this.componentProps), {
                    modal: this.el
                  });
                  _context.next = 8;
                  return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);

                case 8:
                  this.usersElement = _context.sent;
                  _context.next = 11;
                  return Object(_index_a7711c1e_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this.usersElement);

                case 11:
                  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
                    return _this2.el.classList.add('show-modal');
                  });
                  _context.next = 14;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, this.presentingElement);

                case 14:
                  if (this.swipeToClose) {
                    this.initSwipeToClose();
                  }

                case 15:
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
      }, {
        key: "initSwipeToClose",
        value: function initSwipeToClose() {
          var _this3 = this;

          if (Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) !== 'ios') {
            return;
          } // All of the elements needed for the swipe gesture
          // should be in the DOM and referenced by now, except
          // for the presenting el


          var animationBuilder = this.leaveAnimation || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('modalLeave', iosLeaveAnimation);

          var ani = this.animation = animationBuilder(this.el, this.presentingElement);
          this.gesture = createSwipeToCloseGesture(this.el, ani, function () {
            /**
             * While the gesture animation is finishing
             * it is possible for a user to tap the backdrop.
             * This would result in the dismiss animation
             * being played again. Typically this is avoided
             * by setting `presented = false` on the overlay
             * component; however, we cannot do that here as
             * that would prevent the element from being
             * removed from the DOM.
             */
            _this3.gestureAnimationDismissing = true;

            _this3.animation.onFinish( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this3.dismiss(undefined, 'gesture');

                  case 2:
                    _this3.gestureAnimationDismissing = false;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })));
          });
          this.gesture.enable(true);
        }
        /**
         * Dismiss the modal overlay after it has been presented.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
         */

      }, {
        key: "dismiss",
        value: function () {
          var _dismiss = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, role) {
            var enteringAnimation, dismissed;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.gestureAnimationDismissing && role !== 'gesture')) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", false);

                case 2:
                  enteringAnimation = _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["h"].get(this) || [];
                  _context3.next = 5;
                  return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, this.presentingElement);

                case 5:
                  dismissed = _context3.sent;

                  if (!dismissed) {
                    _context3.next = 11;
                    break;
                  }

                  _context3.next = 9;
                  return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this.delegate, this.usersElement);

                case 9:
                  if (this.animation) {
                    this.animation.destroy();
                  }

                  enteringAnimation.forEach(function (ani) {
                    return ani.destroy();
                  });

                case 11:
                  this.animation = undefined;
                  return _context3.abrupt("return", dismissed);

                case 13:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function dismiss(_x, _x2) {
            return _dismiss.apply(this, arguments);
          }

          return dismiss;
        }()
        /**
         * Returns a promise that resolves when the modal did dismiss.
         */

      }, {
        key: "onDidDismiss",
        value: function onDidDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalDidDismiss');
        }
        /**
         * Returns a promise that resolves when the modal will dismiss.
         */

      }, {
        key: "onWillDismiss",
        value: function onWillDismiss() {
          return Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.el, 'ionModalWillDismiss');
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign;

          var htmlAttributes = this.htmlAttributes;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], Object.assign({
            "no-router": true,
            "aria-modal": "true",
            tabindex: "-1"
          }, htmlAttributes, {
            style: {
              zIndex: "".concat(20000 + this.overlayIndex)
            },
            "class": Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, "modal-card", this.presentingElement !== undefined && mode === 'ios'), _Object$assign), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.cssClass)),
            onIonBackdropTap: this.onBackdropTap,
            onIonDismiss: this.onDismiss,
            onIonModalDidPresent: this.onLifecycle,
            onIonModalWillPresent: this.onLifecycle,
            onIonModalWillDismiss: this.onLifecycle,
            onIonModalDidDismiss: this.onLifecycle
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            visible: this.showBackdrop,
            tappable: this.backdropDismiss
          }), mode === 'ios' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "modal-shadow"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            role: "dialog",
            "class": "modal-wrapper ion-overlay-wrapper"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            tabindex: "0"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "swipeToClose": ["swipeToCloseChanged"]
          };
        }
      }]);

      return Modal;
    }();

    var LIFECYCLE_MAP = {
      'ionModalDidPresent': 'ionViewDidEnter',
      'ionModalWillPresent': 'ionViewWillEnter',
      'ionModalWillDismiss': 'ionViewWillLeave',
      'ionModalDidDismiss': 'ionViewDidLeave'
    };
    Modal.style = {
      ios: modalIosCss,
      md: modalMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=20-es5.js.map