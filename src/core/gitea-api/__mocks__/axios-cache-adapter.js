module.exports = {
  setup: () => ({
    get: (url) =>
      url.match(/fail/ig) ? Promise.reject(new Error('Request failed with status code 404')) : Promise.resolve({ data: 'OK' }),
  }),
};