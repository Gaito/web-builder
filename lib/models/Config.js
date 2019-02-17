'use strict';

const CopyConfig = require('./CopyConfig.js');
const HtmlConfig = require('./HtmlConfig.js');
const CssConfig = require('./CssConfig.js');
const JsConfig = require('./JsConfig.js');

/**
 * @class Config
 * @memberOf KseirinWebBuilder
 * @property {KseirinWebBuilder.CopyConfig} copy
 * @property {KseirinWebBuilder.HtmlConfig} html
 * @property {KseirinWebBuilder.CssConfig} css
 * @property {KseirinWebBuilder.JsConfig} js
 */
class Config {
  /**
   * @param {(KseirinWebBuilder.Config|Object)=} config
   */
  constructor(config) {
    config = config || {};
    this.copy = new CopyConfig(config.copy);
    this.html = new HtmlConfig(config.html);
    this.css = new CssConfig(config.css);
    this.js = new JsConfig(config.js);
  }
}

module.exports = Config;