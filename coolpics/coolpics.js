document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelector('.menu-toggle');
	const nav = document.getElementById('main-nav');

	if (!btn || !nav) return;

	btn.addEventListener('click', function () {
		const isOpen = nav.classList.toggle('open');
		btn.setAttribute('aria-expanded', String(isOpen));
	});
});
