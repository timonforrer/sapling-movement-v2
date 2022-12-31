require('dotenv').config();

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} config 
 */

module.exports = function() {
  return {
    dir: {
      data: 'data',
      includes: 'components',
      input: 'src',
      layouts: 'layouts',
      output: 'dist'
    }
  }
}
