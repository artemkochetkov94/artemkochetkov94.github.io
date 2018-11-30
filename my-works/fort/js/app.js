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

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

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

var ua = window.navigator.userAgent.toLowerCase(),
    is_ie = /trident/gi.test(ua) || /msie/gi.test(ua);

if (is_ie) document.body.classList.add('ie');

$('.js-send-form').on('submit', function (e) {
    e.preventDefault();
    document.location.href = 'thx.html';
});

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
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _timer = __webpack_require__(4);

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var wrapper = document.querySelectorAll('.js-interview');

	Array.prototype.forEach.call(wrapper, function (itemWrapper) {
		var answersInput = itemWrapper.querySelectorAll('.answers__item input'),
		    answersLabel = itemWrapper.querySelectorAll('.answers__item label'),
		    prevBtn = itemWrapper.querySelector('.js-ask-prev'),
		    timerElement = itemWrapper.querySelector('.js-timer'),
		    askNumber = itemWrapper.querySelector('.js-ask-number');

		var timerEnable = false;

		Array.prototype.forEach.call(answersLabel, function (item) {
			item.addEventListener('click', function (e) {
				if (itemWrapper.dataset.stage > 3) return;

				// если ответили на первый вопрос - скроем ненужные варианты
				if (itemWrapper.dataset.stage == 1) {
					setTimeout(function () {
						// если есть дети
						// console.log(itemWrapper);
						if ($(itemWrapper).find('#answer-1_1:checked, #answer-1_2:checked, #answer-1_4:checked, #ranswer-1_1:checked, #ranswer-1_2:checked, #ranswer-1_4:checked').length) {
							$(itemWrapper).find('.answers__item[data-id]').removeClass('active');
							$(itemWrapper).find('.answers__item[data-id="1"]').addClass('active');
						} else {
							$(itemWrapper).find('.answers__item[data-id]').removeClass('active');
							$(itemWrapper).find('.answers__item[data-id="2"]').addClass('active');
						}
					}, 30);
				}

				itemWrapper.dataset.stage++;

				if (!timerEnable) {
					timerEnable = !timerEnable;
					(0, _timer2.default)(timerElement, 180000);
				}
				askNumber.textContent = itemWrapper.dataset.stage;
			});
		});

		prevBtn.addEventListener('click', function () {
			itemWrapper.dataset.stage--;
			askNumber.textContent = itemWrapper.dataset.stage;
		});
	});
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = timer;

