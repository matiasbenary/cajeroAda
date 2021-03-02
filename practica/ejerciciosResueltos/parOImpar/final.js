const esPar = (numero) => {
  //return numero % 2 == 0;
  return !(numero % 2);
};

const numero = Number(prompt('ingrese su numero'));

if (esPar(numero)) {
  alert('Es par');
} else {
  alert('Es impar');
}
