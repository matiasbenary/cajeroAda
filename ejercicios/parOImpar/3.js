// Vamos a hacer reutilizable la funcion
// vamos a poner un nombre mas adecuado
const esPar = (numero) => {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const numero = 14;
const resultadoEsPar = esPar(numero);
// No hace falta declarar la variable se puede escribir asi directamente
// if(esPar(numero))
if (resultadoEsPar) {
  alert('Es par');
} else {
  alert('Es impar');
}
