// Crear una función `tienenMismaLongitud` que tome como argumentos dos strings `a` y `b` y devuelva `true` si tienen la misma longitud o `false` de lo contrario
const tienenMismaLongitud = (a, b) => a.length === b.length;

console.log(
  "tienenMismaLongitud('javascript', 'java')",
  tienenMismaLongitud('javascript', 'java')
); // false
console.log(
  "tienenMismaLongitud('manzana', 'cerveza')",
  tienenMismaLongitud('manzana', 'cerveza')
); // true

// Crear una función `esUltimoCaracter` que tome como argumentos una `palabra` y un `caracter` y devuelva `true` si la `palabra` termina con el `caracter` o `false` de lo contrario
const esUltimoCaracter = (palabra, caracter) => palabra.slice(-1) === caracter;

console.log(
  "esUltimoCaracter('lovelace', 'e')",
  esUltimoCaracter('lovelace', 'e')
); // true
console.log(
  "esUltimoCaracter('lovelace', 'f')",
  esUltimoCaracter('lovelace', 'f')
); // false

// Crear una función `esValida` que tome como argumento una `contrasenia` (string) y devuelva `true` si tiene 8 caracteres o más o `false` si tienen menos de 8 caracteres
const esContraseniaValida = (contrasenia) => contrasenia.length >= 8;

console.log(
  "esContraseniaValida('contraseniaMuySegura')",
  esContraseniaValida('contraseniaMuySegura')
); // true
console.log("esContraseniaValida('abc123')", esContraseniaValida('abc123')); // false

// Crear una función `sonIguales` que tome como argumentos dos strings `a` y `b` y devuelva `true` si ambos strings tienen el mismo contenido independientes del caso y `false` en caso contrario.
const sonIguales = (a, b) => a.toLowerCase() === b.toLowerCase();

console.log(
  "sonIguales('javascript', 'JavaScript')",
  sonIguales('javascript', 'JavaScript')
);
console.log(
  "sonIguales('AdA LoVeLaCe', 'Ada Lovelace')",
  sonIguales('AdA LoVeLaCe', 'Ada Lovelace')
);
console.log(
  "sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')",
  sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')
);

//Crear una función `contarPalabras` que tome como argumento un string `str` y devuelva la cantidad de palabras que posee

const burlarse = (str) =>
  str
    .replaceAll('a', 'i')
    .replaceAll('e', 'i')
    .replaceAll('o', 'i')
    .replaceAll('u', 'i');

console.log(
  "burlarse('programar es dificil')",
  burlarse('programar es dificil')
);

// Crear una función `esFraccionMayorAUno` que tome como argumento un string `fraccion` (en el formato `'numerador/denominador'`) y devuelva `true` si dicha fracción es mayor a 1 o `false` de lo contrario
const esFraccionMayorAUno = (fraccion) =>
  Number(fraccion.slice(0, fraccion.indexOf('/'))) /
    Number(fraccion.slice(fraccion.indexOf('/') + 1)) >
  1;

console.log("esFraccionMayorAUno('1/2')", esFraccionMayorAUno('1/2'));
console.log("esFraccionMayorAUno('2/2')", esFraccionMayorAUno('2/2'));
console.log("esFraccionMayorAUno('4/2')", esFraccionMayorAUno('4/2'));

// Crear una función `capitalizar` que tome como argumento un string `str` y devuelva el mismo string con la primera letra en mayúscula
const capitalizar = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);

console.log("capitalizar('lovelace')", capitalizar('lovelace'));
console.log("capitalizar('había una vez...')", capitalizar('había una vez...'));

// Crear una función `aHackerSpeak` que tome como argumento un string `str` y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
const aHackerSpeak = (str) =>
  str
    .replaceAll('i', '1')
    .replaceAll('e', '3')
    .replaceAll('a', '4')
    .replaceAll('s', '5')
    .replaceAll('o', '0')
    .replaceAll('I', '1')
    .replaceAll('E', '3')
    .replaceAll('A', '4')
    .replaceAll('S', '5')
    .replaceAll('O', '0');

console.log("aHackerSpeak('javascript')", aHackerSpeak('javascript'));
console.log("aHackerSpeak('soy una hacker')", aHackerSpeak('soy una hacker'));
console.log("aHackerSpeak('ADA LOVELACE')", aHackerSpeak('ADA LOVELACE'));

// Crear una función `obtenerPrimeraOracion` que tome como argumento un string `str` y la primera oración de dicho string
const obtenerPrimeraOracion = (str) => {
  if (str.indexOf('.') >= 0) return str.slice(0, str.indexOf('.') + 1);
  else return str;
};

console.log(
  "obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración.')",
  obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración.')
);
console.log(
  "obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')",
  obtenerPrimeraOracion(
    'Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.'
  )
);

