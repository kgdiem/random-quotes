module.exports = function appendQuote(quote, author){
  const paragraph = document.querySelector('#quote p');
  
  paragraph.innerHTML = `<span class="quote">${quote}</span>&nbsp;`;
  
  if(author){
    paragraph.innerHTML += `<br><span class="author">~ ${author}</span>`;
  }
  
}
