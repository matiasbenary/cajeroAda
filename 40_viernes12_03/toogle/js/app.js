/* ----------------------------- Toggle ----------------------------- */

const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');

checkbox.addEventListener('change', () => {
  body.classList.toggle('dark');
});
