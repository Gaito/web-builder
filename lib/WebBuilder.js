'use strict';

const gulp = require('gulp');
const Config = require('./models/Config.js');
const CopyTask = require('./tasks/CopyTask.js');
const HtmlTask = require('./tasks/HtmlTask.js');
const CssTask = require('./tasks/CssTask.js');
const JsTask = require('./tasks/JsTask.js');

/**
 * @class WebBuilder
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.Config} config
 */
class WebBuilder {
  constructor(config) {
    this.config = new Config(config);

    this.initTask('copy', this.config.copy, () => CopyTask(this.config.copy));
    this.initTask('html', this.config.html, () => HtmlTask(this.config.html));
    this.initTask('css', this.config.css, () => CssTask(this.config.css));
    this.initTask('js', this.config.js, () => JsTask(this.config.js));

    const allTasks = gulp.tree({deep: false}).nodes;
    const buildTasks = allTasks.filter(task => !/-watch$/.test(task));
    const watchTasks = allTasks.filter(task => /-watch$/.test(task));

    gulp.task('default', gulp.parallel.apply(gulp, buildTasks));
    gulp.task('build', gulp.parallel.apply(gulp, buildTasks));
    gulp.task('watch', gulp.parallel.apply(gulp, watchTasks));
  }

  initTask(name, config, task) {
    gulp.task(name, task);
    gulp.task(`${name}-watch`, gulp.series(name, () => gulp.watch(config.watch, gulp.series(name))));
  }
}

module.exports = WebBuilder;