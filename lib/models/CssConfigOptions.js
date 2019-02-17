'use strict';

/**
 * @class CssConfigOptions
 * @memberOf KseirinWebBuilder
 * @property {(KseirinWebBuilder.CssCompilerType|null)} compiler
 * @property {(Object|null)} compilerOptions
 */
class CssConfigOptions {
  /**
   * @param {(KseirinWebBuilder.CssConfigOptions|Object)=} config
   */
  constructor(config) {
    config = config || {};
    this.compiler = config.compiler || null;
    this.compilerOptions = config.compilerOptions || null;
  }
}

module.exports = CssConfigOptions;