import Path from 'path';

import {
  get,
  getUID,
} from '..';

import { getLanguage } from '../../languages';

export async function getLanguages({username, resourceIds}) {
    const languageIds = await getLanguageIds({username, resourceIds});
    const languages = languageIds.map(languageId =>
      getLanguage({languageId})
    ).filter(language => !!language);
    languages.sort((a,b) =>
      (a.languageId > b.languageId) ? 1 : ((b.languageId > a.languageId) ? -1 : 0)
    );
    return languages;
  };
  
  export async function getLanguageIds({username, resourceIds}) {
    let languageIds = [];
    const promises = resourceIds.map(resourceId => {
      return getLanguageIdsByResource({username, resourceId});
    });
    const languageIdsArray = await Promise.all(promises);
    const _languageIds = languageIdsArray.flat();
    _languageIds.forEach(languageId => {
      const languageAdded = languageIds.includes(languageId);
      if (!languageAdded) languageIds.push(languageId);
    });
    return languageIds;
  }
  
  // /repos/search?q=ulb&uid=4598&limit=50&exclusive=true
  export async function getLanguageIdsByResource({username, resourceId}) {
    let languageIds = [];
    const uid = await getUID({username});
    const params = {q: resourceId, uid, limit: 50, exclusive: true};
    const uri = Path.join(apiPath, `repos/search`);
    const repos = await get({uri, params});
    if (repos && repos.data) {
      languageIds = repos.data.map(repo => repo.name.split('_')[0]);
    }
    return languageIds;
  };