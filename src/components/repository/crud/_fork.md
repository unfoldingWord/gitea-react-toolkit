This example for Fork also includes the ability to delete.
That way you can fork a repository first then delete your fork.

Search for another repository to fork since you cannot fork your own.
Once you have forked a repository, search for your repository under your username.

```js
import { useContext } from 'react';
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { FolderSpecial, DeleteSweep, Cancel } from '@material-ui/icons';
import moment from 'moment';

import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  RepositoryForm,
} from 'gitea-react-toolkit';

function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repository, actions: { fork, close, dangerouslyDelete }, component: repoComponent } = useContext(RepositoryContext);

  return (!auth && authComponent) || (!repository && repoComponent) || (
    <Card>
      <CardHeader title={<strong>{repository.full_name}</strong>} subheader={moment(repository.created_at).format('MMMM Do YYYY, h:mm:ss a')} avatar={<Avatar src={repository.owner.avatar_url} />} />
      <CardContent>
        <pre>{JSON.stringify(repository, null, 2)}</pre>
        <CardActions>
          <IconButton
            title="Fork Repository"
            disabled={auth.user.username === repository.owner.username}
            onClick={fork}
          >
            <FolderSpecial />
          </IconButton>
          <IconButton
            title="Delete Repository"
            disabled={auth.user.username !== repository.owner.username}
            onClick={() => {
              const confirmation = confirm(`Are you sure you want to Delete ${repository.full_name}?`);
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

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();

<AuthenticationContextProvider
  config={{
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  }}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <RepositoryContextProvider
    repository={repository}
    onRepository={setRepository}
    defaultOwner='unfoldingWord'
    defaultQuery='en_'
  >
    <Component />
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
