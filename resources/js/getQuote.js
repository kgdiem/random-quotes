module.exports = function getQuote(){
  return fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', {mode: 'no-cors'})
    .then(res => res.json())
}
