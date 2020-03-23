In order to create a repository you must pass authentication or wrap with `withAuthentication`.
Once a repository is created and propogated, the Create form changes to an Edit form.

```js
import { useState, useContext } from 'react';
import { Paper } from '@material-ui/core';
import {
  AuthenticationContextProvider,
  AuthenticationContext,
  RepositoryContextProvider,
  RepositoryContext,
  RepositoryForm,
} from 'gitea-react-toolkit';


function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { state: repo, component: repoComponent } = useContext(RepositoryContext);

  const component = (!auth && authComponent) || <RepositoryForm />;

  return component;
};

const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();

<Paper>
  <AuthenticationContextProvider
    authentication={authentication}
    onAuthentication={setAuthentication}
    config={{
      tokenid: "PlaygroundTesting",
      server: "https://bg.door43.org",
    }}
  >
    <RepositoryContextProvider
      repository={repository}
      onRepository={setRepository}
    >
      <Component />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```

## Create and Delete

```js
import { useState, useContext } from 'react';
import { Paper, Card, CardContent, CardHeader, CardActions, IconButton, Avatar } from '@material-ui/core';
import { DeleteSweep, Cancel } from '@material-ui/icons';
import moment from 'moment';

import {
  AuthenticationContextProvider,
  AuthenticationContext,
  RepositoryContextProvider,
  RepositoryContext,
  RepositoryQuickCreate
} from 'gitea-react-toolkit';
// Define your React component and optionally access repository in props.
function Component() {
  const { state: auth, component: authComponent } = useContext(AuthenticationContext);
  const { user: { username }={} } = auth || {};
  const { state: repo, actions: { update, close, dangerouslyDelete } } = useContext(RepositoryContext);

  let component = !auth && authComponent;
  component = component || (!repository && <RepositoryQuickCreate />);
  component = component || (
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

  return component;
};

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();

<Paper>
  <AuthenticationContextProvider
    authentication={authentication}
    onAuthentication={setAuthentication}
    config={{
      tokenid: "PlaygroundTesting",
      server: "https://bg.door43.org",
    }}
  >
    <RepositoryContextProvider
      repository={repository}
      onRepository={setRepository}
    >
      <Component />
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```