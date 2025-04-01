document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader once the window loads
    window.onload = () => {
      const preloader = document.getElementById('preloader');
      if(preloader) {
        preloader.style.display = 'none';
      }
    };
    
    // Smooth scrolling for navigation links
    // Smooth scrolling for navigation links
  
    // const navLinks = document.querySelectorAll('.nav-links a');
    // navLinks.forEach(link => {
    //   link.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     const targetId = this.getAttribute('href');
    //     document.querySelector(targetId).scrollIntoView({
    //       behavior: 'smooth'
    //     });
    //   });
    // });
  
    // Smooth scrolling for navigation links
    // Smooth scrolling for navigation links
  
    // Hero Slider
    // Hero Slider
  
    // const slides = document.querySelectorAll('.slide');
    // let currentSlide = 0;
    // setInterval(() => {
    //   slides[currentSlide].classList.remove('active');
    //   currentSlide = (currentSlide + 1) % slides.length;
    //   slides[currentSlide].classList.add('active');
    // }, 5000);
  
    // Hero Slider
    // Hero Slider
  
  
    // Initialize AOS (Animate On Scroll)
    // Initialize AOS (Animate On Scroll)
  
    AOS.init({
      duration: 1000,
      once: true
    });
  });
  
  // Initialize AOS (Animate On Scroll)
  // Initialize AOS (Animate On Scroll)
  
  
  
  //  ======= Active Page =======
  //  ======= Active Page =======

  document.addEventListener("DOMContentLoaded", function () {
    function updateActiveLink() {
        let currentPath = window.location.pathname.split("/").pop(); // Current Page Name
        let currentHash = window.location.hash; // Current Hash (#about, #services, etc.)
        let navLinks = document.querySelectorAll(".nav-links li a");
  
        navLinks.forEach(link => {
            let linkHref = link.getAttribute("href"); // Full href (can be page.html#section)
            let linkPath = linkHref.split("#")[0].split("/").pop(); // Extract Page Name
            let linkHash = linkHref.includes("#") ? "#" + linkHref.split("#")[1] : ""; // Extract Hash
            
            // ✅ Highlight if Current Page Matches
            if (currentPath === linkPath || (linkPath === "" && currentPath === "index.html")) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
  
            // ✅ Highlight if Current Hash Matches (for index.html and about.html)
            if (currentHash && currentHash === linkHash) {
                link.classList.add("active");
            }
        });
    }
  
    // Call function on page load
    updateActiveLink();
  
    // Update highlight when hash changes
    window.addEventListener("hashchange", updateActiveLink);
  });
   

  
  //  ======= Active Page =======
  //  ======= Active Page =======
  
  
  
  
  
  // ======= HERO SLIDER CODE =======
  // ======= HERO SLIDER CODE =======
  const sliderSlides = document.querySelectorAll('.slide');
  const sliderNextBtn = document.querySelector('.arrow.next');
  const sliderPrevBtn = document.querySelector('.arrow.prev');
  const indicatorsContainer = document.getElementById('indicators');
  
  let currentIndex = 0;
  
  // Create indicator dots dynamically
  sliderSlides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
    });
    indicatorsContainer.appendChild(dot);
  });
  
  function showSlide(index) {
    sliderSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
  
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
  
    currentIndex = index;
  }
  
  // Auto-slide
  function autoSlide() {
    currentIndex = (currentIndex + 1) % sliderSlides.length;
    showSlide(currentIndex);
  }
  
  // Next button functionality
  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderSlides.length;
    showSlide(currentIndex);
    resetInterval();
  }
  
  // Prev button functionality
  function prevSlide() {
    currentIndex = (currentIndex - 1 + sliderSlides.length) % sliderSlides.length;
    showSlide(currentIndex);
    resetInterval();
  }
  
  // Attach event listeners to buttons
  sliderNextBtn.addEventListener('click', nextSlide);
  sliderPrevBtn.addEventListener('click', prevSlide);
  
  // Auto-slide every 5 seconds
  let slideInterval = setInterval(autoSlide, 5000);
  
  // Reset interval when user interacts with slider
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 5000);
  }
  // ======= HERO SLIDER CODE =======
  // ======= HERO SLIDER CODE =======
  
  
  
  
  
  
  
  // Menu Toggle Function
  // Menu Toggle Function
  function toggleMenu() {
    const hamburger = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const content = document.querySelectorAll(".content");
    const navbar = document.querySelector(".navbar");
  
    hamburger.classList.toggle("active");
  
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        document.body.classList.remove("no-scroll");
  
        content.forEach(element => {
            element.style.display = "block";
        });
  
    } else {
        menu.classList.add("show");
        document.body.classList.add("no-scroll");
  
        content.forEach(element => {
            element.style.display = "none";
        });
        navbar.style.display = "flex";
    }
  }
  // Menu Toggle Function
  // Menu Toggle Function
  
  
  
  
  
  // ======= TESTIMONIAL CAROUSEL CODE =======
  // ======= TESTIMONIAL CAROUSEL CODE =======
  const carousel = document.querySelector(".carousel");
  const testimonialSlides = document.querySelectorAll(".testimonial");
  const stars = document.querySelectorAll(".star");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  
  let index = 0;
  let autoSlideInterval;
  let isAnimating = false; // Prevent double clicks
  
  // ⭐ Update Indicators
  function updateIndicators() {
  stars.forEach((star, i) => {
    star.classList.toggle("active", i === index);
  });
  }
  
  // 🎥 Show Testimonial (Smooth Transition)
  function showTestimonial() {
  if (isAnimating) return; // Stop multiple clicks
  isAnimating = true;
  
  carousel.style.transition = "transform 0.5s ease-in-out"; 
  carousel.style.transform = `translateX(-${index * 100}%)`;
  
  updateIndicators();
  
  setTimeout(() => { isAnimating = false; }, 500); // Allow next click after animation
  }
  
  // ➡️ Next Testimonial
  function nextTestimonial() {
  if (index < testimonialSlides.length - 1) {
    index++;
  } else {
    index = 0; // Loop to first slide
  }
  showTestimonial();
  }
  
  // ⬅️ Previous Testimonial
  function prevTestimonial() {
  if (index > 0) {
    index--;
  } else {
    index = testimonialSlides.length - 1; // Loop to last slide
  }
  showTestimonial();
  }
  
  // 🔄 Auto Sliding with Reverse Process
  function startAutoSlide() {
  let direction = 1; 
  autoSlideInterval = setInterval(() => {
    if (index === testimonialSlides.length - 1) {
      direction = -1; 
    } else if (index === 0) {
      direction = 1; 
    }
    index += direction;
    showTestimonial();
  }, 4000);
  }
  
  // 🛑 Stop Auto Slide and Restart After 5 Sec
  function restartAutoSlide() {
  clearInterval(autoSlideInterval);
  setTimeout(startAutoSlide, 5000);
  }
  
  // ⏩ Event Listeners for Buttons
  nextBtn.addEventListener("click", () => {
  restartAutoSlide();
  nextTestimonial();
  });
  
  prevBtn.addEventListener("click", () => {
  restartAutoSlide();
  prevTestimonial();
  });
  
  // ⭐ Star Indicator Click Functionality
  stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    restartAutoSlide();
    index = i;
    showTestimonial();
  });
  });
  
  // 🚀 Start Auto Slide Initially
  startAutoSlide();
  // ======= TESTIMONIAL CAROUSEL CODE =======
  // ======= TESTIMONIAL CAROUSEL CODE =======