/*global grunt*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    watch: {
      jasmine: {
        pivotal: {
          src: 'app/**/*.js',
          options: {
            specs: 'test/**/*.js'
          }
        }
      },
      scripts: {
        files: [
          'app/**/*.js'
        ],
        tasks: [
          'jasmine'
        ],
        options: {
          nospawn: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jasmine']);

};