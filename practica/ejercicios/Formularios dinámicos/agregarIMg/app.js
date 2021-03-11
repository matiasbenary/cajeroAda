/*
Agregar imágenes
Crear una página que:

Tenga un input para la url de la imagen, un botón que diga Agregar imagen y un contenedor flexible donde mostrar imágenes como en una grilla.
Al presionar el botón, si el input no está vacío, se agregue una imagen al contenedor cuyo src es el contenido del input y se borre el contenido del input.
Al hacer click en una imagen, esta se elimine.

1. Obtener elementos del dom 
2. Cuando aprete el boton(evento click) se debe agregar el atributo src a la imagen,borra el input
3. Cuando le hago click a la img se debe elimina o se resetea el src
*/
const inputImg = document.querySelector('#srcImg');
const buttonImg = document.querySelector('#addImg');
const img = document.querySelector('#img');

buttonImg.addEventListener('click', () => {
  // si el input no esta vacio agrega la imagen
  if (inputImg.value != '') {
    img.src = inputImg.value;
    inputImg.value = '';
  } else {
    console.log('Ingreso un src vacia');
  }
});

img.addEventListener('click', () => {
  img.src = '';
});
