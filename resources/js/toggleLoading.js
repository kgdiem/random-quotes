module.exports = function toggleLoading(){
  const loadingDiv = document.getElementById('loading');
  const quoteDiv = document.getElementById('quote');

  if(loadingDiv.style.display === '' || loadingDiv.style.display === 'none'){
    loadingDiv.style.display = 'block';
    quoteDiv.style.display = 'none';
  }
  else if(loadingDiv.style.display === 'block'){
    loadingDiv.style.display = 'none';
    quoteDiv.style.display = 'block';
  }

}

