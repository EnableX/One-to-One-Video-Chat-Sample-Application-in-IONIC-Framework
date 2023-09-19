function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
    \****************************************************************/

  /*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */

  /***/
  function node_modulesIonicCoreDistEsmIonRoute_4EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_route", function () {
      return Route;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function () {
      return RouteRedirect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_router", function () {
      return Router;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_router_link", function () {
      return RouterLink;
    });
    /* harmony import */


    var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a8b7a1c.js */
    "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
    /* harmony import */


    var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./helpers-1457892a.js */
    "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");
    /* harmony import */


    var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ionic-global-63a97a32.js */
    "./node_modules/@ionic/core/dist/esm/ionic-global-63a97a32.js");
    /* harmony import */


    var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-ff3fc52f.js */
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js");

    var Route = /*#__PURE__*/function () {
      function Route(hostRef) {
        _classCallCheck(this, Route);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRouteDataChanged = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteDataChanged", 7);
        /**
         * Relative path that needs to match in order for this route to apply.
         *
         * Accepts paths similar to expressjs so that you can define parameters
         * in the url /foo/:bar where bar would be available in incoming props.
         */

        this.url = '';
      }

      _createClass(Route, [{
        key: "onUpdate",
        value: function onUpdate(newValue) {
          this.ionRouteDataChanged.emit(newValue);
        }
      }, {
        key: "onComponentProps",
        value: function onComponentProps(newValue, oldValue) {
          if (newValue === oldValue) {
            return;
          }

          var keys1 = newValue ? Object.keys(newValue) : [];
          var keys2 = oldValue ? Object.keys(oldValue) : [];

          if (keys1.length !== keys2.length) {
            this.onUpdate(newValue);
            return;
          }

          var _iterator = _createForOfIteratorHelper(keys1),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;

              if (newValue[key] !== oldValue[key]) {
                this.onUpdate(newValue);
                return;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.ionRouteDataChanged.emit();
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "url": ["onUpdate"],
            "component": ["onUpdate"],
            "componentProps": ["onComponentProps"]
          };
        }
      }]);

      return Route;
    }();

    var RouteRedirect = /*#__PURE__*/function () {
      function RouteRedirect(hostRef) {
        _classCallCheck(this, RouteRedirect);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRouteRedirectChanged = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteRedirectChanged", 7);
      }

      _createClass(RouteRedirect, [{
        key: "propDidChange",
        value: function propDidChange() {
          this.ionRouteRedirectChanged.emit();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.ionRouteRedirectChanged.emit();
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "from": ["propDidChange"],
            "to": ["propDidChange"]
          };
        }
      }]);

      return RouteRedirect;
    }();

    var ROUTER_INTENT_NONE = 'root';
    var ROUTER_INTENT_FORWARD = 'forward';
    var ROUTER_INTENT_BACK = 'back'; // Join the non empty segments with "/".

    var generatePath = function generatePath(segments) {
      var path = segments.filter(function (s) {
        return s.length > 0;
      }).join('/');
      return '/' + path;
    };

    var generateUrl = function generateUrl(segments, useHash, queryString) {
      var url = generatePath(segments);

      if (useHash) {
        url = '#' + url;
      }

      if (queryString !== undefined) {
        url += '?' + queryString;
      }

      return url;
    };

    var writePath = function writePath(history, root, useHash, path, direction, state, queryString) {
      var url = generateUrl([].concat(_toConsumableArray(parsePath(root).segments), _toConsumableArray(path)), useHash, queryString);

      if (direction === ROUTER_INTENT_FORWARD) {
        history.pushState(state, '', url);
      } else {
        history.replaceState(state, '', url);
      }
    };

    var chainToPath = function chainToPath(chain) {
      var path = [];

      var _iterator2 = _createForOfIteratorHelper(chain),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var route = _step2.value;

          var _iterator3 = _createForOfIteratorHelper(route.path),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var segment = _step3.value;

              if (segment[0] === ':') {
                var param = route.params && route.params[segment.slice(1)];

                if (!param) {
                  return null;
                }

                path.push(param);
              } else if (segment !== '') {
                path.push(segment);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return path;
    }; // Remove the prefix segments from the path segments.
    //
    // Return:
    // - null when the path segments do not start with the passed prefix,
    // - the path segments after the prefix otherwise.


    var removePrefix = function removePrefix(prefix, path) {
      if (prefix.length > path.length) {
        return null;
      }

      if (prefix.length <= 1 && prefix[0] === '') {
        return path;
      }

      for (var i = 0; i < prefix.length; i++) {
        if (prefix[i] !== path[i]) {
          return null;
        }
      }

      if (path.length === prefix.length) {
        return [''];
      }

      return path.slice(prefix.length);
    };

    var readPath = function readPath(loc, root, useHash) {
      var prefix = parsePath(root).segments;
      var pathname = useHash ? loc.hash.slice(1) : loc.pathname;
      var path = parsePath(pathname).segments;
      return removePrefix(prefix, path);
    }; // Parses the path to:
    // - segments an array of '/' separated parts,
    // - queryString (undefined when no query string).


    var parsePath = function parsePath(path) {
      var segments = [''];
      var queryString;

      if (path != null) {
        var qsStart = path.indexOf('?');

        if (qsStart > -1) {
          queryString = path.substr(qsStart + 1);
          path = path.substr(0, qsStart);
        }

        segments = path.split('/').map(function (s) {
          return s.trim();
        }).filter(function (s) {
          return s.length > 0;
        });

        if (segments.length === 0) {
          segments = [''];
        }
      }

      return {
        segments: segments,
        queryString: queryString
      };
    };

    var printRoutes = function printRoutes(routes) {
      console.group("[ion-core] ROUTES[".concat(routes.length, "]"));

      var _iterator4 = _createForOfIteratorHelper(routes),
          _step4;

      try {
        var _loop = function _loop() {
          var chain = _step4.value;
          var path = [];
          chain.forEach(function (r) {
            return path.push.apply(path, _toConsumableArray(r.path));
          });
          var ids = chain.map(function (r) {
            return r.id;
          });
          console.debug("%c ".concat(generatePath(path)), 'font-weight: bold; padding-left: 20px', '=>\t', "(".concat(ids.join(', '), ")"));
        };

        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      console.groupEnd();
    };

    var printRedirects = function printRedirects(redirects) {
      console.group("[ion-core] REDIRECTS[".concat(redirects.length, "]"));

      var _iterator5 = _createForOfIteratorHelper(redirects),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var redirect = _step5.value;

          if (redirect.to) {
            console.debug('FROM: ', "$c ".concat(generatePath(redirect.from)), 'font-weight: bold', ' TO: ', "$c ".concat(generatePath(redirect.to.segments)), 'font-weight: bold');
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      console.groupEnd();
    };

    var _writeNavState = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(root, chain, direction, index) {
        var changed,
            animation,
            outlet,
            route,
            result,
            _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              changed = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
              animation = _args.length > 5 ? _args[5] : undefined;
              _context.prev = 2;
              // find next navigation outlet in the DOM
              outlet = searchNavNode(root); // make sure we can continue interacting the DOM, otherwise abort

              if (!(index >= chain.length || !outlet)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", changed);

            case 6:
              _context.next = 8;
              return new Promise(function (resolve) {
                return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(outlet, resolve);
              });

            case 8:
              route = chain[index];
              _context.next = 11;
              return outlet.setRouteId(route.id, route.params, direction, animation);

            case 11:
              result = _context.sent;

              // if the outlet changed the page, reset navigation to neutral (no direction)
              // this means nested outlets will not animate
              if (result.changed) {
                direction = ROUTER_INTENT_NONE;
                changed = true;
              } // recursively set nested outlets


              _context.next = 15;
              return _writeNavState(result.element, chain, direction, index + 1, changed, animation);

            case 15:
              changed = _context.sent;

              if (!result.markVisible) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return result.markVisible();

            case 19:
              return _context.abrupt("return", changed);

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);
              return _context.abrupt("return", false);

            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 22]]);
      }));

      return function writeNavState(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }();

    var readNavState = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(root) {
        var ids, outlet, node, id;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              ids = [];
              node = root; // tslint:disable-next-line:no-constant-condition

            case 2:
              if (!true) {
                _context2.next = 20;
                break;
              }

              outlet = searchNavNode(node);

              if (!outlet) {
                _context2.next = 17;
                break;
              }

              _context2.next = 7;
              return outlet.getRouteId();

            case 7:
              id = _context2.sent;

              if (!id) {
                _context2.next = 14;
                break;
              }

              node = id.element;
              id.element = undefined;
              ids.push(id);
              _context2.next = 15;
              break;

            case 14:
              return _context2.abrupt("break", 20);

            case 15:
              _context2.next = 18;
              break;

            case 17:
              return _context2.abrupt("break", 20);

            case 18:
              _context2.next = 2;
              break;

            case 20:
              return _context2.abrupt("return", {
                ids: ids,
                outlet: outlet
              });

            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));

      return function readNavState(_x5) {
        return _ref2.apply(this, arguments);
      };
    }();

    var waitUntilNavNode = function waitUntilNavNode() {
      if (searchNavNode(document.body)) {
        return Promise.resolve();
      }

      return new Promise(function (resolve) {
        window.addEventListener('ionNavWillLoad', resolve, {
          once: true
        });
      });
    };

    var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';

    var searchNavNode = function searchNavNode(root) {
      if (!root) {
        return undefined;
      }

      if (root.matches(QUERY)) {
        return root;
      }

      var outlet = root.querySelector(QUERY);
      return outlet !== null && outlet !== void 0 ? outlet : undefined;
    }; // Returns whether the given redirect matches the given path segments.
    //
    // A redirect matches when the segments of the path and redirect.from are equal.
    // Note that segments are only checked until redirect.from contains a '*' which matches any path segment.
    // The path ['some', 'path', 'to', 'page'] matches both ['some', 'path', 'to', 'page'] and ['some', 'path', '*'].


    var matchesRedirect = function matchesRedirect(path, redirect) {
      var from = redirect.from,
          to = redirect.to;

      if (to === undefined) {
        return false;
      }

      if (from.length > path.length) {
        return false;
      }

      for (var i = 0; i < from.length; i++) {
        var expected = from[i];

        if (expected === '*') {
          return true;
        }

        if (expected !== path[i]) {
          return false;
        }
      }

      return from.length === path.length;
    }; // Returns the first redirect matching the path segments or undefined when no match found.


    var findRouteRedirect = function findRouteRedirect(path, redirects) {
      return redirects.find(function (redirect) {
        return matchesRedirect(path, redirect);
      });
    };

    var matchesIDs = function matchesIDs(ids, chain) {
      var len = Math.min(ids.length, chain.length);
      var score = 0;

      for (var i = 0; i < len; i++) {
        var routeId = ids[i];
        var routeChain = chain[i]; // Skip results where the route id does not match the chain at the same index

        if (routeId.id.toLowerCase() !== routeChain.id) {
          break;
        }

        if (routeId.params) {
          var routeIdParams = Object.keys(routeId.params);
          /**
           * Only compare routes with the chain that have the same number of parameters.
           */

          if (routeIdParams.length === routeChain.path.length) {
            /**
             * Maps the route's params into a path based on the path variable names,
             * to compare against the route chain format.
             *
             * Before:
             * ```ts
             * {
             *  params: {
             *    s1: 'a',
             *    s2: 'b'
             *  }
             * }
             * ```
             *
             * After:
             * ```ts
             * [':s1',':s2']
             * ```
             */
            var pathWithParams = routeIdParams.map(function (key) {
              return ":".concat(key);
            });

            for (var j = 0; j < pathWithParams.length; j++) {
              // Skip results where the path variable is not a match
              if (pathWithParams[j].toLowerCase() !== routeChain.path[j]) {
                break;
              } // Weight path matches for the same index higher.


              score++;
            }
          }
        } // Weight id matches


        score++;
      }

      return score;
    };

    var matchesPath = function matchesPath(inputPath, chain) {
      var segments = new RouterSegments(inputPath);
      var matchesDefault = false;
      var allparams;

      for (var i = 0; i < chain.length; i++) {
        var path = chain[i].path;

        if (path[0] === '') {
          matchesDefault = true;
        } else {
          var _iterator6 = _createForOfIteratorHelper(path),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var segment = _step6.value;
              var data = segments.next(); // data param

              if (segment[0] === ':') {
                if (data === '') {
                  return null;
                }

                allparams = allparams || [];
                var params = allparams[i] || (allparams[i] = {});
                params[segment.slice(1)] = data;
              } else if (data !== segment) {
                return null;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          matchesDefault = false;
        }
      }

      var matches = matchesDefault ? matchesDefault === (segments.next() === '') : true;

      if (!matches) {
        return null;
      }

      if (allparams) {
        return chain.map(function (route, i) {
          return {
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, allparams[i]),
            beforeEnter: route.beforeEnter,
            beforeLeave: route.beforeLeave
          };
        });
      }

      return chain;
    }; // Merges the route parameter objects.
    // Returns undefined when both parameters are undefined.


    var mergeParams = function mergeParams(a, b) {
      return a || b ? Object.assign(Object.assign({}, a), b) : undefined;
    };

    var routerIDsToChain = function routerIDsToChain(ids, chains) {
      var match = null;
      var maxMatches = 0;

      var _iterator7 = _createForOfIteratorHelper(chains),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var chain = _step7.value;
          var score = matchesIDs(ids, chain);

          if (score > maxMatches) {
            match = chain;
            maxMatches = score;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      if (match) {
        return match.map(function (route, i) {
          return {
            id: route.id,
            path: route.path,
            params: mergeParams(route.params, ids[i] && ids[i].params)
          };
        });
      }

      return null;
    };

    var routerPathToChain = function routerPathToChain(path, chains) {
      var match = null;
      var matches = 0;

      var _iterator8 = _createForOfIteratorHelper(chains),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var chain = _step8.value;
          var matchedChain = matchesPath(path, chain);

          if (matchedChain !== null) {
            var score = computePriority(matchedChain);

            if (score > matches) {
              matches = score;
              match = matchedChain;
            }
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return match;
    };

    var computePriority = function computePriority(chain) {
      var score = 1;
      var level = 1;

      var _iterator9 = _createForOfIteratorHelper(chain),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var route = _step9.value;

          var _iterator10 = _createForOfIteratorHelper(route.path),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var path = _step10.value;

              if (path[0] === ':') {
                score += Math.pow(1, level);
              } else if (path !== '') {
                score += Math.pow(2, level);
              }

              level++;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return score;
    };

    var RouterSegments = /*#__PURE__*/function () {
      function RouterSegments(path) {
        _classCallCheck(this, RouterSegments);

        this.path = path.slice();
      }

      _createClass(RouterSegments, [{
        key: "next",
        value: function next() {
          if (this.path.length > 0) {
            return this.path.shift();
          }

          return '';
        }
      }]);

      return RouterSegments;
    }();

    var readProp = function readProp(el, prop) {
      if (prop in el) {
        return el[prop];
      }

      if (el.hasAttribute(prop)) {
        return el.getAttribute(prop);
      }

      return null;
    };

    var readRedirects = function readRedirects(root) {
      return Array.from(root.children).filter(function (el) {
        return el.tagName === 'ION-ROUTE-REDIRECT';
      }).map(function (el) {
        var to = readProp(el, 'to');
        return {
          from: parsePath(readProp(el, 'from')).segments,
          to: to == null ? undefined : parsePath(to)
        };
      });
    };

    var readRoutes = function readRoutes(root) {
      return flattenRouterTree(readRouteNodes(root));
    };

    var readRouteNodes = function readRouteNodes(node) {
      return Array.from(node.children).filter(function (el) {
        return el.tagName === 'ION-ROUTE' && el.component;
      }).map(function (el) {
        var component = readProp(el, 'component');
        return {
          path: parsePath(readProp(el, 'url')).segments,
          id: component.toLowerCase(),
          params: el.componentProps,
          beforeLeave: el.beforeLeave,
          beforeEnter: el.beforeEnter,
          children: readRouteNodes(el)
        };
      });
    };

    var flattenRouterTree = function flattenRouterTree(nodes) {
      var chains = [];

      var _iterator11 = _createForOfIteratorHelper(nodes),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var node = _step11.value;
          flattenNode([], chains, node);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return chains;
    };

    var flattenNode = function flattenNode(chain, chains, node) {
      chain = chain.slice();
      chain.push({
        id: node.id,
        path: node.path,
        params: node.params,
        beforeLeave: node.beforeLeave,
        beforeEnter: node.beforeEnter
      });

      if (node.children.length === 0) {
        chains.push(chain);
        return;
      }

      var _iterator12 = _createForOfIteratorHelper(node.children),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var child = _step12.value;
          flattenNode(chain, chains, child);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    };

    var Router = /*#__PURE__*/function () {
      function Router(hostRef) {
        _classCallCheck(this, Router);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.ionRouteWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteWillChange", 7);
        this.ionRouteDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "ionRouteDidChange", 7);
        this.previousPath = null;
        this.busy = false;
        this.state = 0;
        this.lastState = 0;
        /**
         * The root path to use when matching URLs. By default, this is set to "/", but you can specify
         * an alternate prefix for all URL paths.
         */

        this.root = '/';
        /**
         * The router can work in two "modes":
         * - With hash: `/index.html#/path/to/page`
         * - Without hash: `/path/to/page`
         *
         * Using one or another might depend in the requirements of your app and/or where it's deployed.
         *
         * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
         * requires additional server-side configuration in order to properly work.
         *
         * On the other side hash-navigation is much easier to deploy, it even works over the file protocol.
         *
         * By default, this property is `true`, change to `false` to allow hash-less URLs.
         */

        this.useHash = true;
      }

      _createClass(Router, [{
        key: "componentWillLoad",
        value: function () {
          var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var canProceed, redirect, path;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return waitUntilNavNode();

                case 2:
                  _context3.next = 4;
                  return this.runGuards(this.getPath());

                case 4:
                  canProceed = _context3.sent;

                  if (!(canProceed !== true)) {
                    _context3.next = 14;
                    break;
                  }

                  if (!(typeof canProceed === 'object')) {
                    _context3.next = 12;
                    break;
                  }

                  redirect = canProceed.redirect;
                  path = parsePath(redirect);
                  this.setPath(path.segments, ROUTER_INTENT_NONE, path.queryString);
                  _context3.next = 12;
                  return this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);

                case 12:
                  _context3.next = 16;
                  break;

                case 14:
                  _context3.next = 16;
                  return this.onRoutesChanged();

                case 16:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));

          function componentWillLoad() {
            return _componentWillLoad.apply(this, arguments);
          }

          return componentWillLoad;
        }()
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          window.addEventListener('ionRouteRedirectChanged', Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["o"])(this.onRedirectChanged.bind(this), 10));
          window.addEventListener('ionRouteDataChanged', Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_1__["o"])(this.onRoutesChanged.bind(this), 100));
        }
      }, {
        key: "onPopState",
        value: function () {
          var _onPopState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var direction, segments, canProceed;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  direction = this.historyDirection();
                  segments = this.getPath();
                  _context4.next = 4;
                  return this.runGuards(segments);

                case 4:
                  canProceed = _context4.sent;

                  if (!(canProceed !== true)) {
                    _context4.next = 11;
                    break;
                  }

                  if (!(typeof canProceed === 'object')) {
                    _context4.next = 10;
                    break;
                  }

                  segments = parsePath(canProceed.redirect).segments;
                  _context4.next = 11;
                  break;

                case 10:
                  return _context4.abrupt("return", false);

                case 11:
                  return _context4.abrupt("return", this.writeNavStateRoot(segments, direction));

                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));

          function onPopState() {
            return _onPopState.apply(this, arguments);
          }

          return onPopState;
        }()
      }, {
        key: "onBackButton",
        value: function onBackButton(ev) {
          var _this = this;

          ev.detail.register(0, function (processNextHandler) {
            _this.back();

            processNextHandler();
          });
        }
        /** @internal */

      }, {
        key: "canTransition",
        value: function () {
          var _canTransition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var canProceed;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.runGuards();

                case 2:
                  canProceed = _context5.sent;

                  if (!(canProceed !== true)) {
                    _context5.next = 9;
                    break;
                  }

                  if (!(typeof canProceed === 'object')) {
                    _context5.next = 8;
                    break;
                  }

                  return _context5.abrupt("return", canProceed.redirect);

                case 8:
                  return _context5.abrupt("return", false);

                case 9:
                  return _context5.abrupt("return", true);

                case 10:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));

          function canTransition() {
            return _canTransition.apply(this, arguments);
          }

          return canTransition;
        }()
        /**
         * Navigate to the specified URL.
         *
         * @param url The url to navigate to.
         * @param direction The direction of the animation. Defaults to `"forward"`.
         */

      }, {
        key: "push",
        value: function () {
          var _push = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(url) {
            var direction,
                animation,
                parsedPath,
                canProceed,
                _args6 = arguments;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  direction = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'forward';
                  animation = _args6.length > 2 ? _args6[2] : undefined;

                  if (url.startsWith('.')) {
                    url = new URL(url, window.location.href).pathname;
                  }

                  parsedPath = parsePath(url);
                  _context6.next = 6;
                  return this.runGuards(parsedPath.segments);

                case 6:
                  canProceed = _context6.sent;

                  if (!(canProceed !== true)) {
                    _context6.next = 13;
                    break;
                  }

                  if (!(typeof canProceed === 'object')) {
                    _context6.next = 12;
                    break;
                  }

                  parsedPath = parsePath(canProceed.redirect);
                  _context6.next = 13;
                  break;

                case 12:
                  return _context6.abrupt("return", false);

                case 13:
                  this.setPath(parsedPath.segments, direction, parsedPath.queryString);
                  return _context6.abrupt("return", this.writeNavStateRoot(parsedPath.segments, direction, animation));

                case 15:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));

          function push(_x6) {
            return _push.apply(this, arguments);
          }

          return push;
        }()
        /**
         * Go back to previous page in the window.history.
         */

      }, {
        key: "back",
        value: function back() {
          window.history.back();
          return Promise.resolve(this.waitPromise);
        }
        /** @internal */

      }, {
        key: "printDebug",
        value: function () {
          var _printDebug = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  printRoutes(readRoutes(this.el));
                  printRedirects(readRedirects(this.el));

                case 2:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));

          function printDebug() {
            return _printDebug.apply(this, arguments);
          }

          return printDebug;
        }()
        /** @internal */

      }, {
        key: "navChanged",
        value: function () {
          var _navChanged = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(direction) {
            var _yield$readNavState, ids, outlet, routes, chain, path;

            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  if (!this.busy) {
                    _context8.next = 3;
                    break;
                  }

                  console.warn('[ion-router] router is busy, navChanged was cancelled');
                  return _context8.abrupt("return", false);

                case 3:
                  _context8.next = 5;
                  return readNavState(window.document.body);

                case 5:
                  _yield$readNavState = _context8.sent;
                  ids = _yield$readNavState.ids;
                  outlet = _yield$readNavState.outlet;
                  routes = readRoutes(this.el);
                  chain = routerIDsToChain(ids, routes);

                  if (chain) {
                    _context8.next = 13;
                    break;
                  }

                  console.warn('[ion-router] no matching URL for ', ids.map(function (i) {
                    return i.id;
                  }));
                  return _context8.abrupt("return", false);

                case 13:
                  path = chainToPath(chain);

                  if (path) {
                    _context8.next = 17;
                    break;
                  }

                  console.warn('[ion-router] router could not match path because some required param is missing');
                  return _context8.abrupt("return", false);

                case 17:
                  this.setPath(path, direction);
                  _context8.next = 20;
                  return this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);

                case 20:
                  return _context8.abrupt("return", true);

                case 21:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));

          function navChanged(_x7) {
            return _navChanged.apply(this, arguments);
          }

          return navChanged;
        }() // This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes.

      }, {
        key: "onRedirectChanged",
        value: function onRedirectChanged() {
          var path = this.getPath();

          if (path && findRouteRedirect(path, readRedirects(this.el))) {
            this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
          }
        } // This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes.

      }, {
        key: "onRoutesChanged",
        value: function onRoutesChanged() {
          return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
        }
      }, {
        key: "historyDirection",
        value: function historyDirection() {
          var _a;

          var win = window;

          if (win.history.state === null) {
            this.state++;
            win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
          }

          var state = win.history.state;
          var lastState = this.lastState;
          this.lastState = state;

          if (state > lastState || state >= lastState && lastState > 0) {
            return ROUTER_INTENT_FORWARD;
          }

          if (state < lastState) {
            return ROUTER_INTENT_BACK;
          }

          return ROUTER_INTENT_NONE;
        }
      }, {
        key: "writeNavStateRoot",
        value: function () {
          var _writeNavStateRoot = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(path, direction, animation) {
            var redirects, redirect, redirectFrom, _redirect$to, segments, queryString, routes, chain;

            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (path) {
                    _context9.next = 3;
                    break;
                  }

                  console.error('[ion-router] URL is not part of the routing set');
                  return _context9.abrupt("return", false);

                case 3:
                  // lookup redirect rule
                  redirects = readRedirects(this.el);
                  redirect = findRouteRedirect(path, redirects);
                  redirectFrom = null;

                  if (redirect) {
                    _redirect$to = redirect.to, segments = _redirect$to.segments, queryString = _redirect$to.queryString;
                    this.setPath(segments, direction, queryString);
                    redirectFrom = redirect.from;
                    path = segments;
                  } // lookup route chain


                  routes = readRoutes(this.el);
                  chain = routerPathToChain(path, routes);

                  if (chain) {
                    _context9.next = 12;
                    break;
                  }

                  console.error('[ion-router] the path does not match any route');
                  return _context9.abrupt("return", false);

                case 12:
                  return _context9.abrupt("return", this.safeWriteNavState(document.body, chain, direction, path, redirectFrom, 0, animation));

                case 13:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));

          function writeNavStateRoot(_x8, _x9, _x10) {
            return _writeNavStateRoot.apply(this, arguments);
          }

          return writeNavStateRoot;
        }()
      }, {
        key: "safeWriteNavState",
        value: function () {
          var _safeWriteNavState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(node, chain, direction, path, redirectFrom) {
            var index,
                animation,
                unlock,
                changed,
                _args10 = arguments;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  index = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : 0;
                  animation = _args10.length > 6 ? _args10[6] : undefined;
                  _context10.next = 4;
                  return this.lock();

                case 4:
                  unlock = _context10.sent;
                  changed = false;
                  _context10.prev = 6;
                  _context10.next = 9;
                  return this.writeNavState(node, chain, direction, path, redirectFrom, index, animation);

                case 9:
                  changed = _context10.sent;
                  _context10.next = 15;
                  break;

                case 12:
                  _context10.prev = 12;
                  _context10.t0 = _context10["catch"](6);
                  console.error(_context10.t0);

                case 15:
                  unlock();
                  return _context10.abrupt("return", changed);

                case 17:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this, [[6, 12]]);
          }));

          function safeWriteNavState(_x11, _x12, _x13, _x14, _x15) {
            return _safeWriteNavState.apply(this, arguments);
          }

          return safeWriteNavState;
        }()
      }, {
        key: "lock",
        value: function () {
          var _lock = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var p, resolve;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  p = this.waitPromise;
                  this.waitPromise = new Promise(function (r) {
                    return resolve = r;
                  });

                  if (!(p !== undefined)) {
                    _context11.next = 5;
                    break;
                  }

                  _context11.next = 5;
                  return p;

                case 5:
                  return _context11.abrupt("return", resolve);

                case 6:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));

          function lock() {
            return _lock.apply(this, arguments);
          }

          return lock;
        }() // Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
        //
        // When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
        // Otherwise the beforeEnterHook hook of the target route is executed.

      }, {
        key: "runGuards",
        value: function () {
          var _runGuards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var to,
                from,
                routes,
                fromChain,
                beforeLeaveHook,
                canLeave,
                toChain,
                beforeEnterHook,
                _args12 = arguments;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  to = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : this.getPath();
                  from = _args12.length > 1 ? _args12[1] : undefined;

                  if (from === undefined) {
                    from = parsePath(this.previousPath).segments;
                  }

                  if (!(!to || !from)) {
                    _context12.next = 5;
                    break;
                  }

                  return _context12.abrupt("return", true);

                case 5:
                  routes = readRoutes(this.el);
                  fromChain = routerPathToChain(from, routes);
                  beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;

                  if (!beforeLeaveHook) {
                    _context12.next = 14;
                    break;
                  }

                  _context12.next = 11;
                  return beforeLeaveHook();

                case 11:
                  _context12.t0 = _context12.sent;
                  _context12.next = 15;
                  break;

                case 14:
                  _context12.t0 = true;

                case 15:
                  canLeave = _context12.t0;

                  if (!(canLeave === false || typeof canLeave === 'object')) {
                    _context12.next = 18;
                    break;
                  }

                  return _context12.abrupt("return", canLeave);

                case 18:
                  toChain = routerPathToChain(to, routes);
                  beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
                  return _context12.abrupt("return", beforeEnterHook ? beforeEnterHook() : true);

                case 21:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));

          function runGuards() {
            return _runGuards.apply(this, arguments);
          }

          return runGuards;
        }()
      }, {
        key: "writeNavState",
        value: function () {
          var _writeNavState2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(node, chain, direction, path, redirectFrom) {
            var index,
                animation,
                routeEvent,
                changed,
                _args13 = arguments;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  index = _args13.length > 5 && _args13[5] !== undefined ? _args13[5] : 0;
                  animation = _args13.length > 6 ? _args13[6] : undefined;

                  if (!this.busy) {
                    _context13.next = 5;
                    break;
                  }

                  console.warn('[ion-router] router is busy, transition was cancelled');
                  return _context13.abrupt("return", false);

                case 5:
                  this.busy = true; // generate route event and emit will change

                  routeEvent = this.routeChangeEvent(path, redirectFrom);

                  if (routeEvent) {
                    this.ionRouteWillChange.emit(routeEvent);
                  }

                  _context13.next = 10;
                  return _writeNavState(node, chain, direction, index, false, animation);

                case 10:
                  changed = _context13.sent;
                  this.busy = false; // emit did change

                  if (routeEvent) {
                    this.ionRouteDidChange.emit(routeEvent);
                  }

                  return _context13.abrupt("return", changed);

                case 14:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));

          function writeNavState(_x16, _x17, _x18, _x19, _x20) {
            return _writeNavState2.apply(this, arguments);
          }

          return writeNavState;
        }()
      }, {
        key: "setPath",
        value: function setPath(path, direction, queryString) {
          this.state++;
          writePath(window.history, this.root, this.useHash, path, direction, this.state, queryString);
        }
      }, {
        key: "getPath",
        value: function getPath() {
          return readPath(window.location, this.root, this.useHash);
        }
      }, {
        key: "routeChangeEvent",
        value: function routeChangeEvent(path, redirectFromPath) {
          var from = this.previousPath;
          var to = generatePath(path);
          this.previousPath = to;

          if (to === from) {
            return null;
          }

          var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
          return {
            from: from,
            redirectedFrom: redirectedFrom,
            to: to
          };
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this);
        }
      }]);

      return Router;
    }();

    var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

    var RouterLink = /*#__PURE__*/function () {
      function RouterLink(hostRef) {
        var _this2 = this;

        _classCallCheck(this, RouterLink);

        Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */

        this.routerDirection = 'forward';

        this.onClick = function (ev) {
          Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["o"])(_this2.href, ev, _this2.routerDirection, _this2.routerAnimation);
        };
      }

      _createClass(RouterLink, [{
        key: "render",
        value: function render() {
          var _Object;

          var mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
          var attrs = {
            href: this.href,
            rel: this.rel,
            target: this.target
          };
          return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (_Object = {}, _defineProperty(_Object, mode, true), _defineProperty(_Object, 'ion-activatable', true), _Object))
          }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
        }
      }]);

      return RouterLink;
    }();

    RouterLink.style = routerLinkCss;
    /***/
  }
}]);
//# sourceMappingURL=29-es5.js.map