import $ from "../core.js";

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'acocrdion-content--active', paddings = 40) {
	for(let i = 0; i <this.length	; i++) {
		$(this[i]).click(() => {
			$(this[i]).toggleClass(headActive);
			$(this[i].nextElementSibling).toggleClass(contentActive);

			if(this[i].classList.contains(headActive)) {
				this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
			} else {
				this[i].nextElementSibling.style.maxHeight = "0px";
			}
		});
	}
};

$('.accordion-head').accordion();