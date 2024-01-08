import $ from './lib/lib.js';
import scrolling from './pageup.js';


window.addEventListener('DOMContentLoaded', () => {
		$('#first').on('click', ()=> {
			$('div').eq(2).fadeToggle(800);
		});

		$('[data-count="second"]').on('click', () => {
			$('div').eq(3).fadeToggle(800);
		});

		$('#second').on('click', () => {
			$('div').eq(4).fadeToggle(800);
		});

		$('button').eq(3).on('click', () => {
			$('.w-500').fadeToggle(800);
		});

		$('#trigger').click(() => $('#trigger').createModal({
			text: {
				title: "Modal title",
				body: "lorem"
			},
			btns: {
				count: 3,
				settings: [
					[
						'Close',
						['btn-danger', 'mr-10'],
						true
					],
					[
						'Save changes',
						['btn-success'],
						false,
						() => {
							alert('Данные сохранены');
						}
					],
					[
						'Another button',
						['btn-warning', 'ml-10'],
						false,
						() => {
							alert('Helllo!');
						}
					]
				]
			}
		}));
	scrolling('.pageup');
});
