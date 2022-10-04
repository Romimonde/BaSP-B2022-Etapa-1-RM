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
    var signUpButton = document.getElementById("sign-up")
    // var myP = document.createElement("p");
    // myP.innerHTML = " ";
    // myP.setAttribute("id", "myMessage");
    // mysignup.appendChild(myP);
    var myPName = document.createElement("p");
    myPName.innerHTML = "Name";
    myPName.setAttribute("id", "myMessageName");
    mysignup.appendChild(myPName);
    var myPLastName = document.createElement("p");
    myPLastName.innerHTML = "LastName";
    myPLastName.setAttribute("id", "myMessageLastName");
    mysignup.appendChild(myPLastName);
    var myPDni = document.createElement("p");
    myPDni.innerHTML = "DNI";
    myPDni.setAttribute("id", "myMessageDNI");
    mysignup.appendChild(myPDni);
    var myPBirthDate = document.createElement("p");
    myPBirthDate.innerHTML = "Birth date";
    myPBirthDate.setAttribute("id", "myMessageBirthDate");
    mysignup.appendChild(myPBirthDate);
    var myPMobileNumber = document.createElement("p");
    myPMobileNumber.innerHTML = "Mobile Number";
    myPMobileNumber.setAttribute("id", "myMessageMobileNumber");
    mysignup.appendChild(myPMobileNumber);
    var myPAddress = document.createElement("p");
    myPAddress.innerHTML = "Address";
    myPAddress.setAttribute("id", "myMessageAddress");
    mysignup.appendChild(myPAddress);
    var myPLocation = document.createElement("p");
    myPLocation.innerHTML = "Location";
    myPLocation.setAttribute("id", "myMessageLocation");
    mysignup.appendChild(myPLocation);
    var myPPostalCode = document.createElement("p");
    myPPostalCode.innerHTML = "Postal Code";
    myPPostalCode.setAttribute("id", "myMessagePostalCode");
    mysignup.appendChild(myPPostalCode);
    var myPEmail = document.createElement("p");
    myPEmail.innerHTML = "Email";
    myPEmail.setAttribute("id", "myMessageEmail");
    mysignup.appendChild(myPEmail);
    var myPPassword = document.createElement("p");
    myPPassword.innerHTML = "Password";
    myPPassword.setAttribute("id", "myMessagePassword");
    mysignup.appendChild(myPPassword);
    var myPRepeatPassword = document.createElement("p");
    myPRepeatPassword.innerHTML = "Repeat Password";
    myPRepeatPassword.setAttribute("id", "myMessageRepeatPassword");
    mysignup.appendChild(myPRepeatPassword);

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
    myPName = document.getElementById("myMessageName");
    myPName.className="red-style";
    myPName.textContent = theMessage;
}

function isValidName(data) {
    if ((data.length>3) && (hasCapitalLetter(data)) && (hasNumber(data)!=true)) {
        return true;
    }
    else {
        return false;
    }
}
function isValidLastName(data) {
    if ((data.length>3) && (hasCapitalLetter(data)) && (hasNumber(data)!=true)) {
        return true;
    }
    else {
        return false;
    }
}

function isValidDni(data) {
    if ((data.length>7) &&! (hasCapitalLetter(data)) &&! (hasLowerLetter(data)) 
    && (hasNumber(data))) {
        return true;
    }
    else {
        return false;
    }
}

function isValidBirthDate(data) {
    var currentDate = new Date();
    var typedDate = new Date(data);
    if (currentDate > typedDate) {
        return true;
    }
    else {
        return false;
    }
}

function isValidMobileNumber(data) {
    if ((data.length==10) &&! (hasCapitalLetter(data)) &&! (hasLowerLetter(data))
    && (hasNumber(data))) {
        return true;
    }
    else {
        return false;
    }
}

function isValidAddress(data) {
    var x = data.split(" ");
    if ((hasNumber(data)) && (quantityLetters(data)>5) && x.length>1) {
        return true;
    }
    else {
        return false;
    }
}

function isValidLocation(data) {
    if ((quantityLetters(data)>3) &&! (hasEspecialChar(data))) {
        return true;
    }
    else {
        return false;
    }
}

