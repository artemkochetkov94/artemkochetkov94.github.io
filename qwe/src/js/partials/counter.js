export default (function () {
	function countingControl(element, inputEl) {
		const direction = element.dataset.action;

		// let resultCounting = false;
		switch (direction) {
			case 'minus':
			  decrement(inputEl);
			  // resultCounting = decrement(inputEl);
			  break;
			case 'plus':
			  increment(inputEl);
			  // resultCounting = increment(inputEl);
			  break;
		}

		// if (!resultCounting) return;
	}

	function increment(element) {
		let val = element.value;

		element.value = +val + 1;

		// if (element.value < 10) {
		// 	element.value = '0' + element.value;
		// }

		// return true;
	}

	function decrement(element) {
		let val = element.value;

		if (+val > 1) {
			element.value = +val - 1;

			// if (element.value < 10) {
			// 	element.value = '0' + element.value;
			// }

			// return true;
		}
	}

	function countingValidate(inputEl) {
		inputEl.value = inputEl.value.replace(/[^\d]/g, '');
	}

	const counter = document.querySelectorAll('.js-counter');

	Array.prototype.forEach.call(counter, function (item) {
		var inputEl = item.querySelector('input'),
			countingControlHandler = item.querySelectorAll('.js-counter-action');

		Array.prototype.forEach.call(countingControlHandler, function (item) {
			item.addEventListener('click', countingControl.bind(null, item, inputEl));
		});

		inputEl.addEventListener('keyup', countingValidate.bind(null, inputEl));
	});
})();