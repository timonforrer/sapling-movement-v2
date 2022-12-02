export default {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  // i18n: true,
  fields: [
    {
      name: 'meta',
      type: 'meta',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'richtext'
        },
        {
          type: 'reference',
          to: [{ type: 'glossary' }],
        },
        {
          type: 'callout'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'alt',
              title: 'Alternative text',
              options: {
                isHighlighted: true
              }
            },
            {
              type: 'string',
              name: 'caption',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ],
    },
  ],
  preview: {
    select: {
      title: 'meta.title' || ''
    }
  }
}