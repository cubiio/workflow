const gulp = require('gulp');
const runSequence = require('run-sequence');

// combined dev task
gulp.task('default', function(callback) {
	runSequence(
		'clean:dev', 
		['sprites', 'lint:js', 'lint:scss'],
		['sprites', 'lint:scss'],
		['sass', 'images'],
		['browserSync', 'watch'],
		callback
		);
});