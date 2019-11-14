/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = (on, config) => {
  on('file:preprocessor', require('@cypress/code-coverage/use-browserify-istanbul'));
  on('task', require('@cypress/code-coverage/task'));
  return config;
};