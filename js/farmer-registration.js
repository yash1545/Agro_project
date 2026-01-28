document
  .getElementById("farmerRegisterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Farmer account created successfully ");

    // Redirect to farmer dashboard
    window.location.href = "farmer-dashboard.html";
  });
