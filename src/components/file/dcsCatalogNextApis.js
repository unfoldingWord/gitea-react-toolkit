// this code copied from:
// github > unfoldingword-box3 > admin-app > src/utils/dcsApis.js
import Path from 'path';
import localforage from 'localforage';
import { setup } from 'axios-cache-adapter';

const SERVER_URL = process.env.REACT_APP_DOOR43_SERVER_URL;
//const SERVER_URL = 'https://qa.door43.org';
const baseURL = SERVER_URL+'/';

export async function fetchCatalogContent(username, repository, tag, filepath) {

  // example: https://qa.door43.org/unfoldingWord/en_tn/raw/tag/v47/en_tn_65-3JN.tsv
  // might need this instead:
  // https://qa.door43.org/api/v1/repos/unfoldingword/en_tn/contents/en_tn_65-3JN.tsv?ref=v47
  // in which case, the content will be in a JSON object and will be base64 encoded.
  const uri = Path.join(username,repository,'raw','tag', tag, filepath);
  let _data;
  try {
    const { data } = await Door43Api.get(uri, {});
 
    if ( data ) {
      // success
      //console.log("fetchCatalogContent: uri,data:", uri,data);
      _data = data;
    } 
  } catch (geterror) {
    console.error("Error:",geterror,"on uri:",uri);
  }
  return _data;
}



// caches http file fetches done by fetchFileFromServer()
const cacheStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'web-cache',
});


// API for http requests
const Door43Api = setup({
  baseURL: baseURL,
  cache: {
    store: cacheStore,
    maxAge: 5 * 60 * 1000, // 5-minutes
    exclude: { query: false },
    key: req => {
      // if (req.params) debugger
      let serialized = req.params instanceof URLSearchParams ?
        req.params.toString() : JSON.stringify(req.params) || '';
      return req.url + serialized;
    },
  },
});

