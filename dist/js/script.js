import scrolling from './modules/pageup.js';


window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	const menu = document.querySelector('.header-lists'),
	menuItem = document.querySelectorAll('.header_item'),
	hamburger = document.querySelector('.hamburger');

	if(hamburger) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger__active');
			menu.classList.toggle('header-active');
		});
	}

	if(menuItem) {
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger__active');
				menu.classList.toggle('header-active');
			})
		})
	}
});

