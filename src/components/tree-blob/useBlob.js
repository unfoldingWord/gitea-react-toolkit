import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import {manifestFileComparer} from '../file/helpers';

import { Tree } from '.';
import { useDeepCompareCallback, useDeepCompareMemo } from 'use-deep-compare';

function useBlob({
  config,
  blob: __blob,
  onBlob,
  repository,
  // filepath, TODO: use filepath to pre-select blob;
  tree,
  url: _url,
  releaseFlag,
}) {
  const blob = __blob && deepFreeze(__blob);

  let url = _url || (repository && repository.tree_url);
  console.log("useBlob() releaseFlag?",releaseFlag);
  if ( releaseFlag && repository?.catalog?.prod?.branch_or_tag_name ) {
    // p.replace(regex, 'ferret')
    url = url.replace(/master$/,repository.catalog.prod.branch_or_tag_name);
  }
  console.log("useBlob() url=",url);
  const update = useCallback((_blob) => {
    if (onBlob) {
      onBlob(_blob);
    };
  }, [onBlob]);

  const close = useCallback(() => {
    update();
  }, [update]);

  const tsvManifestFileComparer = useDeepCompareCallback((item1,item2) => {
    return manifestFileComparer({repository, item1, item2});
  }, [repository, repository?.books, manifestFileComparer]);
  
  const browse = useDeepCompareMemo(() => {
    return (tree || url) ? (
      <Tree
        tree={tree}
        url={url}
        config={config}
        selected={true}
        onBlob={update}
        comparer={tsvManifestFileComparer}
      />
    ) : (<></>);
  }, [tree, url, config, update, repository?.name]);

  return {
    state: blob,
    actions: {
      close,
      update,
    },
    component: browse,
    components: { browse },
  };
};

useBlob.propTypes = {
  /** An array of paths from the Gitea file tree api. */
  tree: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['tree','blob']).isRequired,
  })),
  /** The Url to fetch the listing if listing is not provided. */
  url: PropTypes.string,
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    /** The Url to fetch the listing if listing is not provided. */
    tree_url: PropTypes.string.isRequired,
  }),
};

export default useBlob;