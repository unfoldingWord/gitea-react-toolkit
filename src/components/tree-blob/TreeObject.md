
The TreeObject Component is a recursive component that renders more trees
when it encouters an object in the tree of type tree.

### Example

```js
import { Paper } from '@material-ui/core';
import { TreeObject } from 'gitea-react-toolkit';

<Paper>
  <TreeObject
    path=""
    type="tree"
    selected
    pathSelected="LICENSE.md"
    tree={[
      {
        "path": ".github",
        "type": "tree"
      },
      {
        "path": "content",
        "type": "tree"
      },
      {
        "path": "LICENSE.md",
        "type": "blob"
      },
      {
        "path": "README.md",
        "type": "blob"
      },
    ]}
    onBlob={(data) => alert(JSON.stringify(data, null, 2))}
  />
</Paper>
```

### URL + Sorting Example

```js
import { Paper } from '@material-ui/core';
import { TreeObject } from 'gitea-react-toolkit';
import {manifestFileComparer} from '../file/helpers';

import repository from './mocks/repositoryData-twl.json';

const tsvManifestFileComparer = ((item1,item2) => {
  // Repository instance can be passed from application.
  return manifestFileComparer({repository, item1, item2});
});

<Paper>
  <TreeObject
    path=""
    type="tree"
    selected
    pathSelected="LICENSE.md"
    url="https://qa.door43.org/api/v1/repos/unfoldingWord/en_twl/git/trees/master?recursive=true"
    onBlob={(data) => alert(JSON.stringify(data, null, 2))}
    comparer={tsvManifestFileComparer}
  />
</Paper>
```

### URL + Custom Sorting Example

```js
import { Paper } from '@material-ui/core';
import { TreeObject } from 'gitea-react-toolkit';

<Paper>
  <TreeObject
    path=""
    type="tree"
    selected
    pathSelected="LICENSE.md"
    url="https://qa.door43.org/api/v1/repos/unfoldingWord/en_twl/git/trees/master?recursive=true"
    onBlob={(data) => alert(JSON.stringify(data, null, 2))}
    comparer={(item1,item2)=>{
      if (item1.path < item2.path)
        return -1;
      if ( item1.path > item2.path)
        return 1;
      return 0; 
    }}
  />
</Paper>
```

### Sample Data

```json
{
  "path": ".github",
  "type": "tree",
  ...
}
```
