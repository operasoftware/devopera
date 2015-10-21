var autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	sync = require('browser-sync').get('sync');

// Styles

gulp.task('styles', function() {

	return gulp.src('src/styles/screen.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('dest/styles'))
		.pipe(sync.stream());

});
