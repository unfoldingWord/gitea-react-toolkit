import localforage from 'localforage';

const authenticationStore = localforage.createInstance({
  driver: [localforage.INDEXEDDB],
  name: 'git-authentication-store',
});

export const getAuth = async () => {
  let authentication;
  try {
    authentication = await localforage.getItem('authentication');
  } catch {
    authentication = null;
  }
  return authentication;
};

export const setAuth = async (authentication) => {
  let response = await localforage.setItem('authentication', authentication);
  return response;
};

export const logout = async () => {
  await setAuth();
  return true;
};
