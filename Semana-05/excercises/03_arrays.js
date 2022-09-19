// 03 Arrays

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(months[4], months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var alphabet = months.sort();

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
alphabet.unshift ("element1");
alphabet.push("element2");

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

alphabet.shift();
alphabet.pop();

/* e. Invertir el orden del array (utilizar reverse). */
alphabet.reverse();

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
var monthsWithJoin = alphabet.join("-");
console.log(monthsWithJoin);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]
var partOfMonths2 = months2.slice(4,11);
console.log(partOfMonths2);