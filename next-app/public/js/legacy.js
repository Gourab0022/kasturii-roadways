/**
 * Kasturii Roadways Private Limited
 * Site Configuration — Update these values before going live
 */

const CONFIG = {
  // ─── Company ──────────────────────────────────────────────
  COMPANY_NAME: "Kasturii Roadways Private Limited",
  TAGLINE: "Ride in Comfort, Travel in Pride",

  // ─── Contact ──────────────────────────────────────────────
  SUPPORT_PHONE: "+91-XXXXXXXXXX",       // ← Replace with real number
  WHATSAPP_NUMBER: "919XXXXXXXXX",       // ← Replace: country code + number, no +
  SUPPORT_EMAIL: "support@kastuuriroadways.in",
  BUSINESS_EMAIL: "business@kastuuriroadways.in",
  OFFICE_HOURS: "Mon – Sat, 9:00 AM – 7:00 PM IST",

  // ─── Office Addresses ─────────────────────────────────────
  REGISTERED_OFFICE: "Kasturii Roadways Private Limited, [Registered Address], Odisha, India",
  OPERATIONAL_OFFICE: "Kasturii Roadways Private Limited, [Operational Address], Bhubaneswar, Odisha, India",

  // ─── Booking Platforms ────────────────────────────────────
  REDBUS_BOOKING_URL: "#",              // ← Replace with redBus listing URL
  MAKEMYTRIP_BOOKING_URL: "#",         // ← Replace with MakeMyTrip listing URL

  // ─── Maps ─────────────────────────────────────────────────
  GOOGLE_MAP_EMBED_URL: "",            // ← Replace with Google Maps embed URL

  // ─── Social Media ─────────────────────────────────────────
  SOCIAL: {
    facebook:  "#",                    // ← Replace with Facebook page URL
    instagram: "#",                    // ← Replace with Instagram profile URL
    youtube:   "#",                    // ← Replace with YouTube channel URL
  },

  // ─── Routes (Sample Data — replace with real routes) ──────
  ROUTES: [
    {
      from: "Bhubaneswar",
      to: "Puri",
      departure: "10:00 PM",
      arrival: "11:30 PM",
      duration: "1h 30m",
      coachType: "AC Seater",
      fare: "₹299",
      amenities: ["AC", "Reclining Seats", "Charging Points"],
      sample: true
    },
    {
      from: "Bhubaneswar",
      to: "Cuttack",
      departure: "09:30 PM",
      arrival: "11:00 PM",
      duration: "1h 30m",
      coachType: "AC Sleeper",
      fare: "₹499",
      amenities: ["AC", "Sleeper Berths", "Charging Points", "Water Bottle"],
      sample: true
    },
    {
      from: "Bhubaneswar",
      to: "Berhampur",
      departure: "08:00 PM",
      arrival: "12:00 AM",
      duration: "4h",
      coachType: "AC Sleeper",
      fare: "₹699",
      amenities: ["AC", "Sleeper Berths", "Charging Points", "Reading Light"],
      sample: true
    },
    {
      from: "Bhubaneswar",
      to: "Sambalpur",
      departure: "07:30 PM",
      arrival: "01:30 AM",
      duration: "6h",
      coachType: "Premium Night Coach",
      fare: "₹899",
      amenities: ["AC", "Sleeper Berths", "USB Charging", "Blanket", "Water Bottle"],
      sample: true
    },
    {
      from: "Bhubaneswar",
      to: "Rourkela",
      departure: "06:00 PM",
      arrival: "02:00 AM",
      duration: "8h",
      coachType: "Premium Night Coach",
      fare: "₹1099",
      amenities: ["AC", "Sleeper Berths", "USB Charging", "Blanket", "Water Bottle", "CCTV"],
      sample: true
    },
    {
      from: "Bhubaneswar",
      to: "Koraput",
      departure: "05:00 PM",
      arrival: "03:00 AM",
      duration: "10h",
      coachType: "AC Sleeper",
      fare: "₹1299",
      amenities: ["AC", "Sleeper Berths", "Charging Points", "Blanket"],
      sample: true
    }
  ],

  // ─── Coach Types ──────────────────────────────────────────
  COACHES: [
    {
      name: "AC Sleeper",
      description: "Fully air-conditioned sleeper coach with comfortable berths for overnight journeys.",
      image: "https://kasturii-roadways.vercel.app/images/sleeper-interior.png",
      features: ["Flat Sleeper Berths", "Individual Curtains", "Reading Lights", "Charging Points"],
      available: true
    },
    {
      name: "AC Seater",
      description: "Comfortable air-conditioned seater with wide reclining seats.",
      image: "https://kasturii-roadways.vercel.app/images/seater-interior.png",
      features: ["Wide Reclining Seats", "Footrest", "Charging Points", "Overhead Storage"],
      available: true
    },
    {
      name: "Premium Night Coach",
      description: "Our flagship premium coach offering the ultimate overnight travel experience.",
      image: "https://kasturii-roadways.vercel.app/images/sleeper-interior.png",
      features: ["Luxury Berths", "Premium Linen", "USB & Power Charging", "Bottled Water", "CCTV"],
      available: true
    }
  ],

  // ─── Amenities ────────────────────────────────────────────
  AMENITIES: [
    { icon: "❄️",  label: "Air Conditioning",     enabled: true },
    { icon: "🛏️",  label: "Sleeper Berths",        enabled: true },
    { icon: "💺",  label: "Reclining Seats",       enabled: true },
    { icon: "⚡",  label: "Charging Points",       enabled: true },
    { icon: "🔌",  label: "USB Charging",          enabled: true },
    { icon: "📖",  label: "Reading Lights",        enabled: true },
    { icon: "🛡️",  label: "Safety Blankets",       enabled: true },
    { icon: "💧",  label: "Water Bottle",          enabled: true },
    { icon: "📷",  label: "CCTV Surveillance",     enabled: true },
    { icon: "📍",  label: "GPS Tracking",          enabled: true },
    { icon: "🚨",  label: "Emergency Assistance",  enabled: true },
    { icon: "🧳",  label: "Luggage Storage",       enabled: true },
    { icon: "✨",  label: "Clean Interiors",       enabled: true }
  ],

  // ─── Safety Features ──────────────────────────────────────
  SAFETY_FEATURES: [
    { icon: "📍", label: "GPS-Enabled Coaches",         enabled: true },
    { icon: "👨‍✈️", label: "Experienced Drivers",         enabled: true },
    { icon: "🔧", label: "Regular Vehicle Inspections", enabled: true },
    { icon: "📷", label: "CCTV on Board",               enabled: true },
    { icon: "🚨", label: "24/7 Emergency Support",      enabled: true },
    { icon: "🛡️", label: "Professional Crew",           enabled: true }
  ],

  // ─── Departure Cities ─────────────────────────────────────
  CITIES: [
    "Bhubaneswar", "Cuttack", "Puri", "Berhampur", "Sambalpur",
    "Rourkela", "Koraput", "Jharsuguda", "Rayagada", "Balasore",
    "Baripada", "Kendrapara", "Jeypore", "Sundargarh", "Angul"
  ],

  // ─── FAQs ─────────────────────────────────────────────────
  FAQS: [
    {
      q: "How can I book a Kasturii Roadways ticket?",
      a: "You can book through redBus, MakeMyTrip, or directly via WhatsApp. Simply choose your preferred platform, select your route and date, and confirm your booking."
    },
    {
      q: "Can I book through WhatsApp?",
      a: "Yes! Click the 'Book on WhatsApp' button on our website to start a chat with our team. We will confirm your seat and share booking details."
    },
    {
      q: "Can I book through redBus?",
      a: "Yes. Once our listing is live on redBus, you can search for 'Kasturii Roadways' and book your ticket directly. The booking button on our website will take you there."
    },
    {
      q: "Can I book through MakeMyTrip?",
      a: "Yes. Once our listing is live on MakeMyTrip, you can book directly from our website's booking section."
    },
    {
      q: "How can I cancel my ticket?",
      a: "For tickets booked via redBus or MakeMyTrip, you can cancel directly on those platforms as per their cancellation policy. For WhatsApp bookings, please contact our support team."
    },
    {
      q: "Where can I check my boarding point?",
      a: "Your boarding point details will be shared with you at the time of booking confirmation. You can also contact our support team for assistance."
    },
    {
      q: "What luggage can I carry?",
      a: "Each passenger is allowed one piece of hand luggage and one piece of check-in luggage at no extra cost. For additional or oversized luggage, please contact us in advance."
    },
    {
      q: "How early should I reach the boarding point?",
      a: "We recommend arriving at your boarding point at least 15–20 minutes before the scheduled departure time."
    },
    {
      q: "How can I contact customer support?",
      a: "You can reach us by phone, WhatsApp, or email. Our support team is available during office hours. Details are available on our Contact page."
    },
    {
      q: "What amenities are available on the bus?",
      a: "Amenities vary by coach type. They may include air conditioning, sleeper berths, reclining seats, charging points, reading lights, blankets, water bottles, CCTV, GPS tracking, and luggage storage."
    }
  ]
};

