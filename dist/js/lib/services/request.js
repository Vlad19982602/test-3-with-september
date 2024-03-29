import $ from '../core.js';

$.prototype.get = async function(url, dataTypeAnswer) {
	let res = await fetch(url);

	if(!res.ok) {
		throw new Error(`Could not fetch ${url}, status ${res.status}`);
	}

	switch (dataTypeAnswer) {
		case 'json':
			return await res.json();
		case 'text':
			return await res.text();
		case 'blob':
			return await res.blob();
	}
};

$.prototype.post = async function(url, data, dataTypeAnswer) {
	let res = await fetch(url, {
		method: 'POST',
		body: data
	});

	switch (dataTypeAnswer) {
		case 'json':
			return await res.json();
		case 'text':
			return await res.text();
		case 'blob':
			return await res.blob();
	}
};