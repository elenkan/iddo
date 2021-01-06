'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

gulp.task('css', () => {
  return gulp.src('source/less/style.less')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(less())
  .pipe(postcss([
    autoprefixer()]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('images', () => {
  return gulp.src('source/img/**/*.{png,svg}')
  .pipe(imagemin([
    imagemin.svgo()]))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('server', () => {
  server.init({
    server: 'dist/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp
  .watch('source/less/**/*.less', gulp.series('css'))
  .on('change', server.reload);
  gulp
  .watch('source/*.html')
  .on('change', server.reload);
  gulp
  .watch('source/js/**/*.js')
  .on('change', server.reload);
});

gulp.task('javascript', () => {
    return gulp.src([
      'source/js/util.js',
      'source/js/data-mocks.js',
      'source/js/portfolio-list.js',
      'source/js/feedback-slider.js',
      'source/js/team-button.js',
      'source/js/skills-circle.js',
      'source/js/signup-form.js',
      'source/js/footer-arrow.js'
      ])
    .pipe(sourcemap.init())
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(rename('bundle.min.js'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/index.html'
    ],
    {
      base: 'source'
    })
  .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  return del('dist');
});

gulp.task('build', gulp.series('clean', 'copy', 'images', 'css', 'javascript'));
gulp.task('dev', gulp.series('build','server'));
