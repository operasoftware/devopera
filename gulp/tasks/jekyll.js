var gulp = require('gulp'),
	shell = require('gulp-shell');

// Jekyll

var jekyll = 'jekyll build --config jekyll.yml --source src --destination dest';

gulp.task('jekyll:full', shell.task([
	jekyll + ' JEKYLL_ENV=production'
]));

gulp.task('jekyll:limit', shell.task([
	jekyll + ' --limit_posts 150' + ' JEKYLL_ENV=development'
]));
