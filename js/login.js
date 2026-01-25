const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // get email value
  const email = loginForm.querySelector("input[type='email']").value;
  const username = email.split("@")[0];

  // set username in dashboard
  document.getElementById("userName").innerText = username;
  document.getElementById("welcomeUser").innerText = username;

  // switch UI
  loginSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");
});

function logout() {
  dashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

function showSection(section) {
  // hide all sections
  document.querySelectorAll(".dashboard-section").forEach(sec => {
    sec.classList.add("hidden");
  });

  // remove active state
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.classList.remove("active");
  });

  // show selected section
  if (section === "overview") {
    document.getElementById("overviewSection").classList.remove("hidden");
    document.querySelectorAll(".sidebar a")[0].classList.add("active");
  }

  if (section === "myCrops") {
    document.getElementById("myCropsSection").classList.remove("hidden");
    document.querySelectorAll(".sidebar a")[1].classList.add("active");
  }
}

