function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js ***!
    \***********************************************************************/

  /*! exports provided: ion_virtual_scroll */

  /***/
  function node_modulesIonicCoreDistEsmIonVirtualScrollEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_virtual_scroll", function () {
      return VirtualScroll;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

    var CELL_TYPE_ITEM = 'item';
    var CELL_TYPE_HEADER = 'header';
    var CELL_TYPE_FOOTER = 'footer';
    var NODE_CHANGE_NONE = 0;
    var NODE_CHANGE_POSITION = 1;
    var NODE_CHANGE_CELL = 2;
    var MIN_READS = 2;

    var updateVDom = function updateVDom(dom, heightIndex, cells, range) {
      // reset dom
      var _iterator = _createForOfIteratorHelper(dom),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          node.change = NODE_CHANGE_NONE;
          node.d = true;
        } // try to match into exisiting dom

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var toMutate = [];
      var end = range.offset + range.length;

      var _loop = function _loop() {
        var cell = cells[i];
        var node = dom.find(function (n) {
          return n.d && n.cell === cell;
        });

        if (node) {
          var top = heightIndex[i];

          if (top !== node.top) {
            node.top = top;
            node.change = NODE_CHANGE_POSITION;
          }

          node.d = false;
        } else {
          toMutate.push(cell);
        }
      };

      for (var i = range.offset; i < end; i++) {
        _loop();
      } // needs to append


      var pool = dom.filter(function (n) {
        return n.d;
      });

      var _loop2 = function _loop2() {
        var cell = _toMutate[_i];
        var node = pool.find(function (n) {
          return n.d && n.cell.type === cell.type;
        });
        var index = cell.i;

        if (node) {
          node.d = false;
          node.change = NODE_CHANGE_CELL;
          node.cell = cell;
          node.top = heightIndex[index];
        } else {
          dom.push({
            d: false,
            cell: cell,
            visible: true,
            change: NODE_CHANGE_CELL,
            top: heightIndex[index]
          });
        }
      };

      for (var _i = 0, _toMutate = toMutate; _i < _toMutate.length; _i++) {
        _loop2();
      }

      dom.filter(function (n) {
        return n.d && n.top !== -9999;
      }).forEach(function (n) {
        n.change = NODE_CHANGE_POSITION;
        n.top = -9999;
      });
    };

    var doRender = function doRender(el, nodeRender, dom, updateCellHeight) {
      var children = Array.from(el.children).filter(function (n) {
        return n.tagName !== 'TEMPLATE';
      });
      var childrenNu = children.length;
      var child;

      for (var i = 0; i < dom.length; i++) {
        var node = dom[i];
        var cell = node.cell; // the cell change, the content must be updated

        if (node.change === NODE_CHANGE_CELL) {
          if (i < childrenNu) {
            child = children[i];
            nodeRender(child, cell, i);
          } else {
            var newChild = createNode(el, cell.type);
            child = nodeRender(newChild, cell, i) || newChild;
            child.classList.add('virtual-item');
            el.appendChild(child);
          }

          child['$ionCell'] = cell;
        } else {
          child = children[i];
        } // only update position when it changes


        if (node.change !== NODE_CHANGE_NONE) {
          child.style.transform = "translate3d(0,".concat(node.top, "px,0)");
        } // update visibility


        var visible = cell.visible;

        if (node.visible !== visible) {
          if (visible) {
            child.classList.remove('virtual-loading');
          } else {
            child.classList.add('virtual-loading');
          }

          node.visible = visible;
        } // dynamic height


        if (cell.reads > 0) {
          updateCellHeight(cell, child);
          cell.reads--;
        }
      }
    };

    var createNode = function createNode(el, type) {
      var template = getTemplate(el, type);

      if (template && el.ownerDocument) {
        return el.ownerDocument.importNode(template.content, true).children[0];
      }

      return null;
    };

    var getTemplate = function getTemplate(el, type) {
      switch (type) {
        case CELL_TYPE_ITEM:
          return el.querySelector('template:not([name])');

        case CELL_TYPE_HEADER:
          return el.querySelector('template[name=header]');

        case CELL_TYPE_FOOTER:
          return el.querySelector('template[name=footer]');
      }
    };

    var getViewport = function getViewport(scrollTop, vierportHeight, margin) {
      return {
        top: Math.max(scrollTop - margin, 0),
        bottom: scrollTop + vierportHeight + margin
      };
    };

    var getRange = function getRange(heightIndex, viewport, buffer) {
      var topPos = viewport.top;
      var bottomPos = viewport.bottom; // find top index

      var i = 0;

      for (; i < heightIndex.length; i++) {
        if (heightIndex[i] > topPos) {
          break;
        }
      }

      var offset = Math.max(i - buffer - 1, 0); // find bottom index

      for (; i < heightIndex.length; i++) {
        if (heightIndex[i] >= bottomPos) {
          break;
        }
      }

      var end = Math.min(i + buffer, heightIndex.length);
      var length = end - offset;
      return {
        offset: offset,
        length: length
      };
    };

    var getShouldUpdate = function getShouldUpdate(dirtyIndex, currentRange, range) {
      var end = range.offset + range.length;
      return dirtyIndex <= end || currentRange.offset !== range.offset || currentRange.length !== range.length;
    };

    var findCellIndex = function findCellIndex(cells, index) {
      var max = cells.length > 0 ? cells[cells.length - 1].index : 0;

      if (index === 0) {
        return 0;
      } else if (index === max + 1) {
        return cells.length;
      } else {
        return cells.findIndex(function (c) {
          return c.index === index;
        });
      }
    };

    var inplaceUpdate = function inplaceUpdate(dst, src, offset) {
      if (offset === 0 && src.length >= dst.length) {
        return src;
      }

      for (var i = 0; i < src.length; i++) {
        dst[i + offset] = src[i];
      }

      return dst;
    };

    var _calcCells = function calcCells(items, itemHeight, headerHeight, footerHeight, headerFn, footerFn, approxHeaderHeight, approxFooterHeight, approxItemHeight, j, offset, len) {
      var cells = [];
      var end = len + offset;

      for (var i = offset; i < end; i++) {
        var item = items[i];

        if (headerFn) {
          var value = headerFn(item, i, items);

          if (value != null) {
            cells.push({
              i: j++,
              type: CELL_TYPE_HEADER,
              value: value,
              index: i,
              height: headerHeight ? headerHeight(value, i) : approxHeaderHeight,
              reads: headerHeight ? 0 : MIN_READS,
              visible: !!headerHeight
            });
          }
        }

        cells.push({
          i: j++,
          type: CELL_TYPE_ITEM,
          value: item,
          index: i,
          height: itemHeight ? itemHeight(item, i) : approxItemHeight,
          reads: itemHeight ? 0 : MIN_READS,
          visible: !!itemHeight
        });

        if (footerFn) {
          var _value = footerFn(item, i, items);

          if (_value != null) {
            cells.push({
              i: j++,
              type: CELL_TYPE_FOOTER,
              value: _value,
              index: i,
              height: footerHeight ? footerHeight(_value, i) : approxFooterHeight,
              reads: footerHeight ? 0 : MIN_READS,
              visible: !!footerHeight
            });
          }
        }
      }

      return cells;
    };

    var _calcHeightIndex = function calcHeightIndex(buf, cells, index) {
      var acum = buf[index];

      for (var i = index; i < buf.length; i++) {
        buf[i] = acum;
        acum += cells[i].height;
      }

      return acum;
    };

    var resizeBuffer = function resizeBuffer(buf, len) {
      if (!buf) {
        return new Uint32Array(len);
      }

      if (buf.length === len) {
        return buf;
      } else if (len > buf.length) {
        var newBuf = new Uint32Array(len);
        newBuf.set(buf);
        return newBuf;
      } else {
        return buf.subarray(0, len);
      }
    };

    var positionForIndex = function positionForIndex(index, cells, heightIndex) {
      var cell = cells.find(function (c) {
        return c.type === CELL_TYPE_ITEM && c.index === index;
      });

      if (cell) {
        return heightIndex[cell.i];
      }

      return -1;
    };

    var virtualScrollCss = "ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";

    var VirtualScroll = /*#__PURE__*/function () {
      function VirtualScroll(hostRef) {
        var _this = this;

        _classCallCheck(this, VirtualScroll);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.range = {
          offset: 0,
          length: 0
        };
        this.viewportHeight = 0;
        this.cells = [];
        this.virtualDom = [];
        this.isEnabled = false;
        this.viewportOffset = 0;
        this.currentScrollTop = 0;
        this.indexDirty = 0;
        this.lastItemLen = 0;
        this.totalHeight = 0;
        /**
         * It is important to provide this
         * if virtual item height will be significantly larger than the default
         * The approximate height of each virtual item template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxItemHeight = 45;
        /**
         * The approximate height of each header template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxHeaderHeight = 30;
        /**
         * The approximate width of each footer template's cell.
         * This dimension is used to help determine how many cells should
         * be created when initialized, and to help calculate the height of
         * the scrollable area. This height value can only use `px` units.
         * Note that the actual rendered size of each cell comes from the
         * app's CSS, whereas this approximation is used to help calculate
         * initial dimensions before the item has been rendered.
         */

        this.approxFooterHeight = 30;

        this.onScroll = function () {
          _this.updateVirtualScroll();
        };
      }

      _createClass(VirtualScroll, [{
        key: "itemsChanged",
        value: function itemsChanged() {
          this.calcCells();
          this.updateVirtualScroll();
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.");
        }
      }, {
        key: "connectedCallback",
        value: function () {
          var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var contentEl;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  contentEl = this.el.closest('ion-content');

                  if (contentEl) {
                    _context.next = 4;
                    break;
                  }

                  console.error('<ion-virtual-scroll> must be used inside an <ion-content>');
                  return _context.abrupt("return");

                case 4:
                  _context.next = 6;
                  return contentEl.getScrollElement();

                case 6:
                  this.scrollEl = _context.sent;
                  this.contentEl = contentEl;
                  this.calcCells();
                  this.updateState();

                case 10:
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
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.updateState();
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.scrollEl = undefined;
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.calcCells();
          this.updateVirtualScroll();
        }
        /**
         * Returns the position of the virtual item at the given index.
         */

      }, {
        key: "positionForItem",
        value: function positionForItem(index) {
          return Promise.resolve(positionForIndex(index, this.cells, this.getHeightIndex()));
        }
        /**
         * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as
         * dirty any time the content or their style changes.
         *
         * The subset of items to be updated can are specifing by an offset and a length.
         */

      }, {
        key: "checkRange",
        value: function () {
          var _checkRange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(offset) {
            var len,
                length,
                cellIndex,
                cells,
                _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  len = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : -1;

                  if (this.items) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  length = len === -1 ? this.items.length - offset : len;
                  cellIndex = findCellIndex(this.cells, offset);
                  cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, cellIndex, offset, length);
                  this.cells = inplaceUpdate(this.cells, cells, cellIndex);
                  this.lastItemLen = this.items.length;
                  this.indexDirty = Math.max(offset - 1, 0);
                  this.scheduleUpdate();

                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));

          function checkRange(_x) {
            return _checkRange.apply(this, arguments);
          }

          return checkRange;
        }()
        /**
         * This method marks the tail the items array as dirty, so they can be re-rendered.
         *
         * It's equivalent to calling:
         *
         * ```js
         * virtualScroll.checkRange(lastItemLen);
         * ```
         */

      }, {
        key: "checkEnd",
        value: function () {
          var _checkEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.items) {
                    this.checkRange(this.lastItemLen);
                  }

                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function checkEnd() {
            return _checkEnd.apply(this, arguments);
          }

          return checkEnd;
        }()
      }, {
        key: "updateVirtualScroll",
        value: function updateVirtualScroll() {
          // do nothing if virtual-scroll is disabled
          if (!this.isEnabled || !this.scrollEl) {
            return;
          } // unschedule future updates


          if (this.timerUpdate) {
            clearTimeout(this.timerUpdate);
            this.timerUpdate = undefined;
          } // schedule DOM operations into the stencil queue


          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.readVS.bind(this));
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this.writeVS.bind(this));
        }
      }, {
        key: "readVS",
        value: function readVS() {
          var contentEl = this.contentEl,
              scrollEl = this.scrollEl,
              el = this.el;
          var topOffset = 0;
          var node = el;

          while (node && node !== contentEl) {
            topOffset += node.offsetTop;
            node = node.offsetParent;
          }

          this.viewportOffset = topOffset;

          if (scrollEl) {
            this.viewportHeight = scrollEl.offsetHeight;
            this.currentScrollTop = scrollEl.scrollTop;
          }
        }
      }, {
        key: "writeVS",
        value: function writeVS() {
          var dirtyIndex = this.indexDirty; // get visible viewport

          var scrollTop = this.currentScrollTop - this.viewportOffset;
          var viewport = getViewport(scrollTop, this.viewportHeight, 100); // compute lazily the height index

          var heightIndex = this.getHeightIndex(); // get array bounds of visible cells base in the viewport

          var range = getRange(heightIndex, viewport, 2); // fast path, do nothing

          var shouldUpdate = getShouldUpdate(dirtyIndex, this.range, range);

          if (!shouldUpdate) {
            return;
          }

          this.range = range; // in place mutation of the virtual DOM

          updateVDom(this.virtualDom, heightIndex, this.cells, range); // Write DOM
          // Different code paths taken depending of the render API used

          if (this.nodeRender) {
            doRender(this.el, this.nodeRender, this.virtualDom, this.updateCellHeight.bind(this));
          } else if (this.domRender) {
            this.domRender(this.virtualDom);
          } else if (this.renderItem) {
            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["j"])(this);
          }
        }
      }, {
        key: "updateCellHeight",
        value: function updateCellHeight(cell, node) {
          var _this2 = this;

          var update = function update() {
            if (node['$ionCell'] === cell) {
              var style = window.getComputedStyle(node);
              var height = node.offsetHeight + parseFloat(style.getPropertyValue('margin-bottom'));

              _this2.setCellHeight(cell, height);
            }
          };

          if (node) {
            Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(node, update);
          } else {
            update();
          }
        }
      }, {
        key: "setCellHeight",
        value: function setCellHeight(cell, height) {
          var index = cell.i; // the cell might changed since the height update was scheduled

          if (cell !== this.cells[index]) {
            return;
          }

          if (cell.height !== height || cell.visible !== true) {
            cell.visible = true;
            cell.height = height;
            this.indexDirty = Math.min(this.indexDirty, index);
            this.scheduleUpdate();
          }
        }
      }, {
        key: "scheduleUpdate",
        value: function scheduleUpdate() {
          var _this3 = this;

          clearTimeout(this.timerUpdate);
          this.timerUpdate = setTimeout(function () {
            return _this3.updateVirtualScroll();
          }, 100);
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var shouldEnable = !!(this.scrollEl && this.cells);

          if (shouldEnable !== this.isEnabled) {
            this.enableScrollEvents(shouldEnable);

            if (shouldEnable) {
              this.updateVirtualScroll();
            }
          }
        }
      }, {
        key: "calcCells",
        value: function calcCells() {
          if (!this.items) {
            return;
          }

          this.lastItemLen = this.items.length;
          this.cells = _calcCells(this.items, this.itemHeight, this.headerHeight, this.footerHeight, this.headerFn, this.footerFn, this.approxHeaderHeight, this.approxFooterHeight, this.approxItemHeight, 0, 0, this.lastItemLen);
          this.indexDirty = 0;
        }
      }, {
        key: "getHeightIndex",
        value: function getHeightIndex() {
          if (this.indexDirty !== Infinity) {
            this.calcHeightIndex(this.indexDirty);
          }

          return this.heightIndex;
        }
      }, {
        key: "calcHeightIndex",
        value: function calcHeightIndex() {
          var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          // TODO: optimize, we don't need to calculate all the cells
          this.heightIndex = resizeBuffer(this.heightIndex, this.cells.length);
          this.totalHeight = _calcHeightIndex(this.heightIndex, this.cells, index);
          this.indexDirty = Infinity;
        }
      }, {
        key: "enableScrollEvents",
        value: function enableScrollEvents(shouldListen) {
          var _this4 = this;

          if (this.rmEvent) {
            this.rmEvent();
            this.rmEvent = undefined;
          }

          var scrollEl = this.scrollEl;

          if (scrollEl) {
            this.isEnabled = shouldListen;
            scrollEl.addEventListener('scroll', this.onScroll);

            this.rmEvent = function () {
              scrollEl.removeEventListener('scroll', _this4.onScroll);
            };
          }
        }
      }, {
        key: "renderVirtualNode",
        value: function renderVirtualNode(node) {
          var _node$cell = node.cell,
              type = _node$cell.type,
              value = _node$cell.value,
              index = _node$cell.index;

          switch (type) {
            case CELL_TYPE_ITEM:
              return this.renderItem(value, index);

            case CELL_TYPE_HEADER:
              return this.renderHeader(value, index);

            case CELL_TYPE_FOOTER:
              return this.renderFooter(value, index);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;

          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            style: {
              height: "".concat(this.totalHeight, "px")
            }
          }, this.renderItem && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(VirtualProxy, {
            dom: this.virtualDom
          }, this.virtualDom.map(function (node) {
            return _this5.renderVirtualNode(node);
          })));
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
            "itemHeight": ["itemsChanged"],
            "headerHeight": ["itemsChanged"],
            "footerHeight": ["itemsChanged"],
            "items": ["itemsChanged"]
          };
        }
      }]);

      return VirtualScroll;
    }();

    var VirtualProxy = function VirtualProxy(_ref, children, utils) {
      var dom = _ref.dom;
      return utils.map(children, function (child, i) {
        var node = dom[i];
        var vattrs = child.vattrs || {};
        var classes = vattrs["class"] || '';
        classes += 'virtual-item ';

        if (!node.visible) {
          classes += 'virtual-loading';
        }

        return Object.assign(Object.assign({}, child), {
          vattrs: Object.assign(Object.assign({}, vattrs), {
            "class": classes,
            style: Object.assign(Object.assign({}, vattrs.style), {
              transform: "translate3d(0,".concat(node.top, "px,0)")
            })
          })
        });
      });
    };

    VirtualScroll.style = virtualScrollCss;
    /***/
  }
}]);
//# sourceMappingURL=42-es5.js.map