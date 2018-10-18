export default(function () {
	const inputWrapper = document.querySelectorAll('.js-password');

	Array.prototype.forEach.call(inputWrapper, function(item) {
		const inputEl = item.querySelector('input'),
			btnToggler = item.querySelector('.js-password-toggler');

		if (inputEl.value !== '') {
			item.classList.add('active');
		}

		btnToggler.addEventListener('click', function () {
			$(this).toggleClass('active');

			if (inputEl.type === "password") {
	      inputEl.type = "text";
	    } else {
	      inputEl.type = "password";
	    }
		});
	});
})();