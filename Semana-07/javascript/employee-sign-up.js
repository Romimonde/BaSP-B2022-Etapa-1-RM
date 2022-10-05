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
    var nameLabel = document.getElementById("name-label");
    var myLabel = document.createElement("label");
    myLabel.innerHTML = "tuki";
    myLabel.setAttribute("id", "myMessageName");
    name.appendChild(myLabel);
    var myPLastName = document.createElement("p");
    myPLastName.innerHTML = " ";
    myPLastName.setAttribute("id", "myMessageLastName");
    mysignup.appendChild(myPLastName);
    var myPDni = document.createElement("p");
    myPDni.innerHTML = " ";
    myPDni.setAttribute("id", "myMessageDNI");
    mysignup.appendChild(myPDni);
    var myPBirthDate = document.createElement("p");
    myPBirthDate.innerHTML = " ";
    myPBirthDate.setAttribute("id", "myMessageBirthDate");
    mysignup.appendChild(myPBirthDate);
    var myPMobileNumber = document.createElement("p");
    myPMobileNumber.innerHTML = " ";
    myPMobileNumber.setAttribute("id", "myMessageMobileNumber");
    mysignup.appendChild(myPMobileNumber);
    var myPAddress = document.createElement("p");
    myPAddress.innerHTML = " ";
    myPAddress.setAttribute("id", "myMessageAddress");
    mysignup.appendChild(myPAddress);
    var myPLocation = document.createElement("p");
    myPLocation.innerHTML = " ";
    myPLocation.setAttribute("id", "myMessageLocation");
    mysignup.appendChild(myPLocation);
    var myPPostalCode = document.createElement("p");
    myPPostalCode.innerHTML = " ";
    myPPostalCode.setAttribute("id", "myMessagePostalCode");
    mysignup.appendChild(myPPostalCode);
    var myPEmail = document.createElement("p");
    myPEmail.innerHTML = " ";
    myPEmail.setAttribute("id", "myMessageEmail");
    mysignup.appendChild(myPEmail);
    var myPPassword = document.createElement("p");
    myPPassword.innerHTML = " ";
    myPPassword.setAttribute("id", "myMessagePassword");
    mysignup.appendChild(myPPassword);
    var myPRepeatPassword = document.createElement("p");
    myPRepeatPassword.innerHTML = " ";
    myPRepeatPassword.setAttribute("id", "myMessageRepeatPassword");
    mysignup.appendChild(myPRepeatPassword);

    if (localStorage.getItem("password")!=null) {
        name.setAttribute('value',localStorage.getItem("name"));
        lastName.setAttribute('value',localStorage.getItem("lastName"));
        email.setAttribute('value',localStorage.getItem("email"));
        dni.setAttribute('value',localStorage.getItem("dni"));
        birthDate.setAttribute('value',localStorage.getItem("birthDate"));
        location.setAttribute('value',localStorage.getItem("location"));
        address.setAttribute('value',localStorage.getItem("address"));
        postalCode.setAttribute('value',localStorage.getItem("postalCode"));
        password.setAttribute('value',localStorage.getItem("password"));
        mobileNumber.setAttribute('value',localStorage.getItem("mobileNumber"));
        }

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
        var numbers = '0123456789';
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

    //INVALID MESSAGES FUNCTIONS
    function showNameMessage(theMessage) {
        myPName = document.getElementById("myMessageName");
        myPName.className="red-style";
        myPName.textContent = theMessage;
    }

    function dontShowNameMessage(theMessage) {
        myPName = document.getElementById("myMessageName");
        myPName.className="non-visible";
    }

    function showLastNameMessage(theMessage) {
        myPLastName = document.getElementById("myMessageLastName");
        myPLastName.className="red-style";
        myPLastName.textContent = theMessage;
    }

    function dontShowLastNameMessage(theMessage) {
        myPLastName = document.getElementById("myMessageLastName");
        myPLastName.className="non-visible";
    }

    function showDniMessage(theMessage) {
        myPDni = document.getElementById("myMessageDNI");
        myPDni.className="red-style";
        myPDni.textContent = theMessage;
    }

    function dontShowDniMessage(theMessage) {
        myPDni = document.getElementById("myMessageDNI");
        myPDni.className="non-visible";
    }

    function showBirthDateMessage(theMessage) {
        myPBirthDate = document.getElementById("myMessageBirthDate");
        myPBirthDate.className="red-style";
        myPBirthDate.textContent = theMessage;
    }

    function dontShowBirthDateMessage(theMessage) {
        myPBirthDate = document.getElementById("myMessageBirthDate");
        myPBirthDate.className="non-visible";
    }

    function showMobileNumberMessage(theMessage) {
        myPMobileNumber = document.getElementById("myMessageMobileNumber");
        myPMobileNumber.className="red-style";
        myPMobileNumber.textContent = theMessage;
    }

    function dontShowMobileNumberMessage(theMessage) {
        myPMobileNumber = document.getElementById("myMessageMobileNumber");
        myPMobileNumber.className="non-visible";
    }

    function showAddressMessage(theMessage) {
        myPAddress = document.getElementById("myMessageAddress");
        myPAddress.className="red-style";
        myPAddress.textContent = theMessage;
    }

    function dontShowAddressMessage(theMessage) {
        myPAddress = document.getElementById("myMessageAddress");
        myPAddress.className="non-visible";
    }

    function showLocationMessage(theMessage) {
        myPLocation = document.getElementById("myMessageLocation");
        myPLocation.className="red-style";
        myPLocation.textContent = theMessage;
    }

    function dontShowLocationMessage(theMessage) {
        myPLocation = document.getElementById("myMessageLocation");
        myPLocation.className="non-visible";
    }

    function showPostalCodeMessage(theMessage) {
        myPPostalCode = document.getElementById("myMessagePostalCode");
        myPPostalCode.className="red-style";
        myPPostalCode.textContent = theMessage;
    }

    function dontShowPostalCodeMessage(theMessage) {
        myPPostalCode = document.getElementById("myMessagePostalCode");
        myPPostalCode.className="non-visible";
    }

    function showEmailMessage(theMessage) {
        myPEmail = document.getElementById("myMessageEmail");
        myPEmail.className="red-style";
        myPEmail.textContent = theMessage;
    }

    function dontShowEmailMessage(theMessage) {
        myPEmail = document.getElementById("myMessageEmail");
        myPEmail.className="non-visible";
    }

    function showPasswordMessage(theMessage) {
        myPPassword = document.getElementById("myMessagePassword");
        myPPassword.className="red-style";
        myPPassword.textContent = theMessage;
    }

    function dontShowPasswordMessage(theMessage) {
        myPPassword = document.getElementById("myMessagePassword");
        myPPassword.className="non-visible";
    }

    function showRepeatPasswordMessage(theMessage) {
        myPRepeatPassword = document.getElementById("myMessageRepeatPassword");
        myPRepeatPassword.className="red-style";
        myPRepeatPassword.textContent = theMessage;
    }

    function dontShowRepeatPasswordMessage(theMessage) {
        myPRepeatPassword = document.getElementById("myMessageRepeatPassword");
        myPRepeatPassword.className="non-visible";
    }

    //VALIDATIONS FUNCTIONS
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
        showNameMessage("Invalid Name");
    }
}

