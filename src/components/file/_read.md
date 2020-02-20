Reading files only requires a `repository` and either a `blob` or a `filepath`.

```withRepository(withBlob(withFile(Component)))```

```js
import { Paper, Card, CardContent, CardHeader, Avatar } from '@material-ui/core';
import { withRepository, withBlob, withFile } from 'gitea-react-toolkit';
// Define your React component and optionally access blob in props.
function Component({
  repository,
  file,
}) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={repository.owner.avatar_url} />}
        title={<strong>{file.path}</strong>}
        subheader={repository.full_name}
      />
      <CardContent>
        <Paper>
          <pre style={{maxHeight: '200px', overflow: 'scroll'}}>
            {
              typeof file.content === 'string' ?
              file.content :
              JSON.stringify(file.content, null, 2)
            }
          </pre>
        </Paper>
      </CardContent>
    </Card>
  )
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withRepository(withBlob(withFile(Component)));
// Then you can use your blob wrapped component.
<Paper>
  <WrappedComponent
    //** Pass any props as you normally would. */
    repositoryConfig={{
      server: "https://bg.door43.org/",
    }}
  />
</Paper>
```