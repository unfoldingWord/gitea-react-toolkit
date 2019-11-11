module.exports = {
  get: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  post: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  patch: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  put: (url) =>
    url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
};