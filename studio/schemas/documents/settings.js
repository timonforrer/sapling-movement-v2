import { filterRefByLang } from "../../utils";

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'de',
  },
  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'page',
              title: 'Page',
              type: 'reference',
              to: [{ type: 'modularPage' }],
              options: {
                filter: (input) => filterRefByLang(input)
              }
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings'
      }
    }
  }
}
