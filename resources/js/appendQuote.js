module.exports = function appendQuote(quote, author){
  document.querySelector('#quote p').textContent = `${quote} ~${author}`; 
}
