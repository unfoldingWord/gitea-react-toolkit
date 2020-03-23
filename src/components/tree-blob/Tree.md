
The Tree component accepts a tree (an array of tree objects),
or a url to fetch a tree from.

### Example 1

A manually provided tree listing.

```js
import { Paper } from '@material-ui/core';
import { Tree } from 'gitea-react-toolkit';

<Paper>
  <Tree
    selected
    onBlob={(data) => alert(JSON.stringify(data, null, 2))}
    tree={[
      {
        "path": ".github",
        "type": "tree",
        "tree": [
          {
            "path": "config",
            "type": "blob",
          },
        ]
      },
      {
        "path": "LICENSE.md",
        "type": "blob",
      }
    ]}
  />
</Paper>
```

### Example 2

An automated tree listing from a Git Tree API url. Click on the tree objects to see them populate!

```js
import { Paper } from '@material-ui/core';
import { Tree } from 'gitea-react-toolkit';

<Paper>
  <Tree
    selected
    url="https://api.github.com/repos/unfoldingword/gitea-react-toolkit/git/trees/748bc59ef4d5ac9bbacbe6f3d3f3604775540fee"
    onBlob={(data) => alert(JSON.stringify(data, null, 2))}
  />
</Paper>
```


### Sample Data
```json
[
  {
    "path": ".github",
    "type": "tree",
    ...
  },
  {
    "path": "LICENSE.md",
    "type": "blob",
    ...
  }
]
```
