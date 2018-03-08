const gulp = require('gulp');
const markdown = require('gulp-markdown');

gulp.task('default', () =>
gulp.src('english.resume.md')
    .pipe(markdown())
    .pipe(gulp.dest('dist'))
);
