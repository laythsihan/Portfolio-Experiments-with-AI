import type { CaseStudy } from '../types/portfolio';

export const caseStudies: CaseStudy[] = [
{
  id: 'ledger',
  ordinal: '01',
  title: 'Rebuilding trust in a payments app',
  client: 'Ledger',
  year: '2025',
  discipline: 'Lead Product Designer',
  summary:
  'Eleven million people used Ledger to move money and still called support before every large transfer. We redesigned the transfer flow around confidence rather than speed.',
  cover: "/df5a8124-1f02-4eea-b436-938c5683887b.jpg",
  coverAlt: 'The redesigned Ledger transfer screen on a phone held in one hand',
  facts: [
  { label: 'Role', value: 'Lead designer, end to end' },
  { label: 'Team', value: '2 designers, 6 engineers, 1 PM' },
  { label: 'Timeline', value: '7 months to full rollout' },
  { label: 'Platform', value: 'iOS, Android' }],

  chapters: [
  {
    heading: 'The problem',
    body: 'Transfers were fast, but 31% of first-time senders abandoned before confirming, and support handled 4,000 “did it go through?” contacts a month. Speed was never the blocker — people could not tell what would happen next, so they stopped.'
  },
  {
    heading: 'What we learned',
    body: 'I ran 18 sessions with senders and read six months of support transcripts. Every abandonment had the same shape: an irreversible-feeling action with no visible receipt, no arrival estimate, and no way to check on it afterwards. Users were not confused about the interface, they were uncertain about the outcome.'
  },
  {
    heading: 'The approach',
    body: 'We rewrote the flow around a single promise: at every step you know what happens, when, and how to stop it. Amount and recipient were merged into one reviewable screen, arrival time became a committed estimate rather than a disclaimer, and every transfer produced a live status object users could return to. A 30-second cancel window replaced our warning modals — the reassurance did more than the friction ever did.'
  },
  {
    heading: 'What shipped',
    body: 'A three-step transfer with an always-visible summary, a status timeline on each transfer, plain-language failure states written with our support leads, and a recipient list that surfaces who you actually pay. Rolled out to 4% of traffic, then geographically over ten weeks.'
  }],

  metrics: [
  { value: '31% → 9%', label: 'First-time sender abandonment' },
  { value: '−62%', label: 'Transfer-status support contacts' },
  { value: '+18%', label: 'Repeat transfers within 30 days' }],

  quote: {
    text: 'The cancel window was the thing nobody asked for and everybody used once. After that they stopped calling us.',
    attribution: 'Head of Support, Ledger'
  }
},
{
  id: 'atlas',
  ordinal: '02',
  title: 'A warehouse console operators could read at a glance',
  client: 'Atlas Logistics',
  year: '2024',
  discipline: 'Senior Product Designer',
  summary:
  'Floor supervisors ran four screens and a whiteboard to keep a shift moving. We replaced them with one console built around the three decisions they make every hour.',
  cover: "/e6b51d73-6fb0-46b2-bec9-01472b004b14.jpg",
  coverAlt: 'The Atlas operations console shown on a desktop screen',
  facts: [
  { label: 'Role', value: 'Senior designer, discovery to ship' },
  { label: 'Team', value: '1 designer, 5 engineers, 1 PM' },
  { label: 'Timeline', value: '5 months' },
  { label: 'Platform', value: 'Desktop web, 24" floor terminals' }],

  chapters: [
  {
    heading: 'The problem',
    body: 'Atlas had shipped a dashboard for every request over four years. Supervisors ended up with 40 metrics on screen and no answer to the only question that mattered: which orders are about to miss their cut-off.'
  },
  {
    heading: 'What we learned',
    body: 'Four full shifts on the floor in Rotterdam. Supervisors made exactly three recurring decisions — reassign a picker, escalate a late order, hold a truck — and none of them were supported by the interface. They were reading raw numbers and doing the arithmetic in their heads.'
  },
  {
    heading: 'The approach',
    body: 'I designed the console around those three decisions instead of around the data model. Risk-to-cut-off became the primary sort for every view, so the top of the screen is always the work that needs a human. Everything else moved behind a filter drawer or a detail panel. The visual system had to survive a dusty terminal seen from two metres away, which set the type scale and contrast floor.'
  },
  {
    heading: 'What shipped',
    body: 'One live shift view with a risk-ranked order queue, an inline reassignment flow, a truck-hold action with downstream impact preview, and an end-of-shift handover summary that replaced the whiteboard.'
  }],

  metrics: [
  { value: '−41%', label: 'Orders missing cut-off' },
  { value: '4 → 1', label: 'Screens per supervisor' },
  { value: '11 min', label: 'Median time to resolve a late order, from 34' }]

},
{
  id: 'meridian',
  ordinal: '03',
  title: 'A design system six teams actually adopted',
  client: 'Meridian Health',
  year: '2023',
  discipline: 'Design Systems Lead',
  summary:
  'Meridian had three component libraries and no shared language. Rather than force a rewrite, we made the system the cheapest option available to every team.',
  cover: "/6b03d01f-59dd-4a5f-9171-ad825c70fec2.jpg",
  coverAlt: 'Printed component and type specimen cards arranged in a grid',
  facts: [
  { label: 'Role', value: 'Systems lead, 4 contributors' },
  { label: 'Team', value: '3 designers, 4 engineers' },
  { label: 'Timeline', value: '9 months, ongoing' },
  { label: 'Platform', value: 'Web, React, Figma' }],

  chapters: [
  {
    heading: 'The problem',
    body: 'Eleven button variants, four date pickers, and two accessibility audits that each found the same contrast failures. Previous system attempts had been announced rather than adopted, and product teams treated them as tax.'
  },
  {
    heading: 'What we learned',
    body: 'I interviewed every product team about why they forked components. The answer was never ideology — it was always a missing state or a two-day wait for a change. The system had failed as a service, not as a design.'
  },
  {
    heading: 'The approach',
    body: 'We treated adoption as the design problem. Started with the four components that appeared in every audit finding, shipped them with every state documented, and committed to a 48-hour turnaround on requests. Contribution was opened to product designers with a review ritual rather than a gate. Tokens came before components so teams could get 60% of the value by changing one import.'
  },
  {
    heading: 'What shipped',
    body: '34 components, a token layer covering colour, type, spacing and motion, accessibility criteria on every entry, and a Figma library kept in parity by a weekly sync we never skipped.'
  }],

  metrics: [
  { value: '6 of 6', label: 'Product teams adopted within 9 months' },
  { value: '−73%', label: 'Contrast and focus-state audit findings' },
  { value: '2.5 wks', label: 'Average feature design time, from 4' }],

  quote: {
    text: 'It was the first system here that felt like a service instead of a rulebook.',
    attribution: 'Staff Engineer, Meridian Health'
  }
},
{
  id: 'orchard',
  ordinal: '04',
  title: 'Grocery ordering for people who cook on Tuesdays',
  client: 'Orchard',
  year: '2023',
  discipline: 'Product Designer',
  summary:
  'Orchard sold weekly boxes and lost half its subscribers by week four. The churn was not about food quality — it was about a plan that ignored how the week actually goes.',
  cover: "/bb60190a-c88c-4ed8-88bd-946fd21f0fd6.jpg",
  coverAlt: 'Wireframe sketches and storyboard cards for the Orchard app laid out on a desk',
  facts: [
  { label: 'Role', value: 'Product designer, research and design' },
  { label: 'Team', value: '1 designer, 3 engineers, 1 PM' },
  { label: 'Timeline', value: '4 months' },
  { label: 'Platform', value: 'Responsive web' }],

  chapters: [
  {
    heading: 'The problem',
    body: '52% of subscribers cancelled by their fourth box. Exit surveys said “too much food” and “wrong week”, which sounded like a logistics problem and was actually a commitment problem.'
  },
  {
    heading: 'What we learned',
    body: 'Diary studies with 12 households over three weeks. Nobody cooks the week they planned. Boxes arrived against intentions set eight days earlier, and the only tools we gave people were skip and cancel — so they cancelled.'
  },
  {
    heading: 'The approach',
    body: 'We stopped designing a subscription and designed a plan that bends. Ordering moved to a rolling window editable up to 24 hours out, box size became a per-week choice instead of a plan tier, and swaps were surfaced as a first-class action rather than buried in account settings. The interface leads with what changes rather than what is locked in.'
  },
  {
    heading: 'What shipped',
    body: 'A rolling week planner, per-week sizing, one-tap swaps with live price updates, and a pause flow that offers the smallest box before it offers cancellation.'
  }],

  metrics: [
  { value: '52% → 24%', label: 'Churn by fourth box' },
  { value: '+2.1', label: 'Boxes per subscriber lifetime' },
  { value: '38%', label: 'Of would-be cancellers chose a smaller box' }]

},
{
  id: 'signal',
  ordinal: '05',
  title: 'Making an analytics tool answer questions',
  client: 'Signal',
  year: '2022',
  discipline: 'Product Designer',
  summary:
  'Signal gave analysts a blank query builder and a wall of charts. We rebuilt the workspace around the question being asked, not the query being written.',
  cover: "/055edaa2-eca7-4345-a650-6a7c2968fb5c.jpg",
  coverAlt: 'The Signal analytics workspace on a laptop screen in a dim room',
  facts: [
  { label: 'Role', value: 'Product designer' },
  { label: 'Team', value: '2 designers, 4 engineers' },
  { label: 'Timeline', value: '6 months' },
  { label: 'Platform', value: 'Desktop web' }],

  chapters: [
  {
    heading: 'The problem',
    body: 'Trial-to-paid conversion sat at 6%. Session recordings showed the same pattern: users opened the query builder, produced a chart they could not interpret, and left. The product was powerful and unteachable.'
  },
  {
    heading: 'What we learned',
    body: 'Analysts did not think in queries, they thought in comparisons — this cohort against that one, this week against last. The builder made them translate a comparison into joins before they could see anything, and most gave up during the translation.'
  },
  {
    heading: 'The approach',
    body: 'The workspace starts from a question template and shows a result immediately, then reveals the underlying query as an editable artefact for anyone who wants it. Progressive disclosure did the heavy lifting: novices never see the join editor, experts reach it in one click and keep everything they had.'
  },
  {
    heading: 'What shipped',
    body: 'A question-first workspace with nine starting templates, an editable query trace, saved comparisons, and an annotation layer so analysts could hand findings over without writing a doc.'
  }],

  metrics: [
  { value: '6% → 14%', label: 'Trial-to-paid conversion' },
  { value: '4 min', label: 'Time to first useful chart, from 22' },
  { value: '2.8×', label: 'Weekly saved comparisons per account' }]

},
{
  id: 'northwind',
  ordinal: '06',
  title: 'A check-in kiosk that works when things go wrong',
  client: 'Northwind Air',
  year: '2021',
  discipline: 'Product Designer',
  summary:
  'Kiosks handled the happy path beautifully and dumped everyone else at the desk. We designed for disruption first and let the simple case fall out of it.',
  cover: "/37aa8c6e-03c2-49ba-89e2-8c64a8aca142.jpg",
  coverAlt: 'A self-service check-in kiosk in a bright airport terminal',
  facts: [
  { label: 'Role', value: 'Product designer, kiosk and mobile' },
  { label: 'Team', value: '2 designers, 6 engineers, service design partner' },
  { label: 'Timeline', value: '8 months, 3 airport pilot' },
  { label: 'Platform', value: 'Kiosk hardware, mobile web' }],

  chapters: [
  {
    heading: 'The problem',
    body: 'A third of kiosk sessions ended at a desk queue. Every one of them was an exception: a changed seat, a missed connection, an infant added late. The kiosk assumed nothing had gone wrong, which is the one assumption airports cannot make.'
  },
  {
    heading: 'What we learned',
    body: 'Two weeks observing at Gatwick and Porto, plus shadowing desk agents. Agents resolved most exceptions in under 90 seconds using information the kiosk already had — it simply refused to offer a path. Passengers also mistrusted anything that felt final without a printed or saved confirmation.'
  },
  {
    heading: 'The approach',
    body: 'We inverted the flow: the kiosk asks what changed before it asks who you are, and every exception has a self-service route with a visible fallback to a human. Type, contrast, and touch targets were set for a standing passenger with luggage and 40 seconds of patience, tested in real terminal lighting rather than on a desk.'
  },
  {
    heading: 'What shipped',
    body: 'Self-service seat changes and rebooking, an infant and assistance path, an agent handoff that carries session context to the desk screen, and a receipt sent to phone and print by default.'
  }],

  metrics: [
  { value: '33% → 12%', label: 'Sessions escalated to a desk' },
  { value: '−26%', label: 'Median desk queue at peak' },
  { value: '+9 pts', label: 'Check-in satisfaction across pilot airports' }]

}];