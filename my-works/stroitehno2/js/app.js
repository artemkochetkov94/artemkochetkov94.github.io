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


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

var _map = __webpack_require__(5);

var _map2 = _interopRequireDefault(_map);

__webpack_require__(6);

var _throttle = __webpack_require__(7);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {
			return null;
		} else return this.parentElement.closest(selector);
	};
})(Element.prototype);

// check ie / edge
(function () {
	if (/MSIE 10/i.test(navigator.userAgent)) {
		// This is internet explorer 10
		document.body.classList.add('ie');
	}

	if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
		// This is internet explorer 9 or 11
		document.body.classList.add('ie');
	}

	if (/Edge\/\d./i.test(navigator.userAgent)) {
		// This is Microsoft Edge
		document.body.classList.add('edge');
	}
})();

document.addEventListener("DOMContentLoaded", function () {
	window.initMap = _map2.default;
});

// шапка фиксированая
(function () {
	var $header = $('.js-header');

	var headerScrollThrottle = (0, _throttle2.default)(function () {
		if ($(window).scrollTop() >= 50) {
			$header.addClass('header--fixed');
		} else {
			$header.removeClass('header--fixed');
		}
	}, 300);

	$(window).scroll(headerScrollThrottle);
})();

// меню

(function () {
	var $menu = $('.js-menu'),
	    $menuToggler = $('.js-menu-toggler');

	$menuToggler.on('click', function (e) {
		e.stopPropagation();
		$menu.toggleClass('active');
	});

	$menu.on('click touchstart', function (e) {
		if (!$(e.target).closest('.js-menu-inner').length) {
			if ($menu.hasClass('active')) {
				$menu.removeClass('active');
			}
		}
	});
})();

// parallax image
(function () {
	var $imagesParallaxWrapper = $('.js-images');

	imagesLoaded($imagesParallaxWrapper, function () {
		var imageBlock = document.querySelectorAll('.js-service-img');

		Array.prototype.forEach.call(imageBlock, function (item) {
			var moveBlock = item.querySelector('.js-service-img-move'),
			    reverse = $(moveBlock).hasClass('js-service-img-reverse');

			var blockCoord = void 0,
			    polygon = void 0,
			    y = 0,
			    maskHeight = 60;

			onMoveBlock();

			function onMoveBlock(e) {
				var vh = $(window).height(),
				    elemOffsetTop = $(moveBlock).offset().top - $(window).scrollTop(),
				    maskTop = elemOffsetTop / vh * 100;

				if (maskTop < 0) {
					maskTop = 0;
				}

				if (maskTop > 100 - maskHeight) {
					maskTop = 100 - maskHeight;
				}

				y = blockCoord;

				if (reverse) {
					polygon = 'polygon(\n\t\t\t\t\t\t0%  ' + maskTop + '%,\n\t\t\t\t\t\t36% ' + maskTop + '%,\n\t\t\t\t\t\t46% ' + (maskTop + 8) + '%,\n\t\t\t\t\t\t46% ' + (maskTop + maskHeight) + '%,\n\t\t\t\t\t\t11% ' + (maskTop + maskHeight) + '%,\n\t\t\t\t\t\t0%  ' + (maskTop + 52) + '%\n\t\t\t\t\t)';
				} else {
					polygon = 'polygon(\n\t\t\t\t\t\t54%  ' + maskTop + '%, \n\t\t\t\t\t\t89%  ' + maskTop + '%, \n\t\t\t\t\t\t100% ' + (maskTop + 8) + '%, \n\t\t\t\t\t\t100% ' + (maskTop + maskHeight) + '%, \n\t\t\t\t\t\t65%  ' + (maskTop + maskHeight) + '%, \n\t\t\t\t\t\t54%  ' + (maskTop + 52) + '%\n\t\t\t\t\t)';
				}

				moveBlock.style['-webkit-clip-path'] = polygon;
				moveBlock.style['clip-path'] = polygon;
			};

			var windowScrollThrottle = (0, _throttle2.default)(function () {
				onMoveBlock();
			}, 16);

			$(window).scroll(windowScrollThrottle);
		});
	});
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var $carousel = $('.js-our-project-carousel');

	if (!$carousel.length) return;

	$carousel.slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		infinite: false,
		prevArrow: '<button type="button" class="our-projects__nav-btn our-projects__nav-prev js-our-projects-prev"></button>',
		nextArrow: '<button type="button" class="our-projects__nav-btn our-projects__nav-next js-our-projects-next"></button>'
	});
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var $carousel = $('.js-partners');

	if (!$carousel.length) return;

	$carousel.slick({
		slidesToShow: 6,
		infinite: false,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				dots: false
			}
		}, {
			breakpoint: 550,
			settings: {
				slidesToShow: 3,
				dots: false
			}
		}]
	});
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var $carousel = $('.js-service-carousel');

	if (!$carousel.length) return;

	$carousel.slick({
		slidesToShow: 2,
		infinite: false,
		arrows: false,
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: false
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				dots: false
			}
		}]
	});

	$carousel.slick('slickNext');
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initMap;
var map = null;

function initMap() {
  var $map = $('.js-map');

  if (!$map.length) return;

  var mapId = $map.attr('id'),
      dataGeoCenter = JSON.parse($map.attr('data-geo-center').replace(/\s/g, '')),
      dataGeo = JSON.parse($map.attr('data-geo').replace(/\s/g, ''));

  map = new google.maps.Map(document.getElementById(mapId), {
    center: { lat: parseInt(dataGeoCenter.lat), lng: parseInt(dataGeoCenter.lng) },
    disableDefaultUI: true,
    zoom: 3,
    styles: [{
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
    }]
  });

  dataGeo.forEach(function (item) {
    var icon = '../img/static/icons-other/marker.png';

    var marker = new google.maps.Marker({
      position: { lat: parseInt(item.lat), lng: parseInt(item.lng) },
      map: map,
      icon: icon,
      title: 'Hello World!'
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

exports.default = function () {
	var $gallery = $(".js-documents");

	if (!$gallery.length) return;

	$gallery.lightGallery();
}();

/***/ }),
/* 7 */
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

/***/ })
/******/ ]);