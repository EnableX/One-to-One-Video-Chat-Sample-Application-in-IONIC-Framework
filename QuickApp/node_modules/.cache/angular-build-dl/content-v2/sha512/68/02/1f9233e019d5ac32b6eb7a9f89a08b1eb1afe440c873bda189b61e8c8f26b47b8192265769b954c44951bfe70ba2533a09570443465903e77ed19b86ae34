function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_tab, ion_tabs */

  /***/
  function node_modulesIonicCoreDistEsmIonTab_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tab", function () {
      return Tab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tabs", function () {
      return Tabs;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./framework-delegate-94e770cc.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    var tabCss = ":host(.tab-hidden){display:none !important}";

    var Tab = /*#__PURE__*/function () {
      function Tab(hostRef) {
        _classCallCheck(this, Tab);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */

        this.active = false;
      }

      _createClass(Tab, [{
        key: "componentWillLoad",
        value: function () {
          var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.active) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return this.setActive();

                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function componentWillLoad() {
            return _componentWillLoad.apply(this, arguments);
          }

          return componentWillLoad;
        }()
        /** Set the active component for the tab */

      }, {
        key: "setActive",
        value: function () {
          var _setActive = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.prepareLazyLoaded();

                case 2:
                  this.active = true;

                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function setActive() {
            return _setActive.apply(this, arguments);
          }

          return setActive;
        }()
      }, {
        key: "changeActive",
        value: function changeActive(isActive) {
          if (isActive) {
            this.prepareLazyLoaded();
          }
        }
      }, {
        key: "prepareLazyLoaded",
        value: function prepareLazyLoaded() {
          if (!this.loaded && this.component != null) {
            this.loaded = true;

            try {
              return Object(_framework_delegate_94e770cc_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.delegate, this.el, this.component, ['ion-page']);
            } catch (e) {
              console.error(e);
            }
          }

          return Promise.resolve(undefined);
        }
      }, {
        key: "render",
        value: function render() {
          var tab = this.tab,
              active = this.active,
              component = this.component;
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "tabpanel",
            "aria-hidden": !active ? 'true' : null,
            "aria-labelledby": "tab-button-".concat(tab),
            "class": {
              'ion-page': component === undefined,
              'tab-hidden': !active
            }
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
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
            "active": ["changeActive"]
          };
        }
      }]);

      return Tab;
    }();

    Tab.style = tabCss;
    var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";

    var Tabs = /*#__PURE__*/function () {
      function Tabs(hostRef) {
        var _this = this;

        _classCallCheck(this, Tabs);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionNavWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionTabsDidChange", 3);
        this.transitioning = false;
        /** @internal */

        this.useRouter = false;

        this.onTabClicked = function (ev) {
          var _ev$detail = ev.detail,
              href = _ev$detail.href,
              tab = _ev$detail.tab;

          if (_this.useRouter && href !== undefined) {
            var router = document.querySelector('ion-router');

            if (router) {
              router.push(href);
            }
          } else {
            _this.select(tab);
          }
        };
      }

      _createClass(Tabs, [{
        key: "componentWillLoad",
        value: function () {
          var _componentWillLoad2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var tabs;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!this.useRouter) {
                    this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                  }

                  if (this.useRouter) {
                    _context3.next = 6;
                    break;
                  }

                  tabs = this.tabs;

                  if (!(tabs.length > 0)) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.next = 6;
                  return this.select(tabs[0]);

                case 6:
                  this.ionNavWillLoad.emit();

                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function componentWillLoad() {
            return _componentWillLoad2.apply(this, arguments);
          }

          return componentWillLoad;
        }()
      }, {
        key: "componentWillRender",
        value: function componentWillRender() {
          var tabBar = this.el.querySelector('ion-tab-bar');

          if (tabBar) {
            var tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
          }
        }
        /**
         * Select a tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "select",
        value: function () {
          var _select = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tab) {
            var selectedTab;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  selectedTab = _getTab(this.tabs, tab);

                  if (this.shouldSwitch(selectedTab)) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return", false);

                case 3:
                  _context4.next = 5;
                  return this.setActive(selectedTab);

                case 5:
                  _context4.next = 7;
                  return this.notifyRouter();

                case 7:
                  this.tabSwitch();
                  return _context4.abrupt("return", true);

                case 9:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function select(_x) {
            return _select.apply(this, arguments);
          }

          return select;
        }()
        /**
         * Get a specific tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "getTab",
        value: function () {
          var _getTab2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tab) {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", _getTab(this.tabs, tab));

                case 1:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));

          function getTab(_x2) {
            return _getTab2.apply(this, arguments);
          }

          return getTab;
        }()
        /**
         * Get the currently selected tab.
         */

      }, {
        key: "getSelected",
        value: function getSelected() {
          return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
        }
        /** @internal */

      }, {
        key: "setRouteId",
        value: function () {
          var _setRouteId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
            var _this2 = this;

            var selectedTab;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  selectedTab = _getTab(this.tabs, id);

                  if (this.shouldSwitch(selectedTab)) {
                    _context6.next = 3;
                    break;
                  }

                  return _context6.abrupt("return", {
                    changed: false,
                    element: this.selectedTab
                  });

                case 3:
                  _context6.next = 5;
                  return this.setActive(selectedTab);

                case 5:
                  return _context6.abrupt("return", {
                    changed: true,
                    element: this.selectedTab,
                    markVisible: function markVisible() {
                      return _this2.tabSwitch();
                    }
                  });

                case 6:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));

          function setRouteId(_x3) {
            return _setRouteId.apply(this, arguments);
          }

          return setRouteId;
        }()
        /** @internal */

      }, {
        key: "getRouteId",
        value: function () {
          var _getRouteId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var tabId;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  tabId = this.selectedTab && this.selectedTab.tab;
                  return _context7.abrupt("return", tabId !== undefined ? {
                    id: tabId,
                    element: this.selectedTab
                  } : undefined);

                case 2:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));

          function getRouteId() {
            return _getRouteId.apply(this, arguments);
          }

          return getRouteId;
        }()
      }, {
        key: "setActive",
        value: function setActive(selectedTab) {
          if (this.transitioning) {
            return Promise.reject('transitioning already happening');
          }

          this.transitioning = true;
          this.leavingTab = this.selectedTab;
          this.selectedTab = selectedTab;
          this.ionTabsWillChange.emit({
            tab: selectedTab.tab
          });
          selectedTab.active = true;
          return Promise.resolve();
        }
      }, {
        key: "tabSwitch",
        value: function tabSwitch() {
          var selectedTab = this.selectedTab;
          var leavingTab = this.leavingTab;
          this.leavingTab = undefined;
          this.transitioning = false;

          if (!selectedTab) {
            return;
          }

          if (leavingTab !== selectedTab) {
            if (leavingTab) {
              leavingTab.active = false;
            }

            this.ionTabsDidChange.emit({
              tab: selectedTab.tab
            });
          }
        }
      }, {
        key: "notifyRouter",
        value: function notifyRouter() {
          if (this.useRouter) {
            var router = document.querySelector('ion-router');

            if (router) {
              return router.navChanged('forward');
            }
          }

          return Promise.resolve(false);
        }
      }, {
        key: "shouldSwitch",
        value: function shouldSwitch(selectedTab) {
          var leavingTab = this.selectedTab;
          return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
        }
      }, {
        key: "tabs",
        get: function get() {
          return Array.from(this.el.querySelectorAll('ion-tab'));
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onIonTabButtonClick: this.onTabClicked
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "top"
          }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "tabs-inner"
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "bottom"
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return Tabs;
    }();

    var _getTab = function _getTab(tabs, tab) {
      var tabEl = typeof tab === 'string' ? tabs.find(function (t) {
        return t.tab === tab;
      }) : tab;

      if (!tabEl) {
        console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
      }

      return tabEl;
    };

    Tabs.style = tabsCss;
    /***/
  }
}]);
//# sourceMappingURL=37-es5.js.map