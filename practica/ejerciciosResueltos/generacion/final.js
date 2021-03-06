const obtenerMensajeGeneracion = (anio) => {
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
};

const anio = Number(prompt('ingrese un anio'));

alert(obtenerMensajeGeneracion(anio));
