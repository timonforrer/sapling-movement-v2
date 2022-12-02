import { map } from '../objects/callout'
import { toPlainText } from '@portabletext/react'

export default {
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  // i18n: true,
  fields: [
    {
      name: 'meta',
      type: 'meta'
    },
    {
      name: 'callout',
      type: 'callout',
    },
  ],
  preview: {
    select: {
      title: 'callout.title',
      subtitle: 'callout.description',
      type: 'callout.type'
    },
    prepare(selection) {
      const { title, subtitle, type } = selection
      return {
        title: title,
        subtitle: toPlainText(subtitle),
        media: type ? map[type] : false
      }
    }
  }
}