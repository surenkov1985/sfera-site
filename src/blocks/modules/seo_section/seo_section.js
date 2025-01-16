import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


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
	const seo = document.querySelector('.seo__swiper')

	if (!seo) return;
	const seoSwiper = new Swiper(seo, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		speed: 600,
		spaceBetween: 0,
		initialSlide: 0,
		loop: true,
		modules: [Pagination, Navigation],
		navigation: {
			nextEl: ".seo__slider_navigation .next_btn",
			prevEl: ".seo__slider_navigation .prev_btn",
		},

		pagination: {
			el: ".seo__slider_pagination",
			type: "bullets",
			clickable: true,
			bulletClass: "seo_pagination_tab",
			bulletActiveClass: "active",
			renderBullet: function (current, total) {
				return `<div class="seo_pagination_tab">
						<img src="${Array.from(document.querySelectorAll(".seo__swiper .swiper-slide:not(.swiper-slide-duplicate)"))[current].dataset.image}" alt="">
					</div>`;
			},
		},
	});
})()