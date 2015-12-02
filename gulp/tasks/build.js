var gulp = require('gulp'),
	sequence = require('run-sequence').use(gulp);

// Build

gulp.task('build', function(callback) {
	sequence(
		'build:full', 'server', callback
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
		'jekyll:full', 'html', 'styles', 'cache', callback
	);
});
