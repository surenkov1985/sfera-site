import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function projectsSlider() {
	const projects = document.querySelector(".projects__slider");

	if (!projects) return;

	const projectsSlider = new Swiper(projects, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		// loop: true,
		spaceBetween: 20,
		createElements: true,
		speed: 1000,
		// centeredSlides: true,
		navigation: {
			prevEl: ".projects .swiper_prev",
			nextEl: ".projects .swiper_next",
		},
		modules: [Pagination, Navigation],
		pagination: {
			el: ".projects .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
		},
	});
}
