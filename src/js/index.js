import "./import/modules";
import "./import/components";
import barba from '@barba/core/';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap } from "gsap";
import { docksSlider } from "../blocks/modules/docks/docks";
import { initCounters } from "../blocks/modules/cart/cart";
import { loadScript, setMap } from "../blocks/modules/contacts/contacts";
import { etapsSlider } from "../blocks/modules/etaps/etaps";
import { firstSliders } from "../blocks/modules/first_index/first_index";
import { managersSlider } from "../blocks/modules/managers/managers";
import { newsSlider } from "../blocks/modules/news/news";
import { projectsSlider } from "../blocks/modules/projects/projects";
import { reviewsSlider } from "../blocks/modules/reviews/reviews";
import { sampleSlider } from "../blocks/modules/sample/sample";
import { seoSliders } from "../blocks/modules/seo_section/seo_section";
import { serviceSliders } from "../blocks/modules/services/services";
import { gallerySliders, whoSliders } from "../blocks/modules/workers/workers";
import { closeMobile } from "../blocks/modules/mobile/mobile";

const ease = {
	exponentialIn: (t) => {
		return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
	},
	exponentialOut: (t) => {
		return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
	},
	exponentialInOut: (t) => {
		return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
	},
	sineOut: (t) => {
		const HALF_PI = 1.5707963267948966;
		return Math.sin(t * HALF_PI);
	},
	circularInOut: (t) => {
		return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
	},
	cubicIn: (t) => {
		return t * t * t;
	},
	cubicOut: (t) => {
		const f = t - 1.0;
		return f * f * f + 1.0;
	},
	cubicInOut: (t) => {
		return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
	},
	quadraticOut: (t) => {
		return -t * (t - 2.0);
	},
	quarticOut: (t) => {
		return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
	},
};
const menuSelectors = document.querySelectorAll(".aside__nav_link");
const header = document.querySelector(".head.fixed");

class PageOverlays {
	constructor(elm) {
		this.elm = elm;
		this.path = elm.querySelectorAll('path');
		this.numPoints = 2;
		this.duration = 600;
		this.delayPointsArray = [];
		this.delayPointsMax = 0;
		this.delayPerPath = 200;
		this.timeStart = Date.now();
		this.isOpened = false;
		this.isAnimating = false;
	}
	toggle() {
		this.isAnimating = true;
		for (var i = 0; i < this.numPoints; i++) {
			this.delayPointsArray[i] = 0;
		}
		if (this.isOpened === false) {
			this.open();
		} else {
			this.close();
		}
	}
	open() {
		this.isOpened = true;
		this.elm.classList.add('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	close() {
		this.isOpened = false;
		this.elm.classList.remove('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	updatePath(time) {
		const points = [];
		for (var i = 0; i < this.numPoints; i++) {
			const thisEase = this.isOpened ?
				(i == 1) ? ease.cubicOut : ease.cubicInOut :
				(i == 1) ? ease.cubicInOut : ease.cubicOut;
			points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
		}

		let str = '';
		str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = (i + 1) / (this.numPoints - 1) * 100;
			const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
		}
		str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
		return str;
	}
	render() {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
			}
		}
	}
	renderLoop() {
		this.render();
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderLoop();
			});
		}
		else {
			this.isAnimating = false;
		}
	}
}

function initScripts() {
	docksSlider()
	initCounters()
	setMap()
	etapsSlider()
	firstSliders()
	managersSlider()
	newsSlider()
	projectsSlider()
	reviewsSlider()
	sampleSlider()
	seoSliders()
	serviceSliders()
	whoSliders()
	gallerySliders()
}
function clickAnchors() {
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
}

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

		if (target) {
			link.classList.remove("active");
			if (
				target.getBoundingClientRect().top <= header.getBoundingClientRect().height &&
				target.getBoundingClientRect().bottom >= header.getBoundingClientRect().height
			) {
				link.classList.add("active");
			} else {
				// link.classList.remove("active");
			}
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
	const menuSelectors = document.querySelectorAll(".aside__nav_link");
const header = document.querySelector(".head.fixed");
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

		if (!!e.target.closest('a')) {
			if (e.target.closest('a').href === this.location.href) e.preventDefault()
		}

	});
})();
document.addEventListener('DOMContentLoaded', function () {
	loadScript(window.location.protocol + "//api-maps.yandex.ru/2.1.79/?lang=ru_RU", setMap);
	initScripts()

	const numberLabels = document.querySelectorAll('.label_number');
	const tl = gsap.timeline();
	const elmOverlay = document.querySelector(".page-overlays");

	const pageOverlay = new PageOverlays(elmOverlay);

	if (numberLabels.length) {
		numberLabels.forEach((label) => {

			const input = label.querySelector('input'),
				decBtn = label.querySelector('.dec'),
				incBtn = label.querySelector('.inc');
		})
	}

	const lenis = new Lenis({
		autoRaf: true,
		smooth: true,
		lerp: 0.06,
		getSpeed: true,
		multiplier: 0.6,
		scrollFromAnywhere: true,
		// autoResize: true,
		getDirection: true,
		smartphone: {
			smooth: !0,
			breakpoint: 767,
			smooth: true,
			lerp: 0.06,
		},
		tablet: {
			smooth: !0,
			breakpoint: 1024,
			smooth: true,
			lerp: 0.06,
			multiplier: 4,
		},
		prevent: (node) => node.closest(".mobile") || window.getComputedStyle(node).overflow === "auto" || window.getComputedStyle(node).overflow === "scroll" || node.closest(".fancybox__container"),
	})

	let scrollX = 0
	let scrollY = 0

	barba.init({
		preventRunning: true,
		transitions: [{
			name: 'opacity-transition',
			async leave(data) {

				if (data.trigger === 'back' || data.trigger === 'popstate') {
					scrollX = barba.history.previous.scroll.x;
					scrollY = barba.history.previous.scroll.y;
				} else {
					scrollX = 0
					scrollY = 0
				}
				pageOverlay.toggle()
				await tl.to(data.current.container, {
					opacity: 1, duration: 0.6
				});

			},
			async enter(data) {

				window.scrollTo(scrollX, scrollY);
				await tl.from(data.next.container, {
					opacity: 1, duration: 0.1
				});
				pageOverlay.toggle()

			}
		}]
	})
	barba.hooks.beforeEnter(({ current, next }) => {
		initScripts()
		if (document.querySelector('.mobile').classList.contains('show')) {
			const burgerBtn = document.querySelector('.btn_burger.active')
			document.querySelector('.mobile').style.opacity = 0
			document.querySelector('.shape-overlays').style.opacity = 0
			closeMobile(burgerBtn)
		};

	});

	barba.hooks.enter(() => {
		initScripts()

	});
})

