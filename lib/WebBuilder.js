'use strict';

const gulp = require('gulp');
const Config = require('./models/Config.js');
const CopyTask = require('./tasks/CopyTask.js');

/**
 * @class WebBuilder
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.Config} config
 */
class WebBuilder {
  constructor(config) {
    this.config = new Config(config);

    this.initTask('copy', () => CopyTask(this.config.copy));

    const allTasks = gulp.tree({deep: false}).nodes;
    const buildTasks = allTasks.filter(task => !/-watch$/.test(task));
    const watchTasks = allTasks.filter(task => /-watch$/.test(task));

    gulp.task('default', gulp.series.apply(gulp, buildTasks));
    gulp.task('build', gulp.series.apply(gulp, buildTasks));
    gulp.task('watch', gulp.series.apply(gulp, watchTasks));
  }

  initTask(name, task) {
    gulp.task(name, task);
    gulp.task(`${name}-watch`, gulp.series(name, () => gulp.watch(this.config.copy.watch, gulp.series(name))));
  }
}

module.exports = WebBuilder;