// require modules
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// require config
const config = require('../config.js');

// file watchers
gulp.task('watch', function() {
	gulp.watch(config.sass.src, ['sass', 'lint:scss']);
	gulp.watch(config.js.src, ['watch-js']);
	// add to config 
	gulp.watch(config.html.src, browserSync.reload);
});

gulp.task('watch-js', ['lint:js'], browserSync.reload);