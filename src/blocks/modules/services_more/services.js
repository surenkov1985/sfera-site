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