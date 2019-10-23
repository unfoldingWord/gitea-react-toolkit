import base64 from 'base-64';
import utf8 from 'utf8';

import {
  getUser, getTokens, createToken,
} from './users';

export const authenticate = async ({
  username = '', password = '', config,
}) => {
  let authentication = { config };

  if (username) {
    authentication.user = await getUser({ username, config });
  }

  if (username && password) {
    const tokens = await getTokens({
      username, password, config,
    });

    if (tokens) {
      const tokenMatches = tokens.filter(_token => _token.name === config.tokenid);

      if (tokenMatches.length > 0) {
        authentication.token = tokenMatches[0];
      } else {
        authentication.token = await createToken({
          username, password, config,
        });
      }
    }
  }
  return authentication;
};

export const encodeAuthentication = ({
  username, password, token,
}) => {
  let authentication;

  if (token) {
    let sha1 = typeof token === 'object' ? token.sha1 : token;
    authentication = `token ${sha1}`;
  } else if (username && password) {
    const encoded = base64.encode(utf8.encode(`${username}:${password}`));
    authentication = 'Basic ' + encoded;
  }
  return authentication;
};
