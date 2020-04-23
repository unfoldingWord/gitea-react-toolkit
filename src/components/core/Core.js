import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Paper, Button } from '@material-ui/core';

import { useAuthentication } from '..';

function Core({
  promise,
  props,
  authenticate,
}) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const { state: authentication, component: authenticationComponent } = useAuthentication({ config: props.config });
  const needsAuthentication = (authenticate && !authentication && authenticationComponent);
  const _promise = useCallback(async () => {
    try {
      setLoading(true);
      const _response = await promise({
        ...props,
        ...authentication,
      });
      setResponse(_response);
    } catch (error) {
      const _error = { error: error.message };
      setResponse(_error);
    }
    setLoading(false);
  }, [authentication, promise, props]);

  let responseComponent = <div />;

  if (needsAuthentication && authenticationComponent) {
    return authenticationComponent;
  }

  if (response) {
    responseComponent = <ReactJson src={response} />;
  } else if (loading) {
    responseComponent = <ReactJson src={{ pending: true }} />;
  } else if (!response && typeof (response) !== 'undefined' && !loading) {
    responseComponent = 'No response';
  }
  return (
    <>
      <h3>Props</h3>
      <Paper>
        <ReactJson src={props} />
      </Paper>
      <h3>Response</h3>
      <Paper>
        {responseComponent}
      </Paper>
      <Button variant="contained" color='primary' onClick={_promise}>
        Run
      </Button>
    </>
  );
};

Core.propTypes = {
  props: PropTypes.object.isRequired,
  promise: PropTypes.func.isRequired,
  authenticate: PropTypes.bool,
};

Core.defaultProps = {
  authenticate: false,
  confirm: false,
};

export default Core;