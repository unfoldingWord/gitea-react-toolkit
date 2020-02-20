import base64 from 'base-64';
import utf8 from 'utf8';
import { get, updateContent, ensureFile as _ensureFile, removeFile, decodeBase64ToUtf8 } from '../../core';

export const ensureFile = async ({
  filepath, defaultContent, message, authentication, repository, config, branch
}) => {
  let _config = config;
  if (authentication) _config = authentication.config;
  const { owner: {username}, name } = repository;
  let _payload;
  if (authentication) {
    const _message = message || `Created '${filepath}' using '${authentication.token.name}'`;
    _payload = payload(
      { content: defaultContent, message: _message, authentication, repository, branch }
    );
  }
  const file = await _ensureFile(
    { owner: username, repo: name, filepath, payload: _payload, config: _config }
  );
  return file;
};

export const deleteFile = async (
  { file, message, authentication, repository, branch }
) => {
  const { config } = authentication;
  const { owner: { username }, name } = repository;
  const { path } = file;
  const _message = message || `Deleted '${path}' using '${authentication.token.name}'`;
  const _payload = payload({ message: _message, authentication, repository, file, branch });
  const deleted = await removeFile({
    owner: username,
    repo: name,
    filepath: path,
    payload: _payload,
    config,
  });
  return deleted;
};

export const getContentFromFile = async (file) => {
  const {content, encoding, download_url, git_url} = file;
  let _content;
  if (content && encoding === 'base64') {
    _content = decodeBase64ToUtf8(content);
  } else if (!content && download_url) {
    _content = await get({url: download_url, noCache: true});
  } else if (!content && git_url) {
    const blobObject = await get({url: git_url, noCache: true});
    if (blobObject.content && blobObject.encoding === 'base64') {
      _content = decodeBase64ToUtf8(blobObject.content);
    }
  }
  return _content;
};

export const payload = ({content, message, authentication, repository, file, branch}) => ({
  author: {
    email: authentication.user.email,
    name: authentication.user.username,
  },
  content: base64.encode(utf8.encode(content || '')),
  message: message || `Edit '${file.path}' using '${authentication.token.name}'`,
  sha: (file) ? file.sha : null,
  new_branch: branch || repository.default_branch,
});

export const saveContent = async ({content, message, authentication, repository, file, branch}) => {
  const { config } = authentication;
  const { owner: {username}, name } = repository;
  const { path } = file;
  const response = await updateContent({
    owner: username,
    repo: name,
    filepath: path,
    payload: payload({content, message, authentication, repository, file, branch}),
    config,
  });
  return response;
};
