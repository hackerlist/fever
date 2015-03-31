
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('dev', function () {
  gulp.src('./scss/fever.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

gulp.task('prod', function () {
  gulp.src('./scss/fever.scss')
    .pipe(sass({
      sourceComments: 'none',
      outputStyle: 'compressed'
    }))
    .pipe(rename('fever.min.css'))
    .pipe(gulp.dest('./css'))
})
