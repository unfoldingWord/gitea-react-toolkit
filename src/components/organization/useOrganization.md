```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { useOrganization, AuthenticationContextProvider, AuthenticationContext } from 'gitea-react-toolkit';
  const config = {
    server: "https://bg.door43.org",
    tokenid:"PlaygroundTesting",
  };
  const [_authentication, setAuthentication] = React.useState();

  function Component() {
    const { state: authentication, actions, component: authComponent } = useContext(AuthenticationContext);
    const [organization, setOrganization] = React.useState(null);
    const { state, component } = useOrganization({
      organization,
      config,
      onOrganization: setOrganization,
      authentication,
    });
    return !authentication ? authComponent : component;
  };
  
  <AuthenticationContextProvider
    authentication={_authentication}
    onAuthentication={setAuthentication}
    config={config}>
    <Component config={config}/>
  </AuthenticationContextProvider>

```