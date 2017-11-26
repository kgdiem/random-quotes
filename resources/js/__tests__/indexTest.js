document.body.innerHTML = `<button></button>`;

const mock = jest.fn();

jest.mock('../appendQuoteAndImage', () => mock);

require('../index.js');

test('appendQuoteAndImage should be called when index is included', () => {

  expect(mock).toHaveBeenCalledTimes(1);
 
});

test('index.js should attach event listener to button that calls appendQuoteAndImage', () => {
  
  document.querySelector('button').click();
  
  expect(mock.mock.calls.length).toBe(2);

});
