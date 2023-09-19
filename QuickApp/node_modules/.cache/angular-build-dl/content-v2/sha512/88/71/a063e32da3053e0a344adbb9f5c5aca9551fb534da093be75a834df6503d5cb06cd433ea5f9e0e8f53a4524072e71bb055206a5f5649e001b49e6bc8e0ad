function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-range.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-range.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_range */

  /***/
  function node_modulesIonicCoreDistEsmIonRangeEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_range", function () {
      return Range;
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


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /* harmony import */


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");

    var rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}";
    var rangeMdCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:\"\";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}";

    var Range = /*#__PURE__*/function () {
      function Range(hostRef) {
        var _this = this;

        _classCallCheck(this, Range);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
        this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
        this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
        this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
        this.didLoad = false;
        this.noUpdate = false;
        this.hasFocus = false;
        this.inheritedAttributes = {};
        this.ratioA = 0;
        this.ratioB = 0;
        /**
         * How long, in milliseconds, to wait to trigger the
         * `ionChange` event after each change in the range value.
         * This also impacts form bindings such as `ngModel` or `v-model`.
         */

        this.debounce = 0; // TODO: In Ionic Framework v6 this should initialize to this.rangeId like the other form components do.

        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = '';
        /**
         * Show two knobs.
         */

        this.dualKnobs = false;
        /**
         * Minimum integer value of the range.
         */

        this.min = 0;
        /**
         * Maximum integer value of the range.
         */

        this.max = 100;
        /**
         * If `true`, a pin with integer value is shown when the knob
         * is pressed.
         */

        this.pin = false;
        /**
         * If `true`, the knob snaps to tick marks evenly spaced based
         * on the step property value.
         */

        this.snaps = false;
        /**
         * Specifies the value granularity.
         */

        this.step = 1;
        /**
         * If `true`, tick marks are displayed based on the step value.
         * Only applies when `snaps` is `true`.
         */

        this.ticks = true;
        /**
         * If `true`, the user cannot interact with the range.
         */

        this.disabled = false;
        /**
         * the value of the range.
         */

        this.value = 0;

        this.clampBounds = function (value) {
          return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(_this.min, value, _this.max);
        };

        this.ensureValueInBounds = function (value) {
          if (_this.dualKnobs) {
            return {
              lower: _this.clampBounds(value.lower),
              upper: _this.clampBounds(value.upper)
            };
          } else {
            return _this.clampBounds(value);
          }
        };

        this.setupGesture = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var rangeSlider;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                rangeSlider = _this.rangeSlider;

                if (!rangeSlider) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-34cb2743.js */
                "./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));

              case 4:
                _this.gesture = _context.sent.createGesture({
                  el: rangeSlider,
                  gestureName: 'range',
                  gesturePriority: 100,
                  threshold: 0,
                  onStart: function onStart(ev) {
                    return _this.onStart(ev);
                  },
                  onMove: function onMove(ev) {
                    return _this.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this.onEnd(ev);
                  }
                });

                _this.gesture.enable(!_this.disabled);

              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));

        this.handleKeyboard = function (knob, isIncrease) {
          var step = _this.step;
          step = step > 0 ? step : 1;
          step = step / (_this.max - _this.min);

          if (!isIncrease) {
            step *= -1;
          }

          if (knob === 'A') {
            _this.ratioA = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(0, _this.ratioA + step, 1);
          } else {
            _this.ratioB = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(0, _this.ratioB + step, 1);
          }

          _this.updateValue();
        };

        this.onBlur = function () {
          if (_this.hasFocus) {
            _this.hasFocus = false;

            _this.ionBlur.emit();

            _this.emitStyle();
          }
        };

        this.onFocus = function () {
          if (!_this.hasFocus) {
            _this.hasFocus = true;

            _this.ionFocus.emit();

            _this.emitStyle();
          }
        };
      }

      _createClass(Range, [{
        key: "debounceChanged",
        value: function debounceChanged() {
          this.ionChange = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.ionChange, this.debounce);
        }
      }, {
        key: "minChanged",
        value: function minChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }
      }, {
        key: "maxChanged",
        value: function maxChanged() {
          if (!this.noUpdate) {
            this.updateRatio();
          }
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }

          this.emitStyle();
        }
      }, {
        key: "valueChanged",
        value: function valueChanged(value) {
          if (!this.noUpdate) {
            this.updateRatio();
          }

          value = this.ensureValueInBounds(value);
          this.ionChange.emit({
            value: value
          });
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          /**
           * If user has custom ID set then we should
           * not assign the default incrementing ID.
           */
          this.rangeId = this.el.hasAttribute('id') ? this.el.getAttribute('id') : "ion-r-".concat(rangeIds++);
          this.inheritedAttributes = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.el);
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.setupGesture();
          this.didLoad = true;
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.updateRatio();
          this.debounceChanged();
          this.disabledChanged();
          /**
           * If we have not yet rendered
           * ion-range, then rangeSlider is not defined.
           * But if we are moving ion-range via appendChild,
           * then rangeSlider will be defined.
           */

          if (this.didLoad) {
            this.setupGesture();
          }
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
      }, {
        key: "getValue",
        value: function getValue() {
          var value = this.value || 0;

          if (this.dualKnobs) {
            if (typeof value === 'object') {
              return value;
            }

            return {
              lower: 0,
              upper: value
            };
          } else {
            if (typeof value === 'object') {
              return value.upper;
            }

            return value;
          }
        }
      }, {
        key: "emitStyle",
        value: function emitStyle() {
          this.ionStyle.emit({
            'interactive': true,
            'interactive-disabled': this.disabled
          });
        }
      }, {
        key: "onStart",
        value: function onStart(detail) {
          var rect = this.rect = this.rangeSlider.getBoundingClientRect();
          var currentX = detail.currentX; // figure out which knob they started closer to

          var ratio = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(0, (currentX - rect.left) / rect.width, 1);

          if (document.dir === 'rtl') {
            ratio = 1 - ratio;
          }

          this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? 'A' : 'B';
          this.setFocus(this.pressedKnob); // update the active knob's position

          this.update(currentX);
        }
      }, {
        key: "onMove",
        value: function onMove(detail) {
          this.update(detail.currentX);
        }
      }, {
        key: "onEnd",
        value: function onEnd(detail) {
          this.update(detail.currentX);
          this.pressedKnob = undefined;
        }
      }, {
        key: "update",
        value: function update(currentX) {
          // figure out where the pointer is currently at
          // update the knob being interacted with
          var rect = this.rect;
          var ratio = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(0, (currentX - rect.left) / rect.width, 1);

          if (document.dir === 'rtl') {
            ratio = 1 - ratio;
          }

          if (this.snaps) {
            // snaps the ratio to the current value
            ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
          } // update which knob is pressed


          if (this.pressedKnob === 'A') {
            this.ratioA = ratio;
          } else {
            this.ratioB = ratio;
          } // Update input value


          this.updateValue();
        }
      }, {
        key: "valA",
        get: function get() {
          return ratioToValue(this.ratioA, this.min, this.max, this.step);
        }
      }, {
        key: "valB",
        get: function get() {
          return ratioToValue(this.ratioB, this.min, this.max, this.step);
        }
      }, {
        key: "ratioLower",
        get: function get() {
          if (this.dualKnobs) {
            return Math.min(this.ratioA, this.ratioB);
          }

          return 0;
        }
      }, {
        key: "ratioUpper",
        get: function get() {
          if (this.dualKnobs) {
            return Math.max(this.ratioA, this.ratioB);
          }

          return this.ratioA;
        }
      }, {
        key: "updateRatio",
        value: function updateRatio() {
          var value = this.getValue();
          var min = this.min,
              max = this.max;

          if (this.dualKnobs) {
            this.ratioA = valueToRatio(value.lower, min, max);
            this.ratioB = valueToRatio(value.upper, min, max);
          } else {
            this.ratioA = valueToRatio(value, min, max);
          }
        }
      }, {
        key: "updateValue",
        value: function updateValue() {
          this.noUpdate = true;
          var valA = this.valA,
              valB = this.valB;
          this.value = !this.dualKnobs ? valA : {
            lower: Math.min(valA, valB),
            upper: Math.max(valA, valB)
          };
          this.noUpdate = false;
        }
      }, {
        key: "setFocus",
        value: function setFocus(knob) {
          if (this.el.shadowRoot) {
            var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');

            if (knobEl) {
              knobEl.focus();
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _barStyle,
              _Object2,
              _this2 = this;

          var min = this.min,
              max = this.max,
              step = this.step,
              el = this.el,
              handleKeyboard = this.handleKeyboard,
              pressedKnob = this.pressedKnob,
              disabled = this.disabled,
              pin = this.pin,
              ratioLower = this.ratioLower,
              ratioUpper = this.ratioUpper,
              inheritedAttributes = this.inheritedAttributes,
              rangeId = this.rangeId;
          /**
           * Look for external label, ion-label, or aria-labelledby.
           * If none, see if user placed an aria-label on the host
           * and use that instead.
           */

          var _Object = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["d"])(el, rangeId),
              labelText = _Object.labelText;

          if (labelText === undefined || labelText === null) {
            labelText = inheritedAttributes['aria-label'];
          }

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var barStart = "".concat(ratioLower * 100, "%");
          var barEnd = "".concat(100 - ratioUpper * 100, "%");
          var doc = document;
          var isRTL = doc.dir === 'rtl';
          var start = isRTL ? 'right' : 'left';
          var end = isRTL ? 'left' : 'right';

          var tickStyle = function tickStyle(tick) {
            return _defineProperty({}, start, tick[start]);
          };

          var barStyle = (_barStyle = {}, _defineProperty(_barStyle, start, barStart), _defineProperty(_barStyle, end, barEnd), _barStyle);
          var ticks = [];

          if (this.snaps && this.ticks) {
            for (var value = min; value <= max; value += step) {
              var ratio = valueToRatio(value, min, max);
              var tick = {
                ratio: ratio,
                active: ratio >= ratioLower && ratio <= ratioUpper
              };
              tick[start] = "".concat(ratio * 100, "%");
              ticks.push(tick);
            }
          }

          Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["e"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onFocusin: this.onFocus,
            onFocusout: this.onBlur,
            id: rangeId,
            "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (_Object2 = {}, _defineProperty(_Object2, mode, true), _defineProperty(_Object2, 'in-item', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["h"])('ion-item', el)), _defineProperty(_Object2, 'range-disabled', disabled), _defineProperty(_Object2, 'range-pressed', pressedKnob !== undefined), _defineProperty(_Object2, 'range-has-pin', pin), _Object2))
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "start"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "range-slider",
            ref: function ref(rangeEl) {
              return _this2.rangeSlider = rangeEl;
            }
          }, ticks.map(function (tick) {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              style: tickStyle(tick),
              role: "presentation",
              "class": {
                'range-tick': true,
                'range-tick-active': tick.active
              },
              part: tick.active ? 'tick-active' : 'tick'
            });
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "range-bar",
            role: "presentation",
            part: "bar"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "range-bar range-bar-active",
            role: "presentation",
            style: barStyle,
            part: "bar-active"
          }), renderKnob(isRTL, {
            knob: 'A',
            pressed: pressedKnob === 'A',
            value: this.valA,
            ratio: this.ratioA,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max,
            labelText: labelText
          }), this.dualKnobs && renderKnob(isRTL, {
            knob: 'B',
            pressed: pressedKnob === 'B',
            value: this.valB,
            ratio: this.ratioB,
            pin: pin,
            disabled: disabled,
            handleKeyboard: handleKeyboard,
            min: min,
            max: max,
            labelText: labelText
          })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "end"
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
            "debounce": ["debounceChanged"],
            "min": ["minChanged"],
            "max": ["maxChanged"],
            "disabled": ["disabledChanged"],
            "value": ["valueChanged"]
          };
        }
      }]);

      return Range;
    }();

    var renderKnob = function renderKnob(isRTL, _ref3) {
      var knob = _ref3.knob,
          value = _ref3.value,
          ratio = _ref3.ratio,
          min = _ref3.min,
          max = _ref3.max,
          disabled = _ref3.disabled,
          pressed = _ref3.pressed,
          pin = _ref3.pin,
          handleKeyboard = _ref3.handleKeyboard,
          labelText = _ref3.labelText;
      var start = isRTL ? 'right' : 'left';

      var knobStyle = function knobStyle() {
        var style = {};
        style[start] = "".concat(ratio * 100, "%");
        return style;
      };

      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        onKeyDown: function onKeyDown(ev) {
          var key = ev.key;

          if (key === 'ArrowLeft' || key === 'ArrowDown') {
            handleKeyboard(knob, false);
            ev.preventDefault();
            ev.stopPropagation();
          } else if (key === 'ArrowRight' || key === 'ArrowUp') {
            handleKeyboard(knob, true);
            ev.preventDefault();
            ev.stopPropagation();
          }
        },
        "class": {
          'range-knob-handle': true,
          'range-knob-a': knob === 'A',
          'range-knob-b': knob === 'B',
          'range-knob-pressed': pressed,
          'range-knob-min': value === min,
          'range-knob-max': value === max
        },
        style: knobStyle(),
        role: "slider",
        tabindex: disabled ? -1 : 0,
        "aria-label": labelText,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-disabled": disabled ? 'true' : null,
        "aria-valuenow": value
      }, pin && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "range-pin",
        role: "presentation",
        part: "pin"
      }, Math.round(value)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "range-knob",
        role: "presentation",
        part: "knob"
      }));
    };

    var ratioToValue = function ratioToValue(ratio, min, max, step) {
      var value = (max - min) * ratio;

      if (step > 0) {
        value = Math.round(value / step) * step + min;
      }

      return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(min, value, max);
    };

    var valueToRatio = function valueToRatio(value, min, max) {
      return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["k"])(0, (value - min) / (max - min), 1);
    };

    var rangeIds = 0;
    Range.style = {
      ios: rangeIosCss,
      md: rangeMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=25-es5.js.map