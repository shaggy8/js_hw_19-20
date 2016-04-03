var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');


gulp.task('sass', function () {
      return gulp.src('scss/**/*.scss')
                 .pipe(sass().on('error', sass.logError))
                 .pipe(autoprefixer({
                    browsers: ['last 7 versions'],
                    cascade: false
                  }))
                 .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function(){
      return gulp.src('css/**/*.css')
                 .pipe(concat('styles-min.css'))
                 .pipe(cleanCSS())
                 .pipe(gulp.dest('build'));
});

gulp.task('minify-js', function(){
      return gulp.src('js/*.js')
                 .pipe(concat('scripts-min.js'))
                 .pipe(uglify())
                 .pipe(gulp.dest('build'));
});

gulp.task('default', function(){
      gulp.run('minify-css', 'minify-js');
});

gulp.task('watch', function(){
      watch('scss/*', function(event, cb) {
          gulp.start('sass');
      });
});