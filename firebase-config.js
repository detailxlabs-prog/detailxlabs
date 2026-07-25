// ═══════════════════════════════════════════════════════════════
//  DetailX Labs — Firebase configuration
//  Used by BOTH admin.html and index.html.
//
//  👉 Replace the placeholder values below with the config from your
//     own Firebase project. See FIREBASE-SETUP.md for step-by-step
//     instructions on where to find these values.
//
//  Until you fill these in, the website falls back to the built-in
//  default gallery images and reviews — nothing will break.
// ═══════════════════════════════════════════════════════════════

export const firebaseConfig = {
  apiKey: "AIzaSyBDHer9RzWlNOQnMHFSUVUYMAP8nHm-Mq0",
  authDomain: "detailxlabs-c04b8.firebaseapp.com",
  projectId: "detailxlabs-c04b8",
  storageBucket: "detailxlabs-c04b8.firebasestorage.app",
  messagingSenderId: "610098779762",
  appId: "1:610098779762:web:e1d746e0773ae411b794eb"
};

// Auto-detects whether real config has been added. When false, the
// site skips Firebase entirely and uses the hardcoded fallback content.
export const FIREBASE_ENABLED = !firebaseConfig.apiKey.startsWith("YOUR_");

// Firebase JS SDK version loaded from the CDN.
export const FB_VERSION = "10.12.2";
export const FB_BASE = `https://www.gstatic.com/firebasejs/${FB_VERSION}`;

// ═══════════════════════════════════════════════════════════════
//  Cloudinary — free image hosting (no credit card required).
//  Firebase Storage now needs a paid plan, so gallery photos are
//  uploaded to Cloudinary instead. Firestore still stores the URL.
//
//  👉 Fill in your Cloudinary cloud name + an UNSIGNED upload preset.
//     See FIREBASE-SETUP.md (Cloudinary section) for how to get these.
// ═══════════════════════════════════════════════════════════════
export const cloudinaryConfig = {
  cloudName:    "yrrwneku",
  uploadPreset: "detailx_unsigned"
};

export const CLOUDINARY_ENABLED = !cloudinaryConfig.cloudName.startsWith("YOUR_");

// ═══════════════════════════════════════════════════════════════
//  Pricing + business details — shared by the booking form
//  (index.html) and the invoice generator (admin.html). Keep the
//  keys here identical to the option text / checkbox values used
//  in the booking form so totals compute correctly.
// ═══════════════════════════════════════════════════════════════
export const PRICING = {
  // Package option text (exactly as shown in the booking <select>) → price
  packages: {
    "Premium Interior Detail — $120": 120,
    "Premium Exterior Detail — $80": 80
  },
  // Add-on checkbox value → price
  addons: {
    "Steam Cleaning": 20,
    "Engine Bay Detail": 30,
    "Seat Extraction": 30,
    "Pet Hair Removal": 40,
    "Bio / Biohazard Clean": 50,
    "Odor Removal": 50
  },
  // Optional tax rate (0 = no tax). Ontario HST would be 0.13.
  taxRate: 0,
  currency: "CAD"
};

// Business details printed on invoices.
export const BUSINESS = {
  name: "DetailX Labs",
  tagline: "Premium Mobile Auto Detailing",
  location: "London, ON",
  phone: "+1 548 391 5549",
  email: "detailxlabs@gmail.com",
  website: "detailxlabs.ca"
};
