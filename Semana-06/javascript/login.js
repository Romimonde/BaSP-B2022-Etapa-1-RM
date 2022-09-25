/*Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica Javascript necesaria
para el funcionamiento del formulario login. La validación de cada campo se debe realizar en el evento
“blur” de cada uno de los campos. Además, si algún campo tiene un error de validación, en el evento “focus”
de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error. */
window.onload = function() {

var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");


var main = document.getElementsByClassName("login-form-section")[0];
var validations = document.createElement("p");
p.innerHTML = "email invalid";
form.appendChild("p");
validations.classList.add("validations");

login.onclick = function(e) {
    e.preventDefault();
    console.log(email.value);
}

email.onblur = function () {
    console.log(validations);
}

}
