// Elements
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-viewer');

// Navigation
document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelector('.menu-toggle');
	const nav = document.getElementById('main-nav');

	btn.addEventListener('click', function () {
		const isOpen = nav.classList.toggle('open');
		btn.setAttribute('aria-expanded', String(isOpen));
	});

// Resize Function
function handleResize() {
	const menu = document.querySelector('#main-nav');
	if (window.innerWidth <= 1000) {
		menu.classList.remove('open');
	} else {
		menu.classList.add('open');
	}
}

handleResize();
window.addEventListener('resize', handleResize);

gallery.addEventListener('click', (event) => {
	const img = event.target.closest('img');
	if (!img) return;

	let src = img.getAttribute('src');
	let alt = img.getAttribute('alt');

	if (src.includes('-sm')) {
		src = src.split('-')[0] + '-full.jpeg';
	}

	modalImage.src = src;
	modalImage.alt = alt;
	modal.showModal();
});

closeBtn.addEventListener('click', () => {
		modal.close();
	});
});