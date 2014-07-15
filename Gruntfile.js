module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		sass: {
			compile: {
				options: {
					style: 'compressed'
				},
				files: {
					'styles/screen.css': 'styles/screen.scss'
				}
			}
		},
		cssshrink: {
			shrink: {
				files: {
					'styles/screen.css': 'styles/screen.css'
				}
			}
		},
		autoprefixer: {
			prefix: {
				src: 'styles/screen.css'
			}
		},
		jekyll: {
			full: {},
			limit: {
				options: {
					limit_posts: 150
				}
			}
		},
		htmlmin: {
			html: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: '_site/',
				src: [
					'**/index.html',
					'errors/*.html'
				],
				dest: '_site/'
			},
			xml: {
				options: {
					collapseWhitespace: true,
					keepClosingSlash: true
				},
				files: {
					'_site/feed/index.xml': '_site/feed/index.xml'
				}
			}
		},
		watch: {
			styles: {
				files: 'styles/*.scss',
				tasks: ['sass', 'autoprefixer', 'copy']
			},
			limit: {
				files: [
					'**',
					'!_site/**',
					'!node_modules/**',
					'!.sass-cache/**',
					'!styles/*',
					'!Gruntfile.js',
					'!README.md',
					'!LICENSE.md',
					'!package.json',
					'!.git/**'
				],
				tasks: ['jekyll:limit', 'htmlmin']
			}
		},
		copy: {
			css: {
				files: {
					'_site/styles/screen.css' : 'styles/screen.css'
				}
			}
		},
		replace: {
			remote: {
				src: '.htaccess',
				dest: '_site/',
				replacements: [{
					// Redirect all traffic to http://dev.opera.com/*
					from: 'RewriteEngine On\n\n',
					to: 'RewriteEngine On\n\nRewriteCond %{HTTP_HOST} !^dev\\.opera\\.com [NC]\nRewriteRule ^(.*)$ http://dev.opera.com%{REQUEST_URI} [R=301,L]\n\n'
				}]
			}
		},
		rsync: {
			options: {
				args: [
					// Note: the next line is commented out to avoid deleting the
					// `extension-docs` directory, which is generated from a separate
					// repository at the moment. As soon as the extension docs are merged
					// with the main `devopera` repository, we should re-enable it.
					//'--delete', // delete extraneous files on the receiving side
					'--times', // preserve modification times…
					'--omit-dir-times', // …except for directories
					'--compress', // compress data during the transfer
					'--verbose', // increase verbosity
					'--chmod=ug=rwX,o=rX', // `chmod` new files
					'--human-readable' // output numbers in a human-readable format
				],
				exclude: ['.DS_Store'],
				recursive: true
			},
			deploy: {
				options: {
					src: '_site/',
					dest: '/var/www/html/',
					host: '54.213.240.91'
				}
			}
		}
	});

	grunt.registerTask('default', function() {
		grunt.log.subhead('Please use one of the following commands:');
		grunt.log.writeln('• grunt watch  — for quick dev build');
		grunt.log.writeln('• grunt build  — for full site build');
		grunt.log.writeln('• grunt deploy — for deploying build');
	});

	grunt.registerTask('build', [
		'sass',
		'autoprefixer',
		'cssshrink',
		'jekyll:full',
		'htmlmin'
	]);

	grunt.registerTask('build:limit', [
		'sass',
		'autoprefixer',
		'cssshrink',
		'jekyll:limit',
		'htmlmin'
	]);

	grunt.registerTask('deploy', ['replace', 'rsync']);

};
