import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Paper } from '@material-ui/core';

function Core({
  promise,
  props,
}) {
  const [response, setResponse] = useState();

  useEffect(() => {
    async function runPromise() {
      const _response = await promise(props);
      setResponse(_response);
    }

    if (!response) {
      runPromise();
    }
  }, [promise, props, response]); // do not include props/promise because it starts an infinite loop

  const propsComponent = props ? <ReactJson src={props} /> : <></>;
  const responseComponent = response ? <ReactJson src={response} /> : <></>;

  return (
    <>
      <h3>Props</h3>
      <Paper>
        {propsComponent}
      </Paper>
      <h3>Response</h3>
      <Paper>
        {responseComponent}
      </Paper>
    </>
  );
};

Core.propTypes = {
  props: PropTypes.object.isRequired,
  promise: PropTypes.func.isRequired,
};

export default Core;