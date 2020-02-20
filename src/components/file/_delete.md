
In order to delete a file the authenticated user has to have write access to the repo.

```withAuthentication(withRepository(withBlob(withFile(Component))))```

This example expects any file file to be selected and will allow you to delete a file after you view it.

# TODO: Find out why this example is not working
all props are sent properly, CORS error happening, works through proxy.

```js
import { Paper, Card, CardContent, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { withAuthentication, withRepository, withBlob, withFile } from '../';
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
          <pre>
            {
              typeof file.content === 'string' ?
              file.content :
              JSON.stringify(file.content, null, 2)
            }
          </pre>
        </Paper>
      </CardContent>
      <CardActions>
        <IconButton onClick={()=> {
          const message = `Are you sure you want to delete ${file.filepath}?`;
          const confirmation = confirm(message);
          if (confirmation) {
            file.dangerouslyDelete();
          }
        }}>
          <DeleteForever />
        </IconButton>
      </CardActions>
    </Card>
  );
};
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withAuthentication(withRepository(withBlob(Component)));
 */
const WrappedComponent = withAuthentication(withRepository(withBlob(withFile(Component))));
// Then you can use your blob wrapped component.

<Paper>
  <WrappedComponent
    //** Pass any props as you normally would. */
    authenticationConfig={{
      server: "https://bg.door43.org/",
      tokenid: "PlaygroundTesting",
    }}
  />
</Paper>
