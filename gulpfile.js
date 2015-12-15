'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('html', () => {
    gulp.src('./app/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/www/'))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    sass('./app/css/main.scss', {style: 'compressed'})
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/www/css/'))
        .pipe(connect.reload());
});

gulp.task('jsx', () => {
    browserify('./app/jsx/Start.jsx', {debug: true})
        .transform(babelify, {
            presets: ['es2015', 'react']
        }).bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/www/js/'))
        .pipe(connect.reload());
});

gulp.task('img', () => {
    gulp.src('./img/tileSheet.png')
        .pipe(gulp.dest('./dist/www/img/'));
});

gulp.task('config', () => {
    gulp.src('./app/config.xml')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch('./app/*.html', ['html']);
    gulp.watch('./app/css/*', ['css']);
    gulp.watch('./app/jsx/**/*.jsx', ['jsx']);
    gulp.watch('./img/tiles', ['img']);
    gulp.watch('./app/config.xml', ['config']);
});

gulp.task('connect', () => {
    connect.server({
        root: './dist/www/',
        livereload: true
    });
});

gulp.task('default', ['html', 'css', 'jsx', 'img', 'config', 'watch', 'connect']);