/*
### `tienenMismaLongitud(a, b)`

Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b` y devuelva `true` si tienen la misma longitud o `false` de lo contrario

```javascript
tienenMismaLongitud('javascript', 'java') // false
tienenMismaLongitud('manzana', 'cerveza') // true
```
*/

const tienenMismaLongitud = (a, b) => {
  /* 13+34 -> 47
   "a" + "b" -> "ab"
   13>12->true*/
  /* 
  1.
  if(a.length == b.length){
    return true;
  }else{
    return false;
  }
2.
  if(a.length == b.length){
    return true;
  }
  return false;
  */

//3.
  return a.length == b.length
}
const sumafija = (a,b) => a+b;



console.log(tienenMismaLongitud('javascript', 'java')) // false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true