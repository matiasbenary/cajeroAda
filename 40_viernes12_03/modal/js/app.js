/* ----------------------------- Modal ----------------------------- */

const cerrar = document.getElementById('close');
const abrir = document.getElementById('cta');
const modal = document.getElementById('modal');
const modalContainer = document.getElementById('modal-container');

abrir.addEventListener('click', (e) => {
  e.preventDefault();
  modalContainer.style.opacity = '1';
  modalContainer.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', () => {
  modal.classList.toggle('modal-close');
  modalContainer.style.opacity = '0';
  modalContainer.style.visibility = 'hidden';
});
