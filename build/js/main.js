/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/marks/marks.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/marks/marks.js ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/advs/advs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/advs/advs.js ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/buy/buy.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/buy/buy.js ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/cart/cart.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/cart/cart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCounters: () => (/* binding */ initCounters)
/* harmony export */ });
function initCounters() {
  var counters = document.querySelectorAll('.label_counter');
  if (counters.length) {
    counters.forEach(function (counter) {
      var incBtn = counter.querySelector('.inc'),
        decBtn = counter.querySelector('.dec'),
        input = counter.querySelector('input');
      incBtn.addEventListener('click', function () {
        input.value = parseInt(input.value) + parseInt(input.step);
        decBtn.removeAttribute('disabled');
      });
      decBtn.addEventListener('click', function () {
        if (parseInt(input.value - 1) > 0) {
          input.value = parseInt(input.value) - parseInt(input.step);
        } else {
          input.value = 0;
          decBtn.setAttribute('disabled', "");
        }
      });
    });
    console.log('cart');
  }
}

/***/ }),

/***/ "./src/blocks/modules/company/company.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/company/company.js ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   setMap: () => (/* binding */ setMap)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function setMap() {
  var mapContainers = document.querySelectorAll(".map");
  if (mapContainers.length === 0) return;
  // const script = document.createElement("script");
  // script.src = "../local/templates/zaryadyehall/assets/libs/buildYaMaps/script.js";
  // document.body.append(script);
  try {
    ymaps.ready(function () {
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".map")),
        _step;
      try {
        var _loop = function _loop() {
          var mapContainer = _step.value;
          var id = mapContainer.getAttribute("id"),
            data = mapContainer.dataset,
            mapCoord = JSON.parse(data.coord),
            mapZoom = data.zoom,
            mapTitle = 'data.title',
            // mapCoord2 = JSON.parse(data.coord2),
            // mapTitle2 = data.title2,
            mapCenter = JSON.parse(data.center),
            map = new ymaps.Map(id, {
              center: mapCenter,
              zoom: mapZoom,
              controls: ["smallMapDefaultSet"]
            }),
            pin = new ymaps.Placemark(mapCoord, {
              hintContent: mapTitle
            }, {
              iconLayout: "default#image",
              iconImageHref: "../../img/placemark.png",
              iconImageSize: [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186],
              iconImageOffset: [-40, -54]
            });
          // if (mapCoord2) {
          // 	pin2 = new ymaps.Placemark(
          // 		mapCoord2,
          // 		{
          // 			hintContent: mapTitle2,
          // 		},
          // 		{
          // 			iconLayout: "default#image",
          // 			iconImageHref: "../img/placemark.png",
          // 		}
          // 	);
          // 	map.geoObjects.add(pin2);
          // }

          map.behaviors.disable(["scrollZoom"]);
          map.geoObjects.add(pin);
          setMapCenter();
          function setMapCenter() {
            map.setCenter(mapCenter);
            console.log(mapContainer.getBoundingClientRect().width);
            pin.options.set("iconImageSize", [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186]);
            pin.options.set("iconImageOffset", [-mapContainer.getBoundingClientRect().width * 0.14 / 2, -mapContainer.getBoundingClientRect().width * 0.186 / 2]);
            if (!mapContainer.closest(".contacts")) {
              var centerCoord = map.getGlobalPixelCenter();

              // смещаем центр карты

              if (window.innerWidth > 1200) {
                // centerCoord[0] -= 350;
                centerCoord[1] += 0;
              } else if (window.innerWidth > 991) {
                // centerCoord[0] -= 250;
                centerCoord[1] += 0;
              } else {
                centerCoord[0] -= 0;
                centerCoord[1] += 0;
              }
              map.setGlobalPixelCenter(centerCoord);
            }
          }
          window.addEventListener("resize", setMapCenter);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  } catch (e) {
    console.log("Yandex Map is not initiated");
  }
}
function loadScript(_x) {
  return _loadScript.apply(this, arguments);
}
function _loadScript() {
  _loadScript = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(src) {
    var func,
      script,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          func = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          script = document.createElement("script");
          script.src = src;
          document.body.append(script);
          if (func) script.onload = function () {
            return func();
          };
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _loadScript.apply(this, arguments);
}
document.addEventListener('DOMContentLoaded', function () {
  // loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", setMap);
});

/***/ }),

/***/ "./src/blocks/modules/docks/docks.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/docks/docks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   docksSlider: () => (/* binding */ docksSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");






function docksSlider() {
  var docks = document.querySelector('.docks__slider');
  if (!docks) return;
  var docksSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](docks, {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: '.docks .swiper_prev',
      nextEl: '.docks .swiper_next'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: '.docks .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      420: {
        slidesPerView: 1.4,
        spaceBetween: 35
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    }
  });
}
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/***/ }),

/***/ "./src/blocks/modules/etaps/etaps.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/etaps/etaps.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   etapsSlider: () => (/* binding */ etapsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




