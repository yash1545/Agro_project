document
  .getElementById("farmerRegisterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Farmer account created successfully (frontend demo)");

    // Redirect to farmer dashboard
    window.location.href = "login.html";
  });
