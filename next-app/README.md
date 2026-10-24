# Kasturii Roadways — Next.js migration

This is an **in-progress** full-stack replacement for the unfinished Strapi backend. The original static site remains in the repository root and production remains unchanged.

## Local setup

1. Use Node.js 22, install packages in `next-app/` with `npm install`.
2. Create a free PostgreSQL database (or run local PostgreSQL). Copy `.env.example` to `.env`, configure DATABASE_URL and AUTH_SECRET.
3. Run `npx prisma db push` and `node scripts/create-admin.mjs` to provision the first admin.
4. Run `npm run dev` and visit `http://localhost:3000`.

## API

- GET /api/health — app status (not DB health)
- GET /api/public-content — published routes, coaches, amenities, FAQs, and settings
- GET /api/journeys?from=...&to=...&date=YYYY-MM-DD&passengers=1 — published schedule search only; no live seat data
- POST /api/contact — validated contact submission
- GET /api/admin/enquiries — authenticated admin-only enquiry listing
- /api/auth/* — Auth.js credentials session endpoints

## Remaining migration work

The Next.js home page is currently a placeholder. Port the existing HTML/CSS/JS visuals into React components and implement secure CRUD forms for all content types. Add integration tests, production-safe distributed rate limiting and security review. Do not deploy to production until this work is finished. Vercel Hobby is not suitable for commercial production use under its plan restrictions; review hosting terms before choosing a production tier.
