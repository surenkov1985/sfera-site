/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/blocks/modules/mobile/mobile.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/mobile/mobile.js ***!
  \*********************************************/
/***/ (() => {

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
(function () {
  var elmHamburger = document.querySelector(".btn_burger");
  // const gNavItems = document.querySelectorAll(".global-menu__item");
  var elmOverlay = document.querySelector(".shape-overlays");
  var overlay = new ShapeOverlays(elmOverlay);
  var whiteLogo = document.querySelector(".logo_white");
  var blackLogo = document.querySelector(".logo_black");
  var mobile = document.querySelector(".mobile");
  var body = document.body;
  elmHamburger.addEventListener("click", function () {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
      elmHamburger.classList.add("active");
      whiteLogo.style.display = "none";
      blackLogo.style.display = "block";
      // mobile.classList.add("show");
      body.classList.add("no-scroll");
      // for (var i = 0; i < gNavItems.length; i++) {
      // 	// gNavItems[i].classList.add("is-opened");
      // }
      setTimeout(function () {
        mobile.classList.add("show");
      }, 800);
    } else {
      elmHamburger.classList.remove("active");
      whiteLogo.style.display = "block";
      blackLogo.style.display = "none";
      mobile.classList.remove("show");
      body.classList.remove("no-scroll");

      // for (var i = 0; i < gNavItems.length; i++) {
      // 	// gNavItems[i].classList.remove("is-opened");
      // }
    }
  });
})();
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

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



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
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/mobile/mobile */ "./src/blocks/modules/mobile/mobile.js");
/* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_2__);




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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map