function etapsSlider() {
  var etaps = document.querySelector(".etaps__slider");
  if (!etaps) return;
  var etapsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](etaps, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: ".etaps .swiper_prev",
      nextEl: ".etaps .swiper_next"
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: ".etaps .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: etaps.dataset.desctopSlides ? etaps.dataset.desctopSlides : 3
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/feedback/feedback.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/feedback/feedback.js ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/first_index/first_index.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/first_index/first_index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstSliders: () => (/* binding */ firstSliders)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




function firstSliders() {
  var hallSlider = document.querySelector(".first_slider");
  var hallDescSlider = document.querySelector(".halls__slider_desc");
  var smSlider = document.querySelector(".first_slider_aside");
  if (!hallSlider) return;

  // const gsap = new Gsap();

  var devices = {
    md: 640,
    lg: 1025
  };
  var isDesktop = function isDesktop() {
    return window.matchMedia("(min-width: ".concat(devices.lg, "px)")).matches;
  };
  var isMob = function isMob() {
    return window.matchMedia("(max-width: ".concat(devices.md - 1, "px)")).matches;
  };
  var isTablet = function isTablet() {
    return window.matchMedia("(min-width: ".concat(devices.md, "px) and (max-width: ").concat(devices.lg - 1, "px)")).matches;
  };
  var gallery = document.querySelector("[data-gallery]");
  var mainSliderNode = gallery.querySelector("[data-main-slider]");
  var sideSliderNodes = gallery.querySelectorAll("[data-side-slider]");
  var prev = gallery.querySelectorAll("[data-prev]");
  var next = gallery.querySelectorAll("[data-next]");
  var sliderMain = null;
  var sliderSide = null;
  var activeIndex = 0;
  var itemsCount = 0;
  var animate = false;
  var interleaveOffset = 0.5;
  var textSlides = gallery.querySelectorAll("[data-text-slide]");
  var titleList = gallery.querySelectorAll("[data-title]");
  var textList = gallery.querySelectorAll("[data-text]");
  var btnList = gallery.querySelectorAll(".halls__slide_link");
  function _progress(slider) {
    if (slider.slides.length) {
      for (var i = 0; i < itemsCount; i++) {
        var offset = slider.slides[i].progress * (slider.width * interleaveOffset);
        slider.slides[i].querySelector(".gallery__image").style.transform = "translate3d(".concat(offset, "px, 0, 0)");
        // Array.from(slider.slides)[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    }
  }
  function _touchStart(slider) {
    for (var i = 0; i < itemsCount; i++) {
      slider.slides[i].style.transition = "";
    }
  }
  function _setTransition(slider, transition) {
    if (slider.slides.length) {
      for (var i = 0; i < itemsCount; i++) {
        slider.slides[i].style.transition = "".concat(transition, "ms");
        slider.slides[i].querySelector(".gallery__image").style.transition = "".concat(transition, "ms");
      }
    }
  }
  function slideChange(direction) {
    if (animate) return;
    if (direction === "prev") {
      sliderMain.slidePrev();
      slidersSide[0].slidePrev();
      slidersSide[1].slidePrev();
    } else if (direction === "next") {
      sliderMain.slideNext();
      slidersSide[0].slideNext();
      slidersSide[1].slideNext();
    }
  }
  var slidersSide = [];
  sliderMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](mainSliderNode, {
    slidesPerView: "auto",
    simulateTouch: false,
    loop: true,
    followFinger: false,
    speed: 1000,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    init: false,
    pagination: {
      el: '.first__content_slider .swiper-pagination',
      type: "bullets",
      clickable: true
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
    breakpoints: {
      768: {
        pagination: {
          el: '.first_slider_control .swiper-pagination',
          type: "bullets",
          clickable: true
        }
      }
    },
    // pagination: {
    // 	el: ".halls__slider_images .pagination_tabs",
    // 	type: "bullets",
    // 	clickable: true,
    // 	bulletClass: "btn_tab",
    // 	bulletActiveClass: "active",
    // 	renderBullet: function (current, total) {
    // 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

    // 		if (current === 0) {
    // 			const pagin = $(".halls__slider_images .dropdown");
    // 			$(pagin)
    // 				.find(".dropdown__value .value")
    // 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
    // 		}
    // 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${
    // 			slide.classList.contains("swiper-slide-active") ? "active" : ""
    // 		}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
    // 	},
    // },
    on: {
      init: function init(slider) {
        itemsCount = slider.slides.length || 0;
        // textToggle();
        _progress(slider);
      },
      progress: function progress(slider) {
        _progress(slider);
      },
      touchStart: function touchStart(slider) {
        _touchStart(slider);
      },
      setTransition: function setTransition(slider, transition) {
        _setTransition(slider, transition);
      },
      slideChange: function slideChange(slider) {
        activeIndex = slider.realIndex;
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        // textToggle();
      },
      transitionStart: function transitionStart(slider) {
        if (slider.swipeDirection === "prev") {
          slidersSide[0].slidePrev();
          slidersSide[1].slidePrev();
        } else if (slider.swipeDirection === "next") {
          slidersSide[0].slideNext();
          slidersSide[1].slideNext();
        }
      }
    }
  });
  var _iterator = _createForOfIteratorHelper(sideSliderNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sideSliderNode = _step.value;
      slidersSide.push(new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sideSliderNode, {
        slidesPerView: "auto",
        simulateTouch: false,
        speed: 1000,
        watchSlidesProgress: true,
        allowTouchMove: false,
        preventInteractionOnTransition: true,
        loop: true,
        init: false,
        pagination: {
          el: '.first_slider_control .swiper-pagination',
          type: "bullets",
          clickable: true
        },
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
        // pagination: {
        // 	el: ".halls__slider_images .pagination_tabs",
        // 	type: "bullets",
        // 	clickable: true,
        // 	bulletClass: "btn_tab",
        // 	bulletActiveClass: "active",
        // 	renderBullet: function (current, total) {
        // 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

        // 		if (current === 0) {
        // 			const pagin = $(".halls__slider_images .dropdown");
        // 			$(pagin)
        // 				.find(".dropdown__value .value")
        // 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
        // 		}
        // 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${
        // 			slide.classList.contains("swiper-slide-active") ? "active" : ""
        // 		}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
        // 	},
        // },
        on: {
          init: function init(slider) {
            if (isDesktop()) {
              _progress(slider);
            }
          },
          progress: function progress(slider) {
            if (isDesktop()) {
              _progress(slider);
            }
          },
          touchStart: function touchStart(slider) {
            if (isDesktop()) {
              _touchStart(slider);
            }
          },
          setTransition: function setTransition(slider, transition) {
            if (isDesktop()) {
              _setTransition(slider, transition);
            }
          }
        }
      }));
      // console.log(sideSliderNodes);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  slidersSide[0].init();
  slidersSide[1].init();
  prev.forEach(function (item) {
    item.addEventListener("click", function () {
      slideChange("prev");
    });
  });
  next.forEach(function (item) {
    item.addEventListener("click", function () {
      slideChange("next");
    });
  });
  sliderMain.init();
  return {
    sliderMain: sliderMain,
    sliderSide: sliderSide
  };
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Fancybox.bind("[data-fancybox]", {
// 	// Your custom options
// });

/***/ }),

/***/ "./src/blocks/modules/header_fixed/header_fixed.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/header_fixed/header_fixed.js ***!
  \*********************************************************/
/***/ (() => {

var scrollOptions = {
  rootMargin: "0px",
  threshold: 1
};
var scrollCallback = function scrollCallback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.boundingClientRect.y < 0) {
      document.querySelector(".head.fixed").classList.add("show");
      document.querySelector("body").classList.add("is-scrolled");
      if (document.querySelector('.cart__aside')) {
        document.querySelector('.cart__aside').style.top = '90px';
      }
    } else {
      document.querySelector("body").classList.remove("is-scrolled");
      document.querySelector(".head.fixed").classList.remove("show");
      if (document.querySelector('.cart__aside')) {
        document.querySelector('.cart__aside').style.top = '20px';
      }
    }
  });
};
var scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
scrollObserver.observe(document.querySelector(".obs-target"));

/***/ }),

