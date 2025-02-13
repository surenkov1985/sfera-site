export function initCounters() {
	const counters = document.querySelectorAll('.label_counter');

	if (counters.length) {
		counters.forEach(counter => {
			const incBtn = counter.querySelector('.inc'),
				decBtn = counter.querySelector('.dec'),
				input = counter.querySelector('input');

			incBtn.addEventListener('click', function () {
				input.value = parseInt(input.value) + parseInt(input.step)
				decBtn.removeAttribute('disabled')
			})

			decBtn.addEventListener('click', function () {

				if (parseInt(input.value - 1) > 0) {
					input.value = parseInt(input.value) - parseInt(input.step)
				} else {
					input.value = 0
					decBtn.setAttribute('disabled', "")
				}

			})
		})
		console.log('cart');
	}

}