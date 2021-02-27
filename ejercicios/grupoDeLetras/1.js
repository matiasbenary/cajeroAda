/*
**Grupo de letras**

- Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
  - grupo A = {a, e, i, o ,u}
  - grupo B = {b, c, d, f, g}
  - grupo C = {h, j, k , l, m}
  - grupo D = {n, p, q, r}
  - grupo E = {s, t, v, w, x, y, z}

Tenemos que clasificar las letras que ingresan
para el grupa A vamos a decir "Si" la letra ingresada es a "O" e "O" i "O" o "O" u
lo mismo para el resto de grupos

*/

const letra = 'e';
//si alguna de las letras es a O e O i O o O
// es decir que si se cumple una de las condiciones retorna true
// Si tengo muchas opciones dentro de un if me conviene escibir espaciado para simplificar la lectura

if (
  letra == 'a' ||
  letra == 'e' ||
  letra == 'i' ||
  letra == 'o' ||
  letra == 'u'
) {
  alert('Grupo A');
} else if (
  letra == 'b' ||
  letra == 'c' ||
  letra == 'd' ||
  letra == 'f' ||
  letra == 'g'
) {
  alert('Grupo B');
} else if (
  letra == 'h' ||
  letra == 'j' ||
  letra == 'k' ||
  letra == 'l' ||
  letra == 'm'
) {
  alert('Grupo C');
} else if (letra == 'n' || letra == 'p' || letra == 'q' || letra == 'r') {
  alert('Grupo D');
} else if (
  letra == 's' ||
  letra == 't' ||
  letra == 'v' ||
  letra == 'w' ||
  letra == 'x' ||
  letra == 'y' ||
  letra == 'z'
) {
  alert('Grupo E');
} else {
  alert('Grupo invalido');
}
