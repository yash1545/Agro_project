// Smooth scroll
document.querySelectorAll(".policy-nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Redirect to contact page
function goToContact() {
  window.location.href = "contact.html";
}
