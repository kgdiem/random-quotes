test('toggleLoading hides the quote div and shows the loading div on first call', () => {
  document.body.innerHTML = `
    <div id="quote">
      <div id="content"></div>
      <div id="loading"></div>
    </div>`;

  const toggleLoading = require('../toggleLoading');

  toggleLoading();

  expect(document.getElementById('loading').style.display).toEqual('block');
  expect(document.getElementById('content').style.display).toEqual("none");

});

test('toggleLoading hides loading div and shows quote div on second call', () => {
  document.body.innerHTML = `
    <div id="quote">
      <div id="content"></div>
      <div id="loading"></div>
    </div>`;

  const toggleLoading = require('../toggleLoading');

  toggleLoading();
  toggleLoading();
  
  expect(document.getElementById('loading').style.display).toEqual('none');
  expect(document.getElementById('content').style.display).toEqual("block");

});

test('toggleLoading hides quote div and shows loading div on third call', () => {
  document.body.innerHTML = `
    <div id="quote">
      <div id="content"></div>
      <div id="loading"></div>
    </div>`;

  const toggleLoading = require('../toggleLoading');

  toggleLoading();
  toggleLoading();
  toggleLoading();

  expect(document.getElementById('loading').style.display).toEqual('block');
  expect(document.getElementById('content').style.display).toEqual("none");
});

test('toggleLoading hides loading div when loading div css is display, block', () => {
  document.body.innerHTML = `
    <div id="quote">
      <div id="content"></div>
      <div id="loading"></div>
    </div>`;

  document.getElementById('loading').style.display = 'block';

  const toggleLoading = require('../toggleLoading');

  toggleLoading();

  expect(document.getElementById('loading').style.display).toEqual('none');
  expect(document.getElementById('content').style.display).toEqual("block");
});
