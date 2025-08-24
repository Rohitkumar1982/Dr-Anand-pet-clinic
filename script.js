// Hero Carousel
const slides = document.querySelectorAll(".carousel-slide");
// Remove duplicate declarations of prevBtn and nextBtn
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

let autoSlideInterval = setInterval(nextSlide, 6000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 6000);
}

// FAQ toggle
const faqQuestions = [...document.querySelectorAll(".faq-question")];
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    const answer = btn.nextElementSibling;
    if (answer) {
      if (!expanded) {
        answer.hidden = false;
      } else {
        answer.hidden = true;
      }
    }
  });
});

// Form Submission for Booking Form in Experience Stats Section
const bookingForm = document.getElementById("experience-booking-form");
const bookingResponse = document.getElementById("booking-response");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Here, should integrate with email sending backend like EmailJS or server API
  // Simulated response here:

  // Validate inputs (optional here, already required in HTML)
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

  // Simulate successful submission with delay
  setTimeout(() => {
    bookingResponse.textContent = "Your booking request has been sent successfully!";
    bookingForm.reset();
  }, 1800);
});
// Animated count up for stat numbers with plus signs
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

}
// Removed duplicate testimonialSlides declaration and related carousel logic.
// The testimonials carousel logic is implemented below with unique variable names.


// ========= HERO CAROUSEL =========
// ========= HERO CAROUSEL =========
const carouselSlides = document.querySelectorAll(".carousel-slide");
// Use the already declared prevBtn and nextBtn if needed, or declare them here only once
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

// Function to change image and caption
// Tips section functionality
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const content = document.getElementById(targetId);
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      this.textContent = 'Read More';
    } else {
      // Close all other tips first
      document.querySelectorAll('.tip-content').forEach(tip => {
        tip.classList.remove('active');
      });
      document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.textContent = 'Read More';
      });
      
      // Open the clicked one
      content.classList.add('active');
      this.textContent = 'Read Less';
    }
  });
});