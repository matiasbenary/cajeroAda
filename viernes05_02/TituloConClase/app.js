/*
Hacer un programa que mediante el prompt me imprima un titulo y me permita ingresar 3 clases por separado y luego aplicarlas
las clases puede ser(o agregar las que quieras):
.texto-grande{font-size:64px;}
.texto-chico{font-size:12px;}
.texto-rojo{color:red;}
.texto-azul{color:blue;}
.texto-centrado{text-align: center;}
.fondo-gris{background-color:#222;}

Pasos:
1. Permitir que el usuario ingrese la informacion
A. Guardar el titulo con un prompt
B. Guardar la primera clase con un prompt
C. Guardar la segunda clase con un prompt
D. Guardar la tercer clase con un prompt
2. Obtener elemento del dom
A. Guardar en un const el elemento h1,document.getElementById o document.querySelector
3. Cambiar el texto del usuario
A. Cambiar texto del usuario con textContent
4. Agregar las clases que el usuario ingreso
A. Para cambiar el valor de las clases utilizo ClassList o ClassName
*/

// paso 1 - obtencion de data
const titulo = prompt('ingrese el titulo');
const clase1 = prompt('ingrese primer clase');
const clase2 = prompt('ingrese segunda clase');
const clase3 = prompt('ingrese ultima clase');

// paso 2 - obteniendo elemento a modificar
// <h1 id="titulo">Hola</h1>
const tituloDOM = document.querySelector('#titulo');

// paso 3 - modificando el texto que ingreso el usuario
tituloDOM.innerHTML = titulo;

// paso 4 - modificar los estilos que ingreso el usuario
// classList para cuando tengo que tener cuidado
// className es para cuando no me importa la clase que tiene,ya que sobreescribe todo
// tituloDOM.classList.add(clase1);
// tituloDOM.classList.add(clase2);
// tituloDOM.classList.add(clase3);
// Alternativa
tituloDOM.className = `${clase1} ${clase2} ${clase3}`;
//tituloDOM.className = clase1 + ' ' + clase2 + ' ' + clase3;
