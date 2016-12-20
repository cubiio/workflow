const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	runSequence(
		['clean:dev', 'clean:dist'],
		['sprites', 'lint:js', 'lint:scss'],
		'sass',
		['useref', 'build-images', 'fonts'],

		// add in if JS tests to run
		// ['useref', 'build-images', 'fonts', 'test'],
		
		callback
		);
})