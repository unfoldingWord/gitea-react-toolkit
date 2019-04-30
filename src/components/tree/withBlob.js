import React, { useState } from "react";
import PropTypes from 'prop-types';

import { Tree } from './Tree';

function withBlobComponent(Component) {
  return function BlobComponent ({
    blobConfig: {
      tree,
      url,
      ...config
    },
    blob,
    onBlob,
    ...props
  }) {
    const [_blob, setBlob] = useState(blob);

    const hasBlob = () => (!!_blob);

    const updateBlob  = (__blob) => {
      setBlob(__blob);
      if (onBlob) onBlob(__blob);
    }

    let component = <Component {...props} blob={_blob} />;

    const treeComponent = (
      <Tree
        tree={tree}
        url={url}
        selected={true}
        onBlob={updateBlob}
        {...config}
      />
    );

    if (!hasBlob()) component = treeComponent;

    return component;
  }
}

withBlobComponent.propTypes = {
  /** Pass a previously returned repository object to bypass the selection. */
  blob: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.string,
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
};

export const withBlob = withBlobComponent;
