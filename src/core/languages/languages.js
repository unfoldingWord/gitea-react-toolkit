import langnames from './langnames.json';

export const getLanguage = ({languageId}) => {
  let language;
  const langname = langnames.filter(object => object.lc === languageId)[0];
  if (langname) {
    language = {
      id: langname.pk,
      languageName: langname.ang,
      region: langname.lr,
      gateway: langname.gw,
      country: langname.hc,
      localized: langname.ln,
      languageId: langname.lc,
      direction: langname.ld,
      aliases: langname.alt,
      countries: langname.cc,
    };
  }
  return language;
};

export const getLanguageName = ({languageId}) => {
  const language = getLanguage({languageId});
  const languageName = language ? language.ln : null;
  return languageName;
};
