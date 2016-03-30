var beml = require('gulp-beml'),
	gulp = require('gulp'),
	merge = require('merge-stream'),
	htmlmin = require('gulp-htmlmin'),
	sync = require('browser-sync').get('sync');

// HTML

gulp.task('html', function() {
	var html = gulp.src(['dest/**/*.html'])
		.pipe(beml({
			elemPrefix: '__',
			modPrefix: '--' }))
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dest'))
		.pipe(sync.stream({ once: true }));

	var xml = gulp.src(['dest/feed/**/index.xml'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			keepClosingSlash: true
		}))
		.pipe(gulp.dest('dest/feed'))
		.pipe(sync.stream({ once: true }));

	return merge(html, xml);
});
