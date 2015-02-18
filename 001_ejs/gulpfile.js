var gulp        = require('gulp');
var ejs         = require('gulp-ejs');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// ejs
gulp.task('ejs', function() {
  return gulp.src([
      'assets/**/*.ejs',
      '!assets/**/_*.ejs'
    ])
    .pipe(ejs())
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream:true}));
});

// browser-sync
gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: '.tmp'
    }
  });
});

// watch
gulp.task('watch', ['browser-sync'], function(){
  gulp.watch(['assets/**/*.ejs'], ['ejs']);
});

// server
gulp.task('server', [
  'ejs',
  'watch'
]);
