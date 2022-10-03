/*Se debe crear un archivo llamado login.js en donde se debe poner toda la lógica Javascript necesaria
para el funcionamiento del formulario login. La validación de cada campo se debe realizar en el evento
“blur” de cada uno de los campos. Además, si algún campo tiene un error de validación, en el evento “focus”
de dicho campo debe desaparecer el mensaje porque se asume que el usuario está corrigiendo el error. */

window.onload = function() {

var email = document.getElementById("email");
var password = document.getElementById("password");
var loginButton = document.getElementById("login");
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
function isValidEmail(data) {
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(data)) {
        return true;
    }
    else{
        return false;
    }
}

function isValidPassword(data){
    if ((quantityLetters(data)>3) && (quantityNumbers(data)>0)){
        return true;
    }
    else {
        return false;
    }
}
/*VALIDATIONS*/

email.onblur = function() {
    if (isValidEmail(email.value)!=true) {
        email.className="red-border";
        showMyRedMessage("Invalid Email");
    }
    else {
        email.className="form-input";
    }
}

password.onblur = function() {
    if ((quantityLetters(password.value)>3) && (quantityNumbers(password.value)>0)) {
        password.className="form-input";
    }
    else {
        password.className="red-border";
        showMyRedMessage("Invalid Password");
    }
}

loginButton.onclick = function(e){
    e.preventDefault();
    var loginArray = [];
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
     if (isValidEmail(email.value) && isValidPassword(password.value)) {
         loginArray.push('email=' + email.value);
         loginArray.push('&password=' + password.value);
         fetch(url+loginArray[0]+loginArray[1])
             .then(function(response) {
                //console.log(response.json());
                if (response.ok) {
                    alert("Login succesfull");
                }
                 if (response.sucess==true) {
                     alert(response.msg);
                }
                return response.json();
             })
             .then(function(data) {
               alert(data.msg);
              //  console.log(data.msg);
             })
             .catch(function(error) {
              //  alert(error.msg+"error");
                console.log(error);
             })
    }
    else {
        alert("Please check email and password");
    }
}
}