/*Strings
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
en mayúscula (utilizar toUpperCase).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los
últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una
nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var string_1 = "This is a very very very very very very very very very long string";
var upper = string_1.toUpperCase();
console.log(upper);

var string_2 = "This is another but not very long, string";
var subs_1 = string_2.substring (0,5);
console.log(subs_1);

var string_3 = "This is the third string";
var subs_2 = string_3.substring (string_3.length - 3);
console.log(subs_2);

var string_4 = "this is the fourth STRING";
var subs_3 = string_4.substring(0,1).toUpperCase();
var subs_4 = string_4.substring(1).toLowerCase();
var result = subs_3 + subs_4;
console.log(result);

var string_5 = "This is a string with blank spaces";
var index_01 = string_5.indexOf(" ");
console.log(index_01);

var string_6 = "strawberry friendship";
var index_02 = string_6.indexOf(" ")+1;
var subs_5 = string_6.substring(0,1).toUpperCase();
var subs_6 = string_6.substring(11,12).toUpperCase();
var subs_7 = string_6.substring(1,11);
var subs_8 = string_6.substring(12,21);
var result = subs_5 + subs_7 + subs_6 + subs_8;
console.log(result);