import "./import/modules";
import "./import/components";

document.addEventListener('DOMContentLoaded', function () {

	const numberLabels = document.querySelectorAll('.label_number')

	if (numberLabels.length) {
		numberLabels.forEach((label) => {

			const input = label.querySelector('input'),
				decBtn = label.querySelector('.dec'),
				incBtn = label.querySelector('.inc');
		})
	}
})