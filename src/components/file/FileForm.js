import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Paper, TextField, Button,
} from '@material-ui/core';

function FileForm({
  branch: _branch,
  filepath: _filepath,
  defaultContent: _defaultContent,
  submitText,
  onSubmit,
}) {
  const [branch, setBranch] = useState(_branch);
  const [filepath, setFilepath] = useState(_filepath);
  const [defaultContent, setDefaultContent] = useState(_defaultContent);
  const disabled = !(filepath);

  return (
    <Paper 
      style={{ marginBottom: '1em', padding: '1.3em' }}
      data-test="component-fileForm"
    >
      <form>
        <button type="submit" disabled style={{ display: 'none' }} aria-hidden="true"></button>
        <TextField
          name='branch' label='branch' type='text' autoComplete={null}
          variant="outlined" margin="normal" fullWidth defaultValue={'branch'}
          onChange={(e) => setBranch(e.target.value)}
          data-test="branch-textField"
        />
        <TextField
          name='filepath' label='filepath' type='text' autoComplete={null}
          variant="outlined" margin="normal" fullWidth defaultValue={filepath}
          onChange={(e) => setFilepath(e.target.value)}
          data-test="filepath-textField"
        />
        <TextField
          name='defaultContent' label='defaultContent' type='text' multiline={true} autoComplete={null}
          variant="outlined" margin="normal" fullWidth defaultValue={defaultContent}
          onChange={(e) => setDefaultContent(e.target.value)}
          data-test="defaultContent-textField"
        />
        <Button type="button" disabled={disabled} fullWidth variant="contained" color="primary"
          onClick={() => onSubmit({
            branch, filepath, defaultContent,
          })}
          data-test="submit-button"
        >
          {submitText}
        </Button>
      </form>
    </Paper>
  );
};

FileForm.propTypes = {
  /** text to display on the submit button */
  submitText: PropTypes.string,
  /** Function run when submit button is clicked */
  onSubmit: PropTypes.func.isRequired,
};

FileForm.defaultProps = { submitText: 'Submit' };

export default FileForm;
