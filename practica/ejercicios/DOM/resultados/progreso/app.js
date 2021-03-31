//### progreso

//Crear una barra de progreso con dos `div`s anidados. Hacer un programa que al iniciarse pregunte mediante un `prompt` por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

/*
1. Pedir al usuario que ingrese el valor
2. Guardar la barra de progreso del dom
3. Modificar con style el width
*/
const porcentajeDeProgreso = prompt('Ingrese el porcentaje de progreso');

const progreso = document.querySelector(".progreso");

//  100% -> 750px 
//  50% ->  375px 
//  11.5% -> X
// (porcentajeDeProgreso *750px)/100

progreso.style = `width: ${porcentajeDeProgreso *750/100}px`


// 
// 
// 