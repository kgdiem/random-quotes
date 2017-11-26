module.exports = function appendImage(imageUrl){
  document.querySelector('#quote img').setAttribute('src', imageUrl);
}
