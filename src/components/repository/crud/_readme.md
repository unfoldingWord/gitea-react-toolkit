---
name: Repository CRUD
route: /repo-crud
---
import { useState } from 'react';
import { Playground, Props } from 'docz';
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { FolderSpecial, DeleteSweep, Cancel } from '@material-ui/icons';
import { withAuthentication, withRepository } from '../../';
import { RepositoryQuickCreate, RepositoryForm, RepositoryFormMenu } from './';
import moment from 'moment';

# Repository CRUD

## Create/Delete

```js
// Define your React component and optionally access repository in props.
function Component({
  authentication,
  authentication: {
    user: {
      username,
    }
  }
}) {
  const [repository, setRepository] = React.useState();
  return (!repository) ?
  (
    <RepositoryQuickCreate
      authentication={authentication}
      onRepository={setRepository}
    />
  ) :
  (
    <Card>
      <CardHeader title={<strong>{repository.full_name}</strong>} subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')} avatar={<Avatar src={repository.owner.avatar_url} />} />
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

## Read/Fork/Delete

<Playground>
{() => {
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
  return (
    <Paper>
      <RepositoryComponent
        //** Pass any props as you normally would. */
        authenticationConfig={{
          tokenid: "PlaygroundTesting",
          server: "https://bg.door43.org",
        }}
      />
    </Paper>
  );
}}
</Playground>


