let rotation = 0;
const angle = 180;
function rotateImg(){
    img = document.getElementById("diaNoite");
    
    rotation = (rotation + angle) % 360;

    img.style.transform = `rotate(${rotation}deg)`;

    /*console.log(rotation);*/
}