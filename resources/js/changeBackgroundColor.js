const colors = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#FFDC00', '#FF851B', '#FF4136', '#85144b'];

module.exports = function changeBackgroundColor(){
    const color = getRandomColor();

    document.getElementsByTagName('button')[0].style.backgroundColor = color;
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    
}

function getRandomColor(){
    const random = Math.floor(Math.random() * colors.length);

    return colors[random];
}