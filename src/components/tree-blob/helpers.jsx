import { get } from '../../core';

export const fetchTree = async ({ url, config, comparer }) => {
  const _config = {
    cache: {
      maxAge: 1 * 2 * 1000, // 2 sec cache override
    },
    ...config,
  };
  const response = await get({ url, config: _config });
  let { tree } = response;

  if (comparer)
  {
    tree = tree.sort(comparer);
  }

  return tree;
};

export const humanFileSize = (size=0) => {
  if (size === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor( Math.log(size) / Math.log(1024) );
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + units[i];
};
