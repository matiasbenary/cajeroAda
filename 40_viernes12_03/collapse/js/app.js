const boton = document.getElementById('boton');
const content = document.getElementById('content');

boton.addEventListener('click', () => {
  // Si tiene la clase acordeon-boton--active se la quita
  // si no la tiene se la agrega
  boton.classList.toggle('acordeon-boton--active');
  // me retorno un booleano si tieno o no la clase
  if (boton.classList.contains('acordeon-boton--active')) {
    content.style.maxHeight = '150px';
    content.style.backgroundColor = 'red';
  } else {
    content.style.maxHeight = '0';
  }
});
