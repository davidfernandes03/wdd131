// Footer Last Updated Time
// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const terms = document.getElementById("terms").checked;
    const successMessage = document.querySelector(".success-message");
    let valid = true;

    // Reset error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

    // Full Name Validation
    if (fullName === "") {
        showError("fullName", "Full name is required.");
        valid = false;
    }

    // Email Validation
    if (email === "") {
        showError("email", "Email is required.");
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError("email", "Enter a valid email.");
        valid = false;
    }

    // Password Validation
    if (password === "") {
        showError("password", "Password is required.");
        valid = false;
    }

    // Confirm Password Validation
    if (confirmPassword !== password) {
        showError("confirmPassword", "Passwords must match.");
        valid = false;
    }

    // Terms Validation
    if (!terms) {
        showError("terms", "You must agree to the terms.");
        valid = false;
    }

    // Success Feedback
    if (valid) {
        successMessage.style.display = "block";
        successMessage.textContent = "Registration successful!";
        saveToLocalStorage({ fullName, email, interest: document.getElementById("interest").value });
        this.reset();
    }
});

function showError(id, message) {
    const errorMessage = document.getElementById(id).nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}

function saveToLocalStorage(data) {
    const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    registrations.push(data);
    localStorage.setItem("registrations", JSON.stringify(registrations));
}