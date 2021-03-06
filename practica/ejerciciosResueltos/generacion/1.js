/*
- Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

Propongo el siguiente rango de fechas, si bien no son correctas se aplica  bien para el ejercicio de
2010 en adelante -> ninguna de ellas 
2000 a 2009-> centenials
1990 a 1999 -> millenial
1980 a 1989 -> gen y 
1970 a 1979 -> baby boomer
menor a 1969 -> ninguna de ellas


podemos decir que si es mas grande igual que 2010 o menor igual a 1969 no pertenece a ninguna de ellas
podemos colocar esta como defecto para simplificar el codigo del

podemos decir que son rango de edad
si lo queremos decir con palabras seria algo como que
si el numero ingresado es mayor igual a 2000 "Y" menor igual a 2009 es centenials
sino si el numero ingresado es mayor igual a 1990 "Y" menor igual a 1999 es millenial
seguimos asi con cada Caso
por ultimo si no cumple con ninguno de los anteriores no pertenece a ninguna de ellas
*/

const anio = 1992;
// numero % 2 si es cero es par
if (anio >= 2000 && anio <= 2009) {
  alert('Es Centenials');
} else if (anio >= 1990 && anio <= 1999) {
  alert('Es Millenial');
} else if (anio >= 1980 && anio <= 1989) {
  alert('Es gen y');
} else if (anio >= 1970 && anio <= 1979) {
  alert('Es baby boomer');
} else {
  alert('No pertenece a ninguna de ellas');
}
