The `DrawerMenu` component helps display the `drawerMenu` component passed in props via a modal.

```js
import {
  Paper, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Mail, Inbox } from '@material-ui/icons';
const drawerMenu = (
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
  <DrawerMenu
    drawerMenu={drawerMenu}
  />
</Paper>
