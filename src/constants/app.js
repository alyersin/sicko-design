/**
 * Application Constants and Configuration
 * 
 * Centralized location for all magic strings and hardcoded values used throughout the application.
 * This file follows the DRY (Don't Repeat Yourself) principle by providing a single source of truth
 * for routes, API endpoints, storage keys, and other constants.
 */

/**
 * Application Routes
 */
export const ROUTES = {
  home: "/",
  about: "#about",
  services: "#services",
  calculator: "/calculator",
  gallery: "#gallery",
  process: "#process",
  faq: "#faq",
  contact: "#contact",
};

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  { id: "home", label: "Acasă", href: ROUTES.home },
  { id: "about", label: "Despre", href: ROUTES.about },
  { id: "services", label: "Servicii", href: ROUTES.services },
  { id: "calculator", label: "Calculator Preț", href: ROUTES.calculator },
  { id: "gallery", label: "Galerie", href: ROUTES.gallery },
  { id: "contact", label: "Contact", href: ROUTES.contact },
];

/**
 * Service Offerings
 */
export const SERVICES = [
  {
    id: "exterior",
    title: "Detailing Exterior",
    description: "Spălare, degresare, polish, wax și protecție completă pentru caroseria mașinii tale.",
    icon: "🚗",
    features: [
      "Spălare premium",
      "Polish profesional",
      "Wax & Sealant",
      "Protecție ceramică",
    ],
  },
  {
    id: "interior",
    title: "Detailing Interior",
    description: "Curățare profundă și restaurare a interiorului pentru un aspect ca nou.",
    icon: "✨",
    features: [
      "Aspirare profesională",
      "Curățare scaune",
      "Tratament piele",
      "Detailing console",
    ],
  },
  {
    id: "ceramic",
    title: "Protecție Ceramică",
    description: "Acoperire ceramică de durată pentru protecție maximă și strălucire de lungă durată.",
    icon: "🛡️",
    features: [
      "Pregătire suprafață",
      "Aplicare ceramică",
      "Protecție 2-5 ani",
      "Garantie inclusă",
    ],
  },
  {
    id: "headlights",
    title: "Restaurare Faruri",
    description: "Restaurare și protecție pentru faruri încețoșate sau deteriorate.",
    icon: "🔧",
    features: [
      "Șlefuire profesională",
      "Eliminare încețoșare",
      "Protecție UV",
      "Rezultate durabile",
    ],
  },
  {
    id: "premium",
    title: "Detailing Premium",
    description: "Pachet complet de detailing pentru cei mai pretențioși clienți.",
    icon: "💎",
    features: [
      "Servicii complete",
      "Produse premium",
      "Atenție la detalii",
      "Rezultate excepționale",
    ],
  },
  {
    id: "commercial",
    title: "Detailing Comercial",
    description: "Servicii de detailing pentru flote auto și mașini comerciale.",
    icon: "🚙",
    features: [
      "Pachete personalizate",
      "Prețuri competitive",
      "Program flexibil",
      "Servicii la fața locului",
    ],
  },
];

/**
 * Company Statistics
 */
export const STATS = [
  {
    id: "cars",
    number: "500+",
    label: "Mașini Detaliate",
  },
  {
    id: "experience",
    number: "5+",
    label: "Ani Experiență",
  },
  {
    id: "satisfaction",
    number: "100%",
    label: "Satisfacție",
  },
];

/**
 * Testimonials
 */
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alexandru M.",
    role: "Cliențt Premium",
    rating: 5,
    text: "Servicii excepționale! Mașina mea arată ca nouă. Echipa este foarte profesională și atentă la detalii. Recomand cu încredere!",
  },
  {
    id: 2,
    name: "Maria P.",
    role: "Cliențt Premium",
    rating: 5,
    text: "Am făcut protecție ceramică și sunt extrem de mulțumit. Mașina strălucește și protecția este remarcabilă. Mulțumesc Sicko Design!",
  },
  {
    id: 3,
    name: "Andrei D.",
    role: "Cliențt Premium",
    rating: 5,
    text: "Cel mai bun detailing din Constanța! Calitatea serviciilor este de top și prețurile sunt corecte. Voi reveni cu siguranță.",
  },
];

/**
 * Contact Information
 */
export const CONTACT_INFO = {
  location: {
    label: "Locație",
    value: "Constanța, România",
    icon: "📍",
  },
  phone: {
    label: "Telefon",
    value: "+40 732 893 053",
    icon: "📞",
  },
  email: {
    label: "Email",
    value: "contact@sickodesign.ro",
    icon: "✉️",
  },
  hours: {
    label: "Program",
    value: [
      "Luni - Vineri: 9:00 - 18:00",
      "Sâmbătă: 9:00 - 14:00",
    ],
    icon: "🕒",
  },
};

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "#",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "#",
  },
];

