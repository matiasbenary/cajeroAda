/*`esPar(numero)`

Crear una función `esPar` que tome como argumento un número y devuelva `true` si dicho números es par o `false` si no lo es

**TIP**: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

esPar(2); // true
esPar(3); // false
*/
// 10/2 5 -> 0
// 11/2 5 -> 1 
// 12/2 6 -> 0
// 13/2 6 -> 1

// 10/3 3 -> 1

// = -> guardar o asignacion
//                   2 +  2 -> 4 
// == -> comparacion 2 == 2 ->true  2 == "2"->true
// === -> comparacion estricta 2 === "2"->false 2 === 2 ->true
/*
const esPar = (numero)=>{
  // 0 == 0 => true
  // 1 == 0 => false
  if(numero % 2 == 0){
    return true;
  }
  //
  return numero % 2 == 0;
}*/
const esPar = (numero)=> numero % 2 == 0;


console.log(esPar(2),esPar(3));

// false true => 
//const esImpar = (numero) => numero % 2 == 1;
const esImpar = (numero) => !esPar(numero);
console.log(esImpar(2),esImpar(3));
