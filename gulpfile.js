// Dependencias
const gulp = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
  

// Tarea 1 llamada minify-js
/*gulp.task('minify-js', function () {
  gulp.src('dist/*.js')
  .pipe(concat('admincomponents.js'))
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('/'))
});*/

function es(){
    return gulp.src('dist/*.js')
      .pipe(terser())
      .pipe(concat('admincomponents.js'))
      .pipe(gulp.dest('./'))
  }

  gulp.task('default', es);

