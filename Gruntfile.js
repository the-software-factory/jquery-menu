// Defines build process
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/*.js', 'test/src/**/*.js']
        },
        uglify: {
            minification: {
                files: {
                    'dist/jquery.menu.min.js': 'src/jquery.menu.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
