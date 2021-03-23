/*
puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

puedeVerPelicula(12, false); // false
puedeVerPelicula(12, true); // true
puedeVerPelicula(16, false); // true
puedeVerPelicula(18, true); // true

creamos la funcion
if que tenga como condicion que sea mayor a 15 "O" tenga autorización de los padres
si es verdadero retornar un verdadero
sino retorna un falso
*/


/*
|| -> o,or -> va a ser true cuando por lo menos uno sea verdadero
5      + 5 -> 10
false || false -> false
true || false -> true
false || true -> true
true || true -> true

&& -> y and -> va a ser true cuando ambos sean verdadero
false || false -> false
true || false -> false
false || true -> false
true || true -> true

! -> negacion, not -> invierte el resultado,es decir,que si es true pasa a ser false y vice versa

!true -> false
!false -> true

tieneAutorizacion == true
false == true -> false
true == true -> true
3 == 3 -> true


= => asignacion sirve guardar un dato en una variable

Comporadores
Se fija el valor el valor
== => comparador debil 2 == "2" => true
Se fija tanto el tipo del dato como el valor
=== => comparador estricto 2 === "2" => false 2===2 =>true 


2 + 2 => 4
16 >= 15 => true
*/
const puedeVerPelicula = (edad, tieneAutorizacion)=> edad >= 15  || tieneAutorizacion ;


console.log(puedeVerPelicula(15,false),"espero un true");
console.log(puedeVerPelicula(12,false),"espero un false");
console.log(puedeVerPelicula(18,false),"espero un true");
console.log(puedeVerPelicula(13,true),"espero un true");
console.log(puedeVerPelicula(18,true),"espero un true");


/*
Imagenemos que tenesmos función que se le pasa un parametro que avisa por consola cuando el servidor esta offline
*/

/*
estaOnline == false 
2 == 3 ->false
true == false -> false
false == false -> true

!estaOnline
!true -> false
!false -> true

if(false){

}

*/
const avisarServidorCaido = (estaOnline) =>{
  //if(estaOnline == false )
  // !estaOnline
  // !false 
  // true
  if(!estaOnline){
    console.log("El servidor esta caido");
  }
}
const servidor = false;


//alertaServidor(true);

avisarServidorCaido(servidor);

