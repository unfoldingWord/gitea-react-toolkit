import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  Collapse,
} from '@material-ui/core';

import { fetchTree } from './helpers';
import { BlobObject, TreeObject } from '.';

const useStyles = makeStyles(theme => ({
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const bookIds = [
  "gen",
  "exo",
  "lev",
  "num",
  "deu",
  "jos",
  "jdg",
  "rut",
  "1sa",
  "2sa",
  "1ki",
  "2ki",
  "1ch",
  "2ch",
  "ezr",
  "neh",
  "est",
  "job",
  "psa",
  "pro",
  "ecc",
  "sng",
  "isa",
  "jer",
  "lam",
  "ezk",
  "dan",
  "hos",
  "jol",
  "amo",
  "oba",
  "jon",
  "mic",
  "old",
  "nam",
  "hab",
  "zep",
  "hag",
  "zec",
  "mal",
  "mat",
  "mrk",
  "luk",
  "jhn",
  "act",
  "rom",
  "1co",
  "2co",
  "gal",
  "eph",
  "php",
  "col",
  "1th",
  "2th",
  "1ti",
  "2ti",
  "tit",
  "phm",
  "heb",
  "jas",
  "1pe",
  "2pe",
  "1jn",
  "2jn",
  "3jn",
  "jud",
  "rev",
]

/**
 * A Listing Component to render an array of Git Tree objects.
 */
function Tree({
  tree,
  url,
  config,
  selected,
  blob,
  onBlob,
  depth,
  filepath,
  comparer,
}) {
  const classes = useStyles();
  const [_tree, setTree] = useState(tree || []);
  let _selectedPath;

  if (blob) {
    _selectedPath = blob.filepath.split('/')[depth - 2];
  }

  const [selectedPath, setSelectedPath] = useState(_selectedPath);

  const updateTree = async () => {
    const __tree = await fetchTree({ url, config, comparer });
    console.log("Tree() updateTree() typeOf comparer:", typeof comparer, comparer)
    console.log("Tree() updateTree() __tree:", __tree)
    setTree(__tree);
  };

  const emptyTree = (!_tree || _tree.length === 0);

  if (selected && emptyTree) {
    updateTree();
  }

  let components = [];
  const REGEX_TSV_BOOK_ABBREVIATION = /^\w*_(\w*)\.tsv$/i;

  if (_tree) {
    let tsvSortedTree = _tree.sort(
      (f1, f2) => {
        const f1Path = f1.path;
        const f2Path = f2.path;
        const book1Matches = f1Path.match(REGEX_TSV_BOOK_ABBREVIATION);
        const book2Matches = f2Path.match(REGEX_TSV_BOOK_ABBREVIATION);
    
        const isTsvFiles = (book1Matches && book2Matches)?true:false;
        if ( !isTsvFiles ) return 0;

        // they are tsv files, now extract the book id from each
        const book1 = book1Matches[1];
        const book2 = book2Matches[1];
        // make them lowercase
        const b1 = book1.toLowerCase()
        const b2 = book2.toLowerCase()

        let pos1, pos2 = 0;
        // locate position of book1
        for (let i=0; i<bookIds.length; i++) {
          if ( bookIds[i] === b1 ) {
            pos1 = i;
            break
          }
        }
        // locate position of book2
        for (let i=0; i<bookIds.length; i++) {
          if ( bookIds[i] === b2 ) {
            pos2 = i;
            break
          }
        }
        
        // find the order
        let retVal = 0
        if ( pos1 < pos2 ) {
          retVal = -1
        } else if ( pos1 > pos2 ) {
          retVal = 1
        }
        return retVal
      }
    );
  
    components = _tree.map((object, index) => {
      const _selected = (object.path === selectedPath);
      let component;

      if (object.type === 'tree') {
        component = (
          <TreeObject
            {...object}
            selected={_selected}
            depth={depth}
            onBlob={onBlob}
            filepath={filepath}
          />
        );
      } else if (object.type === 'blob') {
        component = (
          <BlobObject
            blob={object}
            onBlob={onBlob}
            selected={_selected}
            depth={depth}
            filepath={filepath}
          />
        );
      }

      const onSelectedPath = () => setSelectedPath(object.path);

      return (
        <div
          key={index}
          onClick={onSelectedPath}
        >
          {component}
        </div>
      );
    });
  }

  return (
    <Collapse in={selected} timeout="auto" unmountOnExit>
      <List data-test="file-tree" dense className={classes.list}>
        {components}
      </List>
    </Collapse>
  );
}

Tree.propTypes = {
  /** An array of paths from the Gitea file tree api. */
  tree: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['tree', 'blob']).isRequired,
  })),
  /** The Url to fetch the listing if listing is not provided. */
  url: PropTypes.string,
  /** If url is relative, pass the server in the config object. */
  config: PropTypes.shape({
    server: PropTypes.string,
  }),
  /** Set if the Listing is currently selected, which will expand the collapsed view. */
  selected: PropTypes.bool,
  /** Function to propogate when the Blob is selected. */
  onBlob: PropTypes.func,
  /** The depth of the path in the tree sets the inset of the component. */
  depth: PropTypes.number,
  /** The nested filepath that will concatenate. */
  filepath: PropTypes.string,
  /** Blob data to render, if url not provided. */
  blob: PropTypes.shape({
    /** The filepath in the Git Tree Blob Object */
    path: PropTypes.string.isRequired,
    /** The url in the Git Tree Blob Object */
    url: PropTypes.string,
    /** The content size of the Git Tree Blob Object */
    size: PropTypes.number,
  }),
};

Tree.defaultProps = {
  selected: false,
  depth: 1,
};

export default Tree;
