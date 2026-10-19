# Odin James portfolio

Responsive portfolio inspired by the supplied black/yellow film-collage design board.

## Preview in GitHub Codespaces

On GitHub, choose **Code → Codespaces → Create codespace on main**. The included development container starts the website automatically. Open the **Ports** tab and click the browser icon for port **3000** to see your preview. Keep the port private unless you want to share it.

For an existing Codespace, pull the latest changes and choose **Codespaces: Rebuild Container** from the command palette to apply the configuration. Alternatively, run `npm run dev` in the terminal and open port 3000.

## Run

Node.js 20 or newer. No dependencies or installation required.

```sh
npm run dev
```

The development server uses port 3000, or the `PORT` environment variable.
Run `npm run check` for JavaScript syntax validation.

## Content still needed

Temporary photographs are served from Unsplash; fonts are served from Google Fonts. Project titles are taken from the design reference and are not confirmed credits. The site labels this material as draft content. No contact address, video link, year, or personal history has been invented.

The supplied homepage camera photo and About portrait are stored in `assets/`. Still needed: 2–4 collage photos, 6–12 gallery photos, and project covers/stills. Add approved images to `assets/`, then update the content arrays in `app.js`. Supply project descriptions, years, roles, credits, video links, a bio, contact email, and social links. Add video players once actual video URLs are available.

Routes use URL hashes, so the site can also be hosted as static files without server rewrite rules. The Node server is for local development.
