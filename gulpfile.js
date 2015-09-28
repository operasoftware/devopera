'use strict';

var autoprefixer = require('gulp-autoprefixer'),
	beml = require('gulp-beml'),
	changed = require('gulp-changed'),
	cssmin = require('gulp-cssmin'),
	gulp = require('gulp'),
	hash = require('hash-files'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	rsync = require('gulp-rsync'),
	sass = require('gulp-sass'),
	sequence = require('run-sequence'),
	shell = require('gulp-shell'),
	sync = require('browser-sync').create();

// Default

gulp.task('default', function(callback) {
	sequence(
		'jekyll', ['html', 'styles'], 'init', callback
	);
});

gulp.task('init', function() {
	sync.init({
		notify: false,
		server: {
			baseDir: 'dest'
		}
	});

	gulp.watch([
		'src/styles/**/*.scss'
	], ['styles']);

	gulp.watch([
		'src/**/*.md',
		'src/**/*.html'
	], function(callback) {
		sequence(
			'jekyll', 'html', callback
		);
	});
});

gulp.task('html', function() {
	return gulp.src([
		'dest/**/index.html',
		'dest/errors/*.html'
		])
		.pipe(beml({
			elemPrefix: '__',
			modPrefix: '--' }))
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dest/'))
		.pipe(sync.stream());
});

// Jekyll

var jekyll = 'jekyll build --source src --destination dest';

gulp.task('jekyll', shell.task([
	jekyll + ' --limit_posts 50'
]));

// Styles

gulp.task('styles', function () {
	return gulp.src('src/styles/screen.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('dest/styles/'))
		.pipe(sync.stream());
});

// Cache

function hashEight(files) {
	return hash.sync({
		files: files
	}).substring(0, 8);
}

gulp.task('cache:sw', function() {
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
});

gulp.task('cache:links', function() {
	gulp.src([
		'**/index.html',
		'errors/*.html'
		], { cwd: 'dest' })
		.pipe(replace(
			/(<link rel="stylesheet" href="\/styles\/)(screen)(\.css">)/g,
			'$1' + hashEight(['dest/styles/screen.css']) + '$3'
		))
		.pipe(gulp.dest('dest/'));
});

gulp.task('cache:styles', function() {
	gulp.src('dest/styles/screen.css')
		.pipe(rename(function(path) {
			path.basename = hashEight(['dest/styles/screen.css'])
		}))
		.pipe(gulp.dest('dest/styles/'));
});
