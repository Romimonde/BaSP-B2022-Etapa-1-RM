window.onload = function() {

    var name = document.getElementById("name");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var birthDate = document.getElementById("birth-date");
    var mobileNumber = document.getElementById("mobile-number");
    var address = document.getElementById("address");
    var location = document.getElementById("location");
    var postalCode = document.getElementById("postal-code");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("repeat-password");
    var mysignup = document.getElementById("sign-up-form");
 //   var mysignup = document.getElementById("");
    var myP = document.createElement("p");
    myP.innerHTML = " ";
    myP.setAttribute("id", "myMessage");
    mysignup.appendChild(myP);

/*FUNCTIONS*/
function hasCapitalLetter(userInput) {
    var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (i=0; i < userInput.length; i++){
        if (capitalLetters.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasLowerLetter(userInput) {
    var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    for (i=0; i < userInput.length; i++){
        if (lowerLetters.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasNumber(userInput) {
    var numbers = '012345678';
    for (i=0; i < userInput.length; i++){
        if (numbers.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasEspecialChar(userInput) {
    var especialChars = '!@#$%^&*()_-+=,./?';
    for (i=0; i < userInput.length; i++){
        if (especialChars.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

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


// function clearMyMessage(){
//      myP = document.getElementById("myMessage");
//      showMyRedMessage =(' ');
// }

/*VALIDATIONS*/
name.onblur = function() {
    if ((name.value.length>3) && (hasCapitalLetter(name.value)) && (hasNumber(name.value)!=true)) {
        name.className="form-input";
    }
    else {
        name.className="red-border";
        showMyRedMessage("Invalid Name");
    }
}

name.onfocus= function() {
}

// lastName.onblur = function() {
//     if (!((lastName.value.length>3) && (hasCapitalLetter(lastName.value)) && (hasNumber(lastName.value)!=true))) {
//         myP = document.getElementById("myMessage");
//         myP.className="red-style";
//         myP.textContent = 'Invalid Lastname';
//         lastName.className="red-border";
//         showMyRedMessage('Invalid Lastname2');
//     }
//     else {
//     }
// }

lastName.onblur = function() {
    if ((lastName.value.length>3) && (hasCapitalLetter(lastName.value)) && (hasNumber(lastName.value)!=true)) {
        lastName.className="form-input";
    }
    else {
        lastName.className="red-border";
        showMyRedMessage('Invalid Lastname'); 
    }
}

lastName.onfocus= function() {
    showMyRedMessage(' ');
}

dni.onblur = function() {
    if ((dni.value.length>7) &&! (hasCapitalLetter(dni.value)) &&! (hasLowerLetter(dni.value)) && (hasNumber(dni.value))) {
        dni.className="form-input";
    }
    else {
        dni.className="red-border";
        showMyRedMessage('Invalid DNI');
    }
}

dni.onfocus= function() {
    showMyRedMessage(' ');
}

mobileNumber.onblur = function() {
    if ((mobileNumber.value.length==10) &&! (hasCapitalLetter(mobileNumber.value)) &&! (hasLowerLetter(mobileNumber.value)) && (hasNumber(mobileNumber.value))) {
        mobileNumber.className="form-input";
    }
    else {
        mobileNumber.className="red-border-mobile-number";
        showMyRedMessage('Invalid Mobile Number');
    }
}

mobileNumber.onfocus= function() {
    showMyRedMessage(' ');
}

address.onblur = function() {
    var x = address.value.split(" ");
    if ((hasNumber(address.value)) && (quantityLetters(address.value)>5) && x.length>1) {
        address.className="form-input";
    }
    else {
        address.className="red-border";
        showMyRedMessage('Invalid Address');
    }
}

address.onfocus= function() {
    showMyRedMessage(' ');
}

location.onblur = function() {
    if ((quantityLetters(location.value)>3) &&! (hasEspecialChar(location.value))) {
        location.className="form-input";
    }
    else {
        location.className="red-border";
        showMyRedMessage('Invalid Location');
    }
}

location.onfocus= function() {
    showMyRedMessage(' ');
}

postalCode.onblur = function() {
    if (((quantityNumbers(postalCode.value) == 4) || (quantityNumbers(postalCode.value)== 5)) &&
        (quantityLetters(postalCode.value)==0)) {
            postalCode.className="form-input";
    }
    else {
        postalCode.className="red-border";
        showMyRedMessage('Invalid Postal Code');
    }
}

postalCode.onfocus= function() {
    showMyRedMessage(' ');
}

email.onblur = function() {
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(email.value)!=true) {
        email.className="form-input";
    }
    else {
        email.className="red-border";
        showMyRedMessage('Invalid Email');
    }
}

password.onblur = function() {
    if ((quantityLetters(password.value)>8) && (quantityNumbers(password.value)>0)) {
        password.className="form-input";
    }
    else {
        password.className="red-border";
        showMyRedMessage('Invalid Password')
    }
}

repeatPassword.onblur = function() {
    if (password.value != repeatPassword.value) {
        repeatPassword.className="red-border";
        showMyRedMessage('Invalid Password')
    }
    else{
        repeatPassword.className="form-input";
    }
}
}