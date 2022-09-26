/*Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica Javascript necesaria
para el funcionamiento del formulario login. La validación de cada campo se debe realizar en el evento
“blur” de cada uno de los campos. Además, si algún campo tiene un error de validación, en el evento “focus”
de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error. */

window.onload = function() {

var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");
const myP = document.createElement("p");
myP.innerHTML = "  ";
myP.classList.add("validations");
myP.setAttribute('id', 'myMessage');
var myformlogin = document.getElementById("login-form");
myformlogin.appendChild(myP);


function validLogin (typedEmail, typedPassword) {
    if (typedEmail=="email@example.com" && typedPassword=="mypass234") {
        return "Correct login";
    } else {
    return "Incorrect User or Password";
    }
}

login.onclick = function(e) {
    e.preventDefault();
    
}

login.onclick = function () {
      alert(validLogin(email.value, password.value));
}

}