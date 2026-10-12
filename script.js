// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Close mobile menu when a link is clicked
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// Notices carousel (auto-rotate)
const slides = document.querySelectorAll(".notice-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length > 0) {
  setInterval(nextSlide, 4000); // change every 4 seconds
}

// Admission form handling (frontend-only demo)
const admissionForm = document.getElementById("admissionForm");
const formStatus = document.getElementById("formStatus");

admissionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(admissionForm);
  const data = Object.fromEntries(formData.entries());

  // In a real project, send this to your backend:
  // fetch("/api/admissions", { method: "POST", body: JSON.stringify(data), ... });

  console.log("Engineering enquiry data:", data);

  formStatus.textContent =
    "Thank you! Your enquiry has been submitted. Please also check the official portal: sukapps.unishivaji.ac.in";
  formStatus.className = "form-status success";

  admissionForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
    formStatus.className = "form-status";
  }, 7000);
});