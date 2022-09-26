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

function validoEntero(n1) {
    if (Number.isInteger(n1)) {
      return true;
    }
    else {
    return false;
    }
  }

  console.log("validamos integer" ,validoEntero(7.5));
console.log("Excercise 6d.");
/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

function sumaConValidacion (num1, num2) {
    var a,b;

    if (validoEntero(num1)) {
        a=num1;
    }else
    {
        a=Math.round(num1);
        alert(num1+" no es un entero, se utilizara "+a);
    }

    if (validoEntero(num2)) {
        b=num2;
    }else
    {
        b=Math.round(num2);
        alert(num2+" no es un entero, se utilizara "+b);
    }

    return (a + b);
}
console.log(sumaConValidacion(5,7.5));

console.log("Excercise 6e.");
/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

function validoEntero6e(n1) {
    if (Number.isInteger(n1)) {
      return true;
    }
    else {
    return false;
    }
  }

function sumaConValidacion6e (num1, num2) {
    var a,b;

    if (validoEntero(num1)) {
        a=num1;
    }else
    {
        a=Math.round(num1);
        alert(num1+" no es un entero, se utilizara "+a);
    }

    if (validoEntero(num2)) {
        b=num2;
    }else
    {
        b=Math.round(num2);
        alert(num2+" no es un entero, se utilizara "+b);
    }

    return (a + b);
}