var _compose = __webpack_require__(5);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function timer(element, time) {
	var timerId = void 0;

	var oneSecond = function oneSecond() {
		return 1000;
	};

	var getCurrentTime = function getCurrentTime() {
		return time;
	};

	var tick = function tick() {
		if (getCurrentTime() <= 0) {
			clearInterval(timerId);
			return;
		};

		getCurrentTime();
		time = time - oneSecond();
	};

	var serializeClockTime = function serializeClockTime(time) {
		var hours = time / 1000 / 60 / 60 ^ 0,
		    minutes = time / 1000 / 60 - hours * 60 ^ 0,
		    seconds = time / 1000 - minutes * 60 ^ 0;

		return {
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	};

	var render = function render(time) {
		// console.log(time);
		var timeStr = '';
		if (time.hours) timeStr += time.hours + ':';
		timeStr += time.minutes + ':';
		timeStr += time.seconds;

		element.textContent = timeStr;
	};

	var prependZero = function prependZero(key) {
		return function (clockTime) {
			if (clockTime[key] < 10) {
				clockTime[key] = "0" + clockTime[key];
			} else {
				clockTime[key] = clockTime[key];
			}

			return clockTime;
		};
	};

	var doubleDigits = function doubleDigits(time) {
		return (0, _compose2.default)(
		// prependZero("hours"),
		// prependZero("minutes"),
		prependZero("seconds"))(time);
	};

	var startTicking = function startTicking() {
		timerId = setInterval((0, _compose2.default)(getCurrentTime, serializeClockTime, doubleDigits, render, tick), oneSecond());
	};

	startTicking();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = compose;
function compose() {
	for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
		fns[_key] = arguments[_key];
	}

	return function (arg) {
		return fns.reduce(function (composed, f) {
			return f(composed);
		}, arg);
	};
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var carouselCircle = document.querySelectorAll('.carousel-circle');

	Array.prototype.forEach.call(carouselCircle, function (item) {
		var carousel = item.querySelectorAll('.js-carousel'),
		    thumbs = item.querySelectorAll('.js-carousel-thumbs'),
		    wrapId = item.dataset.id;

		Array.prototype.forEach.call(carousel, function (item) {
			var carouselId = item.dataset.id;

			$(item).slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				asNavFor: '.carousel-circle[data-id="' + wrapId + '"] .js-carousel-thumbs[data-id="' + carouselId + '"]',
				arrows: false
			});
		});

		Array.prototype.forEach.call(thumbs, function (item) {
			var carouselId = item.dataset.id;

			$(item).slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true,
				asNavFor: '.carousel-circle[data-id="' + wrapId + '"]  .js-carousel[data-id="' + carouselId + '"]',
				centerMode: true,
				arrows: false
			});
		});
	});
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var tabsCircle = document.querySelectorAll('.tabs-circle');

	Array.prototype.forEach.call(tabsCircle, function (item) {
		var nav = item.querySelectorAll('.js-tabs-circle-nav'),
		    content = item.querySelectorAll('.js-tabs-circle-content');

		Array.prototype.forEach.call(nav, function (item) {
			var tabId = item.dataset.id;

			item.addEventListener('click', function () {
				Array.prototype.forEach.call(content, function (item) {
					if (item.classList.contains('active')) {
						item.classList.remove('active');
					}

					if (item.dataset.id == tabId) {
						item.classList.add('active');
					}
				});

				Array.prototype.forEach.call(nav, function (item) {
					if (item.classList.contains('active')) {
						item.classList.remove('active');
					}

					if (item.dataset.id == tabId) {
						item.classList.add('active');
					}
				});
			});
		});
	});
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var masks = {
		ru: '(***) *** - *** - ***',
		ru6: '***',
		ru5: '***',
		ru4: '***',
		ru3: '***',
		ru2: '***',
		ru1: '***'
	};

	$('.js-select-phone').each(function () {
		var wrapper = $(this).closest('.form-group'),
		    inputPhone = wrapper.find('.js-mask');

		var choicePhone = null;

		$(this).selectric({
			disableOnMobile: false,
			nativeOnMobile: false,
			onChange: function onChange(element) {
				var selectricWrapper = $(element).closest('.selectric-wrapper');

				if (choicePhone) {
					selectricWrapper.removeClass(choicePhone);
				}

				var selectedValue = element.options[element.selectedIndex].value;

				inputPhone.mask(masks[selectedValue].replace(/\*/g, '0'));
				inputPhone.attr('placeholder', masks[selectedValue].replace(/\*/g, '_'));

				selectricWrapper.addClass(selectedValue);
				choicePhone = selectedValue;
			},

			onInit: function onInit(element) {
				var selectricWrapper = $(element).closest('.selectric-wrapper'),
				    selectedValue = element.options[element.selectedIndex].value;
				selectricWrapper.addClass(selectedValue);
				choicePhone = selectedValue;
			}
		});
	});

	$('.js-mask').mask('(000) 000 - 00 - 00');
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var $popupBtnOpen = $('.js-popup-btn'),
	    $popupBtnClose = $('.js-popup-close'),
	    $popupAll = $('.js-popup-all'),
	    $popupAllBtn = $('.js-popup-all-btn'),
	    $popupAllTitle = $('.js-popup-title'),
	    $popupAllBtnTitle = $('.js-popup-all-btn-title');

	$popupBtnOpen.each(function (index, item) {
		var popup = document.querySelector(item.dataset.popupSelector);

		item.addEventListener('click', function (e) {
			e.preventDefault();
			if (item.closest('.mfp-wrap')) {
				$.magnificPopup.close();

				setTimeout(function () {
					$.magnificPopup.open({
						items: {
							src: popup
						},
						type: 'inline',
						fixedContentPos: true,
						tClose: 'Закрыть'
					}, 0);
				}, 500);

				return;
			}

			$.magnificPopup.open({
				items: {
					src: popup
				},
				type: 'inline',
				fixedContentPos: true,
				tClose: 'Закрыть'
			}, 0);
		});
	});

	$popupAllBtn.each(function (index, item) {
		var popupTitle = item.getAttribute('data-popup-title'),
		    popupBtnTitle = item.getAttribute('data-popup-btn-title');

		item.addEventListener('click', function () {
			if (popupTitle) {
				$popupAllTitle.text(popupTitle);
			}

			if (popupBtnTitle) {
				$popupAllBtnTitle.text(popupBtnTitle);
			}

			$.magnificPopup.open({
				items: {
					src: $popupAll
				},
				type: 'inline',
				fixedContentPos: true,
				tClose: 'Закрыть'
			}, 0);
		});
	});

	$popupBtnClose.on('click', function () {
		$.magnificPopup.close();
	});

	jQuery('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var $menuBtnToggler = $('.js-menu-toggler'),
	    $menuContainer = $('.js-menu'),
	    $menuLinks = $menuContainer.find('a');

	$menuBtnToggler.on('click', function () {
		$(this).toggleClass('active');
		$menuContainer.toggleClass('active');
	});

	$menuLinks.on('click', function () {
		$menuBtnToggler.toggleClass('active');
		$menuContainer.toggleClass('active');
	});
}();

/***/ })
/******/ ]);