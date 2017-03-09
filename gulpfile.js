var gulp = require('gulp')
var to5 = require('gulp-6to5')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')


gulp.task('es6-es5', function(){
  gulp.src(['./src/serverapp.js',
            './src/*/**.js',
            './src/*/*/**.js'
  ])
  .pipe(to5())
  .pipe(gulp.dest('./public/build/es5'))
})

gulp.task('css', function(){
  return gulp.src([
    "./public/assets/global/css/google-fonts.css",
    "./public/assets/global/plugins/font-awesome/css/font-awesome.min.css",
    "./public/assets/global/plugins/simple-line-icons/simple-line-icons.min.css",
    "./public/assets/global/plugins/bootstrap/css/bootstrap.min.css",
    "./public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css",
    "./public/assets/global/css/components.min.css",
    "./public/assets/global/css/plugins.min.css",
    "./public/assets/layouts/layout3/css/layout.min.css",
    "./public/assets/layouts/layout3/css/themes/default.min.css",
    "./public/assets/layouts/layout3/css/custom.min.css"
  ])
  .pipe(minifyCSS())
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
  .pipe(gp_concat('style.min.css'))
  .pipe(gulp.dest('./public/build/css'))
})
gulp.task('js', function(){
  return gulp.src([
    "./public/assets/global/plugins/jquery.min.js",
    "./public/assets/global/plugins/bootstrap/js/bootstrap.min.js",
    "./public/assets/global/plugins/js.cookie.min.js",
    "./public/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
    "./public/assets/global/plugins/jquery.blockui.min.js",
    "./public/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
    "./public/assets/global/scripts/app.min.js",
    "./public/assets/layouts/layout3/scripts/layout.min.js",
    "./public/assets/layouts/layout3/scripts/demo.min.js",
    "./public/assets/layouts/global/scripts/quick-sidebar.min.js",
    "./public/assets/layouts/global/scripts/quick-nav.min.js"
  ])
  .pipe(gp_concat('gulp_concat.js'))
  .pipe(gulp.dest('./public/min'))
  .pipe(gp_rename('vendor.min.js'))
  .pipe(gp_uglify())
  .pipe(gulp.dest('./public/build/js'))
})

gulp.task('watch', function(){
  gulp.watch(['./src/serverapp.js', './src/*/**.js', './src/*/*/**.js'], ['es6-es5'])
})

gulp.task('default', ['es6-es5', 'css', 'js', 'watch'], function(){})