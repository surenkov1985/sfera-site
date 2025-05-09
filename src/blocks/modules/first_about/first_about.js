// import Swiper from "swiper";
// import { Pagination } from 'swiper/modules';

// import "swiper/css";
// import 'swiper/css/pagination';

// export function firstSliders() {
// 	const hallSlider = document.querySelector(".first_slider");
// 	const hallDescSlider = document.querySelector(".halls__slider_desc");
// 	const smSlider = document.querySelector(".first_slider_aside");

// 	if (!hallSlider) return;

// 	// const gsap = new Gsap();

// 	const devices = {
// 		md: 640,
// 		lg: 1025,
// 	};

// 	const isDesktop = () => window.matchMedia(`(min-width: ${devices.lg}px)`).matches;
// 	const isMob = () => window.matchMedia(`(max-width: ${devices.md - 1}px)`).matches;
// 	const isTablet = () => window.matchMedia(`(min-width: ${devices.md}px) and (max-width: ${devices.lg - 1}px)`).matches;

// 	const gallery = document.querySelector("[data-gallery]");
// 	const mainSliderNode = gallery.querySelector("[data-main-slider]");
// 	const sideSliderNodes = gallery.querySelectorAll("[data-side-slider]");

// 	const prev = gallery.querySelectorAll("[data-prev]");
// 	const next = gallery.querySelectorAll("[data-next]");

// 	let sliderMain = null;
// 	let sliderSide = null;

// 	let activeIndex = 0;
// 	let itemsCount = 0;

// 	let animate = false;

// 	const interleaveOffset = 0.5;

// 	const textSlides = gallery.querySelectorAll("[data-text-slide]");
// 	const titleList = gallery.querySelectorAll("[data-title]");
// 	const textList = gallery.querySelectorAll("[data-text]");
// 	const btnList = gallery.querySelectorAll(".halls__slide_link");

// 	function progress(slider) {
// 		if (slider.slides.length) {
// 			for (let i = 0; i < itemsCount; i++) {
// 				const offset = slider.slides[i].progress * (slider.width * interleaveOffset);

// 				slider.slides[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
// 				// Array.from(slider.slides)[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
// 			}
// 		}
// 	}

// 	function touchStart(slider) {
// 		for (let i = 0; i < itemsCount; i++) {
// 			slider.slides[i].style.transition = "";
// 		}
// 	}

// 	function setTransition(slider, transition) {
// 		if (slider.slides.length) {
// 			for (let i = 0; i < itemsCount; i++) {
// 				slider.slides[i].style.transition = `${transition}ms`;
// 				slider.slides[i].querySelector(".gallery__image").style.transition = `${transition}ms`;
// 			}
// 		}
// 	}

// 	function slideChange(direction) {
// 		if (animate) return;

