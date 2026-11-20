# RASTA (راستا) landing page

Single-page, Persian (fa, RTL) landing site for the real estate brand RASTA, District 1 Tehran.
Frontend only: Vite + React + TypeScript, plain CSS, no UI kit, no icon library, no backend.

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # type-check (tsc -b) and production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Where to edit

| What | File |
| --- | --- |
| Phone, WhatsApp, working hours (placeholders) | `src/config/site.ts` |
| Demo properties (titles, descriptions, attributes) | `src/data/properties.ts` |
| All photos (Unsplash IDs, alt text, ratios) | `src/data/images.ts` |
| Persian copy (hero, about, services, contact, footer) | `src/data/content.ts` |
| Services and advantages | `src/data/services.ts`, `src/data/advantages.ts` |
| Navigation links | `src/data/navigation.ts` |
| Design tokens and styles | `src/index.css` (tokens at the top of `:root`) |
| Contact form submit (demo) | `submitContactRequest` in `src/components/ContactForm.tsx` |

Contact details: fill `phoneHref` / `whatsappHref` in `src/config/site.ts`. While they are empty,
the phone and WhatsApp items show as plain text (no link) and the mobile bar scrolls to the contact section.

## Before launch

- Replace the demonstration photos in `src/data/images.ts` with licensed or client photography.
- The contact form is a demo. Connect `submitContactRequest` to a real endpoint, then update the success copy.
- Fill in the real contact details and remove the bracketed placeholders.
