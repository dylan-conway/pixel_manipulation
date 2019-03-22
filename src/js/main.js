
/*
    Pixel manipulation with HTML canvas.

    Author: Dylan Conway
*/

// CSS
import '../css/style.css';

let canvas, ctx;

window.onload = () => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Set initial width and height.
    canvas.width = 300;
    canvas.height = 100;

    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}