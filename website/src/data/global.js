const EleventyFetch = require('@11ty/eleventy-fetch');
const fetch = require('node-fetch');
const arrToObject = require('../utils/arrToObject');

/**
 * Code could be put into helper function, but only useful if more data files for
 * other sanity content will be added
 */

module.exports = async function() {
  // the query for fetching all global data
  let query = `*[_type=="settings"]`;

  // escape special characters, so the query can be passed to the URL
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
    // turn array into object with lang as key
    data = arrToObject(data.result, '__i18n_lang');
    return data;
  }

  // if opted out of caching use node fetch to get fresh content
  if (process.env.NO_CACHE) {
    const res = await fetch(url, options);
    // get JSON body from response
    let data = await res.json();
    // remove drafts
    data = data.result.filter(page => !page._id.startsWith('drafts.'))
    // turn array into object with lang as key
    data = arrToObject(data, '__i18n_lang');
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
  // turn array into object with lang as key
  data = arrToObject(data, '__i18n_lang');
  return data;
}
