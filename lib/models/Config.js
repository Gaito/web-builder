'use strict';

const CopyConfig = require('./CopyConfig.js');

/**
 * @class Config
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.CopyConfig} copy
 */
class Config {
  /**
   * @param {(KseirinWebBuilder.Config|Object)=} config
   */
  constructor(config) {
    config = config || {};
    this.copy = new CopyConfig(config.copy);
  }
}

module.exports = Config;