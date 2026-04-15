// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
const nav = document.querySelector(".nav");
let lastScroll = 0;

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('klokd-theme', theme);
  themeIcon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  if (nav) nav.style.background = '';
}

// Initialize from localStorage (default: light)
setTheme(localStorage.getItem('klokd-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (currentScroll > 100) {
    nav.style.background = isDark ? "rgba(10, 10, 15, 0.95)" : "rgba(245, 247, 245, 0.95)";
    nav.style.boxShadow = isDark ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "0 4px 30px rgba(0, 0, 0, 0.07)";
  } else {
    nav.style.background = isDark ? "rgba(10, 10, 15, 0.8)" : "rgba(245, 247, 245, 0.9)";
    nav.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and sections
document
  .querySelectorAll(
    ".feature-card, .benefit-card, .testimonial-card, .problem-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
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
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        const numbers = entry.target.querySelectorAll(".stat-number");
        numbers.forEach((num) => {
          const text = num.textContent;
          const value = parseInt(text.replace(/[^0-9]/g, ""));
          if (!isNaN(value)) {
            num.textContent = "0";
            setTimeout(() => animateCounter(num, value), 200);
          }
        });
      }
    });
  },
  { threshold: 0.5 },
);

const statsBar = document.querySelector(".stats-bar");
if (statsBar) {
  statsObserver.observe(statsBar);
}

// Add pulse animation to CTA buttons on hover
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.animation = "none";
    setTimeout(() => {
      this.style.animation = "pulse-glow 1s ease-in-out";
    }, 10);
  });
});

// Mock purchase button (replace with actual payment integration)
document.querySelectorAll(".btn-primary").forEach((btn) => {
  if (btn.textContent.includes("Get") || btn.textContent.includes("Access")) {
    btn.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault();
        alert(
          "🎉 Payment integration coming soon!\n\nIn production, this would redirect to Stripe checkout for $14.99",
        );
      }
    });
  }
});

// Dynamic year in copyright
const yearElement = document.getElementById("copyright-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Add loading state to buttons
function addButtonLoadingState(button) {
  const originalText = button.textContent;
  button.disabled = true;
  button.style.opacity = "0.7";
  button.style.cursor = "not-allowed";
  button.textContent = "Processing...";

  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
    button.textContent = originalText;
  }, 2000);
}

// Parallax effect on hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-bg");
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// FAQ toggle functionality (if you want to add collapsible FAQs later)
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// Modal system
function initModal(paramValue, overlayId, closeBtnId, triggerId) {
  const overlay = document.getElementById(overlayId);
  const closeBtn = document.getElementById(closeBtnId);
  const trigger = document.getElementById(triggerId);
  if (!overlay) return;

  function openModal() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const url = new URL(window.location);
    url.searchParams.set('modal', paramValue);
    history.pushState({modal: paramValue}, '', url);
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    const url = new URL(window.location);
    url.searchParams.delete('modal');
    history.pushState({}, '', url);
  }

  if (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
  });

  window.addEventListener('popstate', function () {
    const val = new URLSearchParams(window.location.search).get('modal');
    if (val === paramValue) {
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('is-open');
      if (!document.querySelector('.modal-overlay.is-open')) {
        document.body.style.overflow = '';
      }
    }
  });

  if (new URLSearchParams(window.location.search).get('modal') === paramValue) {
    openModal();
  }
}

initModal('privacy', 'privacy-modal', 'modal-close', 'privacy-link');
initModal('support', 'support-modal', 'support-modal-close', 'support-link');

// Hero heatmap squares
function drawHeatmap() {
  const canvas = document.getElementById('heatmap-canvas');
  const hero = document.querySelector('.hero');
  if (!canvas || !hero) return;

  const w = hero.offsetWidth;
  const h = hero.offsetHeight;
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, w, h);

  const cell = 50;
  const cols = Math.ceil(w / cell);
  const rows = Math.ceil(h / cell);
  const isMobile = w < 768;
  if (isMobile) return; // too distracting on small screens

  const edgeCols = 3;
  const edgeRows = 2;

  // Deterministic pseudo-random (seeded)
  function sr(seed) {
    const x = Math.sin(seed * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  }

  const opacities = [0.05, 0.09, 0.13, 0.17, 0.22];

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const onEdge = c < edgeCols || c >= cols - edgeCols
                  || r < edgeRows || r >= rows - edgeRows;
      if (!onEdge) continue;

      // ~20% fill rate
      if (sr(c * 137 + r) > 0.20) continue;

      const opacity = opacities[Math.floor(sr(c * 37 + r * 91) * opacities.length)];
      ctx.fillStyle = `rgba(96, 147, 108, ${opacity})`;
      ctx.fillRect(c * cell + 1, r * cell + 1, cell - 2, cell - 2);
    }
  }
}

drawHeatmap();
let heatmapTimer;
window.addEventListener('resize', () => {
  clearTimeout(heatmapTimer);
  heatmapTimer = setTimeout(drawHeatmap, 150);
});

console.log("Klokd Landing Page Loaded");
console.log("Your Digital Time Watch");