/***/ "./src/blocks/modules/managers/managers.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/managers/managers.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   managersSlider: () => (/* binding */ managersSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




function managersSlider() {
  var managers = document.querySelector('.managers__slider');
  if (!managers) return;
  var managersSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](managers, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: '.managers .swiper_prev',
      nextEl: '.managers .swiper_next'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: '.managers .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 34
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/mobile/mobile.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/mobile/mobile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeMobile: () => (/* binding */ closeMobile),
/* harmony export */   openMobile: () => (/* binding */ openMobile)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ease = {
  exponentialIn: function exponentialIn(t) {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: function exponentialOut(t) {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: function exponentialInOut(t) {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: function sineOut(t) {
    var HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: function circularInOut(t) {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: function cubicIn(t) {
    return t * t * t;
  },
  cubicOut: function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};
var ShapeOverlays = /*#__PURE__*/function () {
  function ShapeOverlays(elm) {
    _classCallCheck(this, ShapeOverlays);
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 3;
    this.duration = 800;
    this.delayPointsArray = [];
    this.delayPointsMax = 180;
    this.delayPerPath = 70;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  return _createClass(ShapeOverlays, [{
    key: "toggle",
    value: function toggle() {
      this.isAnimating = true;
      var range = Math.random() * Math.PI * 2;
      for (var i = 0; i < this.numPoints; i++) {
        var radian = i / (this.numPoints - 1) * Math.PI * 2;
        this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
      }
      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.isOpened = true;
      this.elm.classList.add("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "close",
    value: function close() {
      this.isOpened = false;
      this.elm.classList.remove("is-opened");
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var points = [];
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
      }
      var str = "";
      str += this.isOpened ? "M 0 0 V ".concat(points[0], " ") : "M 0 ".concat(points[0], " ");
      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
      }
      str += this.isOpened ? "V 0 H 0" : "V 100 H 0";
      return str;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;
      this.render();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this.renderLoop();
        });
      } else {
        this.isAnimating = false;
      }
    }
  }]);
}();
var elmOverlay = document.querySelector(".shape-overlays");
var overlay = new ShapeOverlays(elmOverlay);
(function initMobile() {
  var elmHamburger = document.querySelectorAll(".btn_burger");
  // const gNavItems = document.querySelectorAll(".global-menu__item");

  elmHamburger.forEach(function (elem) {
    var whiteLogo = document.querySelector(".logo_white");
    var blackLogo = document.querySelector(".logo_black");
    var mobile = document.querySelector(".mobile");
    var body = document.body;
    elem.addEventListener("click", function (e) {
      // if (overlay.isAnimating) {
      // 	return false;
      // }
      // overlay.toggle();
      if (overlay.isOpened === true) {
        closeMobile(elem);
        // elem.classList.add("active");
        // whiteLogo.style.display = "none";
        // blackLogo.style.display = "block";
        // body.classList.add("no-scroll");
        // setTimeout(() => {
        // 	mobile.classList.add("show");
        // }, 800);
      } else {
        openMobile(elem);
        // elem.classList.remove("active");
        // whiteLogo.style.display = "block";
        // blackLogo.style.display = "none";
        // mobile.classList.remove("show");
        // body.classList.remove("no-scroll");
      }
    });
  });
})();
function openMobile(elem) {
  var whiteLogo = document.querySelector(".logo_white");
  var blackLogo = document.querySelector(".logo_black");
  var mobile = document.querySelector(".mobile");
  var body = document.body;
  var elmHamburger = document.querySelectorAll(".btn_burger");
  if (overlay.isAnimating) {
    return false;
  }
  mobile.style.opacity = 1;
  document.querySelector('.shape-overlays').style.opacity = 1;
  overlay.toggle();
  // elem.classList.add("active");
  // whiteLogo.style.display = "none";
  // blackLogo.style.display = "block";
  // body.classList.add("no-scroll");
  // setTimeout(() => {
  // 	mobile.classList.add("show");
  // }, 800);

  elem.classList.add("active");
  whiteLogo.style.display = "none";
  blackLogo.style.display = "block";
  body.classList.add("no-scroll");
  setTimeout(function () {
    mobile.classList.add("show");
  }, 800);
}
function closeMobile(elem) {
  var whiteLogo = document.querySelector(".logo_white");
  var blackLogo = document.querySelector(".logo_black");
  var mobile = document.querySelector(".mobile");
  var body = document.body;
  var elmHamburger = document.querySelectorAll(".btn_burger");
  overlay.toggle();

  // if (overlay.isAnimating) {
  // 	return false;
  // }

  elem.classList.remove("active");
  whiteLogo.style.display = "block";
  blackLogo.style.display = "none";
  mobile.classList.remove("show");
  body.classList.remove("no-scroll");
}
(function () {
  document.addEventListener("click", function (e) {
    if (e.target.closest(".accordion__title") && !e.target.href) {
      var accordion = e.target.closest(".accordion");
      var accordionBody = accordion.querySelector(".accordion__body");
      var accordionContent = accordion.querySelector(".accordion__content");
      if (accordion.classList.contains("open")) {
        accordionBody.style.maxHeight = "0px";
        accordion.classList.remove("open");
      } else {
        accordion.classList.add("open");
        accordionBody.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    }
  });
})();

/***/ }),

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newsSlider: () => (/* binding */ newsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




function newsSlider() {
  var news = document.querySelector('.news__slider');
  if (!news) return;
  var newsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](news, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: '.news .swiper_prev',
      nextEl: '.news .swiper_next'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: '.news .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/popup/popup.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/popup/popup.js ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/presentation/presentation.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/presentation/presentation.js ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/programm/programm.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/programm/programm.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

(function () {
  document.addEventListener('click', function (e) {
    var gs = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
    if (e.target.closest('.accordion_title')) {
      var accordion = e.target.closest('.accordion');
      var accordionBody = accordion.querySelector('.accordion_body');
      var accordionContent = accordionBody.querySelector('.accordion_content');
      if (accordion.classList.contains('active')) {
        accordion.classList.remove('active');
        // accordionBody.style.maxHeight = 0
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(accordionBody, {
          maxHeight: 0
        });
      } else {
        accordion.classList.add('active');
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(accordionBody, {
          maxHeight: accordionContent.getBoundingClientRect().height
        });
        // accordionBody.style.maxHeight = accordionContent.getBoundingClientRect().height + 'px'
      }
    }
  });
})();

/***/ }),

/***/ "./src/blocks/modules/projects/projects.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/projects/projects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsSlider: () => (/* binding */ projectsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




function projectsSlider() {
  var projects = document.querySelector(".projects__slider");
  if (!projects) return;
  var projectsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](projects, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // loop: true,
    spaceBetween: 20,
    createElements: true,
    speed: 1000,
    // centeredSlides: true,
    navigation: {
      prevEl: ".projects .swiper_prev",
      nextEl: ".projects .swiper_next"
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: ".projects .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 2
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reviewsSlider: () => (/* binding */ reviewsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




function reviewsSlider() {
  var reviews = document.querySelector('.reviews__slider .swiper');
  if (!reviews) return;
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](reviews, {
    slidesPerView: 1.1,
    spaceBetween: 12,
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    loop: true,
    speed: 600,
    navigation: {
      prevEl: '.reviews__slider .swiper_prev',
      nextEl: '.reviews__slider .swiper_next'
    },
    breakpoints: _defineProperty(_defineProperty(_defineProperty({
      576: {
        slidesPerView: 1.1,
        spaceBetween: 26
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 1.5,
        spaceBetween: 24
      }
    }, "991", {
      slidesPerView: 1.2,
      spaceBetween: 24
    }), 1200, {
      slidesPerView: 1.5,
      spaceBetween: 30
    }), 1440, {
      slidesPerView: 1.8,
      spaceBetween: 34
    })
  });
}

/***/ }),

/***/ "./src/blocks/modules/sample/sample.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/sample/sample.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sampleSlider: () => (/* binding */ sampleSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");






function sampleSlider() {
  var sample = document.querySelector(".sample__docks_slider");
  if (!sample) return;
  var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sample, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 1000,
    navigation: {
      prevEl: ".sample__docks_prev",
      nextEl: ".sample__docks_next"
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: ".sample__docks .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      420: {
        slidesPerView: 1,
        spaceBetween: 35
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 1
      }
    }
  });
}
_fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__.Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

