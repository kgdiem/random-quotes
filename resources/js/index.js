const toggleLoading = require('./toggleLoading');
const getQuote = require('./getQuote');
const getImage = require('./getImage');
const appendQuote = require('./appendQuote');
const appendImage = require('./appendImage');

appendQuoteAndImage();

document.getElementsByTagName('button')[0].onclick = appendQuoteAndImage;

async function appendQuoteAndImage(){
  toggleLoading();

  const quote = await getQuote();

  appendQuote(quote);

  const imageURL = await getImage();

  appendImage(imageURL);

  toggleLoading();
}
