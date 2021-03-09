/*
Hacer un programa que nos diga si queremos continuar a traves. Presionarás una letra (keypress) e inmediatamente nos saldrá: En caso de ser "s" saldrá el cartel "Saliste del programa" En caso de ser "n" saldrá el cartel "Te quedas en el programa" En caso de ser otra saldrá el cartel "Pulsa 's' o 'n'" 
1.Crear HTML con el input 
2.En el js guardar el input obtenido del html
A.Usando querySelector y el id guardar el input y guardarlo en una const con el nombre sugerido de miInput
3.Agregar el evento con addEventListener,este evento tiene que ser keypress
A.hacer miInput.addEventListener("keypress",agregar funcion correpondiente)
4.Agregar logica al evento para que haga lo solicitado.Recodras que se tiene que usar event para tomar la tecla ingresada
*/

const miInput = document.querySelector('#miInput');

miInput.addEventListener('keypress', (event) => {
  if (event.key == 's') {
    alert('Saliste del programa');
  } else if (event.key == 'n') {
    alert('Te quedas en el programa');
  } else {
    alert("Pulsa 's' o 'n'");
  }
});
