const usuario = prompt('Ingrese su usuario');
const clave = prompt('Ingrese su contraseña');

if (usuario == 'admin' && clave == '123456') {
  alert('Esta bienvenido');
  let saldo = 10000;
  let opcion = prompt('Seleccione una opcion 1,2,3');
  if (opcion == 1) {
    let ingreso = Number(prompt('Cuando desea ingresar'));
    alert(
      `su saldo era de ${saldo},se ingreso ${ingreso} ahora su saldo es de ${
        saldo + ingreso
      }`
    );
  } else if (opcion == 2) {
    let egreso = Number(prompt('Cuando desea ingresar'));
    alert(
      `su saldo era de ${saldo},se retiro ${egreso} ahora su saldo es de ${
        saldo - egreso
      }`
    );
  } else if (opcion == 3) {
    alert(`su saldo es de ${saldo}`);
  } else {
    alert('Opcion invalido');
  }
} else {
  alert('Usuario inconrrecto');
}
