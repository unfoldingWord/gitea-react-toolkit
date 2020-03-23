
# Authentication Components

This is a functional Authentication component that logs into a Gitea server.
The Authentication component wraps the LoginForm component.

```js
import { Paper } from '@material-ui/core';

import { Authentication } from 'gitea-react-toolkit';

const [authentication, setAuthentication] = React.useState();

<Paper>
  <Authentication
    messages={{
      actionText:"Authenticate",
      genericError: "Something happened!",
      usernameError: "No user found?",
      passwordError: "Did you fat finger your password?",
      networkError: 'There is an issue with your network connection. Please try again.',
      serverError: 'There is an issue with the server please try again.',
    }}
    config={{
      server: "https://bg.door43.org",
      tokenid:"PlaygroundTesting",
    }}
    authentication={authentication}
    onAuthentication={(data) => {
      setAuthentication(data);
    }}
  />
</Paper>
```