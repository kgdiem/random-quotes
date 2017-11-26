test('toggleLoading hides the quote div and shows the loading div on first call', () => {
  document.body.innerHTML = `
    <div id="quote"></div>
    <div id="loading"></div>`;

  const toggleLoading = require('../toggleLoading');

  toggleLoading();

  expect(document.getElementById('loading').style.display).toEqual('block');
  expect(document.getElementById('quote').style.display).toEqual("none");

});

test('toggleLoading hides loading div and shows quote div on second call', () => {
  document.body.innerHTML = `
    <div id="quote"></div>
    <div id="loading"></div>`;

  const toggleLoading = require('../toggleLoading');

  toggleLoading();
  toggleLoading();
  
  expect(document.getElementById('loading').style.display).toEqual('none');
  expect(document.getElementById('quote').style.display).toEqual("block");

});
