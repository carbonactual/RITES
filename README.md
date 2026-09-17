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

## Ecosystem inheritance

RITES inherits **Carbon Actual** constitutional/interoperability semantics and does not create parallel identity, authority, value, ledger or security primitives.

- **Nothing Is Lost:** continuity records, decisions, wishes, responsibilities, transitions, failures, evidence and retired states remain attributable and recoverable.
- **Value:** continuity value can include time, care, relationships, capacity, property, knowledge, service and opportunity; not everything is reduced to money.
- **Pulse:** continuity events may emit feedback/value signals, but Pulse is not the underlying value or authority.
- **Ash:** expired, retired, failed, quarantined or recoverable continuity residue remains represented rather than silently deleted.
- **Phoenix:** governed recovery, rollback, replacement and regeneration can respond to damaged or unsafe continuity state; no unrestricted destructive autonomy.
- **Authority:** sensitive transitions, estate actions, sealed objects and high-impact changes remain bound to explicit authority, consent, evidence and applicable review.

RITES remains independently addressable as a continuity domain and connects to ABBA through an orchestration boundary rather than becoming an ABBA identity or a competing constitutional layer.

## Experience and implementation model

- **React + Vite**
- **Framer Motion** for intentional state and spatial transitions
- **Lucide** icons
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
