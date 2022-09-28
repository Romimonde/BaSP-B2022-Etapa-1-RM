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
    var signUp = document.getElementById("sign-up");
    var mysignup = document.getElementById("sign-up-form");
    const myPRed = document.createElement("p");
    const myPGreen = document.createElement("p");
    myPRed.innerHTML = "  ";
    myPGreen.innerHTML = "  ";
    myPRed.classList.add("red-style");
    myPRed.setAttribute('id', 'myMessageRed');
    myPGreen.classList.add("green-style");
    myPGreen.setAttribute('id', 'myMessageGreen')
    mysignup.appendChild(myPRed);
    mysignup.appendChild(myPGreen);

/*FUNCTIONS*/
function hasCapitalLetter(userInput) {
    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (i=0; i < userInput.length; i++){
        if (capitalLetters.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasLowerLetter(userInput) {
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    for (i=0; i < userInput.length; i++){
        if (lowerLetters.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasNumber(userInput) {
    var numbers = "0123456789";
    for (i=0; i < userInput.length; i++){
        if (numbers.indexOf(userInput.charAt(i),0)!=-1)
            return true;
    }
    return false;
}

function hasEspecialChar(userInput) {
    var especialChars = "!@#$%^&*()_-+=',./?";
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

/*VALIDATIONS*/
name.onblur = function() {
    if ((name.value.length>3) && (hasCapitalLetter(name.value)) && (hasNumber(name.value)!=true)) {
        alert("Correct name");
    }
    else {
        alert("Invalid name " + name.value);
    }
    return true;
}

lastName.onblur = function() {
    if ((lastName.value.length>3) && (hasCapitalLetter(lastName.value)) && (hasNumber(lastName.value)!=true)) {
        alert("Correct last name");
    }
    else {
        alert("Invalid last name " + lastName.value);
    }
    return true;
}

dni.onblur = function() {
    if ((dni.value.length>7) &&! (hasCapitalLetter(dni.value)) &&! (hasLowerLetter(dni.value)) && (hasNumber(dni.value))) {
        alert("Correct DNI");
    }
    else {
        alert("Invalid DNI " + dni.value);
    }
    return true;
}

mobileNumber.onblur = function() {
    if ((mobileNumber.value.length==10) &&! (hasCapitalLetter(mobileNumber.value)) &&! (hasLowerLetter(mobileNumber.value)) && (hasNumber(mobileNumber.value))) {
        alert("Correct Mobile Number");
    }
    else {
        alert("Invalid Mobile Number " + mobileNumber.value);
    }
    return true;
}

address.onblur = function() {
    var x = address.value.split(" ");
    if ((hasNumber(address.value)) && (quantityLetters(address.value)>5) && x.length>1) {
        alert("Correct address");
    }
    else {
        alert("Invalid address");
    }
    return true;
}

location.onblur = function() {
    if ((quantityLetters(location.value)>3) &&! (hasEspecialChar(location.value))) {
        alert("Correct location");
    }
    else {
        alert("Invalid location " + location.value);
    }
    return true;
}

postalCode.onblur = function() {
    if (((quantityNumbers(postalCode.value) == 4) || (quantityNumbers(postalCode.value)== 5)) &&
        (quantityLetters(postalCode.value)==0)) {
        alert("Correct postal Code");
    }
    else {
        alert("Invalid postal Code");
    }
    return true;
}

email.onblur = function() {
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (regexEmail.test(email.value)!=true) {
        alert("Invalid format email");
    }
    else {
        alert("Valid email");
    }
}

password.onblur = function() {
    if ((quantityLetters(password.value)>8) && (quantityNumbers(password.value)>0)) {
    }
    else {
        alert("Invalid Password" + password.value);
    }
    return true;
}

repeatPassword.onblur = function() {
    if (password.value != repeatPassword.value) {
        alert("Password and repeat password are different")
    }
    return true;
}
}