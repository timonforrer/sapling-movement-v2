const fetchFromSanity = require('../utils/fetchFromSanity');

module.exports = async function() {
  // the query for fetching all global data
  let query = `*[_type=="settings"]`;

  // using util to prepare data for different environments
  let data = await fetchFromSanity({
    query: query,
    identifier: '__i18n_lang'
  });

  // expose fetched data to eleventy
  return data;
}
