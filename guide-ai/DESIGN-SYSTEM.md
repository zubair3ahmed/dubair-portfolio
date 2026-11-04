# Guide.ai: Incorporation Assistant — Design System & AI Experience Spec

Files: `index.html` (the case study) · `prototype.html` (the working assistant: landing page + modal markup) · `ds.css` (tokens + components, shared by both) · `app.js` (assistant logic). Open `index.html` in a browser. Tokens live in the `:root` block of `ds.css`.

**Modal:** the assistant opens as a centered dialog from any "Start application" button or the floating "Ask Guide.ai" launcher. On wide screens (≥820px) it has a persistent labelled step rail on the left. Under 820px the rail collapses into the expandable progress meter, and under 640px the modal goes full-screen. It closes with ✕, Esc or a backdrop click, traps Tab focus, and returns focus to the button that opened it. Progress is kept, so the buttons change to "Resume application" and then "View application" once submitted.

## 1. What changed vs. the reference video

| Reference (SmartGuide) | Guide.ai (this design) | Why |
|---|---|---|
| Icon-only vertical rail, ~20px icons, no labels | One progress line: "Step 3 of 8 · Share capital · ~6 min left", expands to a labelled stepper | Rail is unreadable in a ~400px panel; labels + time left reduce anxiety |
| Dense heavy-purple header, two tabs | Light header, one job. Help is a composer, not a tab | One pattern per job |
| Fixed Previous / Continue footer | Each card owns one primary CTA ("Confirm & continue") | Action sits next to what it confirms; footer space goes to Ask |
| Form fields dropped into chat | Intent echo, context used, plan, confidence per field | Conversational and transparent, not just a form in a bubble |
| Errors at the point of entry | Same, plus a *failure card* with reason, what's preserved, and 2–3 next actions | Never "something went wrong" |
| Delete / replace immediately | Confirm sheet for destructive actions, 6s Undo toast for reversible ones | Calibrated friction |
| Submit | Declaration checkbox, consequence statement, 5s cancel window, locked read-only outcome card | High-risk, irreversible action |

## 2. AI experience design (Mode A)

### Step 0 — Context
- **Domain:** regulated business registration (regulated, legal). Posture: **High** → confirmation gates, audit trail, plain-language uncertainty, human escalation.
- **Users:** first-time founder, serial founder, delegate. Time-poor, detail-averse, afraid of getting it wrong.
- **JTBD:** "Get my company registered without errors", not "answer questions about forms".
- **Assumptions:** auth and payment are handled by the host portal. Extraction is probabilistic. Activity codes come from an official list. The 8-step order follows the brief, plus a Review step.

### Role and paradigm per capability
| Capability | Role | Paradigm |
|---|---|---|
| Section cards (name, capital, office) | Assist | Conversational, form↔chat |
| Passport/doc extraction | Act (fill) | Agentic, short-run, with review |
| Activity suggestions | Recommend | Predictive cards, Add / Not relevant |
| Plain-language Q&A | Assist | Conversational, contextual starter chips |
| Submit | Escalate to user | Human-in-the-loop gate |

### Seven layers (applied to the hero flow: document upload)
1. **Intent:** user picks "Upload a passport". The card title says who it's for (Directors & shareholders).
2. **Context:** only the uploaded file is used. Stated on the card; nothing else is read.
3. **Plan:** `Uploaded → Reading document → Matching fields`, current step highlighted. Stop button always present.
4. **Tools:** "Reading document" is a *read* action. Nothing is saved until the user confirms.
5. **Control:** Stop, Replace, Cancel, Enter manually, Talk to a person.
6. **Outcome:** a person row ("Amira Rahman · Director · from passport"), not a transcript.
7. **Transparency:** per-field badge (Read clearly / Check this), activity log entry, source shown on every person.

### Autonomy & risk matrix
| Action | Risk | Level | Pattern |
|---|---|---|---|
| Check name availability | Low | 3 Execute + notify | Inline status, live region |
| Suggest activities | Low | 0 Suggest | Cards with *why*, match strength, Add / Dismiss |
| Add an activity | Low | 1 Ask permission | One tap Add + Undo toast |
| Read passport | Medium | 1 Ask permission | User uploads → Guide.ai reads → user reviews fields |
| Save extracted fields | Medium | 2 Confirm | "Confirm & add person"; low-confidence field must be checked first |
| Remove a person (deletes document) | High | 2 Confirm | Confirm sheet, distinct label "Remove person" |
| Submit application | High | 2 Confirm | Declaration + consequence + 5s cancel window |
| Legal advice | — | Never | Declared in welcome ("I can't…"); Q&A labelled "not legal advice" |

