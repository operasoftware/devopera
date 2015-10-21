var gulp = require('gulp'),
	shell = require('gulp-shell');

// Jekyll

var jekyll = 'jekyll build --source src --destination dest';

gulp.task('jekyll:full', shell.task([
	jekyll
]));

gulp.task('jekyll:limit', shell.task([
	jekyll + ' --limit_posts 150'
]));
