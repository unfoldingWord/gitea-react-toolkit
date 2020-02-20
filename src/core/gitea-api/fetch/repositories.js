import Path from 'path';
import YAML from 'js-yaml-parser';

import {
  get,
  getFile,
  getUID,
  fetchRepositoryZipFile,
} from '..';
import { getLanguage } from '../../languages';

export const resourceRepositories = ({languageId}) => {
  return {
    obs: languageId + '_obs',
    'obs-tn': languageId + '_obs-tn',
    'obs-tq': languageId + '_obs-tq',
    'obs-sn': languageId + '_obs-sn',
    'obs-sq': languageId + '_obs-sq',
    ult: languageId + '_ult',
    ust: languageId + '_ust',
    irv: languageId + '_irv',
    ulb: languageId + '_ulb',
    udb: languageId + '_udb',
    tn: languageId + '_tn',
    ta: languageId + '_ta',
    tw: languageId + '_tw',
    ugnt: 'UGNT',
    uhb: 'UHB',
    ugl: languageId + '_ugl',
    uhal: languageId + '_uhal',
  };
};

export async function fetchResourceManifests({username, languageId}) {
  let manifests = {};
  const _resourceRepositories = resourceRepositories({languageId});
  const resourceIds = Object.keys(_resourceRepositories);
  const promises = resourceIds.map(resourceId => {
    const repository = _resourceRepositories[resourceId];
    const _username = ['ugnt','uhb'].includes(resourceId) ? 'unfoldingword' : username;
    return fetchManifest({username: _username, repository})
  });
  const manifestArray = await Promise.all(promises);
  resourceIds.forEach((resourceId, index) => {
    manifests[resourceId] = manifestArray[index];
  });
  return manifests;
};

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

export async function fetchManifest({username, repository}) {
  const yaml = await getFile({username, repository, path: 'manifest.yaml'});
  const json = (yaml) ? YAML.safeLoad(yaml) : null;
  return json;
};

export async function fetchRepositoriesZipFiles({username, languageId, branch}) {
  const repositories = resourceRepositories({languageId});
  const promises = Object.values(repositories).map(repository => {
    return fetchRepositoryZipFile({username, repository, branch});
  });
  const zipArray = await Promise.all(promises);
  return zipArray;
};
