const makeImageURI = require('./makeImageURI');

module.exports = async function appendImage(imageUrl){

  const imageURI = await makeImageURI(imageUrl);

  document.querySelector('#quote img').setAttribute('src', imageURI);

}
