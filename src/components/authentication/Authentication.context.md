```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { Authentication, AuthenticationContext, AuthenticationContextProvider } from 'gitea-react-toolkit';

function Component() {
  const { state: authentication, actions, component } = useContext(AuthenticationContext);

  return !authentication ? component : <pre>{JSON.stringify(authentication, null, 2)}</pre>;
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
