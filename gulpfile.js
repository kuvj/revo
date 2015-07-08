var gulp = require('gulp'),
    useref = require('gulp-useref'),
    clean = require('gulp-clean'),
    concatCSS = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    closureCompiler = require('gulp-closure-compiler'),
    minifyCss = require('gulp-minify-css');

//clean
gulp.task('clean', function () {
    return gulp.src('assets/dist', {read: false})
        .pipe(clean());
});

gulp.task('css', function() {
    return gulp.src('assets/app/css/*.css')
        .pipe(concatCSS('bundle.css'))
        .pipe(minifyCss ())
        .pipe(autoprefixer())
        .pipe(rename ('bundle.min.css'))
        .pipe(gulp.dest('assets/dist'));
});

gulp.task('js', function() {
    return gulp.src('assets/app/js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.all.js'))
        .pipe(gulp.dest('assets/dist'));
});

gulp.task('build', ['clean', 'css', 'js']);