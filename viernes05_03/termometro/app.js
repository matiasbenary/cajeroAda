/*
https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/17-dom.md
Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo
*/

const temperaturaIngresada = Number(prompt('Ingrese la temperatura'));
//const temperaturaDom = document.getElementById("#temperatura");
const temperaturaDom = document.querySelector('#temperatura');
let color = '';
//45
if (temperaturaIngresada < 0) {
  color = 'azul';
} else if (temperaturaIngresada >= 0 && temperaturaIngresada < 15) {
  color = 'celeste';
} else if (temperaturaIngresada >= 15 && temperaturaIngresada < 25) {
  color = 'verde';
} else if (temperaturaIngresada >= 25 && temperaturaIngresada < 30) {
  color = 'amarillo';
} else if (temperaturaIngresada >= 30 && temperaturaIngresada < 35) {
  color = 'naranja';
} else {
  color = 'rojo';
}

temperaturaDom.classList.add(color);
temperaturaDom.textContent = `Temperatura: ${temperaturaIngresada} ${color}`;
