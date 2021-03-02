/*
**🔢 Número par o impar**
- Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par o impar.
*/

// Para saber si es par o impar puedo hacer modulo/resto de 2 si este es 0 es par sino impar

// Para hacer pruebas rapido,ya que el usuario no ingresa un numero,me permite probar de forma mas rapida
// me ahorro tiempo de desarrollo
// const numero = 14;
// Para cuando termino el codigo,me permite que el usuario ingrese
// es funcional en proccion
// const numero = Number(prompt("ingrese numero"));
// cambiar uno por otra cuando termino,me permite

const numero = 14;
// numero % 2 si es cero es par
if (numero % 2 == 0) {
  alert('Es par');
} else {
  //sino es impar
  alert('Es impar');
}
