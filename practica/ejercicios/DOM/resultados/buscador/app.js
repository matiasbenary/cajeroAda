//En un documento `html` crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un `prompt` por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

//Guardo la palabra que hay que buscar
const palabra = prompt("ingrese su comida");
//Guardo el texto donde aparece
const text = document.getElementById("text");

//text.textContent optengo el texto del html,es decir,que tengo un string con el texto
const textHTML = text.textContent;

//text.innerHTML voy a modificar el html
//replaceAll voy a tomar lo que ingreso el usuario y agrarle la etiqueta de span
text.innerHTML = textHTML.replaceAll(palabra,`<span style="color:red;font-weight:bold">${palabra}</span>`);