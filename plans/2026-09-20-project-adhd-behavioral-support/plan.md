# Project ADHD Behavioral Support evidence-first plan

## Status and naming

| Item | Current status |
|---|---|
| Working name | **Project ADHD Behavioral Support** |
| Public product name | Unresolved |
| Legacy name | `DayRoot`, deprecated because of brand and product collision |
| Product stage | Problem and value validation |
| Clinical status | A doctor is supporting the project; role and authority are not yet documented |
| Institutional status | No Bạch Mai endorsement or right to use the hospital name is assumed |

The working name is intentionally descriptive and neutral. It allows research and product validation to continue without prematurely choosing a public brand. Naming clearance runs in parallel and must not block problem discovery or Function Timeline testing.

## Goal

Validate whether Project ADHD Behavioral Support can turn real-life executive-function friction into one useful next action and an interpretable Pattern Map, with clinician review, before building the full mobile, screening, and clinician platforms.

## Source of truth

- `ADHD Knowledge Vault/ADHD Product Knowledge.md`
- `ADHD Knowledge Vault/Traceability/Claims and Hypotheses.md`
- `ADHD Knowledge Vault/Traceability/Decision Log.md`
- `ADHD Knowledge Vault/Traceability/Clinical Review Log.md`
- `ADHD Knowledge Vault/Traceability/Naming Decision Log.md`
- Nine curated session source notes under `ADHD Knowledge Vault/Sources/Sessions/`, including `S09 Kiểm chứng ADHD người lớn.md`

## Problem statement

Adults may know what they need to do but still become stuck because the first step is unclear, the task is too large, energy or stress is unfavorable, context has been lost, or switching is difficult. Existing task tools mainly record output. Project ADHD Behavioral Support must test whether capturing context, difficulty, support, response, and learning produces insight and practical support without becoming another burdensome productivity system.

## Product thesis

```text
Understand → Support → Learn → Adapt
```

The core loop is:

```text
Real-life friction
→ Function Timeline event
→ One small support
→ User response
→ Pattern Map
→ Explainable next adjustment
```

Tasks are sensors of executive function, not the definition of success.

## Decision boundaries

### Already decided

- The product supports behavior and daily functioning; it does not diagnose or treat ADHD.
- Research intake, screening, and clinician-led assessment are separate flows.
- Users retain control over meaningful changes, journal sharing, and generated interpretations.
- Task completion, streaks, and time in app are not the primary success definition.
- Content, rules, and clinical wording require versioning and traceability.
- `Project ADHD Behavioral Support` is the current working name only.

### Still hypotheses

- A check-in can be completed in 30–60 seconds without becoming a burden.
- Seven to fourteen days is enough to identify a useful repeated pattern.
- A Pattern Map is useful to users and clinicians.
- One context-matched support improves a functional outcome.
- One primary action and two secondary actions is the right daily load.
- Manual clinician review provides enough value to justify a future portal.

### Requires explicit human authority

- The supporting doctor's formal role and review scope.
- Collection of real health data.
- Safety and escalation protocol.
- Use of licensed assessment instruments.
- Use of the Bạch Mai name or any institutional affiliation claim.
- Public product name and trademark decision.

## Primary validation question

Can a short Function Timeline produce a Pattern Map that users find accurate or newly useful, clinicians find non-misleading, and the product can convert into one safe next action?

## Scope

### In scope

- Neutral research intake separated from ADHD screening.
- A 30–60 second check-in prototype.
- Function Timeline fields: context, state, task characteristics, executive difficulty, support used, response, and learning.
- Manually generated weekly Pattern Map.
- One low-risk support per repeated pattern.
- User feedback: helpful, unclear, burdensome, or not suitable.
- Structured clinician review of summaries rather than unrestricted access to raw journals.
- Traceability from session and hypothesis to evidence, review, and decision.
- A parallel naming-clearance track that does not delay core validation.

### Out of scope

