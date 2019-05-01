import { get } from '../../core/git-https/gitFile';
import base64 from 'base-64';

export const fetchTree = async ({url, config}) => {
  const _config = {
    cache: {
      maxAge: 2 * 60 * 1000 // 2 min cache override
    },
    ...config
  };
  const response = await get({url, config: _config});
  const {tree} = response;
  return tree;
};

export const fetchContent = async ({url}) => {
  const response = await get({url});
  const {content} = response;
  const decoded = base64.decode(content);
  return decoded;
};

export const humanFileSize = (size=0) => {
  if (size === 0) return '0 B'
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor( Math.log(size) / Math.log(1024) );
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + units[i];
};
