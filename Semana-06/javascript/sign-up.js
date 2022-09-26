
window.onload = function() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var signUp = document.getElementById("sign-up");
    const myP = document.createElement("p");
    myP.innerHTML = "  ";
    myP.classList.add("validations");
    myP.setAttribute('id', 'myMessage');
    var mysignup = document.getElementById("sign-up-form");
    mysignup.appendChild(myP);
    
    function validFormatPassword(password) {  
       if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)==true)
            {
            return "Secure password";
            }
            else {
                return "Invalid password";
            }
           
    }
    
    password.onblur = function () {
        var myP = document.getElementById("myMessage");
        myP.textContent = validFormatPassword(password.value); 
    }

    password.focus = function () {
        var  myP = document.getElementById("myMessage");
        myP.textContent = "ingresando password";
    }

    function validFormatEmail(emailAddress) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)!=true) {
            return "Invalid format email" ;
        }    
    }
        
    email.onblur = function() {
        var myP = document.getElementById("myMessage");
        myP.textContent = validFormatEmail(email.value);
    }
    
    email.focus = function () {
        var  myP = document.getElementById("myMessage");
        myP.textContent = "ingresando correo";
    }

    function validFormatDate(birthDate) {
    if (/^([0-2][0-9]|3[0-1])(\/)(0[1-9]|1[0-2])\2(\d{4})$/.test(birthDate)!=true){
        return "Invalid BirthDate format"
    }
    }
    signUp.onclick = function(e) {
        e.preventDefault();
        
    }
}