const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']").value;
    const username = email.split("@")[0];

    localStorage.setItem("farmerUser", username);

    window.location.href = "buyer-dashboard.html";
  });
}
function showSection(section) {

  // hide all sections
  document.querySelectorAll(".dashboard-section").forEach(sec => {
    sec.classList.add("hidden");
  });

  // remove active class
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.classList.remove("active");
  });

  // show selected section
  document.getElementById(section + "Section").classList.remove("hidden");

  // activate sidebar link
  const indexMap = {
    overview: 0,
    myCrops: 1,
    exportReadiness: 2,
    marketPrices: 3,
    buyerEnquiries: 4
  };

  document.querySelectorAll(".sidebar a")[indexMap[section]]
    .classList.add("active");
}
function logout() {
  // user data clear karo
  localStorage.removeItem("farmerName");

  // login page pe redirect karo
  window.location.href = "buyerlogin.html";
}