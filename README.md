# portfolio-v3

My personal developer portfolio. It's a Next.js app exported as a fully static site and hosted on Firebase Hosting. Deployments run through GitHub Actions and only happen when I push a version tag.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4 (via PostCSS)
- Static export: `output: "export"`, so no server at runtime
- Firebase Hosting
- GitHub Actions for deployment

## Local development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

Before deploying, always run a production build locally:

```bash
npm run build
```

`next dev` is more forgiving than the static export, so a page can work in dev and still fail the build. The build writes the finished site to the `out/` folder. To preview it:

```bash
npx serve out
```

If `out/` has no `index.html`, the build failed or was interrupted. Check the terminal output.

## Project settings that matter

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

- `output: "export"` makes `next build` generate plain HTML/CSS/JS in `out/`.
- `images: { unoptimized: true }` is required because the default image optimizer needs a server. Compress images before adding them.
- `trailingSlash: true` builds routes as `/page/index.html`, which Firebase serves cleanly.

### Things that break a static export

Do not add these to `next.config.ts`:

- `cacheComponents: true` (this is the Next 16 replacement for PPR)
- `partialPrefetching: true`
- `experimental: { ppr: true }`
- `export const experimental_ppr = true` in any route file

They need a server and fail with `Invariant: PPR cannot be enabled in export mode`.

Also don't add a custom `turbopack.rules` block for Tailwind. Tailwind v4 works through `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

And `app/globals.css` should start with `@import "tailwindcss";`.

### Static export limits

- No API routes, server actions, or middleware. A contact form needs an external service (Formspree, EmailJS) or a Firebase function.
- Dynamic routes like `/projects/[slug]` need `generateStaticParams()` so every page is built ahead of time.
- Anything using `cookies()`, `headers()`, or other per-request data fails the build.

## Firebase setup

- Firebase project ID: `portfolio-v3-e729e` (the display name is `portfolio-v3`, but tools need the ID)
- `firebase.json` uses `"public": "out"` and no single-page-app rewrite
- `.firebaserc` sets the default project to `portfolio-v3-e729e`

`firebase.json` should look like this:

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

Do not say yes when `firebase init` asks to overwrite `out/index.html` or `out/404.html`, and do not enable the single-page-app rewrite. Next exports a real HTML file for each route.

### What to commit and what to ignore

Commit:

- `firebase.json`
- `.firebaserc`
- `.github/workflows/deploy.yml`

Add to `.gitignore`:

```
out/
.next/
node_modules/
.firebase/
```

`.firebase/` is a local cache of uploaded files and is regenerated on every deploy.

## Deployment

Deployments are triggered by pushing a tag that starts with `v`. Pushing commits to `main` does not deploy anything.

### Releasing

Push your commits first, then tag. A tag points at a specific commit, so tagging before pushing means the action doesn't get the code you meant to release.

```bash
git push origin main

git tag v1.0.1
git push origin v1.0.1
```

Then watch the run under the repo's **Actions** tab. When it's green, check:

1. Firebase console, **Hosting**: a new release should appear in the history.
2. The live URL: https://portfolio-v3-e729e.web.app (hard refresh with Ctrl+Shift+R if it looks stale).

You can also trigger a deploy without a tag: **Actions**, then **Deploy to Firebase**, then **Run workflow**. It deploys the latest `main`.

### Redeploying the same version

Delete the tag locally and on GitHub, then push it again:

```bash
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1
git tag v1.0.1
git push origin v1.0.1
```

Using the next version number (`v1.0.2`) is simpler.

### The workflow

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase

on:
  push:
    tags:
      - "v*"
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          projectId: portfolio-v3-e729e
          channelId: live
```

A tag-triggered run uses the workflow file as it was at the tagged commit. If you fix the workflow, you need a new tag (or the manual run button) to pick up the fix. Re-running an old failed run reuses the old file.

## Authentication (how GitHub is allowed to deploy)

The workflow authenticates with a Google Cloud service account key stored as a GitHub secret.

- GitHub repo secret: `FIREBASE_SERVICE_ACCOUNT` (Settings, then Secrets and variables, then Actions). It holds the full contents of the service account's JSON key.
- Service account: `github-action-...@portfolio-v3-e729e.iam.gserviceaccount.com`
- Roles it needs (all four, on the same account):
  - Firebase Hosting Admin
  - Service Usage Consumer
  - API Keys Viewer
  - Cloud Run Viewer

Roles are managed under Google Cloud Console, **IAM & Admin**, **IAM**. Keys are managed under **IAM & Admin**, **Service Accounts**, then the account, then the **Keys** tab.

### Rotating the key

1. Create a new JSON key on the service account.
2. Paste its full contents into the `FIREBASE_SERVICE_ACCOUNT` secret.
3. Delete the old key from the service account's Keys tab.
4. Delete any downloaded JSON files from your computer.

Never commit a key file to the repo.

### Don't use the wrong account

The `firebase-adminsdk-...` account is for Firebase's own server-side use and doesn't have the permissions a Hosting deploy needs. A key from that account fails with `Permission denied to get service [firebasehosting.googleapis.com]`. The `github-deploy` account is not used.

## Troubleshooting

| Error | Cause and fix |
|---|---|
| `out/` has no `index.html` | The build failed. Run `rm -rf .next out && npm run build` and read the output. |
| `PPR cannot be enabled in export mode` | `cacheComponents`, `partialPrefetching`, or `ppr` is set. Remove it (see above). |
| `Project 'projects/portfolio-v3' not found or deleted` | Wrong project ID. Use `portfolio-v3-e729e` in the workflow and `.firebaserc`, and check `project_id` inside the key JSON. |
| `Permission denied to get service [firebasehosting.googleapis.com]` | The key is from the wrong account, or the account is missing Service Usage Consumer. Fix the roles or key. |
| No run appears after pushing a tag | Check that the file is at `.github/workflows/deploy.yml`, the tag starts with `v`, and the tag reached GitHub (`git ls-remote --tags origin`). |
| Old content still showing after deploy | Hard refresh, and confirm the Firebase Hosting release history shows a new entry. |
| Warning: `Node.js 20 is deprecated` | Harmless. It refers to `actions/checkout@v4` and `actions/setup-node@v4`. Bumping them to newer major versions removes it. |

## Custom domain (planned)

The domain `amirzeb.dev` is registered through Cloudflare Registrar. I'll connect it after the portfolio is finished:

1. Firebase console, **Hosting**, **Add custom domain**.
2. Add the DNS records Firebase shows in Cloudflare.
3. Wait for verification and for the SSL certificate to be issued.

## Build plan

Building section by section: layout and navbar, hero, projects, contact. Commit freely while working, since nothing goes live until I push a tag.
