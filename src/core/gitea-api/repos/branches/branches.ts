import { ensureRepo } from '../repos';
import { ensureContent, deleteContent } from '../contents';

export const ensureBranch = async ({
  owner, repo, settings, config, branch, author, message, content,
}) => {
  const tempFilePath = '__giteaReactToolkitTemp';

  await ensureRepo({
    owner, repo, settings, config,
  });

  const createdFile = await ensureContent({
    owner, repo, branch, config,
    filepath: tempFilePath,
    author, message, content,
  });

  return deleteContent({
    owner, repo, branch, config, filepath: tempFilePath,
    author, sha: createdFile.sha, message,
  });
};