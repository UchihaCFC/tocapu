module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            files: ['app/scripts/**/*.js', 'test/spec/**/*.js', 'test/specRunner.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        mocha_phantomjs: {
            all: ['test/index.html']
        },
        compass: {
            app: {
                options: {
                    sassDir: 'app/styles/scss',
                    cssDir: 'app/styles/css'
                }
            },
            dist: {
                options: {
                    environment: 'production'
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'mocha_phantomjs']
        }
    });

    grunt.registerTask('default', ['jshint', 'mocha_phantomjs', 'compass:app']);

};