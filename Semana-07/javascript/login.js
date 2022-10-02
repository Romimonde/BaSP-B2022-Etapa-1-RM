/*Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica Javascript necesaria
para el funcionamiento del formulario login. La validación de cada campo se debe realizar en el evento
“blur” de cada uno de los campos. Además, si algún campo tiene un error de validación, en el evento “focus”
de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error. */

window.onload = function() {

var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");
var myP = document.createElement("p");
myP.innerHTML = "  ";
myP.classList.add("red-style");
myP.setAttribute('id', 'myMessage');
var myformlogin = document.getElementById("login-form");
myformlogin.appendChild(myP);

/*FUNCTIONS*/
function quantityLetters(userInput) {
    var q = 0;
    for (i=0; i < userInput.length; i++){
        if (userInput[i]==userInput[i].toUpperCase() && isNaN(userInput[i]))
        q++;
    }
     for (i=0; i < userInput.length; i++){
         if (userInput.charAt(i)==userInput.charAt(i).toLowerCase() && isNaN(userInput[i]))
         q++;
    }
    return q;
}

function quantityNumbers(userInput) {
    var q = 0;
    for (i=0; i < userInput.length; i++){
        if (userInput[i]==userInput[i] && !isNaN(userInput[i]))
        q++;
    }
    return q;
}

function showMyRedMessage(theMessage) {
    myP = document.getElementById("myMessage");
    myP.className="red-style";
    myP.textContent = theMessage;
}

/*VALIDATIONS*/

email.onblur = function() {
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(email.value)!=true) {
        email.className="red-border";
        showMyRedMessage("Invalid Email");
    }
    else {
        email.className="form-input";
    }
}

password.onblur = function() {
    if ((quantityLetters(password.value)>7) && (quantityNumbers(password.value)>0)) {
        password.className="form-input";
    }
    else {
        password.className="red-border";
        showMyRedMessage("Invalid Password");
    }
}

function validLogin (typedEmail, typedPassword) {
    if (typedEmail=="rose@radiumrocket.com" && typedPassword=="BaSP2022") {
        alert("Succesfull Login. Email:"+typedEmail+"Password"+typedPassword);
    }
    else {
        showMyRedMessage("Email or Password incorrect");
    }
}

login.onclick = function(e) {
    e.preventDefault();
}

var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';

fetch(url)
    .then(function (response) {
        return response.json()
    })

}