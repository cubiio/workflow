const gulp = require('gulp');
const surge = require('gulp-surge');
const browserSync = require('browser-sync');
const rsync = require('rsyncwrapper').rsync;


// require config
const config = require('../config.js');

// require creds
const creds =  require('/Users/samatkins/projects/info/secrets.json');

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

// rsync deploy to server 
gulp.task('rsync', function() {
	rsync({
		src: 'dist/',
		// amend dest path 
		dest: creds.samat.dest,
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

// deploy to surge.sh, change url in config 
gulp.task('surge', [], function () {
  return surge({
		project:	config.surge.project,
	 	domain:	config.surge.domain
  })
})
