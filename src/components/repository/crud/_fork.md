This example for Fork also includes the ability to delete.
That way you can fork a repository first then delete your fork.

Search for another repository to fork since you cannot fork your own.
Once you have forked a repository, search for your repository under your username.

```js
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { FolderSpecial, DeleteSweep, Cancel } from '@material-ui/icons';
import { withAuthentication, withRepository, RepositoryForm } from 'gitea-react-toolkit';
import moment from 'moment';
// Define your React component and optionally access repository in props.
function Component({
  repository,
  authentication: {
    user: {
      username,
    }
  }
}) {
  return (
    <Card>
      <CardHeader title={<strong>{repository.full_name}</strong>} subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')} avatar={<Avatar src={repository.owner.avatar_url} />} />
      <CardContent>
        <pre>{JSON.stringify(repository, null, 2)}</pre>
        <CardActions>
          <IconButton
            title="Fork Repository"
            disabled={username === repository.owner.username}
            onClick={() => {repository.fork()}}
          >
            <FolderSpecial />
          </IconButton>
          <IconButton
            title="Delete Repository"
            disabled={username !== repository.owner.username}
            onClick={() => {
              const confirmation = confirm(`Are you sure you want to Delete ${repository.full_name}?`);
              if (confirmation) repository.dangerouslyDelete();
            }}
          >
            <DeleteSweep />
          </IconButton>
          <IconButton
            title="Close Repository"
            onClick={repository.close}
          >
            <Cancel />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withRepository(Component);
 */
const RepositoryComponent = withAuthentication(withRepository(Component));
// Then you can use your repository wrapped component.
<Paper>
  <RepositoryComponent
    //** Pass any props as you normally would. */
    authenticationConfig={{
      tokenid: "PlaygroundTesting",
      server: "https://bg.door43.org",
    }}
  />
</Paper>
```
