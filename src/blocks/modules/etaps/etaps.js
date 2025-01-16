import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


(function () {
	const etaps = document.querySelector('.etaps__slider')

	if (!etaps) return;

	const etapsSlider = new Swiper(etaps, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 700,
		navigation: {
			prevEl: '.etaps .swiper_prev',
			nextEl: '.etaps .swiper_next'
		}, modules: [Pagination, Navigation],
		pagination: {
			el: '.etaps .swiper-pagination',
			clickable: true
		},
		breakpoints: {

			768: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		}
	})
})()