### Confidence map
| | Low risk | Medium | High |
|---|---|---|---|
| High conf. | Act | Act + show | Confirm |
| Med conf. | Act + notify | Ask | Confirm + evidence |
| Low conf. | Clarify | Clarify | Hand to a person |

Examples in the prototype: a blurry passport number is flagged amber and blocks "Add" until the user taps *It's correct*. A vague business description gets a clarifying question with chips. An unknown question gets "I'm not sure… I can pass it to a person."

### States
| State | Treatment |
|---|---|
| Idle / welcome | I can / I can't, time estimate, save note |
| Understanding | "What I understood" echo + "Using: …" |
| Planning / Acting | Step list with spinner on the active step, Stop button |
| Asking | Callout with one question and chips |
| Waiting | Submit cancel-window countdown, "Nothing has been sent" |
| Paused / Stopped | Toast "Stopped. Nothing was saved." Returns to idle upload |
| Completed | Outcome card: reference, status, expected time, next actions |
| Failed | Failure card (below) |
| Escalated | Sheet showing exactly what the human will see |

### Failure catalogue
| Failure | Message | Recovery |
|---|---|---|
| Expired passport | "I couldn't use this passport. It expired on 12 Mar 2024…" Preserved: "Nothing from this file was saved. Your other sections are untouched." | Upload different · Enter manually · Talk to a person |
| Name taken | "That name is already registered. Try … or …" | Inline suggestions |
| Ambiguous description | "Tell me a little more: what do you sell, and to whom?" | Chips |
| Under minimum capital | "Total capital is USD 500. The minimum is USD 1,000. Try 100 shares." | Fix inline |
| No answer | "I'm not sure, and I don't want to guess in a legal process." | Talk to a person |

### Responsible AI
Plain language and no color-only status (every badge has icon + text). Keyboard reachable, with Stop at every in-progress state and `Esc` closing sheets. Live regions announce checks and extraction. Documents used only to fill the application. Q&A answers are labelled with a source and "not legal advice". The Activity log gives accountability, and a human is always one tap away.

### Metrics
Goal completion rate · time to submission vs. baseline · % fields auto-filled · low-confidence fields corrected (trust calibration) · clarification efficiency · undo/edit rate · escalation rate and reason · failure recovery rate.

## 3. Design system

### Principles
1. One pattern per job. A single card anatomy, a single confirm sheet, a single toast.
2. Confirm, don't type. Prefer review-and-approve.
3. AI-origin is always marked (✦ icon, "AI" badge, the *why* line).
4. Status = icon + text + color, never color alone.
5. Built for a 360–440px panel, so everything stacks and nothing needs breakpoints.

### Tokens
| Category | Tokens |
|---|---|
| Color, semantic | `--bg-app` `--bg-surface` `--bg-sunken` · `--text-1/2/3` · `--border` `--border-strong` · `--brand` `--brand-hover` `--brand-soft` `--brand-border` `--on-brand` · `--ok` `--warn` `--bad` (+ `-bg`) · `--ai-grad` (AI marks only) |
| Color, primitive | `ink-50…900` · `indigo-50/100/500/600/700` · `green`, `amber`, `red` 100/600/700. Dark mode remaps semantic tokens only |
| Type | Font: system / Inter. `xs 12 · sm 13 · md 14 · lg 16 · xl 20`. Weights 500 / 600 / 650 |
| Space (4pt) | `s1 4 · s2 8 · s3 12 · s4 16 · s5 20 · s6 24` |
| Radius | `sm 8 · md 12 · lg 16 · pill` |
| Elevation | `e1` card · `e2` panel/menu/toast · `e3` sheet |
| Motion | `fast 120ms · base 220ms · ease cubic-bezier(.2,.7,.2,1)`. Honors `prefers-reduced-motion` |
| Focus | `0 0 0 3px` brand ring, 35% alpha |

