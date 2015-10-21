var gulp = require('gulp'),
	config = require('../config');

// Watch

gulp.task('watch', function() {
	gulp.watch([
		'src/styles/**/*.scss'
	], ['styles']);

	gulp.watch([
		'src/**/*.md',
		'src/**/*.html'
	], ['build:limit']);
});
