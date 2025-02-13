import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "swiper/css";
import "swiper/css/pagination";

export function sampleSlider() {
	const sample = document.querySelector(".sample__docks_slider");

	if (!sample) return;

	const slider = new Swiper(sample, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 1000,
		navigation: {
			prevEl: ".sample__docks_prev",
			nextEl: ".sample__docks_next",
		},
		modules: [Pagination, Navigation],
		pagination: {
			el: ".sample__docks .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			420: {
				slidesPerView: 1,
				spaceBetween: 35,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
		},
	});
}

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});
