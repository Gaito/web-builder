'use strict';

const gulp = require('gulp');
const del = require('del');

module.exports = HtmlTask;

/**
 * @param {KseirinWebBuilder.HtmlConfig} config
 * @return {*}
 */
function HtmlTask(config) {
  del.sync(config.clean);
  return gulp.src(config.src)
             .pipe(gulp.dest(config.dist));
}