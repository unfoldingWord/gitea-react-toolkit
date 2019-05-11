import base64 from 'base-64';
import utf8 from 'utf8';
import { get, updateFile, getCreateFile, removeFile } from '../../core/git-https';

export const ensureFile = async (
  { filepath, defaultContent, message, authentication, repository, config, branch }
) => {
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
  const file = await getCreateFile(
    { owner: username, repo: name, filepath, payload: _payload, config: _config }
  );
  return file;
};

export const deleteFile = async (
  { file, message, authentication, repository, branch }
) => {
  const { config } = authentication;
  const { owner: {username}, name } = repository;
  const { filepath } = file;
  const _message = message || `Deleted '${filepath}' using '${authentication.token.name}'`;
  const _payload = payload({message: _message, authentication, repository, file, branch});
  const deleted = await removeFile({
    owner: username,
    repo: name,
    filepath,
    payload: _payload,
    config,
  });
  return deleted;
};

export const getContent = async ({file}) => {
  const content = await get({url: file.download_url, noCache: true});
  return content;
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
  const response = await updateFile({
    owner: username,
    repo: name,
    filepath: path,
    payload: payload({content, message, authentication, repository, file, branch}),
    config,
  });
  return response;
};
