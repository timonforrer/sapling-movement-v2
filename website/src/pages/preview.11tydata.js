module.exports = {
  eleventyComputed: {
    lang: data => data.page_content.__i18n_lang,
    title: data => data.page_content.meta.title
  },
  layout: 'base.webc',
  pagination: {
    alias: 'page_content',
    data: 'pages',
    resolve: 'values',
    serverless: 'eleventy.serverless.path.id',
    size: 1,
  },
  permalink: {
    preview: '/preview/:id'
  },
  dynamicPermalink: false
};


/*eleventyComputed:
  title: '{{ page_content.meta.title }}'
  lang: '{{ page_content.__i18n_lang }}'
layout: base.njk
pagination:
  data: pages
  size: 1
  resolve: values
  alias: page_content
  serverless: eleventy.serverless.path.id
permalink:
  preview: '/preview/:id'
dynamicPermalink: false*/
