'use strict';

const PathUtils = require('../utils/PathUtils.js');

/**
 * @class HtmlConfig
 * @memberOf KseirinWebBuilder
 * @property {Array<String>} src
 * @property {(String|Function)} dist
 * @property {Array<String>} watch
 * @property {Array<String>} clean
 */
class HtmlConfig {
  /**
   * @param {(KseirinWebBuilder.HtmlConfig|Object)=} config
   */
  constructor(config) {
    config = config || {};
    config.dist = config.dist || `dist`;
    this.src = config.src || [];
    this.dist = (typeof config.dist == 'object') ? PathUtils.getDistMatcher(config.dist) : config.dist;
    this.watch = config.watch || [];
    this.clean = config.clean || [];
  }
}

module.exports = HtmlConfig;