import { gsap } from "gsap"

(function () {
	document.addEventListener('click', function (e) {

		const gs = gsap.timeline()
		if (e.target.closest('.accordion_title')) {
			const accordion = e.target.closest('.accordion')
			const accordionBody = accordion.querySelector('.accordion_body')
			const accordionContent = accordionBody.querySelector('.accordion_content')

			if (accordion.classList.contains('active')) {
				accordion.classList.remove('active')
				// accordionBody.style.maxHeight = 0
				gsap.to(accordionBody, { maxHeight: 0 })
			} else {
				accordion.classList.add('active')
				gsap.to(accordionBody, { maxHeight: accordionContent.getBoundingClientRect().height })
				// accordionBody.style.maxHeight = accordionContent.getBoundingClientRect().height + 'px'
			}
		}
	})
})()