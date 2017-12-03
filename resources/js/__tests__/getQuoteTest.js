test('getQuote returns a promise and resolves an object with a quoteText and a quoteAuthor property', () => {
  global.fetch = require('node-fetch');

  const getQuote = require('../getQuote.js');

  const res = getQuote();

  expect(res.then).toBeDefined();

  res.then(data => {
    expect(data.quoteText).toBeDefined();
    expect(data.quoteAuthor).toBeDefined();
  });
});