- Automated diagnosis or ADHD probability.
- Medication or treatment recommendations.
- Production clinician portal.
- AI that automatically applies major plan changes.
- Real health data before privacy and governance approval.
- Payment, subscription, marketplace, or employer dashboard.
- Claims of institutional endorsement or use of the Bạch Mai name without authorization.
- Treating the working name as a public brand or assuming any historical domain check remains current.

## Product surfaces

| Surface | First validation role | Later role |
|---|---|---|
| User prototype | Capture friction, try one support, record response | Mobile Today, task map, skill tree, journal, progress |
| Research or screening web | Neutral research intake first | Public anonymous screening after clinical and licensing review |
| Clinician review pack | Review Pattern Map and unsafe interpretations manually | Secure clinician portal only after privacy and value gates |

## Agreed product structure from the vault

This section preserves the product structure already discussed. It is a blueprint, not an instruction to build every component immediately. Each component still has to pass the relevant evidence, clinical, privacy, and safety gate.

### End-to-end user journey

```text
Neutral research or public screening
→ Functional impact map
→ User chooses self-support or professional assessment information
→ Personal functional profile
→ Today: one visible next action
→ Try one support in real life
→ Short reflection
→ Function Timeline event
→ Weekly Pattern Map
→ User confirms, corrects, or rejects
→ One explainable adjustment
```

Research, screening, and assessment must remain separate:

| Flow | Purpose | Output | Prohibited output |
|---|---|---|---|
| Neutral research | Understand lived experience and product friction | De-identified observations and research patterns | ADHD classification or clinical score |
| Screening | Help a person decide whether to seek further evaluation | Directional result, limitations, and next-step information | Diagnosis or ADHD probability |
| Clinician-led assessment | Support a qualified professional's evaluation | Evidence, uncertainty, notes, and clinician-approved report | Automated conclusion or unsigned diagnosis |

### User application structure

The long-term user app has five primary screens. The validation prototype may implement only the smallest subset needed for the current hypothesis.

| Screen | Primary question | Minimum content | Guardrail |
|---|---|---|---|
| Today | What can I do now? | One primary action, up to two secondary actions, one active skill, reduce-load controls | No dense dashboard or shame state |
| Add task | What outcome am I trying to create? | Text first, at most three follow-up questions, user approval before generating steps | AI cannot silently create or commit a plan |
| Task Map | What is the next executable step? | Complete, ready, blocked, waiting, and stale states | Highlight exactly one executable step |
| Skill Tree | What capability am I practicing and why? | Skill state, reason, exercise, burden, and review condition | Not a personality type or decorative game tree |
| Progress | What is changing in real life? | Start latency, important-task outcomes, missed commitments, impact, and skill helpfulness | Do not optimize time in app, streaks, or node count |

Cross-screen quick actions:

- `This is too large` → split the current step again.
- `Low energy` → reduce load and offer a minimum version.
- `I'm stuck` → identify the nearest friction and return one next action.
- `Pause or exit focus` → protect appointments, food, rest, and task switching.
- `Helpful / unclear / burdensome / not suitable` → feed adaptation without treating rejection as failure.

### Shared domain objects

| Object | Minimum structure | Why it exists |
|---|---|---|
| Questionnaire item | Stable ID, version, purpose, source owner, license status, language, recall period, response type, display rule, escalation rule, reviewer, review date | Make every result traceable to exact content and permission |
| Function Timeline event | Context, state, task characteristics, executive difficulty, support used, response, learning, timestamp, user correction | Preserve the chain around what happened instead of recording task completion alone |
| Functional Profile | Initiation, sustained attention, switching, time awareness, working memory, planning, impulse regulation, emotional regulation, context sensitivity | Personalize by dimensions rather than ADHD personality types |
| Task Map | Goal, executable steps, dependencies, blockers, estimates, waiting state, stale state, user-approved suggestions | Convert a large goal into a visible route and one next action |
| Skill node | Skill ID, prerequisites, state, reason, exercise, burden, helpfulness, review condition | Represent long-term capability and retain not-suitable outcomes |
| Adaptation proposal | Evidence window, affected nodes, proposed change, reason, uncertainty, previous state, approval level, undo data | Make every adjustment explainable and reversible |
| Consent record | Purpose, data scope, recipient, timestamp, withdrawal state, policy version | Separate each sharing purpose and preserve user control |

