
function signUpData(){
    event.preventDefault()
 var fullname = document.getElementById("fullname").value
var email = document.getElementById("email").value
var password = document.getElementById("password").value
var cPassword = document.getElementById("c-password").value   

// Validation for name

if (fullname.trim() === "") {
    alert("Name should not be empty.");
    return; 
} else if (fullname.length < 5) {
    alert("Name should be at least 5 characters long.");
    return; 
} else if (fullname.length >= 30) {
    alert("Name should be max 30 characters long.");
    return; 
} else if (/\s{2,}/.test(fullname)) {
    alert("Name should not contain consecutive spaces.");
    return; 
}
 else if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.exec(fullname)) {
    alert("Name should not contain special characters or numbers.");
    return; 
} 
// validation for email
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return; // Prevent further execution
}

// Validation for password
if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return;
} else if (!/[A-Za-z]/.test(password)) {
    alert("Password should contain at least one letter.");
    return;
} else if (!/\d/.test(password)) {
    alert("Password should contain at least one number.");
    return;
} else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
    alert("Password should contain at least one special character.");
    return;
}

// Validation for confirm password
if (password !== cPassword) {
    alert("Password and Confirm Password do not match.");
    return;
}
else {
    alert(fullname +" You are registered")
}


}
