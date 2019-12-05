module.exports = {
  ...require.requireActual('../core'),
  get: ({ config }) => config.headers ? Promise.resolve([{
    name: 'user-token',
    id: 'test-id',
    sha1: 'encrypted123456789',
  }]) : Promise.reject(),
  post: ({ url }) => !url.match(/fail/ig) ? Promise.resolve([{
    name: 'user-token',
    id: 'test-id',
    sha1: 'encrypted123456789',
  }]) : Promise.reject(),
  del: ({ url }) => !url.match(/fail/ig) ? Promise.resolve() : Promise.reject(),
}