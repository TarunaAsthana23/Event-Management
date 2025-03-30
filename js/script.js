document.addEventListener('DOMContentLoaded', () => {
  // Remove preloader once the window loads
  window.onload = () => {
    const preloader = document.getElementById('preloader');
    if(preloader) {
      preloader.style.display = 'none';
    }
  };

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true
  });
});
