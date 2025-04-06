// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

// Simple cart counter
const cartButtons = document.querySelectorAll('[data-add-to-cart]');
const cartCounter = document.querySelector('.cart-counter');

let cartCount = 0;

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    
    // Add animation
    cartCounter.classList.add('animate-bounce');
    setTimeout(() => {
      cartCounter.classList.remove('animate-bounce');
    }, 1000);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    
    if (emailInput.value) {
      alert('Thank you for subscribing to our newsletter!');
      emailInput.value = '';
    }
  });
}