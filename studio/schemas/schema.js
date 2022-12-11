// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import author from './documents/author'
import blogPost from './documents/blogPost'
import documentGroup from './documents/documentGroup'
import glossary from './documents/glossary'
import modularPage from './documents/modularPage'
import settings from './documents/settings'
import source from './documents/source'

import arrayRichtext from './objects/arrayRichtext'
import callout from './objects/callout'
import footnote from './objects/footnote'
import meta from './objects/meta'
import richtext from './objects/richtext'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    arrayRichtext,
    author,
    blogPost,
    documentGroup,
    callout,
    footnote,
    glossary,
    meta,
    modularPage,
    richtext,
    settings,
    source
  ]),
})