Contrast: text-1/2 on surfaces ≥ 7:1; text-3 ≥ 4.5:1; brand on white 7.5:1.

### Components
| Component | Variants | States |
|---|---|---|
| **Section card** | Active · Summary (read-only) · Locked | Default, editing, error, loading (skeleton) |
| **Assistant message** | Text, text + source | Streaming rise-in |
| **Progress header** | Collapsed meter, expanded stepper | Done / Active / Upcoming (icon + label) |
| **Button** | Primary, secondary, ghost, danger, link; sm / md | Default, hover, focus, disabled, loading |
| **Field** | Text, number + suffix, select, textarea, radio card | Default, focus, invalid (message + `aria-invalid`), checking |
| **Badge** | Neutral, ok, warn, bad, AI | — |
| **Chip** | Suggestion chip, tag (removable) | Hover, focus |
| **Suggestion card** | With match strength, *why*, licence flag | Default, added, dismissed |
| **Upload** | Dropzone, reading, review, rejected | Idle, reading (Stop), review (per-field confidence), rejected (failure card) |
| **Callout** | info, warn, ok, bad | — |
| **Confirm sheet** | Normal, danger | One component for all confirmations |
| **Toast** | Info (+ Undo) | Auto-dismiss 6s, `role=status` |
| **Outcome card** | Success | Actions: View, Log, Contact |
| **Composer** | Contextual chips + input | Changes chips per step |

### Card anatomy
`Header (number/✓ · title · Edit/Locked)` → `Body (fields, one idea per card)` → `Footer (one primary CTA)`. Summary cards drop the body and footer and show key/value rows.

### Voice
Calm, past tense for confirmations ("Saved changes"), direct for errors ("I couldn't use this passport"), and always a next step. Jargon is explained in the same breath ("Share capital is the starting value of the company…").

### Do / Don't
| Do | Don't |
|---|---|
| Echo what you understood | Show only "Thinking…" |
| Flag low-confidence fields and require a check | Auto-accept extracted data |
| Use distinct button labels ("Remove person", "Submit application") | Use "OK" on destructive actions |
| Offer undo for reversible changes | Block with confirmations for everything |
| Say what is preserved on failure | Say "Something went wrong" |

### Accessibility checklist
Labels on all inputs · `aria-live` on checks, extraction and the submit countdown · `role=alert` on field errors · `aria-expanded` on the stepper · focus moves into sheets, `Esc` closes · 36–44px targets · reduced-motion respected · dark mode.

## 4. Open questions
- Which fields can the registry verify automatically, so extraction can skip the review step for high-confidence reads?
- Is an amendment flow in scope after lock?
- Real extraction vendors vary in per-field confidence. The "Check this" threshold needs tuning with real data.
- Localisation: an Arabic/RTL pass would need logical properties (the CSS already avoids left/right where possible, but not everywhere).

## 5. One question at a time (revision)
Sections no longer show several fields at once. Guide.ai asks **one question per turn**; the answer becomes a chat bubble, then a short typing pause, then the next question.
- **Answer tray:** one control only: a single field, quick-answer chips, or large choice buttons. Choice buttons and chips answer in one tap. Enter submits (Shift+Enter for a new line in text areas).
- **Progress:** "Question 2 of 2" in the tray, plus the step meter. Completed sections collapse to a summary card.
- **Activities:** one suggestion at a time ("Suggestion 1 of 3": Yes, add it / Skip), not a list.
- **People:** upload → one check on the blurry field → role → share (only for shareholders) → "Anyone else?". Typing manually asks for one detail per turn.
- **Editing:** Edit shows a short list of answers. Pick one, change only that question, save.
- **Help:** the composer shows two help chips and a collapsed "Ask something else" instead of a permanent input.

## 6. Guardrails, drop-off prevention and closing state
**Gate before anything starts** (same one-question pattern): name → email → phone → 6-digit email code → explicit consent. Validation is inline, the code allows 3 attempts before it locks until a new code is sent, and nothing in the application opens until the email is verified. *Prototype: the code is 123456; real delivery and verification need a backend.*

