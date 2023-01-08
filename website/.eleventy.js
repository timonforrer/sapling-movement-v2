const { EleventyServerlessBundlerPlugin, EleventyRenderPlugin } = require('@11ty/eleventy');
const WebC = require('@11ty/eleventy-plugin-webc');
const getLangs = require('./src/utils/getLangs');
require('dotenv').config();

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} config 
 */

module.exports = function(config) {

  config.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'preview',
    functionsDir: './netlify/functions',
    copy: ['src/utils']
  });

  config.addPlugin(EleventyRenderPlugin);

  config.addPlugin(WebC, {
    components: 'src/components/*.webc'
  });

  config.addJavaScriptFunction(getLangs);
  
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
