In order to create a repository you must pass authentication or wrap with `withAuthentication`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
import { Paper } from '@material-ui/core';
import { withAuthentication, RepositoryForm } from 'gitea-react-toolkit';

const AuthenticatedRepositoryForm = withAuthentication(RepositoryForm);
const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();

<Paper>
  <AuthenticatedRepositoryForm
    authentication={authentication}
    onAuthentication={setAuthentication}
    repository={repository}
    onRepository={setRepository}
    authenticationConfig={{
      server: "https://bg.door43.org",
      tokenid: "PlaygroundTesting"
    }}
  />
</Paper>
```

## Create and Delete

```js
import { useState } from 'react';
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { DeleteSweep, Cancel } from '@material-ui/icons';
import moment from 'moment';

import { withAuthentication, RepositoryQuickCreate } from 'gitea-react-toolkit';
// Define your React component and optionally access repository in props.
function Component({
  authentication,
  authentication: {
    user: {
      username,
    }
  }
}) {
  const [repository, setRepository] = useState();
  return (!repository) ?
  (
    <RepositoryQuickCreate
      authentication={authentication}
      onRepository={setRepository}
    />
  ) :
  (
    <Card>
      <CardHeader
        title={<strong>{repository.full_name}</strong>}
        subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')}
        avatar={<Avatar src={repository.owner.avatar_url} />}
      />
      <CardContent>
        <pre>{JSON.stringify(repository, null, 2)}</pre>
        <CardActions>
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
  );
}
/** Usually you would wrap it during export at the bottom of your component's file.
 *  export default withRepository(Component);
 */
const RepositoryComponent = withAuthentication(Component);
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