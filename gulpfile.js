const gulp = require('gulp');

const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('hello', function() {
	return console.log('Hello World');
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	// checks for errors in all plugins
	.pipe(customPlumber('Error running Sass'))
	.pipe(sass().on('error', errorHandler))
	.pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});

function errorHandler(err) {
	// Logs the error in the command line
	console.log(err.toString());
	// Ends the current pipe so Gulp Watch doesn't break
	this.emit('end');
}

// notifies on errors using custom messages
function customPlumber(errTitle) {
	return plumber({
		errorHandler: notify.onError({
			title: errTitle || "Error running Gulp",
			message: "Error: <%= error.message %>",
			sound: "Basso"
			})
	});
}
