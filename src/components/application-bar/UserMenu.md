
The `UserMenu` component helps manage a authentication via a modal with a menu to login and logout.

## Using Hooks

```js
import { Paper } from '@material-ui/core';
import {useAuthentication, UserMenu } from 'gitea-react-toolkit';

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

  const [authentication, setAuthentication] = React.useState();
  const auth = useAuthentication({ config, authentication, onAuthentication: setAuthentication});

  <Paper>
      <UserMenu auth={auth}/>
  </Paper>

```

## Using Context

```js
import { Paper } from '@material-ui/core';
import { AuthenticationContextProvider, UserMenu } from 'gitea-react-toolkit';
const [authentication, setAuthentication] = React.useState();

<Paper>
  <AuthenticationContextProvider
    authentication={authentication}
    onAuthentication={setAuthentication}
    config={{
      server: "https://bg.door43.org",
      tokenid:"PlaygroundTesting",
    }}
  >
    <UserMenu />
  </AuthenticationContextProvider>
</Paper>
```
