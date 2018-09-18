"use strict";





if (!Array.from) {
	Array.from = (function () {
		var toStr = Object.prototype.toString;
		var isCallable = function (fn) {
			return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		};
		var toInteger = function (value) {
			var number = Number(value);
			if (isNaN(number)) { return 0; }
			if (number === 0 || !isFinite(number)) { return number; }
			return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		};
		var maxSafeInteger = Math.pow(2, 53) - 1;
		var toLength = function (value) {
			var len = toInteger(value);
			return Math.min(Math.max(len, 0), maxSafeInteger);
		};
		return function from(arrayLike ) {
			var C = this;
			var items = Object(arrayLike);
			if (arrayLike == null) {
				throw new TypeError("Array.from requires an array-like object - not null or undefined");
			}
			var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
			var T;
			if (typeof mapFn !== 'undefined') {
				if (!isCallable(mapFn)) {
					throw new TypeError('Array.from: when provided, the second argument must be a function');
				}
				if (arguments.length > 2) {
					T = arguments[2];
				}
			}
			var len = toLength(items.length);
			var A = isCallable(C) ? Object(new C(len)) : new Array(len);
			var k = 0;
			var kValue;
			while (k < len) {
				kValue = items[k];
				if (mapFn) {
					A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
				} else {
					A[k] = kValue;
				}
				k += 1;
			}
			A.length = len;
			return A;
		};
	}());
}





(function(ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
		else return this.parentElement.closest(selector)
	};
}(Element.prototype));


var m10 = 1023;
var m7 = 767;


