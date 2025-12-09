// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.style.background = 'rgba(10, 10, 15, 0.95)';
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
  } else {
    nav.style.background = 'rgba(10, 10, 15, 0.8)';
    nav.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.feature-card, .benefit-card, .testimonial-card, .problem-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      const numbers = entry.target.querySelectorAll('.stat-number');
      numbers.forEach(num => {
        const text = num.textContent;
        const value = parseInt(text.replace(/[^0-9]/g, ''));
        if (!isNaN(value)) {
          num.textContent = '0';
          setTimeout(() => animateCounter(num, value), 200);
        }
      });
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  statsObserver.observe(statsBar);
}

// Add pulse animation to CTA buttons on hover
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'pulse-glow 1s ease-in-out';
    }, 10);
  });
});

// Mock purchase button (replace with actual payment integration)
document.querySelectorAll('.btn-primary').forEach(btn => {
  if (btn.textContent.includes('Get') || btn.textContent.includes('Access')) {
    btn.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
        alert('🎉 Payment integration coming soon!\n\nIn production, this would redirect to Stripe checkout for $14.99');
      }
    });
  }
});

// Dynamic year in footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
  yearElement.textContent = yearElement.textContent.replace('2024', new Date().getFullYear());
}

// Add loading state to buttons
function addButtonLoadingState(button) {
  const originalText = button.textContent;
  button.disabled = true;
  button.style.opacity = '0.7';
  button.style.cursor = 'not-allowed';
  button.textContent = 'Processing...';

  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    button.textContent = originalText;
  }, 2000);
}

// Parallax effect on hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector('.hero-bg');
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// FAQ toggle functionality (if you want to add collapsible FAQs later)
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

console.log('🎯 Klokd Landing Page Loaded');
console.log('💚 Take Control of Your Screen Time');
