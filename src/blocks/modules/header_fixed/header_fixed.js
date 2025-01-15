const scrollOptions = {
	rootMargin: "0px",
	threshold: 1,
};

const scrollCallback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.boundingClientRect.y < 0) {
			document.querySelector(".head.fixed").classList.add("show");
			document.querySelector("body").classList.add("is-scrolled");
		} else {
			document.querySelector("body").classList.remove("is-scrolled");
			document.querySelector(".head.fixed").classList.remove("show");
		}
	});
};
const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);
scrollObserver.observe(document.querySelector(".obs-target"));