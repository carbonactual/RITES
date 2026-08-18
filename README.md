# RITES

**Human continuity infrastructure.**

RITES is a Carbon Actual product for identity, relationships, wishes, responsibilities, transitions, archives and legacy. It is designed as a living continuity layer rather than a static records or funeral-planning application.

## Experience model

- **ROOT** — identity, people, relationships and household
- **LIFE** — emergency, health access, travel and care
- **STEWARD** — assets, liabilities, documents and succession
- **RITE** — wishes, rites, cemetery and providers
- **CONTINUUM** — archive, memorial, digital estate and legacy
- **TRANSITION ENGINE** — life events that reshape continuity state

## Frontend foundation

- React + Vite
- Framer Motion for intentional state and spatial transitions
- Lucide icons
- Responsive CSS with reduced-motion support
- Vercel SPA deployment

## Architectural boundaries

The current frontend is deliberately provider-neutral. Intelligence is represented as an orchestration boundary so RITES can connect to ABBA and specialized agents without coupling the product experience to a single AI vendor.

The data layer is intentionally not hard-coded into the first interface. Supabase can be introduced behind stable domain contracts for identity, relationships, consent, documents, assets, events, transitions and access control.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The application is deployed through the Vercel project `rites-platform`.
