const { toHTML } = require('@portabletext/to-html');

/**
 * @param {Array} blocks
*/

module.exports = portableTextToHTML = (blocks) => {
  return toHTML(blocks, {
    components: {
      marks: {
        sub: ({ children }) => `<sub>${children}</sub>`,
      },
      types: {
        callout: ({ value }) => `
          <callout
            heading="${value.title}"
            type="${value.type}">
            ${portableTextToHTML(value.description)}
          </callout>`,
        footnote: () => `[footnote]`,
        glossary: ({ value }) => `
          <callout
            heading="${value.title}"
            type="${value.type}">
            ${portableTextToHTML(value.description)}
          </callout>`,
        image: ({ value }) => `
          <img
            alt="${value.alt}"
            src="${value.asset.url}"
          />`,
      }
    }
  });
};
