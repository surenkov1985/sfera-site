const menuSelectors = document.querySelectorAll(".aside__nav_link");
const header = document.querySelector(".head.fixed");
(function clickAnchors() {
	on("click", 'a[href^="#"]', function (e) {
		e.preventDefault();
		const element = document.getElementById(this.getAttribute("href").substr(1));
		if (!element) return;
		const offset = -100; // Смещение на -100px

		// Получаем текущую позицию элемента и добавляем смещение
		const elementPosition = element.getBoundingClientRect().top + window.scrollY - header.getBoundingClientRect().height;

		// Прокручиваем к рассчитанной позиции с плавной анимацией
		window.scrollTo({
			top: elementPosition,
			left: 0,
			behavior: "smooth",
		});
	});
})();

document.addEventListener("scroll", function () {
	onScroll();
});

onScroll();
function onScroll() {
	var scroll_top = window.pageYOffset;
	menuSelectors.forEach(function (link) {
		const url = new URL(link.href);
		const hash = url.hash;

		const target = document.querySelector(hash);

		link.classList.remove("active");
		if (
			target.getBoundingClientRect().top <= header.getBoundingClientRect().height &&
			target.getBoundingClientRect().bottom >= header.getBoundingClientRect().height
		) {
			link.classList.add("active");
		} else {
			// link.classList.remove("active");
		}
	});
}

function on(event, object, func = function () { }) {
	document.addEventListener(event, function (e) {
		const eTarget = e.target.closest(object);
		if (eTarget == null) return;
		func.call(eTarget, e);
	});
}

(function () {
	document.addEventListener("click", function (e) {
		if (e.target.closest(".workers__card_more")) {
			if (e.target.closest(".workers__card")) {
				const workers = document.querySelectorAll(".workers__cards_item");

				workers.forEach((worker) => {
					const popup = worker.querySelector(".workers__popup");

					popup.classList.remove("show");
				});
				const cardItem = e.target.closest(".workers__cards_item");
				console.log(
					cardItem.closest(".workers__cards_list").getBoundingClientRect(),
					cardItem.getBoundingClientRect(),
					window.getComputedStyle(cardItem.closest(".workers__cards_list"))["gap"]
				);
				const popup = cardItem.querySelector(".workers__popup");

				popup.style.width = cardItem.closest(".workers__cards_list").getBoundingClientRect().width + "px";
				if (cardItem.closest(".workers__cards_list").getBoundingClientRect().x === cardItem.getBoundingClientRect().x) {
					popup.style.left = 0;

					if (cardItem.closest(".workers__cards_list").getBoundingClientRect().width === cardItem.getBoundingClientRect().width) {
						const gap = parseInt(window.getComputedStyle(cardItem.closest(".workers__cards_list"))["gap"], 10);

						popup.style.height = cardItem.getBoundingClientRect().height * 2 + gap + "px";

						popup.classList.add("column");
					} else {
						popup.classList.remove("column");
					}
				} else {
					popup.style.left = "auto";
				}
				popup.classList.add("show");
			} else if (e.target.closest(".workers__popup")) {
				const popup = e.target.closest(".workers__popup");

				popup.classList.remove("show");
			}
		}
	});
})();

import Swiper from "swiper";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

(function () {
	const who = document.querySelectorAll(".who");

	if (!who.length) return;

	who.forEach(elem => {
		const slider = elem.querySelector('.swiper')

		if (!slider) return
		const whoSlider = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			spaceBetween: 20,
			speed: 700,
			navigation: {
				prevEl: elem.querySelector(".swiper_prev"),
				nextEl: elem.querySelector(".swiper_next"),
			},
			modules: [Pagination, Navigation],
			pagination: {
				el: elem.querySelector(".swiper-pagination"),
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
					slidesPerView: slider.dataset.desctopSlides ? +slider.dataset.desctopSlides : 3,
				},
			},
		});
	})

})();

(function () {
	const gallery = document.querySelectorAll(".gallery");

	if (!gallery.length) return;

	gallery.forEach(elem => {
		const slider = elem.querySelector('.swiper')

		if (!slider) return
		const gallerySlider = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			spaceBetween: 20,
			speed: 700,
			navigation: {
				prevEl: elem.querySelector(".swiper_prev"),
				nextEl: elem.querySelector(".swiper_next"),
			},
			modules: [Pagination, Navigation],
			pagination: {
				el: elem.querySelector(".swiper-pagination"),
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
					slidesPerView: slider.dataset.desctopSlides ? +slider.dataset.desctopSlides : 3,
				},
			},
		});
	})

})();