**Drop-off guards**
- Autosave to the browser after every answer. Reopening shows "Welcome back, <name>. Step n of 8, about m minutes left" with Continue / Start new. The page button reads "Resume application".
- Closing mid-application (✕, Esc or backdrop) opens "Save and finish later?" with progress and Email me a link / Just close / Keep going.
- A gentle idle nudge after 75 seconds ("Still there? Everything is saved") with Email me a link.
- Milestone lines ("Nice start", "You're halfway there", "Almost done").
- "Not sure: use a typical estimate" on the projection questions, so nobody stalls on a number.
- Menu "Save & exit" emails a link and closes.

**Closing state**: after submit, the composer is replaced by **Close** and **Start a new application**. The outcome card shows the reference, a confirmation email notice, a "What happens next" timeline, and a one-tap Easy / Okay / Hard feedback. Reopening later shows this closed state. Starting a new application keeps the verified contact details and asks for confirmation first.

## 7. Questions aligned to the reference video
The assistant now follows the reference flow of **10 steps**: Company, Activities, Share capital, Members, Allocation, Financial, Office, Nominees, Constitution, Review. Each step is still asked one question at a time.
- **Company:** optional company-profile upload (reads the name and description for you to check), then the name with a live availability check.
- **Activities:** a description with a word counter (up to 2,000 words), then **AI-recommended activities**, one at a time, best match first. Each shows a match %, activity code, parent group, and *View restrictions*. Selected activities are grouped by parent, with the fee ("1st activity free · USD 50 each additional") and the business description.
- **Compliance:** when a selected activity has restrictions, a "Compliance review is required" panel lists them and you must acknowledge before continuing. Adding another restricted activity resets the acknowledgement. This keeps the high-risk confirmation guardrail.
- **Share capital:** authorised shares, currency, nominal value, number of classes.
- **Members → Allocation:** passport upload, then shares and class for each shareholder (cannot exceed what is authorised). Changing members resets allocation.
- **Financial:** self-funded?, financial year end, then year-1 revenue, cost, expenses and employees. Years 2 and 3 are projected from one growth question.
- **Office:** business centre (provider, centre, space, seats, lease term, price and a "paid on submission" note) or standalone address.
- **Nominees** and **Constitution:** one Yes/No question each, with a follow-up if there are nominees.
- **Review:** incomplete sections show a Finish button, fees payable are listed, and Submit stays disabled until everything is complete.
Compliance text is generic ("the registry"), not a named regulator.

## 8. Faster, with the same validation
Goal: cut the time and clicks to fill the form, while every critical value is still validated.
Re-measured after the demo-driven flow changes (scripted runs of the prototype): **59 interactions answering every question by hand vs. 30 with the AI shortcuts** (about 49% fewer).

| Change | How it saves time | Guardrail kept |
|---|---|---|
| **"Suggested for you" cards** for Share capital, Allocation, Financial and Office: AI pre-fills the whole section from earlier answers, accepted with one **Use this** click (focused, so Enter works) | A 4–9 question section becomes one click | Every value is re-validated on accept. If anything fails, Guide drops into the individual questions with the suggestion prefilled. "I'll change it" is always there |
| **Prefilled and "Suggested" tags** when you choose to change | Each question is one Enter or tap | Normal inline validation |
| **Passport: confirm the number and pick the role in one tap** | Replaces two questions | The blurry field is still named and must be confirmed |
| **Add top 3** activities | Replaces three Add clicks | Compliance acknowledgement is still required, and resets if a restricted activity is added |
| **Company profile upload sits inside the name question** | No extra "upload or type?" step | Read name and description are shown to check before continuing |
| **Email code auto-continues** at 6 digits | No Continue click | 3-attempt lockout unchanged |
| **Number keys 1–9** choose options; recommended option is highlighted and focused | Keyboard-only users never touch the mouse | None needed |
| Shorter typing pause (420 → 180 ms), more honest time estimate (about 5 min) | Feels quicker | None |

