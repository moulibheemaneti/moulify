# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Custom domain & redirect

1. **CNAME** – Edit `public/CNAME` and replace `www.yourdomain.com` with your domain (e.g. `www.moulify.com` or `moulify.com`). It is copied into the build so GitHub Pages serves your site on that domain.

2. **Redirect from GitHub Pages URL** – To redirect `*.github.io` visitors to your custom domain, set the domain at build time:
   - **GitHub Actions**: In the repo go to **Settings → Secrets and variables → Actions**, add a variable `CUSTOM_DOMAIN` with your domain (e.g. `www.moulify.com`, no `https://`).
   - **Local build**: `NUXT_PUBLIC_CUSTOM_DOMAIN=www.yourdomain.com bun run generate`

3. **DNS** – At your domain provider, add:
   - **A** records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** for `www` → `yourusername.github.io`
   Then in the repo **Settings → Pages** set the custom domain and enable **Enforce HTTPS**.
