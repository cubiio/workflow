// require modules
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// require config
const config = require('../config.js');

gulp.task('useref', function() {	
	return gulp.src(config.useref.src)
		.pipe($.useref())
		.pipe($.cached('useref'))
		.pipe($.debug())
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.cssnano()))
		.pipe($.if('*.js', $.rev()))
		.pipe($.if('*.css', $.rev()))
		.pipe($.revReplace())
		.pipe(gulp.dest(config.useref.dest))
});

// gulpIf replaced by $.if