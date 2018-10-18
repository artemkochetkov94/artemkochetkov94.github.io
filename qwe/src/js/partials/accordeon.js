export default (function() {
	var accordeon = document.querySelectorAll('.js-accordeon');

	Array.prototype.forEach.call(accordeon, function(item) {
		const accordeonToggler = item.querySelector('.js-accordeon-toggler');

		accordeonToggler.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});
})();