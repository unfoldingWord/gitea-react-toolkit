Once "Keep me logged in" is checked, it will not present a login; rather a "logout" will be presented.
Click "logout" to remove persisted credentials and to see the login again.

```js
import { useContext } from 'react';
import { Paper } from '@material-ui/core';
import localforage from 'localforage';

import { AuthenticationContext, AuthenticationContextProvider } from 'gitea-react-toolkit';

function Component() {
  const { state: authentication, actions, component } = useContext(AuthenticationContext);
  authentication && console.log("authentication object:",JSON.stringify(authentication, null, 2));
  return component;
  //return !authentication ? component : <pre>{JSON.stringify(authentication, null, 2)}</pre>;
};

const [authentication, setAuthentication] = React.useState();

const myAuthStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'my-auth-store',
});

// for demo, always clear the database keys at start up
//myAuthStore.clear();

const getAuth = async () => {
  let authentication = await myAuthStore.getItem('authentication');
  return authentication;
};

const saveAuth = async (authentication) => {
  if (authentication === undefined || authentication === null) {
    await myAuthStore.removeItem('authentication');
  } else {
    await myAuthStore.setItem('authentication', authentication)
    .then(function (authentication) {
      console.log("saveAuth() success. authentication is:", authentication);
    }).catch(function(err) {
        // This code runs if there were any errors
        console.log("saveAuth() failed. err:", err);
        console.log("saveAuth() failed. authentication:", authentication);
    });
  }
};

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

const messages={
      actionText:"Authenticate",
      genericError: "Something happened!",
      usernameError: "No user found?",
      passwordError: "Did you fat finger your password?",
      networkError: 'There is an issue with your network connection. Please try again.',
      serverError: 'There is an issue with the server please try again.',
};

<AuthenticationContextProvider
  messages={messages}
  config={config}
  authentication={authentication}
  onAuthentication={setAuthentication}
  loadAuthentication={getAuth}
  saveAuthentication={saveAuth}
>
  <Component />
</AuthenticationContextProvider>
```
