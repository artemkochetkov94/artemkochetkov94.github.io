export default (function() {
	const sliders = document.querySelectorAll('.js-range');

	Array.prototype.forEach.call(sliders, function(item) {
		const sliderWrap = item.querySelector('.js-range-slider'),
			slider = sliderWrap.querySelector('.js-slider'),
			id = slider.getAttribute('id'),

			min = sliderWrap.dataset.min,
			max = sliderWrap.dataset.max;

		let	rangeInputMin,
			rangeInputMax,
			$range,
			sliderData;

		function sliderInit (options) {
			$(slider).ionRangeSlider({
				type: "double",
				min,
				max,
				from: min,
				to: max,
				onChange: function(data) {
					if (rangeInputMin && rangeInputMax) {
						rangeInputMin.value = data.from;
						rangeInputMax.value = data.to;
					}
				}
			});

			// если слайдер привязан к полям
			if (options.inputs == true) {
				$range = $(`#${id}`);
				sliderData = $range.data("ionRangeSlider");

				rangeInputMin.onkeydown = function() {
					sliderData.update({
						from: rangeInputMin.value
					});
				}

				rangeInputMin.onkeyup = function() {
					sliderData.update({
						from: rangeInputMin.value
					});
				}

				rangeInputMax.onkeydown = function() {
					sliderData.update({
						to: rangeInputMax.value
					});
				}

				rangeInputMax.onkeyup = function() {
					sliderData.update({
						to: rangeInputMax.value
					});
				}
			}
		}

		// если слайдер привязан к полям
		if (item.classList.contains('js-range-with-inputs')) {
			rangeInputMin = item.querySelector('.js-range-min');
			rangeInputMax = item.querySelector('.js-range-max');

			rangeInputMin.value = min;
			rangeInputMax.value = max;

			sliderInit({
				inputs: true
			});
		} else {
			sliderInit();
		}
	});
})();