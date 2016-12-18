const gulp = require('gulp');
const del = require('del');

// clean dev
gulp.task('clean:dev', function() {
	return del.sync([
		'app/css/'
		]);
});

// cleans dist with gulp-cache
gulp.task('clean:dist', function() {
	return del.sync(['dist']);
})

// cleans responsive folder
gulp.task('clean:responsive', function() {
    return del.sync([
        '/app/responsive/**/*'
    ]);
})

// clears cache for imagemin 
gulp.task('cache:clear', function (callback) {
	return cache.clearAll(callback)
})