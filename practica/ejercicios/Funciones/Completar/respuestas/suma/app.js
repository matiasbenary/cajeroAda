/*

sumar(a, b)

Crear una función `sumar` que tome como argumentos dos números y devuelva la suma de ellos
 
sumar(2, 3); // 5
sumar(1.2, 3.4); // 4.6
sumar(3, -5); // -2
*/

const sumar = (a,b) => a + b;

/*
const sumar = (a,b) => {
  return a + b;
}
*/


//const numeroA = Number(prompt('Ingrese el numero'));
//const numeroB = Number(prompt('Ingrese el numero'));
const solucion = sumar(10,15);
//const solucion1 = sumar(numeroA, numeroB)
//console.log(`La solucion es ${solucion1}`);

console.log(solucion,sumar(2, 3),sumar(1.2, 3.4),sumar(3, -5));


/*
`multiplicar(a, b)`

Crear una función `multiplicar` que tome como argumentos dos números y devuelva la multiplicación de ellos

```javascript
multiplicar(2, 3); // 6
multiplicar(4, 0.5); // 2
```

*/
// Los parametros opciones son un valor que tienen por defecto los parametros de la funcion,estos se escriben de derecha a izquierda.Se pueden utilizar como una configuracion habitual
const conversor = (temp , unidad = "F",presion = 19 ,humedad = 20 )=>{
  //implementacion falta
  return `La temperatura es:${temp} en ${unidad} presion:${presion} humedad:${humedad}`
}
console.log(
  conversor(15),
  conversor(30,"C"),
  conversor(45,"C",78),
  conversor(30,"C",56,28),
);





const multiplicar = (numeroA,numeroB) => numeroA * numeroB;


console.log("multiplicar",multiplicar(2, 3),multiplicar(4, 0.5));