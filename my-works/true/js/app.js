/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle = __webpack_require__(1);

var _throttle2 = _interopRequireDefault(_throttle);

var _debounce = __webpack_require__(2);

var _debounce2 = _interopRequireDefault(_debounce);

var _scrollByAnchor = __webpack_require__(3);

var _scrollByAnchor2 = _interopRequireDefault(_scrollByAnchor);

var _worksLoad = __webpack_require__(4);

var _worksLoad2 = _interopRequireDefault(_worksLoad);

var _pack = __webpack_require__(5);

var _pack2 = _interopRequireDefault(_pack);

var _labelFly = __webpack_require__(6);

var _labelFly2 = _interopRequireDefault(_labelFly);

var _priceChart = __webpack_require__(7);

var _priceChart2 = _interopRequireDefault(_priceChart);

var _expander = __webpack_require__(8);

var _expander2 = _interopRequireDefault(_expander);

var _toggle = __webpack_require__(9);

var _toggle2 = _interopRequireDefault(_toggle);

var _map = __webpack_require__(10);

var _map2 = _interopRequireDefault(_map);

var _popup = __webpack_require__(11);

var _popup2 = _interopRequireDefault(_popup);

var _filterWorks = __webpack_require__(12);

var _filterWorks2 = _interopRequireDefault(_filterWorks);

var _header = __webpack_require__(13);

var _header2 = _interopRequireDefault(_header);

var _tabs = __webpack_require__(14);

var _tabs2 = _interopRequireDefault(_tabs);

var _pswp = __webpack_require__(15);

var _pswp2 = _interopRequireDefault(_pswp);

var _presentation = __webpack_require__(16);

var _presentation2 = _interopRequireDefault(_presentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _scrollByAnchor2.default)();
(0, _worksLoad2.default)();
(0, _pack2.default)();
(0, _labelFly2.default)();
(0, _priceChart2.default)();
(0, _expander2.default)();
(0, _toggle2.default)();
(0, _map2.default)();
(0, _popup2.default)();
(0, _filterWorks2.default)();
(0, _header2.default)();
(0, _tabs2.default)();
(0, _presentation2.default)();

(0, _pswp2.default)('.js-ranking');

function getInternetExplorerVersion() {
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
	} else if (navigator.appName == 'Netscape') {
		var ua = navigator.userAgent;
		var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
	}
	return rv;
}