## 9. Flow updates from the product demo (Nov 2026)
Reviewed a recorded walkthrough of the live assistant and aligned the prototype with what it does, keeping the one-question-at-a-time pattern.
- **Entry choice:** "Continue with AI help" or "I'll fill in the form myself", plus "AI can make mistakes, so check anything important". The welcome explains this is **the application: pre-qualification**, with the next stage after approval.
- **Company:** a name-length counter; an **AI-suggested Arabic name** (RTL, editable, marked "Translated by AI, please check"); the entity type is detected from the name and shown, not asked.
- **Activities:** a **search across all activities** next to the AI suggestions, an empty state, and a compliance **declaration checkbox** (no DNFBP activities) in place of a plain acknowledge button.
- **Members:** an upfront rule ("at least one shareholder and one director"), **multiple roles** (shareholder, director, secretary, senior executive, agent), and email, phone and residency for each person. When the person is the applicant, one-tap "use my email or number" chips appear. Agents give **on whose behalf** and upload **appointment proof**.
- **Financial:** as in the demo, it opens by asking for the **final 3-year financial forecast document** (PDF, XLSX or CSV), with a template to download. The AI reads the file into a table you confirm before it is attached. With no forecast yet, "Answer a few questions and I'll draft it for you" suggests typical numbers from your activities and drafts the document. Funding source is asked either way.
- **Office:** "My own office" now means picking a **designated commercial building** plus a unit number. Leases gain a six-month option and an explicit "lease starts on incorporation, fee paid on submission" agreement.
- **Guardrail:** an **Unsaved changes** sheet (Stay or Discard) when you switch sections mid-edit.
- **Kept as our decision:** help stays inside the flow ("Ask something else") rather than a separate Consulting tab, and submission keeps the declaration plus a 5-second cancel window.

## 10. Theme v2 "Plum" and component library
- **Look:** deep plum `#3D126B`, a plum-to-violet gradient (`#3D126B → #521892 → #7444B3`) for primary actions and AI marks, lilac surfaces (`#EDE8F5`, `#F6F4FA`), and a dark plum rail (`#25125A`). Noto Sans with Noto Kufi Arabic for Arabic. Pill buttons, 12–16px cards. Inspired by a regional business-registry look, with no client name or logo.
- **Where:** a theme layer at the end of `ds.css` overrides the tokens, so every page (assistant, landing, case study) picks it up.
- **Component library:** `components.html` renders every token and component live from `ds.css`. It covers foundations, buttons, chips, choices, fields (including RTL), badges, callouts, toast and sheet, bubbles, the question tray, summary card, AI suggestion, Suggested for you, the compliance gate, document reading, the outcome card and the step rail.

## 11. In-panel payment (agentic)
The demo showed applicants leaving the assistant to log into the portal and pay. The assistant now handles payment in the panel, at **Review & pay**.
- **Invoice:** the agent itemises the fees and explains each line: application fee, activities (1st free, USD 50 each additional) and the business-centre lease.
- **Methods:** pay by card (recommended), bank transfer (sent marked "awaiting payment"; the review starts when the money arrives), or pay later in the portal (it can't be submitted until paid).
- **Card:** a secure checkout provided by the payment partner, so the AI never sees or stores card details. Then bank verification (3-D Secure), then the card is **held, not charged**, through the 5-second cancel window. Cancelling releases the hold.
- **Autonomy:** level 2, execute with confirmation. The "Pay USD 1,300" label shows the exact amount, and every step is logged.
- **Failure:** a declined card says nothing was charged and the application is unchanged, then offers try again, bank transfer, or talk to a person.
- **Outcome:** the payment method, amount and receipt number appear on the outcome card, with a Receipt button.
- **Prototype controls:** "Next payment is approved / declined". The verification code is 123456.

## 12. MOA reading, UBO step and Consulting tab
The brief named three pains: manual form filling, time-consuming document uploads, and confusing UBO rules. It asked for a conversational form agent plus a consulting AI.
- **MOA upload:** the first Company question offers "Upload your MOA". The agent shows its reading steps (with Stop), then pre-fills the company name, business description and share capital. Each pre-filled value carries a "Read from your MOA" badge and stays editable. Shareholders found in the MOA are suggested when you add members.
- **UBO step:** "UBO & nominees" opens with a plain-language definition (25% or more, or control). The agent lists UBOs from the share allocation and asks one question: complete, or someone else. If someone else, it asks for their name and why they count.
- **Consulting tab:** a second tab in the same panel, so asking a question never loses your place in the form. Starter chips cover UBOs, foreign ownership, timelines and costs. Answers cite a source ("Registry guidance · not legal advice"). When it doesn't know, it says so and offers a person rather than guessing.
