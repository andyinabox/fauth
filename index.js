module.exports = function(pass, opts, cb) {

	// quack quack
	if(typeof opts === 'function') {
		cb = opts;
		opts = {};
	}
	
	opts = opts || {};

	var tries = opts.tries;
	var redirect = opts.redirect || 'http://example.com/';
	var whitelist = opts.whitelist;
	var disabled = opts.disabled;

	// check whitelist
	if(whitelist) {

		var host = window.location.host;

		if(isString(whitelist)) {

			if (whitelist === host) disabled = true;
		
		} else if(isArray(whitelist)) {
		
			for(var i=0; i<whitelist.length; i++) {
				if(d === host) disabled = true;				
			}
		
		} else if(isRegEx(whitelist)) {
		
			if(whitelist.test(host)) disabled = true;

		}
	}

	// bail out if disabled and call callback
	if(disabled) return cb();


	function hideBody() {
		document.body.style.visibility = 'hidden';
	}

	function showBody() {
		document.body.style.visibility = 'visible';
	}

	function requestPass(n) {
		var n = isUndefined(n) ? 0 : n;

		if(typeof tries === 'number' && n < tries) {
			var input = window.prompt('Please enter your password');
			if(input === pass) {
				showBody();
				cb();
			} else {
				requestPass(n+1);
			}
		} else {
			window.location = redirect;
		}
	}


	hideBody();
	requestPass();		

}

function isRegEx(obj) {
	return Object.prototype.toString.call(obj) == '[object RegExp]';
}

function isArray(obj) {
	return Object.prototype.toString.call(obj) == '[object Array]';
}

function isNumber(obj) {
	return typeof obj === 'number';
}

function isString(obj) {
	return typeof obj === 'string';
}

function isUndefined(obj) {
	return typeof obj === 'undefined';
}