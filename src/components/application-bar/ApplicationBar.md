```js
import { useContext, useState } from 'react';
import {
  IconButton, Badge, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Mail, Notifications, Inbox } from '@material-ui/icons';

import {
  AuthenticationContext,
  AuthenticationContextProvider,
  RepositoryContext,
  RepositoryContextProvider,
  FileContext,
  FileContextProvider,
  ApplicationBar,
} from 'gitea-react-toolkit';

function Component() {
  const buttons = (
    <IconButton color="inherit">
      <Badge badgeContent={17} color="secondary">
        <Notifications />
      </Badge>
    </IconButton>
  );
  const drawerMenu = (
    <List>
      {['Inbox', 'Sent'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon style={{margin:0}}>
            {index % 2 === 0 ? <Inbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <ApplicationBar
      title='Application Title'
      buttons={buttons}
      drawerMenu={drawerMenu}
    />
  );
};

const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();
const [file, setFile] = useState();

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

<AuthenticationContextProvider
  authentication={authentication}
  onAuthentication={setAuthentication}
  config={config}
>
  <RepositoryContextProvider
    repository={repository}
    onRepository={setRepository}
    urls={[
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_ta",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_tw",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_tn",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_obs",
    ]}
  >
    <FileContextProvider
      file={file}
      onFile={setFile}
    >
      <Component />
    </FileContextProvider>
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
