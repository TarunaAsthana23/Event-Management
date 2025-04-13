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
      let currentHash = window.location.hash || "#home"; // Default home page
      let navLinks = document.querySelectorAll(".nav-links li a");

      navLinks.forEach(link => {
          if (link.getAttribute("href") === currentHash) {
              link.classList.add("active");
          } else {
              link.classList.remove("active");
          }
      });

      // ✅ Home link hamesha active rahega
      document.querySelector(".nav-links li a[href='#home']").classList.add("active");
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
const indicatorsContainer = document.getElementById('hero-indicators');

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
let slideInterval = setInterval(autoSlide, 4000);

// Reset interval when user interacts with slider
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 4000);
}
// ======= HERO SLIDER CODE =======
// ======= HERO SLIDER CODE =======







// Menu Toggle Function
// Menu Toggle Function

document.addEventListener("DOMContentLoaded", function () {
  function updateActiveLink() {
      let currentHash = window.location.hash || "#home"; // Default home page
      let navLinks = document.querySelectorAll(".popup-menu ul li a, .nav-links li a");

      navLinks.forEach(link => {
          if (link.getAttribute("href") === currentHash) {
              link.classList.add("active");
          } else {
              link.classList.remove("active");
          }
      });

      // ✅ Home link hamesha active rahega
      document.querySelectorAll(".nav-links li a[href='#home'], .popup-menu ul li a[href='#home']")
          .forEach(link => link.classList.add("active"));
  }

  // Call function on page load
  updateActiveLink();

  // Update highlight when hash changes
  window.addEventListener("hashchange", updateActiveLink);
});

// ✅ Hamburger Menu Toggle
function toggleMenu() {
  var menu = document.getElementById("popupMenu");
  var menuIcon = document.querySelector(".menu-icon");

  menu.classList.toggle("show");
  menuIcon.classList.toggle("active");

  if (menu.classList.contains("show")) {
      menu.style.display = "block";
  } else {
      menu.style.display = "none";
  }
}

// ✅ Click hone par menu close + active highlight
function setActive(element) {
  var links = document.querySelectorAll(".popup-menu ul li a, .nav-links li a");

  // Sabhi links se 'active' class hatao
  links.forEach(link => link.classList.remove("active"));

  // Jo clicked link hai, usme 'active' class add karo
  element.classList.add("active");

  // Menu close karo
  document.getElementById("popupMenu").style.display = "none";
  document.querySelector(".menu-icon").classList.remove("active");

  // ✅ Home link ko hamesha active rakho
  document.querySelectorAll(".nav-links li a[href='#home'], .popup-menu ul li a[href='#home']")
      .forEach(link => link.classList.add("active"));
}


// Menu Toggle Function
// Menu Toggle Function





// ======= TESTIMONIAL CAROUSEL CODE =======
// ======= TESTIMONIAL CAROUSEL CODE =======

document.addEventListener("DOMContentLoaded", function () {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const stars = document.querySelectorAll(".testimonial-indicators .star");
    const prevButton = document.querySelector(".testimonial-prev");
    const nextButton = document.querySelector(".testimonial-next");

    if (!prevButton || !nextButton || testimonials.length === 0 || stars.length === 0) {
        console.error("Elements not found!");
        return;
    }

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle("active", i === index);
        });
        stars.forEach((s, i) => {
            s.classList.toggle("active", i === index);
        });
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex > 0) ? currentTestimonialIndex - 1 : testimonials.length - 1;
        showTestimonial(currentTestimonialIndex);
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex < testimonials.length - 1) ? currentTestimonialIndex + 1 : 0;
        showTestimonial(currentTestimonialIndex);
    }

    function setTestimonial(index) {
        currentTestimonialIndex = index;
        showTestimonial(currentTestimonialIndex);
    }

    let autoSlide = setInterval(nextTestimonial, 3000);

    prevButton.addEventListener("click", () => {
        clearInterval(autoSlide);
        prevTestimonial();
        autoSlide = setInterval(nextTestimonial, 3000);
    });

    nextButton.addEventListener("click", () => {
        clearInterval(autoSlide);
        nextTestimonial();
        autoSlide = setInterval(nextTestimonial, 3000);
    });

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            clearInterval(autoSlide);
            setTestimonial(index);
            autoSlide = setInterval(nextTestimonial, 3000);
        });
    });

    showTestimonial(currentTestimonialIndex);
});



// ======= TESTIMONIAL CAROUSEL CODE =======
// ======= TESTIMONIAL CAROUSEL CODE =======
// Auto slide every 3 seconds = 3000 & 5 sec =5000



// window.onload = function () {
//   let footer = document.querySelector('.footer');
//   if (footer) {
//       footer.style.opacity = "1";
//       footer.style.display = "block";
//   }
// };


        // ======== Our Services ========
     // ======== Our Services ========


     //   document.getElementById("viewMoreBtn").addEventListener("click", function() {
     //   document.querySelector(".hidden-gallery").classList.remove("hidden");
     //   this.style.display = "none"; // Button ko hide karna
     //   });



     document.getElementById("toggleBtn_1").addEventListener("click", function() {
      let services = document.querySelector(".hidden-services");
      if (services.classList.contains("hidden")) {
          services.classList.remove("hidden");
          this.textContent = "View Less Services"; // Button text change karega
      } else {
          services.classList.add("hidden");
          this.textContent = "View More Services"; // Wapas View More ho jayega
      }
    });
    

           // ======== Our Services ========
           // ======== Our Services ========

   
     


     // ======== Gallery ========
     // ======== Gallery ========


     //   document.getElementById("viewMoreBtn").addEventListener("click", function() {
     //   document.querySelector(".hidden-gallery").classList.remove("hidden");
     //   this.style.display = "none"; // Button ko hide karna
     //   });



     document.getElementById("toggleBtn_2").addEventListener("click", function() {
      let gallery = document.querySelector(".hidden-gallery");
      if (gallery.classList.contains("hidden")) {
          gallery.classList.remove("hidden");
          this.textContent = "View Less"; // Button text change karega
      } else {
          gallery.classList.add("hidden");
          this.textContent = "View More"; // Wapas View More ho jayega
      }
    });
    

           // ======== Gallery ========
           // ======== Gallery ========
