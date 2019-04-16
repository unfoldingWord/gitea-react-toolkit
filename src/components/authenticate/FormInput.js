import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';

function FormInputComponent ({
  id,
  label,
  autoFocus,
  onBlur,
  type,
}) {
  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id} name={id} autoComplete={id} autoFocus={autoFocus} type={type}
        onBlur={onBlur}
      />
    </FormControl>
  );
}

FormInputComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'email',
    'password',
    'number',
    'search',
    'tel',
    'text',
    'url',
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};

FormInputComponent.defaultProps = {
  actionText: 'Login',
}

const styles = theme => ({
  root: {},
});

export const FormInput = withStyles(styles)(FormInputComponent);
