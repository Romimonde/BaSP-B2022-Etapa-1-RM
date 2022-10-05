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
    var signUpButton = document.getElementById("sign-up")
    var nameSection = document.getElementById("name-section");
    var lastNameSection = document.getElementById("last-name-section");
    var emailSection = document.getElementById("email-section");
    var dniSection = document.getElementById("dni-section");
    var dobSection = document.getElementById("dob-section");
    var locationSection = document.getElementById("location-section");
    var addressSection = document.getElementById("address-section");
    var numberSection = document.getElementById("number-section");
    var zipSection = document.getElementById("zip-section");
    var passSection = document.getElementById("pass-section");
    var repPassSection = document.getElementById("rep-pass-section");
    var nameLabel = document.createElement("label");
    nameLabel.innerHTML = ' ';
    nameLabel.setAttribute("id", "name-label");
    nameSection.appendChild(nameLabel);
    var lastNameLabel = document.createElement("label");
    lastNameLabel.innerHTML = ' ';
    lastNameLabel.setAttribute("id", "last-name-label");
    lastNameSection.appendChild(lastNameLabel);
    var emailLabel = document.createElement("label");
    emailLabel.innerHTML = ' ';
    emailLabel.setAttribute("id","email-label");
    emailSection.appendChild(emailLabel);
    var dniLabel = document.createElement("label");
    dniLabel.innerHTML = ' ';
    dniLabel.setAttribute("id","dni-label");
    dniSection.appendChild(dniLabel);
    var dobLabel = document.createElement("label");
    dobLabel.innerHTML = ' ';
    dobLabel.setAttribute("id","dob-label");
    dobSection.appendChild(dobLabel);
    var locationLabel = document.createElement("label");
    locationLabel.innerHTML = ' ';
    locationLabel.setAttribute("id","location-label");
    locationSection.appendChild(locationLabel);
    var addressLabel = document.createElement("label");
    addressLabel.innerHTML = ' ';
    addressLabel.setAttribute("id","address-label");
    addressSection.appendChild(addressLabel);
    var numberLabel = document.createElement("label");
    numberLabel.innerHTML = ' ';
    numberLabel.setAttribute("id","number-label");
    numberSection.appendChild(numberLabel);
    var zipLabel = document.createElement("label");
    zipLabel.innerHTML = ' ';
    zipLabel.setAttribute("id","zip-label");
    zipSection.appendChild(zipLabel);
    var passLabel = document.createElement("label");
    passLabel.innerHTML = ' ';
    passLabel.setAttribute("id","pass-label");
    passSection.appendChild(passLabel);
    var repPassLabel = document.createElement("label");
    repPassLabel.innerHTML = ' ';
    repPassLabel.setAttribute("id","rep-pass-label");
    repPassSection.appendChild(repPassLabel);

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

    function showMessage(theMessage, theLabel) {
        var oneLabel = document.getElementById(theLabel);
        oneLabel.className="red-style";
        oneLabel.textContent = theMessage;
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
            showMessage("Invalid name","name-label");
        }
    }

    name.onfocus = function() {
        showMessage(" ","name-label");
    }

    lastName.onblur = function() {
        if (isValidLastName(lastName.value)) {
            lastName.className="form-input";
        }
        else {
            lastName.className="red-border";
            showMessage("Invalid Lastname","last-name-label");
        }
    }

    lastName.onfocus = function() {
        showMessage(" ","last-name-label");
    }

    dni.onblur = function() {
        if (isValidDni(dni.value)) {
            dni.className="form-input";
        }
        else {
            dni.className="red-border";
            showMessage("Invalid DNI","dni-label");
        }
    }

    dni.onfocus = function() {
        showMessage(" ", "dni-label");
    }

    birthDate.onblur = function() {
        if(isValidBirthDate(birthDate.value)) {
            birthDate.className="form-input";
        }
        else {
            birthDate.className="red-border";
            showMessage("Invalid Birth Date","dob-label");
        }
    }

    birthDate.onfocus = function() {
        showMessage(" ","dob-label");
    }

    mobileNumber.onblur = function() {
        if (isValidMobileNumber(mobileNumber.value)) {
            mobileNumber.className="form-input";
        }
        else {
            mobileNumber.className="red-border-mobile-number";
            showMessage("Invalid Number","number-label");
        }
    }

    mobileNumber.onfocus= function() {
        showMessage(" ","number-label");
    }

    address.onblur = function() {
        if (isValidAddress(address.value)) {
            address.className="form-input";
        }
        else {
            address.className="red-border";
            showMessage("Invalid Address","address-label");
        }
    }
    0.
    address.onfocus = function() {
        showMessage(" ","address-label");
    }

    location.onblur = function() {
        if (isValidLocation(location.value)) {
            location.className="form-input";
        }
        else {
            location.className="red-border";
            showMessage("Invalid Location","location-label");
        }
    }

    location.onfocus = function() {
        showMessage(" ","location-label");
    }

    postalCode.onblur = function() {
        if (isValidPostalCode(postalCode.value)) {
            postalCode.className="form-input";
        }
        else {
            postalCode.className="red-border";
            showMessage("Invalid postalCode","zip-label");
        }
    }

    postalCode.onfocus = function() {
        showMessage(" ","zip-label");
    }

    email.onblur = function() {
        if (isValidEmail(email.value)) {
            email.className="form-input";
        }
        else {
            email.className="red-border";
            showMessage("Invalid Email","email-label");
        }
    }

    postalCode.onfocus = function() {
        showMessage(" ","email-label");
    }

    password.onblur = function() {
        if (isValidPassword(password.value)) {
            password.className="form-input";
        }
        else {
            password.className="red-border";
            showMessage("Invalid Password","pass-label");
        }
    }

    password.onfocus = function() {
        showMessage(" ","pass-label");
    }

    repeatPassword.onblur = function() {
        if (isValidRepeatPassword(password.value, repeatPassword.value)) {
            repeatPassword.className="form-input";
        }
        else{
            repeatPassword.className="red-border";
            showMessage("Passwords doesn't match","rep-pass-label");
        }
    }

    repeatPassword.onfocus = function() {
        showMessage(" ","rep-pass-label");
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
                    if (data.success==true) {
                        alert(data.msg);
                        alert(JSON.stringify(data.data));
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