module.exports = function toggleLoading(){
  const loadingDiv = document.getElementById('loading');
  const contentDiv = document.getElementById('content');

  if(loadingDiv.style.display === '' || loadingDiv.style.display === 'none'){
    loadingDiv.style.display = 'block';
    contentDiv.style.display = 'none';
  }
  else if(loadingDiv.style.display === 'block'){
    loadingDiv.style.display = 'none';
    contentDiv.style.display = 'block';
  }

}

