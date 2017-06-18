
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');

gulp.task('js', function(){
    return gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-translate/angular-translate.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-translate-handler-log/angular-translate-handler-log.js',
        './js/app.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
});

gulp.task('serve', function(){
    browserSync({
        server:{
            baseDir: "./"
        },
        files: ['./*', './js/*.js']
    });
});

gulp.task('build', [], function(){
    runSequence('js');
});

gulp.task('default', ['build'], function(){});
