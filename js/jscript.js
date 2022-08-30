function validation() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    const error_m = document.getElementById("error_m");
    var text;

    error_m.style.padding = "10px";
    if (fname.length === 0) {
        text = "Enter your Firstname";
        error_m.innerHTML = text;
        return false;

    }
    else if (lname.length === 0) {
        text = "Enter your Lastname";
        error_m.innerHTML = text;
        return false;
    }
    
    else if (email.indexOf("@") == -1 || email.length < 10) {
        text = "Enter valid email";
        error_m.innerHTML = text;
        return false;
    }
    else if (isNaN(phone) || phone.length != 11) {
        text = "Enter valid number";
        error_m.innerHTML = text;
        return false;
    }
    else 
    {
        alert("Submitted Successfully!");
        return true;
    }
}