/***/ }),

/***/ "./src/blocks/modules/seo_section/seo_section.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/seo_section/seo_section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   seoSliders: () => (/* binding */ seoSliders)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




function seoSliders() {
  var seoSwipers = document.querySelectorAll('.seo__slider');
  if (!seoSwipers.length) return;
  seoSwipers.forEach(function (seo) {
    var seoSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](seo.querySelector('.seo__swiper'), {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 600,
      spaceBetween: 0,
      initialSlide: 0,
      loop: true,
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      navigation: {
        nextEl: seo.querySelector(".seo__slider_navigation .next_btn"),
        prevEl: seo.querySelector(".seo__slider_navigation .prev_btn")
      },
      pagination: {
        el: seo.querySelector(".seo__slider_pagination"),
        type: "bullets",
        clickable: true,
        bulletClass: "seo_pagination_tab",
        bulletActiveClass: "active",
        renderBullet: function renderBullet(current, total) {
          return "<div class=\"seo_pagination_tab\">\n\t\t\t\t\t\t<img src=\"".concat(Array.from(seo.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)"))[current].dataset.image, "\" alt=\"\">\n\t\t\t\t\t</div>");
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/services/services.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serviceSliders: () => (/* binding */ serviceSliders)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
document.addEventListener('click', function (e) {
  if (e.target.closest('.dropdown__value')) {
    var dropdown = e.target.closest('.dropdown');
    var dropdownList = dropdown.querySelector('.dropdown__list');
    if (dropdownList.classList.contains('show')) {
      dropdownList.classList.remove('show');
    } else {
      dropdownList.classList.add('show');
    }
  }
  if (e.target.closest('.dropdown__item')) {
    var _dropdown = e.target.closest('.dropdown');
    var _dropdownList = _dropdown.querySelector('.dropdown__list');
    var dropdownItem = e.target.closest('.dropdown__item');
    var dropdownValue = _dropdown.querySelector('.dropdown__value .value');
    _dropdownList.classList.remove('show');
    dropdownValue.textContent = dropdownItem.textContent;
  }
  if (!e.target.closest('.dropdown')) {
    var _dropdown2 = document.querySelectorAll('.dropdown');
    _dropdown2.forEach(function (item) {
      var dropdownList = item.querySelector('.dropdown__list');
      dropdownList.classList.remove('show');
    });
  }
});




function serviceSliders() {
  var services = document.querySelector('.services__slider');
  if (!services) return;
  var servicesSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](services, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: '.services .swiper_prev',
      nextEl: '.services .swiper_next'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: '.services .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/tarifs/tarifs.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/tarifs/tarifs.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/why_works/why_works.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/why_works/why_works.js ***!
  \***************************************************/
/***/ (() => {

// import Swiper from "swiper";
// import { Navigation, Pagination } from 'swiper/modules';

// import "swiper/css";
// import 'swiper/css/pagination';

// (function () {
// 	// const seoThumbs = new Swiper(".specialists-thumbs", {
// 	// 	spaceBetween: 0,
// 	// 	slidesPerView: 10,
// 	// 	freeMode: true,
// 	// 	watchSlidesProgress: true,

// 	// 	breakpoints: {
// 	// 		320: {
// 	// 			slidesPerView: 5,
// 	// 		},
// 	// 		768: {
// 	// 			slidesPerView: 7,
// 	// 		},
// 	// 		1024: {
// 	// 			slidesPerView: 10,
// 	// 		},
// 	// 	},
// 	// });
// 	const seoSwipers = document.querySelectorAll('.seo__slider')

// 	if (!seoSwipers.length) return;

// 	seoSwipers.forEach(seo => {
// 		const seoSwiper = new Swiper(seo.querySelector('.seo__swiper'), {
// 			slidesPerView: 1,
// 			slidesPerGroup: 1,
// 			speed: 600,
// 			spaceBetween: 0,
// 			initialSlide: 0,
// 			loop: true,
// 			modules: [Pagination, Navigation],
// 			navigation: {
// 				nextEl: seo.querySelector(".seo__slider_navigation .next_btn"),
// 				prevEl: seo.querySelector(".seo__slider_navigation .prev_btn"),
// 			},

// 			pagination: {
// 				el: seo.querySelector(".seo__slider_pagination"),
// 				type: "bullets",
// 				clickable: true,
// 				bulletClass: "seo_pagination_tab",
// 				bulletActiveClass: "active",
// 				renderBullet: function (current, total) {
// 					return `<div class="seo_pagination_tab">
// 						<img src="${Array.from(seo.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)"))[current].dataset.image}" alt="">
// 					</div>`;
// 				},
// 			},
// 		});
// 	})

// })()

/***/ }),

/***/ "./src/blocks/modules/workers/workers.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/workers/workers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickAnchors: () => (/* binding */ clickAnchors),
/* harmony export */   gallerySliders: () => (/* binding */ gallerySliders),
/* harmony export */   whoSliders: () => (/* binding */ whoSliders)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
var menuSelectors = document.querySelectorAll(".aside__nav_link");
var header = document.querySelector(".head.fixed");
function clickAnchors() {
  on("click", 'a[href^="#"]', function (e) {
    e.preventDefault();
    var element = document.getElementById(this.getAttribute("href").substr(1));
    if (!element) return;
    var offset = -100; // Смещение на -100px

    // Получаем текущую позицию элемента и добавляем смещение
    var elementPosition = element.getBoundingClientRect().top + window.scrollY - header.getBoundingClientRect().height;

    // Прокручиваем к рассчитанной позиции с плавной анимацией
    window.scrollTo({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  });
}
document.addEventListener("scroll", function () {
  onScroll();
});
onScroll();
function onScroll() {
  var scroll_top = window.pageYOffset;
  menuSelectors.forEach(function (link) {
    var url = new URL(link.href);
    var hash = url.hash;
    var target = document.querySelector(hash);
    if (target) {
      link.classList.remove("active");
      if (target.getBoundingClientRect().top <= header.getBoundingClientRect().height && target.getBoundingClientRect().bottom >= header.getBoundingClientRect().height) {
        link.classList.add("active");
      } else {
        // link.classList.remove("active");
      }
    }
  });
}
function on(event, object) {
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  document.addEventListener(event, function (e) {
    var eTarget = e.target.closest(object);
    if (eTarget == null) return;
    func.call(eTarget, e);
  });
}
(function () {
  document.addEventListener("click", function (e) {
    if (e.target.closest(".workers__card_more")) {
      if (e.target.closest(".workers__card")) {
        var workers = document.querySelectorAll(".workers__cards_item");
        workers.forEach(function (worker) {
          var popup = worker.querySelector(".workers__popup");
          popup.classList.remove("show");
        });
        var cardItem = e.target.closest(".workers__cards_item");
        console.log(cardItem.closest(".workers__cards_list").getBoundingClientRect(), cardItem.getBoundingClientRect(), window.getComputedStyle(cardItem.closest(".workers__cards_list"))["gap"]);
        var popup = cardItem.querySelector(".workers__popup");
        popup.style.width = cardItem.closest(".workers__cards_list").getBoundingClientRect().width + "px";
        if (cardItem.closest(".workers__cards_list").getBoundingClientRect().x === cardItem.getBoundingClientRect().x) {
          popup.style.left = 0;
          if (cardItem.closest(".workers__cards_list").getBoundingClientRect().width === cardItem.getBoundingClientRect().width) {
            var gap = parseInt(window.getComputedStyle(cardItem.closest(".workers__cards_list"))["gap"], 10);
            popup.style.height = cardItem.getBoundingClientRect().height * 2 + gap + "px";
            popup.classList.add("column");
          } else {
            popup.classList.remove("column");
          }
        } else {
          popup.style.left = "auto";
        }
        popup.classList.add("show");
      } else if (e.target.closest(".workers__popup")) {
        var _popup = e.target.closest(".workers__popup");
        _popup.classList.remove("show");
      }
    }
    if (!!e.target.closest('a')) {
      if (e.target.closest('a').href === this.location.href) e.preventDefault();
    }
  });
})();




function whoSliders() {
  var who = document.querySelectorAll(".who");
  if (!who.length) return;
  who.forEach(function (elem) {
    var slider = elem.querySelector('.swiper');
    if (!slider) return;
    var whoSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 20,
      speed: 700,
      navigation: {
        prevEl: elem.querySelector(".swiper_prev"),
        nextEl: elem.querySelector(".swiper_next")
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      pagination: {
        el: elem.querySelector(".swiper-pagination"),
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: slider.dataset.desctopSlides ? +slider.dataset.desctopSlides : 3
        }
      }
    });
  });
}
function gallerySliders() {
  var gallery = document.querySelectorAll(".gallery");
  if (!gallery.length) return;
  gallery.forEach(function (elem) {
    var slider = elem.querySelector('.swiper');
    if (!slider) return;
    var gallerySlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      spaceBetween: 20,
      speed: 700,
      navigation: {
        prevEl: elem.querySelector(".swiper_prev"),
        nextEl: elem.querySelector(".swiper_next")
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
      pagination: {
        el: elem.querySelector(".swiper-pagination"),
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: slider.dataset.desctopSlides ? +slider.dataset.desctopSlides : 3
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_marks_marks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/marks/marks */ "./src/blocks/components/marks/marks.js");
/* harmony import */ var _components_marks_marks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_marks_marks__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_fixed_header_fixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header_fixed/header_fixed */ "./src/blocks/modules/header_fixed/header_fixed.js");
/* harmony import */ var _modules_header_fixed_header_fixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_fixed_header_fixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/mobile/mobile */ "./src/blocks/modules/mobile/mobile.js");
/* harmony import */ var _modules_first_index_first_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/first_index/first_index */ "./src/blocks/modules/first_index/first_index.js");
/* harmony import */ var _modules_seo_section_seo_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/seo_section/seo_section */ "./src/blocks/modules/seo_section/seo_section.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_advs_advs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/advs/advs */ "./src/blocks/modules/advs/advs.js");
/* harmony import */ var _modules_advs_advs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_advs_advs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_presentation_presentation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/presentation/presentation */ "./src/blocks/modules/presentation/presentation.js");
/* harmony import */ var _modules_presentation_presentation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_presentation_presentation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_docks_docks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/docks/docks */ "./src/blocks/modules/docks/docks.js");
/* harmony import */ var _modules_news_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _modules_etaps_etaps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/etaps/etaps */ "./src/blocks/modules/etaps/etaps.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_managers_managers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/managers/managers */ "./src/blocks/modules/managers/managers.js");
/* harmony import */ var _modules_why_works_why_works__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/why_works/why_works */ "./src/blocks/modules/why_works/why_works.js");
/* harmony import */ var _modules_why_works_why_works__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_why_works_why_works__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_sample_sample__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/sample/sample */ "./src/blocks/modules/sample/sample.js");
/* harmony import */ var _modules_programm_programm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/programm/programm */ "./src/blocks/modules/programm/programm.js");
/* harmony import */ var _modules_buy_buy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/buy/buy */ "./src/blocks/modules/buy/buy.js");
/* harmony import */ var _modules_buy_buy__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_buy_buy__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_tarifs_tarifs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/tarifs/tarifs */ "./src/blocks/modules/tarifs/tarifs.js");
/* harmony import */ var _modules_tarifs_tarifs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_tarifs_tarifs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_projects_projects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/projects/projects */ "./src/blocks/modules/projects/projects.js");
/* harmony import */ var _modules_cart_cart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/cart/cart */ "./src/blocks/modules/cart/cart.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_company_company__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/company/company */ "./src/blocks/modules/company/company.js");
/* harmony import */ var _modules_company_company__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_modules_company_company__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/feedback/feedback */ "./src/blocks/modules/feedback/feedback.js");
/* harmony import */ var _modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/popup/popup */ "./src/blocks/modules/popup/popup.js");
/* harmony import */ var _modules_popup_popup__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_modules_popup_popup__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_workers_workers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/workers/workers */ "./src/blocks/modules/workers/workers.js");





