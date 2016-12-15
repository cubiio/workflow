const gulp = require('gulp');

const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const spritesmith = require('gulp.spritesmith');
const gulpIf = require('gulp-if');
const del = require('del');
const runSequence = require('run-sequence');
const jshint = require('gulp-jshint');
const jscs = require('gulp-jscs');
const scssLint = require('gulp-scss-lint');

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

gulp.task('watch-js', ['lint:js'], browserSync.reload);

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass', 'lint:scss']);
	gulp.watch('app/scripts/**/*.js', ['watch-js']);
	gulp.watch('app/*.html', browserSync.reload);
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


// amend src folder within file structure
// input files png only (?)
gulp.task('sprites', function() {
	gulp.src('app/images/sprites/**/*')
	.pipe(spritesmith({
		cssName: '_sprites.scss', // CSS file
		imgName: 'sprites.png', 	// image file
		imgPath: 'app/images/sprites.png'

		// include if creating retina images; meet 2 conditions
		// 1 - same no. of retina and non-retina imgs
		// 2 - retina imgs twice size of non-retina
		// retinaSrcFilter: 'app/images/sprites/*@x2.png',
		// retinaImgName: 'sprites@2x.png',
		// retinaImgPath: 'app/images/@2x.png'

	}))
	.pipe(gulpIf('*.png', gulp.dest('app/images')))
	.pipe(gulpIf('*.scss', gulp.dest('app/scss')));
});

gulp.task('clean:dev', function() {
	return del.sync([
		'app/css/',
		'app/*.html'
		]);
});

// consolidated dev phase task
gulp.task('default', function(callback) {
	runSequence('clean:dev', 
		['sprites', 'lint:js', 'lint:scss'],
		'sass',
		['browserSync', 'watch'],
		callback
		)
});

gulp.task('lint:js', function() {
	return gulp.src('app/scripts/**/*.js')
	.pipe(customPlumber('JSHint Error'))
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter ('fail', {
		// toggle for warning & info notifications
		ignoreWarning: true,
		ignoreInfo: true
	}))
	.pipe(jscs({
		// enables the linter to fix errors
		fix: true,
		configPath: '.jscsrc'
	}))
	.pipe(gulp.dest('app/scripts'))
})

gulp.task('lint:scss', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(scssLint({
		config: '.scss-lint.yml'
	}));
});
