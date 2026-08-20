# Basement

Basement is an initial front-end prototype and architecture foundation for a social music networking platform for independent artists, producers, songwriters, engineers, DJs, and other creators.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when Supabase, Stripe, or other services are connected. Stage 1 uses demo data only and does not require secrets.

## Current scope

- Polished responsive Next.js app shell for Vercel deployment.
- Home feed with composer, social post cards, music posts, and triller-style posts.
- Discover, Feedback, Features, Beats, and Artist Profile pages.
- Reusable UI components and typed mock data.
- Supabase/PostgreSQL schema draft for profiles, social graph, posts, songs, feedback, marketplaces, and notifications.

## Mocked vs functional

The current prototype is visual and data-driven from local mock data. Authentication, persistence, uploads, listening verification, recommendations, payments, and real search are intentionally deferred to later stages.
