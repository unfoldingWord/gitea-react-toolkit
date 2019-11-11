const req = (url): Promise<any> => url.match(/fail/ig) ? Promise.reject('Request failed with status code 404') : Promise.resolve({ data: 'OK' });

module.exports = {
  get: req,
  post: req,
  patch: req,
  put: req,
  delete: req,
};