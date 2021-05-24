const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Variables del Cuadrado
let posicionXcuadrado = 0;
let posicionYcuadrado = 0;
let initialPositioninX = initialPosition(-5, 5);
let initialPositioniny = initialPosition(-5, 5);
// Variables del circulo
let posicionXcirculo = 300;
let posicionYcirculo = 300;
let randomXcirculo = initialPosition(-10, 10);
let randomYcirculo = initialPosition(-10, 10);


function espacioMovimiento() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(posicionXcuadrado, posicionYcuadrado, 150, 150);
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(posicionXcirculo, posicionYcirculo, 100, 0, 2 * Math.PI);
    ctx.fill();

    if (posicionXcirculo + 100 >= canvas.width) {
        randomXcirculo = -randomXcirculo;
    }
    if (posicionYcirculo + 100 >= canvas.height) {
        randomYcirculo = -randomYcirculo;
    }
    if (posicionXcirculo - 100 < 0) {
        randomXcirculo = -randomXcirculo;
    }
    if (posicionYcirculo - 100 < 0) {
        randomYcirculo = -randomYcirculo;
    }
    if (posicionXcuadrado + 150 >= canvas.width) {
        initialPositioninX = -initialPositioninX;
    }
    if (posicionYcuadrado + 150 >= canvas.height) {
        initialPositioniny = -initialPositioniny;
    }
    if (posicionXcuadrado < 0) {
        initialPositioninX = -initialPositioninX;
    }
    if (posicionYcuadrado < 0) {
        initialPositioniny = -initialPositioniny;
    }
    posicionXcuadrado += initialPositioninX;
    posicionYcuadrado += initialPositioniny;
    posicionXcirculo += randomXcirculo;
    posicionYcirculo += randomYcirculo;

    window.requestAnimationFrame(espacioMovimiento);
}

window.requestAnimationFrame(espacioMovimiento);

function initialPosition(min, max) {
    return Math.random() * (max - min) + min;
}