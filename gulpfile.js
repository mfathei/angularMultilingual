
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gul-uglify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('js', function(){
    return gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-translate/angular-translate.js',
        './js/app.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.des('./js'))
});

