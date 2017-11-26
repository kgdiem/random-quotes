const appendQuoteAndImage = require('./appendQuoteAndImage');

appendQuoteAndImage();

document.querySelector('button').addEventListener('click', appendQuoteAndImage, false);

