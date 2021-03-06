/*
Opcion 1
function login(usuario,clave){
    if(usuario=="admin"){
        if(enter_password=="123456"){
          return true;
        }else{
          return false;
        }
    }else{
      return false;
    }
}
*/

// Opcion 2
// Cuando se ingresa el usuario devuelve true o false,
// esto me permite reutilizar el codigo
function login(usuario, clave) {
  if (usuario == 'admin' && clave == '123456') {
    return true;
  } else {
    return false;
  }
}

const usuario = prompt('Ingrese su usuario');
const clave = prompt('Ingrese su contraseña');

// La funcion retorna un booleano este se almacena en estaLogeado
let estaLogeado = login(usuario, clave);
if (estaLogeado == true) {
  alert('Esta bienvenido');
} else {
  alert('Usuario inconrrecto');
}

/*
Como el if espera un booleano no hace falta hacer la comparcion
let estaLogeado = login(usuario, clave);
if (estaLogeado) {
  alert('Esta bienvenido');
} else {
  alert('Usuario inconrrecto');
}
*/

/*
Alternativa, si la funcion retorna un booleano este se puede aplicar directamente en if 
if (login(usuario, clave)) {
  alert('Esta bienvenido');
} else {
  alert('Usuario inconrrecto');
}

*/
