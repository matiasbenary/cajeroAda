/*
`gritar(str)`

Crear una función `gritar` que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo


gritar('hola'); // ¡hola!
gritar('aaaaaa'); // ¡aaaaaa!

 */

const gritar = (palabra) => `¡${palabra}!`;
console.log(gritar('hola'),gritar('aaaaaa'));

/*
`obtenerNombreCompleto(nombre, apellido)`

Crear una función `obtenerNombreCompleto` que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

obtenerNombreCompleto('Ada', 'Lovelace'); // 'Ada Lovelace'
*/

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(obtenerNombreCompleto('Ada', 'Lovelace'));

/*
`saludar(nombre)`

Crear una función `saludar` que tome como argumentos un nombre y devuelva un saludo que lo incluya.

saludar('Ada'); // 'Hola Ada, un gusto conocerte'
*/

const saludar = (nombre) => `Hola ${nombre}, un gusto conocerte`;
console.log(saludar('Ada'));

/*
saludarGritando(nombre, apellido)`

Usando las funciones anteriores (`obtenerNombreCompleto`, `saludar` y `gritar`), crear una función `saludarGritando` que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

```javascript
saludarGritando('Ada', 'Lovelace'); // ¡Hola Ada Lovelace, un gusto conocerte!
```

**TIP:** recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

```javascript
const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace');
const saludo = saludar(nombreCompleto);
const grito = gritar(saludo);
console.log(grito); // ¡Hola Ada Lovelace, un gusto conocerte!
```

*/
// "Ada" "Lovelace" ->ingresa a mi función
// "Ada Lovelace" -> despues de usar nombre completo
// "Hola Ada Lovelace, un gusto conocerte" -> despues de saludar
// "¡Hola Ada Lovelace, un gusto conocerte!" -> despues de gritar
/*
const saludar = (nombre) => `Hola ${nombre}, un gusto conocerte`;
console.log(saludar('Ada'));

const obtenerNombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(obtenerNombreCompleto('Ada', 'Lovelace'));

const gritar = (palabra) => `¡${palabra}!`;
console.log(gritar('hola'),gritar('aaaaaa'));
*/


const saludarGritando = (nombre,apellido) => {
  
  const nombreCompleto = obtenerNombreCompleto(nombre, apellido);//"Ada Lovelace"
  const saludo = saludar(nombreCompleto);//"Hola Ada Lovelace, un gusto conocerte"
  const grito = gritar(saludo);
  return grito;
}
/*
const saludarGritando = (nombre,apellido) => gritar(saludar(obtenerNombreCompleto(nombre, apellido)));
*/

console.log(saludarGritando('Ada', 'Lovelace'));

const caluladora = (cuenta,a, b ) =>{
  console.log(cuenta);
  const resultado = cuenta(a,b);
  console.log(resultado);
  //alert(resultado);
}

const multiplicar = (numeroA,numeroB)=>numeroA*numeroB;
const sumar = (a,b) => a+b;
const concatenar = (a,b) => `Se ingreso ${a},${b} `;
caluladora(multiplicar,10,20);
caluladora(sumar,10,20);
caluladora(concatenar,10,20);
caluladora((a,b)=>a/b,10,20);