// Crear una función `ocultarContraseña` que tome como argumento una `contrasenia` de solo numeros y devuelva un string con dicha contraseña ocultada con astericos `*`, es decir, un string con la misma longitud donde todos sus caracteres son astericos
const ocultarContrasenia = (contrasenia) =>
  contrasenia
    .toString()
    .replaceAll('1', '*')
    .replaceAll('2', '*')
    .replaceAll('3', '*')
    .replaceAll('4', '*')
    .replaceAll('5', '*')
    .replaceAll('6', '*')
    .replaceAll('7', '*')
    .replaceAll('8', '*')
    .replaceAll('9', '*')
    .replaceAll('0', '*');

console.log('ocultarContrasenia(123456)', ocultarContrasenia(123456));
console.log('ocultarContrasenia(111222333)', ocultarContrasenia(111222333));

// Crear una función `espaciarCaracteres` que tome como argumento un string `str` y devuelva un string con todas sus vocales removidas
const removerVocales = (str) =>
  str
    .replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '');

console.log("removerVocales('javascript')", removerVocales('javascript'));
console.log("removerVocales('ada lovelace')", removerVocales('ada lovelace'));

// Crear una función `obtenerExtension` que tome como argumento un string `archivo` con el formato 'nombre.extension' y devuelva la extensión del archivo

const obtenerExtension = (archivo) => archivo.slice(archivo.indexOf('.') + 1);

console.log("obtenerExtension('imagen.png')", obtenerExtension('imagen.png'));
console.log("obtenerExtension('index.html')", obtenerExtension('index.html'));
console.log("obtenerExtension('notas.txt')", obtenerExtension('notas.txt'));

// Crear una función `esPuenteSeguro` que tome como string un `puente` que consista en caracteres numerales y espacios y devuelva `false` si el `puente` está cortado (tiene espacios) o `true` si está entero y es seguro atravesar
const esPuenteSeguro = (puente) => puente.indexOf(' ') < 0;

console.log("esPuenteSeguro('### ##')", esPuenteSeguro('### ##'));
console.log("esPuenteSeguro('##### ####')", esPuenteSeguro('##### ####'));
console.log("esPuenteSeguro('########')", esPuenteSeguro('########'));

// `Reddit` es una red de comunidades en la que cada comunidad se conocer como `subreddit`. Crear una función `obtenerSubreddit` que tome como argumento un string `url` que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

const obtenerSubreddit = (url) => url.slice(url.indexOf('/r/') + 3, -1);

console.log(
  "obtenerSubreddit('https://www.reddit.com/r/javascript/')",
  obtenerSubreddit('https://www.reddit.com/r/javascript/')
);
console.log(
  "obtenerSubreddit('https://www.reddit.com/r/aww/')",
  obtenerSubreddit('https://www.reddit.com/r/aww/')
);

// Crear una función `convertirEnAcronimo` que tome como argumento un string `str` y un string con todos los caracteres en mayúscula y separados por un punto
const convertirEnAcronimo = (str) => str.toUpperCase().split('').join('.');

console.log("convertirEnAcronimo('afip')", convertirEnAcronimo('afip'));
console.log("convertirEnAcronimo('nasa')", convertirEnAcronimo('nasa'));

// Crear una función `esAnioNuevo` que tome como argumento un string `fecha` con el formato `DD:MM:YYYY` un `argumento` y devuelva `true` si la fecha es año nuevo o `false` si no lo es

const esAnioNuevo = (fecha) =>
  fecha.slice(0, 2) === '01' && fecha.slice(3, 5) === '01';

console.log("esAnioNuevo('03/05/2015')", esAnioNuevo('03/05/2015'));
console.log("esAnioNuevo('22/01/1987')", esAnioNuevo('22/01/1987'));
console.log("esAnioNuevo('01/01/2020')", esAnioNuevo('01/01/2020'));

// Crear una función `aprueba` que tome como argumento un número `nota` y devuelva `true` si aprueba el examente (6 o más) o `false` si no. El número tiene que redondearse primero antes de evaluarlo
const aprueba = (nota) => Math.round(nota) > 5;

console.log('aprueba(1)', aprueba(1));
console.log('aprueba(5.4)', aprueba(5.4));
console.log('aprueba(5.5)', aprueba(5.5));
console.log('aprueba(5.6)', aprueba(5.6));
console.log('aprueba(8)', aprueba(8));

// Crear una función `obtenerDuracionEnSegundos` que tome como argumento un string `duracion` con el formato (`mm:ss`) y la cantidad de segundos totales de la duración
const obtenerDuracionEnSegundos = (duracion) =>
  parseInt(duracion.slice(0, 2)) * 60 + parseInt(duracion.slice(3, 5));

console.log('obtenerDuracionEnSegundos', obtenerDuracionEnSegundos('00:33'));
console.log('obtenerDuracionEnSegundos', obtenerDuracionEnSegundos('01:05'));
console.log('obtenerDuracionEnSegundos', obtenerDuracionEnSegundos('10:42'));
