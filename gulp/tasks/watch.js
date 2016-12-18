// require modules
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');

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