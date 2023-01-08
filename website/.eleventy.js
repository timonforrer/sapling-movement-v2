require('dotenv').config();

const { EleventyServerlessBundlerPlugin, EleventyRenderPlugin } = require('@11ty/eleventy');
const WebC = require('@11ty/eleventy-plugin-webc');
const getLangs = require('./src/utils/getLangs');
const portableTextToHTML = require('./src/utils/portableTextToHTML');

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
  
  config.addJavaScriptFunction('getLangs', getLangs);
  config.addJavaScriptFunction('portableTextToHTML', portableTextToHTML);
  
    config.addPlugin(WebC, {
      components: 'src/components/*.webc'
    });
  
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
