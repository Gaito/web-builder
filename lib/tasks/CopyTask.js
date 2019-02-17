'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = CopyTask;

/**
 * @param {KseirinWebBuilder.CopyConfig} config
 * @return {*}
 */
function CopyTask(config) {
  del.sync(config.clean);
  return gulp.src(config.src)
             .pipe(gulp.dest(config.dist));
}