function isValidPostalCode(data) {
    if (((quantityNumbers(data) == 4) || (quantityNumbers(data)== 5)) &&
    (quantityLetters(data)==0)) {
        return true;
    }
    else {
        return false;
    }
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

function isValidPassword(data) {
    if ((quantityLetters(data)>0) && (quantityNumbers(data)>0) && (data.length>7)) {
        return true;
    }
    else {
        return false;
    }
}

function isValidRepeatPassword(data, data2) {
    if ((data) != (data2)) {
        return false;
    }
    else {
        return true;
    }
}

function formatDate(myDate) {
    var arr = [];
    arr = myDate.split("-");
    fecha = arr[1]+"/"+arr[2]+"/"+arr[0];
    return fecha;
}

/*VALIDATIONS*/
name.onblur = function() {
    if (isValidName(name.value)) {
        name.className="form-input";
    }
    else {
        name.className="red-border";
        showMyRedMessage("Invalid Name");
    }
}

name.onfocus = function() {
}

lastName.onblur = function() {
    if (isValidLastName(lastName.value)) {
        lastName.className="form-input";
    }
    else {
        lastName.className="red-border";
        showMyRedMessage('Invalid Lastname'); 
    }
}

lastName.onfocus = function() {
    showMyRedMessage(' ');
}

dni.onblur = function() {
    if (isValidDni(dni.value)) {
        dni.className="form-input";
    }
    else {
        dni.className="red-border";
        showMyRedMessage('Invalid DNI');
    }
}

dni.onfocus = function() {
    showMyRedMessage(' ');
}

birthDate.onblur = function() {
    if(isValidBirthDate(birthDate.value)) {
        birthDate.className="form-input";
    }
    else {
        birthDate.className="red-border";
        showMyRedMessage('Invalid date')
    }
}

mobileNumber.onblur = function() {
    if (isValidMobileNumber(mobileNumber.value)) {
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
    if (isValidAddress(address.value)) {
        address.className="form-input";
    }
    else {
        address.className="red-border";
        showMyRedMessage('Invalid Address');
    }
}

address.onfocus = function() {
    showMyRedMessage(' ');
}

location.onblur = function() {
    if (isValidLocation(location.value)) {
        location.className="form-input";
    }
    else {
        location.className="red-border";
        showMyRedMessage('Invalid Location');
    }
}

location.onfocus = function() {
    showMyRedMessage(' ');
}

postalCode.onblur = function() {
    if (isValidPostalCode(postalCode.value)) {
        postalCode.className="form-input";
    }
    else {
        postalCode.className="red-border";
        showMyRedMessage('Invalid Postal Code');
    }
}

postalCode.onfocus = function() {
    showMyRedMessage(' ');
}

email.onblur = function() {
    if (isValidEmail(email.value)) {
        email.className="form-input";
    }
    else {
        email.className="red-border";
        showMyRedMessage('Invalid Email');
    }
}

password.onblur = function() {
    if (isValidPassword(password.value)) {
        password.className="form-input";
    }
    else {
        password.className="red-border";
        showMyRedMessage('Invalid Password')
    }
}

password.onfocus = function() {
}

repeatPassword.onblur = function() {
    if (isValidRepeatPassword(password.value, repeatPassword.value)) {
        repeatPassword.className="form-input";
    }
    else{
        repeatPassword.className="red-border";
        showMyRedMessage('Invalid Password')
    }
}

repeatPassword.onfocus = function() {

}

signUpButton.onclick = function(e){
    e.preventDefault();
    var signUpArray = [];
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
     if (isValidName(name.value) && isValidLastName(lastName.value) && isValidEmail(email.value)
        && isValidDni(dni.value) && isValidBirthDate(birthDate.value) && isValidLocation(location.value)
        && isValidAddress(address.value) && isValidPostalCode(postalCode.value)
        && isValidMobileNumber(mobileNumber.value) && isValidPassword(password.value)) {
         signUpArray.push('name=' + name.value);
         signUpArray.push('&lastName=' + lastName.value);
         signUpArray.push('&email=' + email.value);
         signUpArray.push('&dni=' + dni.value);
         signUpArray.push('&dob=' + formatDate(birthDate.value));
         signUpArray.push('&city=' + location.value);
         signUpArray.push('&address=' + address.value);
         signUpArray.push('&zip=' + postalCode.value);
         signUpArray.push('&phone=' + mobileNumber.value);
         signUpArray.push('&password=' + password.value);
         for (i=0; i < signUpArray.length; i++){
            url=url+signUpArray[i];
         }
         console.log(signUpArray);
         fetch(url)
             .then(function(response) {
                //  if (response.ok) {
                //      alert("Signup in Progress");
                //  }
                //   if (response.success==true) {
                //       alert(response.msg);
                //  }
                return response.json();
             })
             .then(function(data) {
                console.log("en data " + data.sucess);
                if (data.sucess==true) {
                    alert(data.msg);
                }
                else {
                    console.log("not data yet");
                }
              //  console.log(data.msg);
             })
             .catch(function(error) {
              //  alert(error.msg+"error");
                console.log(error);
             })
    }
    else {
        alert("Please check the information");
    }
}
}