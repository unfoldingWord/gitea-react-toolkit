import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import { Tree } from '.';

function useBlob({
  config,
  repository,
  // filepath, TODO: use filepath to pre-select blob;
  tree,
  url: _url,
}) {
  const [state, setState] = useState();
  const blob = state ? deepFreeze(state) : undefined;

  const url = _url || (repository && repository.tree_url);

  const update = useCallback((_blob) => {
    let __blob;

    if (_blob) __blob = (_blob.filepath) ? _blob : { ..._blob, filepath: _blob.path };
    setState(__blob);
  }, []);

  const close = useCallback(() => {
    update();
  }, [update]);

  const browse = useMemo(() => {
    return (tree || url) ? (
      <Tree
        tree={tree}
        url={url}
        config={config}
        selected={true}
        onBlob={update}
      />
    ) : (<></>);
  }, [tree, url, config, update]);

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