const mensajeGrupoLetra = (letra) => {
  if (
    letra == 'a' ||
    letra == 'e' ||
    letra == 'i' ||
    letra == 'o' ||
    letra == 'u'
  ) {
    return 'Grupo A';
  } else if (
    letra == 'b' ||
    letra == 'c' ||
    letra == 'd' ||
    letra == 'f' ||
    letra == 'g'
  ) {
    return 'Grupo B';
  } else if (
    letra == 'h' ||
    letra == 'j' ||
    letra == 'k' ||
    letra == 'l' ||
    letra == 'm'
  ) {
    return 'Grupo C';
  } else if (letra == 'n' || letra == 'p' || letra == 'q' || letra == 'r') {
    return 'Grupo D';
  } else if (
    letra == 's' ||
    letra == 't' ||
    letra == 'v' ||
    letra == 'w' ||
    letra == 'x' ||
    letra == 'y' ||
    letra == 'z'
  ) {
    return 'Grupo E';
  } else {
    return 'Grupo invalido';
  }
};

const letra = 'a';

alert(mensajeGrupoLetra(letra));
