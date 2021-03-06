//vamos a pasar a funcion
//es igual que antes pero ahora contenido en una funcion
const imprimirMensaje = (numero) => {
  if (numero % 2 == 0) {
    alert('Es par');
  } else {
    alert('Es impar');
  }
};

const numero = 14;

imprimirMensaje(numero);
