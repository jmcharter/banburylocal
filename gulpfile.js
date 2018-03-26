var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
   var files = [
      '*.html',
      'css/**/*.css',
      'js/**/*.js',
      'sass/**/*.scss'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});