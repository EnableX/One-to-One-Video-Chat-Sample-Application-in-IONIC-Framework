function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js ***!
    \******************************************************************/

  /*! exports provided: ion_reorder, ion_reorder_group */

  /***/
  function node_modulesIonicCoreDistEsmIonReorder_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_reorder", function () {
      return Reorder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function () {
      return ReorderGroup;
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


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

    var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
    var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

    var Reorder = /*#__PURE__*/function () {
      function Reorder(hostRef) {
        _classCallCheck(this, Reorder);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Reorder, [{
        key: "onClick",
        value: function onClick(ev) {
          var reorderGroup = this.el.closest('ion-reorder-group');
          ev.preventDefault(); // Only stop event propagation if the reorder is inside of an enabled
          // reorder group. This allows interaction with clickable children components.

          if (!reorderGroup || !reorderGroup.disabled) {
            ev.stopImmediatePropagation();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          var reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": mode
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            name: reorderIcon,
            lazy: false,
            "class": "reorder-icon",
            part: "icon"
          })));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return Reorder;
    }();

    Reorder.style = {
      ios: reorderIosCss,
      md: reorderMdCss
    };
    var reorderGroupCss = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";

    var ReorderGroup = /*#__PURE__*/function () {
      function ReorderGroup(hostRef) {
        _classCallCheck(this, ReorderGroup);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionItemReorder = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionItemReorder", 7);
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.state = 0
        /* Idle */
        ;
        /**
         * If `true`, the reorder will be hidden.
         */

        this.disabled = true;
      }

      _createClass(ReorderGroup, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          if (this.gesture) {
            this.gesture.enable(!this.disabled);
          }
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var contentEl;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  contentEl = this.el.closest('ion-content');

                  if (!contentEl) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return contentEl.getScrollElement();

                case 4:
                  this.scrollEl = _context.sent;

                case 5:
                  _context.next = 7;
                  return Promise.resolve().then(__webpack_require__.bind(null,
                  /*! ./index-34cb2743.js */
                  "./node_modules/@ionic/core/dist/esm/index-34cb2743.js"));

                case 7:
                  this.gesture = _context.sent.createGesture({
                    el: this.el,
                    gestureName: 'reorder',
                    gesturePriority: 110,
                    threshold: 0,
                    direction: 'y',
                    passive: false,
                    canStart: function canStart(detail) {
                      return _this.canStart(detail);
                    },
                    onStart: function onStart(ev) {
                      return _this.onStart(ev);
                    },
                    onMove: function onMove(ev) {
                      return _this.onMove(ev);
                    },
                    onEnd: function onEnd() {
                      return _this.onEnd();
                    }
                  });
                  this.disabledChanged();

                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));

          function connectedCallback() {
            return _connectedCallback.apply(this, arguments);
          }

          return connectedCallback;
        }()
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.onEnd();

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }
        }
        /**
         * Completes the reorder operation. Must be called by the `ionItemReorder` event.
         *
         * If a list of items is passed, the list will be reordered and returned in the
         * proper order.
         *
         * If no parameters are passed or if `true` is passed in, the reorder will complete
         * and the item will remain in the position it was dragged to. If `false` is passed,
         * the reorder will complete and the item will bounce back to its original position.
         *
         * @param listOrReorder A list of items to be sorted and returned in the new order or a
         * boolean of whether or not the reorder should reposition the item.
         */

      }, {
        key: "complete",
        value: function complete(listOrReorder) {
          return Promise.resolve(this.completeSync(listOrReorder));
        }
      }, {
        key: "canStart",
        value: function canStart(ev) {
          if (this.selectedItemEl || this.state !== 0
          /* Idle */
          ) {
            return false;
          }

          var target = ev.event.target;
          var reorderEl = target.closest('ion-reorder');

          if (!reorderEl) {
            return false;
          }

          var item = findReorderItem(reorderEl, this.el);

          if (!item) {
            return false;
          }

          ev.data = item;
          return true;
        }
      }, {
        key: "onStart",
        value: function onStart(ev) {
          ev.event.preventDefault();
          var item = this.selectedItemEl = ev.data;
          var heights = this.cachedHeights;
          heights.length = 0;
          var el = this.el;
          var children = el.children;

          if (!children || children.length === 0) {
            return;
          }

          var sum = 0;

          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
          }

          var box = el.getBoundingClientRect();
          this.containerTop = box.top;
          this.containerBottom = box.bottom;

          if (this.scrollEl) {
            var scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
          } else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
          }

          this.lastToIndex = indexForItem(item);
          this.selectedItemHeight = item.offsetHeight;
          this.state = 1
          /* Active */
          ;
          item.classList.add(ITEM_REORDER_SELECTED);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"])();
        }
      }, {
        key: "onMove",
        value: function onMove(ev) {
          var selectedItem = this.selectedItemEl;

          if (!selectedItem) {
            return;
          } // Scroll if we reach the scroll margins


          var scroll = this.autoscroll(ev.currentY); // // Get coordinate

          var top = this.containerTop - scroll;
          var bottom = this.containerBottom - scroll;
          var currentY = Math.max(top, Math.min(ev.currentY, bottom));
          var deltaY = scroll + currentY - ev.startY;
          var normalizedY = currentY - top;
          var toIndex = this.itemIndexForTop(normalizedY);

          if (toIndex !== this.lastToIndex) {
            var fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"])();
            this.reorderMove(fromIndex, toIndex);
          } // Update selected item position


          selectedItem.style.transform = "translateY(".concat(deltaY, "px)");
        }
      }, {
        key: "onEnd",
        value: function onEnd() {
          var selectedItemEl = this.selectedItemEl;
          this.state = 2
          /* Complete */
          ;

          if (!selectedItemEl) {
            this.state = 0
            /* Idle */
            ;
            return;
          }

          var toIndex = this.lastToIndex;
          var fromIndex = indexForItem(selectedItemEl);

          if (toIndex === fromIndex) {
            this.completeSync();
          } else {
            this.ionItemReorder.emit({
              from: fromIndex,
              to: toIndex,
              complete: this.completeSync.bind(this)
            });
          }

          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
        }
      }, {
        key: "completeSync",
        value: function completeSync(listOrReorder) {
          var selectedItemEl = this.selectedItemEl;

          if (selectedItemEl && this.state === 2
          /* Complete */
          ) {
            var children = this.el.children;
            var len = children.length;
            var toIndex = this.lastToIndex;
            var fromIndex = indexForItem(selectedItemEl);

            if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
              var ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
              this.el.insertBefore(selectedItemEl, ref);
            }

            if (Array.isArray(listOrReorder)) {
              listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
            }

            for (var i = 0; i < len; i++) {
              children[i].style['transform'] = '';
            }

            selectedItemEl.style.transition = '';
            selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = undefined;
            this.state = 0
            /* Idle */
            ;
          }

          return listOrReorder;
        }
      }, {
        key: "itemIndexForTop",
        value: function itemIndexForTop(deltaY) {
          var heights = this.cachedHeights; // TODO: since heights is a sorted array of integers, we can do
          // speed up the search using binary search. Remember that linear-search is still
          // faster than binary-search for small arrays (<64) due CPU branch misprediction.

          for (var i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
              return i;
            }
          }

          return heights.length - 1;
        }
        /********* DOM WRITE ********* */

      }, {
        key: "reorderMove",
        value: function reorderMove(fromIndex, toIndex) {
          var itemHeight = this.selectedItemHeight;
          var children = this.el.children;

          for (var i = 0; i < children.length; i++) {
            var style = children[i].style;
            var value = '';

            if (i > fromIndex && i <= toIndex) {
              value = "translateY(".concat(-itemHeight, "px)");
            } else if (i < fromIndex && i >= toIndex) {
              value = "translateY(".concat(itemHeight, "px)");
            }

            style['transform'] = value;
          }
        }
      }, {
        key: "autoscroll",
        value: function autoscroll(posY) {
          if (!this.scrollEl) {
            return 0;
          }

          var amount = 0;

          if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
          } else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
          }

          if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
          }

          return this.scrollEl.scrollTop - this.scrollElInitial;
        }
      }, {
        key: "render",
        value: function render() {
          var _class;

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'reorder-enabled', !this.disabled), _defineProperty(_class, 'reorder-list-active', this.state !== 0), _class)
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

      return ReorderGroup;
    }();

    var indexForItem = function indexForItem(element) {
      return element['$ionIndex'];
    };

    var findReorderItem = function findReorderItem(node, container) {
      var parent;

      while (node) {
        parent = node.parentElement;

        if (parent === container) {
          return node;
        }

        node = parent;
      }

      return undefined;
    };

    var AUTO_SCROLL_MARGIN = 60;
    var SCROLL_JUMP = 10;
    var ITEM_REORDER_SELECTED = 'reorder-selected';

    var reorderArray = function reorderArray(array, from, to) {
      var element = array[from];
      array.splice(from, 1);
      array.splice(to, 0, element);
      return array.slice();
    };

    ReorderGroup.style = reorderGroupCss;
    /***/
  }
}]);
//# sourceMappingURL=27-es5.js.map