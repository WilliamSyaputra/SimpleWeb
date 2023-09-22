
function showError(msg) {
    let error = document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate() {
    //1. dapetin Value dari html
    let username = document.getElementById("txtUsername").value
    let email = document.getElementById("txtEmail").value
    
    let genderMale = document.getElementById("rMale").checked
    let genderFemale = document.getElementById("rFemale").checked

    let chkBox = document.getElementById("chkAgree").checked

    //2. validasi
    //jika error (tammpilin error melalui id = error)
    //jika tidak error (return true) agar dia jalannin action

    // Username not empty
    if (username == "") {
        return showError("Username Must be Filled")
    }
    // email ends with .com
    else if (!email.endsWith(".com") ) {
        return showError ("email must end with .Com")
    }
    // email haru ada @
    // string.indexOf("@")
    else if (email.indexOf('@') == -1) {
        return showError ("email must contain @")
    }
    // gender must be selected
    else if (genderMale == false && genderFemale == false) {
        return showError ("Gender must be selected")
    }
    // checkbox must be checked
    else if (chkBox == false){
        return showError ("must agree to term and condition")
    }
}

function hasSpecialChar(str){
    for (let i = 0; i <str.length; i++){
        if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')
        || (str[i] >= '0' && str[i] <= '9')))
        return true;
    }

    return false;
}