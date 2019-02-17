'use strict';

const PathUtils = require('../utils/PathUtils.js');
const CssConfigOptions = require('./CssConfigOptions.js');

/**
 * @class CssConfig
 * @memberOf KseirinWebBuilder
 * @property {Array<String>} src
 * @property {(String|Function)} dist
 * @property {Array<String>} watch
 * @property {Array<String>} clean
 * @property {KseirinWebBuilder.CssConfigOptions} options
 */
class CssConfig {
  /**
   * @param {(KseirinWebBuilder.CssConfig|Object)=} config
   */
  constructor(config) {
    config = config || {};
    config.dist = config.dist || `dist`;
    this.src = config.src || [];
    this.dist = (typeof config.dist == 'object') ? PathUtils.getDistMatcher(config.dist) : config.dist;
    this.watch = config.watch || [];
    this.clean = config.clean || [];
    this.options = new CssConfigOptions(config.options);
  }
}

module.exports = CssConfig;