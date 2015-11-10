var gulp = require('gulp'),
	sequence = require('run-sequence').use(gulp);

// Default

gulp.task('default', function(callback) {
	sequence(
		'build:limit', ['server', 'watch'], callback
	);
});
