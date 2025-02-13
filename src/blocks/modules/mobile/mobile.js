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

class ShapeOverlays {
	constructor(elm) {
		this.elm = elm;
		this.path = elm.querySelectorAll("path");
		this.numPoints = 3;
		this.duration = 800;
		this.delayPointsArray = [];
		this.delayPointsMax = 180;
		this.delayPerPath = 70;
		this.timeStart = Date.now();
		this.isOpened = false;
		this.isAnimating = false;
	}
	toggle() {
		this.isAnimating = true;
		const range = Math.random() * Math.PI * 2;
		for (var i = 0; i < this.numPoints; i++) {
			const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
			this.delayPointsArray[i] = ((Math.sin(radian + range) + 1) / 2) * this.delayPointsMax;
		}
		if (this.isOpened === false) {
			this.open();
		} else {
			this.close();
		}
	}
	open() {
		this.isOpened = true;
		this.elm.classList.add("is-opened");
		this.timeStart = Date.now();
		this.renderLoop();
	}
	close() {
		this.isOpened = false;
		this.elm.classList.remove("is-opened");
		this.timeStart = Date.now();
		this.renderLoop();
	}
	updatePath(time) {
		const points = [];
		for (var i = 0; i < this.numPoints; i++) {
			points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
		}

		let str = "";
		str += this.isOpened ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 100;
			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
		}
		str += this.isOpened ? `V 0 H 0` : `V 100 H 0`;
		return str;
	}
	render() {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
			}
		}
	}
	renderLoop() {
		this.render();
		if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
			requestAnimationFrame(() => {
				this.renderLoop();
			});
		} else {
			this.isAnimating = false;
		}
	}
}
const elmOverlay = document.querySelector(".shape-overlays");
const overlay = new ShapeOverlays(elmOverlay);
(function initMobile() {
	const elmHamburger = document.querySelectorAll(".btn_burger");
	// const gNavItems = document.querySelectorAll(".global-menu__item");

	elmHamburger.forEach(elem => {


		const whiteLogo = document.querySelector(".logo_white");
		const blackLogo = document.querySelector(".logo_black");
		const mobile = document.querySelector(".mobile");
		const body = document.body;

		elem.addEventListener("click", (e) => {
			// if (overlay.isAnimating) {
			// 	return false;
			// }
			// overlay.toggle();
			if (overlay.isOpened === true) {
				closeMobile(elem)
				// elem.classList.add("active");
				// whiteLogo.style.display = "none";
				// blackLogo.style.display = "block";
				// body.classList.add("no-scroll");
				// setTimeout(() => {
				// 	mobile.classList.add("show");
				// }, 800);
			} else {
				openMobile(elem)
				// elem.classList.remove("active");
				// whiteLogo.style.display = "block";
				// blackLogo.style.display = "none";
				// mobile.classList.remove("show");
				// body.classList.remove("no-scroll");
			}
		});
	})

})();

export function openMobile(elem) {
	const whiteLogo = document.querySelector(".logo_white");
	const blackLogo = document.querySelector(".logo_black");
	const mobile = document.querySelector(".mobile");
	const body = document.body;
	const elmHamburger = document.querySelectorAll(".btn_burger");
	if (overlay.isAnimating) {
		return false;
	}
	mobile.style.opacity = 1
	document.querySelector('.shape-overlays').style.opacity = 1
	overlay.toggle();
	// elem.classList.add("active");
	// whiteLogo.style.display = "none";
	// blackLogo.style.display = "block";
	// body.classList.add("no-scroll");
	// setTimeout(() => {
	// 	mobile.classList.add("show");
	// }, 800);


	elem.classList.add("active");
	whiteLogo.style.display = "none";
	blackLogo.style.display = "block";
	body.classList.add("no-scroll");
	setTimeout(() => {
		mobile.classList.add("show");
	}, 800);


}

export function closeMobile(elem) {
	const whiteLogo = document.querySelector(".logo_white");
	const blackLogo = document.querySelector(".logo_black");
	const mobile = document.querySelector(".mobile");
	const body = document.body;
	const elmHamburger = document.querySelectorAll(".btn_burger");
	overlay.toggle();

	// if (overlay.isAnimating) {
	// 	return false;
	// }

	elem.classList.remove("active");
	whiteLogo.style.display = "block";
	blackLogo.style.display = "none";
	mobile.classList.remove("show");
	body.classList.remove("no-scroll");


}

(function () {
	document.addEventListener("click", function (e) {
		if (e.target.closest(".accordion__title") && !e.target.href) {
			const accordion = e.target.closest(".accordion");
			const accordionBody = accordion.querySelector(".accordion__body");
			const accordionContent = accordion.querySelector(".accordion__content");

			if (accordion.classList.contains("open")) {
				accordionBody.style.maxHeight = "0px";
				accordion.classList.remove("open");
			} else {
				accordion.classList.add("open");
				accordionBody.style.maxHeight = accordionContent.scrollHeight + "px";
			}
		}
	});
})();
