/*
sonIguales(a, b)
Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

sonIguales('javascript', 'JavaScript') // true
sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') // false
*/
// a ==  b

// casa == casa => true
// "CaSa" == "casa" => false

// javascript.toUpperCase() => JAVASCRIPT
// JavaScript.toUpperCase() => JAVASCRIPT
const sonIguales = (a,b)=>{
  return a.toUpperCase() == b.toUpperCase();
}

