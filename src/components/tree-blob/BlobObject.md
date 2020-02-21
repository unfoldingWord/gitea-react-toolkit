
### Example
Here are a few variations of the File component being rendered.
Even though it appears to be a nested tree, it is simulated.
You would typically use another component to render more than one.

```js
import { Paper } from '@material-ui/core';
import { BlobObject } from 'gitea-react-toolkit';

function Component({
  blobs,
}) {
  const [_blob, _setBlob] = React.useState();
  const blobComponents = blobs.map((item) => {
    const key = JSON.stringify(item);
    const selected = (JSON.stringify(item) === JSON.stringify(_blob))
    return (
      <Paper key={key} style={{margin: '1em 0'}}>
        <BlobObject
          blob={item.blob}
          selected={selected}
          onBlob={_setBlob}
        />
      </Paper>
    );
  });

  return (
    <div>
      {blobComponents}
      <h3>Selected Blob:</h3>
      <Paper>
        <pre>{JSON.stringify(_blob, null, 2)}</pre>
      </Paper>
    </div>
  );
};

<Component
  blobs={[
    { blob: { path: "LICENSE.md", size: 1100 }, depth: 1 },
    { blob: { path: "readme.md", size: 1500 }, depth: 2 },
    { blob: { path: "01.md", size: 20000 }, depth: 3 },
    { blob: { path: "title.md", size: 200 }, depth: 3 },
  ]}
/>
```

### Sample Data

```json
{
  "path": "LICENSE.md",
  "type": "blob",
  ...
}
```