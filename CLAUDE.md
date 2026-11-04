# CLAUDE.md — Project Instructions

## Project Overview

This is Dubair's portfolio site — a personal portfolio showcasing case studies and work.

## Tech Stack

- Plain HTML/CSS (no build tools or frameworks)
- Hosted via GitHub Pages (or static hosting)

## File Structure

- `index.html` — Main landing page
- `README.md` — Repo description

## Development Guidelines

- Keep the site lightweight — no unnecessary dependencies or frameworks
- Use semantic HTML and accessible markup
- Dark theme is the default; maintain the existing color palette (`#0a0a0a` background, `#667eea` / `#764ba2` gradient accents)
- Mobile-first: all pages must work at 375px width and up
- All styles go inline in `<style>` tags (no external CSS files for now)
- Use system font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

## Git Workflow

- Branch: `main`
- Remote: `git@github.com:zubair3ahmed/dubair-portfolio.git` (SSH)
- Write concise commit messages that explain the "why"
- Push directly to `main` for now (no PR workflow yet)

## Coding Style

- Use 2-space indentation in HTML/CSS
- Keep files self-contained where possible
- Prefer CSS custom properties for reusable values
- No JavaScript unless a feature requires it
