// require modules
var gulp = require('gulp');
var Server = require('karma').Server;

// run tests
gulp.task('test', function(done) {
	new Server({
		configFile: process.cwd() + '/karma.conf.js',
		singleRun: true
	}, done).start();
});