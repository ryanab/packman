var gulp = require('gulp')
var to5 = require('gulp-6to5')
var gp_concat = require('gulp-concat')
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

// gulp.task('css', function(){
//   return gulp.src({

//   })
// })

// .pipe(minifyCSS())
// .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
// .pipe(gp_concat('style.min.css'))
// .pipe(gulp.dest('./public/build/css'))

// gulp.task('js', function(){
//   return gulp.src([
      
//   ])
//   .pipe(gp_concat('gulp_concat.js'))
//   .pipe(gulp.dest('./public/min'))
//   .pipe(gp_rename('vendor.min.js'))
//   .pipe(gp_uglify())
//   .pipe(gulp.dest('./public/build/js'))
// })

// gulp.task('watch', function(){
//   gulp.watch(['./src/serverapp.js', './src/*/**.js', './src/*/*/**.js'], ['es6-es5'])
// })

// gulp.task('default', ['es6-es5', 'css', 'js', 'watch'], function(){})