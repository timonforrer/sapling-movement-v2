import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Main')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.documentList()
            .title('Settings')
            .schemaType('settings')
            .filter('_type == "settings" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('settings').getCanHandleIntent())
        ),
      S.divider(),
      S.listItem()
        .title('Modular Pages')
        .child(
          S.documentTypeList('documentGroup')
            .defaultOrdering(
              [{field: 'ordering', direction: 'asc'}]
            )
            .title('Modular Pages by Document Group')
            .child(groupId =>
              S.documentList()
                .title('Modular Pages')
                .filter('_type == "modularPage" && __i18n_lang == $baseLanguage && $groupId == documentGroup._ref')
                .params({ baseLanguage: 'de', groupId })
            )
        ),
      S.listItem()
        .title('Blog Posts')
        .child(
          S.documentList()
            .title('Blog Posts')
            .schemaType('blogPost')
            .filter('_type == "blogPost" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('blogPost').getCanHandleIntent())
        ),
      S.listItem()
        .title('Glossary')
        .child(
          S.documentList()
            .title('Glossary')
            .schemaType('glossary')
            .filter('_type == "glossary" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('glossary').getCanHandleIntent())
        ),
      S.listItem()
        .title('Authors')
        .child(
          S.documentList()
            .title('Authors')
            .schemaType('author')
            .filter('_type == "author" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('author').getCanHandleIntent())
        ),
      S.divider(),
      S.listItem()
        .title('Sources')
        .child(
          S.documentList()
            .title('Sources')
            .schemaType('source')
            .filter('_type == "source"')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('source').getCanHandleIntent())
        ),
      S.listItem()
        .title('Document Groups')
        .child(
          S.documentList()
            .title('Document Groups')
            .schemaType('documentGroup')
            .filter('_type == "documentGroup"')
            .canHandleIntent(S.documentTypeList('documentGroup').getCanHandleIntent())
        ),
    ])
