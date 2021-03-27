/* Funciones Nativas */
// String
const texto = "Hola COmo estas?";
const texto1 = "hola como estas?";
// .length me dice el largo de mi string
console.log(texto.length);

// toUpperCase pasa el string a mayuscula
// toLowerCase pasa el string a minuscula
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

// lo puedo utilizar cuando necesito comparar dos string y que no sea sensible a las mayuscula

// texto = "Hola COmo estas?".toLowerCase() -> hola como estas?

console.log(texto.toLowerCase() == texto1.toLowerCase());

// numeracion siempre empiza en cero en

//slice recive dos parametros, el primero me dice donde empiezo a cortar y el segundo me dice hasta donde.El segundo es opciona,es decir, que no hace falta colocarlo
// cuando en el segundo parametro pongo un numero negativo cuento del final, de derecha a izquierda
const cadena1 = "La mañana se nos echa encima.";
const cadena2 = cadena1.slice(3,-2);
console.log(cadena2);

//includes me retorna un true si el string que busco esta en el otro string
console.log('Ballena azul'.includes('azul'));
console.log('azul Ballena azul'.includes('azul',3));


//indexOf a diferencia del includes,me dice en que posicion se encuentra la palabra que busco,si no la encuentra me devuelve un -1

"Blue Whale".indexOf("Blue")    // returns 0
"Blue Whale".indexOf("Blute")   // returns -1
"Blue Whale".indexOf("Whale",0) // returns 5
"Blue Whale".indexOf("Whale",5) // returns 5

const texto3 = "Hola cómo estás?";
console.log(texto3.indexOf("cómo", 5));



const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// replace recibe dos parametros el primero un string o regex(exprecion regular), y el segundo el texto por el cual quiero cambiar
console.log(p.replace("dog", 'fox'));
console.log(p.replace(/[ou]/gi, 'i'));

const tigres= "tres tristes tigre comen trigo en un trigal.Y el tigre comio trigo";
console.log(tigres.replace("tigre","perro"));
console.log(tigres.replaceAll("tigre","perro"));