Data values must remain distinct:

```text
unknown ≠ no
not sure ≠ not applicable
missing ≠ conflicting
no data ≠ failure
```

### Functional Profile

Functional Profile is a multidimensional working model, not a diagnosis or a type label.

| Dimension | Example observation |
|---|---|
| Task initiation | Time between choosing and starting an action |
| Sustained attention | Ability to remain in an appropriate focus block |
| Task switching | Ability to stop, switch, and return when needed |
| Time awareness | Estimated duration compared with actual duration |
| Working memory | Dependence on holding context in mind |
| Planning and priority | Fit between the plan and real capacity |
| Impulse regulation | Consequences of immediate decisions and ability to pause |
| Emotional regulation | Ability to continue or recover after discomfort |
| Context sensitivity | Conditions that improve or reduce function |

The system may describe a temporary observed pattern. It must not state that the user “is” a fixed type.

### Task Map and Skill Tree

The two structures answer different questions:

```text
Task Map  → How do I complete this specific goal?
Skill Tree → What long-term capability am I developing?
Today → What is the single next action now?
```

Task dependencies should be stored as a directed graph even if the interface renders a simple route. The current executable node must remain visually obvious.

Skill states:

```text
not_needed
→ suggested
→ ready
→ trying
→ helpful
→ stable

Alternative states:
paused | not_suitable | clinician_review
```

`not_suitable` is useful evidence, not failure. A prior skill is retained in history instead of being deleted.

### External Brain

The product should preserve enough context for a person to resume without reconstructing the whole task in working memory:

```text
Context → Decision → Next Action → Reminder
```

The return experience should answer “Where did I stop?” and “What can I do next?” rather than showing the full backlog first.

### Visual Time and time calibration

Timer support has two purposes:

1. Make remaining time perceptible without requiring repeated clock calculation.
2. Compare estimated and actual duration by task type over time.

```text
Initial estimate → Actual duration → Difference → Future calibration
```

The goal is better time awareness, not longer focus sessions.

### Focus Exit and recovery

Long focus is not automatically success. A complete focus flow is:

```text
Focus entry
→ Visible goal
→ Time boundary
→ Exit check
→ Continue or stop
→ Recovery and context capture
```

Exit design should reduce missed appointments, skipped meals, exhaustion, and difficulty returning to other responsibilities.

### Reflection, maps, and adaptation

The short reflection candidate contains:

1. Main emotion.
2. Energy.
3. Work attempted or completed.
4. What felt good or worth recognizing.
5. The hardest point.
6. The nearest cause or friction.
7. Support needed tomorrow.

Emotion and energy are separate variables. The system should reuse the day's tasks rather than require duplicate entry.

Three derived views:

- Weekly Map: emotion, energy, actions, wins, and stuck points.
- Friction Map: repeated task size, ambiguity, low energy, interruptions, stress, and other friction.
- Adaptive Skill Map: one proposed skill, timing, or difficulty adjustment based on repeated and user-confirmed patterns.

Adaptation uses two speeds:

| Rhythm | Candidate changes | Boundary |
|---|---|---|
| Daily | Task, timing, difficulty, timer, reminder count, minimum routine | Low risk, small, explained, reversible |
| Weekly | Priority branch, new skill, paused skill, map structure | Repeated pattern, user confirmation, no more than one main-skill change at a time |

When data is absent, the product returns to a minimal interface and one easy re-entry action. It does not infer failure, change a clinical profile, unlock more branches, or send a burst of reminders.

### Notification structure

