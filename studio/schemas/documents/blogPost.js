export default {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'de',
  },
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
      options: {
        filter: ({ document }) => {
          if (!document.__i18n_lang) {
            return {
              filter: '__i18n_lang == $lang',
              params: { lang: 'de' }
            }
          }

          return {
            filter: '__i18n_lang == $lang',
            params: { lang: document.__i18n_lang }
          }
        }
      }
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
          options: {
            filter: ({ document }) => {
              if (!document.__i18n_lang) {
                return {
                  filter: '__i18n_lang == $lang',
                  params: { lang: 'de' }
                }
              }

              return {
                filter: '__i18n_lang == $lang',
                params: { lang: document.__i18n_lang }
              }
            }
          }
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