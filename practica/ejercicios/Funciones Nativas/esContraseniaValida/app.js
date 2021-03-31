/*
esContraseniaValida(contrasenia)
Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

esValida('contraseniaMuySegura') // true
esValida('abc123') // false
*/
// Si la contrasenia es mayor igual a 8

const esValida = (contrasenia)=>{
  return contrasenia.length >= 8;
/*
  if( contrasenia.length >= 8){
    return true;
  }else{
    return false;
  }
*/
}


console.log(esValida('contraseniaMuySegura'));
console.log(esValida('abc123'));

const esClaveValida = esValida('abc123');
console.log(esClaveValida);

// casa
const pass = prompt('Ingrese su clave');
console.log(esValida(pass));