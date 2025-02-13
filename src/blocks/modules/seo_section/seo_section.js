import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


export function seoSliders() {
	const seoSwipers = document.querySelectorAll('.seo__slider')

	if (!seoSwipers.length) return;

	seoSwipers.forEach(seo => {
		const seoSwiper = new Swiper(seo.querySelector('.seo__swiper'), {
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 600,
			spaceBetween: 0,
			initialSlide: 0,
			loop: true,
			modules: [Pagination, Navigation],
			navigation: {
				nextEl: seo.querySelector(".seo__slider_navigation .next_btn"),
				prevEl: seo.querySelector(".seo__slider_navigation .prev_btn"),
			},

			pagination: {
				el: seo.querySelector(".seo__slider_pagination"),
				type: "bullets",
				clickable: true,
				bulletClass: "seo_pagination_tab",
				bulletActiveClass: "active",
				renderBullet: function (current, total) {
					return `<div class="seo_pagination_tab">
						<img src="${Array.from(seo.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)"))[current].dataset.image}" alt="">
					</div>`;
				},
			},
		});
	})

}