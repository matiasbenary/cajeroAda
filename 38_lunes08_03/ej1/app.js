/*
Hacer un programa que tenga 3 botones y, al presionar uno, nos indique qué botón toco. 
1.Hay que armar el HTML
a.Crear 3 botones con diferente texto y id
2.En el js guardo en const a los elementos del html
a.Con const y querySelector guardar los elementos del dom
3.Agregar un evento a cada uno de los elementos anteriormete guardados
a.Agregar al elemento un addEventListener y pasandole como primer parametro el string "click" 
4.En el evento se tiene que disparar un alert
a. dentro de la funcion flecha disparar un alert con un texto
*/
// Obtengo mi elemento del HTML
const miBoton1 = document.querySelector('#miBoton1');
const miBoton2 = document.querySelector('#miBoton2');
const miBoton3 = document.querySelector('#miBoton3');

miBoton1.addEventListener('click', () => {
  alert('boton 1');
});

miBoton2.addEventListener('click', () => {
  alert('boton 2');
});

miBoton3.addEventListener('click', () => {
  alert('boton 3');
});