if (getInternetExplorerVersion() !== -1) {
	$('body').addClass('ie');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = throttle;
function throttle(func, ms) {
	var isThrottled = false,
	    savedArgs = void 0,
	    savedThis = void 0;

	function wrapper() {
		if (isThrottled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments);

		isThrottled = true;

		setTimeout(function () {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(f, ms) {
  var timer = null;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var onComplete = function onComplete() {
      f.apply(_this, args);
      timer = null;
    };

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scrollByAnchor;
function scrollByAnchor() {
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = worksLoad;
function worksLoad() {
	function addWorks(worksContainer) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'data/works.json', false);
		xhr.send();

		var works = null;

		if (xhr.status != 200) {
			return;
		}

		works = createHTML(JSON.parse(xhr.responseText));

		$(worksContainer).append(works);
	}

	function createHTML(items) {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < items.length; i++) {
			var item = document.createElement('div');
			item.classList.add('works__item');
			item.classList.add('work');
			var modClass = items[i].colorText ? 'work__info--' + items[i].colorText : '';
			item.innerHTML = '\n\t\t\t<img src="' + items[i].img + '" alt="#">\n\t\t\t<img src="' + items[i].img2 + '" alt="#">\n\t\t\t<a href="' + items[i].href + '" class="work__info ' + modClass + '">\n\t\t\t  <div class="work__info-inner">\n\t\t\t    <div class="work__name">' + items[i].name + '</div>\n\t\t\t\t<div class="work__description">' + items[i].description + '</div>\n\t\t\t\t<div class="work__link">\n\t\t\t\t  <span class="link link--arrow">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \n\t\t\t\t    <svg class="icon-svg icon-arrow-right" width="100%" height="100%">\n\t\t\t\t\t  <use xlink:href="img/static/icons.svg#icon-arrow-right"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t  </span>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</a>';

			fragment.appendChild(item);
		}
		return fragment;
	}

	var worksMoreBtn = document.querySelector('.js-works-request'),
	    worksContainer = $(worksMoreBtn).closest('.works-group').find('.works');

	if (worksMoreBtn == null) return;

	worksMoreBtn.addEventListener('click', function () {
		addWorks(worksContainer);
	});
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = pack;
function pack() {
	var cards = document.querySelectorAll('.cards__item');

	Array.prototype.forEach.call(cards, function (item) {
		var switchBtn = item.querySelector('.js-pack-checkbox'),
		    toggleBtn = item.querySelector('.js-pack-toggle'),
		    toggleTarget = item.querySelector('.pack__included'),
		    input = switchBtn.querySelector('input');

		input.addEventListener('change', function () {
			$(cards).removeClass('active');

			if (input.checked) {
				item.classList.add('active');
			}
		});

		toggleBtn.addEventListener('click', function () {
			this.classList.toggle('active');
			toggleTarget.classList.toggle('active');
		});
	});
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = labelFly;
function labelFly() {

	var formGroup = document.querySelectorAll('.js-label-fly');

	function listenChange(inputEl, formGroup) {
		if (inputEl.value !== '') {
			if (!formGroup.classList.contains('active')) {
				formGroup.classList.add('active');
			}
		} else {
			if (formGroup.classList.contains('active')) {
				formGroup.classList.remove('active');
			}
		}
	}

	[].forEach.call(formGroup, function (item) {
		var inputEl = item.querySelector('.input');

		if (inputEl.value !== '') {
			item.classList.add('active');
		}

		inputEl.addEventListener('change', listenChange.bind(null, inputEl, item));
	});
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = priceChart;
function priceChart() {
	var chart = $('.js-price-chart'),
	    series = chart.find('.chart__series-item'),
	    hAxisItem = chart.find('.h-axis__item'),
	    chartLegend = chart.find('.chart__legend'),
	    vAxisItem = chart.find('.v-axis__item');

	series.click(function (e) {
		e.preventDefault();

		if ($(this).hasClass('active')) return;

		series.removeClass('active');
		hAxisItem.removeClass('active');
		$('.chart__legend').removeClass('active');

		$(this).addClass('active');
		$(this).find('.chart__legend').addClass('active');
		hAxisItem[$(this).attr('data-id')].classList.add('active');

		var values = $(this).attr('data-value').split(' - ');
		vAxisItem.removeClass('active');
		vAxisItem.each(function () {
			if (+$(this).text().split(' ').join('') >= values[0] & +$(this).text().split(' ').join('') <= values[1]) {
				$(this).addClass('active');
			}
		});
	});
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = rankingToggle;
function rankingToggle() {
	var $btn = $('.js-expand-btn');

	$btn.each(function () {
		var target = $(this).attr('data-target'),
		    textNode = $(this).text(),
		    $target = $(target);

		$(this).on('click', function () {
			if ($(this).hasClass('active')) {
				$(this)[0].innerHTML = '' + textNode;
			} else {
				$(this)[0].innerHTML = 'скрыть';
			}
			$target.toggleClass('active');
			$(this).toggleClass('active');
		});
	});
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toggle;
function toggle() {
	var $btn = $('.js-toggle-btn');

	$btn.each(function () {
		var target = $(this).attr('data-target'),
		    $target = null;

		if ($(this).attr('data-target-parent')) {
			$target = $(this).closest(target);
		} else {
			$target = $(target);
		}

		$(this).on('click', function () {
			$target.toggleClass('active');
		});
	});
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = map;
function map() {
	var map = void 0,
	    mapEl = document.getElementById('map');

	if (mapEl == null) return;

	var myLatLng = {
		lat: +JSON.parse(mapEl.getAttribute('data-geo'))[0].lat,
		lng: +JSON.parse(mapEl.getAttribute('data-geo'))[0].lng
	};

	window.initMap = function () {
		map = new google.maps.Map(mapEl, {
			center: myLatLng,
			zoom: 16,
			fullscreenControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});
	};

	var popupMap = $('.popup-map');
	if (!popupMap.length) return;

	$('.js-map').on('click touchstart', function () {
		popupMap.toggleClass('active');
	});

	$('.js-map-close').on('click touchstart', function () {
		popupMap.toggleClass('active');
	});
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = popup;
function popup() {
	var popup = null;

	$('.js-popup').on('click touchstart', function () {
		console.log($(this).attr('data-popup-selector'));
		if ($(this).attr('data-popup-selector') != undefined) {
			console.log('1');
			popup = $($(this).attr('data-popup-selector'));
			console.log(popup);
		} else {
			popup = $('.popup');
		}

		console.log(popup);

		$.magnificPopup.open({
			items: {
				src: popup
			},
			type: 'inline',
			fixedContentPos: true,
			closeMarkup: '<button class="popup-close mfp-close" type="button" title="%title%">\n\t\t\t\t\t<svg class="icon-svg icon-cross" width="100%" height="100%">\n\t\t\t\t\t\t<use xlink:href="img/static/icons.svg#icon-cross"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t</button>',
			tClose: 'Закрыть'
		}, 0);
	});
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = filterWorks;
function filterWorks() {
	var worksWrap = $('.works-outer');
	if (!worksWrap.length) return;

	var filterBtn = worksWrap.find('.js-filter__item'),
	    filterTarget = worksWrap.find('.work');

	filterBtn.on('click', function () {
		var _this = this;

		filterBtn.removeClass('active');
		$(this).addClass('active');

		filterTarget.each(function (i, item) {
			if ($(item).attr('data-id') == $(_this).attr('data-id')) {
				$(item).addClass('active');
			} else {
				$(item).removeClass('active');
			}
		});
	});
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = header;
function header() {
	$('*').on('click', function () {
		return true;
	});

	var menuItem = $('.js-menu-nav-item'),
	    submenu = $('.submenu'),
	    submenuItem = submenu.find('.js-submenu-item');

	function submenuHover(e) {
		if (!$(e.target).closest('.submenu').length & !$(e.target).closest('.menu').length) {
			menuItem.removeClass('active');
			submenu.removeClass('active');
			submenuItem.removeClass('active');
			$(document).off('mousemove', submenuHover);
		}
	}

	menuItem.on('mouseover touchstart', function (e) {
		var _this = this;

		if ($('.js-menu-nav-item.active')) {
			$(document).on('mousemove', submenuHover);
		}

		if (!$(this).hasClass('active')) {
			menuItem.removeClass('active');
			$(this).addClass('active');
		} else {
			return;
		}

		submenu.addClass('active');

		submenuItem.each(function (i, item) {
			if ($(item).attr('data-id') == $(_this).attr('data-id')) {
				$(item).addClass('active');
			} else {
				$(item).removeClass('active');
			}
		});
	});
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = tabs;
function tabs() {
	var tabs = $('.js-tabs');

	tabs.each(function (i, item) {
		var tabsLink = $(item).find('.js-tabs-link'),
		    tabsContent = $(item).find('.js-tabs-content');

		tabsLink.on('click', function (e) {
			var _this = this;

			e.preventDefault();
			if ($(this).hasClass('active')) return;

			tabsLink.removeClass('active');
			$(this).addClass('active');

			tabsContent.removeClass('active');

			tabsContent.each(function (i, item) {
				if ($(item).attr('data-id') == $(_this).attr('data-id')) {
					$(item).addClass('active');
					return;
				}
			});
		});
	});
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initPhotoSwipeFromDOM;
function initPhotoSwipeFromDOM(gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
        // var thumbElements = el.childNodes,
        var thumbElements = Array.prototype.slice.call(document.querySelectorAll('.find-them-all')),
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            // linkEl = figureEl.children[0]; // <a> element

            size = figureEl.getAttribute('data-size').split('x');

            // size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: figureEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            // if(figureEl.children.length > 1) {
            //     // <figcaption> content
            //     item.title = figureEl.children[1].innerHTML; 
            // }

            if (figureEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = figureEl.getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function onThumbnailsClick(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === 'A';
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        // var clickedGallery = clickedListItem.parentNode,
        // childNodes = clickedListItem.parentNode.childNodes,
        var clickedGallery = document.querySelectorAll('.js-ranking')[0],
            childNodes = Array.prototype.slice.call(document.querySelectorAll('.find-them-all')),
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function photoswipeParseHash() {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function getThumbBoundsFn(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                // var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                // rect = thumbnail.getBoundingClientRect(); 

                // return {x: (window.innerWidth/2), y: (window.innerHeight/2), w: 0}
                // return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                return {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2 + pageYScroll,
                    w: 0
                };
            },

            bgOpacity: 0.9,
            shareEl: false,
            zoomEl: false,
            fullscreenEl: false

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
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
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = presentation;

var _device = __webpack_require__(17);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function presentation() {

	var el = $('.presentation');

	if (!el.length) return;

	function toggleOrientation(el) {
		var slideId = $(el).attr('data-id');

		$(el).closest('.js-slide').find('.js-slide-picture').removeClass('active');
		$(el).closest('.js-slide').find('.js-slide-action').removeClass('active');

		$(el).addClass('active');
		$(el).closest('.js-slide').find('.js-slide-picture[data-id="' + $(el).attr('data-id') + '"]').addClass('active');
	}

	var $slideAction = $('.js-slide-action');

	if (_device2.default.desktop()) {
		toggleOrientation($('.js-slide-action[data-id="1"]'));
	}

	if (_device2.default.tablet()) {
		toggleOrientation($('.js-slide-action[data-id="2"]'));
	}

	if (_device2.default.mobile()) {
		toggleOrientation($('.js-slide-action[data-id="3"]'));
	}

	$slideAction.on('click touchstart', function () {
		if ($(this).hasClass('active')) return;

		toggleOrientation($(this));
	});
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var previousDevice = window.device;

var device = {};

var changeOrientationList = [];

// Add device as a global object.
window.device = device;

// The <html> element.
var documentElement = window.document.documentElement;

// The client user agent string.
// Lowercase, so we can use the more efficient indexOf(), instead of Regex
var userAgent = window.navigator.userAgent.toLowerCase();

// Detectable television devices.
var television = ['googletv', 'viera', 'smarttv', 'internet.tv', 'netcast', 'nettv', 'appletv', 'boxee', 'kylo', 'roku', 'dlnadoc', 'pov_tv', 'hbbtv', 'ce-html'];

// Main functions
// --------------

device.macos = function () {
  return find('mac');
};

device.ios = function () {
  return device.iphone() || device.ipod() || device.ipad();
};

device.iphone = function () {
  return !device.windows() && find('iphone');
};

device.ipod = function () {
  return find('ipod');
};

device.ipad = function () {
  return find('ipad');
};

device.android = function () {
  return !device.windows() && find('android');
};

device.androidPhone = function () {
  return device.android() && find('mobile');
};

device.androidTablet = function () {
  return device.android() && !find('mobile');
};

device.blackberry = function () {
  return find('blackberry') || find('bb10') || find('rim');
};

device.blackberryPhone = function () {
  return device.blackberry() && !find('tablet');
};

device.blackberryTablet = function () {
  return device.blackberry() && find('tablet');
};

device.windows = function () {
  return find('windows');
};

device.windowsPhone = function () {
  return device.windows() && find('phone');
};

device.windowsTablet = function () {
  return device.windows() && find('touch') && !device.windowsPhone();
};

device.fxos = function () {
  return (find('(mobile') || find('(tablet')) && find(' rv:');
};

device.fxosPhone = function () {
  return device.fxos() && find('mobile');
};

device.fxosTablet = function () {
  return device.fxos() && find('tablet');
};

device.meego = function () {
  return find('meego');
};

device.cordova = function () {
  return window.cordova && location.protocol === 'file:';
};

device.nodeWebkit = function () {
  return _typeof(window.process) === 'object';
};

device.mobile = function () {
  return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
};

device.tablet = function () {
  return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
};

device.desktop = function () {
  return !device.tablet() && !device.mobile();
};

device.television = function () {
  var i = 0;
  while (i < television.length) {
    if (find(television[i])) {
      return true;
    }
    i++;
  }
  return false;
};

device.portrait = function () {
  if (screen.orientation && Object.prototype.hasOwnProperty.call(window, 'onorientationchange')) {
    return screen.orientation.type.includes('portrait');
  }
  return window.innerHeight / window.innerWidth > 1;
};

device.landscape = function () {
  if (screen.orientation && Object.prototype.hasOwnProperty.call(window, 'onorientationchange')) {
    return screen.orientation.type.includes('landscape');
  }
  return window.innerHeight / window.innerWidth < 1;
};

// Public Utility Functions
// ------------------------

// Run device.js in noConflict mode,
// returning the device variable to its previous owner.
device.noConflict = function () {
  window.device = previousDevice;
  return this;
};

// Private Utility Functions
// -------------------------

// Simple UA string search
function find(needle) {
  return userAgent.indexOf(needle) !== -1;
}

// Check if documentElement already has a given class.
function hasClass(className) {
  return documentElement.className.match(new RegExp(className, 'i'));
}

// Add one or more CSS classes to the <html> element.
function addClass(className) {
  var currentClassNames = null;
  if (!hasClass(className)) {
    currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
    documentElement.className = currentClassNames + ' ' + className;
  }
}

// Remove single CSS class from the <html> element.
function removeClass(className) {
  if (hasClass(className)) {
    documentElement.className = documentElement.className.replace(' ' + className, '');
  }
}

// HTML Element Handling
// ---------------------

// Insert the appropriate CSS class based on the _user_agent.

if (device.ios()) {
  if (device.ipad()) {
    addClass('ios ipad tablet');
  } else if (device.iphone()) {
    addClass('ios iphone mobile');
  } else if (device.ipod()) {
    addClass('ios ipod mobile');
  }
} else if (device.macos()) {
  addClass('macos desktop');
} else if (device.android()) {
  if (device.androidTablet()) {
    addClass('android tablet');
  } else {
    addClass('android mobile');
  }
} else if (device.blackberry()) {
  if (device.blackberryTablet()) {
    addClass('blackberry tablet');
  } else {
    addClass('blackberry mobile');
  }
} else if (device.windows()) {
  if (device.windowsTablet()) {
    addClass('windows tablet');
  } else if (device.windowsPhone()) {
    addClass('windows mobile');
  } else {
    addClass('windows desktop');
  }
} else if (device.fxos()) {
  if (device.fxosTablet()) {
    addClass('fxos tablet');
  } else {
    addClass('fxos mobile');
  }
} else if (device.meego()) {
  addClass('meego mobile');
} else if (device.nodeWebkit()) {
  addClass('node-webkit');
} else if (device.television()) {
  addClass('television');
} else if (device.desktop()) {
  addClass('desktop');
}

if (device.cordova()) {
  addClass('cordova');
}

// Orientation Handling
// --------------------

// Handle device orientation changes.
function handleOrientation() {
  if (device.landscape()) {
    removeClass('portrait');
    addClass('landscape');
    walkOnChangeOrientationList('landscape');
  } else {
    removeClass('landscape');
    addClass('portrait');
    walkOnChangeOrientationList('portrait');
  }
  setOrientationCache();
}

function walkOnChangeOrientationList(newOrientation) {
  for (var index in changeOrientationList) {
    changeOrientationList[index](newOrientation);
  }
}

device.onChangeOrientation = function (cb) {
  if (typeof cb == 'function') {
    changeOrientationList.push(cb);
  }
};

// Detect whether device supports orientationchange event,
// otherwise fall back to the resize event.
var orientationEvent = 'resize';
if (Object.prototype.hasOwnProperty.call(window, 'onorientationchange')) {
  orientationEvent = 'orientationchange';
}

// Listen for changes in orientation.
if (window.addEventListener) {
  window.addEventListener(orientationEvent, handleOrientation, false);
} else if (window.attachEvent) {
  window.attachEvent(orientationEvent, handleOrientation);
} else {
  window[orientationEvent] = handleOrientation;
}

handleOrientation();

// Public functions to get the current value of type, os, or orientation
// ---------------------------------------------------------------------

function findMatch(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (device[arr[i]]()) {
      return arr[i];
    }
  }
  return 'unknown';
}

device.type = findMatch(['mobile', 'tablet', 'desktop']);
device.os = findMatch(['ios', 'iphone', 'ipad', 'ipod', 'android', 'blackberry', 'windows', 'fxos', 'meego', 'television']);

function setOrientationCache() {
  device.orientation = findMatch(['portrait', 'landscape']);
}

setOrientationCache();

exports.default = device;

/***/ })
/******/ ]);