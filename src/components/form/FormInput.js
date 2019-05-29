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
  defaultValue,
  autoFocus,
  onChange,
  onBlur,
  type,
  autoComplete,
  multiline,
  required,
  disabled,
}) {
  return (
    <FormControl margin="normal" required={required} fullWidth>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <Input
        id={id + '-' + Math.random()}
        name={id}
        autoComplete={autoComplete || id}
        multiline={multiline}
        autoFocus={autoFocus}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
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
  /** Prepopulate the default value. */
  defaultValue: PropTypes.string,
  /** The function to propogate changes. */
  onChange: PropTypes.func,
  /** The function to propogate changes. */
  onBlur: PropTypes.func,
  /** Set if this field should be selected on load. */
  autoFocus: PropTypes.bool,
  /** String to identify autoFill field. */
  autoComplete: PropTypes.string,
  /** Set if this field should be a textbox. */
  multiline: PropTypes.bool,
  /** Set if this field should be required. */
  required: PropTypes.bool,
  /** Set if this field should be disabled. */
  disabled: PropTypes.bool,
};

FormInputComponent.defaultProps = {
}

const styles = theme => ({
  root: {},
});

export const FormInput = withStyles(styles)(FormInputComponent);
