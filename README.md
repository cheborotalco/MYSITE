# Alisa Chebotarenko Consulting Website

Professional multilingual (IT/RU/EN) multi-page consulting website built with **Next.js + React + TypeScript + Tailwind CSS**.

## Features

- Brutalist-Tech / Editorial Modern style based on `design_reference.md`
- Multi-page architecture:
  - Home
  - About
  - Services
  - Cases / Portfolio
  - Blog
  - Contact
  - Booking
- Language switcher (IT / RU / EN) with persisted preference (`NEXT_LOCALE` cookie + localStorage)
- Stripe Checkout integration (`/api/stripe/checkout`)
- Interactive consultation booking calendar (react-day-picker)
- Conversion optimization blocks:
  - CTA on every page
  - Testimonials
  - Trust badges
  - Lead magnet form
  - Exit-intent popup
  - FAQ progressive disclosure
- SEO:
  - Localized metadata / OpenGraph / Twitter
  - `sitemap.xml` and `robots.txt`
- Google Analytics integration (`NEXT_PUBLIC_GA_ID`)
- Database layer with Prisma + SQLite for:
  - Leads
  - Bookings
  - Lead magnet submissions

## Local setup

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:push
npm run dev
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – production server
- `npm run lint` – lint check
- `npm run prisma:generate` – generate Prisma client
- `npm run prisma:push` – sync schema to local SQLite DB

## Notes

- Stripe keys are intentionally environment-based and can be configured later.
- Google Analytics is enabled only when `NEXT_PUBLIC_GA_ID` is set.
