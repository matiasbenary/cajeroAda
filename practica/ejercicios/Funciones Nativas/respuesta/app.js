//Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b` y devuelva `true` si tienen la misma longitud o `false` de lo contrario

const tienenMismaLongitud = (a,b) => a.length == b.length;

console.log("tienenMismaLongitud",
tienenMismaLongitud('javascript', 'java'),
false); // false
console.log(tienenMismaLongitud('manzana', 'cerveza'),"tienenMismaLongitud" ,true);// true

//Crear una función `esUltimoCaracter` que tome como argumentos una `palabra` y un `caracter` y devuelva `true` si la `palabra` termina con el `caracter` o `false` de lo contrario

const esUltimoCaracter = (palabra,caracter) =>{
  if(palabra.slice(-1) == caracter){
    return true;
  }else{
    return false;
  }
}
//console.log('lovelace'.slice(-1));
console.log("esUltimoCaracter",esUltimoCaracter('lovelace', 'e'),true); // true
console.log("esUltimoCaracter",esUltimoCaracter('lovelace', 'l'),false); // false


//Crear una función `esValida` que tome como argumento una `contrasenia` (string) y devuelva `true` si tiene 8 caracteres o más o `false` si tienen menos de 8 caracteres

const esValida = (contrasenia) => {
  if(contrasenia.length >= 8){
    return true
  }else{
    return false;
  }
}

console.log("esValida",esValida('contraseniaMuySegura'),true) // true
console.log("esValida",esValida('abc123') ,false)// false

//Crear una función `sonIguales` que tome como argumentos dos strings `a` y `b` y devuelva `true` si ambos strings tienen el mismo contenido independientes del caso y `false` en caso contrario.

