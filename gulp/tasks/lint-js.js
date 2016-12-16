const gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// require custom modules
const customPlumber = require('../custom-modules/plumber');
const errorHandler = require('../custom-modules/plumber');

// require config
const config = require('../config.js');

// JS linting 
gulp.task('lint:js', function() {
	return gulp.src(config.js.src)
	.pipe(customPlumber('JSHint Error'))
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'))
	.pipe($.jshint.reporter ('fail', config.jshint.reporterOptions))
	.pipe($.jscs(config.jscs.options))
	.pipe(gulp.dest(config.jscs.dest))
});


