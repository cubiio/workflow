const gulp = require('gulp');
const browserSync = require('browser-sync');

// Browser Sync
gulp.task('browserSync', function() {
	browserSync ({
		server: {
			baseDir: 'app'
		},
		browser: 'google chrome',
		notify: false
	})
})