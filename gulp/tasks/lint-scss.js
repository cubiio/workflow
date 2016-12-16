const gulp = require('gulp');
var $ = require ('gulp-load-plugins')();

// require config
const config = require('../config.js');

// SCSS linting 
gulp.task('lint:scss', function() {
	return gulp.src(config.sass.src)
	.pipe($.scssLint(config.scssLint));
});