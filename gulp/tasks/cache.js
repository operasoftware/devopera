var gulp = require('gulp'),
	hash = require('hash-files'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace');

// Hash Eight

function hashEight(files) {
	return hash.sync({
		files: files
	}).substring(0, 8);
}

// Cache

gulp.task('cache', function() {
	gulp.src('dest/service-worker.js')
		.pipe(replace(
			/(const HASH = ')(';)/g,
			'$1' + hashEight([
				'dest/styles/screen.css',
				'dest/images/github.svg',
				'dest/images/logo.svg',
				'dest/scripts/highlight.js',
				'dest/scripts/salvattore.js']) + '$2'
		))
		.pipe(replace(
			/('\/styles\/)(screen)(\.css',)/g,
			'$1' + hashEight(['dest/styles/screen.css']) + '$3'
		))
		.pipe(gulp.dest('dest/'));

	gulp.src([
		'**/index.html',
		'errors/*.html'
		], { cwd: 'dest' })
		.pipe(replace(
			/(<link rel="stylesheet" href="\/styles\/)(screen)(\.css">)/g,
			'$1' + hashEight(['dest/styles/screen.css']) + '$3'
		))
		.pipe(gulp.dest('dest/'));

	gulp.src('dest/styles/screen.css')
		.pipe(rename(function(path) {
			path.basename = hashEight(['dest/styles/screen.css'])
		}))
		.pipe(gulp.dest('dest/styles/'));
});
