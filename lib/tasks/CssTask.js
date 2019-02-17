'use strict';

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const sassCompiler = require('node-sass');

sass.compiler = sassCompiler;

module.exports = CssTask;

/**
 * @param {KseirinWebBuilder.CssConfig} config
 * @return {*}
 */
function CssTask(config) {
  del.sync(config.clean);
  let pipeline = gulp.src(config.src);
  if (config.options.compiler == 'SASS') pipeline = pipeline.pipe(sass(config.options.compilerOptions));
  return pipeline.pipe(gulp.dest(config.dist));
}