/**
 * Kasturii Roadways — Main JavaScript
 * Handles: Nav, Hero, Booking, FAQ, Form, Animations, WhatsApp, Rendering
 */

async function kasturiiInitialize() {

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
}



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

    try { const response = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(Object.fromEntries(new FormData(form))) }); if(!response.ok) throw new Error('Unable to send message'); } catch(err){ alert('Your message was not sent. Please try again later.'); btn.disabled=false; btn.textContent='Send Message'; return; }

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

(async()=>{try{const r=await fetch('/api/public-content',{cache:'no-store'});if(r.ok){const {data}=await r.json();if(data){if(data.cities?.length)CONFIG.CITIES=data.cities;if(data.coaches?.length)CONFIG.COACHES=data.coaches.map(c=>({...c,available:true,image:c.image||'https://kasturii-roadways.vercel.app/images/sleeper-interior.png'}));if(data.amenities?.length)CONFIG.AMENITIES=data.amenities.map(a=>({label:a.label,icon:a.icon,enabled:true}));if(data.faqs?.length)CONFIG.FAQS=data.faqs.map(f=>({q:f.question,a:f.answer}));if(data.settings){const s=data.settings;for(const [a,b] of Object.entries({supportPhone:'SUPPORT_PHONE',whatsappNumber:'WHATSAPP_NUMBER',supportEmail:'SUPPORT_EMAIL',businessEmail:'BUSINESS_EMAIL',redbusUrl:'REDBUS_BOOKING_URL',makemytripUrl:'MAKEMYTRIP_BOOKING_URL'})){if(s[a])CONFIG[b]=s[a]}}}}}catch(e){console.warn('CMS content unavailable',e)}await kasturiiInitialize()})();
