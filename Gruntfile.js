module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      test : {
        port : 8000
      }
    },
    jshint: {
      files: ['*.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jasmine: {
      app: {
        src: 'app/javascripts/**/*.js',
        host: 'http://127.0.0.1:8000/',
        options: {
          specs: 'test/**/*.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfig: {
              baseUrl: './'
            },
            requireConfigFile: 'app/javascripts/main.js'
          }
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jasmine']);

};