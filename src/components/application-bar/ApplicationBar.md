```js
import {
  IconButton, Badge, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Mail, Notifications, Inbox } from '@material-ui/icons';
import { ApplicationBar } from 'gitea-react-toolkit';

const [authentication, setAuthentication] = React.useState();
const [repository, setRepository] = React.useState();
const [blob, setBlob] = React.useState();
const [file, setFile] = React.useState();
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
const config = {server: "https://bg.door43.org"};

<ApplicationBar
  title='Application Title'
  buttons={buttons}
  drawerMenu={drawerMenu}
  authentication={authentication}
  onAuthentication={setAuthentication}
  authenticationConfig={{
    tokenid:"PlaygroundTesting",
    ...config
  }}
  repository={repository}
  onRepository={setRepository}
  repositoryConfig={{
    ...config,
    urls: [
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_ta",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_tw",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_tn",
      "https://bg.door43.org/api/v1/repos/door43-catalog/en_obs",
    ],
  }}
  blob={blob}
  onBlob={setBlob}
  file={file}
  onFile={setFile}
/>
```

- Requires props from `withAuthentication` in addition to the below props.
