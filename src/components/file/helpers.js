import base64 from 'base-64';
import { get, updateFile } from '../../core/git-https';

export const getContent = async ({file}) => {
  const content = await get({url: file.download_url, noCache: true});
  return content;
};

export const saveContent = async ({content, message, authentication, repository, file, branch}) => {
  const { config, user, token } = authentication;
  const { owner: {username}, name } = repository;
  const { path, sha } = file;
  const payload = {
    author: {
      email: user.email,
      name: user.username,
    },
    content: base64.encode(content),
    message: message || `Edit '${path}' using ${token.name}`,
    sha,
  };
  if (branch) payload.new_branch = branch;
  const response = await updateFile({
    owner: username,
    repo: name,
    filepath: path,
    payload,
    config
  });
  return response;
}
