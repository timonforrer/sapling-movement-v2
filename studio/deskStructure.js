import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Main')
    .items([
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
        .title('Authors')
        .child(
          S.documentList()
            .title('Authors')
            .schemaType('author')
            .filter('_type == "author" && __i18n_lang == $baseLanguage')
            .params({ baseLanguage: 'de' })
            .canHandleIntent(S.documentTypeList('author').getCanHandleIntent())
        )
    ])