//### color

//Hacer un programa que al iniciarse pida mediante un `prompt` ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

/**
 1. pedir al usuario color 
    a. usar prompt
 2. cambiar el color
    a. obtener el body del html 
    b. cambiar el color de background 
 */

// rgb(255,255,255)
// #FFFFFF
const color = prompt('ingrese el color');

const body = document.querySelector("body");
body.style = `background-color: #${color};`;
