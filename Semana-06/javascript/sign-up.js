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
    const myPRed = document.createElement("p");
    const myPGreen = document.createElement("p");
    myPRed.innerHTML = "  ";
    myPGreen.innerHTML = "   ";
    myPRed.classList.add("red-style");
    myPRed.setAttribute('id', 'myMessageRed');
    myPGreen.classList.add("green-style");
    myPGreen.setAttribute('id', 'myMessageGreen')
    var mysignup = document.getElementById("sign-up-form");
    mysignup.appendChild(myPRed);
    mysignup.appendChild(myPGreen);

    /*FUNCTIONS VALIDATIONS*/
    function hasUpper() {
        var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var hasCapitalLetters = false;

    for (i=0; i<password.value.lenght; i++)
        if (capitalLetters.indexOf(password.value.charAt(i),0) !=-1)
        hasCapitalLetters = true;
    }

    function hasLower() {
        var lowLetters = "abcdefghijklmnopqrstuvwxyz"
        var hasLowLetters = false;
    }

    function hasNumbers() {
        var numbers = "0123456789"
        var hasNumbers = false;
    }

        if (hasUpper(password.value.lenght)>1)
        alert("Secure")

    /*PASSWORD VALIDATION*/
    
//  function validFormatPassword(password) {  
//     if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)==true)
//          {
//          return "Secure password";
//         }
//              else {
//                  return "Invalid password";
//         }
           
//     }

    function validFormatPassword(password) {
        var numbers = "0123456789";
        var validationNumber = false;

        for(var i=0; i < password.value.lenght; i++)
        if (numbers.i(password.value(i),0) !=-1){
            validationNumber = true;
        }
    }

    password.onblur = function() {
        var myPRed = document.getElementById("myMessageRed");
        myPRed.textContent = validFormatPassword(password.value); 
    }

    password.onfocus = function() {
        var myPGreen = document.getElementById("myMessageGreen");
        myPGreen.textContent = "Writing password";
}

    function validFormatEmail(emailAddress) {
        if ( /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(emailAddress)!=true) {
            return "Invalid format email";
        }    
    }
        
    email.onblur = function() {
        var myPRed = document.getElementById("myMessageRed");
        myPRed.textContent = validFormatEmail(email.value);
    }
    
    email.onfocus = function() {
        var myPGreen = document.getElementById("myMessageGreen");
        myPGreen.textContent = "Writing e-mail";
    }

    // email.onfocus = function () {
    //     var myPGreen = document.getElementById("myMessageGreen");
    //     myPGreen.textContent = "writing email";
    // }

    signUp.onclick = function(e) {
        e.preventDefault();
        
    }
}