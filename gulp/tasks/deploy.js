const gulp = require('gulp');
const surge = require('gulp-surge');
const browserSync = require('browser-sync');

// run dist in local server
gulp.task('serve:dist', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		browser: 'google chrome',
		notify: false		
	})
})

// rsync task
gulp.task('rsync', function() {
	rsync({
		src: 'dist/',
		// keep dest in secrets.json
		dest: creds.rsync.dest,
		ssh: true,
		recursive: true,
		deleteAll: true
	}, function(error, stdout, stderr, cmd) {
		if (error) {
			console.log(error.message);
			console.log(stdout);
			console.log(stderr);
		}
	});
})

// deploy to surge.sh
gulp.task('surge', [], function () {
  return surge({
    project: 'dist/',                        // Path to dist directory
    domain: 'http://add-name.surge.sh/'  // amend url
  })
})