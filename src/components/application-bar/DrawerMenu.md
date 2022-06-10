# DrawerMenu

## Using Hooks

The `DrawerMenu` component helps display the `drawerMenu` component passed in props via a modal.

```js
import { Paper, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Mail, Inbox } from '@material-ui/icons';
import { DrawerMenu, useRepository, useFile } from 'gitea-react-toolkit';

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

const [repository, setRepository] = React.useState();
const [filepath, setFilepath] = React.useState();

const repo = useRepository({ config, urls, repository, onRepository: setRepository });
const file = useFile({ config, repository, filepath, onFilepath: setFilepath });

<Paper>
  <DrawerMenu file={file}>
    {repo.component}
  </DrawerMenu>
</Paper>
```

## Using Contexts

The `DrawerMenu` component helps display the `drawerMenu` component passed in props via a modal.

```js
import {
  Paper, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Mail, Inbox } from '@material-ui/icons';
import {
  DrawerMenu, AuthenticationContextProvider, RepositoryContextProvider, FileContextProvider
} from 'gitea-react-toolkit';

const children = (
  <>
    <List>
      {['Inbox', 'Starred', 'Sent', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </>
);

<Paper>
  <AuthenticationContextProvider>
    <RepositoryContextProvider>
      <FileContextProvider>
        <DrawerMenu>
          {children}
        </DrawerMenu>
      </FileContextProvider>
    </RepositoryContextProvider>
  </AuthenticationContextProvider>
</Paper>
```
