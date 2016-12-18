// require modules
const gulp = require('gulp');
const Server = require('karma').Server;

// run test once and exit
gulp.task('test', function(done) {
	new Server({
		configFile: process.cwd() + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

// watch for file changes & re-run tests
gulp.task('tdd', function (done) {
  new Server({
    configFile: process.cwd() + '/karma.conf.js'
  }, done).start();
});

// notes
// 
// process.cwd()
// returns current working directory
// i.e. directory from which node / gulp command invoked
// 
// __dirname 
// returns the directory name containing JS source code file