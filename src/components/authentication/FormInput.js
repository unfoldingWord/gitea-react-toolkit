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
  onChange,
  type,
}) {
  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <Input
        id={id} name={id} autoComplete={id} autoFocus={autoFocus}
        type={type}
        onChange={onChange}
      />
    </FormControl>
  );
}

FormInputComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  /** The name/id of the field, must be unique. */
  id: PropTypes.string.isRequired,
  /** The type of the field. */
  type: PropTypes.oneOf([
    'email',
    'password',
    'number',
    'search',
    'tel',
    'text',
    'url',
  ]).isRequired,
  /** The label of the field. */
  label: PropTypes.string.isRequired,
  /** The function to propogate changes. */
  onChange: PropTypes.func.isRequired,
  /** Set if this field should be selected on load. */
  autoFocus: PropTypes.bool,
};

FormInputComponent.defaultProps = {
  actionText: 'Login',
}

const styles = theme => ({
  root: {},
});

export const FormInput = withStyles(styles)(FormInputComponent);
