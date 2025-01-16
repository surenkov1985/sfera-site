const menuSelectors = document.querySelectorAll('.aside__nav_link');
const header = document.querySelector('.head.fixed');
(function clickAnchors() {
	on('click', 'a[href^="#"]', function (e) {
		e.preventDefault()
		const element = document.getElementById(this.getAttribute('href').substr(1))
		if (!element) return
		const offset = -100 // Смещение на -100px

		// Получаем текущую позицию элемента и добавляем смещение
		const elementPosition = element.getBoundingClientRect().top + window.scrollY - header.getBoundingClientRect().height

		// Прокручиваем к рассчитанной позиции с плавной анимацией
		window.scrollTo({
			top: elementPosition,
			left: 0,
			behavior: 'smooth'
		})
	})
})()

document.addEventListener('scroll', function () {
	onScroll()

})

onScroll()
function onScroll() {
	var scroll_top = window.pageYOffset;
	menuSelectors.forEach(function (link) {
		const url = new URL(link.href)
		const hash = url.hash;

		const target = document.querySelector(hash);

		link.classList.remove("active");
		if (target.getBoundingClientRect().top <= header.getBoundingClientRect().height && target.getBoundingClientRect().bottom >= header.getBoundingClientRect().height) {

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