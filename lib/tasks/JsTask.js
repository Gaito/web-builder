'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = JsTask;

/**
 * @param {KseirinWebBuilder.JsConfig} config
 * @return {*}
 */
function JsTask(config) {
  del.sync(config.clean);
  return gulp.src(config.src)
             .pipe(gulp.dest(config.dist));
}