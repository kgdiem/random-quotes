const toggleLoading = require('./toggleLoading');

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

function getQuote(){

}

function appendQuote(){

}

function getImage(){

}

function appendImage(){

}
