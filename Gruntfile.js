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
		csso: {
			minify: {
				files: {
					'styles/screen.css' : 'styles/screen.css'
				}
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
				tasks: ['sass', 'autoprefixer', 'jekyll']
			},
			jekyll: {
				files: [
					'**',
					'!_site/**',
					'!node_modules/**',
					'!.sass-cache/**',
					'!Gruntfile.js',
					'!package.json',
					'!.git/**'
				],
				tasks: 'jekyll'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', [
		'sass',
		'autoprefixer',
		'csso',
		'jekyll',
		'htmlmin',
		'imagemin'
	]);

};