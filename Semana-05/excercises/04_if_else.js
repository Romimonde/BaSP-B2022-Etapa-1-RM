// 04 If Else
console.log("IF-ELSE");

console.log("Exercise 04 a.");
/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual
que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

var randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber > 0.5) {
     alert ("Greater than 0,5");
} if (randomNumber < 0.5) {
     alert ("Lower than 0,5");
}

console.log("Exercise 03 b.");
/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:*/

var min = 0;
var max = 100;
var Age = Math.floor(Math.random()*(max-min+1)+min);
console.log(Age);

/* b. i. “Bebe” si la edad es menor a 2 años. */

if (Age < 2) {
    alert ("Bebe");
}

/* b. ii. “Niño” si la edad es entre 2 y 12 años. */

else if ((Age > 2) && (Age < 12)){
    alert ("Niño");
}

/* b. iii. “Adolescente” entre 13 y 19 años. */

else if ((Age > 13) && (Age < 19)){
    alert ("Adolescente");
}

/* b. iv. “Joven” entre 20 y 30 años. */

else if ((Age > 20) && (Age < 30)){
    alert ("Joven");
}

/* b. v. “Adulto” entre 31 y 60 años. */

else if ((Age > 31) && (Age < 60)){
    alert ("Adulto");
}

/* b. vi. “Adulto mayor” entre 61 y 75 años. */

else if ((Age > 61) && (Age < 75)){
    alert ("Adulto mayor");
}

/* b. vii. “Anciano” si es mayor a 75 años. */

else {
    alert ("Anciano");
}