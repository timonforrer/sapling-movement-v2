import React from 'react'

export default {
  name: 'richtext',
  title: 'Richtext',
  type: 'block',
  of: [{icon: false, type: 'footnote'}],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Emphasis', value: 'em' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
      {
        title: 'Sup',
        value: 'sup',
        blockEditor: {
          icon: () => <div>x<sup>2</sup></div>,
          render: ({ children }) => <sup>{children}</sup>
        }
      },
      {
        title: 'Sub',
        value: 'sub',
        blockEditor: {
          icon: () => <div>x<sub>2</sub></div>,
          render: ({ children }) => <sub>{children}</sub>
        }
      }
    ]
  }
}
