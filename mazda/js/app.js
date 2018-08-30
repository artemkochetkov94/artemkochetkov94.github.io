"use strict";

var m10 = 1023;
var m7 = 767;

(function() { // closest ie
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function() { // matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

document.addEventListener("DOMContentLoaded", function(event) { 

	labelFly();

	popup();
	popupAll();
	popupBasket();

	togglerVisibility();
	map();
	slider();
	blockChoice();
	quantityCounter();
	basketItem();

	accessoriesCarousel();
	cardAccessoriesCarousel();
	offersCarousel();
	gadgetsMiniCarousel();

	popupKasko();

	var route = $('body').attr('data-route');

		switch (route) {
			case 'homepage':
				heroCarousel();
				break;
			case 'car':
				carGallery();
				carMoveSide();
				break;
			case 'category':
				heroCarousel();
				hoverGallery();

				(function() {
					var formEl = document.getElementById('js-car-filter'),
						formResetBtn = formEl.querySelector('.js-filter-reset'),
						selects	= formEl.querySelectorAll('.js-select');

					formResetBtn.addEventListener('click', function() {
						formEl.reset();
						$('.js-select').selectric('refresh');
						// 1
						// Array.prototype.forEach.call(sliders, function(item) {
							// $(item).data("ionRangeSlider").reset();
						// });
					});

					var carFilter = document.querySelector('.car-filter'),
						carFilterAllBtn = document.querySelector('.js-car-filter-open-all');
					carFilterAllBtn.addEventListener('click', function() {
						carFilter.classList.add('active');
					});
				})();

				break;
			case 'special-offers':
				specialOffersLoad();
				break;

			case 'car-sale':
				carSaleFormToggleTitle();
				break;

			case 'kasko':
				filling();
				break;

			case 'credit':
				filling();
				break;

	}

	function isThrottling(func, ms) {
	
		var isThrottled = false,
			savedArgs,
			savedThis;
	
		function wrapper() {
	
			if (isThrottled) {
				savedArgs = arguments;
				savedThis = this;
				return;
			}
	
			func.apply(this, arguments);
	
			isThrottled = true;
	
			setTimeout(function() {
				isThrottled = false;
				if (savedArgs) {
					wrapper.apply(savedThis, savedArgs);
					savedArgs = savedThis = null;
				}
			}, ms);
		}
	
		return wrapper;
	}

	// header
		window.animateDelay = (function() {
		
			return {
		
				delay: function(el, start, step, duration) {
					var elements = Array.apply(null, el);
					elements.forEach(function(item, i) {
						item.style.transitionDelay = (start + (i * step)) + 's';
					});
					return ( (Array.from(el).length * step) + start + duration);
				},
		
				reverseDelay: function(el, start, step) {
					var elements = Array.apply(null, el);
					elements.forEach(function(item, i) {
						item.style.transitionDelay = (start - (i * step)) + 's';
					})
				}
		
			}
		
		})();
		window.swimming = (function() {
			return {
				toSwim: function(el) {
					if (!el.classList.contains('out')) {
						el.classList.add('out');
					}
				},
				dontSwim: function(el) {
					if (el.classList.contains('out')) {
						el.classList.remove('out');
					}
				}
			}
		})();
		(function() {
		
		
		
		
		
			var pageWrapper = document.querySelector('.p-wrapper'),
		
				header = pageWrapper.querySelector('.p-header'),
				// pageContent = pageWrapper.querySelector('.p-content'),
				// headerFixed	= pageWrapper.querySelector('.p-header-fixed'),
		
				nav					= header.querySelector('.header-content__nav'),
				navListItem 		= header.querySelectorAll('.header-content__nav > ul > li'),
				navDesktopContainer	= pageWrapper.querySelector('.p-header__main'),
				navMobileContainer 	= pageWrapper.querySelector('.p-header-mobile__part' 	+ nav.getAttribute('mobile-part')),
		
				// mobileMenuPart2	= pageWrapper.querySelector('.p-header-mobile__part2'),
		
				burger = header.querySelector('.js-burger');
		
				// submenuWrapper		  = document.querySelector('*[data-submenu-id="1"]'),
				// submenuList			  = submenuWrapper.querySelector('.submenu-list'),
				// submenuListItemActive = submenuList.querySelector('.submenu-list__item.active'),
				// submenuListExpand	  = submenuList.querySelector('.submenu-list__expand');
		
		
		
		
			function mobileMenuOpen(callback) {
				burger.classList.add('is-active');
				header.classList.add('is-active');
				document.body.classList.add('overflow-hidden');
		
				if (typeof(callback) === 'function') {
					callback();
				}
			}
		
			function mobileMenuClose(callback) {
				burger.classList.remove('is-active');
				header.classList.remove('is-active');
				document.body.classList.remove('overflow-hidden');
		
				if (typeof(callback) === 'function') {
					callback();
				}
			}
		
			function mobileMenuToggle() {
				header.classList.contains('is-active')
				?
					mobileMenuClose(navAnimateReverseDelay)
				:
					mobileMenuOpen(navAnimateDelay)
			}
		
		
		
		
		
			// toggleMenu
			burger.addEventListener('click', mobileMenuToggle);
		
			function navAnimateDelay() {
				var endNavAnimateTime = window.animateDelay.delay(navListItem, 0.30, 0.05, 0.35);
				// mobileMenuPart2.style.transitionDelay = endNavAnimateTime + 's';
			}
		
			function navAnimateReverseDelay() {
				window.animateDelay.reverseDelay(navListItem, 0.65, 0.05);
				// mobileMenuPart2.style.transitionDelay = '0.05s';
			}
		
		
		
		
		
			(function() { // SHIFT MENU
				function navShiftToMobile() {
					if (navMobileContainer.querySelector('.header-content__nav') == null) {
						navMobileContainer.appendChild(nav);
					}
				}
				function navShiftToDesktop() {
					if (navDesktopContainer.querySelector('.header-content__nav') == null) {
						navDesktopContainer.appendChild(nav);
					}
				}
				function shiftMenu() {
					if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
						navShiftToMobile();
					} else {
						navShiftToDesktop();
						// close menu
						if (header.classList.contains('is-active')) {
							mobileMenuClose();
						}
						// header in
						window.swimming.dontSwim(header);
					}
				}
				var shiftMenuThrottle = isThrottling(shiftMenu, 100)
				if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
					navMobileContainer.appendChild(nav);
				}
				window.addEventListener('resize', function() {
					shiftMenuThrottle();
				});
			})();
		
		
		
		
		
			// (function() { // SUBMENU LIST
			// 	if (!header.classList.contains('p-header-submenu-fixed')) return;
			// 	submenuListExpand.textContent = submenuListItemActive.textContent;
			// 	if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
			// 		pageWrapper.insertBefore(submenuList, pageContent);
			// 	}
			// 	submenuListExpand.addEventListener('click', function() {
			// 		submenuList.classList.toggle('show');
			// 	});
			// 	window.addEventListener('resize', function() {
			// 		if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
			// 			if (document.querySelector('.page-wrapper > .submenu-list') == null) {
			// 				pageWrapper.insertBefore(submenuList, pageContent);
			// 			}
			// 		} else {
			// 			if (submenuWrapper.querySelector('.submenu-list') == null) {
			// 				submenuWrapper.appendChild(submenuList);
			// 			}
			// 		}
			// 	});
			// })();
		
		
		
		
		
			// (function() { // HEADER SWIMMING
			// 	var scrollPosition = 0;
			// 	function headerSwimming() {
			// 		if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
			// 			// если меню активно заканчиваем
			// 			if (header.classList.contains('is-active')) {
			// 				return;
			// 			}
			// 			if (window.pageYOffset < 0) { // ios
			// 				window.swimming.dontSwim(header);
			// 				return;
			// 			}
			// 			if (window.pageYOffset < 70) {
			// 				window.swimming.dontSwim(header);
			// 				return;
			// 			}
		
			// 			if (window.pageYOffset > scrollPosition) {
			// 				window.swimming.toSwim(header);
			// 				// header.classList.add('scroll');
			// 			} else {
			// 				window.swimming.dontSwim(header);
			// 				// header.classList.remove('scroll');
			// 			}
			// 			scrollPosition = window.pageYOffset;
			// 		}
			// 	}
			// 	var headerSwimmingThrottle = isThrottling(headerSwimming, 300);
			// 	window.addEventListener('scroll', function() {
			// 		headerSwimmingThrottle();
			// 	});
		
			// 	window.addEventListener('scroll', function() {
			// 		if (window.pageYOffset > 70) {
			// 			if (!header.classList.contains('scroll')) {
			// 				header.classList.add('scroll');
			// 			}
			// 		} else {
			// 			if (header.classList.contains('scroll')) {
			// 				header.classList.remove('scroll');
			// 			}
			// 		}
			// 	});
			// })();
		
		
		
		
		
			// (function() { // HEADER FIXED SWIMMING
			// 	var scrollPosition  = 0;
			// 	if (window.pageYOffset > 150) {
			// 		headerFixed.classList.add('out');
			// 	}
			// 	function headerFixedSwimming() {
			// 		if (window.pageYOffset < 0) {
			// 			window.swimming.dontSwim(headerFixed);
			// 		}
			// 		if (window.pageYOffset > scrollPosition) {
			// 			window.swimming.toSwim(headerFixed);
			// 		} else {
			// 			if (window.pageYOffset >  150) {
			// 				window.swimming.dontSwim(headerFixed);
			// 			} else {
			// 				window.swimming.toSwim(headerFixed);
			// 			}
			// 		}
			// 		scrollPosition = window.pageYOffset;
			// 	}
			// 	var headerFixedSwimmingThrottle = window.throttle.isThrottling(headerFixedSwimming, 300);
			// 	window.addEventListener('scroll', function() {
			// 		headerFixedSwimmingThrottle();
			// 	})
			// })();
		
		
		
		
		
		})();

	function heroCarousel() {
	
		var heroSlider = document.querySelector('.js-hero-carousel');
	
		if ( (heroSlider !== null) && (heroSlider.querySelectorAll('.slide').length > 1) ) {
			$(heroSlider).owlCarousel({
				items: 1,
				dots: true,
				// dotsContainer: '.hero-carousel__dots',
				dotsClass: 'my-owl-dots',
				nav: true,
				navContainerClass: 'my-owl-nav'
			});
		}
	
	}
	if ( $('.js-select').length ) {
	
	  $('.js-select').each(function() {
	
	    var $this = $(this),
	
	    options = {
	      multiple: {
	        separator: '; ',
	        keepMenuOpen: true,
	        maxLabelEntries: false
	      },
	      onInit: function(element) {
	        if (element.getAttribute('multiple') !== null) {
	          renderSelectLabel(element);
	        }
	      },
	      onChange: function(element, event) {
	        if (element.classList.contains('js-select-cars')) {
	          var carSelected = document.querySelector('.js-car-item.selected');
	          carSelected.classList.remove('selected');
	
	          carSelected = document.querySelector('.js-car-item[data-name="' + element.options[element.selectedIndex].value + '"]');
	          carSelected.classList.add('selected');
	        };
	
	        if (element.getAttribute('multiple') !== null) {
	          renderSelectLabel(element);
	        }
	      },
	      onRefresh: function(element) {
	        if (element.getAttribute('multiple') !== null) {
	          renderSelectLabel(element);
	        }
	      }
	    };
	
	    $this.selectric(options);
	  });
	}
	
	function getSelectValues(select) {
	  var result = [];
	  var options = select && select.options;
	  var opt;
	
	  for (var i=0, iLen=options.length; i<iLen; i++) {
	    opt = options[i];
	
	    if (opt.selected) {
	      result.push(opt.getAttribute('data-color'));
	    }
	  }
	  return result;
	}
	
	function renderSelectLabel(element) {
	  var label = element.closest('.selectric-wrapper').querySelector('.label'),
	      labelText = label.textContent,
	      labelArray = labelText.split('; ');
	
	  for (var i = 0; i < labelArray.length; i++) {
	    labelArray[i] = '<span class="select-color"></span>' + labelArray[i];
	  }
	
	  label.innerHTML = labelArray.join('; ');
	  var selectedValues = getSelectValues(element);
	  var colorDot = label.querySelectorAll('.select-color');
	  Array.prototype.forEach.call(colorDot, function(item, i) {
	    item.style.backgroundColor = selectedValues[i];
	  });
	}
	function labelFly() {
	
		var inputWrapper = document.querySelectorAll('.js-label-fly');
	
		function listenChange(inputEl, inputWrapper) {
			if (inputEl.value !== '') {
				if (!inputWrapper.classList.contains('active')) {
					inputWrapper.classList.add('active')
				}
			} else {
				if (inputWrapper.classList.contains('active')) {
					inputWrapper.classList.remove('active')
				}
			}
		}
	
		return (function() {
	
			Array.prototype.forEach.call(inputWrapper, function(item) {
	
				var inputEl = item.querySelector('.input');
	
				if (inputEl.value !== '') {
					item.classList.add('active');
				}
	
				inputEl.addEventListener('change', listenChange.bind(null, inputEl, item));
				// inputEl.addEventListener('click', function() {
				// 	if (item.classList.contains('error')) {
				// 		item.classList.remove('error');
				// 		let errorMessage = item.querySelector('.error-text');
				// 		item.removeChild(errorMessage);
				// 	}
				// })
	
			});
	
		})();
	
	}
	function hoverGallery() {
	
		$(".hover-gallery__thumbs").each(function() {
			var thumbs = $(this);
			thumbs.siblings('.hover-gallery__images').find("img").each(function() {
				thumbs.append("<i>");
			});
		});
	
		$(".hover-gallery__thumbs i")
			.hover(function() {
				if (window.matchMedia("(max-width: 600px)").matches) return;
				var this_img = $(this).parent(".hover-gallery__thumbs").siblings('.hover-gallery__images').find("img");
				var all_thmbs = $(this).parent().find("i");
				$(this).parents(".hover-gallery").css('opacity', 1);
				this_img.css('opacity', 0).eq($(this).index()).css('opacity', 1);
				all_thmbs.removeClass("is-active");
				$(this).addClass("is-active");
			})
			.parents(".hover-gallery").mouseleave(function() {
				if (window.matchMedia("(max-width: 600px)").matches) return;
				$(this).css('opacity', 0);
			});
	
	}
	function specialOffersLoad() {
	
		function addOffers(offersContainer) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'data/offers.json', false);
			xhr.send();
	
			var offers = null;
	
			if (xhr.status != 200) {
				return;
			}
	
			offers = createHTML(JSON.parse(xhr.responseText));
	
			offersContainer.appendChild(offers);
		}
	
		function createHTML(items) {
			var fragment = document.createDocumentFragment();
			for (var i = 0; i < items.length; i++) {
				var	item = document.createElement('div');
				item.classList.add('offers__item');
				item.innerHTML = ''
				+ '<a href="' + items[i].link + '" class="offers__item-img">'
				+ '  <img src="' + items[i].img + '" alt="#">'
				+ '</a>'
				+ '<div class="offers__item-description">'
				+ '  <a href="' + items[i].link + '" class="offers__item-title title-20"><b>' + items[i].title + '</b></a>'
				+ '  <div class="offers__item-time">' + items[i].description + '</div>'
				+ '</div>'
				fragment.appendChild(item);
			}
			return fragment;
		}
	
		function init() {
			var offersMoreBtn = document.querySelector('.js-offers-more'),
				offersContainer = document.querySelector('.offers');
	
			offersMoreBtn.addEventListener('click', addOffers.bind(null, offersContainer));
		}
	
		return init();
	
	}
	function carGallery() {
	
	    var gallery = $('.car-gallery');
	    var images = gallery.find('.js-car-gallery-for');
	    var thumbs = gallery.find('.js-car-gallery-nav');
	    var thumb = thumbs.find('.js-car-gallery-nav-item');
	
	    images.owlCarousel({
	        margin: 0,
	        nav: false,
	        dots: false,
	        items: 1,
	        lazyLoad: true,
	        navText: [,]
	    });
	
	    if (thumb.length > 4) {
	        thumbs.owlCarousel({
	            margin: 5,
	            nav: true,
	            // navText: [,],
	            dots: true,
	            dotsClass: 'my-owl-dots my-owl-dots--grey',
	            items: 3,
	            lazyLoad: true,
	            mouseDrag: false,
	            responsive: {
	                0: {
	                    margin: 5
	                },
	                480: {
	                    items: 5
	                }
	            }
	        });
	    }
	
	    thumb.on('click', function (event) {
	        var index;
	        if ($(this).parent().hasClass("owl-item")) {
	            index = $(this).parent().index();
	        }
	        else {
	            index = $(this).index();
	        }
	        images.trigger('to.owl.carousel', index);
	        thumb.removeClass('is-active');
	        $(this).addClass('is-active');
	    });
	
	
	    images.on('changed.owl.carousel', function (e) {
	
	        thumb.removeClass('is-active');
	        thumb.eq(e.item.index).addClass('is-active');
	
	        if (thumbs.hasClass('owl-carousel')) {
	            var arr = [], min_arr, max_arr;
	
	            thumbs.find('.active > .product-gallery__thumb').each(function () {
	                arr.push($(this).parent().index())
	            });
	            min_arr = arr[0];
	            max_arr = arr[5];
	
	            if (e.item.index > max_arr) {
	                thumb.trigger('next.owl.carousel');
	            }
	            if (e.item.index < min_arr) {
	                thumb.trigger('prev.owl.carousel');
	            }
	        }
	    });
	
	};
	function popup() {
	
		var popupHandler = document.querySelectorAll('.js-popup');
	
		Array.prototype.forEach.call(popupHandler, function(item) {
			var popup = document.querySelector(item.dataset.popupSelector),
				popupTitle = popup.querySelector('.js-popup-all__title'),
				popupSubtitle = popup.querySelector('.js-popup-all__subtitle');
	
			var title    = item.getAttribute('data-title'),
				subtitle = item.getAttribute('data-subtitle');
	
			item.addEventListener('click', function() {
				if (popup.classList.contains('popup-kasko')) {
					$('.popup-kasko__content-part').removeClass('show');
					$('.popup-kasko__content-part[data-step="1"]').addClass('show');
					popup.setAttribute('data-stage', 1);
				}
	
				if (popupTitle !== null) {
					popupTitle.textContent = title;
				}
				if (popupSubtitle !== null) {
					popupSubtitle.textContent = subtitle;
				}
	
				$.magnificPopup.open({
					items: {
						src: popup
					},
					type: 'inline',
					fixedContentPos: true,
					closeMarkup:
					'<button class="popup-close mfp-close" type="button" title="%title%">'
						+ '	<svg class="icon-svg icon-close" width="100%" height="100%">'
						+ '		<use xlink:href="img/static/icons.svg#icon-close"></use>'
						+ '	</svg>'
						+ '</button>',
					tClose: 'Закрыть'
				}, 0);
			});
		});
	
	}
	function popupAll() {
		function createPopup(item, options, e) {
			e.preventDefault();
			var title = item.getAttribute('data-title');
	
			if (options.subtitle !== null) {
				var subtitle = item.getAttribute('data-subtitle')
				options.subtitle.textContent = subtitle;
			}
	
			options.title.textContent = title;
	
			$.magnificPopup.open({
				items: {
					src: options.popup
				},
				type: 'inline',
				fixedContentPos: true,
				closeMarkup:
					'<button class="popup-close mfp-close" type="button" title="%title%">'
					+ '	<svg class="icon-svg icon-close" width="100%" height="100%">'
					+ '		<use xlink:href="img/static/icons.svg#icon-close"></use>'
					+ '	</svg>'
					+ '</button>',
				tClose: 'Закрыть',
				callbacks: {
					open: function() {
						var input = document.getElementById('name');
						console.log(input);
						if (input !== null) {
							setTimeout(function() {
								input.focus();
							}, 100);
						}
					}
				}
			}, 0);
		}
	
		function init() {
			var popupHandler = document.querySelectorAll('.js-popup-all-btn');
			if (popupHandler.length < 1) return;
	
			var popupAll = document.querySelector('.popup-all'),
				popupTitle = popupAll.querySelector('.js-popup-all__title'),
				popupSubtitle = popupAll.querySelector('.js-popup-all__subtitle'),
	
				options = {
					popup: popupAll,
					title: popupTitle,
					subtitle: popupSubtitle
				};
	
			Array.prototype.forEach.call(popupHandler, function(item) {
				item.addEventListener('click', createPopup.bind(null, item, options));
			});
		}
	
		return init();
	}
	function togglerVisibility() {
	
		var btns = document.querySelectorAll('.js-btn-toggler');
	
		Array.prototype.forEach.call(btns, function(item) {
			var targetName = null,
				targetElement = null,
				overflowAnimation = null,
				stateAnimation = 0;
	
			if (item.getAttribute('data-overflow-animation') != null) {
				overflowAnimation = true;
			}
			// console.log(overflowAnimation);
	
			if (item.getAttribute('data-parent') != null) {
				targetName = item.getAttribute('data-parent');
				targetElement = item.closest(targetName);
			}
	
			if (item.getAttribute('data-target') != null) {
				targetName = item.getAttribute('data-target');
				targetElement = document.querySelector(targetName);
			}
	
			item.addEventListener('click', function() {
	
				item.classList.toggle('btn-toggle-active');
	
				if (overflowAnimation) {
	
					if (stateAnimation) return;
	
					if ( targetElement.classList.contains('toggle-active') ) {
						targetElement.classList.remove('toggle-active');
						targetElement.classList.remove('toggle-active-overflow-visible');
					} else {
						targetElement.classList.add('toggle-active');
						setTimeout(function() {
							targetElement.classList.add('toggle-active-overflow-visible');
						}, 500);
					}
					stateAnimation = 1;
	
					setTimeout(function() {
						stateAnimation = 0;
					}, 500);
	
				} else {
					targetElement.classList.toggle('toggle-active');
				}
			})
		});
	
	}
	
	
	
	// stateAnimation = 0;
	
	// expandHandler.addEventListener('click', function() {
	// 	if (stateAnimation) return;
	
	// 	if ( carSaleFilter.classList.contains('toggle-active') ) {
	// 			carSaleFilter.classList.remove('toggle-active');
	// 			carSaleFilter.classList.remove('toggle-active-overflow-visible');
	// 		} else {
	// 			carSaleFilter.classList.add('toggle-active');
	// 			setTimeout(function() {
	// 				carSaleFilter.classList.add('toggle-active-overflow-visible');
	// 			}, 500);
	// 		}
	// 		stateAnimation = 1;
	
	// 		setTimeout(function() {
	// 			stateAnimation = 0;
	// 		}, 500);
	// 	});
	
	// 	}
	
	// }
	function map() {
	
		var mapWrapper 	= document.querySelector('.map');
	
		if (mapWrapper == null) return;
	
		var coordinates = JSON.parse(mapWrapper.getAttribute('data-geo')),
			lat 		= coordinates[0].lat,
			lng 		= coordinates[0].lng;
	
		ymaps.ready(init);
	
		function init() {
			map = new ymaps.Map('map', {
				center: [lat, lng],
				zoom: 13
			});
	
			// var myPlacemark = new ymaps.Placemark([lat, lng], {
	  //           balloonContentHeader: "Балун метки",
	  //           balloonContentBody: "Содержимое <em>балуна</em> метки",
	  //           balloonContentFooter: "Подвал",
	  //           hintContent: "Хинт метки"
	  //       });
	
			var myPlacemark2 = new ymaps.Placemark([lat, lng], {
	            // hintContent: 'Собственный значок метки',
	            // balloonContent: 'Это красивая метка'
	        }, {
	            iconLayout: 'default#image',
	            iconImageHref: '..img/static/icons/icon-map.svg',
	            iconImageSize: [56, 65],
	            iconImageOffset: [-25, -65]
	        });
	
	        // map.geoObjects.add(myPlacemark);
	        map.geoObjects.add(myPlacemark2);
			map.behaviors.disable('scrollZoom');
		}
	
	}
	function slider() {
	    var sliderContainer = document.querySelectorAll('.range-slider-outer');
	
	    Array.prototype.forEach.call(sliderContainer, function(item) {
	        var rangeSliderParent = item.querySelector('.range-slider'),
	            slider            = item.querySelector('.range'),
	
	            min = parseInt(rangeSliderParent.getAttribute('data-min')),
	            max = parseInt(rangeSliderParent.getAttribute('data-max')),
	
	            postfix = rangeSliderParent.getAttribute('data-postfix');
	
	        $(slider).ionRangeSlider({
	            type: "single",
	            min: min,
	            max: max,
	            from: min,
	            to: 2000000,
	            step: 1,
	            postfix: postfix,
	            // prefix: "от: ",
	            // onStart: function (data) {
	            //     $('.range-slider__info').html(new Intl.NumberFormat('ru-RU').format(data.from)
	            //         + ' - ' + new Intl.NumberFormat('ru-RU').format(data.to));
	            // },
	            onChange: function(data) {
	                inputEl.value = data.from;
	            }
	        });
	
	        var id         = slider.getAttribute('id'),
	            $range     = $('#' + id),
	            sliderData = $range.data("ionRangeSlider");
	
	        var inputEl = item.querySelector('.input-slider input');
	        inputEl.value = min;
	        inputEl.onkeydown = function() {
	            sliderData.update({
	                from: inputEl.value
	            });
	        };
	        inputEl.onkeyup = function() {
	            sliderData.update({
	                from: inputEl.value
	            });
	        };
	
	    });
	}
	function blockChoice() {
	
		function toggleBlockingButton(element, btns) {
			if ( checkTheStatusChoice(element) === 'enabled') {
				Array.prototype.forEach.call(btns, function(item) {
					item.setAttribute('disabled', true);
				});
			} else {
				Array.prototype.forEach.call(btns, function(item) {
					item.removeAttribute('disabled');
				});
			}
		}
	
		function checkTheStatusChoice(element) {
			return (element.checked === true) ? 'enabled' : 'disabled';
		}
	
		var blockChoiceWrapper = document.querySelectorAll('.js-block-choice-wrapper');
		Array.prototype.forEach.call(blockChoiceWrapper, function(item) {
			var blockChoiceHandler = item.querySelector('.js-block-choice-handler'),
				blockChoiceInput   = item.querySelector('.block-choice__checkbox'),
				blockChoiceBtn     = item.querySelectorAll('.js-block-choice-btn');
	
			blockChoiceHandler.addEventListener('click', toggleBlockingButton.bind(null, blockChoiceInput, blockChoiceBtn));
		});
	
	}
	function quantityCounter() {
	
		function countingControl(element, inputEl) {
			var direction = element.getAttribute('data-change');
	
			var resultCounting = false;
			switch (direction) {
				case 'minus':
				  resultCounting = countingMinus(inputEl);
				  break;
				case 'plus':
				  resultCounting = countingPlus(inputEl);
			}
	
			if (!resultCounting) return;
		}
	
		function countingPlus(element) {
			var val = element.value;
	
			element.value = +val + 1;
	
			// if (element.value < 10) {
			// 	element.value = '0' + element.value;
			// }
	
			return true;
		}
	
		function countingMinus(element) {
			var val = element.value;
	
			if (+val > 1) {
				element.value = +val - 1;
	
				// if (element.value < 10) {
				// 	element.value = '0' + element.value;
				// }
	
				return true;
			}
		}
	
		function countingValidate(inputEl) {
			inputEl.value = inputEl.value.replace(/[^\d]/g, '');
		}
	
		function init() {
			var quantityCounter = document.querySelectorAll('.quantity-counter');
	
			Array.prototype.forEach.call(quantityCounter, function(item) {
				var inputEl = item.querySelector('.quantity-counter__input'),
					countingControlHandler = item.querySelectorAll('.js-quantity-counter__control')
	
				Array.prototype.forEach.call(countingControlHandler, function(item) {
					item.addEventListener('click', countingControl.bind(null, item, inputEl));
				});
	
				inputEl.addEventListener('keyup', countingValidate.bind(null, inputEl));
			});
	
		}
	
		return init();
	
	}
	function popupBasket() {
		var popupBasket = document.querySelector('.popup-basket');
	
		if (popupBasket == null) return;
	
		var btnClosePopup = popupBasket.querySelector('.js-popup-basket-close'),
			btnOrderPopup = popupBasket.querySelectorAll('.js-popup-basket-decor'),
			popupOrder    = document.querySelector('.popup-order');
	
		btnClosePopup.addEventListener('click', function() {
			$.magnificPopup.close();
		});
	
		Array.prototype.forEach.call(btnOrderPopup, function(item) {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				$.magnificPopup.close();
				setTimeout(function() {
					$.magnificPopup.open({
						items: {
							src: popupOrder
						},
						type: 'inline',
						fixedContentPos: true,
						closeMarkup:
							'<button class="popup-close mfp-close" type="button" title="%title%">'
							+ '	<svg class="icon-svg icon-close" width="100%" height="100%">'
							+ '		<use xlink:href="img/static/icons.svg#icon-close"></use>'
							+ '	</svg>'
							+ '</button>',
						tClose: 'Закрыть'
					});
				}, 100);
			});
		});
	}
	function basketItem() {
	
		function removeItem(element) {
			element.parentNode.removeChild(element);
		}
	
		var basketItem = document.querySelectorAll('.basket-item');
	
		Array.prototype.forEach.call(basketItem, function(item) {
			var removeItemHandler = item.querySelector('.basket-item__remove');
	
			removeItemHandler.addEventListener('click', removeItem.bind(null, item));
		});
	
	}
	function carMoveSide() {
	
		var containerSide	 = document.querySelector('.car-side'),
			containerContent = document.querySelector('.car-content'),
			element			 = containerSide.querySelector('.side-t1'),
			carGallery		 = containerContent.querySelector('.car-gallery');
	
		var location = 0;
	
		function move(element) {
			if (window.matchMedia("(max-width: " + m7 + "px)").matches) {
		 		if (location == 0) {
			 		containerContent.insertBefore(element, carGallery.nextSibling);
			 		location = 1;
				}
			} else {
				if (location == 1) {
					containerSide.insertBefore(element, containerSide.children[0]);
			 		location = 0;
				}
			}
		}
	
		if (window.matchMedia("(max-width: " + m7 + "px)").matches) {
			move(element);
		}
		window.addEventListener('resize', move.bind(null, element));
	
	}

	function offersCarousel() {
		var container = document.querySelector('.js-accessories-carousel');
	
		if (container !== null) {
			$(container).owlCarousel({
				items: 2,
				nav: true,
				margin: 15,
				responsive: {
					768: {
						items: 3,
						margin: 20
					},
					1024: {
						items: 4,
						margin: 25
					}
				}
			});
		}
	}
	function cardAccessoriesCarousel() {
		var container = document.querySelector('.js-card-accessories-gallery');
	
		if (container !== null) {
			$(container).owlCarousel({
				items: 1,
				nav: false,
				dots: true,
				dotsClass: 'my-owl-dots my-owl-dots--grey',
				navContainerClass: 'my-owl-nav'
			});
		}
	}
	function accessoriesCarousel() {
		var container = document.querySelector('.js-offers-carousel');
	
		if ( (container !== null) && (container.querySelectorAll('.offers__item').length > 3) ) {
			$(container).owlCarousel({
				items: 2,
				nav: true,
				margin: 15,
				navContainer: '.my-owl-nav2',
				responsive: {
	                0: {
	                    margin: 15
	                },
	                480: {
	                	margin: 20
	                },
	                768: {
	                    items: 3,
	                    margin: 25
	                },
	                1024: {
	                	items: 3,
	                	margin: 32
	                }
	            }
			});
		}
	}
	function gadgetsMiniCarousel() {
	
		var container = document.querySelector('.js-gadgets-mini-carousel');
	
		if (container !== null) {
			$(container).owlCarousel({
				items: 2,
				nav: false,
				dots: true,
				dotsClass: 'my-owl-dots my-owl-dots--grey',
				responsive: {
					0: {
						items: 2,
						margin: 10
					},
					480: {
						items: 3,
						margin: 10
					},
					768: {
						items: 3,
						margin: 20
					},
					1024: {
						items: 4,
						margin: 20
					}
				}
			});
		}
	
	}

	function carSaleFormToggleTitle() {
		var titlePart     = document.querySelector('.js-car-sale-form-name'),
			items         = document.querySelectorAll('.js-car-sale-item');
	
		Array.prototype.forEach.call(items, function(item) {
			var dataName = item.dataset.nameForm,
				inputEl  = item.querySelector('.car-sale-list__item-input');
	
			if (inputEl.checked) {
				titlePart.textContent = dataName;
			}
	
			inputEl.onchange = function() {
				if (inputEl.checked) {
					titlePart.textContent = dataName;
				}
			}
		});
	}

	function popupKasko() {
	
		var contentItems 	    	= document.querySelectorAll('.popup-kasko__content-part'),
			nextStepHandler   		= document.querySelectorAll('.js-popup-kasko-next'),
			contentItemsArray 		= [],
			formWrapper				= document.querySelector('.popup-kasko');
	
		function renderListOfSelected() {
			var fields = [],
				field1 = document.querySelector('.popup-kasko__column[kasko-field="1"] select'),
				field2 = document.querySelector('.popup-kasko__column[kasko-field="2"] select'),
				field3 = document.querySelector('.popup-kasko__column[kasko-field="3"] select'),
				field6 = document.querySelector('.popup-kasko__column[kasko-field="6"] select'),
				field7 = document.querySelector('.popup-kasko__column[kasko-field="7"] select'),
				field8 = document.querySelector('.popup-kasko__column[kasko-field="8"] select'),
				field9 = document.querySelector('.popup-kasko__column[kasko-field="9"] select');
	
			field1 = field1.options[field1.options.selectedIndex].value;
			field2 = field2.options[field2.options.selectedIndex].value;
			field3 = field3.options[field3.options.selectedIndex].value;
			field6 = field6.options[field6.options.selectedIndex].value;
			field7 = field7.options[field7.options.selectedIndex].value;
			field8 = field8.options[field8.options.selectedIndex].value;
			field9 = field9.options[field9.options.selectedIndex].value;
	
			var field4 = document.querySelector('.popup-kasko__column[kasko-field="4"] input').value,
				field5 = document.querySelector('.popup-kasko__column[kasko-field="5"] input').value;
	
			fields.push(
				{ id: 0, value: 'default' },
				{ id: 1, value: field1 },
				{ id: 2, value: field2 },
				{ id: 3, value: field3 },
				{ id: 4, value: field4 },
				{ id: 5, value: field5 },
				{ id: 6, value: field6 },
				{ id: 7, value: field7 },
				{ id: 8, value: field8 },
				{ id: 9, value: field9 }
			);
	
			var forFilling = document.querySelectorAll('.kasko__list-item span[kasko-field]');
			Array.prototype.forEach.call(forFilling, function(item) {
				var id = item.getAttribute('kasko-field');
				item.textContent = fields[id].value;
			});
		}
	
		function closeActiveStep() {
			for (var i = 0; i < contentItemsArray.length; i++) {
				if ( contentItemsArray[i].element.classList.contains('show') ) {
					contentItemsArray[i].element.classList.remove('show');
					break;
				}
			}
		}
	
		function toggleStep(stepNext) {
			closeActiveStep();
			for (var i = 0; i < contentItemsArray.length; i++) {
				if (contentItemsArray[i].step == stepNext) {
					contentItemsArray[i].element.classList.add('show');
					break;
				}
			}
	
			if (stepNext == 2) {
				renderListOfSelected();
			}
	
			formWrapper.setAttribute('data-stage', stepNext);
		}
	
	
		Array.prototype.forEach.call(contentItems, function(item) {
			contentItemsArray.push({
				element: item,
				step: item.getAttribute('data-step')
			})
		});
	
		Array.prototype.forEach.call(nextStepHandler, function(item) {
			var stepNext = item.getAttribute('data-step-next');
	
			item.addEventListener('click', toggleStep.bind(null, stepNext));
		});
	
	}

	function filling() {
	
		var contentItems      = document.querySelectorAll('.js-filling-step'),
			nextStepHandler   = document.querySelectorAll('.js-filling-next'),
			contentItemsArray = [],
			formWrapper       = document.querySelector('.filling-outer'),
			fillingKasko      = formWrapper.classList.contains('js-p-kasko');
	
		function renderListOfSelected() {
			var fields = [],
				field1 = document.querySelector('.p-kasko__column[kasko-field="1"] select'),
				field2 = document.querySelector('.p-kasko__column[kasko-field="2"] select'),
				field3 = document.querySelector('.p-kasko__column[kasko-field="3"] select'),
				field6 = document.querySelector('.p-kasko__column[kasko-field="6"] select'),
				field7 = document.querySelector('.p-kasko__column[kasko-field="7"] select'),
				field8 = document.querySelector('.p-kasko__column[kasko-field="8"] select'),
				field9 = document.querySelector('.p-kasko__column[kasko-field="9"] select');
	
			field1 = field1.options[field1.options.selectedIndex].value;
			field2 = field2.options[field2.options.selectedIndex].value;
			field3 = field3.options[field3.options.selectedIndex].value;
			field6 = field6.options[field6.options.selectedIndex].value;
			field7 = field7.options[field7.options.selectedIndex].value;
			field8 = field8.options[field8.options.selectedIndex].value;
			field9 = field9.options[field9.options.selectedIndex].value;
	
			var field4 = document.querySelector('.p-kasko__column[kasko-field="4"] input').value,
				field5 = document.querySelector('.p-kasko__column[kasko-field="5"] input').value;
	
			fields.push(
				{ id: 0, value: 'default' },
				{ id: 1, value: field1 },
				{ id: 2, value: field2 },
				{ id: 3, value: field3 },
				{ id: 4, value: field4 },
				{ id: 5, value: field5 },
				{ id: 6, value: field6 },
				{ id: 7, value: field7 },
				{ id: 8, value: field8 },
				{ id: 9, value: field9 }
			);
	
			var forFilling = document.querySelectorAll('.p-kasko__note span[kasko-field]');
			Array.prototype.forEach.call(forFilling, function(item) {
				var id = item.getAttribute('kasko-field');
				item.textContent = fields[id].value;
			});
		}
	
	
		function getActiveStep() {
			for (var i = 0; i < contentItemsArray.length; i++) {
				if ( contentItemsArray[i].element.classList.contains('show') ) {
					return contentItemsArray[i].step;
				}
			}
		}
	
		function closeActiveStep() {
			for (var i = 0; i < contentItemsArray.length; i++) {
				if ( contentItemsArray[i].element.classList.contains('show') ) {
					contentItemsArray[i].element.classList.remove('show');
					break;
				}
			}
		}
	
		function toggleStep(stepNext) {
			var previousStep = getActiveStep();
	
			closeActiveStep();
			for (var i = 0; i < contentItemsArray.length; i++) {
				if (contentItemsArray[i].step == stepNext) {
					contentItemsArray[i].element.classList.add('show');
					break;
				}
			}
	
			if ( (previousStep < getActiveStep()) && fillingKasko) {
				renderListOfSelected(); 
			}
	
	
			formWrapper.setAttribute('data-stage', stepNext);
		}
	
	
		Array.prototype.forEach.call(contentItems, function(item) {
			contentItemsArray.push({
				element: item,
				step: item.getAttribute('data-step')
			})
		});
	
		Array.prototype.forEach.call(nextStepHandler, function(item) {
			var stepNext = item.getAttribute('data-step-next');
	
			item.addEventListener('click', toggleStep.bind(null, stepNext));
		});
	
	}

	$(document).on('click', 'a[href^="#"]', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

});