import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Paper, Button } from '@material-ui/core';

import { useAuthentication } from '..';

function Core({
  promise,
  props,
  authenticate,
  confirm,
}) {
  const [response, setResponse] = useState();
  const [propsMemo, setPropsMemo] = useState();
  const [confirmed, setConfirmed] = useState(!confirm);
  const { state: { authentication }, component: authenticationComponent } = useAuthentication({
    authenticationConfig: props.config,
  });

  const needsAuthentication = (authenticate && !authentication && authenticationComponent);

  useEffect(() => {
    setConfirmed(!confirm);
  },[props, confirm]);

  useEffect(() => {
    let _props = { ...props };

    if (authenticate && authentication) {
      _props = { ...props, config: authentication.config };
    }

    const _propsMemo = JSON.stringify(_props);

    async function runPromise() {
      setPropsMemo(_propsMemo);

      try {
        const _response = await promise(_props);
        setResponse(_response);
      } catch (error) {
        const _error = { error: error.message };
        setResponse(_error);
      }
    }

    const needRunPromise = (_propsMemo !== propsMemo);

    if (!needsAuthentication && needRunPromise && confirmed) {
      runPromise();
    }
  }, [
    promise, props, response, authentication, authenticate, propsMemo, needsAuthentication, confirmed,
  ]); // do not include props/promise because it starts an infinite loop

  const responseComponent = (confirmed) ? (
    <ReactJson src={response || { pending: true }} />
  ) : (
    <Button variant="contained" color='primary' onClick={() => setConfirmed(true)}>
      Run
    </Button>
  );

  const component = (needsAuthentication) ? authenticationComponent : (
    <>
      <h3>Props</h3>
      <Paper>
        <ReactJson src={props} />
      </Paper>
      <h3>Response</h3>
      <Paper>
        {responseComponent}
      </Paper>
    </>
  );

  return component;
};

Core.propTypes = {
  props: PropTypes.object.isRequired,
  promise: PropTypes.func.isRequired,
  authenticate: PropTypes.bool,
  confirm: PropTypes.bool,
};

Core.defaultProps = {
  authenticate: false,
  confirm: false,
};

export default Core;