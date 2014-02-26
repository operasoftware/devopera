module.exports = function(grunt) {

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
			site: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: '_site/',
				src: '**/*.html',
				dest: '_site/'
			}
		},
		imagemin: {
			site: {
				expand: true,
				cwd: '_site/',
				src: '**/*.{png,jpg,gif}',
				dest: '_site/'
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
		rsync: {
			options: {
				args: [
					'--delete', // delete extraneous files on the receiving side
					'--times', // preserve modification times…
					'--omit-dir-times', // …except for directories
					'--compress', // compress data during the transfer
					'--verbose' // increase verbosity
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

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-rsync');

	grunt.registerTask('default', [
		'sass',
		'autoprefixer',
		'jekyll:full',
		'htmlmin',
		'imagemin'
	]);

	grunt.registerTask('deploy', ['rsync']);

};
