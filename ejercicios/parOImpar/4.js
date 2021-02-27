// Vamos a optimizar la función
const esPar = (numero) => {
  // Cuando js realice esta comparacion numero % 2 == 0 retorna un booleano
  // como es un booleano podemos retorna eso:
 /* antes:
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
  */
 // despues
  return numero % 2 == 0;
  // alternativa un poco mas avanzada
  /*
  numero % 2 => retorna un 1 o un 0, js interpreta a 0 como false y a 1 como true es
  con ! lo niego, va a retorna el contrario ej:
  numero = 3;
  numero % 2 => da como resultado 1
  !1=> lo niega y da false

  numero = 4;
  numero % 2 => da como resultado 0
  !0=> lo niega y da true
  */
 // Otra cosa,el return de abajo no se ejecuta ya que se retorno el resultado antes
 // esta mal hacer esto,ya que hay codigo que no se usa.Pero viene bien para explicarlo
 // No olvidar los parentesis,sin estos cambia el orden de ejecucion
  return !(numero % 2);
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
