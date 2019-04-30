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

export const humanFileSize = (size=0) => {
  if (size === 0) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor( Math.log(size) / Math.log(1024) );
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + units[i];
};