// import "%modules%/first_about/first_about";






















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _barba_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @barba/core/ */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_barba_core___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lenis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lenis */ "./node_modules/lenis/dist/lenis.mjs");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _blocks_modules_docks_docks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/modules/docks/docks */ "./src/blocks/modules/docks/docks.js");
/* harmony import */ var _blocks_modules_cart_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/modules/cart/cart */ "./src/blocks/modules/cart/cart.js");
/* harmony import */ var _blocks_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/modules/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _blocks_modules_etaps_etaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/modules/etaps/etaps */ "./src/blocks/modules/etaps/etaps.js");
/* harmony import */ var _blocks_modules_first_index_first_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/modules/first_index/first_index */ "./src/blocks/modules/first_index/first_index.js");
/* harmony import */ var _blocks_modules_managers_managers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/modules/managers/managers */ "./src/blocks/modules/managers/managers.js");
/* harmony import */ var _blocks_modules_news_news__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/modules/news/news */ "./src/blocks/modules/news/news.js");
/* harmony import */ var _blocks_modules_projects_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/modules/projects/projects */ "./src/blocks/modules/projects/projects.js");
/* harmony import */ var _blocks_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/modules/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _blocks_modules_sample_sample__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../blocks/modules/sample/sample */ "./src/blocks/modules/sample/sample.js");
/* harmony import */ var _blocks_modules_seo_section_seo_section__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../blocks/modules/seo_section/seo_section */ "./src/blocks/modules/seo_section/seo_section.js");
/* harmony import */ var _blocks_modules_services_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../blocks/modules/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _blocks_modules_workers_workers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../blocks/modules/workers/workers */ "./src/blocks/modules/workers/workers.js");
/* harmony import */ var _blocks_modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../blocks/modules/mobile/mobile */ "./src/blocks/modules/mobile/mobile.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




