name.onfocus = function() {
    dontShowNameMessage();
}

lastName.onblur = function() {
    if (isValidLastName(lastName.value)) {
        lastName.className="form-input";
    }
    else {
        lastName.className="red-border";
        showLastNameMessage('Invalid Lastname'); 
    }
}

lastName.onfocus = function() {
    dontShowLastNameMessage();
}

dni.onblur = function() {
    if (isValidDni(dni.value)) {
        dni.className="form-input";
    }
    else {
        dni.className="red-border";
        showDniMessage('Invalid DNI');
    }
}

dni.onfocus = function() {
    dontShowDniMessage();
}

birthDate.onblur = function() {
    if(isValidBirthDate(birthDate.value)) {
        birthDate.className="form-input";
    }
    else {
        birthDate.className="red-border";
        showBirthDateMessage('Invalid Date')
    }
}

birthDate.onfocus = function() {
    dontShowBirthDateMessage();
}

mobileNumber.onblur = function() {
    if (isValidMobileNumber(mobileNumber.value)) {
        mobileNumber.className="form-input";
    }
    else {
        mobileNumber.className="red-border-mobile-number";
        showMobileNumberMessage('Invalid Mobile Number');
    }
}

mobileNumber.onfocus= function() {
    dontShowMobileNumberMessage();
}

address.onblur = function() {
    if (isValidAddress(address.value)) {
        address.className="form-input";
    }
    else {
        address.className="red-border";
        showAddressMessage('Invalid Address');
    }
}

address.onfocus = function() {
    dontShowAddressMessage();
}

location.onblur = function() {
    if (isValidLocation(location.value)) {
        location.className="form-input";
    }
    else {
        location.className="red-border";
        showLocationMessage('Invalid Location');
    }
}

location.onfocus = function() {
    dontShowLocationMessage();
}

postalCode.onblur = function() {
    if (isValidPostalCode(postalCode.value)) {
        postalCode.className="form-input";
    }
    else {
        postalCode.className="red-border";
        showPostalCodeMessage('Invalid Postal Code');
    }
}

postalCode.onfocus = function() {
    dontShowPostalCodeMessage();
}

email.onblur = function() {
    if (isValidEmail(email.value)) {
        email.className="form-input";
    }
    else {
        email.className="red-border";
        showEmailMessage('Invalid Email');
    }
}

postalCode.onfocus = function() {
    dontShowEmailMessage();
}

password.onblur = function() {
    if (isValidPassword(password.value)) {
        password.className="form-input";
    }
    else {
        password.className="red-border";
        showPasswordMessage('Invalid Password')
    }
}

password.onfocus = function() {
    dontShowPasswordMessage();
}

repeatPassword.onblur = function() {
    if (isValidRepeatPassword(password.value, repeatPassword.value)) {
        repeatPassword.className="form-input";
    }
    else{
        repeatPassword.className="red-border";
        showRepeatPasswordMessage('Invalid Password')
    }
}

repeatPassword.onfocus = function() {
    dontShowRepeatPasswordMessage()
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
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('Data:' + data);
                if (data.success==true) {
                    alert(data.msg);
                    window.localStorage.setItem('name', name.value);
                    window.localStorage.setItem('lastName', lastName.value);
                    window.localStorage.setItem('email', email.value);
                    window.localStorage.setItem('dni', dni.value);
                    window.localStorage.setItem('birthDate', birthDate.value);
                    window.localStorage.setItem('location', location.value);
                    window.localStorage.setItem('address', address.value);
                    window.localStorage.setItem('postalCode', postalCode.value);
                    window.localStorage.setItem('mobileNumber', mobileNumber.value);
                    window.localStorage.setItem('lastName', lastName.value);
                    window.localStorage.setItem('password', password.value);
                }
                else {
                    console.log("not data yet");
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }
    else {
        alert("Please check the information");
    }
}
}