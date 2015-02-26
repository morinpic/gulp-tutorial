var gulp        = require('gulp');
var ect         = require('gulp-ect');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// ect
gulp.task('ect', function() {
  var json = require('./assets/data/test.json');
  return gulp.src('assets/views/*.ect')
    .pipe(plumber())
    .pipe(ect({data: function(filename, cb) {
      cb({
        filename: filename,
        data: json
      })
    }
    }))
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
  gulp.watch(['assets/views/**/*.ect'], ['ect']);
});

// server
gulp.task('server', [
  'ect',
  'watch'
]);
