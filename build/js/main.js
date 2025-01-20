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

/***/ "./src/blocks/modules/company/company.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/company/company.js ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/docks/docks.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/docks/docks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");






(function () {
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
})();
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




(function () {
  var etaps = document.querySelector('.etaps__slider');
  if (!etaps) return;
  var etapsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](etaps, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 20,
    speed: 700,
    navigation: {
      prevEl: '.etaps .swiper_prev',
      nextEl: '.etaps .swiper_next'
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],
    pagination: {
      el: '.etaps .swiper-pagination',
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
})();

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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }





// console.log(Swiper);

// const firstSlider = new Swiper(".first_slider", {
// 	speed: 500,
// });

(function hallsSliders() {
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

  // function textToggle() {
  // 	if (!titleList.length && !textList.length && !btnList.length) return;

  // 	const tl = gsap.timeline({
  // 		paused: true,
  // 		onComplete: () => {
  // 			animate = false;
  // 		},
  // 	});
  // 	textSlides.forEach((ts) => {
  // 		ts.classList.remove("active");
  // 	});
  // 	textSlides[activeIndex].classList.add("active");
  // 	const currentTitle = textSlides[activeIndex].querySelector("[data-title]");
  // 	const currentText = textSlides[activeIndex].querySelector("[data-text]");
  // 	const currentBtn = textSlides[activeIndex].querySelector(".halls__slide_link");

  // 	animate = true;

  // 	tl.to([...titleList, ...textList, ...btnList], { opacity: 0, stagger: 0, duration: 0.2 }).fromTo(
  // 		[currentTitle, currentText, currentBtn],
  // 		{ opacity: 0, y: 16 },
  // 		{ opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
  // 	);

  // 	tl.play();
  // }

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
  // console.log(mainSliderNode, sliderSide);

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

  // next.addEventListener("click", () => {
  // 	slideChange("next");
  // });

  sliderMain.init();
  return {
    sliderMain: sliderMain,
    sliderSide: sliderSide
  };
})();

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
    } else {
      document.querySelector("body").classList.remove("is-scrolled");
      document.querySelector(".head.fixed").classList.remove("show");
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




(function () {
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
})();

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
  var elmHamburger = document.querySelectorAll(".btn_burger");
  // const gNavItems = document.querySelectorAll(".global-menu__item");

  elmHamburger.forEach(function (elem) {
    var elmOverlay = document.querySelector(".shape-overlays");
    var overlay = new ShapeOverlays(elmOverlay);
    var whiteLogo = document.querySelector(".logo_white");
    var blackLogo = document.querySelector(".logo_black");
    var mobile = document.querySelector(".mobile");
    var body = document.body;
    elem.addEventListener("click", function (e) {
      if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
      if (overlay.isOpened === true) {
        elem.classList.add("active");
        whiteLogo.style.display = "none";
        blackLogo.style.display = "block";
        body.classList.add("no-scroll");
        setTimeout(function () {
          mobile.classList.add("show");
        }, 800);
      } else {
        elem.classList.remove("active");
        whiteLogo.style.display = "block";
        blackLogo.style.display = "none";
        mobile.classList.remove("show");
        body.classList.remove("no-scroll");
      }
    });
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

/***/ "./src/blocks/modules/news/news.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/news/news.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




(function () {
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
})();

/***/ }),

/***/ "./src/blocks/modules/presentation/presentation.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/presentation/presentation.js ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




(function () {
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
})();

/***/ }),

/***/ "./src/blocks/modules/seo_section/seo_section.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/seo_section/seo_section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");




(function () {
  // const seoThumbs = new Swiper(".specialists-thumbs", {
  // 	spaceBetween: 0,
  // 	slidesPerView: 10,
  // 	freeMode: true,
  // 	watchSlidesProgress: true,

  // 	breakpoints: {
  // 		320: {
  // 			slidesPerView: 5,
  // 		},
  // 		768: {
  // 			slidesPerView: 7,
  // 		},
  // 		1024: {
  // 			slidesPerView: 10,
  // 		},
  // 	},
  // });
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
})();

/***/ }),

/***/ "./src/blocks/modules/services/services.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
/***/ (() => {

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
/***/ (() => {

var menuSelectors = document.querySelectorAll('.aside__nav_link');
var header = document.querySelector('.head.fixed');
(function clickAnchors() {
  on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    var element = document.getElementById(this.getAttribute('href').substr(1));
    if (!element) return;
    var offset = -100; // Смещение на -100px

    // Получаем текущую позицию элемента и добавляем смещение
    var elementPosition = element.getBoundingClientRect().top + window.scrollY - header.getBoundingClientRect().height;

    // Прокручиваем к рассчитанной позиции с плавной анимацией
    window.scrollTo({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  });
})();
document.addEventListener('scroll', function () {
  onScroll();
});
onScroll();
function onScroll() {
  var scroll_top = window.pageYOffset;
  menuSelectors.forEach(function (link) {
    var url = new URL(link.href);
    var hash = url.hash;
    var target = document.querySelector(hash);
    link.classList.remove("active");
    if (target.getBoundingClientRect().top <= header.getBoundingClientRect().height && target.getBoundingClientRect().bottom >= header.getBoundingClientRect().height) {
      link.classList.add("active");
    } else {
      // link.classList.remove("active");
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
  document.addEventListener('click', function (e) {
    if (e.target.closest('.workers__card_more')) {
      if (e.target.closest('.workers__card')) {
        var workers = document.querySelectorAll('.workers__cards_item');
        workers.forEach(function (worker) {
          var popup = worker.querySelector('.workers__popup');
          popup.classList.remove('show');
        });
        var cardItem = e.target.closest('.workers__cards_item');
        console.log(cardItem.closest('.workers__cards_list').getBoundingClientRect(), cardItem.getBoundingClientRect(), window.getComputedStyle(cardItem.closest('.workers__cards_list'))['gap']);
        var popup = cardItem.querySelector('.workers__popup');
        popup.style.width = cardItem.closest('.workers__cards_list').getBoundingClientRect().width + 'px';
        if (cardItem.closest('.workers__cards_list').getBoundingClientRect().x === cardItem.getBoundingClientRect().x) {
          popup.style.left = 0;
          if (cardItem.closest('.workers__cards_list').getBoundingClientRect().width === cardItem.getBoundingClientRect().width) {
            var gap = parseInt(window.getComputedStyle(cardItem.closest('.workers__cards_list'))['gap'], 10);
            popup.style.height = cardItem.getBoundingClientRect().height * 2 + gap + 'px';
            popup.classList.add('column');
          } else {
            popup.classList.remove('column');
          }
        } else {
          popup.style.left = 'auto';
        }
        popup.classList.add('show');
      } else if (e.target.closest('.workers__popup')) {
        var _popup = e.target.closest('.workers__popup');
        _popup.classList.remove('show');
      }
    }
  });
})();

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
/* harmony import */ var _modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_mobile__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_first_index_first_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/first_index/first_index */ "./src/blocks/modules/first_index/first_index.js");
/* harmony import */ var _modules_seo_section_seo_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/seo_section/seo_section */ "./src/blocks/modules/seo_section/seo_section.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_services_services__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var _modules_company_company__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/company/company */ "./src/blocks/modules/company/company.js");
/* harmony import */ var _modules_company_company__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_company_company__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/feedback/feedback */ "./src/blocks/modules/feedback/feedback.js");
/* harmony import */ var _modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_workers_workers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/workers/workers */ "./src/blocks/modules/workers/workers.js");
/* harmony import */ var _modules_workers_workers__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_workers_workers__WEBPACK_IMPORTED_MODULE_17__);





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



/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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