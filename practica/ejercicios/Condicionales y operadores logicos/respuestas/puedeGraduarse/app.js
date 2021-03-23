/*

Crear una función `puedeGraduarse` que tome como argumentos dos números `asistencia` y `materiasAprobadas` y un booleano `tesisAprobada`, y devuelva `true` si una persona puede gruadarse o `false` si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

```javascript
puedeGraduarse(80, 50, true); // true
puedeGraduarse(80, 50, false); // false
puedeGraduarse(80, 45, true); // false
puedeGraduarse(80, 45, false); // false
puedeGraduarse(65, 50, true); // false
puedeGraduarse(33, 55, false); // false
puedeGraduarse(42, 45, true); // false
puedeGraduarse(28, 45, false); // false
```
 
definimos la función
1.reviso si la asistencia es mayor igual 75%
2.reviso la materias aprobadas son mayor a 50
3.Y la tesis aprobada es verdadero
Si todas las condiciones son verdaderas retorno un true
sino retorno un false
*/

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>
// 80, 50, true
// 80 >= 75 && 50 >= 50 && true;
// true && 50 >= 50 && true;
// true && true && true;
// true && true;
// true 

// 33, 55, false
// 33 >= 75 && 55 >= 50 && false;
// false 

// 80, 45, true
// 80 >= 75 && 45 >= 50 && true
// true && 45 >= 50 && true
// true && false && true
// false

// 80, 50, false
// 80 >= 75 && 50 >= 50 && false
// false
  asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada;

console.log(puedeGraduarse(80, 50, true), true);
console.log(puedeGraduarse(80, 50, false), false);
console.log(puedeGraduarse(80, 45, true), false);
console.log(puedeGraduarse(80, 45, false), false);
console.log(puedeGraduarse(65, 50, true), false);
console.log(puedeGraduarse(33, 55, false), false);
console.log(puedeGraduarse(42, 45, true), false);
console.log(puedeGraduarse(28, 45, false), false);
