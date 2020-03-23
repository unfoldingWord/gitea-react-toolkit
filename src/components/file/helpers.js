import {
  get, updateContent, ensureContent, deleteContent, decodeBase64ToUtf8,
} from '../..';

export const ensureFile = async ({
  config, authentication, repository, branch, filepath, defaultContent, message,
}) => {
  const _config = (authentication) ? authentication.config : { ...config };
  const { owner: { username: owner }, name: repo } = repository;
  let _message = message;
  let author;

  if (authentication) {
    const { user: _author, token: { name: tokenid } } = authentication;
    author = _author;
    _message = message || `Created '${filepath}' using '${tokenid}'`;
  }

  const file = await ensureContent({
    config: _config, owner, repo, branch, filepath,
    content: defaultContent, message: _message, author,
  });
  return file;
};

export const deleteFile = async ({
  authentication, repository, branch, file, message,
}) => {
  const {
    user: author, config, token: { name: tokenid },
  } = authentication;
  const { owner: { username: owner }, name: repo } = repository;
  const { path: filepath, sha } = file;
  const _message = message || `Deleted '${filepath}' using '${tokenid}'`;
  const deleted = await deleteContent({
    config, owner, repo, branch, filepath, message: _message, author, sha,
  });
  return deleted;
};

export const getContentFromFile = async (file) => {
  const {
    content, encoding, download_url, git_url,
  } = file;
  let _content;

  if (content && encoding === 'base64') {
    _content = decodeBase64ToUtf8(content);
  } else if (!content && download_url) {
    _content = await get({ url: download_url, noCache: true });
  } else if (!content && git_url) {
    const blobObject = await get({ url: git_url, noCache: true });

    if (blobObject.content && blobObject.encoding === 'base64') {
      _content = decodeBase64ToUtf8(blobObject.content);
    }
  }
  return _content;
};

export const saveFile = async ({
  authentication, repository, branch, file, content, message,
}) => {
  const {
    user: author, config, token: { name: tokenid },
  } = authentication;
  const { owner: { username: owner }, name: repo } = repository;
  const { path: filepath, sha } = file;
  const _message = message || `Edit '${filepath}' using '${tokenid}'`;

  const response = await updateContent({
    config, owner, repo, branch, filepath,
    content, message: _message, author, sha,
  });
  return response;
};
