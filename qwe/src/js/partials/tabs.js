export default (function () {
	const $tabs = $('.js-tabs');

	$tabs.each(function () {
		const $tabsNav = $(this).find('.js-tab-nav'),
			$tabsContent = $(this).find('.js-tab-content');

		$tabsNav.on('click', function () {
			const id = $(this).attr('data-id');

			$tabsNav.removeClass('active');
			$(this).addClass('active');

			$tabsContent.removeClass('active');

			$tabsContent.each(function () {
				if ( $(this).attr('data-id') == id ) {
					$(this).addClass('active');
					return false;
				}
			});
		});
	});
})();