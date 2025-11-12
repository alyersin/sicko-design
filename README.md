# Sicko Design – Auto Detailing Website

Sicko Design is a lead-generation landing site built with Next.js 15 and Chakra UI for an auto detailing studio based in Constanța, Romania. The app delivers a modern, mobile-first experience, combining subtle animation, a price calculator, GDPR compliance, and quick contact actions via WhatsApp.

## ✨ Key Features
- **Full landing experience** with Hero, About, Services, Gallery, Process, Testimonials, FAQ, Contact, and Map sections.
- **Interactive price calculator** (client component) that estimates costs based on vehicle type and selected services.
- **Smart navigation** via a fixed header, responsive drawer, and the custom `useSmoothNavigation` hook for smooth scrolling between sections.
- **GDPR compliance** provided through a customizable consent banner and dedicated legal pages (Terms of Service, Privacy Policy, Sitemap).
- **Social & messaging integration** with colored icons for Facebook, Instagram, TikTok, plus a persistent WhatsApp CTA.
- **Clear componentization**: server components whenever possible, client components only where interaction/state is required.

## 🛠️ Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/) with custom theming
- [react-icons](https://react-icons.github.io/react-icons/) for social icons
- Fonts: [Geist Sans + Geist Mono](https://vercel.com/font)

## 📁 Project Structure
```
src/
  app/
    page.js                 # Landing page (server component)
    calculator/page.js      # Pagină dedicată calculatorului
    termen-si-conditii/
    politica-confidentialitate/
    harta-site/
  components/
    sections/               # Secțiuni tematice (mostly server components)
    shared/                 # Header, Footer, Logo, WhatsAppButton etc.
    calculator/             # Price calculator (client component)
    icons/                  # Reusable SVG icons
  constants/                # Navigation, services, contact, calculator config etc.
  hooks/
    useSmoothNavigation.js  # Smooth scrolling + hash routing hook
```

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run in development**
   ```bash
   npm run dev
   ```
   App is available at [http://localhost:3000](http://localhost:3000).
3. **Production build**
   ```bash
   npm run build && npm start
   ```

## ⚙️ Configuration Notes
- No secrets are required yet. For future integrations (CRM, email, etc.) use `.env.local` and `process.env`.
- Social media URLs are managed in `src/constants/social.js`.

## ✅ Linting
```bash
npm run lint
```

## 📄 Legal Pages
- `/termeni-si-conditii`
- `/politica-confidentialitate` (includes Cookie Policy section)
- `/harta-site`

---
Sicko Design is crafted with the same attention to detail as the services it showcases. For questions or contributions, open an issue/pull request or reach us at **contact@sickodesign.ro**.
