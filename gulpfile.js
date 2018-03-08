const gulp = require('gulp');
const markdown = require('gulp-markdown');

gulp.task('default', () =>
gulp.src('english.resume.html')
    .pipe(markdown())
    .pipe(gulp.dest('dist'))
);
