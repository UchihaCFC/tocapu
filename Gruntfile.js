'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['*.js', 'app/scripts/**/*.js', 'test/spec/**/*.js', 'test/SpecRunner.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jasmine: {
            all: {
                //src: ['../app/scripts/**/*.js'],
                options: {
                    specs: 'test/spec/**/*.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: 'test/config.js'
                    }
                }
            }
        },
        compass: {
            dev: {
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
            tasks: ['jshint', 'jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'jasmine', 'compass:dev']);

};