- User chooses reminder categories and frequency.
- Quiet hours, snooze, skip-today, and reduce-load are first-class controls.
- Default proactive notification budget is a product hypothesis, currently no more than three per day.
- Repeatedly ignored reminders should decrease automatically.
- No fake social notification, impersonation, streak loss, or shame copy.
- Notifications point to a specific next action or user-requested timer, not generic engagement.

### AI and authority model

| Authority level | Allowed | Boundary |
|---|---|---|
| Low-risk automatic | Split a task, reduce load, adjust a timer, reduce reminders, reorder steps | Must expose reason and undo; cannot change clinical interpretation |
| User confirmation | Change the main branch, pause a goal, share a report, include journal material | Must allow edit, reject, and revoke where applicable |
| Clinician decision | Diagnosis, medication, treatment goal, psychiatric warning, risk pathway | The system cannot apply or sign these decisions |

AI may transcribe, summarize, suggest labels, split tasks, surface repeated patterns, and draft plain-language summaries. It may not diagnose, infer comorbid disorders from journals, alter clinical branches, send data, contact relatives or emergency services, or apply a treatment plan.

The complete core journey must remain possible with deterministic rules and no AI provider.

### Privacy structure

- Raw journals are private by default.
- Sharing a summary and sharing raw entries are separate consent choices.
- Clinicians do not automatically receive journals.
- The product does not silently collect location, messages, contacts, phone activity, or data from other apps.
- Export and delete controls are required before real user accounts.
- Journaling must remain usable without AI.

Real health data remains blocked until country, clinical owner, privacy owner, data map, consent, retention, deletion, hosting, backup, threat model, incident response, and independent security review are approved.

### Business model boundaries

| Area | Current position |
|---|---|
| Screening result | Free and never locked after a paywall |
| Eight-week skill program | Possible later product; value and price remain unvalidated |
| Professional evaluation | May charge for professional time and accountability, never for a positive result |
| Subscription | Not early; no default auto-renewal without explicit and transparent consent |
| Clinic SaaS | Only after user value and clinical workflow are demonstrated |
| Data sale or medication commission | Excluded |

Value evidence comes before pricing. Historical price examples are not current decisions.

### Post-validation implementation sequence

If Phase 5 produces a `go` decision, implementation follows the existing safety-gated architecture sequence:

```text
1. Clinical, privacy, content, and licensing foundation
2. Shared versioned domain rules and deterministic tests
3. Offline-first user MVP
4. Anonymous public screening web
5. Consented sync and clinician portal
6. Monitored pilot and release decision
```

The order prevents the public screening and clinician platform from being built before shared rules, permissions, and user value are stable.

## Feature flows

### Daily user loop

```text
What are you trying to do?
→ What is making it hard now?
→ Choose one small support
→ Try it
→ Record what happened
→ Return to life
```

### Function Timeline

```text
Context
→ State
→ Task characteristics
→ Executive difficulty
→ Support used
→ Response
→ Learning
```

### Weekly synthesis

```text
Candidate window of 7–14 days to test
→ Candidate repeated patterns
→ User confirms or rejects
→ Clinician reviews wording and overreach
→ Keep one actionable pattern
→ Try one adjustment next week
```

### Authority flow

```text
Low-risk automatic suggestion
→ User accepts, edits, rejects, or undoes
→ Clinician reviews only clinical or safety-sensitive interpretation
```

## Phased roadmap

### Parallel Track N Public naming

**Objective:** select a defensible public brand without blocking research under the working name.

**Actions:**

1. Retain `Project ADHD Behavioral Support` in research materials and internal artifacts.
2. Recheck the latest shortlist rather than trusting historical availability claims.
3. Apply the hard gates: live `.com` availability, no active exact-name app, no confusing category collision, and acceptable Vietnamese/English pronunciation.
4. For survivors, check company and software results, App Store, Google Play, trademark scope, and social handles.
5. Test the name and descriptor with users without revealing the preferred option.
6. Record the final decision in `Naming Decision Log` before public launch.

