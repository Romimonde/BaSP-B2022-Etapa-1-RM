/*Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica Javascript necesaria
para el funcionamiento del formulario login. La validación de cada campo se debe realizar en el evento
“blur” de cada uno de los campos. Además, si algún campo tiene un error de validación, en el evento “focus”
de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error. */



window.onload = function() {

var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");

function validFormatEmail(validEmailFormat) {
    
    if (validEmailFormat== "rominamonde@gmail.com") {
        return true;
       }   
    else {
        return false;
        }
}

function validFormatPassword(password) {
    
    if (password=="mypass234") {
        return true;
       }   
    else {
        return false;
        }
}

function validLogin (typedEmail, typedPassword) {
    if (typedEmail=="rominamonde@gmail.com" && typedPassword=="mypass234") {
        return true;
    } else {
    return false;
    }
}

login.onclick = function(e) {
    e.preventDefault();
    
}

email.onblur = function () {
    console.log(validFormatEmail(email.value));
}

password.onblur = function () {
    console.log(validFormatPassword(password.value));
}

login.onsubmit = function () {
    console.log(validLogin(email.value, password.value));
}


var myformlogin = document.getElementById("login-form");
console.log(myformlogin);
var myP = document.createElement("p");
myP.innerHTML = "email invalid";
login-form.appendChild(myP);


//myP.classList.add("validations");
}