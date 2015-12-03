var gulp = require('gulp'),
	shell = require('gulp-shell');

// Jekyll

var command = 'jekyll build --config jekyll.yml --source src --destination dest';

gulp.task('jekyll:full', shell.task([
	'JEKYLL_ENV=production ' + command
]));

gulp.task('jekyll:limit', shell.task([
	'JEKYLL_ENV=development ' + command + ' --limit_posts 150'
]));
