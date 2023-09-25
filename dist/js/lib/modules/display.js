import $ from "../core";

import 'core-js/actual/promise';
import 'core-js/actual/set';
import 'core-js/actual/iterator';
import 'core-js/actual/array/from';
import 'core-js/actual/array/flat-map';
import 'core-js/actual/structured-clone';
import 'core-js/actual/array';

$.prototype.show = function() {
	for(let i = 0; i<this.length; i++) {
		if(!this[i].style) {
			continue;
		}
		this[i].style.display = '';

		return this;
	}
};

$.prototype.hide = function() {
	for(let i = 0; i<this.length; i++) {
		if(!this[i].style) {
			continue;
		}
		this[i].style.display = 'none';

		return this;
	}
};

$.prototype.toggle = function() {
	for(let i = 0; i<this.length; i++) {
		if(!this[i].style) {
			continue;
		}
		if(this[i].style.display = 'none') {
			this[i].style.display = '';
		} else {
			this[i].style.display = 'none';
		}

		return this;
	}
};