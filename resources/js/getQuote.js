module.exports = function getQuote(){
  return fetch('https://kevindiem.com/sites/random-quotes/forismatic.php?method=getQuote&format=json&lang=en')
    .then(res => res.json())
}
