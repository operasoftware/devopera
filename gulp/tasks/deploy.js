var gulp = require('gulp'),
	open = require('open'),
	rsync = require('rsyncwrapper').rsync;

// Deploy

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
