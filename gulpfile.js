const requireDir = require('require-dir');

// Require gulp tasks from task directory
requireDir('./gulp/tasks/');

/* ==========================================================================
	move below tasks to separate task files
========================================================================== */

// const gulp = require('gulp');

// const sass = require('gulp-sass');
// const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');
// const browserSync = require('browser-sync');
// const autoprefixer = require('gulp-autoprefixer');
// const sourcemaps = require('gulp-sourcemaps');
// const spritesmith = require('gulp.spritesmith');
// const gulpIf = require('gulp-if');
// const del = require('del');
// const runSequence = require('run-sequence');
// const jshint = require('gulp-jshint');
// const jscs = require('gulp-jscs');
// const scssLint = require('gulp-scss-lint');
// const Server = require('karma').Server;
// const useref = require('gulp-useref');
// const uglify = require('gulp-uglify');
// const debug = require('gulp-debug');
// const cached = require('gulp-cached');
// const cssnano = require('gulp-cssnano');
// const responsiveGm = require('gulp-responsive-images');
// const imagemin = require('gulp-imagemin');
// const cache = require('gulp-cache');
// const surge = require('gulp-surge');


// gulp.task('hello', function() {
// 	return console.log('Hello World');
// });

// test then delete
// gulp.task('sass', function() {
// 	return gulp.src('app/scss/**/*.scss')
// 	// checks for errors in all plugins
// 	.pipe(customPlumber('Error running Sass'))
// 	.pipe(sourcemaps.init())
// 	.pipe(sass().on('error', errorHandler))
// 	.pipe(autoprefixer())
// 	.pipe(sourcemaps.write())
// 	.pipe(gulp.dest('app/css'))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}))
// });

// gulp.task('watch-js', ['lint:js'], browserSync.reload);

// gulp.task('watch', function() {
// 	gulp.watch('app/scss/**/*.scss', ['sass', 'lint:scss']);
// 	gulp.watch('app/js/**/*.js', ['watch-js']);
// 	gulp.watch('app/*.html', browserSync.reload);
// });

// function errorHandler(err) {
// 	// Logs the error in the command line
// 	console.log(err.toString());
// 	// Ends the current pipe so Gulp Watch doesn't break
// 	this.emit('end');
// }

// // notifies on errors using custom messages
// function customPlumber(errTitle) {
// 	return plumber({
// 		errorHandler: notify.onError({
// 			title: errTitle || "Error running Gulp",
// 			message: "Error: <%= error.message %>",
// 			sound: "Basso"
// 			})
// 	});
// }

// gulp.task('browserSync', function() {
// 	browserSync ({
// 		server: {
// 			baseDir: 'app'
// 		},
// 		browser: 'google chrome',
// 		notify: false
// 	})
// })


// gulp.task('clean:dev', function() {
// 	return del.sync([
// 		'app/css/',
// 		'app/*.html'
// 		]);
// });

// consolidated dev phase task
// gulp.task('default', function(callback) {
// 	runSequence('clean:dev', 
// 		['sprites', 'lint:js', 'lint:scss'],
// 		'sass',
// 		['browserSync', 'watch'],
// 		callback
// 		)
// });

// gulp.task('lint:js', function() {
// 	return gulp.src('app/js/**/*.js')
// 	.pipe(customPlumber('JSHint Error'))
// 	.pipe(jshint())
// 	.pipe(jshint.reporter('jshint-stylish'))
// 	.pipe(jshint.reporter ('fail', {
// 		// toggle for warning & info notifications
// 		ignoreWarning: true,
// 		ignoreInfo: true
// 	}))
// 	.pipe(jscs({
// 		// enables the linter to fix errors
// 		fix: true,
// 		configPath: '.jscsrc'
// 	}))
// 	.pipe(gulp.dest('app/js'))
// })

// gulp.task('lint:scss', function() {
// 	return gulp.src('app/scss/**/*.scss')
// 	.pipe(scssLint({
// 		config: '.scss-lint.yml'
// 	}));
// });

// gulp.task('test', function(done) {
// 	new Server({
// 		configFile: process.cwd() + '/karma.conf.js',
// 		singleRun: true
// 	}, done).start();
// });

// gulp.task('useref', function() {	
// 	return gulp.src('app/*.html')
// 		.pipe(useref())
// 		.pipe(cached('useref'))
// 		.pipe(debug())
// 		.pipe(gulpIf('*.js', uglify()))
// 		.pipe(gulpIf('*.css', cssnano()))
// 		.pipe(gulp.dest('dist'))
// });

// gulp.task('clean:dist', function (callback) {
// 	return del.sync(['dist']);
// })

// // use GM then move to folder responsive
// gulp.task('imagesgm', function() {
//     return gulp.src('app/images_src/**/*')
//         .pipe(responsiveGm({
//             '*.+(jpg|jpeg|png)': [{
//                 width: 1600,
//                 suffix: '_1600_large_2x',
//                 quality: 75
//             }, {
//                 width: 800,
//                 suffix: '_800_large_1x',
//                 quality: 70
//             }, {
//                 width: 600,
//                 suffix: '_medium',
//                 quality: 60
//             }, {
//                 width: 500,
//                 height: 375,
//                 crop: 'center',
//                 suffix: '_small',
//                 quality: 50
//             }],
//         }))
//         .pipe(gulp.dest('app/responsive/'));
// });

// // use imagemin then move to folder images 
// // correct task - $ and cache ?
// gulp.task('imagesmin', function() {
//     return gulp.src('app/responsive/**/*.+(png|jpg|jpeg|gif|svg)')
//         .pipe(cache(imagemin()))
//         // where is the pipe dest? to app or dist? 
//         .pipe(gulp.dest('app/images/'));
// });

// // copies any images in fixed to images folder 
// gulp.task('copy-fixed-images', function() {
//     return gulp.src('./app/images_src/fixed/**/*')
//         .pipe(gulp.dest('./app/images/'));
// });

// // cleans responsive folder
// gulp.task('responsive-tidy', function() {
//     return del([
//         './app/responsive/**/*'
//     ]);
// })

// // clears cache for imagemin 
// gulp.task('cache:clear', function (callback) {
// 	return cache.clearAll(callback)
// })

// // combo build task for responsive (gm) and min images
// gulp.task('build-images', function(callback) {
//     runSequence('imagesgm', ['imagesmin', 'copy-fixed-images'],
//         'responsive-tidy',
//         callback);
// });

// gulp.task('fonts', function() {
// 	return gulp.src('app/fonts')
// 		.pipe(gulp.dest('dist'))
// });

// gulp.task('clean:dist', function (callback) {
// 	return del.sync(['dist']);
// })

// gulp.task('build', function() {
// 	runSequence(
// 		['clean:dev', 'clean:dist'],
// 		['sprites', 'lint:js', 'lint:scss'],
// 		'sass',
// 		['useref', 'build-images', 'fonts', 'test'],
// 		callback
// 		);
// })

// gulp.task('serve:dist', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: 'dist'
// 		},
// 		browser: 'google chrome',
// 		notify: false		
// 	})
// })


