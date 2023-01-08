const fetchFromSanity = require('../utils/fetchFromSanity');

module.exports = async function() {
  // the query for fetching the sanity documents
  let query = `
    *[_type in ["modularPage", "blogPost"]]{
      _type == "modularPage" => {...},
      _type == "blogPost" => {
        ...,
        author->,
        blocks[] {
          ...,
          _type == "image" => {
            ...,
            asset->
          },
          _type == "richtext" => {
            ...,
            children[] {
              ...
            }
          },
          _type == "reference" => @->
        },
      },
      meta {
        ...,
        image {
          ...,
          asset->
        }
      }
    }`

  // using util to prepare data for different environments
  let data = await fetchFromSanity({
    query: query,
    identifier: '_id'
  });

  // expose fetched data to eleventy
  return data;
}
