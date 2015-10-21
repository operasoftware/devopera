var gulp = require('gulp'),
	sequence = require('run-sequence');

// Build

gulp.task('build', function(callback) {
	sequence(
		'build:full', ['cache', 'server'], callback
	);
});

// Build Limit

gulp.task('build:limit', function(callback) {
	sequence(
		'jekyll:limit', 'html', 'styles', callback
	);
});

// Build Full

gulp.task('build:full', function(callback) {
	sequence(
		'jekyll:full', 'html', 'styles', callback
	);
});
