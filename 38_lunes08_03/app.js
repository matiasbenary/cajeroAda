// Obtengo mi elemento del HTML
const miBoton = document.querySelector('#miBoton');
const miInput = document.querySelector('#miInput');
// a mi elemento de mi html le agrego un escuchador de eventos (addEventListener)
// addEventListener recibe 2 parametros
// el primero es un string, que me dice que accion va actuar
// el segundo es una funcion,que me dice que va hacer cuando pase esa accion
miBoton.addEventListener('click', () => {
  alert('hola como estas?');
});

//keypress -> cuando se apreta la tecla
//keyup -> cuando la tecla sube,cuando suelto el boton
//keydown -> cuando la baja,cuando queda precionada
/*miInput.addEventListener('keypress', () => {
  alert('hola como estas?');
});
*/

// Si necesito puedo usar event que tiene informacion del evento
// Como por ejemplo la tecla que se toco
// el elemento afectado
/* 
miInput.addEventListener('keypress', (event) => {
  console.log(event.key);
  if (event.key == 'Enter') {
    alert('hola como estas?');
  }
});
*/

miInput.addEventListener('keypress', (event) => {
  if (event.key == 's') {
    alert('Se preciono la tecla S');
  }
});

// una funcion anonima es esto:
/*
 () => {
   aca mi codigo
 }
*/
// con esto guardo una funcion anonima en una variable
const saludas = (event) => {
  console.log(event.key);
  if (event.key == 's') {
    alert('hola como estas?');
  }
};

miInput.addEventListener('keyup', saludas);

/*miInput.addEventListener('keyup', (event) => {
  console.log(event.key);
  if (event.key == 's') {
    alert('hola como estas?');
  }
}); */