var ease = {
  exponentialIn: function exponentialIn(t) {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: function exponentialOut(t) {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: function exponentialInOut(t) {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: function sineOut(t) {
    var HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: function circularInOut(t) {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: function cubicIn(t) {
    return t * t * t;
  },
  cubicOut: function cubicOut(t) {
    var f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: function cubicInOut(t) {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: function quadraticOut(t) {
    return -t * (t - 2.0);
  },
  quarticOut: function quarticOut(t) {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  }
};
var PageOverlays = /*#__PURE__*/function () {
  function PageOverlays(elm) {
    _classCallCheck(this, PageOverlays);
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 2;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 0;
    this.delayPerPath = 200;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  return _createClass(PageOverlays, [{
    key: "toggle",
    value: function toggle() {
      this.isAnimating = true;
      for (var i = 0; i < this.numPoints; i++) {
        this.delayPointsArray[i] = 0;
      }
      if (this.isOpened === false) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.isOpened = true;
      this.elm.classList.add('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "close",
    value: function close() {
      this.isOpened = false;
      this.elm.classList.remove('is-opened');
      this.timeStart = Date.now();
      this.renderLoop();
    }
  }, {
    key: "updatePath",
    value: function updatePath(time) {
      var points = [];
      for (var i = 0; i < this.numPoints; i++) {
        var thisEase = this.isOpened ? i == 1 ? ease.cubicOut : ease.cubicInOut : i == 1 ? ease.cubicInOut : ease.cubicOut;
        points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
      }
      var str = '';
      str += this.isOpened ? "M 0 0 V ".concat(points[0], " ") : "M 0 ".concat(points[0], " ");
      for (var i = 0; i < this.numPoints - 1; i++) {
        var p = (i + 1) / (this.numPoints - 1) * 100;
        var cp = p - 1 / (this.numPoints - 1) * 100 / 2;
        str += "C ".concat(cp, " ").concat(points[i], " ").concat(cp, " ").concat(points[i + 1], " ").concat(p, " ").concat(points[i + 1], " ");
      }
      str += this.isOpened ? "V 0 H 0" : "V 100 H 0";
      return str;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isOpened) {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
        }
      } else {
        for (var i = 0; i < this.path.length; i++) {
          this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
        }
      }
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;
      this.render();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(function () {
          _this.renderLoop();
        });
      } else {
        this.isAnimating = false;
      }
    }
  }]);
}();
function initScripts() {
  (0,_blocks_modules_docks_docks__WEBPACK_IMPORTED_MODULE_3__.docksSlider)();
  (0,_blocks_modules_cart_cart__WEBPACK_IMPORTED_MODULE_4__.initCounters)();
  (0,_blocks_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__.setMap)();
  (0,_blocks_modules_etaps_etaps__WEBPACK_IMPORTED_MODULE_6__.etapsSlider)();
  (0,_blocks_modules_first_index_first_index__WEBPACK_IMPORTED_MODULE_7__.firstSliders)();
  (0,_blocks_modules_managers_managers__WEBPACK_IMPORTED_MODULE_8__.managersSlider)();
  (0,_blocks_modules_news_news__WEBPACK_IMPORTED_MODULE_9__.newsSlider)();
  (0,_blocks_modules_projects_projects__WEBPACK_IMPORTED_MODULE_10__.projectsSlider)();
  (0,_blocks_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__.reviewsSlider)();
  (0,_blocks_modules_sample_sample__WEBPACK_IMPORTED_MODULE_12__.sampleSlider)();
  (0,_blocks_modules_seo_section_seo_section__WEBPACK_IMPORTED_MODULE_13__.seoSliders)();
  (0,_blocks_modules_services_services__WEBPACK_IMPORTED_MODULE_14__.serviceSliders)();
  (0,_blocks_modules_workers_workers__WEBPACK_IMPORTED_MODULE_15__.whoSliders)();
  (0,_blocks_modules_workers_workers__WEBPACK_IMPORTED_MODULE_15__.gallerySliders)();
}
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__.loadScript)(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", _blocks_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_5__.setMap);
  initScripts();
  var numberLabels = document.querySelectorAll('.label_number');
  var tl = gsap__WEBPACK_IMPORTED_MODULE_17__.gsap.timeline();
  var elmOverlay = document.querySelector(".page-overlays");
  var pageOverlay = new PageOverlays(elmOverlay);
  if (numberLabels.length) {
    numberLabels.forEach(function (label) {
      var input = label.querySelector('input'),
        decBtn = label.querySelector('.dec'),
        incBtn = label.querySelector('.inc');
    });
  }
  var lenis = new lenis__WEBPACK_IMPORTED_MODULE_18__["default"]({
    autoRaf: true,
    smooth: true,
    lerp: 0.06,
    getSpeed: true,
    multiplier: 0.6,
    scrollFromAnywhere: true,
    // autoResize: true,
    getDirection: true,
    smartphone: _defineProperty(_defineProperty({
      smooth: !0,
      breakpoint: 767
    }, "smooth", true), "lerp", 0.06),
    tablet: _defineProperty(_defineProperty(_defineProperty({
      smooth: !0,
      breakpoint: 1024
    }, "smooth", true), "lerp", 0.06), "multiplier", 4),
    prevent: function prevent(node) {
      return node.closest(".mobile") || window.getComputedStyle(node).overflow === "auto" || window.getComputedStyle(node).overflow === "scroll" || node.closest(".fancybox__container");
    }
  });
  var scrollX = 0;
  var scrollY = 0;
  _barba_core___WEBPACK_IMPORTED_MODULE_2___default().init({
    preventRunning: true,
    transitions: [{
      name: 'opacity-transition',
      leave: function leave(data) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (data.trigger === 'back' || data.trigger === 'popstate') {
                  scrollX = (_barba_core___WEBPACK_IMPORTED_MODULE_2___default().history).previous.scroll.x;
                  scrollY = (_barba_core___WEBPACK_IMPORTED_MODULE_2___default().history).previous.scroll.y;
                } else {
                  scrollX = 0;
                  scrollY = 0;
                }
                pageOverlay.toggle();
                _context.next = 4;
                return tl.to(data.current.container, {
                  opacity: 1,
                  duration: 0.6
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      },
      enter: function enter(data) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                window.scrollTo(scrollX, scrollY);
                _context2.next = 3;
                return tl.from(data.next.container, {
                  opacity: 1,
                  duration: 0.1
                });
              case 3:
                pageOverlay.toggle();
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }]
  });
  _barba_core___WEBPACK_IMPORTED_MODULE_2___default().hooks.beforeEnter(function (_ref) {
    var current = _ref.current,
      next = _ref.next;
    initScripts();
    if (document.querySelector('.mobile').classList.contains('show')) {
      var burgerBtn = document.querySelector('.btn_burger.active');
      document.querySelector('.mobile').style.opacity = 0;
      document.querySelector('.shape-overlays').style.opacity = 0;
      (0,_blocks_modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_16__.closeMobile)(burgerBtn);
    }
    ;
  });
  _barba_core___WEBPACK_IMPORTED_MODULE_2___default().hooks.enter(function () {});
});

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksfera_site"] = self["webpackChunksfera_site"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map