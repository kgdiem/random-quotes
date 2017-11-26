const toggleLoading = require('./toggleLoading');
const getQuote = require('./getQuote');
const getImage = require('./getImage');
const appendQuote = require('./appendQuote');
const appendImage = require('./appendImage');

module.exports = async function appendQuoteAndImage(){
  toggleLoading();

  const quote = await getQuote();

  appendQuote(quote.quoteText, quote.quoteAuthor);

  const image = await getImage(quote.quoteAuthor);

  appendImage(image.url.url);

  toggleLoading();

  return Promise.resolve(true);
}
