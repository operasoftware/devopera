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
			build: {}
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
			jekyll: {
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
				tasks: ['jekyll', 'htmlmin']
			}
		},
		copy: {
			css: {
				files: {
					'_site/styles/screen.css' : 'styles/screen.css'
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

	grunt.registerTask('default', [
		'sass',
		'autoprefixer',
		'jekyll',
		'htmlmin',
		'imagemin'
	]);

};