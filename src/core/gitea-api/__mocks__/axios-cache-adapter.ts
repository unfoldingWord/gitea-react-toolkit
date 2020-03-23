const req = (url: string): Promise<any> => (
  url.match(/fail/ig) ? Promise.reject('Request failed with status code 404') : Promise.resolve({ data: 'OK' })
);

module.exports = { setup: () => ({ get: req }) };