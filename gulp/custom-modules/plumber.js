const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

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

module.exports = customPlumber;
