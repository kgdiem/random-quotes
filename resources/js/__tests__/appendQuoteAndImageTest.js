test('appendQuoteAndImage should append a quote and an image', async () => {
  global.fetch = require('node-fetch');
  
  document.body.innerHTML = `
    <div id="quote">
      <img>
      <p></p>
    </div>
    <div id="loading"></div>`;
 
  const appendQuoteAndImage = require('../appendQuoteAndImage');
  
  await appendQuoteAndImage()
    
  expect(document.querySelector('#quote p').textContent).not.toBe('');
  expect(document.querySelector('#quote img').getAttribute('src')).toBeTruthy();
  
});
