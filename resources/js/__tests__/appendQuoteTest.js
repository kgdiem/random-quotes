test('appendQuote adds text to the quote paragraph', () => {
  document.body.innerHTML = `
    <div id="quote">
      <p></p>
    </div>`;

  const appendQuote = require('../appendQuote');

  appendQuote('test', 'test');

  expect(document.querySelector('#quote p').textContent).toEqual('test\u00A0~ test');
  
});
