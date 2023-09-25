import $ from "../core";

import 'core-js/actual/promise';
import 'core-js/actual/set';
import 'core-js/actual/iterator';
import 'core-js/actual/array/from';
import 'core-js/actual/array/flat-map';
import 'core-js/actual/structured-clone';
import 'core-js/actual/array';

$.prototype.on = function(eventName, callback) {
	if(!eventName || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if(!this[i].addEventListener) {
			continue;
		}
		this[i].addEventListener(eventName, callback);
	}
	return this;
}

$.prototype.off = function(eventName, callback) {
	if(!eventName || !callback) {
		return this;
	}

	for (let i = 0; i < this.length; i++) {
		if(!this[i].removeEventListener) {
			continue;
		}
		this[i].removeEventListener(eventName, callback);
	}
	return this;
}

$.prototype.click = function(handler) {
	for (let i = 0; i < this.length; i++) {
		if(handler) {
			this[i].addEventListener('click', handler);
		} else {
			this[i].click();
		}
	}
	return this;
}