export default {
  name: 'modularPage',
  title: 'Modular page',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'de',
  },
  fields: [
    {
      name: 'meta',
      type: 'meta'
    },
    {
      name: 'documentGroup',
      title: 'Document group',
      type: 'reference',
      to: [{ type: 'documentGroup' }],
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          name: 'richtext',
          type: 'arrayRichtext',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'meta.title' || ''
    }
  }
}