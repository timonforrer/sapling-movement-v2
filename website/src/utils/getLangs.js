/**
 * @param {string} page
*/

// this is spaghetti code – but it works
// the function takes in a page object and returns an object with all available languages
module.exports = getLangs = (page) => {
  let langs = {
    de: {},
    en: {}
  };

  if (page.__i18n_lang === 'de') {
    langs.de = {
      id: page._id,
      active: true
    }
    langs.en = {
      id: page.__i18n_refs[0]._ref,
      active: false
    }
  } else {
    langs.de = {
      id: page.__i18n_base._ref,
      active: false
    }
    langs.en = {
      id: page._id,
      active: true
    }
  }

  return langs;
};
