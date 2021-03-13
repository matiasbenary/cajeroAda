/*
Crear una página que:

- Tenga un `input` para la url de la imagen, un `input` para el título, un `textarea` para la descripción, un `input` para la url externo y un `checkbok` que diga `Link externo`
- Tenga una card simple y estilizada con: imagen, título, descripción, y un link que diga `Ver más`.
- A medida que se modifiquen los campos, se modifique respectivamente los distintos elementos de la card.
- Si el `checkbox` no está seleccionado, el link `Ver más` no se muestre y el `input` de la url externa se deshabilite.
- Si el `checkbox` está seleccionado, el link `Ver más` se muestre y el `input` de la url externa se habilite.

1. Crear Input necesario en el html -> listo
2. Crear el esqueleto de card en el html -> listo
3. Crear constantes para cada elemento que uso en mi html ->listo 
4. Vamos a crear un evento para cada input que este ligado a una parte de la card que voy a usar
5.Si esta checked
      link de ver mas se ve
      input de ver mas se habilitado
  sino 
      no de sebe ver el link de ver mas
      input de ver mas se deshabilita
*/

// Inputs
const inputImg = document.querySelector('#inputImg');
const inputTitulo = document.querySelector('#inputTitulo');
const inputDescripcion = document.querySelector('#inputDescripcion');
const inputUrl = document.querySelector('#inputUrl');
const inputCheck = document.querySelector('#inputCheck');

// card
const titulo = document.querySelector('#titulo');
const img = document.querySelector('#img');
const descripcion = document.querySelector('#descripcion');
const verMas = document.querySelector('#url');

inputTitulo.addEventListener('input', () => {
  titulo.textContent = inputTitulo.value;
});

inputDescripcion.addEventListener('input', () => {
  descripcion.textContent = inputDescripcion.value;
});

inputImg.addEventListener('input', () => {
  img.src = inputImg.value;
});

inputUrl.addEventListener('input', () => {
  verMas.href = inputUrl.value;
});

/*
Si esta checked
      link de ver mas se ve
      input de ver mas se habilitado
  sino 
      no de sebe ver el link de ver mas
      input de ver mas se deshabilita
*/
inputCheck.addEventListener('input', () => {
  console.log('hola');
  if (inputCheck.checked) {
    console.log('checkeado');
    verMas.style = 'display:block;';
    inputUrl.disabled = false;
  } else {
    console.log('sin checkear');
    verMas.style = 'display:none;';
    inputUrl.disabled = true;
  }
});
