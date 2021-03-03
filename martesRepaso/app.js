// Variable
// Almaceno un dato en memoria con un nombre
let variable = 4;
console.log(variable); // imprime
variable = variable + 5; // js va tomar 4 de la variable +5
console.log(variable); // 9

const fijo = 5;
//let es para cambiar el valor en tiempo de ejecucion
//const es fijo en todo el programa,me evita problemas

// Primitivos son lo tipos basicos de datos en js
// String => texto
let saludo = 'Hola';
let fecha = '2';
let despido = 'Chau';
let nombre = 'Matias';
/*Concatenar: Es unir variables para dar un formato */
let bienvenida = `${saludo} ${nombre} ,como estas? ${5 + 6}`;
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
//10/2 =5 => 0
//10/3 = 3 => 1
// Conversiones
//fecha es un string
// cuando use el prompt para hacer una cuenta Number
//let saludo = 'Hola';
//let fecha = '2';
let numeroA = Number(fecha);
console.log(numeroA); // => 2
let numeroB = Number(saludo);
console.log(numeroB); // => NaN

//typeof me nombre el tipo de variable
console.log(typeof numeroA, typeof numeroB, typeof fecha);

// Booleanos
// solo puede tomar valores, verdadero o falso
let estaAbierto = true;
let esMayorDe18 = false;
console.log(estaAbierto);
console.log(esMayorDe18);

// 5+5 => 10
// 6>5 => true
//Operaciones de comparacion => devuelve un booleano
// solo Number >=,>,<,<=, para todos ==,!=
// 15 == 15 => true
// 15 != 15 => false
// 16 != 15 => true

// let usuario = "admin"
// usuario == "admin" => true
// let usuario = "admins"
// usuario == "admin" => false

// let usuario = "admin"
// usuario != "admin" => false
// let usuario = "admins"
// usuario != "admin" => true

// === => extritactamente igual,se fija dos cosas que el valor sea igual y que el tipo se igual
// 15 == 15 => true
// 15 === 15 => true
// 15 == '15' => true
// 15 === '15'=> false

console.log(15 == 15, 15 === 15, 15 == '15', 15 === '15');

// !== => extritactamente diferente
// 15 != 15 => false
// 15 !== 15 => false
// 15 != '15' => false
// 15 !== '15'=> true
console.log(15 != 15, 15 !== 15, 15 != '15', 15 !== '15');

const n1 = 15;
const n2 = 16;
const n3 = 17;
// 15 < 32 => true
// n1 < n2 => true
// true < 17  => true

// n1 < n2 => true
// true < n3 => true
//if(n1 < n2  < n3)

// n1 < n2 => true
// n2 < n3 => true
// true && true => true
if (n1 < n2 && n2 < n3) {
  console.log('esta en rango');
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

if (!esEnero) {
  console.log('como estas?');
}

/*
If else se traduce como SI pasa esto hace esto SINO hace esto otro
if(condicional){
  mi codigo
}else{
  incorrecto
}
*/

const user = 'admin';
const pass = 1234569;
if (user == 'admin' && pass == 123456) {
  console.log('bienvenido');
} else {
  console.log('datos incorrectos');
}

if (user == 'admin') {
  if (pass == 123456) {
    console.log('bienvenido');
  } else {
    console.log('pass incorrecto');
  }
} else {
  console.log('usario incorrecto');
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

// Funciones => Una función es un fracmento de codigo que me permite reutilizar mi codigo

function saludar(nombre, apellido, edad) {
  return `Hola ${nombre} ${apellido}, tenes ${edad}`;
}
// 5+5 => 10
// 6>5 => true
// saludar() => Hola ->string

const saludar2 = (nombre, apellido, edad) =>
  `Hola ${nombre} ${apellido}, tenes ${edad}`;

const saludoPersonalizado = saludar2('Matias', 'benary', 26);

alert(saludoPersonalizado);

/*
function nombreFuncion(parametros){
  micodigo
  return(para devolver un valor)
}

const nombreFuncion = (parametros) => {
  micodigo
  return
}

*/
