import Swiper from "swiper";

import { Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';

export function setMap() {
	let mapContainers = document.querySelectorAll(".map");

	if (mapContainers.length === 0) return;
	// const script = document.createElement("script");
	// script.src = "../local/templates/zaryadyehall/assets/libs/buildYaMaps/script.js";
	// document.body.append(script);
	try {
		ymaps.ready(() => {
			for (let mapContainer of document.querySelectorAll(".map")) {
				let id = mapContainer.getAttribute("id"),
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
						controls: ["smallMapDefaultSet"],
					}),
					pin = new ymaps.Placemark(
						mapCoord,
						{
							hintContent: mapTitle,
						},
						{
							iconLayout: "default#image",
							iconImageHref: "../../img/placemark.png",
							iconImageSize: [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186],
							iconImageOffset: [-40, -54]
						}
					);
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
					pin.options.set("iconImageSize", [mapContainer.getBoundingClientRect().width * 0.14, mapContainer.getBoundingClientRect().width * 0.186])
					pin.options.set("iconImageOffset", [-mapContainer.getBoundingClientRect().width * 0.14 / 2, -mapContainer.getBoundingClientRect().width * 0.186 / 2])
					if (!mapContainer.closest(".contacts")) {
						const centerCoord = map.getGlobalPixelCenter();

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
			}
		});
	} catch (e) {
		console.log("Yandex Map is not initiated", e);
	}
}

export async function loadScript(src, func = false) {
	const script = document.createElement("script");
	script.src = src;
	document.body.append(script);
	if (func) script.onload = () => func();
}
document.addEventListener('DOMContentLoaded', function () {
	loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", setMap);
	contactsSliders()
})

function contactsSliders(){
	const sliders = document.querySelectorAll('.contacts__slider')

	if (!sliders.length) return;

	const devices = {
		md: 640,
		lg: 1025,
	};

	const isDesktop = () => window.matchMedia(`(min-width: ${devices.lg}px)`).matches;
	const isMob = () => window.matchMedia(`(max-width: ${devices.md - 1}px)`).matches;
	const isTablet = () => window.matchMedia(`(min-width: ${devices.md}px) and (max-width: ${devices.lg - 1}px)`).matches;

	const galleries = document.querySelectorAll("[data-gallery]");

	galleries.forEach(gallery => {

		const mainSliderNode = gallery.querySelector("[data-main-slider]");
	const sideSliderNodes = gallery.querySelectorAll("[data-side-slider]");

	const prev = gallery.querySelectorAll("[data-prev]");
	const next = gallery.querySelectorAll("[data-next]");

	let sliderMain = null;
	let sliderSide = null;

	let activeIndex = 0;
	let itemsCount = 0;

	let animate = false;

	const interleaveOffset = 0.5;

	const textSlides = gallery.querySelectorAll("[data-text-slide]");
	const titleList = gallery.querySelectorAll("[data-title]");
	const textList = gallery.querySelectorAll("[data-text]");
	const btnList = gallery.querySelectorAll(".halls__slide_link");

	function progress(slider) {
		if (slider.slides.length) {
			for (let i = 0; i < itemsCount; i++) {
				const offset = slider.slides[i].progress * (slider.width * interleaveOffset);

				slider.slides[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
				// Array.from(slider.slides)[i].querySelector(".gallery__image").style.transform = `translate3d(${offset}px, 0, 0)`;
			}
		}
	}

	function touchStart(slider) {
		for (let i = 0; i < itemsCount; i++) {
			slider.slides[i].style.transition = "";
		}
	}

	function setTransition(slider, transition) {
		if (slider.slides.length) {
			for (let i = 0; i < itemsCount; i++) {
				slider.slides[i].style.transition = `${transition}ms`;
				slider.slides[i].querySelector(".gallery__image").style.transition = `${transition}ms`;
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
	const slidersSide = [];
	sliderMain = new Swiper(mainSliderNode, {
		slidesPerView: "auto",
		simulateTouch: false,
		loop: true,
		followFinger: false,
		speed: 1000,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		init: false,
		on: {
			init: (slider) => {
				itemsCount = slider.slides.length || 0;
				// textToggle();
				progress(slider);
			},
			progress: (slider) => {
				progress(slider);
			},
			touchStart: (slider) => {
				touchStart(slider);
			},
			setTransition: (slider, transition) => {
				setTransition(slider, transition);
			},
			slideChange: (slider) => {
				activeIndex = slider.realIndex;
			},
			slideChangeTransitionStart: () => {
				// textToggle();
			},
			transitionStart: (slider) => {
				if (slider.swipeDirection === "prev") {
					slidersSide[0].slidePrev();
					slidersSide[1].slidePrev();
				} else if (slider.swipeDirection === "next") {
					slidersSide[0].slideNext();
					slidersSide[1].slideNext();
				}
			},
		},
	});

	for (let sideSliderNode of sideSliderNodes) {
		slidersSide.push(
			new Swiper(sideSliderNode, {
				slidesPerView: "auto",
				simulateTouch: false,
				speed: 1000,
				watchSlidesProgress: true,
				allowTouchMove: false,
				preventInteractionOnTransition: true,
				loop: true,
				init: false,
				on: {
					init: (slider) => {
						if (isDesktop()) {
							progress(slider);
						}
					},
					progress: (slider) => {
						if (isDesktop()) {
							progress(slider);
						}
					},
					touchStart: (slider) => {
						if (isDesktop()) {
							touchStart(slider);
						}
					},
					setTransition: (slider, transition) => {
						if (isDesktop()) {
							setTransition(slider, transition);
						}
					},
				},
			})
		);
	}
	slidersSide[0].init();
	slidersSide[1].init();

	prev.forEach(item => {
		item.addEventListener("click", () => {
			slideChange("prev");
		});
	})

	next.forEach(item => {
		item.addEventListener("click", () => {
			slideChange("next");
		});
	})

	sliderMain.init();

	return { sliderMain, sliderSide };
	})
	

	// sliders.forEach(item => {

	// 	const sliderContainer = item.closest('.contacts__map_gallery')
	// 	const navigation = sliderContainer.querySelector('.swiper_navigation')

	// 	const slider = new Swiper(item, {
	// 		slidesPerView:2.5,
	// 		slidesPerGroup: 1,
	// 		modules: [Navigation],
	// 		loop: true,
	// 		navigation: {
	// 			prevEl: navigation.querySelector('.swiper_prev'),
	// 			nextEl: navigation.querySelector('.swiper_next'),
	// 		},
	// 		spaceBetween: -42
	// 	})
	// })
}
