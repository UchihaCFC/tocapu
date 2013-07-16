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
            options: {
                sassDir: 'app/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: 'app/images',
                javascriptsDir: 'app/scripts',
                fontsDir: 'app/fonts',
                importPath: 'vendor',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            app: {
                options: {
                    debugInfo: true
                }
            },
            dist: {
                options: {
                    environment: 'production'
                }
            }
        },
        watch: {
            compass: {
                files: ['app/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:app']
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'mocha_phantomjs', 'compass:app']);

};