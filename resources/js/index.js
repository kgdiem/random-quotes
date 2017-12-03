const appendQuoteAndImage = require('./appendQuoteAndImage');
const changeBackgroundColor = require('./changeBackgroundColor');

appendQuoteAndImage();

document.querySelector('button').addEventListener('click', appendQuoteAndImage, false);
document.querySelector('button').addEventListener('click', changeBackgroundColor, false);

