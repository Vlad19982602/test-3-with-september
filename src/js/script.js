import './lib/lib';

//$('.active').on('click', sayHello);
//$('.active').off('click', sayHello);
// $('button').on('click', function() {
// 	$('div').eq(2).toggleClass('active');
// });

//console.log($('button').html('hello!'));

//console.log($('div').eq(2).find('.sam'));
// console.log($('.sam').closest('.findme'));
// function sayHello() {
// 	console.log('Hello!');
// }

//$('.findme').fadeOut(1800);

$('#first').on('click', ()=> {
	$('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
	$('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});