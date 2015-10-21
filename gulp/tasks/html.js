var beml = require('gulp-beml'),
	gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	sync = require('browser-sync').get('sync');

// HTML

gulp.task('html', function() {
	return gulp.src(['dest/**/*.html'])
		.pipe(beml({
			elemPrefix: '__',
			modPrefix: '--' }))
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dest'))
		.pipe(sync.stream({once:true}));
});
