
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

### Sample Data

```json
{
  "path": ".github",
  "type": "tree",
  ...
}
```
