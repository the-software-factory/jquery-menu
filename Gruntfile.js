var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var fs = require('fs');

module.exports = function(grunt) {

    grunt.initConfig({
      concat: {
          js: {
              src: 'src/jquery.menu.js',
              dest: 'dist/jquery.menu.js'
          }
        },
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
                    src: ['dist/jquery.menu.min.js', 'dist/jquery.menu.js']
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
                    releaseCount: 0,
                    transform: function(commit, cb) {
                      if (typeof commit.gitTags === 'string') {
                        var rtag = /tag:\s*[v=]?(.+?)[,\)]/gi;
                        var match = rtag.exec(commit.gitTags);
                        rtag.lastIndex = 0;

                        if (match) {
                          commit.version = match[1];
                        }
                      }

                      commit.shortDesc += " [" + commit.hash.slice(0, 7) +
                        "](https://github.com/the-software-factory/jquery-menu/commit/" + commit.hash + ")";
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-conventional-changelog');
    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask("emptyTheChangelog", function() {
      fs.truncateSync(grunt.config.get("conventionalChangelog.release.src"), 0);
    });

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

    grunt.registerTask("default", ["jshint", "uglify", "concat", "usebanner"]);
    grunt.registerTask("development", ["devserver", "watch"]);
    grunt.registerTask("changelog", ["emptyTheChangelog", "conventionalChangelog", "changelogCommit"]);
};
