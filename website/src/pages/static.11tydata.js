module.exports = {
  eleventyComputed: {
    lang: data => data.page_content.__i18n_lang,
    title: data => data.page_content.meta.title,
    permalink: data => `${data.page_content.meta.slug.current}/index.html`
  },
  layout: "base.webc",
  pagination: {
    alias: "page_content",
    data: "pages",
    resolve: "values",
    size: 1,
  },
  // appearently, you have to first set *any* value so that
  // you can generate a permalink inside eleventyComputed
  permalink: ' ',
  dynamicPermalink: false
};