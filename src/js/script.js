import './lib/lib';

//$('.active').on('click', sayHello);
//$('.active').off('click', sayHello);
$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');
});

//console.log($('button').html('hello!'));

//console.log($('div').eq(2).find('.sam'));
// console.log($('.sam').closest('.findme'));
// function sayHello() {
// 	console.log('Hello!');
// }

$('.findme').fadeOut(1800);
