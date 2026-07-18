# Digital Hub — production website

# Digital Hub — production website

Full-service digital marketing agency site: marketing homepage, blog (with
a database-backed CMS), contact/booking form, newsletter signup, and an
authenticated admin panel — built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS (utility layer only — see "Styling" below), Prisma,
and NextAuth. Ready to deploy on Vercel.

## Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | Company/team page |
| `/services` | Services overview |
| `/portfolio` | Case studies grid (mirrors the homepage's interactive one) |
| `/blog`, `/blog/[slug]` | Blog index and post pages, backed by the `Post` model |
| `/contact` | Standalone contact form, posts to `/api/contact` |
| `/privacy`, `/terms`, `/disclaimer`, `/cookies` | Legal pages |
| `/admin`, `/admin/login`, `/admin/blog`, `/admin/blog/new`, `/admin/blog/[id]`, `/admin/submissions` | Authenticated admin panel |

## What's included

- **Homepage** — the original animated design (nav, hero, services, case
  studies, portfolio, testimonials, FAQ, contact form, chat widget),
  ported into Next.js with security headers, SEO metadata, and a working
  backend behind the forms.
- **Blog** — `/blog` and `/blog/[slug]`, database-backed, Markdown content,
  managed from the admin panel. `GET /api/blog` exposes the same published
  posts as JSON.
- **Booking / contact form + newsletter signup** — `POST /api/submissions`
  (homepage forms) and `POST /api/contact` (the `/contact` page form) both
  write to the same `Submission` table, validated server-side, rate-limited,
  with honeypot spam protection.
- **Admin panel** — `/admin` (protected by login): dashboard, submissions
  inbox with status tracking, full blog CRUD.
- **Auth** — NextAuth credentials login backed by a database-stored,
  bcrypt-hashed admin account.
- **SEO** — metadata API, Open Graph/Twitter tags, JSON-LD, `sitemap.xml`,
  `robots.txt`.

## Styling

The original hand-tuned design system (CSS variables, `.btn` / `.section` /
`.wrap` classes, etc.) lives in `app/globals.css` and is left untouched —
it's what the homepage, blog, and admin panel are built on. Tailwind CSS is
layered on top with `preflight` disabled (see `tailwind.config.ts`), so it's
available as a utility toolkit for newer pages (`/about`, `/services`,
`/portfolio`) without Tailwind's reset fighting the existing styles.
Shared brand colors/fonts are mapped into `tailwind.config.ts` under
`theme.extend` so both systems stay in sync.

## 1. Install dependencies

```bash
npm install
```

## 2. Database setup

This project uses Postgres. **Vercel's serverless functions have an
ephemeral filesystem**, so SQLite (a local file) won't persist between
requests in production — Postgres is required for deployment. Any of these
work and have a free tier:

- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (easiest — same dashboard as your deployment)
- [Neon](https://neon.tech)
- [Supabase](https://supabase.com)

Copy the connection string into `.env`:

```bash
cp .env.example .env
# edit .env and paste your DATABASE_URL
```

Then push the schema and seed the first admin user + a sample post:

```bash
npm run db:push
npm run db:seed
```

`db:seed` reads `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env` — set those
before seeding. That's your login for `/admin`.

## 3. Environment variables

See `.env.example` for the full list. At minimum you need:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string |
| `NEXTAUTH_SECRET` | Random secret for session signing — generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | Your site's URL (`http://localhost:3000` locally) |
| `NEXT_PUBLIC_SITE_URL` | Used for SEO metadata, sitemap, and OG tags |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Used once by `npm run db:seed` to create the admin login |

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000` for the site and `http://localhost:3000/admin`
for the admin panel.

## 5. Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Import it in Vercel — it auto-detects Next.js.
3. **If this project lives in a subfolder of your repo** (for example the
   repo root contains a `digital-hub/` folder and *this* `README.md` is
   inside it), you must set Vercel's **Project Settings → General → Root
   Directory** to that subfolder path. This is the single most common
   cause of a whole-site `404: NOT_FOUND` after deploy — Vercel builds
   from the repo root by default, and if `app/`, `package.json`, etc.
   aren't there, it can't find your routes. If everything in this README
   is at your repo's root already, you can skip this step.
4. Add the environment variables from `.env.example` in the Vercel project
   settings (use your production `DATABASE_URL`, a fresh `NEXTAUTH_SECRET`,
   and your real domain for `NEXTAUTH_URL` / `NEXT_PUBLIC_SITE_URL`).
5. Deploy. The build runs `prisma generate && next build` automatically
   (configured in `vercel.json` / `package.json`).
6. After the first deploy, run the schema push and seed once against your
   production database (from your machine, with `DATABASE_URL` pointed at
   production):
   ```bash
   npm run db:push
   npm run db:seed
   ```

No further code changes are required — the app is Vercel-ready out of the box.

## Project structure

```
app/
  page.tsx                     Homepage
  layout.tsx                    Root layout + SEO metadata
  loading.tsx / error.tsx        Route-level loading & error boundaries
  not-found.tsx                  404 page
  global-error.tsx                Root-layout-level error boundary
  globals.css                      Site-wide styles + Tailwind directives
  about/, services/, portfolio/     Marketing pages
  contact/                          Contact page + ContactForm client component
  privacy/, terms/, disclaimer/, cookies/   Legal pages
  blog/                              Public blog list + post pages
  admin/                              Protected admin panel (dashboard, submissions, blog CRUD)
    loading.tsx                        Admin-section loading state
  api/
    submissions/route.ts                Public form endpoint (booking + newsletter)
    contact/route.ts                     Contact-page form endpoint
    blog/route.ts                         Public JSON feed of published posts
    auth/[...nextauth]/route.ts            NextAuth session handler
components/    SiteHeader, SiteFooter, AdminShell, homeMarkup, etc.
hooks/         useMediaQuery, useDebouncedValue
types/         Shared TypeScript types (re-exports Prisma model types)
styles/        tokens.ts — brand colors/shadows mirrored for use in TS/JS
lib/
  prisma.ts / auth.ts / validation.ts / rateLimit.ts / actions.ts
prisma/
  schema.prisma               Submission, Post, AdminUser models
  seed.ts                       Creates the first admin user + sample post
public/
  images/, icons/, uploads/      Static asset folders
  scripts/
    home-widgets.js               Nav, hero, animations, chat widget (client-side)
    home-forms.js                  Wires the homepage forms to /api/submissions
middleware.ts                  Protects /admin/* behind login
```

## Notes on the chat widget

The homepage chat widget answers with pre-written canned responses — it
is not connected to an AI backend. If you want it to answer live
questions, that would need a separate integration (e.g. a call from
`public/scripts/home-widgets.js` to a new API route backed by an LLM
provider) — ask if you'd like that built in.

## Security notes

- Passwords are hashed with bcrypt; never stored in plaintext.
- `/admin` is protected by middleware at the routing layer, and every
  server action re-checks the session before touching the database.
- The public submissions endpoint validates input with Zod, rejects
  honeypot-filled bot submissions, and rate-limits by IP.
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.js`.
- `/admin` and `/api` are excluded from search engine indexing via
  `robots.ts`.
