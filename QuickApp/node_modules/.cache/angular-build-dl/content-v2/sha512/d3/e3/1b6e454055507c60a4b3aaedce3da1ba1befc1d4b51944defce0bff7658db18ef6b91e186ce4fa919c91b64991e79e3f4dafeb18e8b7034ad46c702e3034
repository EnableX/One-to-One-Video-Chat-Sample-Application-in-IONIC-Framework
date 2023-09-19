function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js ***!
    \**********************************************************************/

  /*! exports provided: ion_item_option, ion_item_options, ion_item_sliding */

  /***/
  function node_modulesIonicCoreDistEsmIonItemOption_3EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_option", function () {
      return ItemOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_options", function () {
      return ItemOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_item_sliding", function () {
      return ItemSliding;
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


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:16px}:host(.ion-activated){background:var(--ion-color-primary-shade, #3171e0)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
    var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.in-list.item-options-end:last-child){padding-right:calc(.7em + var(--ion-safe-area-right))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-end:last-child){padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}:host(.in-list.item-options-start:first-child){padding-left:calc(.7em + var(--ion-safe-area-left))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-list.item-options-start:first-child){padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0.7em;padding-right:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted([slot=end]){margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=icon-only]){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:14px;font-weight:500;text-transform:uppercase}";

    var ItemOption = /*#__PURE__*/function () {
      function ItemOption(hostRef) {
        _classCallCheck(this, ItemOption);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the item option.
         */

        this.disabled = false;
        /**
         * If `true`, the option will expand to take up the available width and cover any other options.
         */

        this.expandable = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = function (ev) {
          var el = ev.target.closest('ion-item-option');

          if (el) {
            ev.preventDefault();
          }
        };
      }

      _createClass(ItemOption, [{
        key: "render",
        value: function render() {
          var _Object;

          var disabled = this.disabled,
              expandable = this.expandable,
              href = this.href;
          var TagType = href === undefined ? 'button' : 'a';
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var attrs = TagType === 'button' ? {
            type: this.type
          } : {
            download: this.download,
            href: this.href,
            target: this.target
          };
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color, (_Object = {}, _defineProperty(_Object, mode, true), _defineProperty(_Object, 'item-option-disabled', disabled), _defineProperty(_Object, 'item-option-expandable', expandable), _defineProperty(_Object, 'ion-activatable', true), _Object))
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({}, attrs, {
            "class": "button-native",
            part: "native",
            disabled: disabled
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "button-inner"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "top"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "horizontal-wrapper"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "start"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "icon-only"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "end"
          })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "bottom"
          })), mode === 'md' && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return ItemOption;
    }();

    ItemOption.style = {
      ios: itemOptionIosCss,
      md: itemOptionMdCss
    };
    var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
    var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}[dir=rtl] ion-item-options,:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end),:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] .item-options-start,:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end),:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";

    var ItemOptions = /*#__PURE__*/function () {
      function ItemOptions(hostRef) {
        _classCallCheck(this, ItemOptions);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionSwipe = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionSwipe", 7);
        /**
         * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `ion-item-options`, a side must be provided for each.
         *
         */

        this.side = 'end';
      }
      /** @internal */


      _createClass(ItemOptions, [{
        key: "fireSwipeEvent",
        value: function () {
          var _fireSwipeEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.ionSwipe.emit({
                    side: this.side
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function fireSwipeEvent() {
            return _fireSwipeEvent.apply(this, arguments);
          }

          return fireSwipeEvent;
        }()
      }, {
        key: "render",
        value: function render() {
          var _class;

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var isEnd = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["n"])(this.side);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "item-options-".concat(mode), true), _defineProperty(_class, 'item-options-start', !isEnd), _defineProperty(_class, 'item-options-end', isEnd), _class)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return ItemOptions;
    }();

    ItemOptions.style = {
      ios: itemOptionsIosCss,
      md: itemOptionsMdCss
    };
    var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable,:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}";
    var SWIPE_MARGIN = 30;
    var ELASTIC_FACTOR = 0.55;
    var openSlidingItem;

    var ItemSliding = /*#__PURE__*/function () {
      function ItemSliding(hostRef) {
        _classCallCheck(this, ItemSliding);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionDrag = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionDrag", 7);
        this.item = null;
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.sides = 0
        /* None */
        ;
        this.optsDirty = true;
        this.closestContent = null;
        this.initialContentScrollY = true;
        this.state = 2
        /* Disabled */
        ;
        /**
         * If `true`, the user cannot interact with the sliding item.
         */

        this.disabled = false;
      }

      _createClass(ItemSliding, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.item = this.el.querySelector('ion-item');
                  this.closestContent = this.el.closest('ion-content');
                  _context2.next = 4;
                  return this.updateOptions();

                case 4:
                  _context2.next = 6;
                  return Promise.resolve().then(__webpack_require__.bind(null,
                  /*! ./index-34cb2743.js */
                  "./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));

                case 6:
                  this.gesture = _context2.sent.createGesture({
                    el: this.el,
                    gestureName: 'item-swipe',
                    gesturePriority: 100,
                    threshold: 5,
                    canStart: function canStart(ev) {
                      return _this.canStart(ev);
                    },
                    onStart: function onStart() {
                      return _this.onStart();
                    },
                    onMove: function onMove(ev) {
                      return _this.onMove(ev);
                    },
                    onEnd: function onEnd(ev) {
                      return _this.onEnd(ev);
                    }
                  });
                  this.disabledChanged();

                case 8:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function connectedCallback() {
            return _connectedCallback.apply(this, arguments);
          }

          return connectedCallback;
        }()
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.item = null;
          this.leftOptions = this.rightOptions = undefined;

          if (openSlidingItem === this.el) {
            openSlidingItem = undefined;
          }
        }
        /**
         * Get the amount the item is open in pixels.
         */

      }, {
        key: "getOpenAmount",
        value: function getOpenAmount() {
          return Promise.resolve(this.openAmount);
        }
        /**
         * Get the ratio of the open amount of the item compared to the width of the options.
         * If the number returned is positive, then the options on the right side are open.
         * If the number returned is negative, then the options on the left side are open.
         * If the absolute value of the number is greater than 1, the item is open more than
         * the width of the options.
         */

      }, {
        key: "getSlidingRatio",
        value: function getSlidingRatio() {
          return Promise.resolve(this.getSlidingRatioSync());
        }
        /**
         * Open the sliding item.
         *
         * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
         */

      }, {
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(side) {
            var _this2 = this;

            var optionsToOpen, isStartOpen, isEndOpen;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.item === null)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  optionsToOpen = this.getOptions(side);

                  if (optionsToOpen) {
                    _context3.next = 5;
                    break;
                  }

                  return _context3.abrupt("return");

                case 5:
                  /**
                   * If side is not set, we need to infer the side
                   * so we know which direction to move the options
                   */
                  if (side === undefined) {
                    side = optionsToOpen === this.leftOptions ? 'start' : 'end';
                  } // In RTL we want to switch the sides


                  side = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["n"])(side) ? 'end' : 'start';
                  isStartOpen = this.openAmount < 0;
                  isEndOpen = this.openAmount > 0;
                  /**
                   * If a side is open and a user tries to
                   * re-open the same side, we should not do anything
                   */

                  if (!(isStartOpen && optionsToOpen === this.leftOptions)) {
                    _context3.next = 11;
                    break;
                  }

                  return _context3.abrupt("return");

                case 11:
                  if (!(isEndOpen && optionsToOpen === this.rightOptions)) {
                    _context3.next = 13;
                    break;
                  }

                  return _context3.abrupt("return");

                case 13:
                  this.closeOpened();
                  this.state = 4
                  /* Enabled */
                  ;
                  requestAnimationFrame(function () {
                    _this2.calculateOptsWidth();

                    var width = side === 'end' ? _this2.optsWidthRightSide : -_this2.optsWidthLeftSide;
                    openSlidingItem = _this2.el;

                    _this2.setOpenAmount(width, false);

                    _this2.state = side === 'end' ? 8
                    /* End */
                    : 16
                    /* Start */
                    ;
                  });

                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function open(_x) {
            return _open.apply(this, arguments);
          }

          return open;
        }()
        /**
         * Close the sliding item. Items can also be closed from the [List](../list).
         */

      }, {
        key: "close",
        value: function () {
          var _close = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.setOpenAmount(0, true);

                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function close() {
            return _close.apply(this, arguments);
          }

          return close;
        }()
        /**
         * Close all of the sliding items in the list. Items can also be closed from the [List](../list).
         */

      }, {
        key: "closeOpened",
        value: function () {
          var _closeOpened = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(openSlidingItem !== undefined)) {
                    _context5.next = 4;
                    break;
                  }

                  openSlidingItem.close();
                  openSlidingItem = undefined;
                  return _context5.abrupt("return", true);

                case 4:
                  return _context5.abrupt("return", false);

                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));

          function closeOpened() {
            return _closeOpened.apply(this, arguments);
          }

          return closeOpened;
        }()
        /**
         * Given an optional side, return the ion-item-options element.
         *
         * @param side This side of the options to get. If a side is not provided it will
         * return the first one available.
         */

      }, {
        key: "getOptions",
        value: function getOptions(side) {
          if (side === undefined) {
            return this.leftOptions || this.rightOptions;
          } else if (side === 'start') {
            return this.leftOptions;
          } else {
            return this.rightOptions;
          }
        }
      }, {
        key: "updateOptions",
        value: function () {
          var _updateOptions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var options, sides, i, item, option, side;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  options = this.el.querySelectorAll('ion-item-options');
                  sides = 0; // Reset left and right options in case they were removed

                  this.leftOptions = this.rightOptions = undefined;
                  i = 0;

                case 4:
                  if (!(i < options.length)) {
                    _context6.next = 19;
                    break;
                  }

                  item = options.item(i);
                  /**
                   * We cannot use the componentOnReady helper
                   * util here since we need to wait for all of these items
                   * to be ready before we set `this.sides` and `this.optsDirty`.
                   */

                  if (!(item.componentOnReady !== undefined)) {
                    _context6.next = 12;
                    break;
                  }

                  _context6.next = 9;
                  return item.componentOnReady();

                case 9:
                  _context6.t0 = _context6.sent;
                  _context6.next = 13;
                  break;

                case 12:
                  _context6.t0 = item;

                case 13:
                  option = _context6.t0;
                  side = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_3__["n"])(option.side) ? 'end' : 'start';

                  if (side === 'start') {
                    this.leftOptions = option;
                    sides |= 1
                    /* Start */
                    ;
                  } else {
                    this.rightOptions = option;
                    sides |= 2
                    /* End */
                    ;
                  }

                case 16:
                  i++;
                  _context6.next = 4;
                  break;

                case 19:
                  this.optsDirty = true;
                  this.sides = sides;

                case 21:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));

          function updateOptions() {
            return _updateOptions.apply(this, arguments);
          }

          return updateOptions;
        }()
      }, {
        key: "canStart",
        value: function canStart(gesture) {
          /**
           * If very close to start of the screen
           * do not open left side so swipe to go
           * back will still work.
           */
          var rtl = document.dir === 'rtl';
          var atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;

          if (atEdge) {
            return false;
          }

          var selected = openSlidingItem;

          if (selected && selected !== this.el) {
            this.closeOpened();
          }

          return !!(this.rightOptions || this.leftOptions);
        }
      }, {
        key: "disableContentScrollY",
        value: function disableContentScrollY() {
          if (this.closestContent === null) {
            return;
          }

          this.initialContentScrollY = this.closestContent.scrollY;
          this.closestContent.scrollY = false;
        }
      }, {
        key: "restoreContentScrollY",
        value: function restoreContentScrollY() {
          if (this.closestContent === null) {
            return;
          }

          this.closestContent.scrollY = this.initialContentScrollY;
        }
      }, {
        key: "onStart",
        value: function onStart() {
          /**
           * We need to query for the ion-item
           * every time the gesture starts. Developers
           * may toggle ion-item elements via *ngIf.
           */
          this.item = this.el.querySelector('ion-item'); // Prevent scrolling during gesture

          this.disableContentScrollY();
          openSlidingItem = this.el;

          if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
          }

          if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4
            /* Enabled */
            ;
          }

          this.initialOpenAmount = this.openAmount;

          if (this.item) {
            this.item.style.transition = 'none';
          }
        }
      }, {
        key: "onMove",
        value: function onMove(gesture) {
          if (this.optsDirty) {
            this.calculateOptsWidth();
          }

          var openAmount = this.initialOpenAmount - gesture.deltaX;

          switch (this.sides) {
            case 2
            /* End */
            :
              openAmount = Math.max(0, openAmount);
              break;

            case 1
            /* Start */
            :
              openAmount = Math.min(0, openAmount);
              break;

            case 3
            /* Both */
            :
              break;

            case 0
            /* None */
            :
              return;

            default:
              console.warn('invalid ItemSideFlags value', this.sides);
              break;
          }

          var optsWidth;

          if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
          } else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
          }

          this.setOpenAmount(openAmount, false);
        }
      }, {
        key: "onEnd",
        value: function onEnd(gesture) {
          // Restore ion-content scrollY to initial value when gesture ends
          this.restoreContentScrollY();
          var velocity = gesture.velocityX;
          var restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide; // Check if the drag didn't clear the buttons mid-point
          // and we aren't moving fast enough to swipe open

          var isResetDirection = this.openAmount > 0 === !(velocity < 0);
          var isMovingFast = Math.abs(velocity) > 0.3;
          var isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);

          if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
          }

          var state = this.state;
          this.setOpenAmount(restingPoint, true);

          if ((state & 32
          /* SwipeEnd */
          ) !== 0 && this.rightOptions) {
            this.rightOptions.fireSwipeEvent();
          } else if ((state & 64
          /* SwipeStart */
          ) !== 0 && this.leftOptions) {
            this.leftOptions.fireSwipeEvent();
          }
        }
      }, {
        key: "calculateOptsWidth",
        value: function calculateOptsWidth() {
          this.optsWidthRightSide = 0;

          if (this.rightOptions) {
            this.rightOptions.style.display = 'flex';
            this.optsWidthRightSide = this.rightOptions.offsetWidth;
            this.rightOptions.style.display = '';
          }

          this.optsWidthLeftSide = 0;

          if (this.leftOptions) {
            this.leftOptions.style.display = 'flex';
            this.optsWidthLeftSide = this.leftOptions.offsetWidth;
            this.leftOptions.style.display = '';
          }

          this.optsDirty = false;
        }
      }, {
        key: "setOpenAmount",
        value: function setOpenAmount(openAmount, isFinal) {
          var _this3 = this;

          if (this.tmr !== undefined) {
            clearTimeout(this.tmr);
            this.tmr = undefined;
          }

          if (!this.item) {
            return;
          }

          var style = this.item.style;
          this.openAmount = openAmount;

          if (isFinal) {
            style.transition = '';
          }

          if (openAmount > 0) {
            this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8
            /* End */
            | 32
            /* SwipeEnd */
            : 8
            /* End */
            ;
          } else if (openAmount < 0) {
            this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16
            /* Start */
            | 64
            /* SwipeStart */
            : 16
            /* Start */
            ;
          } else {
            /**
             * Item sliding cannot be interrupted
             * while closing the item. If it did,
             * it would allow the item to get into an
             * inconsistent state where multiple
             * items are then open at the same time.
             */
            if (this.gesture) {
              this.gesture.enable(false);
            }

            this.tmr = setTimeout(function () {
              _this3.state = 2
              /* Disabled */
              ;
              _this3.tmr = undefined;

              if (_this3.gesture) {
                _this3.gesture.enable(true);
              }
            }, 600);
            openSlidingItem = undefined;
            style.transform = '';
            return;
          }

          style.transform = "translate3d(".concat(-openAmount, "px,0,0)");
          this.ionDrag.emit({
            amount: openAmount,
            ratio: this.getSlidingRatioSync()
          });
        }
      }, {
        key: "getSlidingRatioSync",
        value: function getSlidingRatioSync() {
          if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
          } else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
          } else {
            return 0;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'item-sliding-active-slide', this.state !== 2
            /* Disabled */
            ), _defineProperty(_class2, 'item-sliding-active-options-end', (this.state & 8
            /* End */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-options-start', (this.state & 16
            /* Start */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-swipe-end', (this.state & 32
            /* SwipeEnd */
            ) !== 0), _defineProperty(_class2, 'item-sliding-active-swipe-start', (this.state & 64
            /* SwipeStart */
            ) !== 0), _class2)
          });
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
            "disabled": ["disabledChanged"]
          };
        }
      }]);

      return ItemSliding;
    }();

    var swipeShouldReset = function swipeShouldReset(isResetDirection, isMovingFast, isOnResetZone) {
      // The logic required to know when the sliding item should close (openAmount=0)
      // depends on three booleans (isResetDirection, isMovingFast, isOnResetZone)
      // and it ended up being too complicated to be written manually without errors
      // so the truth table is attached below: (0=false, 1=true)
      // isResetDirection | isMovingFast | isOnResetZone || shouldClose
      //         0        |       0      |       0       ||    0
      //         0        |       0      |       1       ||    1
      //         0        |       1      |       0       ||    0
      //         0        |       1      |       1       ||    0
      //         1        |       0      |       0       ||    0
      //         1        |       0      |       1       ||    1
      //         1        |       1      |       0       ||    1
      //         1        |       1      |       1       ||    1
      // The resulting expression was generated by resolving the K-map (Karnaugh map):
      return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
    };

    ItemSliding.style = itemSlidingCss;
    /***/
  }
}]);
//# sourceMappingURL=16-es5.js.map