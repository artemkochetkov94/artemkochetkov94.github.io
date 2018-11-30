$(document).ready(function() {

	media9 = 992;
	media7 = 768;

	if ( $(window).scrollTop() >=150 ) {
		$('.page-header').addClass('page-header--fixed');
	}
	
	
	
	
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() >=150 ) {
			$('.page-header').addClass('page-header--fixed');
		} else {
			$('.page-header').removeClass('page-header--fixed');
		}
	})

	/* ********************* */
	/* ****** animate ****** */
	/* ********************* */
	
	// анимация на главной странице hero - section
	$('.main-hero__inner').removeClass('scale');
	
	
	
	
	
	
	function jsAnimate(element, className) {
		$(element).each(function() {
			vh = $(window).height();
			s_top = $(window).scrollTop();
			posTitle = $(this).offset().top;
			if ( s_top > ( posTitle - vh + 50 ) ) {
				$(this).addClass(className);
			} else {
				$(this).removeClass(className);
			}
		})
	}
	
	
	
	
	
	// анимация заголовков
	
	// страница index
	$('.omg__title, '
	+ '.our-story__title, '
	+ '.omg-way__title, '
	+ '.mentorship-main__title, '
	+ '.team__title, '
	
	// страница services
	+ '.training__title, '
	+ '.mentorship__title').addClass('js-title-animate');
	
	jsAnimate('.js-title-animate', 'title-animate');
	
	
	
	
	
	// анимация списка
	
	// страница index
	$('.omg__item').addClass('js-list-animate');
	
	jsAnimate('.js-list-animate', 'list-animate');
	
	
	
	
	
	// grid__media
	
	$('.grid-media__media').addClass('js-picture-animate');
	
	jsAnimate('.js-picture-animate', 'picture-animate');
	
	
	
	
	
	$(window).scroll(function(event) {
		// заголовки
		jsAnimate('.js-title-animate', 'title-animate');
	
		// список
		jsAnimate('.js-list-animate', 'list-animate');
	
		// grid__media
		jsAnimate('.js-picture-animate', 'picture-animate');
	});

	/* *********************** */
	/* ***** MOBILE-MENU ***** */
	/* *********************** */
	
	$('.burger').click(function() {
		if ( $('.mobile-menu').hasClass('active') ) {
			$('body').removeClass('no-scroll');
			$('.mobile-menu').removeClass('active');
			$('.page-header--transparent').removeClass('menu-open');
		} else {
			$('body').addClass('no-scroll');
			$('.mobile-menu').addClass('active');
			$('.page-header--transparent').addClass('menu-open');
		}
	});
	
	$('.mobile-submenu-link').click(function(e) {
		e.preventDefault();
		$(this).next().toggleClass('mobile-submenu--active');
		$(this).toggleClass('mobile-submenu-link--active');
	});
	
	$(window).resize(function() {
		if (window.matchMedia('(min-width: ' + (media9 + 1) + 'px)').matches) {
			if ( $('.mobile-menu').hasClass('active') ) {
				$('body').removeClass('no-scroll');
				$('.mobile-menu').removeClass('active');
				$('.page-header--transparent').removeClass('menu-open');
			}
		}
	})

	/* ************************** */
	/* ***** CALLBACK MODAL ***** */
	/* ************************** */
	
	var media1500 = 1500;
	
	$.fn.visible = function(partial) {
	
		var $t				= $(this),
			$w				= $(window),
			viewTop			= $w.scrollTop(),
			viewBottom		= viewTop + $w.height(),
			_top			= $t.offset().top,
			_bottom			= _top + $t.height(),
			compareTop		= partial === true ? _bottom : _top,
			compareBottom	= partial === true ? _top : _bottom;
			
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	
	};
	
	
	
	
	
	$.fn.visible100 = function(partial) {
	
		var $t				= $(this),
			$w				= $(window),
			viewTop			= $w.scrollTop(),
			viewBottom		= viewTop + $w.height(),
			_top			= $t.offset().top + 70,
			_bottom			= _top + $t.height(),
			compareTop		= partial === true ? _bottom : _top,
			compareBottom	= partial === true ? _top : _bottom;
			
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	
	};
	
	
	
	
	
	$('.phone-button').click(function() {
		$('.modal-phone').toggleClass('active');
		var el = $('.page-footer');
		if (el.visible(true)) {
			$('.modal-phone').addClass("posAbs"); 
		} else {
			$('.modal-phone').removeClass("posAbs");
		}
	});
	
	
	
	
	
	$('.modal-phone__close').click(function(e) {
		e.preventDefault();
		$('.modal-phone').removeClass('active');
	});
	
	
	
	
	
	$(window).scroll(function(event) {
		var el = $('.page-footer');
	
		if (el.visible(true)) {
			$('.modal-phone').addClass("posAbs"); 
		} else {
			$('.modal-phone').removeClass("posAbs");
		}
	})
	
	
	
	
	
	function modalPhoneDelete() {
		if ( ($(window).outerWidth() < media1500 + 1) && ( $('.modal-phone').hasClass('active') ) ) {
			$('.modal-phone').removeClass('active');
		}
	}
	
	
	
	
	
	$(window).resize(function() {
		modalPhoneDelete();
	});

	/* ****************** */
	/* ***** VIDEO ***** */
	/* ***************** */
	
	function getArtistId() {
		return $('.video-block').attr('data-video');
	}
	
	function loadPlayer() { 
		if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			window.onYouTubePlayerAPIReady = function() {
				onYouTubePlayer();
			};
		} else {
			onYouTubePlayer();
		}
	}
	
	var player;
	function onYouTubePlayer() {
		player = new YT.Player('player', {
			videoId: getArtistId(),
			playerVars: { controls: 1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	};
	
	//var done = false;
	function onPlayerStateChange(event) {
		if (event.data == 1) {
			$('.video-block').addClass('video-block--play');
		}
		if (event.data == 2) {
			$('.video-block').removeClass('video-block--play');
		}
	}
	
	function onPlayerReady(event) {
		player.playVideo();
	};
	
	$('.video-block').click(function() {
		loadPlayer();
	});

	/* ********************* */
	/* ******* LABEL ******* */
	/* ********************* */
	
	function materialLabel() {
		$('.js-label-fly input').each(function() {
			if ($.trim($(this).val()) !== '') {
				$(this).next('label').addClass('is-active');
			}
		});
		$('.js-label-fly input').on('change', function() {
			if ($.trim($(this).val()) !== '') {
				$(this).next('label').addClass('is-active');
			} else {
				$(this).next('label').removeClass('is-active');
			}
		});
	};
	materialLabel();

	/* ********************* */
	/* ***** accordeon ***** */
	/* ********************* */
	$('.accordeon__item-title').click(function() {
	
		accordeonActive = $(this).parent('.accordeon__item');
		accordeonActiveInner = accordeonActive.find('.accordeon__inner');
		accordeonActiveContent = accordeonActiveInner.find('.accordeon__content');
	
		if ( accordeonActive.hasClass('accordeon__item--active') ) {
			accordeonActive.removeClass('accordeon__item--active');
			accordeonActiveInner.css({
				'max-height' : 0
			});
			return;
		}
	
		$('.accordeon__item').removeClass('accordeon__item--active');
		$('.accordeon__inner').css({
			'max-height' : 0
		});
	
	
		accordeonActive.addClass('accordeon__item--active');
	
		accordeonActiveInner.css({
			'max-height' : accordeonActiveContent.outerHeight()
		});
	});
	
	$(window).resize(function() {
		var rAccordeonActive = $('.accordeon__item--active');
		var rAccordeonInner = rAccordeonActive.find('.accordeon__inner');
		var rAccordeonContent = rAccordeonInner.find('.accordeon__content');
		rAccordeonInner.css({
			'max-height' : rAccordeonContent.outerHeight() + 40
		})
	})

	/* ********************* */
	/* ***** CONTACT-US PAGE ***** */
	/* ********************* */
	
	$('.business-control__item').click(function() {
		$('.business-control__item').removeClass('active');
		$(this).addClass('active');
		if ( $('.business-control__item:nth-child(1)').hasClass('active') ) {
			$('.business-check').addClass('show');
		} else {
			$('.business-check').removeClass('show');
		}
	})

	/* ********************* */
	/* ***** BLOG-PAGE ***** */
	/* ********************* */
	
	$('.blog-side').stick_in_parent({
		'offset_top' : 90
	});
	
	if (window.matchMedia('(max-width: ' + media7 + 'px)').matches) {
		$('.blog-side').trigger("sticky_kit:detach");
	}
	
	$(window).resize(function() {
		if (window.matchMedia('(max-width: ' + media7 + 'px)').matches) {
			$('.blog-side').trigger("sticky_kit:detach");
		} else {
			$('.blog-side').stick_in_parent({
				'offset_top' : 90
			});
		}
	})
	
	
	
	
	
	$('.panel-category__title').click(function() {
		if (window.matchMedia('(max-width: ' + media7 + 'px)').matches) {
			$(this).closest('.panel-category').toggleClass('panel-category--show');
		}
	})

	/* ******************** */
	/* ***** MAP-FULL ***** */
	/* ******************** */
	
	$('.map-link').click(function(e) {
		e.preventDefault();
		$('#map-full').addClass('map-full--show');
		$('body').addClass('no-scroll');
	})
	
	$('.map-close').click(function() {
		$('#map-full').removeClass('map-full--show');
		$('body').removeClass('no-scroll');
	})

	/* *********************** */
	/* ***** GOOGLE-MAP ****** */
	/* *********************** */
	
	// function initMap() {
	// 	var uluru = {lat: 25.928806, lng: -80.136430};
	// 	var map = new google.maps.Map(document.getElementById('map'), {
	// 		zoom: 17,
	// 		center: uluru
	// 	});
	// 	var marker = new google.maps.Marker({
	// 		position: uluru,
	// 		map: map
	// 	});
	// }
	// initMap();
	
	$('.contacts-map-link').click(function() {
		$('div.gm-style button[title="Включить полноэкранный режим"]').trigger('click');
		$('div.gm-style button[title="Toggle fullscreen view"]').trigger('click');
		map.setCenter({lat: 25.928806, lng: -80.136430});
	})

});