'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = CssTask;

/**
 * @param {KseirinWebBuilder.CssConfig} config
 * @return {*}
 * @constructor
 */
function CssTask(config) {
  del.sync(config.clean);
  return gulp.src(config.src)
             .pipe(gulp.dest(config.dist));
}