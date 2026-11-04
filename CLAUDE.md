# CLAUDE.md — Syed Zubair Ahmed Portfolio

## Working agreement (read first)

- **Ask before making changes.** Confirm the planned edit with the user before modifying any file.
- **Every git action needs the user's approval first**: `git add`, `commit`, `push`, `pull`, `merge`, branch create/delete/switch, `tag`. Before asking, show what will be included (files changed and the proposed commit message), then wait for a clear "yes".
- Approval is per action. A yes to a commit is not a yes to a push, and a yes today does not cover later changes.
- Reading git state (`status`, `diff`, `log`) needs no approval.
- Never use destructive git commands (`reset --hard`, `clean`, force push, `checkout .`) unless the user explicitly asks.
- Stage specific files by name, not `git add -A`. Never commit `.zip` archives or `.DS_Store` without asking.

## Project

Static portfolio site for Syed Zubair Ahmed, Senior Product Designer, Dubai UAE.
No build step, no framework, no package manager. Plain HTML, CSS and vanilla JS.

- Design language: dark background, lime accent, Google Sans / Google Sans Text, mono labels.
- Animation: GSAP + ScrollTrigger, `data-reveal` pattern, preloader that hands off to `heroIn()`.
- Analytics: Google Tag Manager snippet (`G-33K0YHE1F7`) in each page `<head>`.

## Run locally

Serve the repo root with any static server (the old setup used `.claude/launch.json`, name `portfolio`, which is not yet in this repo):

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765/. Use `preview_start` with name `portfolio` instead of running the server through Bash.

Browser-pane quirk: the GSAP preloader may not finish in the preview. To inspect the page, remove `#loader`, remove `is-loading` from `<body>`, `gsap.set('#hdr', {y:0})`, and set `[data-reveal]` elements to `opacity:1; transform:none`.

## Site map

Top-level pages:

| File | Purpose |
|---|---|
| `index.html` | Main portfolio (v2): hero, works grid, about, words, contact, AI chatbot dialog, 1:1 mentoring CTA |
| `index-v1-backup.html` | Curated v1 variant: only 5 highlighted works shown (cards 06-10 hidden with `display:none`) |
| `projects.html` / `works.html` | Full project listings |
| `resume.html` | Résumé |
| `visual-designs.html` | Visual design works |
| `ai-simplified.html` | AI Simplified series (card deck driven by a `POSTS` array in an inline script) |
| `ai-workflow.html` | AI workflow page (section is hidden on index) |
| `ai-agents-casestudy.html` | AI Agent Workforce case study |
| `ride-booking-casestudy.html` | Ride Booking case study |
| `dark-mode.html` | Designing Dark Mode with Figma Variables |
| `healthcare-ai.html` | Older Aspen Health AI copilot case study |

Case-study folders (each self-contained):

| Folder | Case study |
|---|---|
| `guide-ai/` | Guide.ai (`index.html`, `components.html`, `prototype.html`) |
| `healthcare-ai-copilot/` | Nextiva healthcare AI copilot (`_ds/`, `assets/`, `uploads/`) |
| `lasalle/` | JLL LaSalle Global Incentive Fee Awards |
| `xbert/` | XBert AI |
| `uae/` | UAE-targeted variant of the portfolio (back-links use `?from=uae`) |

Shared assets: `css/style.css`, `js/main.js`, `images/` (incl. `ai-simplified/`, `ride-app/`, `meta-ads/`), `assets/`, `screenshots/`, `videos/`, `favicon.svg`.

## Files not to commit casually

`guide-ai.zip`, `healthcare-ai-copilot.zip`, `images/ai-simplified.zip` are exported archives. Ask the user before adding them to git.

## Conventions

### Styling
- Colors come from CSS custom properties (`--bg`, `--fg`, `--accent`, `--lavender`, `--teal`, `--border`, `--muted`, `--card-accent`). Do not hardcode colors in new rules.
- `ai-simplified.html` and some case-study pages carry their own inline `<style>` with the same variable names. Keep them in sync with `css/style.css` rather than inventing new tokens.
- `.btn--ai-glow` is the animated rotating-gradient border button (uses `@property --glow-angle` and `conic-gradient`). It is the style for "AI Simplified" CTAs.

### Works cards (`index.html`, `index-v1-backup.html`)
- Structure and order: `card__top` (index label + icon/badge) → `card__cover` → `card__title` → `card__desc` → `card__metrics` → `card__foot` (`card__tags` + `card__open`).
- Order is controlled by CSS `order`, not DOM position.
- `card__desc` uses `<strong>Problem:</strong>` / `<strong>Solution:</strong>` (or `Role:`) so recruiters can scan.
- Every "View Case Study" link ends with a `↗` arrow. Cards are numbered `NN / Label`.
- Locked case studies use `data-locked` on `.card__open`; `js/main.js` handles the password gate (AES key derived with PBKDF2, session-remembered unlock). Do not change the unlock logic or log passwords.
- Status badges (e.g. `IN PROGRESS`) replace the arrow icon in `card__top`.

### AI Simplified deck (`ai-simplified.html`)
- Each entry in `POSTS` has `day`, `category`, `theme`, `title`, `img`, `excerpt`, `takeaway`. `img` may be `.png`, `.webp` or `.mp4` (mp4 renders as an autoplaying muted video).
- Categories are listed in `CATEGORIES`. Add new posts to an existing category when one fits instead of creating a new category.
- Media lives in `images/ai-simplified/`.

### JavaScript
- `js/main.js` owns the preloader, GSAP animations, magnetic buttons, custom cursor, sound, work filters and the lock gate. Check for stale cache params (`main.js?v=N`) when behavior looks outdated.

## Git

- Remote: `git@github.com:zubair3ahmed/Portfolio-2026.git` (`origin`), default branch `main`.
- This repo is separate from the older `zubair-ahmed` repo in the parent folder. Never push to that one from here.
- Commit message style: short imperative summary, e.g. `Add Guide.ai case study and prototype`.
- Commits end with the Co-Authored-By trailer required by the session attribution instructions.
- Follow the approval rule in "Working agreement" before every git action.

## Owner context

- Mentoring link: https://topmate.io/syed_zubair_ahmed/
- LinkedIn: https://www.linkedin.com/in/zuuahmed/
