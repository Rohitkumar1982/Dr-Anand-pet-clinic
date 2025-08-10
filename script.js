// ========= HERO CAROUSEL =========
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let currentHeroSlide = 0;
let heroSlideInterval;

function showHeroSlide(index) {
  if (!carouselSlides.length) return;
  carouselSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}
function nextHeroSlide() {
  currentHeroSlide = (currentHeroSlide + 1) % carouselSlides.length;
  showHeroSlide(currentHeroSlide);
}
function prevHeroSlide() {
  currentHeroSlide = (currentHeroSlide - 1 + carouselSlides.length) % carouselSlides.length;
  showHeroSlide(currentHeroSlide);
}
function resetHeroAutoSlide() {
  clearInterval(heroSlideInterval);
  heroSlideInterval = setInterval(nextHeroSlide, 6000);
}
if (nextBtn && prevBtn && carouselSlides.length) {
  nextBtn.addEventListener("click", () => {
    nextHeroSlide();
    resetHeroAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevHeroSlide();
    resetHeroAutoSlide();
  });
  heroSlideInterval = setInterval(nextHeroSlide, 6000);
  showHeroSlide(currentHeroSlide);
}
function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('active');
}

// Close menu when clicking on a link (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav-menu');
    nav.classList.remove('active');
  });
});



// ========= FAQ TOGGLE =========
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    const answer = btn.nextElementSibling;
    if (answer) {
      answer.hidden = expanded;
    }
  });
});


// ========= BOOKING FORM SUBMIT =========
const bookingForm = document.getElementById("experience-booking-form");
const bookingResponse = document.getElementById("booking-response");
if (bookingForm && bookingResponse) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = bookingForm.name.value.trim();
    const phone = bookingForm.phone.value.trim();
    const location = bookingForm.location.value;
    if (!name || !phone || !location) {
      bookingResponse.textContent = "Please fill all required fields.";
      bookingResponse.style.color = "red";
      return;
    }
    bookingResponse.style.color = "#229964";
    bookingResponse.textContent = "Sending your booking request...";
    setTimeout(() => {
      bookingResponse.textContent = "Your booking request has been sent successfully!";
      bookingForm.reset();
    }, 1800);
  });
}


// ========= ANIMATED STATS NUMBERS =========
function animateNumbersWithPlus() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = +el.getAttribute('data-target');
    const showPlus = el.dataset.plus === "true";
    let curr = 0;
    const increment = Math.ceil(target / 50);
    function update() {
      curr += increment;
      if (curr >= target) {
        el.textContent = target + (showPlus ? '+' : '');
      } else {
        el.textContent = curr + (showPlus ? '+' : '');
        requestAnimationFrame(update);
      }
    }
    update();
  });
}
function onScrollStatAppearWithPlus() {
  const statsSection = document.querySelector('.experience-stats-wrapper');
  if (!statsSection) return;
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    animateNumbersWithPlus();
    window.removeEventListener('scroll', onScrollStatAppearWithPlus);
  }
}
window.addEventListener('scroll', onScrollStatAppearWithPlus);
onScrollStatAppearWithPlus();


// ========= TESTIMONIALS CAROUSEL =========
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.testimonial-dots');
let testimonialCurrent = 0;
let testimonialInterval;

function updateTestimonialDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  testimonialSlides.forEach((_slide, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === testimonialCurrent ? ' active' : '');
    dot.addEventListener('click', () => {
      showTestimonialSlide(i);
      resetTestimonialInterval();
    });
    dotsContainer.appendChild(dot);
  });
}

function showTestimonialSlide(idx) {
  testimonialSlides.forEach(s => s.classList.remove('active'));
  testimonialSlides[idx].classList.add('active');
  testimonialCurrent = idx;
  updateTestimonialDots();
}

function nextTestimonialSlide() {
  showTestimonialSlide((testimonialCurrent + 1) % testimonialSlides.length);
}

function startTestimonialInterval() {
  testimonialInterval = setInterval(nextTestimonialSlide, 4000);
}

function resetTestimonialInterval() {
  clearInterval(testimonialInterval);
  startTestimonialInterval();
}

// Only run if testimonials exist
if (testimonialSlides.length > 0 && dotsContainer) {
  showTestimonialSlide(0);
  startTestimonialInterval();
  updateTestimonialDots();

  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (testimonialCarousel) {
    testimonialCarousel.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
    testimonialCarousel.addEventListener('mouseleave', startTestimonialInterval);
  }
}

//===============Hits & Tips =====//
// Image data for each question
const imageData = {
  medicine: {
    caption: "Always consult with a veterinarian before giving any medicine to your pet."
  },
  food: {
    caption: "Proper nutrition with balanced salt and sugar is important for your pet's health."
  },
  walking: {
    caption: "Regular paw checks after walks help prevent infections and injuries."
  },
  car: {
    caption: "Never leave your pet in a closed car - it can be life-threatening."
  },
  breeding: {
    caption: "Consult with a veterinarian to determine the right breeding age for your pet."
  }
};

// Function to change image and caption
function changeImage(imageType) {
  // Hide all images
  document.querySelectorAll('.hint-image').forEach(img => {
    img.classList.remove('active');
  });
  
  // Show selected image
  const selectedImage = document.getElementById(imageType);
  if (selectedImage) {
    selectedImage.classList.add('active');
  }
  
  // Update caption
  const captionElement = document.getElementById('image-caption-text');
  if (captionElement && imageData[imageType]) {
    captionElement.textContent = imageData[imageType].caption;
  }
}

// Enhanced hints functionality
document.querySelectorAll('.hint-question').forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const imageType = button.getAttribute('data-image');

    // Remove active class from all questions
    document.querySelectorAll('.hint-question').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.toggle-text').textContent = 'Read More';
    });
    
    // Hide all answers
    document.querySelectorAll('.hint-answer').forEach(ans => {
      ans.hidden = true;
    });

    // If clicking on a different question or expanding current one
    if (!isExpanded) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.toggle-text').textContent = 'Read Less';
      
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      if (answer) {
        answer.hidden = false;
      }
    }

    // Always change the image when clicking on any question
    if (imageType) {
      changeImage(imageType);
    }
  });

  // Change image on hover for better UX
  button.addEventListener('mouseenter', () => {
    const imageType = button.getAttribute('data-image');
    if (imageType) {
      changeImage(imageType);
    }
  });
});

// Initialize with first question's image
document.addEventListener('DOMContentLoaded', () => {
  changeImage('medicine');
});
// ========= ABOUT PHIL READ MORE TOGGLE =========
    document.getElementById('aboutPhilReadMore').addEventListener('click', function() {
    const more = document.querySelector('.about-phil-more');
    if (more.hidden) {
      more.hidden = false;
      this.textContent = "Read Less";
    } else {
      more.hidden = true;
      this.textContent = "Read More";
    }
  });






