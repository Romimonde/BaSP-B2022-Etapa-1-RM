// 06 Funciones
console.log("FUNCTIONS");


console.log("Excercise 6a.");
/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador. */

function suma (num1, num2) {
    return (num1 + num2);
}
var result = suma (7,8);
console.log(result);

console.log("Excercise 6b.");
/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

function isNum (val) {
    return !isNaN(val);
}
console.log(isNum(result)); {
if (result = false)
    alert(NaN)
}

console.log("Excercise 6c.");
/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */

console.log("Excercise 6d.");
/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */


console.log("Excercise 6e.");
/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */