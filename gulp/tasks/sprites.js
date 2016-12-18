const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
var $ = require ('gulp-load-plugins')();

// require config
const config = require('../config.js');

// amend src folder within file structure
// input files png only (?)
gulp.task('sprites', function() {
	gulp.src(config.sprites.src)
		.pipe(spritesmith(config.sprites.options))
		.pipe($.if('*.png', gulp.dest(config.sprites.imgDest)))
		.pipe($.if('*.scss', gulp.dest(config.sprites.scssDest)));
});