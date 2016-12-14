const gulp = require('gulp');

const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('hello', function() {
	return console.log('Hello World');
});

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	// checks for errors in all plugins
	.pipe(customPlumber('Error running Sass'))
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', errorHandler))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
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

gulp.task('browserSync', function() {
	browserSync ({
		server: {
			baseDir: 'app'
		},
		browser: 'google chrome',
		notify: false
	})
})