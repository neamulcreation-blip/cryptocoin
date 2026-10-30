# Crypto Coin

Crypto Coin is a responsive crypto market dashboard with real user accounts and a virtual spot-trading portfolio. The root `index.html` is the website entry point.

The interface includes market search, price charts, personal watchlists, practice buys and sells, wallet holdings, order history, profile editing, email confirmation, and password recovery. New accounts start with 0.00 USD and receive no complimentary virtual funds. Existing account balances are unchanged. Practice funds cannot be deposited or withdrawn and have no monetary value.

## Technologies

The frontend uses semantic HTML, custom responsive CSS, vanilla JavaScript, and lightweight SVG charts. esbuild bundles the browser code. Netlify Identity handles authentication; Netlify Functions protect the account APIs; Netlify Database stores accounts, holdings, and orders. Drizzle ORM defines and queries the schema, with SQL transactions used for atomic practice executions.

CoinGecko provides market snapshots and seven-day sparklines. Coinbase provides chart history and server-side execution quotes. Availability and rate limits depend on these public providers; not every asset has Coinbase chart coverage. If market data is unavailable, the dashboard explicitly labels its illustrative reference prices. An unavailable execution quote blocks an order rather than filling it with sample data.

## Local development

Use Node.js 22.12 or newer with the Netlify CLI installed:

```sh
npm install
npm run build
netlify dev --port 8889
```

The build produces `public/index.html` and bundled assets. Rebuild after source edits when using this static setup. Netlify development emulates Identity, Functions, and the database for a linked project. Account functionality requires Identity to be enabled. Registration requires email confirmation by default.

## Deployment

Netlify runs `npm run build`, publishes `public`, and deploys functions from `netlify/functions`. Database migrations in `netlify/database/migrations` are applied automatically by the platform. Do not apply migrations manually. Schema changes belong in `db/schema.ts`; generate migrations with:

```sh
npm run db:generate -- --name describe_schema_change
```

No external database or client API keys are required. The application reads authentication only through Netlify Identity, never through user-supplied IDs. It does not reuse the uploaded file's insecure Firebase accounts or passwords. Existing users must register through the secure account flow.

Real-money payments, custody, deposits, withdrawals, and exchange order execution are not integrated. These need appropriate provider integrations before any financial use.

## Verification

Source files, dependency APIs, generated migration, and deployment configuration were reviewed during implementation. Local builds, browser runs, and automated tests were not executed; deployment validation is handled by the platform.
