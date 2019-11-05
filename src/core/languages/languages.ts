import langnames from './langnames.json';

interface GetLanguage {
  (args: { languageId: string }): {
    id: string;
    languageName: string;
    region: string;
    gateway: string;
    country: string;
    localized: string;
    languageId: string;
    direction: string;
    aliases: string;
    countries: string;
  } | undefined;
}

export const getLanguage: GetLanguage = ({ languageId }) => {
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

interface GetLanguageName {
  (args: { languageId: string }): string | null;
}

export const getLanguageName: GetLanguageName = ({ languageId }) => {
  const language = getLanguage({ languageId });
  const languageName = language ? language.localized : null;
  return languageName;
};
