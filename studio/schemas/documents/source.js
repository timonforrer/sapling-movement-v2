export default {
  name: 'source',
  title: 'Sources',
  type: 'document',
  fields: [
    {
      name: 'shortTitle',
      title: 'Short Title',
      type: 'string'
    },
    {
      name: 'note',
      title: 'Note',
      type: 'array',
      of: [
        {
          type:'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ]
    },
    {
      name: 'bibliography',
      title: 'Bibliography',
      type: 'array',
      of: [
        {
          type:'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              { title: 'Emphasis', value: 'em' }
            ]
          }
        }
      ]
    },
  ],
}
