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


var _scrollByAnchor = __webpack_require__(1);

var _scrollByAnchor2 = _interopRequireDefault(_scrollByAnchor);

var _labelFly = __webpack_require__(2);

var _labelFly2 = _interopRequireDefault(_labelFly);

var _popup = __webpack_require__(3);

var _popup2 = _interopRequireDefault(_popup);

var _map = __webpack_require__(4);

var _map2 = _interopRequireDefault(_map);

var _gallery = __webpack_require__(5);

var _gallery2 = _interopRequireDefault(_gallery);

var _portfolio = __webpack_require__(6);

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	(0, _scrollByAnchor2.default)();
	(0, _labelFly2.default)();
	(0, _popup2.default)();
	(0, _map2.default)();
	(0, _portfolio2.default)();

	(0, _gallery2.default)('.js-portfolio');

	$('.js-video').on('click', function () {
		var code = $(this).attr('data-id');
		var html = '<iframe src="https://www.youtube.com/embed/' + code + '?autoplay=1&autohide=1&rel=0&showinfo=0&controls=2" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		$(this).html(html);
		$(this).addClass('active');
	});
});

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = popup;
function popup() {
	var popup = $('.popup');

	$('.js-popup').click(function () {
		$.magnificPopup.open({
			items: {
				src: popup
			},
			type: 'inline',
			fixedContentPos: true,
			closeMarkup: '<button class="popup-close mfp-close" type="button" title="%title%">\n\t\t\t\t</button>',
			tClose: 'Закрыть'
		}, 0);
	});
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = map;
function map() {
	var map = null,
	    mapEl = document.getElementById('map');

	if (mapEl == null) return;

	var myLatLng = {
		lat: +JSON.parse(mapEl.getAttribute('data-geo'))[0].lat,
		lng: +JSON.parse(mapEl.getAttribute('data-geo'))[0].lng
	};

	window.initMap = function () {
		map = new google.maps.Map(mapEl, {
			center: myLatLng,
			zoom: 15
		});

		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map
		});

		var styledMapType = new google.maps.StyledMapType([{
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		}, {
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f5f5"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#bdbdbd"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#ffffff"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#757575"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dadada"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#616161"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e5e5e5"
			}]
		}, {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#eeeeee"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"color": "#c9c9c9"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#9e9e9e"
			}]
		}]);

		map.mapTypes.set('styled_map', styledMapType);
		map.setMapTypeId('styled_map');
	};
}

/***/ }),
/* 5 */
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

            linkEl = figureEl.children[0]; // <a> element

            var zoom = null;

            if (linkEl.getAttribute('data-size')) {
                size = linkEl.getAttribute('data-size').split('x');
            } else {
                if (linkEl.getAttribute('data-zoom')) {
                    zoom = linkEl.getAttribute('data-zoom');
                    size = {
                        0: linkEl.childNodes[1].naturalWidth * zoom,
                        1: linkEl.childNodes[1].naturalHeight * zoom
                    };
                } else {
                    size = {
                        0: linkEl.childNodes[1].naturalWidth * 2,
                        1: linkEl.childNodes[1].naturalHeight * 2
                    };
                }
            }

            // size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
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
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function onThumbnailsClick(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        // var clickedGallery = clickedListItem.parentNode,
        // childNodes = clickedListItem.parentNode.childNodes,
        var clickedGallery = document.querySelectorAll('.js-portfolio')[0],
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
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    // find thumbnail
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = portfolio;
function portfolio() {
	var $grid = $('.js-portfolio');

	if ($grid.length) {
		$grid.masonry({
			itemSelector: '.works__group',
			percentPosition: true
		});

		$grid.imagesLoaded().progress(function () {
			$grid.masonry('layout');
		});
	}
}

/***/ })
/******/ ]);