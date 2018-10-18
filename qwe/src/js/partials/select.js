export default (function () {
	const $select = $('.js-select');

	$select.each(function () {
		$(this).selectric();
	});
})();