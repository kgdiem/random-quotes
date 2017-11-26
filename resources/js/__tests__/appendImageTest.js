test('appendImage should add an image url to the quote image tag', () => {
  document.body.innerHTML = `
    <div id="quote">
      <img>
    </div>`;

  const appendImage = require('../appendImage');

  appendImage('test');

  expect(document.querySelector('#quote img').getAttribute('src')).toEqual('test');

});
