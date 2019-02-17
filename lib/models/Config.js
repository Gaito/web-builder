'use strict';

const CopyConfig = require('./CopyConfig.js');
const HtmlConfig = require('./HtmlConfig.js');

/**
 * @class Config
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.CopyConfig} copy
 * @property {KseirinWebBuilder.HtmlConfig} html
 */
class Config {
  /**
   * @param {(KseirinWebBuilder.Config|Object)=} config
   */
  constructor(config) {
    config = config || {};
    this.copy = new CopyConfig(config.copy);
    this.html = new HtmlConfig(config.html);
  }
}

module.exports = Config;