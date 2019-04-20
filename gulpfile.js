'use strict'
var gulp = require('gulp')
var connect = require('gulp-connect') // Runs a local dev server
var open = require('gulp-open') // open a URL for a web browser

var browserify = require('browserify') // bundles js
var reactify = require('reactify') // transforms react JSX to JS
var source = require('vinyl-source-stream') // use conventional text streams with Gulp

var concat = require('gulp-concat') // concat files

var eslint = require('gulp-eslint') // eslint

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html', // golabs works as regex
    dist: './dist/',
    js: './src/**/*.js',
    image: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/build/toastr.css'
    ],
    mainJs: './src/main.js'
  }
}
// start a local development server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
})

gulp.task('open', ['connect'], function () {
  gulp
    .src('dist/index.html')
    .pipe(open({ url: config.devBaseUrl + ':' + config.port + '/' }))
})

gulp.task('html', function () {
  gulp
    .src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
})
gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js')) // name of bundle
    .pipe(gulp.dest(config.paths.dist + '/scripts')) // destination for bundle
    .pipe(connect.reload()) // reload to browser
})
gulp.task('css', function () {
  gulp
    .src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload()) // reload to browser
})

// migrate images to dist folder
// note that i could even optimize my images here
gulp.task('images', function () {
  gulp
    .src(config.paths.image)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload()) // reload to browser

  // push favicon
  gulp.src('./src/favicon.io').pipe(gulp.dest(config.paths.dist))
})
gulp.task('lint', function () {
  return gulp
    .src(config.paths.js)
    .pipe(eslint({ config: 'eslint.config.json' }))
    .pipe(eslint.format())
})
gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html'])
  gulp.watch(config.paths.js, ['js', 'lint'])
})
// add reference of tasks to run
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch'])
