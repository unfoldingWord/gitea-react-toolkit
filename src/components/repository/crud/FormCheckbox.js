import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

function FormCheckbox({
  name,
  label,
  checked,
  onChange,
  disabled,
}) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          color="primary"
          value="private"
          defaultChecked={checked}
          disabled={disabled}
          name={name}
          id={name + Math.random()}
          onChange={onChange}
        />
      }
    />
  );
}

FormCheckbox.propTypes = {
  /** The name/id of the field, must be unique. */
  name: PropTypes.string.isRequired,
  /** The label of the field. */
  label: PropTypes.string.isRequired,
  /** Prepopulate the default value. */
  checked: PropTypes.bool,
  /** The function to propogate changes. */
  onChange: PropTypes.func,
  /** Set if this field should be required. */
  required: PropTypes.bool,
  /** Set if this field should be disabled. */
  disabled: PropTypes.bool,
};

export default FormCheckbox;
