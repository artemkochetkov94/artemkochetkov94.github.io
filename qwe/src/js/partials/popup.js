export default (function () {
	const popupHandler = document.querySelectorAll('.js-popup');

	Array.prototype.forEach.call(popupHandler, function(item) {
		const popup = document.querySelector(item.dataset.popupSelector);

		item.addEventListener('click', function() {
			$.magnificPopup.open({
				items: {
					src: popup
				},
				type: 'inline',
				fixedContentPos: true,
				closeMarkup: '<button class="popup-close mfp-close btn-cross" type="button" title="%title%"></button>',
				tClose: 'Закрыть'
			}, 0);
		});
	});
})();