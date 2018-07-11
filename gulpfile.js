"use strict";

const gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
	rename = require('gulp-rename'),
	jsmin = require('gulp-jsmin'),
    imagemin = require('imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageminOptipng = require('imagemin-optipng');

// stylus
gulp.task('styl', function () {
    return gulp.src('src/styles/**/*.styl')
        .pipe(stylus({compress: true}))
        .pipe(gulp.dest('./src/dist'));
});

// jsmin
gulp.task('jsmin', function () {
    gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/dist'));
});

// imagemin
gulp.task('imagemin', function () {
    imagemin(['src/images/**/*.{jpg,png}'], 'src/dist/images', {
        plugins: [
            imageminMozjpeg({quality: 80}),
            imageminOptipng()
        ]
    }).then(files => {
        console.log('images optimized');
    });
});

// watch
gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.styl', ['styl']);
});

// default
gulp.task('build', ['styl', 'watch']);

// production
gulp.task('production', ['styl', 'jsmin', 'imagemin']);