**Gate:** a public name is adopted only after fresh clearance and direct owner approval. This gate blocks public branding, not Phases 1–4.

### Phase 0 Clinical role and research boundary

**Objective:** establish who can review what and what the pilot is legally and ethically allowed to collect.

**Actions:**

1. Record whether the supporting doctor is a content advisor, clinical owner, or research collaborator.
2. Confirm whether support is personal professional input or official institutional collaboration.
3. Review the distinction between research intake, screening, and assessment.
4. Approve prohibited claims, escalation boundary, and review cadence.

**Gate:** no clinical-approved label or institutional name until role and authority are documented.

### Phase 1 Problem discovery

**Objective:** verify that the target friction is repeated, costly, and not adequately served by ordinary task tools.

**Actions:**

1. Start with approximately 10–15 adults using behavior-centered questions; treat this as a discovery target, not a statistically powered clinical sample.
2. Ask for recent examples rather than identity labels or preferred features.
3. Map context, state, task properties, attempted support, response, and consequences.
4. Identify language that users understand without self-diagnostic priming.

**Gate:** at least two or three repeated problem patterns are observed across participants and users distinguish the product from a todo app.

### Phase 2 Concierge Function Timeline

**Objective:** test the core loop without building the full application.

**Actions:**

1. Use a lightweight form or clickable prototype for short event capture.
2. Generate Pattern Maps manually once per week.
3. Ask users to confirm, correct, or reject each inferred pattern.
4. Measure completion time, missing data, burden, and whether insights are new or accurate.

**Gate:** the flow can be completed with acceptable burden and produces interpretable events rather than generic task logs.

### Phase 3 Clinician review

**Objective:** determine whether summaries are clinically responsible and useful for asking better questions.

**Actions:**

1. Review trait, state, context, impairment, confounders, and uncertainty separately.
2. Mark overreach, unsupported causal language, missing evidence, and unsafe wording.
3. Decide which raw fields should never be inferred automatically.
4. Approve a summary rubric and minimum-data rule.

**Gate:** clinicians can use the summary without correcting most interpretations, and no output implies diagnosis.

### Phase 4 Micro-intervention test

**Objective:** test whether one support connected to a verified pattern improves a functional outcome.

**Candidate supports:**

- Clarify the first visible action.
- Reduce task size.
- Externalize context and next action.
- Add a visual time boundary.
- Reduce active tasks or reminders.
- Add a focus exit and recovery step.

**Gate:** at least one predefined functional outcome improves for a meaningful subgroup without unacceptable burden or negative effect.

### Phase 5 MVP decision

**Objective:** decide what deserves software investment.

**Build only if evidence supports:**

- Today with one primary action.
- Short check-in.
- Function Timeline.
- Weekly Pattern Map.
- One suggested next action.
- Helpful, unclear, burdensome, and not-suitable feedback.
- Explanation and undo.

**Delay until later:**

- Full adaptive skill engine.
- Public clinical screening.
- Secure sync and clinician portal.
- Pricing and subscription.

**Gate:** proceed, revise, or stop based on evidence rather than prototype appeal.

Before a public MVP release, the naming gate, privacy gate, safety gate, and claim-set review must also pass. Passing the core value gate alone does not authorize a clinical or public launch.

## Success measures

### User value

- Time required to capture an event.
- Percentage of users identifying at least one accurate or newly useful pattern.
- Reduction in task-start latency for the selected context.
- Percentage of supports marked helpful, unclear, burdensome, or not suitable.
- Dropout and notification burden.

### Clinical quality

- Percentage of summaries requiring material correction.
- Missing context, confounder, uncertainty, and alternative explanation rate.
- Number of unsafe or diagnostic-sounding statements.
- Clinician judgment of whether the summary supports better follow-up questions.

### Product integrity

