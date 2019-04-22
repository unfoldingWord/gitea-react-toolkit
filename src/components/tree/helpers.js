import { get } from '../../core/git-https/gitFile';

export const fetchTree = async ({url}) => {
  const options = {
    cache: {
      maxAge: 2 * 60 * 1000 // 2 min cache override
    },
  };
  const response = await get({url, options});
  const {tree} = response;
  return tree;
};
