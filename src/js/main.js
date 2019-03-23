
/*
    Pixel manipulation with HTML canvas.

    Author: Dylan Conway
*/

// CSS
import '../css/style.css';

// Set up favicon.
import faviconImg from '../img/icon.ico';
(function(){
    let link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconImg;
    document.getElementsByTagName('head')[0].appendChild(link);
})();

// Loop function.
let loop = (function(){
    return window.requestAnimationFrame;
})();

// Canvas and context.
let canvas, ctx;

// The original pixel data for the picture and
// the copy.
let originalImageData;
let imageData;

let originalData;
let data;

let x = 50;
let vx = 5;

window.onload = () => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Set initial width and height.
    canvas.width = 300;
    canvas.height = 100;

    let button = document.getElementById('goButton');
    button.addEventListener('click', () => {
        let image = document.getElementById('imgInput').files[0];
        if(image){
            loadImage(image);
            imageLoop();
            // setInterval(()=>{imageLoop()}, 10);
        }
    });

    // window.addEventListener('click', () => {
    //     imageLoop();
    // })
}

function imageLoop(){
    loop(imageLoop);

    for(let i = 0; i < data.length; i += 4){
        if(data[i] < 255){
            data[i] = (7 + data[i]) % 255;
            
        }
        if(data[i + 1] < 255){
            data[i + 1] = (7 + data[i + 1]) % 255;
        }

        if(data[i + 2] < 255){
            data[i + 2] = (7 + data[i + 2]) % 55;
        }

        if(x > 255 || x < 0){
            vx = -vx;
        }

        x += vx;
    } 

    // data = originalData;

    ctx.putImageData(imageData, 0, 0);
}

function loadImage(img){
    let image = new Image();
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = (e) => {
        image.src = e.target.result;
        image.onload = () => {

            // Image resizing if the image is larger than the window size. later
            // if(image.width > )
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            data = imageData.data;
            console.log(data.length);

            originalData = originalImageData.data;
            
        }
    }
}
