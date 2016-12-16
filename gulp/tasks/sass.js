// require gulp modules
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

// require custom modules
const customPlumber = require('../custom-modules/plumber');
const errorHandler = require('../custom-modules/plumber');

// require config
const config = require('../config.js');

// sass to css
gulp.task('sass', function() {
	return gulp.src(config.sass.src)
	// checks for errors in all plugins
	.pipe(customPlumber('Error running Sass'))
	.pipe($.sourcemaps.init())
	.pipe(sass().on('error', errorHandler))
	.pipe($.autoprefixer())
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest(config.sass.dest))
	.pipe(browserSync.reload({
		stream: true
	}));
});