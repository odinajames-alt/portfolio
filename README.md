# Odin James portfolio

English photography and film portfolio with a collage homepage.

## Preview

GitHub Pages automatically deploys pushes to main using .github/workflows/pages.yml.
Expected address: https://odinajames-alt.github.io/portfolio/

Codespaces: open this repository in a Codespace and open port 3000. For an existing Codespace, pull main and run git lfs pull, then npm run dev.

## Local development

Node.js 20 or newer. Run git lfs pull first to download the UKM film, then npm run dev. No npm dependencies are required. Run npm run check to check JavaScript syntax.

MP4 files are tracked using Git LFS. The Pages workflow downloads the real video before deployment.

See CONTENT-NEEDED.md for remaining pictures and project details.

## Languages and film covers

The header toggles English and Norwegian Bokmål on every route, and remembers the choice in browser localStorage. i18n.js contains both interface dictionaries and the Bokmål project translations. Keep both languages complete whenever content changes. Film titles remain recognisable proper names; other copy, captions, labels and accessibility descriptions are localized. Film covers use selected frames with a matching visual treatment and also serve as video posters.

## Project year convention

Use 2026 for projects unless Odin explicitly supplies a different year. Preserve explicitly supplied years such as 2025.
