# Variables

## Que es una Variable?

Es una espacio en la memoria que almacena datos y esta puede cambiar dependiendo el flujo de mi programa

```javascript
let nombreDeVariable = 14;
```

let nombreDeVariable es el nombre de mi variable,
el igual = que significa asignacion, es la operación de guardar
14 es el dato que quiero guardar

en la izquierda se almacena lo de la deracha siempre que hay una operacion de asignacion(=)

Luego la variable es una referencia al valor de

esto quiere decir que si hago

```javascript
let nombreDeVariable = 14;
console.log(nombreDeVariable);
```

Se imprime un 14 que es la referencia

O puedo hacer esto:

```javascript
let nombreDeVariable = 14;
nombreDeVariable = 15 + nombreDeVariable;
console.log(nombreDeVariable);
```

Primero nombreDeVariable vale 14, luego js resuelve 15 mas lo almacenado en nombreDeVaribale que es 14
entonce hace 15+14 y lo guarda en nombreDeVariable
imprime 29 por ultimo

## var, let y cosnt

var: es como se escribia antes, es generico y trae problemas de scope

let: son variable que se pueden modificar su valor despues de ser declarada

const: son variable fijas que no cambia en mi flujo de programa.Es decir constante.
para escribir este tipo de datos, se escriben en mayusculas y con guion bajo para separar

```javascript
const URL_BASE = 'google.com';
```

## Primitivos o tipos de datos

### Boleanos

Son variable con dos estados, verdadero o falso, true o false y se utilizan para los condicionales.
Se recomiendan escribirlo como pregunta en afirmativo:

```javascript
let estaLogeado = true;
let tieneLibros = true;
let puedeVolar = false;
```

Operaciones logicas:
El simbolo ! niega la condicion es decir que si es true pasa a ser false y vicebersa

```javascript
let estaLogeado = !true; //es igual que false;
let tieneLibros = !true; //es igual que false;
let puedeVolar = !false; //es igual que false;
```

Tenemos el And que se lee en castellano como y. Toma el valor de verdadero cuando todas las afimaciones son verdaderas:
ej: el usuario Y la clave tiene que ser correctas:

```javascript
let usuario = 'admin';
let clave = '123456';
// en este caso es usuario == 'admin' es true
// en este caso es clave == '123456' es true
// entonces js va a leer lo siguiente true && true => como respuesta => true
//toda la sentencia  es  correcta  por eso  devuele true
if (usuario == 'admin' && clave == '123456') {
  alert('logeado');
}
```

posibles valores:
true && true => true
true && false => false
false && true => false
false && false => false