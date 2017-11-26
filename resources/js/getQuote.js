module.exports = function getQuote(){
  return fetch('https://kevindiem.com/sites/random-quotes?method=getQuote&format=json&lang=en', {mode: 'no-cors'})
    .then(res => res.json())
}
