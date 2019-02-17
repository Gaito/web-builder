'use strict';

/**
 * @class PathUtils
 * @memberOf KseirinWebBuilder
 */
class PathUtils {
  /**
   * @param {Object} map
   * @return {Function}
   */
  getDistMatcher(map) {
    const matchData = Object.keys(map).map(key => {
      return {
        exp: new RegExp(`^${key}`),
        path: map[key]
      };
    });
    return distMatcher;

    /**
     * @param {Object} data
     * @param {Object} data.stat
     * @param {Array<String>} data.history
     * @param {String} data.cwd
     * @param {String} data.base
     * @param {Buffer} data.contents
     * @param {*} data.symlink
     * @return {String}
     */
    function distMatcher(data) {
      const cwd = data.cwd.replace(/\\/g, `/`);
      const base = data.base.replace(/\\/g, `/`);
      const rel = base.replace(new RegExp(`^${cwd}\/`), '');
      const replacer = matchData.find(item => item.exp.test(rel));
      if (replacer) return rel.replace(replacer.exp, replacer.path);
      return `dist`;
    }
  }
}

module.exports = new PathUtils();