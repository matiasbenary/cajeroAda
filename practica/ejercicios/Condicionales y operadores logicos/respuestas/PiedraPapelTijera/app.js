/*
jugarPiedraPapelTijera(a, b)`

Crear una función `jugarPiedraPapelTijera` que tome como argumentos dos strings `a` y `b` que representen una jugada (`piedra`, `papel`, `tijera`) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)


jugarPiedraPapelTijera('tijera', 'piedra'); // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera'); // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra'); // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel'); // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera'); // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel'); // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra'); // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel'); // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera'); // ¡Empate!

1. ingresa piedra
  a.papel -> papel gana
  b.tijera -> piedra gana
  c.piedra -> empate
2. ingresa papel
  a.papel -> empate
  b.tijera -> tijera gana
  c.piedra -> papel gana
3. ingresa tijera
  a.papel -> tijera gana
  b.tijera -> empate
  c.piedra -> piedra gana

1. ingresa piedra
  a.papel -> papel gana
  b.tijera -> piedra gana
2. ingresa papel
  b.tijera -> tijera gana
  c.piedra -> papel gana
3. ingresa tijera
  a.papel -> tijera gana
  c.piedra -> piedra gana

Si la tijera gana es porque 
jugadorA == "tijera" && jugardorB =="papel" 
jugadorA == "papel" && jugardorB=="tijera"

si la piedra gana es porque
jugadorA == "tijera" && jugardorB =="piedra"  
jugadorA == "piedra" && jugardorB=="tijera"

si el papel gana es porque
jugadorA == "papel" && jugardorB=="piedra"
jugadorA == "piedra" && jugardorB=="papel"

----------------------------------------------------------------
empates podes decir cuando jugadorA == jugardorB
tijera gana jugadorA == "tijera" && jugardorB =="papel" || jugadorA == "papel" && jugardorB=="tijera"

 */

const jugarPiedraPapelTijera = (jugadorA,jugardorB)=>{
  if(jugadorA == jugardorB){
    return "¡Empate!"
  }else if(jugadorA == "tijera" && jugardorB =="papel" || jugadorA == "papel" && jugardorB=="tijera"){
    return "¡Ganó tijera!"
  }else if(jugadorA == "tijera" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="tijera"){
    return "¡Ganó piedra!"
  }else if(jugadorA == "papel" && jugardorB =="piedra" || jugadorA == "piedra" && jugardorB=="papel"){
    return "¡Ganó papel!"
  }
}


console.log(jugarPiedraPapelTijera('tijera', 'piedra') ,"¡Ganó piedra!");
console.log(jugarPiedraPapelTijera('piedra', 'tijera') , "¡Ganó piedra!");
console.log(jugarPiedraPapelTijera('papel', 'piedra') , "¡Ganó papel!");
console.log(jugarPiedraPapelTijera('piedra', 'papel') , "¡Ganó papel!");
console.log(jugarPiedraPapelTijera('papel', 'tijera') , "¡Ganó tijera!");
console.log(jugarPiedraPapelTijera('tijera', 'papel') , "¡Ganó tijera!");
console.log(jugarPiedraPapelTijera('piedra', 'piedra') , "¡Empate!");
console.log(jugarPiedraPapelTijera('papel', 'papel') , "¡Empate!");
console.log(jugarPiedraPapelTijera('tijera', 'tijera') , "¡Empate!");

const jugador1 = prompt("ingrese piedra,papel o tijera");
const jugador2 = prompt("ingrese piedra,papel o tijera");
alert(jugarPiedraPapelTijera(jugador1,jugador2));