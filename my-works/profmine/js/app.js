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

var _map = __webpack_require__(2);

var _map2 = _interopRequireDefault(_map);

var _popup = __webpack_require__(3);

var _popup2 = _interopRequireDefault(_popup);

var _throttle = __webpack_require__(4);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// оборудование карусель
(function () {
	var $equipmentCarousel = $('.js-equipment-carousel');

	if (!$equipmentCarousel.length) return;

	$equipmentCarousel.lightSlider({
		gallery: true,
		vertical: true,
		item: 1,
		loop: true,
		controls: false,
		thumbItem: 3,
		thumbMargin: 10,
		verticalHeight: 161,
		vThumbWidth: 56
	});
})();

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

	$menu.find('a').on('click', function () {
		if ($menu.hasClass('active')) {
			$menu.removeClass('active');
		}
	});

	$('body').on('click, touchstart', function (e) {
		if (!$(e.target).closest('.js-menu').length) {
			if ($menu.hasClass('active')) {
				$menu.removeClass('active');
			}
		}
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
	var $mainMap = $('.js-map'),
	    coordinates = JSON.parse($mainMap.attr('data-geo')),
	    lat = coordinates.lat,
	    lng = coordinates.lng,
	    id = $mainMap.attr('id');


	ymaps.ready(function () {
		var myMap = new ymaps.Map(id, {
			center: [lat, lng],
			zoom: 9,
			controls: []
		});

		var zoomControl = new ymaps.control.ZoomControl({
			options: {
				position: {
					right: 20,
					top: 200
				}
			}
		});

		var geolocationControl = new ymaps.control.GeolocationControl({
			options: {
				position: {
					right: 20,
					top: 150
				}
			}
		});

		myMap.controls.add(zoomControl);
		myMap.controls.add(geolocationControl);

		myMap.behaviors.disable('scrollZoom');
		myMap.behaviors.disable('multiTouch');
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
	var $popupBtnOpen = $('.js-popup-btn'),
	    $popup = $('.js-popup'),
	    $popupClose = $('.js-popup-close');

	$popupBtnOpen.on('click', function (e) {
		e.preventDefault();

		$.magnificPopup.open({
			items: {
				src: $popup
			},
			type: 'inline',
			fixedContentPos: true,
			tClose: 'Закрыть'
		}, 0);
	});

	$popupClose.on('click', function () {
		$.magnificPopup.close();
	});
}();

/***/ }),
/* 4 */
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