const button = document.getElementById('button');
const inputText = document.getElementById('inputText');
const checkbox = document.getElementById('checkbox');
const title = document.getElementById('title');
const form = document.getElementById('form');
const options = document.getElementById('options');
//inputText.value -> lo utilizo para obetener el texto,es un string
//checkbox.checked -> lo utilizo para obetener el estado,es un boolean
// event -> me da informacion del evento,ademas tiene su propias funciones como preventDefault
// preventDefault -> evita que se ejecute la accion por defecto
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  // para ver los valores de ingreso de datos son:
  console.log(inputText.value, checkbox.checked, options.value);
  if (checkbox.checked) {
    alert('hola como estas');
  }
  // se puede cambiar el valor del input:
  inputText.value = 'Ada';
});

//focus para cuando el input tiene la atencion,titila el cursor
inputText.addEventListener('focus', () => {
  console.log('Focus,Hola como estas');
});

// es cuando se pierde el focus
inputText.addEventListener('blur', () => {
  console.log('Blur,Me despido');
});

//inputText.value el atributo value, es el valor del input

// input se dispara/ejecuta la accion cuando se cambia el valor del input,ej copio/pego ,toco tecla,etc
inputText.addEventListener('input', () => {
  console.log('Input', inputText.value);
  title.textContent = inputText.value;
});

// change se dispara/ejecuta la accion cuando se cambia el valor del input pero lo usuario confirma,para esto el usuario apreta el entre o el tab
inputText.addEventListener('change', () => {
  console.log('change', inputText.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('El formulario ha sido enviado');
});
