function validateForm() {
    // Input values ko nikalna
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm').value;

    // 1. Check ki Full Name khali toh nahi hai
    if (name === "") {
        alert("Please enter your Full Name");
        return false; 
    }

    // 2. Email validation (Basic format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid Email Address");
        return false;
    }

    // 3. Password length check (Minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // 4. Confirm Password matching check
    if (password !== confirmPassword) {
        alert("Passwords do not match! Please check again.");
        return false;
    }

    // Agar sab sahi hai
    alert("Registration Successful!");
    return true;
}
// get buyer name from storage
const buyerName = localStorage.getItem("loggedInUser");

// login guard
if (!buyerName) {
  window.location.href = "buyer-login.html"; // ya login.html
} else {
  document.getElementById("buyerName").innerText = buyerName;
}

// logout
function logout() {
  localStorage.clear();
  window.location.href = "buyer-login.html";
}
