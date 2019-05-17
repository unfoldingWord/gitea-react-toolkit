import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
} from '@material-ui/core';
import {
} from '@material-ui/icons';

import { ApplicationBar } from './';
import styles from './styles';

function ApplicationBarComponent({
  classes,
  body,
  title,
  buttons,
  drawerMenu,
  authentication,
  onAuthentication,
  authenticationConfig,
}) {
  return (
    <div className={classes.root}>
      <ApplicationBar
        title={title}
        buttons={buttons}
        drawerMenu={drawerMenu}
        authentication={authentication}
        onAuthentication={onAuthentication}
        authenticationConfig={authenticationConfig}
      />
      <main>
        {body}
      </main>
    </div>
  );
}

ApplicationBarComponent.propTypes = {
  /** The title string to be displayed. */
  title: PropTypes.string,
  /** Additional buttons to be displayed. */
  buttons: PropTypes.element,
  /** Component to render inside of the drawer menu. */
  drawerMenu: PropTypes.element,
  ...withAuthentication.propTypes
};

export const ApplicationBar = withStyles(styles, { withTheme: true })(ApplicationBarComponent);
