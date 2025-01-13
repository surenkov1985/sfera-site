import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


(function () {
	const docks = document.querySelector('.docks__slider')

	if (!docks) return;

	const docksSlider = new Swiper(docks, {
		slidesPerView: 1.2,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 700,
		navigation: {
			prevEl: '.docks .swiper_prev',
			nextEl: '.docks .swiper_next'
		}, modules: [Pagination, Navigation],
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
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		}
	})
})()