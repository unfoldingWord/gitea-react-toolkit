# Application Bar

## Using Hooks

```js
import { useContext, useState } from 'react';
import { IconButton, Badge, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Mail, Notifications, Inbox } from '@material-ui/icons';

import {
  useAuthentication,
  useRepository,
  useFile,
  ApplicationBar,
} from 'gitea-react-toolkit';

const config = {
  server: "https://bg.door43.org",
  tokenid:"PlaygroundTesting",
};

const urls = [
  "https://bg.door43.org/api/v1/repos/door43-catalog/en_ta",
  "https://bg.door43.org/api/v1/repos/door43-catalog/en_tw",
  "https://bg.door43.org/api/v1/repos/door43-catalog/en_tn",
  "https://bg.door43.org/api/v1/repos/door43-catalog/en_obs",
];

function Component() {
  const [authentication, setAuthentication] = useState();
  const [repository, setRepository] = useState();
  const [filepath, setFilepath] = useState();

  const auth = useAuthentication({ config, authentication, onAuthentication: setAuthentication});
  const repo = useRepository({ authentication, repository, config, onRepository: setRepository, urls });
  const file = useFile({ authentication, repository, config, filepath, onFilepath: setFilepath });

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
      auth={auth}
      repo={repo}
      file={file}
      filepath={filepath}
    />
  );
};

<Component />
```


## Using Contexts

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
  const { state: file } = useContext(FileContext);

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
      filepath={file && file.filepath}
    />
  );
};

const [authentication, setAuthentication] = useState();
const [repository, setRepository] = useState();
const [filepath, setFilepath] = useState();

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
      filepath={filepath}
      onFilepath={setFilepath}
    >
      <Component />
    </FileContextProvider>
  </RepositoryContextProvider>
</AuthenticationContextProvider>
```
