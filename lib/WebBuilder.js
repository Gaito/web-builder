'use strict';

const gulp = require('gulp');
const Config = require('./models/Config.js');
const CopyTask = require('./tasks/CopyTask.js');
const HtmlTask = require('./tasks/HtmlTask.js');

/**
 * @class WebBuilder
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.Config} config
 */
class WebBuilder {
  constructor(config) {
    this.config = new Config(config);

    if (this.config.copy.src) this.initTask('copy', () => CopyTask(this.config.copy));
    if (this.config.html.src) this.initTask('html', () => HtmlTask(this.config.html));

    const allTasks = gulp.tree({deep: false}).nodes;
    const buildTasks = allTasks.filter(task => !/-watch$/.test(task));
    const watchTasks = allTasks.filter(task => /-watch$/.test(task));

    gulp.task('default', gulp.parallel.apply(gulp, buildTasks));
    gulp.task('build', gulp.parallel.apply(gulp, buildTasks));
    gulp.task('watch', gulp.parallel.apply(gulp, watchTasks));
  }

  initTask(name, task) {
    gulp.task(name, task);
    gulp.task(`${name}-watch`, gulp.series(name, () => gulp.watch(this.config.copy.watch, gulp.series(name))));
  }
}

module.exports = WebBuilder;