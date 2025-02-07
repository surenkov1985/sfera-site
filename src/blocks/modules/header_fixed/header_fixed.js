const scrollOptions = {
	rootMargin: "0px",
	threshold: 1,
};

const scrollCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.boundingClientRect.y < 0) {
			document.querySelector(".head.fixed").classList.add("show");
			document.querySelector("body").classList.add("is-scrolled");

			document.querySelector('.cart__aside').style.top = '110px';
		} else {
			document.querySelector("body").classList.remove("is-scrolled");
			document.querySelector(".head.fixed").classList.remove("show");
			document.querySelector('.cart__aside').style.top = '20px';
		}
	});
};
const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
scrollObserver.observe(document.querySelector(".obs-target"));