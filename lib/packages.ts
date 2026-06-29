// lib/packages.ts
// All pricing and packages - easy to update in one place

export interface Package {
  id: string;
  title: string;
  price?: number;           // Made optional for services without fixed price
  description: string;
  popular?: boolean;
  items: string[];
}

export const packages: Package[] = [
  // Single Equipment
  {
    id: "regular-projector",
    title: "Regular Projector Only",
    price: 13000,
    description: "Perfect for small meetings and presentations",
    items: ["Standard brightness projector", "HDMI & VGA cables", "1-day rental"],
  },
  {
    id: "hd-projector",
    title: "HD Projector Only",
    price: 18000,
    description: "Crystal clear for larger audiences",
    items: ["High brightness HD projector", "HDMI cables", "1-day rental"],
  },
  {
    id: "large-screen",
    title: "Large Screen Only (8ft x 8ft)",
    price: 15000,
    description: "High-quality projection surface",
    items: ["8ft x 8ft professional screen", "Stand included", "1-day rental"],
  },
  {
    id: "pa-system",
    title: "PA System Only",
    price: 20000,
    description: "Powerful sound for events",
    items: ["2x speakers + mixer", "Wireless microphone", "1-day rental"],
  },

  // New Key Services - No fixed price shown
  {
    id: "led-screen",
    title: "LED Screen Rental, Sales & Installation",
    description: "High-resolution LED video walls for events, exhibitions and outdoor functions. Bright and clear in any lighting.",
    items: ["Large LED Screen (size customizable)", "Professional stand & cabling", "Same-day delivery & setup", "Sales & installation available"],
  },
  {
    id: "interactive-panel",
    title: "Interactive Whiteboard & Panel Rental, Sales & Installation",
    description: "Smart interactive panels for classrooms, offices and meeting rooms. Modern collaboration tools.",
    items: ["55\" or 65\" Touch Panel", "Built-in OS", "Stylus & remote", "Professional installation option"],
  },

  // Combo Packages
  {
    id: "regular-projector-screen",
    title: "Regular Projector + Screen",
    price: 28000,
    description: "Great combo for meetings",
    items: ["Regular projector", "8ft x 8ft screen", "All cables"],
  },
  {
    id: "hd-projector-screen",
    title: "HD Projector + Screen",
    price: 33000,
    description: "Premium visuals for bigger events",
    items: ["HD projector", "8ft x 8ft screen", "Cables & setup"],
  },

  // Full Setup - Most Popular
  {
    id: "regular-full",
    title: "Regular Projector + Screen + PA System",
    price: 38000,
    description: "Complete AV solution - Most Popular",
    popular: true,
    items: ["Regular projector", "8ft x 8ft screen", "Full PA system", "Microphone", "Cables & stands"],
  },
  {
    id: "hd-full",
    title: "HD Projector + Screen + PA System",
    price: 42000,
    description: "Premium full setup for bigger events",
    popular: true,
    items: ["HD projector", "8ft x 8ft screen", "Full PA system", "Wireless mic", "Professional setup"],
  },
];

export const deliveryFee = "₦5,000 – ₦20,000 depending on distance";