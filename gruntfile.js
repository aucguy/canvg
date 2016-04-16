module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      build: {
        src: ['rgbcolor.js', 'StackBlur.js', 'canvg.js'],
        dest: 'build/concat.js'
      }
    },
    uglify: {
      build: {
        files: {
          'canvg.min.js': 'build/concat.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', ['concat:build', 'uglify:build']);
};
