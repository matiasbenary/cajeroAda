//Flujo de mi programa
const usuario = prompt('Ingrese su usuario');
const clave = prompt('Ingrese su contraseña');

let estaLogeado = login(usuario, clave);
if (estaLogeado == true) {
  alert('Esta bienvenido');
  //una vez que este logeado el usuario ejecuto el menu
  menuCajero();
} else {
  alert('Usuario inconrrecto');
}



//Funciones
function login(usuario, clave) {
  if (usuario == 'admin' && clave == '123456') {
    return true;
  } else {
    return false;
  }
}

/*
Cuando se llama el usuario ingresa a una opcion 
imprime la opcion seleccionada
*/
function menuCajero() {
  let opcion = prompt('Seleccione una opcion 1,2,3');
  if (opcion == 1) {
    alert('Se selecciono la opcion de agregar');
  } else if (opcion == 2) {
    alert('Se selecciono la opcion de retirtar');
  } else if (opcion == 3) {
    alert('Selecciono la opcion de ver estado');
  } else {
    alert('Opcion invalido');
  }
}