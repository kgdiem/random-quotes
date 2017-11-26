module.exports = function getImage(queryString){
  const formattedQuery = queryString.replace(/ /g, '_');

  return fetch(`https://api.giphy.com/v1/gifs/search?q=${formattedQuery}&api_key=inPBzYRrnBFaRTyTrSSRpD21B4HEO5xT`)
    .then(res => res.json())
    .then(json => Promise.resolve({url: json.data[0].images.downsized_medium}));
}
