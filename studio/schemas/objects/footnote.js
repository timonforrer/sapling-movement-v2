export default {
  name: 'footnote',
  title: 'Footnote',
  type: 'object',
  fields: [
    {
      name: 'source',
      title: 'Source',
      type: 'reference',
      to: [{ type: 'source' }],
      weak: false,
    },
    {
      name: 'page',
      title: 'Page',
      type: 'number'
    }
  ],
  preview: {
    select: {
      page: 'page',
      source: 'source.shortTitle'
    },
    prepare({source, page}) {
      const author = source.length > 6 ? source.slice(0,7) + '…' : source
      return {
        title: `${author} (P. ${page})`
      }
    }
  }
}