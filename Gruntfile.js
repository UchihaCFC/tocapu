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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['compass']);

};