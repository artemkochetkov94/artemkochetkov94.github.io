export default (function () {
	const $menu = $('.js-menu-wrapper'),
		$menuToggler = $('.js-menu-toggler'),
		$menuLinks = $('.js-menu-link'),
		$menuBack = $('.js-menu-back'),
		$menuClose = $('.js-menu-close'),
		$menuHeader = $('.js-menu-header'),

		// $('.js-menu-link[data-level="1"]'),
		// $('.js-menu-link[data-level="2"]'),
		$submenuLevel1 = $('.js-submenu[data-level="1"]'),
		$submenuLevel2 = $('.js-submenu[data-level="2"]');

	let prevHeader = 'Каталог товаров';

	$menuToggler.on('click', function (e) {
		e.stopPropagation();
		$menu.toggleClass('active');
	});

	$menu.on('click', function(e) {
		if (!e.target.closest('.menu')) {
			$menu.toggleClass('active');
		}
	});

	$menuClose.on('click', function () {
		$menu.removeClass('active');
	});

	$menuBack.on('click', function () {
		if ( $('.js-submenu[data-level="2"].active').length ) {
			$submenuLevel2.removeClass('active');

			$menuHeader.text(prevHeader);
		} else {
			$submenuLevel1.removeClass('active');

			$menuHeader.text('Каталог товаров');
		}
	});

	$menuLinks.on('click', function (e) {
		e.preventDefault();

		if ( $(this).attr('data-level') == 1 ) {
			$submenuLevel1.removeClass('active');

			$(`#${$(this).attr('href')}`).addClass('active');
		}

		if ( $(this).attr('data-level') == 2 ) {
			$submenuLevel2.removeClass('active');

			$(`#${$(this).attr('href')}`).addClass('active');
		}

		prevHeader = $menuHeader.text();

		$menuHeader.text($(this).text());
	});
})();