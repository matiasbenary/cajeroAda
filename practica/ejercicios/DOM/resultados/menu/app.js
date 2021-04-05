// // En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). 
// // Dar estilos para que se muestren una al lado de la otra, 
// // que tengan algo de espacio con margenes y que tengan el mismo tamaño. 
// // Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver 
// // (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

// //tomo los elementos del dom
// const img1 = document.getElementById("img1");
// const img2 = document.getElementById("img2");
// const img3 = document.getElementById("img3");

// //guardo lo que ingrese el usuario
// const opcion = prompt("ingrese su comida");

// //armo el menu segun lo que eligio el usuario
// if(opcion == "comidas"){
//   img1.src = "comida1.jpeg";
//   img2.src = "comida2.jpeg";
//   img3.src = "comida3.jpeg";
// }else if(opcion == "bebidas"){
//   img1.src = "bebida1.jpeg";
//   img2.src =  "bebida2.jpeg";
//   img3.src =  "bebida3.jpeg";
// }else if(opcion == "postres"){
//   img1.src = "postre1.jpeg";
//   img2.src = "postre2.jpeg";
//   img3.src = "postre3.jpeg";
// }

const palabra = prompt("ingrese su comida");
const text = document.getElementById("text");
text.innerHTML=text.textContent.replaceAll(opcion,`<span style="color:red;">${opcion}</span>`);