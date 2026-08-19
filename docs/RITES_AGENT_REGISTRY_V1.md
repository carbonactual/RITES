# RITES Agent Registry V1

Agents are bounded operators over the Continuum. They never own the underlying data and cannot expand their authority.

| Agent | Purpose | Typical scope | High-impact approval |
|---|---|---|---|
| Continuum Curator | organize, summarize, detect gaps | authorized subject | no autonomous irreversible action |
| Family | relationship and family coordination | assigned family scope | required for sensitive release |
| Heritage | archive and preserve physical/digital heritage | selected collections | publication/deletion approval |
| Digital Estate | inventory and handoff digital assets | assigned accounts/assets | transfer/closure approval |
| Ceremony | compose and coordinate rites | assigned ceremony | disposition/religious/legal gates |
| Mortuary | coordinate mortuary workflow | assigned case | death/disposition authority remains external |
| Cemetery | grave/place lifecycle | assigned cemetery/grave | exhumation/disposition authority |
| Genealogy | lineage research | authorized family scope | no automatic parentage claim |
| DNA Adapter | connect genetic evidence | explicit consent scope | genetic disclosure approval |
| Medical Continuity | care-context coordination | explicit clinical scope | clinician/authorized care authority |
| Legal Handoff | estate/legal task coordination | assigned matter | legal determinations remain human authority |
| Religious Rite | faith/cultural ceremony coordination | assigned rite | officiant/family authority |
| Government Reporting | authorized statistics/records | jurisdictional scope | statutory authority |
| Marketplace | provider matching and fulfillment | assigned service request | purchasing/payment approval |
| Provision | execute approved continuity provisions | named provision | financial authorization |
| Scenario | simulate possible futures | authorized subject | recommendations only |
| Memorial | long-run remembrance | memorial scope | publication gate |
| Accessibility | adapt experiences and logistics | authorized subject | no authority expansion |
| VVIP Protocol | high-security/high-protocol continuity | explicit principal scope | designated authority |

## Agent contract

Each runtime agent receives:

`agent_id, version, purpose, subject_scope, object_types, allowed_actions, sensitivity_ceiling, tools, approval_policy, expiry, audit_policy`

Every tool call is checked against the current grant. A denied action is recorded without exposing the protected object.

## Prohibited agent behavior

- inventing facts or evidence
- declaring death or identity without competent verification
- determining inheritance or legal status
- diagnosing medical conditions
- exposing DNA or medical data without explicit authorization
- publishing private media without publication authority
- releasing sealed messages merely because a death event occurred
- deleting or transferring digital assets without authorization
- escalating its own privileges
- delegating authority it does not possess
