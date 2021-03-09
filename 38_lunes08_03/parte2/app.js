const button = document.querySelector('#button');
const form = document.querySelector('#form');
const body = document.querySelector('#body');

// event.preventDefault();
// cancela la accion por defecto
// anula que se envie la informacion en este caso
button.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Hola como estas?');
});

// event.stopPropagation();
// Evita la propagacion del evento
// es decir que si hay otro evento no lo ejecuta
form.addEventListener('click', (event) => {
  event.stopPropagation();
  alert('Click en el form');
});

body.addEventListener('click', () => {
  alert('Soy el body');
});
