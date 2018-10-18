export default (function() {
	const filterMoreToggler = document.querySelectorAll('.js-filter-block-more');

	Array.prototype.forEach.call(filterMoreToggler, function(item) {
		const wrap = item.closest('.js-filter-block-content');

		item.addEventListener('click', () => {
			wrap.classList.add('active');
		})
	});
})();