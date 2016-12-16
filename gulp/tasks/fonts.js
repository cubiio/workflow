const gulp = require('gulp');

// require config
const config = require('../config.js')

// Copying fonts
gulp.task('fonts', function() {
	return gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dest))
});