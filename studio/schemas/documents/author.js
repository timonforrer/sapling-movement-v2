export default {
  name: 'author',
  title: 'Authors',
  type: 'document',
  // i18n: true,
  fields: [
    {
      name: 'meta',
      type: 'meta'
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(155)
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
}