- Users do not primarily describe the product as another todo app.
- Task completion is not the sole success metric.
- Every adaptation is explainable, editable, rejectable, and reversible.
- No health data or journal is shared without explicit consent.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Check-in becomes another obligation | Measure burden; allow skip; keep a minimum return path |
| Pattern Map over-interprets sparse data | Require repeated events, uncertainty labels, and user confirmation |
| Clinician review becomes unscalable | Test value manually before designing a portal |
| Product drifts into productivity optimization | Preserve task-as-sensor and functional-outcome metrics |
| Medical claims exceed authority | Version content; require scoped review; keep diagnosis outside the system |
| Bạch Mai association is overstated | Separate individual advice from institutional approval |
| Licensed scales are copied prematurely | Maintain license register and block unapproved content |
| Legacy DayRoot assets are mistaken for current branding | Mark them legacy and use Project ADHD Behavioral Support in current artifacts |
| Naming work distracts from validating user value | Run naming in parallel; do not block Phases 1–4 |
| Historical domain availability is treated as current | Recheck availability immediately before the naming decision |
| AI becomes a hidden runtime dependency | Keep rules, state transitions, task splitting templates, and core storage functional with provider set to none |
| Task Map and Skill Tree collapse into one confusing structure | Preserve separate domain objects and use Today as the single-action surface |
| Missing data triggers over-adaptation | Return to the minimal interface; require repeated evidence and user confirmation |

## Deliverables

- Editable product mindmap and BA end-to-end swimlane flow, each with a reviewed PNG export.
- Editable system design, reviewed PNG export, and interactive standalone HTML.
- Editable ten-slide project presentation.
- Interactive community and product roadmap HTML.
- Consolidated Word plan and doctor question bank.
- Research interview guide.
- Product screen map and low-fidelity five-screen reference.
- Function Timeline field specification.
- Shared domain data dictionary for questionnaire items, functional profile, task map, skill state, adaptation proposal, and consent.
- Low-fidelity daily check-in prototype.
- Manual Pattern Map template.
- Clinician review rubric.
- AI authority matrix and deterministic no-provider acceptance test.
- Notification budget and quiet-hours policy.
- Privacy data map, consent purposes, retention, export, and deletion specification before real-health-data use.
- Pilot measurement and stop-rule sheet.
- Go, revise, or stop decision report.
- Naming clearance record and final public-brand decision, when ready.

## Immediate next actions

| Order | Action | Owner needed | Output |
|---:|---|---|---|
| 1 | Confirm whether the supporting doctor is a content advisor, clinical owner, or research collaborator | Sếp and doctor | Updated `Clinical Review Log` |
| 2 | Approve the boundary between neutral research, screening, and clinical assessment | Doctor review plus product owner | One-page research and claim boundary |
| 3 | Convert the Function Timeline fields into a behavior-centered interview guide | Product owner | Interview guide with no diagnostic priming |
| 4 | Run the first five discovery interviews, then continue toward 10–15 only if new patterns are still emerging | Product owner | De-identified observation set |
| 5 | Build one low-fidelity check-in and one manual Pattern Map using synthetic examples first | Product and clinical reviewer | Prototype plus review rubric |
| 6 | Decide whether evidence is strong enough to enter the concierge test | Sếp and reviewer | Go, revise, or stop note |

The first milestone is complete only when the clinical role is recorded, the research boundary is approved, the interview guide is ready, and no real health data is being collected unintentionally.

## Plan artifact checklist

- [x] Request analysis
- [x] Retrieve and reconcile vault decisions, claims, and review queue
- [x] Correct legacy naming and add naming traceability
- [x] Write evidence-first product plan
- [x] Write visual showcase content
- [x] Build self-contained HTML
- [x] Validate responsive layouts and interactions
- [x] Capture section screenshots
- [x] Create and review product mindmap and BA end-to-end flow
- [x] Open the local artifact for review
- [x] Publish externally — intentionally skipped because no external publication was requested
