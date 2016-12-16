const gulp = require('gulp');
const runSequence = require('run-sequence');

// combined dev task
gulp.task('default', function(callback) {
	runSequence(
		'clean:dev', 
		['sprites', 'lint:js', 'lint:scss'],
		'sass',
		['browserSync', 'watch'],
		callback
		);
});