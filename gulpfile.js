'use strict';

var autoprefixer = require('gulp-autoprefixer'),
	beml = require('gulp-beml'),
	cssmin = require('gulp-cssmin'),
	gulp = require('gulp'),
	hash = require('hash-files'),
	htmlmin = require('gulp-htmlmin'),
	open = require('open'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	rsync = require('rsyncwrapper').rsync,
	sass = require('gulp-sass'),
	sequence = require('run-sequence'),
	shell = require('gulp-shell'),
	sync = require('browser-sync').create();

// -------------------------------
// Default
// -------------------------------

gulp.task('default', function(callback) {

	sequence(
		'build:limit', ['server', 'watch'], callback
	);

});

// -------------------------------
// Build
// -------------------------------

gulp.task('build', function(callback) {

	sequence(
		'build:full', ['cache', 'server'], callback
	);

});

gulp.task('build:limit', function(callback) {

	sequence(
		'jekyll:limit', 'html', 'styles', callback
	);

});

gulp.task('build:full', function(callback) {

	sequence(
		'jekyll:full', 'html', 'styles', callback
	);

});

// -------------------------------
// Deploy
// -------------------------------

gulp.task('deploy', function() {

	rsync({
		ssh: true,
		src: 'dest/**',
		dest: '54.213.240.91:/var/www/html/',
		args: [
			'--recursive', // recurse into directories
			'--checksum', // skip based on checksum, not mod-time & size
			'--chmod=ug=rwX,o=rX', // `chmod` new files
			'--compress', // compress data during the transfer
			'--delete', // delete extraneous files on the receiving side
			'--human-readable', // output numbers in a human-readable format
			'--itemize-changes', // output a change-summary for all updates
			'--times', // preserve modification times…
			'--omit-dir-times' // …except for directories
		]
	}, function (error) {
		if (error) {
			console.log(error);
		} else {
			open('https://dev.opera.com');
		}
	});

});

// Server

gulp.task('server', function() {

	sync.init({
		notify: false,
		server: {
			baseDir: 'dest'
		}
	});

});

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

// Jekyll

var jekyll = 'jekyll build --source src --destination dest';

gulp.task('jekyll:full', shell.task([
	jekyll
]));

gulp.task('jekyll:limit', shell.task([
	jekyll + ' --limit_posts 50'
]));

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
		.pipe(gulp.dest('dest/'))
		.pipe(sync.stream());

});

// Styles

gulp.task('styles', function() {

	return gulp.src('src/styles/screen.scss')
		.pipe(sass().on('error', sass.logError))
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
