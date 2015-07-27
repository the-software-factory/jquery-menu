// Defines build process for all themes defined in the Navigation Bar
module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            minification: {
                files: {
                    'dist/jquery.menu.min.js': 'src/jquery.menu.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
