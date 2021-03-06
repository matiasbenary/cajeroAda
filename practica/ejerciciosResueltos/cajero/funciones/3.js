//Flujo de mi programa
const usuario = prompt('Ingrese su usuario');
const clave = prompt('Ingrese su contraseña');

let estaLogeado = login(usuario, clave);
if (estaLogeado == true) {
  alert('Esta bienvenido');
  menuCajero();
} else {
  alert('Usuario inconrrecto');
}

//funciones
function login(usuario, clave) {
  if (usuario == 'admin' && clave == '123456') {
    return true;
  } else {
    return false;
  }
}

// Calcula el saldo y lo imprime
function agregarSaldo() {
  let ingreso = Number(prompt('Cuando desea ingresar'));
  let saldo = 10000;
  alert(
    `su saldo era de ${saldo},se ingreso ${ingreso} ahora su saldo es de ${
      saldo + ingreso
    }`
  );
}

/*
Cuando se llama el usuario ingresa a una opcion 
imprime la opcion seleccionada
ahora cuando se selecciona la opcion 1 se ejecuta la funcion de agregarSaldo
*/
function menuCajero() {
  let opcion = prompt('Seleccione una opcion 1,2,3');
  if (opcion == 1) {
    agregarSaldo();
  } else if (opcion == 2) {
    alert('Se selecciono la opcion de retirtar');
  } else if (opcion == 3) {
    alert('Selecciono la opcion de ver estado');
  } else {
    alert('Opcion invalido');
  }
}
