
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./scss/fever.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
})
