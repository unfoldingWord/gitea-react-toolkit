```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { Authentication, AuthenticationContext, AuthenticationContextProvider } from 'gitea-react-toolkit';

function Component() {
  const { state, actions, component } = useContext(AuthenticationContext);

  return !state ? component : <pre>{JSON.stringify(state, null, 2)}</pre>;
};

const [authentication, setAuthentication] = React.useState();

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider
  config={config}
  authentication={authentication}
  onAuthentication={setAuthentication}
>
  <Component />
</AuthenticationContextProvider>
```
