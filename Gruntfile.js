'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['*.js', 'app/scripts/**/*.js', 'test/spec/**/*.js', 'test/SpecRunner.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        mocha: {
            all: {
                src: ['test/index.html'],
                options: {
                    run: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'mocha']);

};