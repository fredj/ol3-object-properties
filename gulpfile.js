var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(concat('ol3-properties.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({output: {quote_keys: true}}))
    .pipe(gulp.dest('dist'))
});
