# Abegail Collective

A modern Next.js landing experience for a clothing collective, built with Tailwind CSS and Supabase-ready structure.

## What is included

- `Next.js` app router setup
- `Tailwind CSS` styling for a polished landing page
- `supabaseClient` ready for future data integration
- Modern product hero, shop preview, and brand story sections

## Setup

1. Copy `.env.example` to `.env.local`
2. Add your Supabase values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Run:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Project structure

- `app/layout.tsx` - root layout metadata
- `app/page.tsx` - landing page content
- `app/globals.css` - global Tailwind and theme styles
- `public/images` - public clothing images used by the storefront
- `lib/supabaseClient.ts` - Supabase client bootstrap

## Next steps

- Add product pages or catalog routes
- Connect Supabase tables for products, collections, and orders
- Add auth or customer accounts with Supabase Auth
- Build a shop cart and checkout flow
