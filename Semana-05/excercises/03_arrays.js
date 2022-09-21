// 03 Arrays
console.log("ARRAYS");

console.log("Exercise 03 a.");
/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(months[4], months[10]);

console.log("Exercise 03 b.");
/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var alphabet = months.sort();

console.log("Exercise 03 c.");
/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
alphabet.unshift ("element1");
alphabet.push("element2");

console.log("Exercise 03 d.");
/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

alphabet.shift();
alphabet.pop();

console.log("Exercise 03 e.");
/* e. Invertir el orden del array (utilizar reverse). */
alphabet.reverse();

console.log("Exercise 03 f.");
/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */
var monthsWithJoin = alphabet.join("-");
console.log(monthsWithJoin);

console.log("Exercise 03 g.");
/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]
var partOfMonths2 = months2.slice(4,11);
console.log(partOfMonths2);