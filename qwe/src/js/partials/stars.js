export default (function () {
	const $starsWrap = $('.js-stars');

	$starsWrap.each(function () {
		const $stars = $(this).find('.js-star');

		$stars.on('click', function () {
			if ( $(this).hasClass('active') ) return;

			$stars.removeClass('active');
			$(this).addClass('active');
		});
	});
})();