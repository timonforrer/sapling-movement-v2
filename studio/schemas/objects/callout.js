import { FiHelpCircle, FiInfo, FiAlertTriangle } from 'react-icons/fi'
import { toPlainText } from '@portabletext/react'

const map = {
  question: FiHelpCircle,
  info: FiInfo,
  attention: FiAlertTriangle
}

export { map }

export default {
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: Object.keys(map)
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'richtext' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      type: 'type'
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