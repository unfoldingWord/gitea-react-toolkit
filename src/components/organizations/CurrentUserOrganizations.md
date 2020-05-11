
The CurrentUserOrganizations component allows for authentication to see a users organizations

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { CurrentUserOrganizations, AuthenticationContextProvider, AuthenticationContext } from 'gitea-react-toolkit';

  function Component() {
    const { state: authentication, actions, component } = useContext(AuthenticationContext);

    return !authentication ? component : <CurrentUserOrganizations
        authentication={authentication}
        onOrganization={(data) => {
          alert(JSON.stringify(data, null, 2));
        }}
      />;
  };
  const [authentication, setAuthentication] = React.useState();

  const config = {
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  };
  <AuthenticationContextProvider
    authentication={authentication}
    onAuthentication={setAuthentication}
    config={config}>
    <Component />
  </AuthenticationContextProvider>

```
