import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';

(function () {

	const reviews = document.querySelector('.reviews__slider .swiper')

	if (!reviews) return;

	const slider = new Swiper(reviews, {
		slidesPerView: 1.1,
		spaceBetween: 12,
		modules: [Navigation],
		loop: true,
		speed: 600,
		navigation: {
			prevEl: '.reviews__slider .swiper_prev',
			nextEl: '.reviews__slider .swiper_next'
		},
		breakpoints: {
			576: {
				slidesPerView: 1.1,
				spaceBetween: 26,
			},
			768: {
				slidesPerView: 1.2,
				spaceBetween: 20,
			},
			991: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			},
			991: {
				slidesPerView: 1.2,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 1.5,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 1.8,
				spaceBetween: 34,
			}
		}
	})
})()