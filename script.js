const toggle = document.getElementById("darkModeToggle");
const navLinks = document.querySelectorAll(".nav-link");
const contactForm = document.getElementById("contactForm");

// Dark mode toggle
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Active nav link highlight
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    navLinks.forEach(l => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Contact form handler
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you, your message has been received!");
  contactForm.reset();
});
