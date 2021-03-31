//saludo
//Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
// por clase .
// por id # 
// por etiqueta o tag p
//const saludo = document.querySelector("#saludo");
//const saludo = document.querySelector(".titulo");
//const saludo = document.querySelector("h1");
const saludo = document.getElementById("saludo");
const nombre = prompt('Ingrese su nombre');

saludo.textContent = `<strong>Hola</strong> ${nombre} como estas?`;
// traen grupos
// const saludo = document.querySelectorAll("h1");
// const saludo = document.getElementsByTagName("h1");
// const saludo = document.getElementsByClassName("titulo");