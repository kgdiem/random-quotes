test('getImage returns a promise and resolves an object with a url property', () => {
  global.fetch = require('node-fetch');

  const getImage = require('../getImage');

  const res = getImage('test');

  expect(res.then).toBeDefined();

  res.then(data => {
    expect(data.url).toBeDefined();
  });
});
