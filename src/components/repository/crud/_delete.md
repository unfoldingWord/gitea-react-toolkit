This example for Delete also includes the ability to fork.
That way you can fork a repository first then delete your fork.

```js
import { useState, useContext } from 'react';
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { FolderSpecial, DeleteSweep, Cancel } from '@material-ui/icons';
import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  RepositoryForm,
} from 'gitea-react-toolkit';
import moment from 'moment';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repository, actions, component: repoComponent } = useContext(RepositoryContext);

  const {
    fork, dangerouslyDelete, close
  } = actions;

  const username = authentication && authentication.user && authentication.user.username;

  return (!auth && authComponent) || (!repository && repoComponent) || (
    <Card>
      <CardHeader title={<strong>{repository.full_name}</strong>} subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')} avatar={<Avatar src={repository.owner.avatar_url} />} />
      <CardContent>
        <pre>{JSON.stringify(repository, null, 2)}</pre>
        <CardActions>
          <IconButton
            title="Fork Repository"
            disabled={username === repository.owner.username}
            onClick={fork}
          >
            <FolderSpecial />
          </IconButton>
          <IconButton
            title="Delete Repository"
            disabled={username !== repository.owner.username}
            onClick={() => {
              const confirmation = window.confirm(`Are you sure you want to Delete ${repository.full_name}?`);
              if (confirmation) dangerouslyDelete();
            }}
          >
            <DeleteSweep />
          </IconButton>
          <IconButton
            title="Close Repository"
            onClick={close}
          >
            <Cancel />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();

<AuthenticationContextProvider
  config={{
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  }}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <RepositoryContextProvider
    authentication={authentication}
    repository={repository}
    onRepository={setRepository}
    config={authentication && authentication.config}
    defaultOwner={authentication && authentication.user.name}
    defaultQuery=""
  >
    <Component />
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