const sonIguales = (a,b) => {
  if(a.toLowerCase() == b.toLowerCase()){
    return true;
  }else{
    return false;
  }
}
// const datoA = prompt('ingrese datoA');
// const datoB = prompt('ingrese datoB');
// console.log("prueba prompt",sonIguales(datoA, datoB));
console.log("sonIguales",sonIguales('javascript', 'JavaScript'),true); // true
console.log("sonIguales",sonIguales('AdA LoVeLaCe', 'Ada Lovelace'),true); // true
console.log("sonIguales",sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'),false); // false

//Crear una función `burlarse` que tome como argumento un string `str` y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// 4 + 4 = 8
// "murcielago".replaceAll("a","i"); => "murcieligo"
/*
const burlarse = (str) =>{
  return str.replaceAll("a","i").replaceAll("e","i").replaceAll("o","i").replaceAll("u","i");
  //'progrimir es dificil,murcieligo';
  //'progrimir is dificil,murciiligo';
  //'prigrimir is dificil,murciiligi';
  //'prigrimir is dificil,mirciiligi';
}
*/
/*
const burlarse = (str) =>{
   let string = str.replaceAll("a","i");//'progrimir es dificil,murcieligo' 
   string =  string.replaceAll("e","i") //'progrimir is dificil,murciiligo';
   string =  string.replaceAll("o","i") //'progrimir is dificil,murciiligo';
   string =  string.replaceAll("u","i") //'progrimir is dificil,murciiligo';
   return string;
 }
*/
/*
La expresiones regulares regex,se escriben entre / entre ambas barra colocolo que quiero buscar

[] coloco un grupo de busqueda,ej: [aeou] solo busca volcales menos la i
tenemos los flag que van despues de la barra,estos cambian el comportamiento de busqueda
g: busca todas la incidencia
i: ignora entre mayuscala y minuscula
*/
const burlarse = (str) =>{
  return str.replace(/[aeou]/gi,"i");
}

console.log("burlarse",burlarse('prOgrAmar es dificil,murcielago')); // 'prigimir is dificil'

/*
Crear una función `aHackerSpeak` que tome como argumento un string `str` y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:


- Las i se transforman en 1
- Las e se transforman en 3
- Las a se transforman en 4
- Las s se transforman en 5
- Las 0 se transforman en 0


aHackerSpeak('javascript') // 'j4v45cr1pt'
aHackerSpeak('soy una hacker') // '50y un4 h4ck3r'
aHackerSpeak('ADA LOVELACE') // '4D4 L0V3L4C3'
*/
/*
const aHackerSpeak = (str) =>{
  // javascript
  // javascr1pt
  let string = str.replaceAll("i","1");
  string = string.replaceAll("e","3");
  string = string.replaceAll("a","4");
  string = string.replaceAll("s","5");
  string = string.replaceAll("o","0");
  string = string.replaceAll("I","1");
  string = string.replaceAll("E","3");
  string = string.replaceAll("A","4");
  string = string.replaceAll("S","5");
  string = string.replaceAll("O","0");
  return string;
}
*/
/*
const aHackerSpeak = (str) =>{

  let string = str.replace(/i/gi,"1");
  string = string.replace(/e/gi,"3");
  string = string.replace(/a/gi,"4");
  string = string.replace(/s/gi,"5");
  string = string.replace(/o/gi,"0");

  return string;
}
*/

const aHackerSpeak = (str) => str.replace(/i/gi,"1")
  .replace(/e/gi,"3")
  .replace(/a/gi,"4")
  .replace(/s/gi,"5")
  .replace(/o/gi,"0");


console.log("aHackerSpeak",aHackerSpeak('javascript'),'j4v45cr1pt');
console.log("aHackerSpeak",aHackerSpeak('soy una hacker'),'50y un4 h4ck3r');
console.log("aHackerSpeak",aHackerSpeak('ADA LOVELACE'),'4D4 L0V3L4C3');


//Crear una función `ocultarContraseña` que tome como argumento una `contrasenia` de solo numeros y devuelva un string con dicha contraseña ocultada con astericos `*`, es decir, un string con la misma longitud donde todos sus caracteres son astericos

// const ocultarContrasenia = (contrasenia) =>{
//   return contrasenia.toString().replaceAll("0","*")
//   .replaceAll("1","*")
//   .replaceAll("2","*")
//   .replaceAll("3","*")
//   .replaceAll("4","*")
//   .replaceAll("5","*")
//   .replaceAll("6","*")
//   .replaceAll("7","*")
//   .replaceAll("8","*")
//   .replaceAll("9","*")
// }

// con un guion medio puedo escribir un rango sin escribir todos sus elementos
const ocultarContrasenia = (contrasenia) =>{
  return contrasenia.toString().replace(/[0-9]/g,"*")
}


console.log("ocultarContrasenia",ocultarContrasenia(123456) , '******')
console.log("ocultarContrasenia",ocultarContrasenia(111222333) ,'*********')

//Crear una función `removerVocales` que tome como argumento un string `str` y devuelva un string con todas sus vocales removidas

const removerVocales = (str) =>{
  return str.replace(/[aeiou]/gi,"");
}


console.log("removerVocales",removerVocales('javascript') ,'jvscrpt');
console.log("removerVocales",removerVocales('ada lovelace') ,'d lvlc');


//Crear una función `obtenerPrimeraOracion` que tome como argumento un string `str` y la primera oración de dicho string

const obtenerPrimeraOracion = (str) =>{
  //str = 'Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'
  //punto = 22
  //string = 'Tengo varias oraciones.'
  //str = 'A mí no me preguntes, sólo soy una oración') ,'A mí no me preguntes, sólo soy una oración'
  //punto = -1
  //string = 'Tengo varias oraciones.'
  const punto = str.indexOf(".");
  if(punto >=0){
    return str.slice(0,punto+1);
  }
  return str;
}

console.log("obtenerPrimeraOracion",obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') ,'A mí no me preguntes, sólo soy una oración');
console.log("obtenerPrimeraOracion",obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') , 'Tengo varias oraciones.');