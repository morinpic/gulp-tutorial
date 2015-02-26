003_ect
========
ect公式サイト
http://ectjs.com/

Install
-------

クローン後、作業ディレクトリに移動
```
$ git clone https://github.com/morinpic/gulp-tutorial.git
$ cd gulp-tutorial/003_ect
```

Gulpのインストール
`-g`オプションを付けてグローバルインストール
```
$ npm install -g gulp
```

開発環境に必要なモジュールをインストール
```
$ npm install
```

Tasks
-------
```
$ gulp server
```
- ectのコンパイル
- ectファイルの監視/更新

Example
-------
```
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
```
This takes a folder structure that looks like this
```
assets
├── data
│   └── test.json
└── views
    ├── include
    │   ├── _footer.ect
    │   └── _header.ect
    ├── index.ect
    └── layouts
        └── layout.ect
```
