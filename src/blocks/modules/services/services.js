document.addEventListener('click', function (e) {
	if (e.target.closest('.dropdown__value')) {

		const dropdown = e.target.closest('.dropdown')
		const dropdownList = dropdown.querySelector('.dropdown__list')

		if (dropdownList.classList.contains('show')) {
			dropdownList.classList.remove('show')
		} else {
			dropdownList.classList.add('show')
		}
	}

	if (e.target.closest('.dropdown__item')) {

		const dropdown = e.target.closest('.dropdown')
		const dropdownList = dropdown.querySelector('.dropdown__list')
		const dropdownItem = e.target.closest('.dropdown__item')
		const dropdownValue = dropdown.querySelector('.dropdown__value .value')


		dropdownList.classList.remove('show')
		dropdownValue.textContent = dropdownItem.textContent
	}

	if (!e.target.closest('.dropdown')) {

		const dropdown = document.querySelectorAll('.dropdown')

		dropdown.forEach(item => {
			const dropdownList = item.querySelector('.dropdown__list')
			dropdownList.classList.remove('show')
		})

	}
})

import Swiper from "swiper";

import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';


export function serviceSliders() {
	const services = document.querySelector('.services__slider')

	if (!services) return;

	const servicesSlider = new Swiper(services, {
		slidesPerView: 1,
		slidesPerGroup: 1,
		loop: true,
		spaceBetween: 20,
		speed: 700,
		navigation: {
			prevEl: '.services .swiper_prev',
			nextEl: '.services .swiper_next'
		}, modules: [Pagination, Navigation],
		pagination: {
			el: '.services .swiper-pagination',
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
}