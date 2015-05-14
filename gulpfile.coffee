gulp        = require 'gulp'
stylus      = require 'gulp-stylus'
concat      = require 'gulp-concat'
source      = require 'vinyl-source-stream'
browserify  = require 'browserify'
reactify    = require 'reactify'
del         = require 'del'

gulp.task 'jsx', ->
  del ['./public/js/*'], ->
    browserify
      entries: ['./src/front/jsx/app.js']
    .transform reactify, {stripTypes: true, es6: true}
    .bundle()
    .pipe source 'index.js'
    .pipe gulp.dest './public/js'

gulp.task 'stylus', ->
  del ['./public/css/*'], ->
    gulp.src ['./src/front/stylus/index.styl']
      .pipe stylus()
      .pipe gulp.dest './public/css'

gulp.task 'watch', ->
  gulp.watch './src/front/stylus/**/*.styl', ['stylus']
  gulp.watch './src/front/jsx/**/*.jsx', ['jsx']

gulp.task 'default', ['jsx', 'stylus', 'watch']
