// 1 Variables y Operadores
console.log("VARIABLES AND OPERATORS");

console.log("Excercise 01 a.");
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar
el valor de la suma de ambos números en una 3er variable. */
var numOne = 3;
var numTwo = 5;
var addition = numOne + numTwo;
console.log("addition:",addition);

console.log("Excercise 01 b");
/* b. Crear dos variables de tipo String y concatenarlas guardando el
resultado en una 3er variable. */

var text1 = "This is ";
var text2 = "a string";
var text3 = text1 + text2;
console.log(text3);

console.log("Exercise 01 c");
/* c. Crear dos variables de tipo String y sumar el largo de cada variable
(cantidad de letras del string) guardando el resultado de la suma en una
3er variable (utilizar length). */

var string_01 = "This is a string"
var string_02 = "This is also a string"
var stringsLength = string_01.length + string_02.length;
console.log("characters:", stringsLength);