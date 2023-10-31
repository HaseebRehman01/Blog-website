
// function signUpData(){
//     event.preventDefault()
//  var fullname = document.getElementById("fullname").value
// var email = document.getElementById("email").value
// var password = document.getElementById("password").value
// var cPassword = document.getElementById("c-password").value   


// var arr = JSON.parse(localStorage.getItem("userDataArray")) || [];

// // Check if the email is already registered
// const isEmailTaken = arr.some(user => user.email === email);

// if (isEmailTaken) {
//     alert("Email is already registered. Please use a different email.");}
// // Validation for name

// if (fullname.trim() === "") {
//     alert("Name should not be empty.");
//     return; 
// } else if (fullname.length < 5) {
//     alert("Name should be at least 5 characters long.");
//     return; 
// } else if (fullname.length >= 30) {
//     alert("Name should be max 30 characters long.");
//     return; 
// } else if (/\s{2,}/.test(fullname)) {
//     alert("Name should not contain consecutive spaces.");
//     return; 
// }
//  else if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(fullname)) {
//     alert("Name should not contain special characters or numbers.");
//     return; 
// } 
// // validation for email
// var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//  if (!emailRegex.test(email)) {
//     alert("Please enter a valid email address.");
//     return; 
// }

// // Validation for password
// if (password.length < 8) {
//     alert("Password should be at least 8 characters long.");
//     return;
// } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\])/.test(password)) {
//     alert("Password should contain at least one letter, one number, and one special character.");
//     return;
// }

// // Validation for confirm password
// if (password !== cPassword) {
//     alert("Password and Confirm Password do not match.");
//     return;
// }
// else {



// var gettobjValue = {
//     name: fullname,
//     email: email,
//     password: password,
//     cPassword: cPassword
// };
// arr.push(gettobjValue);
// localStorage.setItem("userDataArray", JSON.stringify(arr)); 
// }
// alert(fullname + "You are registered ")
// }


function signUpData() {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("c-password").value;

    var arr = JSON.parse(localStorage.getItem("userDataArray")) || [];

    // Check if the email is already registered
    const isEmailTaken = arr.some(user => user.email === email);

    if (isEmailTaken) {
        alert("Email is already registered. Please use a different email.");
        return;
    }

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
    } else if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(fullname)) {
        alert("Name should not contain special characters or numbers.");
        return;
    }

    // Validation for email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validation for password
    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\])/.test(password)) {
        alert("Password should contain at least one letter, one number, and one special character.");
        return;
    }

    // Validation for confirm password
    if (password !== cPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    var gettobjValue = {
        name: fullname,
        email: email,
        password: password,
        cPassword: cPassword
    };
    arr.push(gettobjValue);
    localStorage.setItem("userDataArray", JSON.stringify(arr));
    alert(fullname + " You are registered.");

    setTimeout(function() {
        window.location.href = "./login.html";
      }, 2000);
    }
    
    function login() {
        event.preventDefault()
        var loginEmail = document.getElementById("login-email").value;
        var loginPassword = document.getElementById("login-password").value;
        var arr = JSON.parse(localStorage.getItem("userDataArray")) || [];
    
        // Check if there's a user with the provided email and password
        const user = arr.find(u => u.email === loginEmail && u.password === loginPassword);
    
        if (user) {
            alert(`Welcome,! You are now logged in.`);
            // Redirect to the dashboard or other page
            setTimeout(function() {
                window.location.href = "dashboard.html";
              }, 1000);
            
        } else {
            alert("Invalid email or password. Please sign up first");
            setTimeout(function() {
                window.location.href = "index.html";
              }, 1000);
        }
    }
    // This corrected code will use the loginEmail and loginPassword variables when checking for a user with the provided email and password.
    
    
    
    
    
    
























// function registerUser() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Retrieve the existing user data from local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if the email is already registered
//     const isEmailTaken = users.some(user => user.email === email);

//     if (isEmailTaken) {
//         alert("Email is already registered. Please use a different email.");
//     } else {
//         // Create a new user object
//         const newUser = { name, email, password };

//         // Add the new user to the array
//         users.push(newUser);

//         // Update the user data in local storage
//         localStorage.setItem("users", JSON.stringify(users));

//         alert("Registration successful.");
//     }
// }

// login
// // Login function
// function loginUser() {
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;

//     // Retrieve the array of user objects from local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if there's a user with the provided email and password
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//         alert(`Welcome, ${user.name}! You are now logged in.`);
//         // Redirect to the dashboard or other page
//     } else {
//         alert("Invalid email or password. Please try again.");
//     }
// }
// // Alternative to using some() for email check
// let isEmailTaken = false;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//         isEmailTaken = true;
//         break; // Exit the loop early since a match was found
//     }
// }

// if (isEmailTaken) {
//     alert("Email is already registered. Please use a different email.");
// } else {
//     // Continue with user registration
// }

// //find alternative
// let user = null;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email && users[i].password === password) {
//         user = users[i];
//         break; // Exit the loop when a matching user is found
//     }
// }

// if (user) {
//     // User with matching email and password found
// } else {
//     // No matching user found
// }
// // Validation for name
//     if (name.trim() === "") {
//         alert("Name should not be empty.");
//         return; // Prevent further execution
//     }

//     // Validation for password and confirm password
//     if (password !== confirmPassword) {
//         alert("Password and Confirm Password do not match.");
//         return; // Prevent further execution
//     }

//     // Retrieve the existing user data from local storage
//     const users = JSON.parse(localStorage.getItem("users")) || [];


//   // Validation for name
//     if (name.trim() === "") {
//         alert("Name should not be empty.");
//         return;
//     }

//     // Validation for email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.match(emailRegex)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Validation for password
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
//     if (!password.match(passwordRegex)) {
//         alert("Password must be 8-20 characters and include letters, numbers, and one special character.");
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert("Password and Confirm Password do not match.");
//         return;
//     }

//     // ...rest of the code
// }


