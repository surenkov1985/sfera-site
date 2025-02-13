import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


export function managersSlider() {
	const managers = document.querySelector('.managers__slider')

	if (!managers) return;

	const managersSlider = new Swiper(managers, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 700,
		navigation: {
			prevEl: '.managers .swiper_prev',
			nextEl: '.managers .swiper_next'
		}, modules: [Pagination, Navigation],
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
			},
		}
	})
}