var redirectMap = require('../_data/url-redirects.json');
var template = require('lodash-template');

var compiled = template('RewriteRule ^articles/view/<%= oldSlug %>/?$ <%= newLocation %> [R=301,L]');

var result = Object.keys(redirectMap).map(function(oldSlug) {
	var newLocation = redirectMap[oldSlug];
	return compiled({
		'oldSlug': oldSlug,
		'newLocation': newLocation
	});
}).join('\n');

console.log(result);
