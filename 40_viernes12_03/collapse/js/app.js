const boton = document.getElementById('boton');
const content = document.getElementById('content');

boton.addEventListener('click', () => {
  boton.classList.toggle('acordeon-boton--active');
  if (boton.classList.contains('acordeon-boton--active')) {
    content.style.maxHeight = '150px';
  } else {
    content.style.maxHeight = '0';
  }
});
