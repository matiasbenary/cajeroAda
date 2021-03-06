// DOM es el html y el documento document object model

// seleccionar un elemento del DOM
const titulo = document.getElementById('primero');
// #id -> para usar id # + id de la etiqueta
// .class -> para usar la calse . + clase de la etiqueta
// tag -> para la etiqueta es sin nada
//querySelector me retorna el primer elemento que coincida
const titulo1 = document.querySelector('#primero');
const titulo2 = document.querySelector('.titulo');
const titulo3 = document.querySelector('h1');
//document.querySelectorAll -> me trae todas la coincidencia
//document.getElementsByTag -> me trae todas la coincidencia por etiqueta
//document.getElementsByClass -> me trae todas la coincidencia por clase

// solo me permite texto
titulo1.textContent = 'Mi texto';
// solo permite escribir html dentro
titulo1.innerHTML = 'Mi texto<p class="rojo">Que genial</p>';

// modificacion de estilos en linea
titulo1.style = 'background-color:#555555';

// modicacion de clases
console.log('antes', titulo1.className);
// con className es como modifica directamente el atributo class de la etiqueta
// if (titulo1.className == 'texto-grande') {
//   alert('Hola');
// }
titulo2.className = 'rojo texto';
console.log('despues', titulo1.className);
// cuando no hago asignacion estoy viendo que clases tienen
// cuando hago asignacion(=) estoy sobreescribiendo la clase que tenia

//classList tiene muchos metodos para modificar la clases de un elemento
titulo1.classList.add('texto');
titulo1.classList.remove('texto-grande');
titulo1.classList.toggle('rojo');
// contains me retorna un boolean,como para un condicional
// se fija si la clase esta agregada al elemento
console.log(titulo1.classList.contains('texto'));

const imagen = document.querySelector('#imagen');
imagen.src = './descarga.jpeg';

const link = document.querySelector('#link');
link.href = 'https://www.google.com.ar';
