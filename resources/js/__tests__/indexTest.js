test('appendQuoteAndImage should be called when index is included', () => {
  document.body.innerHTML = `<button></button>`;

  const spy = jest.fn(() => 1);

  const appendQuoteAndImage = jest.mock('../appendQuoteAndImage', () => spy);

  require('../index.js');

  expect(spy).toBeCalled();
 
});
