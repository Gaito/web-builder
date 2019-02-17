'use strict';

const gulp = require('gulp');

module.exports = CopyTask;

/**
 * @param {KseirinWebBuilder.CopyConfig} config
 * @return {*}
 * @constructor
 */
function CopyTask(config) {
  return gulp.src(config.src)
             .pipe(gulp.dest(config.dist));
}