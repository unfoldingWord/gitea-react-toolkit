```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import { useOrganization, useAuthentication } from 'gitea-react-toolkit';

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

function Component() {
  const [authentication, setAuthentication] = React.useState();
  const [organization, setOrganization] = React.useState();

  const auth = useAuthentication({ config, authentication, onAuthentication: setAuthentication });
  const { state, component } = useOrganization({
    config,
    authentication,
    organization,
    onOrganization: setOrganization,
    auth,
  });
  return !authentication ? auth.component : component;
};
  

<Component />
```