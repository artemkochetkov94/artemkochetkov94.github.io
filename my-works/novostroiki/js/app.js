$(document).ready(function() {





	media9 = 991;
	media7 = 767;
	media10 = 1023;
	
	KEY = {
		"LEFT": 37,
		"RIGHT": 39
	}


	/* ************************* */
	/* ***** HEADER-SCROLL ***** */
	/* ************************* */
	if ( $(window).scrollTop() >= 150 ) {
		$('.header-fixed').addClass('header-fixed--show');
	}
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= 150 ) {
			$('.header-fixed').addClass('header-fixed--show');
		} else {
			$('.header-fixed').removeClass('header-fixed--show');
		}
	})
	
	
	
	
	
	if ( $(window).scrollTop() >= 50 ) {
		$('.page-header--transparent').addClass('scroll');
	}
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() >= 50 ) {
			$('.page-header--transparent').addClass('scroll');
		} else {
			$('.page-header--transparent').removeClass('scroll');
		}
	})

	$('.hamburger').click(function() {
		mheader = $('.page-header');
		mbody = $('body');
		if ( mheader.hasClass('menu-open') ) {
			mheader.removeClass('menu-open');
			mbody.removeClass('no-scroll');
			$(this).removeClass('is-active');
		} else {
			mheader.addClass('menu-open');
			mbody.addClass('no-scroll');
			$(this).addClass('is-active');
		}
	})
	
	$(window).resize(function() {
		if (window.matchMedia("(min-width: " + (media10 + 1) + "px)").matches) {
			if ( $('.menu-open').hasClass('menu-open') ) {
				mheader.removeClass('menu-open');
				mbody.removeClass('no-scroll');
				$('.hamburger').removeClass('is-active');
			}
		}
	})

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

	// $('.callback__button, .main-hero__button').click(function(e) {
	// 	e.preventDefault();
	// 	$.magnificPopup.open({
	// 		items: {
	// 			src: $('.modal-callback')
	// 		},
	// 		mainClass: 'mfp-fade',
	// 		type: 'inline',
	// 		tClose: 'Закрыть (Esc)',
	// 		tLoading: 'Загружаю...',
	// 		closeOnBgClick: true,
	// 		closeBtnInside: true,
	// 		removalDelay: 250
	// 	}, 0);
	// })

	$('.js-g-modal').click(function(e) {
		e.preventDefault();
		$('.g-modal').find('.g-modal__title').text($(this).attr('modal-title'));
		$('.g-modal').find('.send__button .button').text($(this).attr('modal-button-title'));
		$.magnificPopup.open({
			items: {
				src: $('.g-modal')
			},
			mainClass: 'mfp-fade',
			type: 'inline',
			tClose: 'Закрыть (Esc)',
			tLoading: 'Загружаю...',
			closeOnBgClick: true,
			closeBtnInside: true,
			removalDelay: 250
		}, 0);
	});

	var initPhotoSwipeFromDOM = function(gallerySelector, owl) {
	
	    // parse slide data (url, title, size ...) from DOM elements 
	    // (children of gallerySelector)
	    var parseThumbnailElements = function(el) {
	        var thumbElements = el.childNodes,
	            numNodes = thumbElements.length,
	            items = [],
	            figureEl,
	            linkEl,
	            size,
	            item;
	
	        for(var i = 0; i < numNodes; i++) {
	
	            owl
	                ? figureEl = thumbElements[i].children[0]
	                : figureEl = thumbElements[i]
	            // include only element nodes 
	            if(figureEl.nodeType !== 1) {
	                continue;
	            }
	
	            linkEl = figureEl.children[0]; // <a> element
	            imgEl = linkEl.children[0];
	
	            // console.log(linkEl);
	            size = linkEl.getAttribute('data-size').split('x');
	            // console.log(size);
	            // create slide object
	            item = {
	                src: linkEl.getAttribute('href'),
	                w: parseInt(size[0], 10),
	                h: parseInt(size[1], 10)
	                // w: imgEl.naturalWidth * 3,
	                // h: imgEl.naturalHeight * 3
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
	        owl
	            ? clickedGallery = clickedListItem.parentNode.parentNode
	            : clickedGallery = clickedListItem.parentNode
	        var childNodes;
	
	        owl
	            ? childNodes = clickedListItem.parentNode.parentNode.childNodes
	            : childNodes = clickedListItem.parentNode.childNodes
	
	        var numChildNodes = childNodes.length,
	            nodeIndex = 0,
	            index;
	
	        for (var i = 0; i < numChildNodes; i++) {
	            if(childNodes[i].nodeType !== 1) { 
	                continue; 
	            }
	
	            if (owl) {
	                if (childNodes[i].children[0] === clickedListItem) {
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
	            },
	
	            shareEl: false,
	            fullscreenEl: false,
	            zoomEl: false
	            // bgOpacity: 0.9 
	
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

	(function() {
	
	
	
	
	
		$('.js-inst-link').click(function() {
	
	
	
	
			var gallery = $(this).closest('.inst-wrap'),
				galleryId = gallery.attr('data-gallery-id'),
				instagrammLink = JSON.parse(gallery.attr('instagramm')),
				instagrammTitle = instagrammLink[0].title;
				instagrammSrc = instagrammLink[0].src;
	
			var popupOwl;
	
	
	
	
			var renderPrevArrow = function(prev) {
				return '<div data-link="' + prev.attr('data-id') + '" class="inst-popup__arrow inst-popup__arrow-prev"></div>';
			}
	
			var renderNextArrow = function(next) {
				return '<div data-link="' + next.attr('data-id') + '" class="inst-popup__arrow inst-popup__arrow-next"></div>';
			}
	
			var renderArrows = function(prev, next) {
				var accomulator = '';
				if (prev.length > 0) {
					accomulator += renderPrevArrow(prev);
				}
				if (next.length > 0) {
					accomulator += renderNextArrow(next);
				}
				return accomulator;
			}
	
	
	
	
	
			var checkOtherItem = function(element) {
				var idElement = element.attr('data-id');
				var nextElement = $('.js-inst-link[data-id=' + (+ idElement + 1) + ']');
				var prevElement = $('.js-inst-link[data-id=' + (+ idElement + -1) + ']');
	
				return renderArrows(prevElement, nextElement);
			}
	
	
	
	
	
			var checkKeyup = function(e) {
				var element;
				var arrowPrev = $('.inst-popup__arrow-prev');
				var arrowNext = $('.inst-popup__arrow-next');
				if ( (e.keyCode === KEY.LEFT) && (arrowPrev.length !== 0) ) {
					element = arrowPrev;
				}
				if ( (e.keyCode === KEY.RIGHT) && (arrowNext.length !== 0) ) {
					element = arrowNext;
				}
				if (popupOwl !== undefined) {
					if (!owlSwipe(e.keyCode)) {
						return;
					}
				}
				if (element !== undefined) {
					toSwitchPopup(element);
				}
			}
	
	
	
	
	
			var owlSwipe = function(keyC, flagOwl) {
				var popupOwlContainer = popupOwl[0];
				if (keyC === KEY.LEFT) {
					if (popupOwlContainer.querySelector('.owl-item.active:first-child') ) {
						return true;
					}
					popupOwl.trigger('prev.owl.carousel');
				}
				if (keyC === KEY.RIGHT) {
					if (popupOwlContainer.querySelector('.owl-item.active:last-child') ) {
						return true;
					}
					popupOwl.trigger('next.owl.carousel');
				}
			}
	
	
	
	
	
			var currentEl = $(this);
			var dataMedia = JSON.parse(currentEl.attr('data-media'));
			var dataPopup = currentEl.attr('data-popup');
	
	
	
	
	
			var renderContent = function(dataMedia, dataPopup) {
				var accomulator = '';
				if (dataMedia.length !== 0) {
					dataMedia.forEach(function(item, i) {
						if (item.type == "image") {
							accomulator += '<div class="inst-group__item">' +
							                 '<div class="inst-group__item-inner">' +
							                   '<img src="' + dataMedia[i].src + '">' +
							                 '</div>' +
							               '</div>';
						}
						if (item.type == "video") {
							accomulator += '<div class="inst-group__item">' +
							                 '<div class="inst-group__item-inner">' +
								                   '<video class="inst-video" controls>' +
								                     '<source src="' + dataMedia[i].src + '" type="video/mp4">' +
								                     'Your browser doesn\'t support HTML5 video' +
								                   '</video>' +
							                 '</div>' +
							               '</div>';
						}
					})
				} else {
					accomulator += '<div class="inst-group__item">' +
					                 '<div class="inst-group__item-inner">' +
					                   '<img src="' + dataPopup + '">' +
					                 '</div>' +
					               '</div>';
				}
				return accomulator;
			}
	
	
	
	
	
			var toSwitchPopup = function(el) {
				currentEl = $('.inst-wrap[data-gallery-id=' + (+ galleryId) + ']').find('.js-inst-link[data-id="' + $(el).attr('data-link') + '"]');
	
				dataMedia = JSON.parse(currentEl.attr('data-media'));
				dataPopup = currentEl.attr('data-popup');
	
				content = renderContent(dataMedia, dataPopup);
				caption = currentEl.attr('data-caption');
				if (caption !== '') {
					caption = '<p>' + caption + '</p>';
				}
				// if (caption !== '') {
					caption = '<div class="inst-popup__caption">'
					         + caption
					         +'<a href=" ' + instagrammSrc + ' " class="inst-popup__link">'
					         +'  <svg class="icon-svg" width="100%" height="100%">'
					         +'    <use xlink:href="img/sprite.svg#icon-instagram"></use>'
					         +'  </svg><span>' + instagrammTitle + '</span>' 
					          '</a>';
				// } else {
					// caption = '<div class="inst-popup__caption">';
				// }
	
				$.magnificPopup.close();
				popupOwl = undefined;
	
				$.magnificPopup.open({
					items: {
						src:
						'<div class="white-popup inst-popup">' +
							'<div class="inst-group">' +
								content +
							'</div>' +
							caption +
						'</div>',
						type: 'inline'
					},
					closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
					callbacks: {
						open: function() {
							$('body').on('keyup', checkKeyup);
							if ($('.inst-group__item').length > 1) {
								popupOwl = $('.inst-group').addClass('owl-carousel').owlCarousel({
									items: 1,
									dots: true,
									nav: true
								});
							}
							// $('.inst-group').append(checkOtherItem(currentEl));
							$('.inst-popup__caption').append(checkOtherItem(currentEl));
							instRecursion();
						},
						close: function() {
							$('body').unbind('keyup', checkKeyup);
						}
					}
				});
			}
	
	
	
	
	
			var instRecursion = function() {
				$('body .inst-popup__arrow').on('click', function() {
					toSwitchPopup($(this));
				});
			}
	
	
	
	
			var content = renderContent(dataMedia, dataPopup),
			caption = currentEl.attr('data-caption');
			if (caption !== '') {
				caption = '<p>' + caption + '</p>';
			}
			// if (caption !== '') {
			// 	caption = '<div class="inst-popup__caption">' + caption + '</div>';
			// } else {
			// 	caption = '';
			// }
			caption = '<div class="inst-popup__caption">'
				 + caption
				 +'<a href="' + instagrammSrc + '" class="inst-popup__link">'
				 +'  <svg class="icon-svg" width="100%" height="100%">'
				 +'    <use xlink:href="img/sprite.svg#icon-instagram"></use>'
				 +'  </svg><span>' + instagrammTitle + '</span>' 
				  '</a>';
	
	
	
	
	
			$.magnificPopup.open({
				items: {
					src:
					'<div class="white-popup inst-popup">' +
						'<div class="inst-group">' +
							content +
						'</div>' +
						caption +
					'</div>',
					type: 'inline'
				},
				closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close"></button>',
				callbacks: {
					open: function() {
						$('body').on('keyup', checkKeyup);
						if ($('.inst-group__item').length > 1) {
							popupOwl = $('.inst-group').addClass('owl-carousel').owlCarousel({
								items: 1,
								dots: true,
								nav: true
							});
						}
						// $('.inst-group').append(checkOtherItem(currentEl));
						$('.inst-popup__caption').append(checkOtherItem(currentEl));
						instRecursion();
					},
					close: function() {
						$('body').unbind('keyup', checkKeyup);
					}
				}
			});
	
	
	
	
	
		});
	
	
	
	
	
	})();


	(function() {
	
		if ($('.confidence__inner').length > 0) {
			$('.confidence__inner').owlCarousel({
				items: 3,
				startPosition: 0,
				responsive : {
					480 : {
						items: 4
					},
					768 : {
						items: 5
					},
					992 : {
						items: 7
					},
					1200 : {
						items: 8
					},
					1500 : {
						items: 10
					}
				}
			});
		}
	
	})();
	$('.question-textarea').closest('.question__item').click(function() {
		$(this).find('textarea').focus();
	});
	
	$('.question-textarea').click(function() {
		$(this).closest('.question__item').find('input[type=radio]').prop("checked", true);
	})

	// $('[data-fancybox="plan-group"').click(function() {
	// 	if (window.matchMedia("(min-width: " + (media10 + 1) + "px)").matches) {
	// 		$('.plan__preview').find('img').attr('src', $(this).attr('href'));
	// 		$('.plan__thumb-item').removeClass('active');
	// 		$(this).addClass('active');
	// 		return false;
	// 	}
	// });
	
	// $('.plan__thumb-item').click(function() {
	// 	$('.plan__preview').find('img').attr('src', $(this).find('a').attr('href'));
	// 	$('.plan__thumb-item').removeClass('active');
	// 	$(this).addClass('active');
	// });
	
	initPhotoSwipeFromDOM('.plan__thumb', false);
	if ($('.apartment__inner').length > 0) {
		$('.apartment__inner').owlCarousel({
			startPosition: 1,
			loop: true,
			margin: 0,
			autoWidth: true,
		});
	}
	if ($('.object-gallery__inner').length > 0) {
	    $('.object-gallery__inner').owlCarousel({
	        startPosition: 0,
	        items: 2,
	        loop: false,
	        margin: 20,
	        nav: false,
	        autoWidth: true,
	        dots: true,
	        center: true,
	        responsive : {
	            768 : {
	                items: 3,
	                nav: true,
	                center: false,
	                autoWidth: false,
	                dots: false
	            },
	            1024 : {
	                items: 4,
	                nav: true,
	                center: false,
	                autoWidth: false,
	                dots: false,
	            },
	        }
	    });
	}
	
	// execute above function
	// initPhotoSwipeFromDOM('.object-gallery__inner', true);

	// initPhotoSwipeFromDOM('.instagram__inner', false);
	
	if ($('.carousel-without-borders').length > 0) {
		$('.carousel-without-borders').owlCarousel({
			items: 3,
			startPosition: 0,
			responsive : {
				600 : {
					items: 4
				},
				768 : {
					items: 5
				},
				992 : {
					items: 6
				},
				1200 : {
					items: 7
				}
			}
		});
	}





});