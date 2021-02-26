import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 360;

export const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    maxHeight: '80%',
    overflow: 'scroll',
  },
}));
