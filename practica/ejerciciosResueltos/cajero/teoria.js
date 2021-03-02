/*
Primitivos - datos base que usamos:

String - se escriben con comilla y son texto: "hola","Como","estas"
puedo realizar concatenaciones(unir variables o texto para que me de un solo texto) con el + o usar `` para concatenar con otras varibles. 
permiten hacer comporaciones logicas == esto devuelve un true o un false

Number - se escriben sin comillas y son numeros 12, 56 , 54, 0 ,-10
me permiten realizar operaciones mateticas basicas +,-,/,*,%(modulo,es el resto de la divicion)
permiten hacer comporaciones logicas <=,>=,<,>,== esto devuelve un true o un false

Boleano - se escriben con la palbra reservada true y false, y solo tienen dos estados
se usan con condicionales para saber si puede o no realizar una accion

Para saber que tipo de dato es se usa typeof
typeof("123") va imprimir string
typeof(123) va imprimir number
typeof(true) va imprimir boolean


Probar lo siguiente:
console.log(123,typeof(123));
console.log(123+5,typeof(123+5));

console.log("123",typeof("123"));
console.log("123"+"5",typeof("123"+"5"));

console.log(true,typeof(false));
console.log(123>5,typeof(123>5));


Varibles
Almacenan en memoria un valor, luego se hace referencia a este
let -> me permiten cambiar el valor 
let saldo = 15;
saldo = 16 + 46;
const -> no me permite cambiar el valor
const numeroDeCuenta = 500;

Una variable hace referencia al valor que almacenan:
let saldo = 15;
const numeroDeCuenta = 500;
console.log(saldo,numeroDeCuenta)

esto me va imprmir el valor de 15 y 500

(*) Avanzado:
let saldo = 30;
saldo = saldo +70;
console.log(saldo);
esto va imprimir 100




Condicionales:
Es una herramienta de la programacion que me permite bifurcar el flujo de mi programa,es decir darme otros caminos a seguir o elegir si se hace algo
ejemplo:
 si tengo mas de 18 puedo votar
 if(edad> 18) votar();
 si tengo tiempo puedo ir a pasear
 if(tiempo) pasear();

 este el if y se puede usar solo y en cualquier parte del programa, y dentro del parentesis espera un verdadero o un falso(con pinsas mas adelante vamos a ver que admite mas cosas)

 estructura:
 if(concidicion,tiene que ser un booleano){
   hago esto si se cumple
 }

 por ejemplo si la valija de viaje pesa mas de 20kg tengo que pagar un extra de 50

 caso 1 la valija pesa 22kg
 como pesa 22kg se te agrega un extra de 50

 let pesoValija = 22;
 let extra = 0;
 if(pesoValija > 20){
   extra = 50;
 }
 let pasaje = 150 + extra;
 console.log(pasaje);

 Esto me imprimiria 200


 caso 2 la valija pesa 15kg no se agrega ningun extra
 let pesoValija = 15;
 let extra = 0;
 if(pesoValija > 20){
   extra = 50;
 }
 let pasaje = 150 + extra;
 console.log(pasaje);

 Esto me imprimiria 150


 Ahora que pasa si tengo dos opciones,es decir es uno o el otro, se utiliza if else,la traducion es si pasa esto hago esto sino hago esto otro
 if(concidicion,tiene que ser un booleano){
   hago esto si se cumple
 }else{
   hago esto sino se cumple
 }

 ejemplo:
 Si manana es lunes me despierto a las 8 sino a las 12 

 caso 1 es lunes
 let dia = "lunes";
 if(dia=="lunes"){
   alert("te despetas a las 8");
 }else{
   alert("te despetas a las 12");
 }

 lanza un alert con el mensaje "te despetas a las 8"


 caso 2 es sabado
 let dia = "sabado";
 if(dia=="lunes"){
   alert("te despetas a las 8");
 }else{
   alert("te despetas a las 12");
 }

 lanza un alert con el mensaje "te despetas a las 12"

 Por ultimo se puede unir varios if de ser necesario:
 estructura:
 if(concidicion,tiene que ser un booleano){
   hago esto si se cumple
 }else if(otra condicion,debe ser booleano){
   hago esto otro
 }else{
   si no cumple nada de lo anterior o por defecto hago esto
 }

 ejemplo sos un mozo y tenes que gritar al cocinero que es lo que te pide el usuario,para esto el usuario tiene un menu de 3 comidas:

 caso 1 milanesas:
 let opcion = 1;
 if(opcion == 1){
  alert("EL USUARIO PIDIO MILANESAS!!!!");
 }else if(opcion == 2){
  alert("EL USUARIO PIDIO SALCHICHAS CON PURE!!!!");
 }else if(opcion == 3){
  alert("EL USUARIO PIDIO PIZZA!!!!");
 }else{
  alert("EL USUARIO PIDIO ALGO QUE NO TENEMOS!!!!");
 }
 se lanza un alert con el mensaje "EL USUARIO PIDIO MILANESAS!!!!"

 caso 2 salchichas con pure:
 let opcion = 1;
 if(opcion == 1){
  alert("EL USUARIO PIDIO MILANESAS!!!!");
 }else if(opcion == 2){
  alert("EL USUARIO PIDIO SALCHICHAS CON PURE!!!!");
 }else if(opcion == 3){
  alert("EL USUARIO PIDIO PIZZA!!!!");
 }else{
  alert("EL USUARIO PIDIO ALGO QUE NO TENEMOS!!!!");
 }
 se lanza un alert con el mensaje "SALCHICHAS CON PURE!!!!"

 caso 3 pizza:
 let opcion = 1;
 if(opcion == 1){
  alert("EL USUARIO PIDIO MILANESAS!!!!");
 }else if(opcion == 2){
  alert("EL USUARIO PIDIO SALCHICHAS CON PURE!!!!");
 }else if(opcion == 3){
  alert("EL USUARIO PIDIO PIZZA!!!!");
 }else{
  alert("EL USUARIO PIDIO ALGO QUE NO TENEMOS!!!!");
 }
 se lanza un alert con el mensaje "EL USUARIO PIDIO PIZZA!!!!"

 caso 4 opcion invalida:
 let opcion = 1;
 if(opcion == 1){
  alert("EL USUARIO PIDIO MILANESAS!!!!");
 }else if(opcion == 2){
  alert("EL USUARIO PIDIO SALCHICHAS CON PURE!!!!");
 }else if(opcion == 3){
  alert("EL USUARIO PIDIO PIZZA!!!!");
 }else{
  alert("EL USUARIO PIDIO ALGO QUE NO TENEMOS!!!!");
 }
 se lanza un alert con el mensaje "EL USUARIO PIDIO ALGO QUE NO TENEMOS!!!!"


 Siempre se trata de tener la menor cantidad de condicionales posibles, para facilitar la lectura y tener un codigo mas optimo


 Funciones:
 Es un fracmento de codigo que nos sirve para no copiar y pegar codigo cada vez que tengamos que hacer algo repetido,ademas de agregar semantica y facilitar la lectura del codigo
 Cada vez que lo llamamos ejecutamos la pocas lineas de codigo que tienen dentro.
 Estos tiene que hacer una sola cosa y la tiene que hacer bien para poder reutilizarlo y no generar errores.

 declaracion de una funcion:

 vieja:
 funcion nombreDeLaFuncion(parametros){
   codigo a realizar
   return variableAretornar
 }

 nueva 
 const nombreDeLaFuncion = (paremetros) =>{
    codigo a realizar
    return variableAretornar  
 }

 nombreDeLaFuncion es el nombre con que la llamamos,esto nos va a permitir invocarla(permite usarla)
 parametros son los datos que van ingresar,es opcional,se utilizan para que la funcion pueda realiza operaciones
 return es opcional y se utiliza para poder seguir trabajando.


 invocacion de una funcion

 nombreDeLaFuncion(parametros);
 let guardarResultado = nombreDeLaFuncion(parametros);

 las funciones se invocan con el nombre de la funcion seguido de parentesis,si esta lo requiere se le puede pasar parametros que van en los parentesis
 si esta tiene un return y me permite seguir trabajando lo puedo almacenar en una variable 

 ej:
 vamos a realizar un funcion que le pasamos un nombre y apellido  para imprimir en consola un mensaje personalizado:
 
 function mensaje(nombre,apellido) {
   console.log(`Hola ${nombre} ${apellido}`)
 }
 mensaje("Giselle","Rodriguez");
 imprimiria en consola "Hola Giselle Rodriguez"


 const mensaje = (nombre,apellido) => {
   console.log(`Hola ${nombre} ${apellido}`)
 }
 mensaje("Giselle","Rodriguez");
 imprimiria en consola "Hola Giselle Rodriguez"


 ej2: Crear un programa que calcule se ingresen 4 numero y solo imprima el mas grande de todos
 function devolverMayor(numeroA,numeroB){
    if(numeroA >= numeroB){
      return numeroA;
    }else{
      return numeroB;
    }
 }
 let resultado1 = 0;
 let resultado2 = 0;
 let resultadoFinal = 0;
 let num1= 10;
 let num2= 20;
 let num3= 30;
 let num4 = 40;

 // ingresa 10 y 20, retorna 20 y lo guarda en resultado1
 resultado1 = devolverMayor(num1,num2);

 // ingresa 30 y 40, retorna 40 y lo guarda en resultado2
 resultado2 = devolverMayor(num3,num4);

  // ingresa 20 y 40, retorna 40 y lo guarda en resultadoFinal
 resultadoFinal = devolverMayor(resultado1,resultado2)
 alert(resultadoFinal);









*/