document.addEventListener("DOMContentLoaded", function(event) { 


	expandBox();
	listFilter();

	// forms
	labelFly();
	quantityCounter();
	select();
	formToggleCheck();


	// header
	// extra-menu
	feedbackPopup();

	heroCarousel();
	offersCarousel();
	productsCarousel();
	productsMiniCarousel();
	carGallery();
	carCardGallery();
	cardProductGallery();

	photoSwipe();

	carFilterDisplayToggle();

	tableCharacteristicShowToggle();

	carSaleExpand();

	popupAll();

	checboxCircle();

	$('body').on('click', '.popup-close', function() {
		$.magnificPopup.close();
	});

	var route = $('body').attr('data-route');

		switch (route) {
			case 'home':
				tradeinTabs();
				popupSentence();
				break;

			case 'catalog':
				tradeinTabs();
				popupBookIt();
				popupCredit();
				goodsItemDisplayToggle();
				basketItem();
				table();
				carFilter();
				// popupKasko();
				// popupSentence();
				break;

			case 'car-order':
				tradeinTabs();
				popupPreOrder();
				popupCredit();
				table();
				carFilter();
				break;

			case 'card-product':
				basket();
				basketItem();
				break;

			case 'product-category':
				basket();
				basketItem();
				listCars();
				break;

			case 'about':
				map();
				vacanciesSwitch();
				popupResponse();
				break;

			case 'car':
				moveSide();
				basket();
				basketItem();
				goodsItemDisplayToggle();
				popupBookIt();
				popupSentence();
				popupTradein();
				popupCredit();

				// stickySidebar();
				// window.addEventListener('resize', stickySidebar);
				// var stickySidebarThrottle = isThrottling(stickySidebar, 300);
				// window.addEventListener('resize', stickySidebarThrottle);
				// var sideReinitThrottled = isThrottling(sideReinit, 10);
				// console.log(sideReinitThrottled);
				// sideReinitThrottled();
				// $(window).scroll(sideReinitThrottled);
				// $(window).resize(sideReinitThrottled);
				// carSticky();
				// cardShopChangeOnScroll();
				break;

			case 'kasko':
				filling('.js-kasko-filling');
				break;

			case 'credit':
				filling('.js-credit-filling');
				break;

			case 'car-sale':
				carSaleList();
				popupOffer();
				break;

			case 'special-offers':
				specialOffersLoad();
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

	function photoSwipe() {
	
	    window.initPhotoSwipeFromDOM = function(gallerySelector, gallery) {
	
	        // parse slide data (url, title, size ...) from DOM elements 
	        // (children of gallerySelector)
	        var parseThumbnailElements = function(el) {
	            var elItems = el.querySelector('.slick-track');
	
	            var thumbElements;
	            gallery
	                ? thumbElements = elItems.childNodes
	                : thumbElements = el.childNodes
	            var numNodes = thumbElements.length,
	                items = [],
	                figureEl,
	                linkEl,
	                size,
	                item;
	
	            // console.log(el);
	            // console.log(elItems);
	            // console.log(thumbElements);
	
	            for(var i = 0; i < numNodes; i++) {
	
	                gallery
	                    ? figureEl = thumbElements[i] // <figure> element
	                    : figureEl = thumbElements[i]
	
	                // include only element nodes 
	                if(figureEl.nodeType !== 1) {
	                    continue;
	                }
	
	                linkEl = figureEl.children[0]; // <a> element
	
	                size = linkEl.getAttribute('data-size').split('x');
	
	                // create slide object
	                item = {
	                    src: linkEl.getAttribute('href'),
	                    w: parseInt(size[0], 10),
	                    h: parseInt(size[1], 10)
	                };
	
	
	
	                if(figureEl.children.length > 1) {
	                    // <figcaption> content
	                    item.title = figureEl.children[1].innerHTML; 
	                }
	
	                if(linkEl.children.length > 0) {
	                    // <img> thumbnail element, retrieving thumbnail url
	                    item.msrc = linkEl.children[0].getAttribute('src');
	                } 
	
	                item.el = figureEl; // save link to element for getThumbBoundsFn
	                items.push(item);
	            }
	
	            return items;
	        };
	
	        // find nearest parent element
	        var closest = function closest(el, fn) {
	            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
	        };
	
	        // triggers when user clicks on thumbnail
	        var onThumbnailsClick = function(e) {
	            e = e || window.event;
	            e.preventDefault ? e.preventDefault() : e.returnValue = false;
	
	            var eTarget = e.target || e.srcElement;
	
	            // find root element of slide
	            var clickedListItem = closest(eTarget, function(el) {
	                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
	            });
	
	            if(!clickedListItem) {
	                return;
	            }
	
	            // find index of clicked item by looping through all child nodes
	            // alternatively, you may define index via data- attribute
	            var clickedGallery;
	            gallery
	                ? clickedGallery = clickedListItem.parentNode.parentNode.parentNode
	                : clickedGallery = clickedListItem.parentNode
	            var childNodes;
	            gallery
	                ? childNodes = clickedListItem.parentNode.childNodes
	                : childNodes = clickedListItem.parentNode.childNodes
	
	            var numChildNodes = childNodes.length,
	                nodeIndex = 0,
	                index;
	            // console.log(clickedGallery);
	            // console.log(childNodes);
	            // console.log(numChildNodes);
	            // debugger;
	            for (var i = 0; i < numChildNodes; i++) {
	                if(childNodes[i].nodeType !== 1) { 
	                    continue; 
	                }
	
	
	                if (gallery) {
	                    // console.log(clickedListItem);
	                    // console.log(childNodes[i]);
	                    if (childNodes[i] === clickedListItem) {
	                        index = nodeIndex;
	                        break;
	                    }
	                } else {
	                    if (childNodes[i] === clickedListItem) {
	                        index = nodeIndex;
	                        break;
	                    }
	                }
	                nodeIndex++;
	            }
	
	
	
	            if(index >= 0) {
	                // open PhotoSwipe if valid index found
	                openPhotoSwipe( index, clickedGallery );
	            }
	            return false;
	        };
	
	        // parse picture index and gallery index from URL (#&pid=1&gid=2)
	        var photoswipeParseHash = function() {
	            var hash = window.location.hash.substring(1),
	            params = {};
	
	            if(hash.length < 5) {
	                return params;
	            }
	
	            var vars = hash.split('&');
	            for (var i = 0; i < vars.length; i++) {
	                if(!vars[i]) {
	                    continue;
	                }
	                var pair = vars[i].split('=');  
	                if(pair.length < 2) {
	                    continue;
	                }           
	                params[pair[0]] = pair[1];
	            }
	
	            if(params.gid) {
	                params.gid = parseInt(params.gid, 10);
	            }
	
	            return params;
	        };
	
	        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
	            var pswpElement = document.querySelectorAll('.pswp')[0],
	                gallery,
	                options,
	                items;
	
	            items = parseThumbnailElements(galleryElement);
	
	            // define options (if needed)
	            options = {
	
	                // define gallery index (for URL)
	                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
	
	                getThumbBoundsFn: function(index) {
	                    // See Options -> getThumbBoundsFn section of documentation for more info
	                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
	                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
	                        rect = thumbnail.getBoundingClientRect(); 
	
	                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
	                }
	
	            };
	
	            // PhotoSwipe opened from URL
	            if(fromURL) {
	                if(options.galleryPIDs) {
	                    // parse real index when custom PIDs are used 
	                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
	                    for(var j = 0; j < items.length; j++) {
	                        if(items[j].pid == index) {
	                            options.index = j;
	                            break;
	                        }
	                    }
	                } else {
	                    // in URL indexes start from 1
	                    options.index = parseInt(index, 10) - 1;
	                }
	            } else {
	                options.index = parseInt(index, 10);
	            }
	
	            // exit if index not found
	            if( isNaN(options.index) ) {
	                return;
	            }
	
	            if(disableAnimation) {
	                options.showAnimationDuration = 0;
	            }
	
	            // Pass data to PhotoSwipe and initialize it
	            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	            gallery.init();
	        };
	
	        // loop through all gallery elements and bind events
	        var galleryElements = document.querySelectorAll( gallerySelector );
	
	        for(var i = 0, l = galleryElements.length; i < l; i++) {
	            galleryElements[i].setAttribute('data-pswp-uid', i+1);
	            galleryElements[i].onclick = onThumbnailsClick;
	        }
	
	        // Parse URL and open gallery if it contains #&pid=3&gid=1
	        var hashData = photoswipeParseHash();
	        if(hashData.pid && hashData.gid) {
	            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
	        }
	    };
	
	
	
	
	
	    // let carGallery = document.querySelector('.car__gallery');
	
	    // if (carGallery !== null) {
	    //   initPhotoSwipeFromDOM('.car__gallery');
	    // }
	
	
	
	
	
	    // let b8 = document.querySelector('.b8');
	
	    // if (b8 !== null) {
	    //     initPhotoSwipeFromDOM('.b8');
	    // }
	
	}

	// partials/car-sticky.js





	// modules

		// partials/modules/mPopup.js





	function offersCarousel() {
	
		var offersCarousel = document.querySelector('.js-offers-carousel');
	
		if ( (offersCarousel !== null) && (offersCarousel.querySelectorAll('.offers__item').length > 2) ) {
			$(offersCarousel).slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				prevArrow:
				'<button type="button" class="slick-btn slick-btn--prev slick-btn--type2" aria-label="Previous">'
				+ '	<svg class="icon-svg icon-arrow-rounded-left" width="100%" height="100%">'
				+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-left"></use>'
				+ '	</svg>'
				+ '</button>',
				nextArrow:
				'<button type="button" class="slick-btn slick-btn--next slick-btn--type2" aria-label="Next">'
				+ '	<svg class="icon-svg icon-arrow-rounded-right" width="100%" height="100%">'
				+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-right"></use>'
				+ '	</svg>'
				+ '</button>',
				dots: true,
				dotsClass: 'slick-dots dots-type2',
				responsive: [
					{
						breakpoint: 1101,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: false
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false
						}
					}
				]
			});
		}
	
	}





	// layouts

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
					pageContent = pageWrapper.querySelector('.p-content'),
					// headerFixed	= pageWrapper.querySelector('.p-header-fixed'),
			
					nav					= header.querySelector('.nav-main'),
					navListItem 		= nav.querySelectorAll('.nav-list__item'),
					navDesktopContainer	= pageWrapper.querySelector('.p-header-second-line__inner'),
					navMobileContainer 	= pageWrapper.querySelector('.p-header-mobile__part' 	+ nav.getAttribute('mobile-part')),
			
					mobileMenuPart2	= pageWrapper.querySelector('.p-header-mobile__part2'),
			
					burger = header.querySelector('.js-burger'),
			
					submenuWrapper		  = document.querySelector('*[data-submenu-id="1"]'),
					submenuList			  = submenuWrapper.querySelector('.submenu-list'),
					submenuListItemActive = submenuList.querySelector('.submenu-list__item.active'),
					submenuListExpand	  = submenuList.querySelector('.submenu-list__expand');
			
					// console.log(submenuWrapper);
			
			
			
			
			
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
					mobileMenuPart2.style.transitionDelay = endNavAnimateTime + 's';
				}
			
				function navAnimateReverseDelay() {
					window.animateDelay.reverseDelay(navListItem, 0.65, 0.05);
					mobileMenuPart2.style.transitionDelay = '0.05s';
				}
			
			
			
			
			
				(function() { // SHIFT MENU
					function navShiftToMobile() {
						if (navMobileContainer.querySelector('.nav-main') == null) {
							navMobileContainer.appendChild(nav);
						}
					}
					function navShiftToDesktop() {
						if (navDesktopContainer.querySelector('.nav-main') == null) {
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
			
			
			
			
			
				(function() { // SUBMENU LIST
					if (!header.classList.contains('p-header-submenu-fixed')) return;
					submenuListExpand.textContent = submenuListItemActive.textContent;
					if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
						pageWrapper.insertBefore(submenuList, pageContent);
					}
					submenuListExpand.addEventListener('click', function() {
						submenuList.classList.toggle('show');
					});
					window.addEventListener('resize', function() {
						if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
							if (document.querySelector('.page-wrapper > .submenu-list') == null) {
								pageWrapper.insertBefore(submenuList, pageContent);
							}
						} else {
							if (submenuWrapper.querySelector('.submenu-list') == null) {
								submenuWrapper.appendChild(submenuList);
							}
						}
					});
				})();
			
			
			
			
			
				(function() { // HEADER SWIMMING
					var scrollPosition = 0;
					function headerSwimming() {
						if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
							// если меню активно заканчиваем
							if (header.classList.contains('is-active')) {
								return;
							}
							if (window.pageYOffset < 0) { // ios
								window.swimming.dontSwim(header);
								return;
							}
							if (window.pageYOffset < 70) {
								window.swimming.dontSwim(header);
								return;
							}
			
							if (window.pageYOffset > scrollPosition) {
								window.swimming.toSwim(header);
								// header.classList.add('scroll');
							} else {
								window.swimming.dontSwim(header);
								// header.classList.remove('scroll');
							}
							scrollPosition = window.pageYOffset;
						}
					}
					var headerSwimmingThrottle = isThrottling(headerSwimming, 300);
					window.addEventListener('scroll', function() {
						headerSwimmingThrottle();
					});
			
					window.addEventListener('scroll', function() {
						if (window.pageYOffset > 70) {
							if (!header.classList.contains('scroll')) {
								header.classList.add('scroll');
							}
						} else {
							if (header.classList.contains('scroll')) {
								header.classList.remove('scroll');
							}
						}
					});
				})();
			
			
			
			
			
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
		
			var heroSlider = document.querySelector('.hero-carousel__inner');
		
			if ( (heroSlider !== null) && (heroSlider.querySelectorAll('.hero-carousel__item').length > 1) ) {
				$('.hero-carousel__inner').slick({
					dots: true,
					dotsClass: 'slick-dots dots-type1',
					prevArrow:
					    '<button type="button" class="slick-arrow slick-arrow--prev slick-arrow--type1" aria-label="Previous">'
					    + '  <svg class="icon-svg icon-arrow-prev" width="100%" height="100%">'
					    + '    <use xlink:href="img/static/icons.svg#icon-arrow-prev"></use>'
					    + '  </svg>'
					    + '</button>',
					nextArrow:
						'<button type="button" class="slick-arrow slick-arrow--next slick-arrow--type1">'
						+ ' <svg class="icon-svg icon-arrow-next" width="100%" height="100%" aria-label="Next">'
						+ '    <use xlink:href="img/static/icons.svg#icon-arrow-next"></use>'
						+ '  </svg>'
						+ '</button>',
					appendArrows: $('.hero-carousel__control'),
					appendDots: $('.hero-carousel__control'),
					fade: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					// lazyLoad: 'ondemand'
				});
			}
		
		}
		// (function() {
		
		// 	const extraMenuHandler = document.querySelector('.extra-menu__title');
		
		// 	if (extraMenuHandler != null) {
		// 		const extraMenuToggle = function() {
		// 			extraMenuHandler.parentNode.classList.toggle('show');
		// 		}
		
		// 		extraMenuHandler.addEventListener('click', extraMenuToggle);
		// 	}
		
		// })();
		function productsCarousel() {
		
			var productsCarousel = document.querySelector('.products__inner.carousel');
		
			if (productsCarousel !== null) {
				$(productsCarousel).slick({
					slidesToShow: 5,
					slidesToScroll: 3,
					dots: true,
					dotsClass: 'slick-dots dots-type2',
					adaptiveHeight: true,
					prevArrow:
					'<button type="button" class="slick-btn slick-btn--prev slick-btn--type2" aria-label="Previous">'
					+ '	<svg class="icon-svg icon-arrow-rounded-left" width="100%" height="100%">'
					+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-left"></use>'
					+ '	</svg>'
					+ '</button>',
					nextArrow:
					'<button type="button" class="slick-btn slick-btn--next slick-btn--type2" aria-label="Next">'
					+ '	<svg class="icon-svg icon-arrow-rounded-right" width="100%" height="100%">'
					+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-right"></use>'
					+ '	</svg>'
					+ '</button>',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								dots: false
							}
						},
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								dots: false,
								arrows: false
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								sidesToScroll: 2,
								dots: false,
								arrows: false
							}
						}
					]
				});
		
			}
		
		}
		function productsMiniCarousel() {
		
			var productsMiniCarousel = document.querySelector('.products-mini__inner');
		
			if (productsMiniCarousel !== null) {
				$(productsMiniCarousel).slick({
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: true,
					dotsClass: 'slick-dots dots-type2',
					arrows: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 2,
							}
						},
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 2,
							}
						},
						{
							breakpoint: 550,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2,
							}
						}
					]
				});
		
			}
		
		}
		function table() {
		
			function expandToggle() {
				var table = this.parentNode;
				var expandSwitch = table.querySelector('.js-table__expand-btn');
				if (table.classList.contains('show')) {
					table.classList.remove('show');
					scrollToTop(table);
					expandSwitch.textContent = 'Развернуть';
				} else {
					table.classList.add('show');
					expandSwitch.textContent = 'Свернуть';
				}
			}
		
			function rowsToggle() {
				this.parentNode.classList.toggle('show');
			}
		
			function scrollToTop(table) {
				$('html, body').animate({
					scrollTop: table.offsetTop + (window.outerHeight - 200)
				}, 'slow');
			}
		
			function applyFilter(arr, flag) {
				arr.forEach(function(item) {
					if (item.same) {
						if (flag) {
							item.elements[0].closest('.table__row').classList.remove('row-title-hide');
							for (var i = 1; i < item.elements.length; i++) {
								item.elements[i].classList.remove('hide')
							}
						} else {
							item.elements[0].closest('.table__row').classList.add('row-title-hide');
							for (var i = 1; i < item.elements.length; i++) {
								item.elements[i].classList.add('hide')
							}
						}
					}
				});
			}
		
			function differencesFilter(inputEl, arr) {
				// let state = inputEl.checked;
				var state = inputEl.checked;
		
				switch (state) {
					case false:
						// applyFilter(arr, false);
						applyFilter(arr, true);
						break;
					case true:
						// applyFilter(arr, true);
						applyFilter(arr, false);
						// applyFilter(arr, false);
						break;
				}
			}
		
			function init() {
				var table 						 = document.querySelector('.table-outer'),
					expandSwitch			 	 = table.querySelectorAll('.js-table__expand-btn'),
					rowsSwitch				 	 = table.querySelectorAll('.js-table__rows-title'),
					differencesFilterHandler	 = table.querySelector('.js-table-differences-filter .checkbox-circle__label'),
					differencesFilterInput		 = table.querySelector('.js-table-differences-filter .checkbox-circle__input'),
					checkboxVariantHandler       = table.querySelector('.checkbox-circle__variant'),
					rows						 = table.querySelectorAll('.table__body .table__row');
		
				Array.prototype.forEach.call(rowsSwitch, function(item) {
					item.addEventListener('click', rowsToggle.bind(item));
				});
		
				Array.prototype.forEach.call(expandSwitch, function(item) {
					item.addEventListener('click', expandToggle.bind(item));
				});
		
				var values = [];
				Array.prototype.forEach.call(rows, function(item) {
					var elementsContainingData = item.querySelectorAll('*[data-value]'),
						tempData			   = [],
						tempElements		   = [],
						same				   = false;
		
					Array.prototype.forEach.call(elementsContainingData, function(item) {;
						tempData.push(item.getAttribute('data-value'));
						tempElements.push(item);
					});
		
					// проверка на одинаковые значения
					(function() {
						for (var i = 0; i < tempData.length; i++) {
							if ( !(tempData[0] === tempData[i]) ) {
								return;
							}
						}
						same = true;
					})();
		
					values.push({
						data: tempData,
						elements: tempElements,
						same: same
					});
				});
		
				applyFilter(values, !differencesFilterInput.checked);
		
				differencesFilterInput.addEventListener('change', differencesFilter.bind(null, differencesFilterInput, values));
				// differencesFilterHandler.addEventListener('click', differencesFilter.bind(null, differencesFilterInput, values));
				checkboxVariantHandler.addEventListener('click', differencesFilter.bind(null, differencesFilterInput, values));
			}
		
			return init();
		
		}
		
		
		
		
		
		// function closeRows(table) {
		// 	let rows = table.querySelectorAll('.table__rows-outer:nth-child(n + 2)');
		// 	[].forEach.call(rows, function(item) {
		// 		if (item.classList.contains('show')) {
		// 			item.classList.remove('show');
		// 		}
		// 	});
		// }
		
		// function openFirstRows(table) {
		// 	let firstRows = table.querySelector('.table__rows-outer:first-child');
		// 	if (!firstRows.classList.contains('show')) {
		// 		firstRows.classList.add('show');
		// 	}
		// }
		function basket() {
		
			var addToCartHandler       = document.querySelectorAll('.js-add-to-cart'),
				basket                 = document.querySelector('.basket-popup'),
				orderPopupHandler      = document.querySelector('.js-order-popup'),
				orderClosePopupHandler = document.querySelector('.js-order-popup-close'),
				orderPopup             = document.querySelector('.order-popup');
		
			Array.prototype.forEach.call(addToCartHandler, function(item) {
				item.addEventListener('click', function(e) {
					e.preventDefault();
					$.magnificPopup.open({
					  items: {
					    src: basket
					  },
					  type: 'inline',
					  fixedContentPos: true,
					  closeMarkup:
					  '<button class="popup-close mfp-close" type="button" title="%title%">'
					  + ' <svg class="icon-svg icon-close" width="100%" height="100%">'
					  + '	<use xlink:href="img/static/icons.svg#icon-close"></use>'
					  + ' </svg>'
					  + '</button>',
					  tClose: 'Закрыть'
					}, 0);
				});
			});
			// $(addToCartHandler).click(function(e) {
			// 	e.preventDefault();
			// 	$.magnificPopup.open({
			// 	  items: {
			// 	    src: basket
			// 	  },
			// 	  type: 'inline',
			// 	  closeMarkup:
			// 	  `<button class="popup-close mfp-close" type="button" title="%title%">
			// 		<svg class="icon-svg icon-close" width="100%" height="100%">
			// 			<use xlink:href="img/static/icons.svg#icon-close"></use>
			// 		</svg>
			// 	  </button>`,
			// 	  tClose: 'Закрыть'
			// 	}, 0);
			// });
		
		
			$(orderPopupHandler).click(function() {
				$.magnificPopup.close();
				setTimeout(function() {
					$.magnificPopup.open({
					  items: {
					    src: orderPopup
					  },
					  type: 'inline',
					  fixedContentPos: true,
					  closeMarkup:
					  '<button class="popup-close mfp-close" type="button" title="%title%">'
					  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
					  + '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
					  + '</svg>'
					  + '</button>',
					  tClose: 'Закрыть'
					}, 0);
				}, 100);
			});
		
			function toggleBlockingButton(state) {
				if (state === 1) {
					Array.prototype.forEach.call(orderButtons, function(item) {
						item.setAttribute('disabled', true);
					});
				} else {
					Array.prototype.forEach.call(orderButtons, function(item) {
						item.removeAttribute('disabled');
					});
				}
			}
		
			function checkTheStatusChoice() {
				var state = (choiceSwitchinput.checked === true)
					? 1
					: 0
				toggleBlockingButton(state);
			}
		
			var choiceSwitchLabel = orderPopup.querySelector('.js-order-popup-choice label'),
				choiceSwitchinput = orderPopup.querySelector('.js-order-popup-choice input'),
				orderButtons = orderPopup.querySelectorAll('.js-order-popup-btn');
		
			choiceSwitchLabel.addEventListener('click', checkTheStatusChoice);
		
			orderClosePopupHandler.addEventListener('click', function() {
				$.magnificPopup.close();
			});
		
		}
		function map() {
		
			var mapWrapper 	= document.querySelector('.map'),
				coordinates = JSON.parse(mapWrapper.getAttribute('data-geo')),
				lat 		= coordinates[0].lat,
				lng 		= coordinates[0].lng;
		
			ymaps.ready(init);
		
			function init() {
				map = new ymaps.Map('map', {
					center: [lat, lng],
					zoom: 7
				});
				map.behaviors.disable('scrollZoom');
			}
		
		}
		function vacanciesSwitch() {
		
			function vacanciesViewToggle(element) {
				element.classList.toggle('show');
			}
		
			function init() {
		
				var vacancy = document.querySelectorAll('.vacancies-list__item');
		
				[].forEach.call(vacancy, function(item) {
					var vacancySwitchButton = item.querySelector('.js-vacancy-btn');
		
					vacancySwitchButton.addEventListener('click', vacanciesViewToggle.bind(null, item))
				});
		
			}
		
			return init();
		
		}
		function filling(element) {
		
		
			var DIRECTION = {
				NEXT : 'next',
				PREV : 'prev'
			}
		
		
			var STEPS_NAMES = {
				0 : 'Шаг первый',
				1 : 'Шаг второй',
				2 : 'Шаг третий',
				3 : 'Шаг четвертый'
			}
		
		
			function Model() {
				this.slides = [];
				this.slidesCount = 0;
				this.currentStep = 0;
			}
		
		
			function View() {
				this.container = document.querySelector(element);
				this.steps = this.container.querySelectorAll('.js-filling-step');
				this.stepTitle = this.container.querySelector('.js-step-title');
				this.slides = this.container.querySelectorAll('.js-filling-item');
				this.nav = this.container.querySelectorAll('.js-filling-control');
			}
		
		
			function Controller(model, view) {
		
				var self = this;
		
				this.init = function() {
					self.setId();
		
					model.slidesCount = view.slides.length;
		
					[].forEach.call(view.nav, function(item) {
						item.id = item.getAttribute('data-direction');
						item.addEventListener('click', self.checkDirection.bind(null, item));
					});
		
				}
		
				this.setId = function() {
					[].forEach.call(view.slides, function(item, i) {
						item.setAttribute('data-id', i)
					});
		
					[].forEach.call(view.steps, function(item, i) {
						item.setAttribute('data-id', i);
					});
				}
		
				this.checkDirection = function(element) {
					self.slidesControl(element.id);
				}
		
				this.permissionToMove = function(state) {
					if (state == DIRECTION.NEXT) {
						return (model.currentStep < model.slidesCount - 1) ? true : false;
					}
					if (state == DIRECTION.PREV) {
						return (model.currentStep > 0) ? true : false;
					}
				}
		
				this.slidesControl = function(state) {
					if (!self.permissionToMove(state)) return false;
		
					self.closeStep();
		
					switch (state) {
						case 'next':
							view.steps[model.currentStep].classList.add('finished');
							model.currentStep += 1;
							break;
						case 'prev':
							model.currentStep -= 1;
							break;
					}
		
					view.container.setAttribute('data-stage', model.currentStep + 1);
		
					var slide = view.slides[model.currentStep],
						step  = view.steps[model.currentStep],
						stepTitle = view.stepTitle;
		
					slide.classList.add('show');
					step.classList.add('active');
					stepTitle.textContent = STEPS_NAMES[model.currentStep];
				}
		
				this.closeStep = function() {
					var activeStep = view.steps[model.currentStep],
						activeSlide = view.slides[model.currentStep];
					activeStep.classList.remove('active');
					activeSlide.classList.remove('show');
				}
		
			}
		
		
			function init() {
		
				var view 	   = new View(),
					model 	   = new Model(),
					controller = new Controller(model, view);
		
				controller.init();
		
			}
		
		
			return init();
		
		
		}
		function tradeinTabs() {
			var tabs 		   = document.querySelector('.l-tradein-tabs'),
				navItemHandler = tabs.querySelectorAll('.l-tradein-tabs__nav-item'),
				title		   = document.querySelector('.js-tradein-title');
		
			function tabsToggle(item) {
				var activeTabs     = tabs.querySelector('.l-tradein-tabs__nav-item.active');
				activeTabs.classList.remove('active');
		
				item.classList.add('active');
				tabs.insertBefore(item, tabs.firstChild);
		
				title.textContent = item.getAttribute('data-title');
			}
		
			Array.prototype.forEach.call(navItemHandler, function(item) {
				if ( item.classList.contains('active') ) {
					title.textContent = item.getAttribute('data-title');
				}
				item.addEventListener('click', tabsToggle.bind(null, item));
			});
		}
		function carSaleList() {
		
			var items = document.querySelectorAll('.car-sale-list__item'),
				labelOuter = document.querySelector('.js-car-sale-list-label');
		
			Array.prototype.forEach.call(items, function(item) {
				var input		= item.querySelector('.car-sale-list__item-input'),
					label       = item.querySelector('.car-sale-list__item-label'),
					description = item.querySelector('.car-sale-list__item-description');
		
				if (input.checked) {
					labelOuter.innerHTML = description.innerHTML;
				}
		
				label.addEventListener('click', function() {
					labelOuter.innerHTML = description.innerHTML;
				});
		
			});
		
		}
		function goodsItemDisplayToggle() {
		
			var goodsItemHandler = document.querySelector('.js-goods-item-handler'),
				goodsItemParent  = goodsItemHandler.parentNode;
		
			function itemDisplayToggle(el) {
				el.classList.toggle('show');
			}
		
			goodsItemHandler.addEventListener('click', itemDisplayToggle.bind(null, goodsItemParent));
		
		}
		function feedbackPopup() {
		
			var modalHandler = document.querySelector('.js-feedback-popup'),
				modal = document.querySelector('.feedback-popup');
		
			$(modalHandler).click(function(e) {
				e.preventDefault();
				$.magnificPopup.open({
				  items: {
				    src: modal
				  },
				  type: 'inline',
				  fixedContentPos: true,
				  closeMarkup:
				  '<button class="popup-close mfp-close" type="button" title="%title%">'
				  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
				  + '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
				  + '</svg>'
				  + '</button>',
				  tClose: 'Закрыть'
				}, 0);
			});
		
			// // закрыть окошко
			// modal.addEventListener('click', function(e) {
			// 	let target = e.target;
			// 	while (!target.classList.contains('popup-close')) {
			// 		target = target.parentNode;
			// 		if (target.classList.contains('popup-close')) {
			// 			$.magnificPopup.close();
			// 			return;
			// 		}
			// 	}
			// });
		
		}
		function popupResponse() {
		
			var vacanciesList = document.querySelector('.vacancies-list'),
				modal = document.querySelector('.popup-response');
		
			vacanciesList.addEventListener('click', function(e) {
				if (e.target.classList.contains('js-popup-response')) {
					
					$.magnificPopup.open({
						items: {
							src: modal
						},
						type: 'inline',
						fixedContentPos: true,
						closeMarkup:
						'<button class="popup-close mfp-close" type="button" title="%title%">'
						+ '<svg class="icon-svg icon-close" width="100%" height="100%">'
						+ '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
						+ '</svg>'
						+'</button>',
						tClose: 'Закрыть'
					}, 0);
		
				}
			});
		
		}
		function popupSentence() {
		
			var modalHandler = document.querySelector('.js-popup-sentence'),
				modal 		 = document.querySelector('.popup-sentence');
		
			$(modalHandler).click(function(e) {
				e.preventDefault();
				$.magnificPopup.open({
				  items: {
				    src: modal
				  },
				  type: 'inline',
				  fixedContentPos: true,
				  closeMarkup:
				  '<button class="popup-close mfp-close" type="button" title="%title%">'
				  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
				  + '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
				  + '</svg>'
				  + '</button>',
				  tClose: 'Закрыть'
				}, 0);
			});
		
		}
		function popupOffer() {
		
			var modalHandler = document.querySelectorAll('.js-popup-offer'),
				modal 		 = document.querySelector('.popup-offer');
		
		
			$(modalHandler).click(function(e) {
				e.preventDefault();
				$.magnificPopup.open({
				  items: {
				    src: modal
				  },
				  type: 'inline',
				  fixedContentPos: true,
				  closeMarkup:
				  '<button class="popup-close mfp-close" type="button" title="%title%">'
				  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
				  + '	<use xlink:href="img/static/icons.svg#icon-close"></use>'
				  + '</svg>'
				  + '</button>',
				  tClose: 'Закрыть'
				}, 0);
			});
		
		}
		function popupBookIt() {
		
			var modalHandler = document.querySelectorAll('.js-popup-book-it'),
				modal 		 = document.querySelector('.popup-book-it');
		
			Array.prototype.forEach.call(modalHandler, function(item) {
				item.addEventListener('click', function(e) {
					e.preventDefault();
					$.magnificPopup.open({
						items: {
							src: modal
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
		function popupCredit() {
		
			var modalHandler = document.querySelectorAll('.js-popup-credit'),
				modal 		 = document.querySelector('.popup-credit');
		
			Array.prototype.forEach.call(modalHandler, function(item) {
				item.addEventListener('click', function(e) {
					e.preventDefault();
					$.magnificPopup.open({
						items: {
							src: modal
						},
						type: 'inline',
						fixedContentPos: true,
						closeMarkup:
						'<button class="popup-close mfp-close" type="button" title="%title%">'
						+ '  <svg class="icon-svg icon-close" width="100%" height="100%">'
						+ '    <use xlink:href="img/static/icons.svg#icon-close"></use>'
						+ '  </svg>'
						+ '</button>',
						tClose: 'Закрыть'
					}, 0);
				});
			});
		
		}
		function popupKasko() {
		
			var contentItems 	    	= document.querySelectorAll('.popup-kasko__content-part'),
				nextStepHandler   		= document.querySelectorAll('.js-popup-kasko-next'),
				contentItemsArray 		= [],
				formWrapper				= document.querySelector('.popup-kasko__grid');
		
			function renderListOfSelected() {
				var fields = [],
					field1 = document.querySelector('.field-group[kasko-field="1"] select'),
					field4 = document.querySelector('.field-group[kasko-field="4"] select'),
					field5 = document.querySelector('.field-group[kasko-field="5"] select'),
					field8 = document.querySelector('.field-group[kasko-field="8"] select');
		
				field1 = field1.options[field1.options.selectedIndex].value;
				field4 = field4.options[field4.options.selectedIndex].value;
				field5 = field5.options[field5.options.selectedIndex].value;
				field8 = field8.options[field8.options.selectedIndex].value;
		
				var field2 = document.querySelector('.field-group[kasko-field="2"] input[checked]').value,
					field3 = document.querySelector('.field-group[kasko-field="3"] input[checked]').value,
					field6 = document.querySelector('.field-group[kasko-field="6"] input[checked]').value,
					field7 = document.querySelector('.field-group[kasko-field="7"] input[checked]').value,
					field9 = document.querySelector('.field-group[kasko-field="9"] input[checked]').value;
		
				fields.push(
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
		
			function init() {
		
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
		
				var kaskoListHandler = formWrapper.querySelector('.js-kasko-list-handler'),
						kaskoListWrapper = kaskoListHandler.parentNode;
		
				kaskoListHandler.addEventListener('click', function(item) {
					kaskoListWrapper.classList.toggle('show');
				});
		
		
				var modalHandler = document.querySelectorAll('.js-popup-kasko'),
					modal 		 = document.querySelector('.popup-kasko');
		
				if (modalHandler !== null && modal !== null) {
		
					Array.prototype.forEach.call(modalHandler, function(item) {
						item.addEventListener('click', function(e) {
							e.preventDefault();
							$.magnificPopup.open({
								items: {
									src: modal
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
		
			}
		
			return init();
		
		}
		function popupPreOrder() {
		
			var modalHandler = document.querySelector('.js-popup-pre-order'),
				modal 		 = document.querySelector('.pre-order');
		
			$(modalHandler).click(function(e) {
				e.preventDefault();
				$.magnificPopup.open({
				  items: {
				    src: modal
				  },
				  type: 'inline',
				  fixedContentPos: true,
				  closeMarkup:
				  '<button class="popup-close mfp-close" type="button" title="%title%">'
				  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
				  + '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
				  + '</svg>'
				  + '</button>',
				  tClose: 'Закрыть'
				}, 0);
			});
		
		}
		function carFilter() {
		
			function init() {
				var carFilterEl = document.getElementById('js-car-filter'),
					filterReset = carFilterEl.querySelector('.filter-reset'),
					selects	= carFilterEl.querySelectorAll('.js-select'),
					sliders	= carFilterEl.querySelectorAll('.range-slider .range');
		
				filterReset.addEventListener('click', function() {
					carFilterEl.reset();
					$(selects).selectric('refresh');
		
					Array.prototype.forEach.call(sliders, function(item) {
						$(item).data("ionRangeSlider").reset();
					});
		
				});
			}
		
			return init();
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
		
				// console.log(item);
				// console.log(title);
				// console.log(options.title);
		
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
						tClose: 'Закрыть'
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
					+ '  <a href="' + items[i].link + '" class="offers__item-title title-20">' + items[i].title + '</a>'
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
		// partials/layouts/sticky-sidebar.js
		function popupTradein() {
		
			var modalHandler = document.querySelector('.js-popup-tradein'),
				modal 		 = document.querySelector('.popup-tradein');
		
			$(modalHandler).click(function(e) {
				e.preventDefault();
				$.magnificPopup.open({
				  items: {
				    src: modal
				  },
				  type: 'inline',
				  fixedContentPos: true,
				  closeMarkup:
				  '<button class="popup-close mfp-close" type="button" title="%title%">'
				  + '<svg class="icon-svg icon-close" width="100%" height="100%">'
				  + '  <use xlink:href="img/static/icons.svg#icon-close"></use>'
				  + '</svg>'
				  + '</button>',
				  tClose: 'Закрыть'
				}, 0);
			});
		
		}





	// blocks

		function listFilter() {
		
			var listHybridHandler = document.querySelectorAll('.list-filter-title');
		
			Array.prototype.forEach.call(listHybridHandler, function(elem) {
				elem.addEventListener('click', function() {
					// console.log(elem);
					elem.parentNode.classList.toggle('show');
				});
			});
		
		}
		function expandBox() {
		
			var expandHandler = document.querySelectorAll('.js-expand-btn');
		
			Array.prototype.forEach.call(expandHandler, function(elem) {
				elem.addEventListener('click', function() {
					elem.nextElementSibling.classList.add('show');
					elem.parentNode.removeChild(elem);
				});
			});
		
		}
		function listCars() {
		
			var listCarsHandler = document.querySelectorAll('.list-cars-title');
		
			function listToggle(element) {
				element.classList.toggle('show');
			}
		
			Array.prototype.forEach.call(listCarsHandler, function(item) {
				var itemParent = item.parentNode;
		
				item.addEventListener('click', listToggle.bind(null, itemParent));
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
		
				if (element.value < 10) {
					element.value = '0' + element.value;
				}
		
				return true;
			}
		
			function countingMinus(element) {
				var val = element.value;
		
				if (+val > 1) {
					element.value = +val - 1;
		
					if (element.value < 10) {
						element.value = '0' + element.value;
					}
		
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
					inputEl.addEventListener('click', function() {
						if (item.classList.contains('error')) {
							item.classList.remove('error');
							var errorMessage = item.querySelector('.error-text');
							item.removeChild(errorMessage);
						}
					})
		
				});
		
			})();
		
		}
		function basketItem() {
		
			function removeItem(element) {
				element.parentNode.removeChild(element);
			}
		
			function updateCount(field, countGoods) {
				countGoods.textContent = field.value;
				if (countGoods.textContent[0] == '0') {
					countGoods.textContent = countGoods.textContent.substring(1);
				}
			}
		
			function init() {
		
				var basketItem = document.querySelectorAll('.basket-item');
		
				[].forEach.call(basketItem, function(item) {
					var removeItemHandler	   = item.querySelector('.basket-item__remove'),
						countGoods			   = item.querySelector('.basket-item__count'),
						field				   = item.querySelector('.quantity-counter__input'),
						countingControlHandler = item.querySelectorAll('.js-quantity-counter__control');
		
					removeItemHandler.addEventListener('click', removeItem.bind(null, item));
		
					Array.prototype.forEach.call(countingControlHandler, function(item) {
						item.addEventListener('click', updateCount.bind(null, field, countGoods));
					});
		
					field.addEventListener('keyup', updateCount.bind(null, field, countGoods));
				});
		
			}
		
			return init();
		
		}
		function carCardGallery() {
		
			// let gallery = document.querySelectorAll('.car-card__gallery');
		
			// [].forEach.call(gallery, function(item) {
			// 	$(item).slick({
			// 		slidesToShow: 1,
			// 		slidesToScroll: 1,
			// 		dots: true,
			// 		dotsClass: 'slick-dots lines',
			// 		arrows: false,
			// 		infinite: false
			// 	});
			// });
		
			// initPhotoSwipeFromDOM('.car-card__gallery', true);
		
			$(".brazzers__thumbs").each(function() {
				var thumbs = $(this);
				thumbs.siblings('.brazzers__images').find("img").each(function() {
					thumbs.append("<i>");
				});
			});
		
			$(".brazzers__thumbs i")
				.hover(function() {
					if (window.matchMedia("(max-width: 600px)").matches) return;
					var this_img = $(this).parent(".brazzers__thumbs").siblings('.brazzers__images').find("img");
					var all_thmbs = $(this).parent().find("i");
					$(this).parents(".brazzers").css('opacity', 1);
					this_img.css('opacity', 0).eq($(this).index()).css('opacity', 1);
					all_thmbs.removeClass("is-active");
					$(this).addClass("is-active");
				})
				.parents(".brazzers").mouseleave(function() {
					if (window.matchMedia("(max-width: 600px)").matches) return;
					$(this).css('opacity', 0);
				});
		
		}
		function carFilterDisplayToggle() {
		
			var carFilterHandler = document.querySelector('.js-car-filter-expand-btn');
		
			if (carFilterHandler !== null) {
		
				var expandBlock = document.querySelector('.car-filter__foot');
		
				carFilterHandler.addEventListener('click', function() {
					expandBlock.classList.toggle('show');
				});
		
			}
		
		}
		function tableCharacteristicShowToggle() {
		
			var box = document.querySelectorAll('.car-info-group');
		
			function showToggle(el) {
				el.classList.toggle('show');
			};
		
			Array.prototype.forEach.call(box, function(item) {
				var title = item.querySelector('.car-info-group__title');
				title.addEventListener('click', showToggle.bind(null, item));
			});
		
		}
		function carGallery() {
		
			function init() {
				var carGalleryFor = $('.js-car-gallery-for'),
					carGalleryNav = $('.js-car-gallery-nav');
		
				if ( (carGalleryFor.length) & (carGalleryNav.length) ) {
					// console.log(carGalleryFor);
					// console.log(carGalleryNav);
					carGalleryFor.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						arrows: false,
						asNavFor: '.js-car-gallery-nav',
						lazyLoad: 'progressive'
					});
					carGalleryNav.slick({
						lazyLoad: 'progressive',
						slidesToShow: 6,
						slidesToScroll: 1,
						infinite: false,
						asNavFor: '.js-car-gallery-for',
						focusOnSelect: true,
						centerPadding: 50,
						customPaging: 50,
						prevArrow:
							'<button type="button" class="slick-btn slick-btn--type1 slick-btn--prev" aria-label="Previous">'
							+ '	<svg class="icon-svg icon-arrow-rounded-left" width="100%" height="100%">'
							+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-left"></use>'
							+ '	</svg>'
							+ '</button>',
						nextArrow:
							'<button type="button" class="slick-btn slick-btn--type1 slick-btn--next" aria-label="Next">'
							+ '	<svg class="icon-svg icon-arrow-rounded-right" width="100%" height="100%">'
							+ '		<use xlink:href="img/static/icons.svg#icon-arrow-rounded-right"></use>'
							+ '	</svg>'
							+ '</button>',
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 4,
									slidesToScroll: 1,
									dots: false,
									arrows: false
								}
							},
						]
					});
				}
			}
		
			return init();
		
		}
		function cardProductGallery() {
		
			function init() {
		
				var container = $('.card-product__gallery-inner');
		
				if (container.length) {
		
					container.slick({
						prevArrow: '<button type="button" class="slick-btn slick-btn--prev slick-btn--square" aria-label="Previous"></button>',
						nextArrow: '<button type="button" class="slick-btn slick-btn--next slick-btn--square" aria-label="Next"></button>',
						infinite: false,
						slidesToShow: 1,
						slidesToScroll: 1
					});
		
				}
		
			}
		
			return init();
		
		}
		function moveSide() {
		
			var containerSide	 = document.querySelector('.car__side'),
				containerContent = document.querySelector('.car__content'),
				element			 = containerSide.querySelector('.side-t1'),
				carGallery		 = containerContent.querySelector('.car__gallery');
		
			var location = 0;
		
			function move(element) {
				var carSticky = document.querySelector('.car-sticky');
		
				if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
			 		if (location == 0) {
				 		containerContent.insertBefore(element, carGallery.nextSibling);
				 		location = 1;
					}
				} else {
					if (location == 1) {
						if (carSticky != null) {
							carSticky.insertBefore(element, carSticky.children[0]);
						} else {
							containerSide.insertBefore(element, containerSide.children[0]);
						}
				 		location = 0;
					}
				}
			}
		
			function init() {
				if (window.matchMedia("(max-width: " + m10 + "px)").matches) {
					move(element);
				}
				window.addEventListener('resize', move.bind(null, element));
			}
		
			return init();
		
		}
		// partials/blocks/form-t3.js
		function cardShopChangeOnScroll() {
		
		    function getCoords(element) {
		        var box = element.getBoundingClientRect();
		
		        return box.top + pageYOffset;
		    }
		
		    function cardShopCheckPosition(element, side) {
		        var elementY = getCoords(side),
		            documentY = window.pageYOffset;
		
		        // console.log(`element page offset: ${elementY}`);
		        // console.log(`document page offset: ${documentY}`);
		        // console.log(`elementY + height: ${elementY + element.offsetHeight}`);
		
		        compression(element, elementY, documentY);
		    }
		
		
		    function compression(element, elementY, documentY) {
		        // console.log(`element page offset: ${elementY}`);
		        // console.log(`document page offset: ${documentY}`);
		        // console.log(`elementY + height: ${elementY + element.offsetHeight}`);
		        if (documentY > (elementY + 100) + element.offsetHeight) {
		            // сжать
		            // console.log('сжать');
		            if (!element.classList.contains('compressed')) {
		                element.classList.add('compressed');
		            }
		        } else {
		            // расжать
		            // console.log('расжать');
		            if (element.classList.contains('compressed')) {
		                element.classList.remove('compressed');
		            }
		        }
		    }
		
		    function init() {
		
		        var cardShop = document.querySelector('.card-shop'),
		            side     = document.querySelector('.side-t1');
		
		        var cardShopCheckPositionThrottle = isThrottling(cardShopCheckPosition.bind(null, cardShop, b1), 300);
		
		        window.addEventListener('scroll', cardShopCheckPositionThrottle);
		    }
		
		    return init();
		
		}
		// partials/blocks/select-dynamic.js
		function formToggleCheck() {
		
		
			function toggleBlockingButton(element, btns) {
				if ( checkTheStatusChoice(element) === 'enabled') {
					[].forEach.call(btns, function(item) {
						item.setAttribute('disabled', true);
					});
				} else {
					[].forEach.call(btns, function(item) {
						item.removeAttribute('disabled');
					});
				}
			}
		
		
		
			function checkTheStatusChoice(element) {
				return (element.checked === true) ? 'enabled' : 'disabled';
			}
		
		
			function init() {
		
				var blockChoiceWrapper = document.querySelectorAll('.js-block-choice-wrapper');
		
				[].forEach.call(blockChoiceWrapper, function(item) {
					var blockChoiceHandler = item.querySelector('.js-block-choice-handler'),
						blockChoiceInput   = item.querySelector('.block-choice__checkbox'),
						blockChoiceBtn     = item.querySelectorAll('.js-block-choice-btn');
		
					blockChoiceHandler.addEventListener('click', toggleBlockingButton.bind(null, blockChoiceInput, blockChoiceBtn));
				});
		
			}
		
		
			return init();
		
		
		}
		function carSaleExpand() {
		
			var expandHandler  = document.querySelector('.js-car-sale-btn-more'),
				carSaleFilter  = document.querySelector('.js-car-sale__filter'),
				stateAnimation = 0;
		
			if (expandHandler !== null && carSaleFilter !== null) {
		
				expandHandler.addEventListener('click', function() {
					if (stateAnimation) return;
		
					if ( carSaleFilter.classList.contains('show') ) {
						carSaleFilter.classList.remove('show');
						carSaleFilter.classList.remove('box-overflow-visible');
					} else {
						carSaleFilter.classList.add('show');
						setTimeout(function() {
							carSaleFilter.classList.add('box-overflow-visible');
						}, 500);
					}
					stateAnimation = 1;
		
					setTimeout(function() {
						stateAnimation = 0;
					}, 500);
				});
		
			}
		
		}
		// partials/blocks/js-social.js
		function checboxCircle() {
			var elements = document.querySelectorAll('.checkbox-circle');
		
			Array.prototype.forEach.call(elements, function(item) {
				var field    = item.querySelector('.checkbox-circle__input'),
					variants = item.querySelectorAll('.checkbox-circle__variant');
		
				Array.prototype.forEach.call(variants, function(item) {
					item.addEventListener('click', function() {
						if (variants.length == 1) {
							field.checked = !field.checked;
						}
						if (variants.length == 2) {
							if (item.classList.contains('checkbox-circle__variant--disabled')) {
								field.checked = false;
							}
							if (item.classList.contains('checkbox-circle__variant--enabled')) {
								field.checked = true;
							}
						}
					});
				});
		
			});
		}





	// forms

		function slider() {
		
		    function init() {
		
		        var sliderContainer = document.querySelectorAll('.range-slider');
		
		        [].forEach.call(sliderContainer, function(item) {
		            var slider = item.querySelector('.range'),
		
		                min = parseInt(item.getAttribute('data-min')),
		                max = parseInt(item.getAttribute('data-max')),
		
		                postfix = item.getAttribute('data-postfix');
		
		            $(slider).ionRangeSlider({
		                type: "double",
		                min: min,
		                max: max,
		                from: min,
		                to: 2000000,
		                step: 1,
		                // prefix: "от: ",
		                postfix: postfix,
		                onStart: function (data) {
		                    $('.range-slider__info').html(new Intl.NumberFormat('ru-RU').format(data.from)
		                        + ' - ' + new Intl.NumberFormat('ru-RU').format(data.to));
		                },
		                onChange: function (data) {
		                    $('.range-slider__info').html(new Intl.NumberFormat('ru-RU').format(data.from)
		                        + ' - ' + new Intl.NumberFormat('ru-RU').format(data.to));
		                }
		            });
		        });
		
		    }
		
		    return init();
		
		}
		
		slider();
		function select() {
		
			var closeAllSelect = function() {
				var elements = $('.js-select-desktop.open');
				if (elements.length > 0) {
					elements.removeClass('open');
				}
			}
		
			var selectToggle = function(el) {
				if (el.classList.contains('open')) {
					el.classList.remove('open');
				} else {
					el.classList.add('open');
				}
			};
		
		
			return (function() {
		
				var select = document.querySelectorAll('.select');
		
				Array.prototype.forEach.call(select, function(item) {
					var selectDesktopHandler = item.querySelector('.js-select-desktop');
					selectDesktopHandler.addEventListener('click', selectToggle.bind(null, selectDesktopHandler));
				});
		
			})();
		
			$('.js-select').selectric();
		
		}
		
		
		
		
		if ( $('.js-select').length ) {
		  $('.js-select').each(function() {
		    var $this = $(this);
		
		    $this.attr('data-enable', 0);
		
		    $this.selectric({
		      onChange: function(element) {
		        if ( $('.js-count-filter').length ) {
		          var $this      = $(this),
		              countValue = $this.closest('.js-count-filter').find('span[data-count]').attr('data-count');
		
		          if ( $this.closest('.selectric-js-select').find('.selectric-scroll .selected').attr('data-index') !== '0' ) {
		            if ( $this.attr('data-enable') == '0' ) {
		              countValue++;
		              setFilterCounter($this.closest('.js-count-filter'), countValue);
		              $this.attr('data-enable', '1');
		            }
		          } else {
		            countValue--;
		            setFilterCounter($this.closest('.js-count-filter'), countValue);
		            $this.attr('data-enable', '0');
		          }
		        }
		      },
		      onOpen: function(element) {
		        var parent = element.closest('.select-outer');
		        if ( parent.classList.contains('error') ) {
		          var errorText = parent.querySelector('.error-text');
		          parent.classList.remove('error');
		          errorText.parentNode.removeChild(errorText);
		        }
		      }
		    });
		  });
		}
		// partials/forms/form.js








	$(document).on('click', 'a[href^="#"]', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	// pages






});