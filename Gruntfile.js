var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                multistr: true
            },
            all: ['Gruntfile.js', 'src/**/*.js', 'test/*.js', 'test/src/**/*.js']
        },
        uglify: {
            minification: {
                files: {
                    'dist/jquery.menu.min.js': 'src/jquery.menu.js'
                }
            }
        },
        usebanner: {
            banner: {
                options: {
                    position: 'top',
                    linebreak: true,
                    process: function() {
                        var latestTag = execSync("git describe --tags").toString().split('-')[0];
                        var firstYear = "2015";
                        var lastYear = execSync("git log --format='%ai' | head -n 1").toString().split('-')[0];

                        return "/*\n" +
                            " * jQuery Menu v" + latestTag + " (https://github.com/the-software-factory/jquery-menu)\n" +
                            " * Copyright " + ((firstYear === lastYear) ? firstYear : (firstYear + "-" + lastYear)) + " Vendini srl\n" +
                            " * Licensed under MIT (https://github.com/the-software-factory/jquery-menu/blob/master/LICENSE.md)\n" +
                            " */";
                    }
                },
                files: {
                    src: ['dist/jquery.menu.min.js']
                }
            }
        },
        devserver: {
            options: {
                type: 'http',
                port: '8888',
                base: './',
                async: false
            },
            server: {}
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', 'src/**/*.js', 'test/*.js', 'test/src/**/*.js'],
                tasks: ['default']
            }
        },
        conventionalChangelog: {
            options: {
                changelogOpts: {
                    preset: 'jshint',
                    transform: function(commit, cb) {
                        // Link commit hash to commit page on GitHub
                        commit.shortDesc += " [" + commit.hash.slice(0, 7) +
                        "](https://github.com/the-software-factory/jquery-menu/commit/" + commit.hash + ")";
                        // Remove the short hash (as we added one in the link)
                        delete commit.hash;

                        cb(null, commit);
                    }
                }
            },
            release: {
                src: 'CHANGELOG.md'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-conventional-changelog');
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask("changelogCommit", function() {
        var done = this.async();

        var gitAdder = exec('git add CHANGELOG.md');

        gitAdder.on("exit", function(exitCode) {
            if (exitCode !== 0) {
                grunt.fail.fatal("changelogCommit task couldn't exec git add command");
            }

            var gitCommitter = exec('git commit -m "CHANGELOG.md Updated"');

            gitCommitter.on("exit", function(exitCode) {
                if (exitCode !== 0) {
                    grunt.fail.fatal("changelogCommit task couldn't exec git commit command");
                }

                grunt.log.ok("Changelog commit is ready");
                done();
            });
        });
    });

    grunt.registerTask("default", ["jshint", "uglify", "usebanner"]);
    grunt.registerTask("development", ["devserver", "watch"]);
    grunt.registerTask("changelog", ["conventionalChangelog", "changelogCommit"]);
};
