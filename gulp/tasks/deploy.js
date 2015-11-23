var gulp = require('gulp'),
	rsync = require('gulp-rsync');

// Deploying all files
// from dest folder to server

gulp.task('deploy', function() {
	return gulp.src('dest/**')
		.pipe(rsync({
			root: 'dest',
			hostname: '54.213.240.91',
			destination: '/var/www/html/',
			recursive: true,
			clean: true,
			incremental: true
		}));
});