/**
 * Loading Messages
 */
export const LOADING_MESSAGES = {
  default: "Loading...",
  sending: "Se trimite...",
  submitting: "Se procesează...",
};

/**
 * Form Placeholders
 */
export const FORM_PLACEHOLDERS = {
  name: "Numele tău",
  email: "Email",
  phone: "Telefon",
  message: "Mesajul tău",
};

/**
 * Gallery Items Count
 */
export const GALLERY_ITEMS_COUNT = 8;

/**
 * Gallery Filter Options
 */
export const GALLERY_FILTERS = [
  { id: "all", label: "Toate" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "ceramic", label: "Ceramică" },
  { id: "before-after", label: "Before/After" },
];

/**
 * FAQ Questions
 */
export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Cât timp durează un serviciu de detailing complet?",
    answer: "Un detailing complet poate dura între 4-8 ore, în funcție de tipul de serviciu și starea vehiculului. Detailing exterior standard durează aproximativ 2-3 ore, iar protecția ceramică poate dura între 6-8 ore.",
  },
  {
    id: 2,
    question: "Ce include un pachet de detailing premium?",
    answer: "Pachetul premium include spălare exterior completă, polish profesional, aplicare wax/sealant, curățare interior profundă, aspirare, tratament piele, detailing console și protecție faruri.",
  },
  {
    id: 3,
    question: "Cât timp durează protecția ceramică?",
    answer: "Protecția ceramică oferă protecție pentru 2-5 ani, în funcție de produsul folosit și de întreținerea ulterioară. Recomandăm spălare regulată și aplicare de spray ceramic pentru menținerea protecției.",
  },
  {
    id: 4,
    question: "Oferiți garanție pentru serviciile de detailing?",
    answer: "Da, oferim garanție pentru toate serviciile noastre. Protecția ceramică vine cu garanție scrisă de 2-5 ani, iar pentru celelalte servicii oferim garanție de 30 de zile.",
  },
  {
    id: 5,
    question: "Pot programa o programare pentru flota mea de mașini?",
    answer: "Absolut! Oferim servicii de detailing pentru flote auto cu pachete personalizate, prețuri competitive și program flexibil. Contactați-ne pentru o ofertă personalizată.",
  },
  {
    id: 6,
    question: "Ce produse folosiți pentru detailing?",
    answer: "Folosim exclusiv produse premium de la branduri recunoscute în industria auto detailing. Toate produsele sunt testate și aprobate pentru a oferi cele mai bune rezultate.",
  },
];

/**
 * Process Steps
 */
export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Consultare & Evaluare",
    description: "Evaluăm starea vehiculului și discutăm despre serviciile dorite",
    icon: "📋",
  },
  {
    id: 2,
    title: "Pregătire & Protecție",
    description: "Protejăm părțile sensibile și pregătim vehiculul pentru detailing",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "Curățare & Detailing",
    description: "Aplicăm tehnici profesionale pentru rezultate de excepție",
    icon: "✨",
  },
  {
    id: 4,
    title: "Inspecție Finală",
    description: "Verificăm fiecare detaliu pentru a ne asigura de calitatea serviciului",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Livrare & Documentare",
    description: "Livrăm vehiculul și oferim documentație foto a procesului",
    icon: "📸",
  },
];

/**
 * Vehicle Types for Price Calculator
 */
export const VEHICLE_TYPES = [
  { id: "small", label: "Mașină Mică", multiplier: 1.0 },
  { id: "sedan", label: "Sedan", multiplier: 1.2 },
  { id: "suv", label: "SUV", multiplier: 1.5 },
  { id: "van", label: "Van", multiplier: 1.8 },
  { id: "luxury", label: "Luxury", multiplier: 2.0 },
];

/**
 * Service Pricing (Base prices in RON)
 */
export const SERVICE_PRICES = {
  exterior: {
    base: 200,
    label: "Detailing Exterior",
  },
  interior: {
    base: 150,
    label: "Detailing Interior",
  },
  ceramic: {
    base: 1500,
    label: "Protecție Ceramică",
  },
  headlights: {
    base: 150,
    label: "Restaurare Faruri",
  },
  premium: {
    base: 800,
    label: "Detailing Premium",
  },
  commercial: {
    base: 300,
    label: "Detailing Comercial",
  },
};

