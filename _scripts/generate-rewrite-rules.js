var redirectMap = require('./url-redirects.json');
var template = require('lodash-template');

var compiled = template('RewriteRule ^articles/view/<%= oldSlug %>/?$ articles/<%= newSlug %> [R=301,L]');

var result = Object.keys(redirectMap).map(function(oldSlug) {
	var newSlug = redirectMap[oldSlug];
	return compiled({
		'oldSlug': oldSlug,
		'newSlug': newSlug
	});
}).join('\n');

console.log(result);
