import React, {
  useState, useEffect, useCallback,
} from 'react';
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
  const [propsMemo, setPropsMemo] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const {
    state: authentication, component: authenticationComponent,
  } = useAuthentication({
    authenticationConfig: props.config,
  });

  const needsAuthentication = (authenticate && !authentication && authenticationComponent);
  let _props = { ...props };

  if (authenticate && authentication) _props = { ...props, config: authentication.config };
  const _propsMemo = JSON.stringify(_props);

  useEffect(() => {
    if (propsMemo !== _propsMemo) {
      setConfirmed(false);
      setPropsMemo();
    };
  },[propsMemo, _propsMemo]);

  const _promise = useCallback(() => {
    const runPromise = async () => {
      setPropsMemo(_propsMemo);

      try {
        const _response = await promise(_props);
        setResponse(_response);
      } catch (error) {
        const _error = { error: error.message };
        setResponse(_error);
      }
    };

    runPromise();
  }, [_propsMemo, promise, _props]);

  useEffect(() => {
    if (!needsAuthentication && confirmed && !propsMemo) _promise();
  }, [needsAuthentication, confirmed, _promise, propsMemo]);

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
};

Core.defaultProps = {
  authenticate: false,
  confirm: false,
};

export default Core;