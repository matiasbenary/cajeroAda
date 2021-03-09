// titulo para escribir lo del input
const titulo = document.querySelector('#titulo'); // va a ser ingreso de datos
const input = document.querySelector('#input'); // va ser el que ejecute la accion
const button = document.querySelector('#button');
changeTitle = (event) => {
  event.preventDefault();
  console.log(input.value);
  titulo.textContent = input.value;
};
button.addEventListener('click', changeTitle);
