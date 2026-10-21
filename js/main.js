/**
 * Kasturii Roadways — Main JavaScript
 * Handles: Nav, Hero, Booking, FAQ, Form, Animations, WhatsApp, Rendering
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Render dynamic content from CONFIG ─────────────────── */
  renderRoutes();
  renderCoaches();
  renderAmenities();
  renderSafety();
  renderFAQs();

  /* ─── WhatsApp links ──────────────────────────────────────── */
  initWhatsApp();

  /* ─── Navigation ─────────────────────────────────────────── */
  initNav();

  /* ─── Hero ────────────────────────────────────────────────── */
  initHero();

  /* ─── Booking widget ─────────────────────────────────────── */
  initBooking();

  /* ─── FAQ accordion ──────────────────────────────────────── */
  initFAQ();

  /* ─── Contact form ────────────────────────────────────────── */
  initContactForm();

  /* ─── Scroll reveal ───────────────────────────────────────── */
  initReveal();

  /* ─── Booking platform links ─────────────────────────────── */
  initPlatformLinks();

  /* ─── Smooth scroll for anchor links ─────────────────────── */
  initSmoothScroll();
});


/* ══════════════════════════════════════════════════════════════
   WHATSAPP
══════════════════════════════════════════════════════════════ */
function buildWaLink(message = null) {
  const num = CONFIG.WHATSAPP_NUMBER;
  const defaultMsg = `Hello Kasturii Roadways, I would like to book a bus ticket.

From: 
To: 
Journey Date: 
Number of Passengers: 

Please share available buses/seats and booking details.`;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${num}?text=${text}`;
}

function initWhatsApp() {
  const waLinks = document.querySelectorAll('[data-wa]');
  waLinks.forEach(el => {
    el.href = buildWaLink();
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Float WA button
  const floatWa = document.getElementById('float-wa');
  if (floatWa) {
    floatWa.href = buildWaLink();
    floatWa.target = '_blank';
    floatWa.rel = 'noopener noreferrer';
  }

  // Mobile bar WA
  const mobileWa = document.getElementById('mobile-wa');
  if (mobileWa) {
    mobileWa.href = buildWaLink();
    mobileWa.target = '_blank';
    mobileWa.rel = 'noopener noreferrer';
  }

  // Mobile bar Call
  const mobileCall = document.getElementById('mobile-call');
  if (mobileCall) {
    mobileCall.href = `tel:${CONFIG.SUPPORT_PHONE}`;
  }
}


/* ══════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  // Sticky on scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close menu on link click
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });
}


/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
function initHero() {
  const bg = document.querySelector('.hero-bg');
  if (bg) {
    const img = new Image();
    img.onload = () => bg.classList.add('loaded');
    img.src = bg.style.backgroundImage.replace(/url\(["']?/, '').replace(/["']?\)/, '');
  }
}


/* ══════════════════════════════════════════════════════════════
   BOOKING WIDGET
══════════════════════════════════════════════════════════════ */
function initBooking() {
  const fromSelect = document.getElementById('booking-from');
  const toSelect   = document.getElementById('booking-to');
  const swapBtn    = document.querySelector('.swap-btn');
  const dateInput  = document.getElementById('booking-date');
  const form       = document.getElementById('booking-form');

  // Populate city dropdowns
  if (fromSelect && toSelect) {
    CONFIG.CITIES.forEach(city => {
      fromSelect.innerHTML += `<option value="${city}">${city}</option>`;
      toSelect.innerHTML   += `<option value="${city}">${city}</option>`;
    });
    toSelect.value = CONFIG.CITIES[1] || '';
  }

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Swap cities
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const tmp = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = tmp;
    });
  }

  // Form submit → direct to booking platform or routes section
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const from = fromSelect.value;
      const to   = toSelect.value;

      if (from === to) {
        alert('Please select different departure and destination cities.');
        return;
      }

      // Try redBus first, else MakeMyTrip, else scroll to routes
      const url = CONFIG.REDBUS_BOOKING_URL !== '#'
        ? CONFIG.REDBUS_BOOKING_URL
        : CONFIG.MAKEMYTRIP_BOOKING_URL !== '#'
          ? CONFIG.MAKEMYTRIP_BOOKING_URL
          : null;

      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        document.getElementById('routes').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}


/* ══════════════════════════════════════════════════════════════
   RENDER ROUTES
══════════════════════════════════════════════════════════════ */
function renderRoutes() {
  const container = document.getElementById('routes-grid');
  if (!container) return;

  container.innerHTML = CONFIG.ROUTES.map(route => `
    <div class="route-card reveal">
      <div class="route-header">
        <div class="route-cities">
          <span>${route.from}</span>
          <span class="route-arrow">→</span>
          <span>${route.to}</span>
        </div>
        <span class="route-tag">${route.coachType}</span>
      </div>
      <div class="route-body">
        <div class="route-meta">
          <div class="route-meta-item">
            <div class="route-meta-label">Departure</div>
            <div class="route-meta-value">${route.departure}</div>
          </div>
          <div class="route-meta-item">
            <div class="route-meta-label">Arrival</div>
            <div class="route-meta-value">${route.arrival}</div>
          </div>
          <div class="route-meta-item">
            <div class="route-meta-label">Duration</div>
            <div class="route-meta-value">${route.duration}</div>
          </div>
          <div class="route-meta-item">
            <div class="route-fare">${route.fare}</div>
            <div class="route-fare-label">Starting Fare</div>
          </div>
        </div>
        <div class="route-amenities">
          ${route.amenities.map(a => `<span class="route-amenity">${a}</span>`).join('')}
        </div>
        ${route.sample ? `<div class="sample-badge">⚠ Sample Data — Official timings/fares coming soon</div>` : ''}
        <button class="btn btn-gold btn-full" onclick="handleRouteBook('${route.from}', '${route.to}')">
          View &amp; Book
        </button>
      </div>
    </div>
  `).join('');
}

function handleRouteBook(from, to) {
  const url = CONFIG.REDBUS_BOOKING_URL !== '#'
    ? CONFIG.REDBUS_BOOKING_URL
    : CONFIG.MAKEMYTRIP_BOOKING_URL !== '#'
      ? CONFIG.MAKEMYTRIP_BOOKING_URL
      : null;

  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    const waMsg = `Hello Kasturii Roadways, I would like to book a bus ticket.

From: ${from}
To: ${to}
Journey Date: 
Number of Passengers: 

Please share available buses/seats and booking details.`;
    window.open(buildWaLink(waMsg), '_blank', 'noopener,noreferrer');
  }
}


/* ══════════════════════════════════════════════════════════════
   RENDER COACHES
══════════════════════════════════════════════════════════════ */
function renderCoaches() {
  const container = document.getElementById('coaches-grid');
  if (!container) return;

  const available = CONFIG.COACHES.filter(c => c.available);
  container.innerHTML = available.map(coach => `
    <div class="coach-card reveal">
      <img class="coach-img" src="${coach.image}" alt="${coach.name} — Kasturii Roadways" loading="lazy">
      <div class="coach-body">
        <h3>${coach.name}</h3>
        <p>${coach.description}</p>
        <div class="coach-features">
          ${coach.features.map(f => `<span class="coach-feature">${f}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   RENDER AMENITIES
══════════════════════════════════════════════════════════════ */
function renderAmenities() {
  const container = document.getElementById('amenities-grid');
  if (!container) return;

  const enabled = CONFIG.AMENITIES.filter(a => a.enabled);
  container.innerHTML = enabled.map(a => `
    <div class="amenity-card reveal">
      <div class="amenity-icon">${a.icon}</div>
      <div class="amenity-label">${a.label}</div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   RENDER SAFETY
══════════════════════════════════════════════════════════════ */
function renderSafety() {
  const container = document.getElementById('safety-list');
  if (!container) return;

  const enabled = CONFIG.SAFETY_FEATURES.filter(f => f.enabled);
  container.innerHTML = enabled.map(f => `
    <div class="safety-item reveal">
      <span class="safety-item-icon">${f.icon}</span>
      <span class="safety-item-text">${f.label}</span>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   RENDER FAQs
══════════════════════════════════════════════════════════════ */
function renderFAQs() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = CONFIG.FAQS.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" role="button" aria-expanded="false" aria-controls="faq-answer-${i}" onclick="toggleFAQ(${i})">
        <span>${faq.q}</span>
        <span class="faq-chevron" aria-hidden="true">▼</span>
      </div>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    </div>
  `).join('');
}


/* ══════════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════════ */
function initFAQ() {}

function toggleFAQ(i) {
  const item   = document.getElementById(`faq-${i}`);
  const answer = document.getElementById(`faq-answer-${i}`);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = null;
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
  }
}


/* ══════════════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Simple validation
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      const err = field.parentElement.querySelector('.form-error-msg');
      if (!field.value.trim()) {
        field.classList.add('error');
        if (err) err.classList.add('show');
        valid = false;
      } else {
        field.classList.remove('error');
        if (err) err.classList.remove('show');
      }
    });

    // Email validation
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value) {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailReg.test(emailField.value)) {
        emailField.classList.add('error');
        const err = emailField.parentElement.querySelector('.form-error-msg');
        if (err) { err.textContent = 'Please enter a valid email.'; err.classList.add('show'); }
        valid = false;
      }
    }

    if (!valid) return;

    // Disable button
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    // Simulate async submission (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1200));

    btn.disabled = false;
    btn.textContent = 'Send Message';
    form.reset();

    const success = document.getElementById('form-success');
    if (success) {
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    }
  });

  // Live validation clear
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const err = field.parentElement.querySelector('.form-error-msg');
      if (err) err.classList.remove('show');
    });
  });
}


/* ══════════════════════════════════════════════════════════════
   BOOKING PLATFORM LINKS
══════════════════════════════════════════════════════════════ */
function initPlatformLinks() {
  document.querySelectorAll('[data-platform="redbus"]').forEach(el => {
    el.addEventListener('click', () => {
      if (CONFIG.REDBUS_BOOKING_URL !== '#') {
        window.open(CONFIG.REDBUS_BOOKING_URL, '_blank', 'noopener,noreferrer');
      } else {
        alert('redBus booking will be available soon. Please book via WhatsApp for now.');
      }
    });
  });

  document.querySelectorAll('[data-platform="mmt"]').forEach(el => {
    el.addEventListener('click', () => {
      if (CONFIG.MAKEMYTRIP_BOOKING_URL !== '#') {
        window.open(CONFIG.MAKEMYTRIP_BOOKING_URL, '_blank', 'noopener,noreferrer');
      } else {
        alert('MakeMyTrip booking will be available soon. Please book via WhatsApp for now.');
      }
    });
  });

  // Footer platform links
  document.querySelectorAll('[data-footer-redbus]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (CONFIG.REDBUS_BOOKING_URL !== '#') window.open(CONFIG.REDBUS_BOOKING_URL, '_blank', 'noopener');
      else alert('redBus booking coming soon!');
    });
  });
  document.querySelectorAll('[data-footer-mmt]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (CONFIG.MAKEMYTRIP_BOOKING_URL !== '#') window.open(CONFIG.MAKEMYTRIP_BOOKING_URL, '_blank', 'noopener');
      else alert('MakeMyTrip booking coming soon!');
    });
  });
}


/* ══════════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observe all reveal elements (including dynamically inserted ones)
  function observeAll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }

  observeAll();
  // Re-observe after dynamic content
  setTimeout(observeAll, 500);
}


/* ══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}


/* ══════════════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════════════ */
function buildWaLink(message) {
  const num = CONFIG.WHATSAPP_NUMBER;
  const defaultMsg = `Hello Kasturii Roadways, I would like to book a bus ticket.

From: 
To: 
Journey Date: 
Number of Passengers: 

Please share available buses/seats and booking details.`;
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${num}?text=${text}`;
}
