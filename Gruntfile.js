module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'compass/scss',
          cssDir: 'css',
          javascriptsDir: 'compass/js',

        }
      }
    },
    concat: {
      dist: {
        src: [
          'src/views/*',
          'src/app.js'
        ],
        dest: 'js/app.js'
      }
    },
    jasmine: {
      dist: {
        amd: true,
        src: 'src/**/*.js',
        options: {
          specs: 'test/**/*.js',
          helpers: [
            'vendor/jquery/jquery.js',
            'vendor/underscore/underscore.js',
            'vendor/backbone/backbone.js'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: [
          'src/*/*.js',
          'src/*.js'
        ],
        tasks: [
          'concat'
        ],
        options: {
          nospawn: true,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass', 'concat', 'jasmine']);

};