// 		if (direction === "prev") {
// 			sliderMain.slidePrev();
// 			slidersSide[0].slidePrev();
// 			slidersSide[1].slidePrev();
// 		} else if (direction === "next") {
// 			sliderMain.slideNext();
// 			slidersSide[0].slideNext();
// 			slidersSide[1].slideNext();
// 		}
// 	}
// 	const slidersSide = [];
// 	sliderMain = new Swiper(mainSliderNode, {
// 		slidesPerView: "auto",
// 		simulateTouch: false,
// 		loop: true,
// 		followFinger: false,
// 		speed: 1000,
// 		watchSlidesProgress: true,
// 		preventInteractionOnTransition: true,
// 		init: false,
// 		pagination: {
// 			el: '.first__content_slider .swiper-pagination',
// 			type: "bullets",
// 			clickable: true,
// 		},
// 		modules: [Pagination],
// 		breakpoints: {
// 			768: {
// 				pagination: {
// 					el: '.first_slider_control .swiper-pagination',
// 					type: "bullets",
// 					clickable: true,
// 				},
// 			}
// 		},
// 		// pagination: {
// 		// 	el: ".halls__slider_images .pagination_tabs",
// 		// 	type: "bullets",
// 		// 	clickable: true,
// 		// 	bulletClass: "btn_tab",
// 		// 	bulletActiveClass: "active",
// 		// 	renderBullet: function (current, total) {
// 		// 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 		// 		if (current === 0) {
// 		// 			const pagin = $(".halls__slider_images .dropdown");
// 		// 			$(pagin)
// 		// 				.find(".dropdown__value .value")
// 		// 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 		// 		}
// 		// 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${
// 		// 			slide.classList.contains("swiper-slide-active") ? "active" : ""
// 		// 		}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 		// 	},
// 		// },
// 		on: {
// 			init: (slider) => {
// 				itemsCount = slider.slides.length || 0;
// 				// textToggle();
// 				progress(slider);
// 			},
// 			progress: (slider) => {
// 				progress(slider);
// 			},
// 			touchStart: (slider) => {
// 				touchStart(slider);
// 			},
// 			setTransition: (slider, transition) => {
// 				setTransition(slider, transition);
// 			},
// 			slideChange: (slider) => {
// 				activeIndex = slider.realIndex;
// 			},
// 			slideChangeTransitionStart: () => {
// 				// textToggle();
// 			},
// 			transitionStart: (slider) => {
// 				if (slider.swipeDirection === "prev") {
// 					slidersSide[0].slidePrev();
// 					slidersSide[1].slidePrev();
// 				} else if (slider.swipeDirection === "next") {
// 					slidersSide[0].slideNext();
// 					slidersSide[1].slideNext();
// 				}
// 			},
// 		},
// 	});

// 	for (let sideSliderNode of sideSliderNodes) {
// 		slidersSide.push(
// 			new Swiper(sideSliderNode, {
// 				slidesPerView: "auto",
// 				simulateTouch: false,
// 				speed: 1000,
// 				watchSlidesProgress: true,
// 				allowTouchMove: false,
// 				preventInteractionOnTransition: true,
// 				loop: true,
// 				init: false,
// 				pagination: {
// 					el: '.first_slider_control .swiper-pagination',
// 					type: "bullets",
// 					clickable: true,
// 				},
// 				modules: [Pagination],
// 				// pagination: {
// 				// 	el: ".halls__slider_images .pagination_tabs",
// 				// 	type: "bullets",
// 				// 	clickable: true,
// 				// 	bulletClass: "btn_tab",
// 				// 	bulletActiveClass: "active",
// 				// 	renderBullet: function (current, total) {
// 				// 		const slide = Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current];

// 				// 		if (current === 0) {
// 				// 			const pagin = $(".halls__slider_images .dropdown");
// 				// 			$(pagin)
// 				// 				.find(".dropdown__value .value")
// 				// 				.text($(Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current]).data("name"));
// 				// 		}
// 				// 		return `<span class="btn btn_tab dropdown-slider__item ${total} ${
// 				// 			slide.classList.contains("swiper-slide-active") ? "active" : ""
// 				// 		}"><span class="value">${Array.from(hallSlider.querySelectorAll(".swiper-slide"))[current].dataset.name}</span></span>`;
// 				// 	},
// 				// },
// 				on: {
// 					init: (slider) => {
// 						if (isDesktop()) {
// 							progress(slider);
// 						}
// 					},
// 					progress: (slider) => {
// 						if (isDesktop()) {
// 							progress(slider);
// 						}
// 					},
// 					touchStart: (slider) => {
// 						if (isDesktop()) {
// 							touchStart(slider);
// 						}
// 					},
// 					setTransition: (slider, transition) => {
// 						if (isDesktop()) {
// 							setTransition(slider, transition);
// 						}
// 					},
// 				},
// 			})
// 		);
// 		// console.log(sideSliderNodes);
// 	}
// 	slidersSide[0].init();
// 	slidersSide[1].init();

// 	prev.forEach(item => {
// 		item.addEventListener("click", () => {
// 			slideChange("prev");
// 		});
// 	})

// 	next.forEach(item => {
// 		item.addEventListener("click", () => {
// 			slideChange("next");
// 		});
// 	})

// 	sliderMain.init();

// 	return { sliderMain, sliderSide };
// }
