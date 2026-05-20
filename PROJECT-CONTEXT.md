# DACE Cohort 2 — Project context

Last updated: 2026-05-20 (session handoff)

## Overview

- **Repo:** `damiansian/dace-replace` (local: `DACE-cohort-2`)
- **App:** `dace-site/` — Next.js on Vercel
- **Production:** https://dace-replace.vercel.app
- **Deploy:** push to `main` → Vercel auto-deploys (project `dace-replace`)

## URLs

| Audience | URL pattern |
|----------|-------------|
| Public site | https://dace-replace.vercel.app |
| Students (private dashboard) | `https://dace-replace.vercel.app/?t=<access_token>` |
| Teacher portal | `https://dace-replace.vercel.app/teacher?token=<ADMIN_SECRET>` |

- Student tokens and dashboard URLs: `cohort-private/student-access-tokens.csv` (gitignored)
- `ADMIN_SECRET`: Vercel production env for `dace-replace`, and `dace-site/.env.local` for local dev. **Never commit or paste into git/issues.**

## Key paths

| What | Path |
|------|------|
| Badge 1 study guide (live) | `dace-site/public/badge-1/study-guide.html` → `/badge-1/study-guide.html` |
| Badge 1 study guide (source MD) | `Badge_1/Badge_1_Assessment/study-guide/` |
| Badge 1 exam docs (in-repo reference) | `dace-site/docs/badge-1-exam/` |
| Week 4 applied practice | `dace-site/src/components/week4-practice/` |
| Northstar shared copy (live + mockup) | `dace-site/src/data/northstar-shop/copy.ts` |
| Cohort-private notes / tokens | `cohort-private/` (see `cohort-private/README.md`) |

## Recent work (May 2026)

### Badge 1

- Study guide HTML: removed “45 Minutes” chip; pass criteria describes instructor scoring within ~25 hours (not “85% to pass”).
- Exam source materials copied into `dace-site/docs/badge-1-exam/` for maintainers.

### Week 4 applied practice

- About mockup: contact form beside main content on wider viewports.
- Inline validation for generic region/section landmark names (`aria-invalid`, alert messaging).
- Stepper: steps marked complete only when required workbook fields are filled.
- Incomplete landmark page labels shown on the landmarks step.
- Northstar copy centralized so live Northstar Shop and practice mockup stay aligned.
- `HeroCarouselWireframe` for home carousel in skip-nav / motion overlays.
- Skip-nav on Home: correct first tab is **Previous slide** (`hero-carousel-prev`), not pause.

### Course home

- Signed-in students see personalized heading: “Welcome, {displayName}, to DACE Cohort 2”.

### Representative commits on `main`

- `638acdc` — personalize home welcome; Week 4 skip target (hero prev)
- `2343706` — hero carousel wireframe in Week 4 mockup
- `4e322cf` — Northstar shared copy; Badge 1 exam docs
- `ded0018` — Week 4 stepper content-based completion
- `5552c39` — inline errors for generic landmark names
- Earlier: study guide + About layout (`1cbef74` / `59767ca`)

## Conventions for agents

- **Push to prod:** commit on `main`, `git push origin main` (only when the user asks).
- Do not commit `cohort-private/`, `.env.local`, or teacher URLs / secrets.
- WCAG 2.2 AA; no rendered text below 12px; 4.5:1 contrast minimum.
- Default UI stack: React / Next.js App Router in `dace-site/`.

## Likely next steps

- Keep `study-guide.html` in sync with `dace-site/docs/badge-1-exam/B1_Discover_Badge_Study_Guide.md` when editing study guide content.
- Week 4 / Northstar: further skip-nav and mockup parity with live Northstar Shop as needed.
- Badge 1 exam: scoring via teacher portal `/teacher/exam/b1-final-assessment`.

## Vercel

- Dashboard: https://vercel.com/damians-projects-23fa9cbf/dace-replace
- Production env vars include `ADMIN_SECRET` and `POSTGRES_URL`.
