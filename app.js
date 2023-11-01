


function signUpData() {
    event.preventDefault();
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("c-password").value;

    var arr = JSON.parse(localStorage.getItem("userDataArray")) || [];

    // Check if the email is already registered
    var  isEmailTaken = arr.some(user => user.email === email);

    if (isEmailTaken) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email is already registered. Please use a different email.'
        });
        return;
    }

    // Validation for name
    if (fullname.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name should not be empty.',
    
          })
        return;
    } else if (fullname.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Name should be at least 5 characters long.',
     
          })
        return;

        
    } else if (fullname.length >= 30) {
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name should be max 30 characters long.',
     
          })
        return;
    } else if (/\s{2,}/.test(fullname)) {
  
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name should not contain consecutive spaces.',
     
          })
        
        return;
    } else if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(fullname)) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name should not contain special characters or numbers.',
     
          })
        
        return;
    }

    // Validation for email
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid email address.',
     
          })
        
        return;
    }

    // Validation for password
    if (password.length < 8) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password should be at least 8 characters long.',
     
          })
        
        return;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\])/.test(password)) {
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password should contain at least one letter, one number, and one special character.',
     
          })
        
        return;
    }

    // Validation for confirm password
    if (password !== cPassword) {

        

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password and Confirm Password do not match.',
     
          })
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
            Swal.fire({
                icon: 'success',
                title: `Welcome, ${user.name}! You are now logged in.`,
                showConfirmButton: false,
                timer: 1500
            });
            // Redirect to the dashboard or other page
            setTimeout(function() {
                window.location.href = "dashboard.html";
              }, 1000);
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password. Please try again.'
            });
          
        }
    }
    
    
    function logout(){

        setTimeout(function() {
            window.location.href = "./index.html";
          }, 1000);
    }
    
    
    




    // dashboard work 
    function blog(){
       

        
         var title = document.getElementById("title")
    var  desc =document.getElementById("Description")

    var  main =document.getElementById("mains")
 if (title.value.trim()&&desc.value.trim()){
    main.innerHTML +=`
    <div class="card main-3 ">  
    <div class="card-header">
Blog 
    </div>
 
    <div class="card-body">
      <blockquote class="blockquote mb-3 ">
<div id="title-content">
${title.value}
</div>

      <div id="desc-content">
${desc.value}      </div>
      </blockquote>
  
    </div></div>
    `
title.value =""
desc.value =""
}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter title and description',
 
      })
}
    }
   























