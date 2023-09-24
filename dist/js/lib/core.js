// (() => {
// 	const $ = function (selector) {
// 		const elements = document.querySelectorAll(selector);
// 		const obj = {};

	// 	obj.hide = () => {
	// 		elements.forEach(elem => {
	// 			elem.style.display = 'none';
	// 		});
	// 		return obj;
	// 	};
	// 	obj.show = () => {
	// 		elements.forEach(elem => {
	// 			elem.style.display = '';
	// 		});
	// 		return obj;
	// 	};

	// 	return obj;	
	// };
	
// 	window.$ = $;
// })();

const $ = function (selector) {
	return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
	if (!selector) {
		return this;  // {}
	}

	if (selector.tagName) {
		this[0] = selector;
		this.length = 1;
		return this;
	}

	Object.assign(this, document.querySelectorAll(selector));
	this.length = document.querySelectorAll(selector).length;  //кол-во элементов в this
	return this;
};

// прототип в прототипе

$.prototype.init.prototype = $.prototype;

window.$ = $;

// нужно для отдельных файлов сборки это функции
export default $;