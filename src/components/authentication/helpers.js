import localforage from 'localforage';

const authenticationStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'git-authentication-store',
});

export const isAuthenticated = (auth) => (auth && auth.token && auth.token && auth.user);

export const getAuth = async () => {
  let authentication;
  try {
    const value = await authenticationStore.getItem('authentication');
    authentication = JSON.parse(value);
  } catch {
    authentication = null;
  }
  return authentication;
};

export const saveAuth = async (authentication) => {
  let response;
  if (authentication) {
    const value = JSON.stringify(authentication);
    response = await authenticationStore.setItem('authentication', value);
  } else {
    response = await authenticationStore.removeItem('authentication');
  }
  return response;
};