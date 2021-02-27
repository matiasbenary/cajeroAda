//ingresar datos
//prompt('hola');
// imprimir datos
//alert('Hola');
console.log('hola');

// Variable
// Es una espacio en la memoria,que almacena un dato y esta puede cambiar
// izquierda almacena, despues viene un solo igual(asignacion),derecha el valor que quiero guardar.

// variable = 4
// imprimir lo que hay en variable,entonces js va revisar que hay en variable,en variable hay un 4
// en variable guardame lo que hay en variable + 5
// js va fijarse que en variable hay un 4 y le va sumar 5
// para guardar un 9 en variable

let variable = 4;
console.log(variable);
variable = variable + 5;
console.log(variable);

const fijo = 5;

// let y const se usan para definir una variable
// let me permite cambiar el valor del dato
// const si cambio el valor me va da error

// Primitivos son lo tipos basicos de datos en js
// String => texto
let saludo = 'Hola';
let fecha = '2';
let despido = 'Chau';
let nombre = 'Matias';
let bienvenida = `$\{${saludo} ${nombre} ,como estas? ${5 + 6}`;
let bienvenida2 = saludo + ' ' + nombre + ',como estass? ' + (5 + 6);
console.log({ saludo, despido, nombre, bienvenida, bienvenida2 });

//Number => inter
let entero = 23;
let flotante = 23.4;

// NaN => no es un numero,se aprece cuando hago una operacion erronea
let notAtNumber = NaN;
// No hay numero mas grande que este o no hay numero mas chico que este
let infinito = Infinity;
let infinitoNegativo = -Infinity;

// Operaciones
// Aritmetica +-*/ %(resto o modulo y es lo que sobra de una divicion)

// Conversiones
//fecha es un string
// cuando use el prompt para hacer una cuenta Number
let numeroA = Number(fecha);
console.log(numeroA);
let numeroB = Number(saludo);
console.log(numeroB);

//typeof me nombre el tipo de variable
console.log(typeof numeroA, typeof numeroB, typeof fecha);

// Booleanos
// solo puede tomar valores, verdadero o falso
let estaAbierto = true;
let esMayorDe18 = false;
console.log(estaAbierto);
console.log(esMayorDe18);

//Operaciones de comparacion => devuelve un booleano
// solo Number >=,>,<,<=, para todos ==,
//!=
// 15 == 15 => true
// 15 != 15 => false
// 16 != 15 => true
// ===
// 15 == 15 => true
// 15 === 15 => true
// 15 == '15' => true
// 15 === '15'=> false

console.log(15 == 15, 15 === 15, 15 == '15', 15 === '15');

// !==
// 15 != 15 => false
// 15 !== 15 => false
// 15 != '15' => false
// 15 !== '15'=> true
console.log(15 != 15, 15 !== 15, 15 != '15', 15 !== '15');


const n1 = 15;
const n2 = 16; 
const n3 = 17;
// n1 < n2 => true
// true < n3 => true
//if(n1 < n2  < n3)

if(n1 < n2 && n2 < n3){
  console.log("esta en rango");
}


// Operaciones logicas => operaciones entre booleanos

// And , "Y" quiere decir que todas las condiciones tiene que ser verdaderas para que el resultado sea verdadero
// user == "admin" && pass == 123456
// user = "admin"
// pass = 123456
// admin == admin => true
// 123456 == 123456 => true
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// si se escribe mal el user o pass dara falso el resultado

// Or , "o" quiere decir que si unos de lo elementos de la sentencia es verdadera toda la sentencia es verdadera
// EJ para ir al cine la pelicula requiere que tenga mas de 18 "O" esta acompaniado por un mayor
// sosMayor || estaAcompaniado
// true || true => true
// true || false => true
// false || true => true
// false || false => false

// Negacion => es alternar el valor de la condicion
// !true => false
// !false => true

// && and
// || or
// ! negacion

// Condicionales
// Me permite tomar decisiones de que camino va a tomar mi codigo
// IF significa si en castellano
/* 
if(condicion => va esperar un boleano){
  aca va mi codigo,que se ejecuta cuando sea correcto
}

*/

let esEnero = false;
let esFebrero = true;
if (esEnero || esFebrero) {
  console.log('Hola');
}

/*
If else se traduce como SI pasa esto hace esto SINO hace esto otro
if(condicional){
  mi codigo
}else{
  incorrecto
}
*/
const user = "admin";
const pass = 1234569;
if(user == "admin" && pass == 123456){
  console.log("bienvenido");
}else{
  console.log("datos incorrectos");
}

if(user == "admin"){
  if(pass == 123456){
    console.log("bienvenido");
  }else{
    console.log("pass incorrecto");
  }
}else{
  console.log("usario incorrecto");
}

/*
if(condicon){
  mi codigo
}else if(otra condicion){
  otro codigo
}else{
  resto
}
*/


