var gulp = require('gulp'),
	sync = require('browser-sync').get('sync');

// Server

gulp.task('server', function() {
	sync.init({
		notify: false,
		server: {
			baseDir: 'dest'
		}
	});
});
