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
	shell = require('gulp-shell'),
	sync = require('browser-sync').create();

// Default

gulp.task('default', ['jekyll-limited', 'html', 'styles'], function() {
	sync.init({
		notify: false,
		server: {
			baseDir: 'destination'
		}
	});

	gulp.watch(
		'source/styles/*.scss', ['styles']);
	gulp.watch([
		'source/**/*.md',
		'source/**/*.html'
	], ['html', 'jekyll-limited']);
});

// Styles

gulp.task('styles', function () {
	return gulp.src('source/styles/screen.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('destination/styles/'))
		.pipe(sync.stream());
});

// HTML

gulp.task('html', function() {
	gulp.src([
		'./destination/**/index.html',
		'./destination/errors/*.html'
		])
		.pipe(beml({
			elemPrefix: '__',
			modPrefix: '--' }))
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./destination/'))
		.pipe(sync.stream());
});

// Jekyll

var jekyll = 'jekyll build --source source --destination destination'

gulp.task('jekyll-limited', shell.task([
	jekyll + ' --limit_posts 50'
]));

gulp.task('jekyll', shell.task([
	jekyll
]));

// Cache

function hashEight(files) {
	return hash.sync({
		files: files
	}).substring(0, 8);
}

gulp.task('html-style-links', function() {
	gulp.src([
		'./**/index.html',
		'./errors/*.html'
		], { cwd: 'destination' })
		.pipe(replace(
			/(<link rel="stylesheet" href="\/styles\/)(screen)(\.css">)/g,
			'$1' + hashEight(['destination/styles/screen.css']) + '$3'
		))
		.pipe(gulp.dest('destination/'));
});

gulp.task('service-worker', function() {
	gulp.src('destination/service-worker.js')
		.pipe(replace(
			/(const HASH = ')(';)/g,
			'$1' + hashEight([
				'destination/styles/screen.css',
				'destination/images/github.svg',
				'destination/images/logo.png',
				'destination/images/logo@2x.png',
				'destination/scripts/highlight.js',
				'destination/scripts/salvattore.js']) + '$2'
		))
		.pipe(replace(
			/('\/styles\/)(screen)(\.css',)/g,
			'$1' + hashEight(['destination/styles/screen.css']) + '$3'
		))
		.pipe(gulp.dest('destination/'));
});

gulp.task('screen-file', function() {
	gulp.src('destination/styles/screen.css')
		.pipe(rename(function(path) {
			path.basename = hashEight(['destination/styles/screen.css'])
		}))
		.pipe(gulp.dest('destination/styles/'));
});

// Build

gulp.task('build', ['jekyll', 'html', 'styles'], function() {
	//
});

// Deploy

gulp.task('deploy', function() {
	//
});
