// Refactor and move to core/gitea-api/repos/zip.ts
import Path from 'path';
import JSZip from 'jszip';
import localforage from 'localforage';
import { get } from '../..';

const zipStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'zip-store',
});

// https://git.door43.org/unfoldingWord/en_ult/archive/master.zip
export const zipUri = ({
  owner, repo, branch='master', server,
}) => {
  const zipUri = Path.join(server, owner, repo, 'archive', `${branch}.zip`);
  return zipUri;
};

export const storeZipFromRepo = async ({
  owner, repo, branch, server,
}) => {
  let response;
  const uri = zipUri({
    owner, repo, branch, server,
  });

  try {
    const zip = await get(uri);

    if (zip.status === 200 || zip.status === 0) {
      const zipArrayBuffer = await zip.arrayBuffer(); // blob storage not supported on mobile
      await zipStore.setItem(uri, zipArrayBuffer);
      response = true;
    }
  } catch (error) {
    response = false;
  };
  return response;
};

export const removeRepoZip = async ({
  owner, repo, branch, server,
}) => {
  let response;
  const uri = zipUri({
    owner, repo, branch, server,
  });

  try {
    await zipStore.removeItem(uri);
    response = true;
  } catch (error) {
    response = false;
  };
  return response;
};

export const getZip = async ({
  owner, repo, branch, config,
}) => {
  let zip;
  const uri = zipUri({
    owner, repo, branch, config,
  });
  const zipBlob = await zipStore.getItem(uri);

  if (zipBlob) {
    zip = await JSZip.loadAsync(zipBlob);
  } else {
    console.log(`No zip file found for ${uri}.`);
  };
  return zip;
};

export const getFilesFromRepoZip = async ({
  owner, repo, branch, config,
}) => {
  let files;
  const zip = await getZip({
    owner, repo, branch, config,
  });

  if (zip) {
    files = zip.files;
  };
  return files;
};

export const getFileFromRepoZip = async ({
  owner, repo, branch, filepath, config,
}) => {
  let file;
  const zip = getZip({
    owner, repo, branch, config,
  });

  if (zip) {
    const zipPath = Path.join(repo.toLowerCase(), filepath);
    const fileObject = zip.files[zipPath];

    if (fileObject) {
      file = await fileObject.async('string');
    } else {
      console.log(`Filepath ${filepath} not found in ${config.server}/${owner}/${repo}/${branch}`);
    };
  };
  return file;
};