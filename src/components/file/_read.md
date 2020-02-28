Reading files only requires a `repository`, a `config`, and a `filepath`.

```js
import { Paper } from '@material-ui/core';
import { withRepository, withBlob, FileCard, useFile } from 'gitea-react-toolkit';
// Define your React component and optionally access blob in props.
function Component({
  repository,
  blob: {
    filepath,
  },
  branch,
  fileConfig: config
}) {
  const { state: file } = useFile({ repository, branch, filepath, config });
  return (
    <FileCard repository={repository} file={file} />
  )
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withRepository(withBlob(Component));
// Then you can use your blob wrapped component.
<Paper>
  <WrappedComponent
    //** Pass any props as you normally would. */
    branch='master'
    repositoryConfig={{
      server: "https://bg.door43.org/",
    }}
  />
</Paper>
```