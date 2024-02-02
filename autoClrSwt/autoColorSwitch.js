//Generate Random Color

let randomColor = function (){
    let hex='0123456789ABCDEF';
    color = '#';
    for (let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    };
    return color
}
// console.log(randomColor());
let interValid;
let startColorChange = function(){
    if (!interValid){
        interValid = setInterval(changeBg,1000)
    }
    function changeBg(){
        document.body.style.backgroundColor = randomColor()
    }
};
let stopColorChange = function (){
    clearInterval(interValid);
    interValid = null
};

document.querySelector('#start').addEventListener('click', startColorChange)
document.querySelector('#stop').addEventListener('click', stopColorChange)