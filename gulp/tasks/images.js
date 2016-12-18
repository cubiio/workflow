const gulp = require('gulp');

const runSequence = require('run-sequence');
const responsiveGm = require('gulp-responsive-images');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');

// require config
const config = require('../config.js');

// use GM then move to folder responsive
gulp.task('imagesgm', function() {
    return gulp.src('app/images_src/**/*')
        .pipe(responsiveGm({
            '*.+(jpg|jpeg|png)': [{
                width: 1600,
                suffix: '_1600_large_2x',
                quality: 75
            }, {
                width: 800,
                suffix: '_800_large_1x',
                quality: 70
            }, {
                width: 600,
                suffix: '_medium',
                quality: 60
            }, {
                width: 500,
                height: 375,
                crop: 'center',
                suffix: '_small',
                quality: 50
            }],
        }))
        .pipe(gulp.dest('app/responsive/'));
});

// use imagemin then move to folder images 
// correct task - $ and cache ?
gulp.task('imagesmin', function() {
    return gulp.src('app/responsive/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin()))
        // where is the pipe dest? to app or dist? 
        .pipe(gulp.dest('app/images/'));
});

// copies any images in fixed to images folder 
gulp.task('copy-fixed-images', function() {
    return gulp.src('./app/images_src/fixed/**/*')
        .pipe(gulp.dest('./app/images/'));
});

// cleans responsive folder
gulp.task('clean:responsive', function() {
    return del([
        './app/responsive/**/*'
    ]);
})

// clears cache for imagemin 
gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback)
})

// combo dev task for responsive (gm) and min images
gulp.task('images', function(callback) {
    runSequence('imagesgm', ['imagesmin', 'copy-fixed-images'],
        'clean:responsive',
        callback);
});

// 'build' task i.e. moves app/images to dist/images
gulp.task('build-images', function() {
    return gulp.src('./app/images/')
        .pipe(gulp.dest('./dist/images/'));
});