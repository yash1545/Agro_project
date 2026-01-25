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

function showAddCrop() {
  document.getElementById("addCropForm").classList.remove("hidden");
}

function hideAddCrop() {
  document.getElementById("addCropForm").classList.add("hidden");
}

function addCrop() {
  alert("Crop added (frontend demo)");
  hideAddCrop();
}

function showSection(section) {
  document.querySelectorAll(".dashboard-section").forEach(sec => {
    sec.classList.add("hidden");
  });

  document.querySelectorAll(".sidebar a").forEach(link => {
    link.classList.remove("active");
  });

  if (section === "overview") {
    overviewSection.classList.remove("hidden");
  }
  if (section === "myCrops") {
    myCropsSection.classList.remove("hidden");
  }
  if (section === "exportReadiness") {
    exportReadinessSection.classList.remove("hidden");
  }
  if (section === "marketPrices") {
  document.getElementById("marketPricesSection").classList.remove("hidden");
  document.querySelectorAll(".sidebar a")[3].classList.add("active");

  // Load charts
  setTimeout(loadMarketCharts, 100);
}

  if (section === "buyerEnquiries") {
    buyerEnquiriesSection.classList.remove("hidden");
  }
}

// ===== MARKET PRICE CHARTS =====
function loadMarketCharts() {

  // LINE CHART – PRICE TRENDS
  const trendCtx = document.getElementById("priceTrendChart");
  if (trendCtx) {
    new Chart(trendCtx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "USA",
            data: [2400, 2500, 2600, 2700, 2800, 2900],
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "UK",
            data: [2100, 2200, 2300, 2400, 2500, 2600],
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "UAE",
            data: [2200, 2300, 2400, 2500, 2600, 2700],
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "India",
            data: [1800, 1900, 2000, 2100, 2200, 2300],
            borderWidth: 2,
            tension: 0.4
          }
        ]
      }
    });
  }

  // BAR CHART – LOCAL VS EXPORT
  const barCtx = document.getElementById("priceCompareChart");
  if (barCtx) {
    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["Tomatoes", "Rice", "Peppers", "Spinach"],
        datasets: [
          {
            label: "Local Price ($/kg)",
            data: [1.8, 1.2, 2.5, 3.0]
          },
          {
            label: "Export Price ($/kg)",
            data: [2.5, 1.8, 3.2, 4.1]
          }
        ]
      }
    });
  }
}

function goToMyCrops() {
  // open My Crops section
  showSection('myCrops');

  // open Add Crop form after section loads
  setTimeout(() => {
    showAddCrop();
  }, 100);
}
