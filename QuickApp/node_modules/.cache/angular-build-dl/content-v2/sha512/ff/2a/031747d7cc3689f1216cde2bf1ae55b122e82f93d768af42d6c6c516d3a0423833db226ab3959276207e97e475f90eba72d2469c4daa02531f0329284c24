function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js ***!
    \*****************************************************************/

  /*! exports provided: ion_select, ion_select_option, ion_select_popover */

  /***/
  function node_modulesIonicCoreDistEsmIonSelect_3EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select", function () {
      return Select;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_option", function () {
      return SelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () {
      return SelectPopover;
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


    var _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlays-a62f858b.js */
    "./node_modules/@ionic/core/dist/esm/overlays-a62f858b.js");
    /* harmony import */


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");
    /* harmony import */


    var _hardware_back_button_4a6b37fb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hardware-back-button-4a6b37fb.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-4a6b37fb.js");

    var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
      /* tslint:disable-next-line */
      if (typeof MutationObserver === 'undefined') {
        return;
      }

      var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
      });
      mutation.observe(containerEl, {
        childList: true,
        subtree: true
      });
      return mutation;
    };

    var getSelectedOption = function getSelectedOption(mutationList, tagName) {
      var newOption;
      mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
          newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
      });
      return newOption;
    };

    var findCheckedOption = function findCheckedOption(el, tagName) {
      if (el.nodeType !== 1) {
        return undefined;
      }

      var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
      return options.find(function (o) {
        return o.value === el.value;
      });
    };

    var selectIosCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";
    var selectMdCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}";

    var Select = /*#__PURE__*/function () {
      function Select(hostRef) {
        var _this = this;

        _classCallCheck(this, Select);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionChange", 7);
        this.ionCancel = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionCancel", 7);
        this.ionFocus = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionFocus", 7);
        this.ionBlur = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionBlur", 7);
        this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionStyle", 7);
        this.inputId = "ion-sel-".concat(selectIds++);
        this.didInit = false;
        this.isExpanded = false;
        /**
         * If `true`, the user cannot interact with the select.
         */

        this.disabled = false;
        /**
         * The text to display on the cancel button.
         */

        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button.
         */

        this.okText = 'OK';
        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = this.inputId;
        /**
         * If `true`, the select can accept multiple values.
         */

        this.multiple = false;
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`.
         */

        this["interface"] = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [ion-alert docs](../alert), the
         * [ion-action-sheet docs](../action-sheet) and the
         * [ion-popover docs](../popover) for the
         * create options for each interface.
         *
         * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
         */

        this.interfaceOptions = {};

        this.onClick = function (ev) {
          _this.setFocus();

          _this.open(ev);
        };

        this.onFocus = function () {
          _this.ionFocus.emit();
        };

        this.onBlur = function () {
          _this.ionBlur.emit();
        };
      }

      _createClass(Select, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          this.emitStyle();
        }
      }, {
        key: "valueChanged",
        value: function valueChanged() {
          this.emitStyle();

          if (this.didInit) {
            this.ionChange.emit({
              value: this.value
            });
          }
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this2 = this;

            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.updateOverlayOptions();
                  this.emitStyle();
                  this.mutationO = watchForOptions(this.el, 'ion-select-option', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _this2.updateOverlayOptions();

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })));

                case 3:
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
          if (this.mutationO) {
            this.mutationO.disconnect();
            this.mutationO = undefined;
          }
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.didInit = true;
        }
        /**
         * Open the select overlay. The overlay is either an alert, action sheet, or popover,
         * depending on the `interface` property on the `ion-select`.
         *
         * @param event The user interface event that called the open.
         */

      }, {
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
            var _this3 = this;

            var overlay;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.disabled || this.isExpanded)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", undefined);

                case 2:
                  _context3.next = 4;
                  return this.createOverlay(event);

                case 4:
                  overlay = this.overlay = _context3.sent;
                  this.isExpanded = true;
                  overlay.onDidDismiss().then(function () {
                    _this3.overlay = undefined;
                    _this3.isExpanded = false;

                    _this3.setFocus();
                  });
                  _context3.next = 9;
                  return overlay.present();

                case 9:
                  return _context3.abrupt("return", overlay);

                case 10:
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
      }, {
        key: "createOverlay",
        value: function createOverlay(ev) {
          var selectInterface = this["interface"];

          if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn("Select interface cannot be \"".concat(selectInterface, "\" with a multi-value select. Using the \"alert\" interface instead."));
            selectInterface = 'alert';
          }

          if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
          }

          if (selectInterface === 'popover') {
            return this.openPopover(ev);
          }

          if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
          }

          return this.openAlert();
        }
      }, {
        key: "updateOverlayOptions",
        value: function updateOverlayOptions() {
          var overlay = this.overlay;

          if (!overlay) {
            return;
          }

          var childOpts = this.childOpts;
          var value = this.value;

          switch (this["interface"]) {
            case 'action-sheet':
              overlay.buttons = this.createActionSheetButtons(childOpts, value);
              break;

            case 'popover':
              var popover = overlay.querySelector('ion-select-popover');

              if (popover) {
                popover.options = this.createPopoverOptions(childOpts, value);
              }

              break;

            case 'alert':
              var inputType = this.multiple ? 'checkbox' : 'radio';
              overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
              break;
          }
        }
      }, {
        key: "createActionSheetButtons",
        value: function createActionSheetButtons(data, selectValue) {
          var _this4 = this;

          var actionSheetButtons = data.map(function (option) {
            var value = getOptionValue(option); // Remove hydrated before copying over classes

            var copyClasses = Array.from(option.classList).filter(function (cls) {
              return cls !== 'hydrated';
            }).join(' ');
            var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
            return {
              role: isOptionSelected(value, selectValue, _this4.compareWith) ? 'selected' : '',
              text: option.textContent,
              cssClass: optClass,
              handler: function handler() {
                _this4.value = value;
              }
            };
          }); // Add "cancel" button

          actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: function handler() {
              _this4.ionCancel.emit();
            }
          });
          return actionSheetButtons;
        }
      }, {
        key: "createAlertInputs",
        value: function createAlertInputs(data, inputType, selectValue) {
          var _this5 = this;

          var alertInputs = data.map(function (option) {
            var value = getOptionValue(option); // Remove hydrated before copying over classes

            var copyClasses = Array.from(option.classList).filter(function (cls) {
              return cls !== 'hydrated';
            }).join(' ');
            var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
            return {
              type: inputType,
              cssClass: optClass,
              label: option.textContent || '',
              value: value,
              checked: isOptionSelected(value, selectValue, _this5.compareWith),
              disabled: option.disabled
            };
          });
          return alertInputs;
        }
      }, {
        key: "createPopoverOptions",
        value: function createPopoverOptions(data, selectValue) {
          var _this6 = this;

          var popoverOptions = data.map(function (option) {
            var value = getOptionValue(option); // Remove hydrated before copying over classes

            var copyClasses = Array.from(option.classList).filter(function (cls) {
              return cls !== 'hydrated';
            }).join(' ');
            var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
            return {
              text: option.textContent || '',
              cssClass: optClass,
              value: value,
              checked: isOptionSelected(value, selectValue, _this6.compareWith),
              disabled: option.disabled,
              handler: function handler() {
                _this6.value = value;

                _this6.close();
              }
            };
          });
          return popoverOptions;
        }
      }, {
        key: "openPopover",
        value: function () {
          var _openPopover = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ev) {
            var interfaceOptions, mode, value, popoverOpts;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  interfaceOptions = this.interfaceOptions;
                  mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                  value = this.value;
                  popoverOpts = Object.assign(Object.assign({
                    mode: mode
                  }, interfaceOptions), {
                    component: 'ion-select-popover',
                    cssClass: ['select-popover', interfaceOptions.cssClass],
                    event: ev,
                    componentProps: {
                      header: interfaceOptions.header,
                      subHeader: interfaceOptions.subHeader,
                      message: interfaceOptions.message,
                      value: value,
                      options: this.createPopoverOptions(this.childOpts, value)
                    }
                  });
                  return _context4.abrupt("return", _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts));

                case 5:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function openPopover(_x2) {
            return _openPopover.apply(this, arguments);
          }

          return openPopover;
        }()
      }, {
        key: "openActionSheet",
        value: function () {
          var _openActionSheet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var mode, interfaceOptions, actionSheetOpts;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                  interfaceOptions = this.interfaceOptions;
                  actionSheetOpts = Object.assign(Object.assign({
                    mode: mode
                  }, interfaceOptions), {
                    buttons: this.createActionSheetButtons(this.childOpts, this.value),
                    cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                  });
                  return _context5.abrupt("return", _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts));

                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));

          function openActionSheet() {
            return _openActionSheet.apply(this, arguments);
          }

          return openActionSheet;
        }()
      }, {
        key: "openAlert",
        value: function () {
          var _openAlert = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var _this7 = this;

            var label, labelText, interfaceOptions, inputType, mode, alertOpts;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  label = this.getLabel();
                  labelText = label ? label.textContent : null;
                  interfaceOptions = this.interfaceOptions;
                  inputType = this.multiple ? 'checkbox' : 'radio';
                  mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
                  alertOpts = Object.assign(Object.assign({
                    mode: mode
                  }, interfaceOptions), {
                    header: interfaceOptions.header ? interfaceOptions.header : labelText,
                    inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
                    buttons: [{
                      text: this.cancelText,
                      role: 'cancel',
                      handler: function handler() {
                        _this7.ionCancel.emit();
                      }
                    }, {
                      text: this.okText,
                      handler: function handler(selectedValues) {
                        _this7.value = selectedValues;
                      }
                    }],
                    cssClass: ['select-alert', interfaceOptions.cssClass, this.multiple ? 'multiple-select-alert' : 'single-select-alert']
                  });
                  return _context6.abrupt("return", _overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts));

                case 7:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));

          function openAlert() {
            return _openAlert.apply(this, arguments);
          }

          return openAlert;
        }()
        /**
         * Close the select interface.
         */

      }, {
        key: "close",
        value: function close() {
          // TODO check !this.overlay || !this.isFocus()
          if (!this.overlay) {
            return Promise.resolve(false);
          }

          return this.overlay.dismiss();
        }
      }, {
        key: "getLabel",
        value: function getLabel() {
          return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["j"])(this.el);
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return this.getText() !== '';
        }
      }, {
        key: "childOpts",
        get: function get() {
          return Array.from(this.el.querySelectorAll('ion-select-option'));
        }
      }, {
        key: "getText",
        value: function getText() {
          var selectedText = this.selectedText;

          if (selectedText != null && selectedText !== '') {
            return selectedText;
          }

          return generateText(this.childOpts, this.value, this.compareWith);
        }
      }, {
        key: "setFocus",
        value: function setFocus() {
          if (this.focusEl) {
            this.focusEl.focus();
          }
        }
      }, {
        key: "emitStyle",
        value: function emitStyle() {
          this.ionStyle.emit({
            'interactive': true,
            'select': true,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'interactive-disabled': this.disabled,
            'select-disabled': this.disabled
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _class,
              _this8 = this;

          var disabled = this.disabled,
              el = this.el,
              inputId = this.inputId,
              isExpanded = this.isExpanded,
              name = this.name,
              placeholder = this.placeholder,
              value = this.value;
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);

          var _Object = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["d"])(el, inputId),
              labelText = _Object.labelText,
              labelId = _Object.labelId;

          Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__["e"])(true, el, name, parseValue(value), disabled);
          var displayValue = this.getText();
          var addPlaceholderClass = false;
          var selectText = displayValue;

          if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
          }

          var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
          };
          var textPart = addPlaceholderClass ? 'placeholder' : 'text'; // If there is a label then we need to concatenate it with the
          // current value (or placeholder) and a comma so it separates
          // nicely when the screen reader announces it, otherwise just
          // announce the value / placeholder

          var displayLabel = labelText !== undefined ? selectText !== '' ? "".concat(selectText, ", ").concat(labelText) : labelText : selectText;
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            role: "button",
            "aria-haspopup": "listbox",
            "aria-disabled": disabled ? 'true' : null,
            "aria-label": displayLabel,
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'in-item', Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el)), _defineProperty(_class, 'select-disabled', disabled), _defineProperty(_class, 'select-expanded', isExpanded), _class)
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "aria-hidden": "true",
            "class": selectTextClasses,
            part: textPart
          }, selectText), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "select-icon",
            role: "presentation",
            part: "icon"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "select-icon-inner"
          })), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
            id: labelId
          }, displayLabel), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            disabled: disabled,
            id: inputId,
            "aria-labelledby": labelId,
            "aria-haspopup": "listbox",
            "aria-expanded": "".concat(isExpanded),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            ref: function ref(focusEl) {
              return _this8.focusEl = focusEl;
            }
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
            "disabled": ["disabledChanged"],
            "placeholder": ["disabledChanged"],
            "value": ["valueChanged"]
          };
        }
      }]);

      return Select;
    }();

    var isOptionSelected = function isOptionSelected(currentValue, compareValue, compareWith) {
      if (currentValue === undefined) {
        return false;
      }

      if (Array.isArray(currentValue)) {
        return currentValue.some(function (val) {
          return compareOptions(val, compareValue, compareWith);
        });
      } else {
        return compareOptions(currentValue, compareValue, compareWith);
      }
    };

    var getOptionValue = function getOptionValue(el) {
      var value = el.value;
      return value === undefined ? el.textContent || '' : value;
    };

    var parseValue = function parseValue(value) {
      if (value == null) {
        return undefined;
      }

      if (Array.isArray(value)) {
        return value.join(',');
      }

      return value.toString();
    };

    var compareOptions = function compareOptions(currentValue, compareValue, compareWith) {
      if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
      } else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
      } else {
        return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
      }
    };

    var generateText = function generateText(opts, value, compareWith) {
      if (value === undefined) {
        return '';
      }

      if (Array.isArray(value)) {
        return value.map(function (v) {
          return textForValue(opts, v, compareWith);
        }).filter(function (opt) {
          return opt !== null;
        }).join(', ');
      } else {
        return textForValue(opts, value, compareWith) || '';
      }
    };

    var textForValue = function textForValue(opts, value, compareWith) {
      var selectOpt = opts.find(function (opt) {
        return compareOptions(getOptionValue(opt), value, compareWith);
      });
      return selectOpt ? selectOpt.textContent : null;
    };

    var selectIds = 0;
    var OPTION_CLASS = 'select-interface-option';
    Select.style = {
      ios: selectIosCss,
      md: selectMdCss
    };
    var selectOptionCss = ":host{display:none}";

    var SelectOption = /*#__PURE__*/function () {
      function SelectOption(hostRef) {
        _classCallCheck(this, SelectOption);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-selopt-".concat(selectOptionIds++);
        /**
         * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
         */

        this.disabled = false;
      }

      _createClass(SelectOption, [{
        key: "render",
        value: function render() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "option",
            id: this.inputId,
            "class": Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return SelectOption;
    }();

    var selectOptionIds = 0;
    SelectOption.style = selectOptionCss;
    var selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

    var SelectPopover = /*#__PURE__*/function () {
      function SelectPopover(hostRef) {
        _classCallCheck(this, SelectPopover);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Array of options for the popover */

        this.options = [];
      }

      _createClass(SelectPopover, [{
        key: "onSelect",
        value: function onSelect(ev) {
          var option = this.options.find(function (o) {
            return o.value === ev.target.value;
          });

          if (option) {
            Object(_overlays_a62f858b_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var checkedOption = this.options.find(function (o) {
            return o.checked;
          });
          var checkedValue = checkedOption ? checkedOption.value : undefined;
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this)
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", {
            "class": "ion-text-wrap"
          }, this.subHeader !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", {
            value: checkedValue
          }, this.options.map(function (option) {
            return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", {
              "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__["g"])(option.cssClass)
            }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", {
              value: option.value,
              disabled: option.disabled
            }));
          }))));
        }
      }]);

      return SelectPopover;
    }();

    SelectPopover.style = selectPopoverCss;
    /***/
  }
}]);
//# sourceMappingURL=32-es5.js.map