/*
esUltimoCaracter(palabra, caracter)
Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario

esUltimoCaracter('lovelace', 'e') // true
esUltimoCaracter('lovelace', 'f') // false
*/
/*
const esUltimoCaracter = (palabra, caracter) =>{
  return palabra.slice(-1) == caracter;
}*/
// 'lovelace'.slice(-1)=='e'
//1. 'lovelace'.slice(-1) => "e"


const esUltimoCaracter  = (palabra, caracter)=>{
  return palabra.slice(-1) == caracter;
}


console.log('lovelace'.slice(-2));
console.log('lovelace'.slice(-1) == "r" );
console.log('lovelace'.slice(-1) == "e" );
console.log(esUltimoCaracter('lovelace',"e"));
console.log(esUltimoCaracter('lovelace',"h") );


/*
console.log('lovelace'.includes("e"));
console.log('lovelace'.includes("f"));
console.log('lovelace'.includes("o",'lovelace'.length-1));
console.log('lovelace'.includes("e",-1));
*/