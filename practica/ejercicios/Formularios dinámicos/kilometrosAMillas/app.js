/*
Kilómetros a Millas
Crear una página que:

Tenga dos inputs, uno para el valor de kilómetros y otro para el de millas.
Cuando se modifica alguno de los dos inputs, el otro cambie automáticamente, realizando la conversión adecuada. Tener en cuenta que kilómetro es 0.62 millas, y una milla es 1.61 kilómetros.

1. obtener elemento del DOM involucrados
2. cuando cambia el primer input cambiar el valor del segundo
3. Idem anterior
*/

const inputKm = document.querySelector('#inputKm');
const inputMillas = document.querySelector('#inputMillas');
// 1km -> 0.62 millas
inputKm.addEventListener('input', () => {
  inputMillas.value = Number(inputKm.value) * 0.62;
});

// 1km -> 1.61
inputMillas.addEventListener('input', () => {
  inputKm.value = Number(inputMillas.value) * 1.61;
});
