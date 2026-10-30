# Project architecture

Crypto Coin is a static HTML/CSS/JavaScript application with Netlify Functions and Netlify Database. Keep the root `index.html` as the canonical entry point. Do not introduce a framework unless the task requires one.

## Directories

- `index.html`: document metadata, shell, desktop/mobile navigation, and accessible native dialogs.
- `src/styles.css`: responsive design tokens and component styles. Palette: warm coral, charcoal, white, and pale gray. Manrope headings and DM Sans body text.
- `src/app.js`: frontend rendering, SVG charts, navigation, forms, account requests, and Identity callbacks.
- `scripts/build.mjs`: copies HTML/CSS into `public` and bundles the browser module with esbuild. `public` is generated and ignored.
- `netlify/functions/market.mts`: public market snapshots and candle history through external public market providers.
- `netlify/functions/account.mts`: authenticated private account, watchlist, holdings, and order history.
- `netlify/functions/order.mts`: authenticated virtual spot execution using server-side Coinbase quotes and locked SQL transactions.
- `db/schema.ts`: source of truth for schema. `db/index.ts` creates a request-time Drizzle client.
- `netlify/database/migrations`: generated migrations and snapshots. Never edit an applied migration.
- `netlify.toml`: build/publish settings, function configuration, and security headers.

## Conventions and decisions

Use ES modules and TypeScript `.mts` for functions. Relative server imports include `.js` extensions for TypeScript resolution. Use `@netlify/identity` for all authentication and `@netlify/database` with `drizzle-orm@beta` and `drizzle-kit@beta` for persistence. Account rows use Identity IDs; never accept ownership IDs from request bodies. All account queries must filter by the server-authenticated user. Watchlists, holdings, and orders must persist in Netlify Database, not localStorage or local files.

Only ephemeral interface state lives in the browser. User data inserted into HTML must be escaped. Use delegated events instead of inline script handlers to preserve the Content Security Policy. Keep keyboard access, focus styles, native dialog focus handling, reduced-motion behavior, and mobile navigation.

This application has real accounts but simulated trading. New accounts start with 0.00 USD, from a database default. Existing account balances are preserved. Order amounts are validated server-side. USD cash uses integer cents; crypto quantities have eight decimal places. Transactions lock the account row, enforce available cash/holdings, and write the execution and balances atomically. Order UUIDs make retries idempotent. Do not expose balances as user-editable profile fields. A quote failure must never execute a trade with reference data.

CoinGecko prices are snapshots, not streaming quotes. Coinbase candles may be unavailable for certain pairs. Reference prices and charts are explicitly labeled. Preserve that distinction. No actual deposits, withdrawals, passwords, payment destinations, or trading keys are stored in application tables. Existing Firebase records are not migrated.

The platform performs build validation and deployment. Source review was used in this run; no local build, test, or development server was run. Follow active run instructions before invoking validation commands in later sessions.
