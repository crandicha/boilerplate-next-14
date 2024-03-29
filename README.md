# Next 14 Boilerplate

This is a Next 14 boilerplate project, intended to be used as a starting point for new projects.

## Getting Started

1. Clone this repo

   ```bash
   git clone git@github.com:crandicha/boilerplate-next-14.git <project-name>
   ```

2. Go to the project directory

   ```bash
   cd <project-name>
   ```

3. Re-initiate git

   ```bash
   pnpm reinit
   ```

4. Copy `.env.sample` to `.env.local` and modify the `.env.*` values based on your needs.

   ```bash
   cp .env.sample .env.local
   ```

5. Install dependencies

   ```bash
   pnpm install
   ```

6. Check optional packages (remove based on usage)

   - TailwindCSS (CSS framework) (automatically installed by create-next-app)

     ```bash
     pnpm remove tailwindcss eslint-plugin-tailwindcss &
     rm -rf tailwind.config.ts
     ```

     also remove `plugin:tailwindcss/recommended` from `.eslintrc.json`

   - Zustand (state management)

     ```bash
     pnpm remove zustand
     ```

   - React Query (data fetching and caching)

     ```bash
     pnpm remove react-query
     ```

   - Next Sitemap (SEO)

     ```bash
     pnpm remove next-sitemap & rm -rf next-sitemap.config.js
     ```

7. Configure PWA

   - If you want to disable it completely, change the `disable` value to `true` in `next.config.js`.
   - If you want it enabled, modify the `manifest.json` and `images/icons` files in the `public` directory.
     - You can use [this tool](https://manifest-gen.netlify.app/) to generate the `manifest.json` and `icons` file.

8. Start the development server

```bash
pnpm dev
```
