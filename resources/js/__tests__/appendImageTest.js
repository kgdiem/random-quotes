const mock = jest.fn(uri => Promise.resolve(uri));

jest.mock('../makeImageURI', () => mock);

test('appendImage should add an image url to the quote image tag', async () => {

  document.body.innerHTML = `
  <div id="quote">
    <img>
  </div>`;

  const appendImage = require('../appendImage');

  await appendImage('test');

  console.log(document.querySelector('#quote img').getAttribute('src'));

  expect(document.querySelector('#quote img').getAttribute('src')).toEqual('test');

});
