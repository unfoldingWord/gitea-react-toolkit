
You can wrap any component with `withBlob` Higher Order Component so that you can require a blob object for the component.
It will also give access to the selected blob object through the props of the children.
If a blob is not already selected, it will render the Tree component for selection using the blobConfig.

```js
import { Paper, Card, CardContent, CardHeader } from '@material-ui/core';
import { withBlob } from 'gitea-react-toolkit';

import { humanFileSize } from './helpers';
// Define your React component and optionally access blob in props.
function Component({
  blob,
}) {
  return (
    <Card>
      <CardHeader title={<strong>{blob.path}</strong>} subheader={humanFileSize(blob.size)} />
      <CardContent>
        <pre>{JSON.stringify(blob, null, 2)}</pre>
      </CardContent>
    </Card>
  )
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withRepository(Component);
 */
const BlobComponent = withBlob(Component);
// Then you can use your blob wrapped component.
const [blob, setBlob] = React.useState();

<Paper>
  <BlobComponent
    //** Pass any props as you normally would. */
    blobConfig={{
      url:"https://bg.door43.org/api/v1/repos/unfoldingWord/en_ta/git/trees/master",
    }}
    /** Pass a previously returned repository object to skip blob/tree selection. */
    blob={blob}
    onBlob={setBlob}
  />
</Paper>
```
