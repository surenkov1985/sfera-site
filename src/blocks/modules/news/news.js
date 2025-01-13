import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


(function () {
	const news = document.querySelector('.news__slider')

	if (!news) return;

	const newsSlider = new Swiper(news, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 700,
		navigation: {
			prevEl: '.news .swiper_prev',
			nextEl: '.news .swiper_next'
		}, modules: [Pagination, Navigation],
		pagination: {
			el: '.news .swiper-pagination',
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