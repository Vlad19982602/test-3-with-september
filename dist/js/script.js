import $ from './lib/lib.js';

$('#first').on('click', ()=> {
	$('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
	$('div').eq(2).fadeToggle(800);
});

$('#second').on('click', () => {
	$('div').eq(3).fadeToggle(800);
});

$('button').eq(3).on('click', () => {
	$('.w-500').fadeToggle(800);
});