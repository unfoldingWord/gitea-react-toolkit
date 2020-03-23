import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 360;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  appBar: {
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: '10000',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  // RepositoryMenu and UserMenu
  avatar: {
    width: '35px',
    height: '35px',
  },
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    maxHeight: '80%',
    overflow: 'scroll',
  },
}));
