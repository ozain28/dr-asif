// Toggle Nav
const toggleBtn = document.getElementById("toggleBtn");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlide, 3000); // 3 seconds