const EleventyFetch = require('@11ty/eleventy-fetch');
const fetch = require('node-fetch');
const arrToObject = require('../utils/arrToObject');

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
          _type == "image" => @->,
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

  // encode the query, to be used in URL
  query = encodeURIComponent(query);

  // complete url consisting of <project_id>.api.sanity.io/<api version as YYYY-MM-DD>
  let url = `https://v2jyjrnn.api.sanity.io/v2021-12-11/data/query/production?query=${query}`;

  const options = {
    headers: {
      'Authorization': `Bearer ${process.env.SANITY_TOKEN}`
    }
  };

  // if in serverless environment, get latest versions of all published and drafted documents
  if (process.env.ELEVENTY_SERVERLESS) {
    const res = await fetch(url, options);
    // get JSON body from response
    let data = await res.json();
    // turn array into object with document IDs as keys
    data = arrToObject(data.result, '_id');
    return data;
  }

  // if opted out of caching use node fetch to get fresh content
  if (process.env.NO_CACHE) {
    const res = await fetch(url, options);
    // get JSON body from response
    let data = await res.json();
    // remove drafts
    data = data.result.filter(page => !page._id.startsWith('drafts.'))
    // turn array into object with document IDs as keys
    data = arrToObject(data, '_id');
    return data;
  }

  // default case: fetching the data with EleventyFetch for caching
  let data = await EleventyFetch(url, {
    duration: '1d',
    type: 'json',
    fetchOptions: options
  });

  // remove drafts
  data = data.result.filter(page => !page._id.startsWith('drafts.'))
  // turn array into object with document IDs as keys
  data = arrToObject(data, '_id');
  return data;
}
