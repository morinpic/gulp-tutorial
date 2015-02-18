var gulp        = require('gulp');
var ejs         = require('gulp-ejs');
var sass        = require('gulp-sass');
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

// sass
gulp.task('sass', function() {
  return gulp.src('assets/sass/**/*.{sass,scss}')
    .pipe(sass())
    .pipe(gulp.dest('.tmp/css/'))
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
  gulp.watch(['assets/sass/**/*.{sass,scss}'], ['sass']);
});

// server
gulp.task('server', [
  'ejs',
  'sass',
  'watch'
]);
