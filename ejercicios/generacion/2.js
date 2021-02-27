//vamos a pasar a funcion
//es igual que antes pero ahora contenido en una funcion
const obtenerMensajeGeneracion = (anio) => {
  // recibe un numero y retorna la primera coincidencia
  if (anio >= 2000 && anio <= 2009) {
    return 'Es Centenials';
  } else if (anio >= 1990 && anio <= 1999) {
    return 'Es Millenial';
  } else if (anio >= 1980 && anio <= 1989) {
    return 'Es gen y';
  } else if (anio >= 1970 && anio <= 1979) {
    return 'Es baby boomer';
  } else {
    return 'No pertenece a ninguna de ellas';
  }

  /* Alternativa:
  let mensaje = "";
  if (anio >= 2000 && anio <= 2009) {
    mensaje = 'Es Centenials';
  } else if (anio >= 1990 && anio <= 1999) {
    mensaje = 'Es Millenial';
  } else if (anio >= 1980 && anio <= 1989) {
    mensaje = 'Es gen y';
  } else if (anio >= 1970 && anio <= 1979) {
    mensaje = 'Es baby boomer';
  } else {
    mensaje = 'No pertenece a ninguna de ellas';
  }
  return mensaje;

  son iguales,yo prefiero el anterior por es un poco mas simple
  */
};

const anio = 1992;

alert(obtenerMensajeGeneracion(anio));
