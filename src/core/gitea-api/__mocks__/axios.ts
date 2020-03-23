const _req = (url: string): Promise<any> => (
  url.match(/fail/ig) ? Promise.reject('Request failed with status code 404') : Promise.resolve({ data: 'OK' })
);

module.exports = {
  get: _req,
  post: _req,
  patch: _req,
  put: _req,
  delete: _req,
};