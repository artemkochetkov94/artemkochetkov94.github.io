export default (function () {
	$('.js-goods-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		asNavFor: '.js-goods-carousel-thumbs'
	});

	$('.js-goods-carousel-thumbs').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		focusOnSelect: true,
		variableWidth: true,
		asNavFor: '.js-goods-carousel'
	});
})();