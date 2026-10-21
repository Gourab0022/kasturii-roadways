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
      image: "images/sleeper-interior.png",
      features: ["Flat Sleeper Berths", "Individual Curtains", "Reading Lights", "Charging Points"],
      available: true
    },
    {
      name: "AC Seater",
      description: "Comfortable air-conditioned seater with wide reclining seats.",
      image: "images/seater-interior.png",
      features: ["Wide Reclining Seats", "Footrest", "Charging Points", "Overhead Storage"],
      available: true
    },
    {
      name: "Premium Night Coach",
      description: "Our flagship premium coach offering the ultimate overnight travel experience.",
      image: "images/sleeper-interior.png",
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
