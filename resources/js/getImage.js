module.exports = function getImage(queryString){
  const formattedQuery = queryString.replace(/ /g, '_');

  return fetch(`https://api.giphy.com/v1/gifs/search?q=${formattedQuery}&api_key=inPBzYRrnBFaRTyTrSSRpD21B4HEO5xT`)
    .then(res => res.json())
    .then(json => {
      
      const results = json.data;

      if(results.length){
        const index = getRandomImage(results.length);

        return Promise.resolve({url: results[index].images.downsized_medium})
      }
      else{
        return Promise.resolve(undefined);
      }
  
    });
}

function getRandomImage(length){
  const random = Math.floor(Math.random() * length);
  
  return random;
}