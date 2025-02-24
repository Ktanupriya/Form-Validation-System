document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let isValid = true;

    // Full Name Validation
    let fullName = document.getElementById("fullName").value;
    if (fullName.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone Number Validation
    let phone = document.getElementById("phone").value;
    if (phone.length !== 10 || phone === "123456789") {
        document.getElementById("phoneError").textContent = "Invalid phone number";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Password Validation
    let password = document.getElementById("password").value;
    if (password.length < 8 || password.toLowerCase() === "password" || password === fullName) {
        document.getElementById("passwordError").textContent = "Weak password";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Confirm Password Validation
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    // If the form is valid, store the user data and redirect
    if (isValid) {
        // Save user data (optional: simulate backend storage)
        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("registeredPassword", password);

        // Alert and Redirect to Login Page
        alert("Registration successful! Redirecting to login page...");
        window.location.href = "login.html";
    }
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get stored credentials from localStorage
    let storedEmail = localStorage.getItem("registeredEmail");
    let storedPassword = localStorage.getItem("registeredPassword");

    // Get user input from the login form
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

});

