import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Tree } from './Tree';

function withBlobComponent(Component) {
  return function BlobComponent ({
    blob,
    onBlob,
    ...props
  }) {
    const [_blob, setBlob] = useState(blob);

    const hasBlob = () => (!!_blob);

    const updateBlob = async (__blob) => {
      if (onBlob) onBlob(__blob);
      else setBlob(__blob);
    };

    let blobConfig = {};
    if (props.blobConfig) {
      let {url, tree, ...config} = props.blobConfig;
      blobConfig = {url, tree, config};
    } else if (props.repository) {
      blobConfig.url = props.repository.tree_url;
    }
    if (props.authentication) {
      blobConfig.config = props.authentication.config;
    }
    const {
      url,
      tree,
      config,
    } = blobConfig;

    let component = <div />;
    if (!hasBlob() && (tree || url)) {
      component = (
        <Tree
          tree={tree}
          url={url}
          config={config}
          selected={true}
          onBlob={updateBlob}
          {...blobConfig}
        />
      );
    }

    if (hasBlob()) {
      component = <Component {...props} blob={_blob} />;
    }

    return component;
  }
}

withBlobComponent.propTypes = {
  /** Pass a previously returned blob object to bypass the selection. */
  blob: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
  /** Function to propogate when the Blob is selected. */
  onBlob: PropTypes.func,
  /** Configuration to pass through to the Search/Repositories component. */
  blobConfig: PropTypes.shape({
    /** An array of paths from the Gitea file tree api. */
    tree: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['tree','blob']).isRequired,
    })),
    /** The Url to fetch the listing if listing is not provided. */
    url: PropTypes.string,
    /** The depth of the path in the tree sets the inset of the component. */
    depth: PropTypes.number,
  }).isRequired,
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    tree_url: PropTypes.string.isRequired,
  }),
};

export const withBlob = withBlobComponent;
