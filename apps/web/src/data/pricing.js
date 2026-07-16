// ---------------------------------------------------------------------------
// PRICING & PACKAGE DATA — driven by the Mentorship Business Logic Spec (Revised)
// BDT is the primary display currency ("charm pricing" for local psychology),
// USD/USDT is shown as a secondary reference. FX_RATE is a display-only
// approximation for the split-payment breakdown — update if your real rate changes.
// ---------------------------------------------------------------------------

export const FX_RATE = 123; // 1 USD/USDT ≈ 123 BDT (display estimate only)

export const ADDONS_VALUE_BDT = 3897;
export const ADDONS_VALUE_USD = 39;

export const addons = [
  {
    id: 'insight',
    slug: 'daily-market-insight',
    name: 'Daily Market Insight',
    shortName: 'Daily Insight',
    description: 'A daily read on session bias, key levels and liquidity draws before the candles print.',
    longDescription:
      "Every trading day, before the London and New York sessions open, you get a written breakdown of what the market is likely to do and why — session bias, the key levels in play, and where the day's liquidity draws are sitting. It's the daily habit of reading price the way the mentorship teaches, done for you as a reference while you build the skill yourself.",
    features: [
      'Written session-bias breakdown delivered daily via Telegram, before London/NY opens',
      'Key levels and liquidity draws flagged before price actually reaches them',
      'Every past day archived, so you can review how the read played out',
    ],
    priceBDT: 1499,
    priceUSD: 15,
  },
  {
    id: 'templates',
    slug: 'setup-templates',
    name: 'Setup Templates (Chart & Journal)',
    shortName: 'Setup Templates',
    description: 'Plug-and-play chart templates plus the Notion trading journal used throughout the course.',
    longDescription:
      "Skip the hour of rebuilding your charts from scratch. This add-on hands you the exact chart templates used for every setup taught across all 5 chapters, plus the same Notion trading journal referenced throughout the course — the one used to track the 30 demo trades required for the Guarantee.",
    features: [
      'Pre-built chart templates for every setup covered in the curriculum',
      'The exact Notion trading journal used throughout the mentorship',
      'Import straight into your charting platform and Notion — no setup from scratch',
    ],
    priceBDT: 999,
    priceUSD: 10,
  },
  {
    id: 'archive',
    slug: 'live-trade-breakdown-archive',
    name: 'Live Trade Breakdown Archive',
    shortName: 'Trade Archive',
    description: 'The full back-catalogue of recorded live trade breakdowns, sorted by setup type.',
    longDescription:
      "Real trades, broken down after the fact — why the setup was taken, where the stop and target sat, and what actually happened. This add-on unlocks the entire back-catalogue of these recorded breakdowns, organized by setup type so you can study one pattern at a time instead of scrolling through everything.",
    features: [
      'The complete archive of past live trade breakdowns, fully recorded',
      'Organized by setup type for focused, one-pattern-at-a-time study',
      'Growing archive — new breakdowns are added as they get recorded',
    ],
    priceBDT: 1399,
    priceUSD: 14,
  },
];

export const tiers = [
  {
    id: 'tier1',
    slug: 'the-retailer-escape',
    key: 'T1',
    name: 'The Retailer Escape',
    shortName: 'Tier 1',
    tagline: 'The complete core system, on your own.',
    longDescription:
      "Tier 1 hands you the complete 5-chapter ICT curriculum and nothing else — no live calls, no add-ons bundled in, no scaffolding. If you're self-directed and just want the full system without the extras, this is the leanest way in.",
    idealFor: [
      'You want the full curriculum and can study independently',
      'You\'re comfortable troubleshooting your own charts between chat replies',
      'You\'d rather buy add-ons individually, only if and when you need them',
    ],
    priceBDT: 2999,
    priceUSD: 25,
    badge: null,
    addonsIncluded: false,
    features: [
      { label: 'Core Recorded ICT Course', included: true },
      { label: 'Basic Chat Support', included: true },
      { label: 'Priority Support + Bi-Weekly Live Q&A', included: false },
      { label: 'All 3 Add-ons', included: false, note: 'Available as a separate purchase' },
      { label: 'Weekly 1-on-1 Consultation', included: false },
    ],
    limitation: null,
    ctaLabel: 'Start With Tier 1',
  },
  {
    id: 'tier2',
    slug: 'smart-money-arsenal',
    key: 'T2',
    name: 'Smart Money Arsenal',
    shortName: 'Tier 2',
    tagline: 'The anchor plan — everything, free, in one bundle.',
    longDescription:
      'Tier 2 is the plan most students land on — the full course plus Priority Support, Bi-Weekly Live Q&A, and all three add-ons bundled in for free. It exists to remove the two things that usually stall a self-taught trader: unanswered questions and missing tools.',
    idealFor: [
      'You want live access to ask questions as you go, not just recorded videos',
      'You\'d rather get all 3 add-ons free than buy them piecemeal later',
      'You\'re fine with a capped batch size in exchange for closer support',
    ],
    priceBDT: 4799,
    priceUSD: 39,
    badge: 'MOST POPULAR',
    addonsIncluded: true,
    features: [
      { label: 'Core Recorded ICT Course', included: true },
      { label: 'Priority Support + Bi-Weekly Live Q&A', included: true },
      { label: 'All 3 Add-ons — FREE', included: true, note: `Worth ৳${ADDONS_VALUE_BDT.toLocaleString('en-US')}` },
      { label: 'Weekly 1-on-1 Consultation', included: false },
    ],
    limitation: 'Max 50 students per batch',
    ctaLabel: 'Get the Anchor Plan',
    splitPayment: {
      installment1USD: 20,
      installment2USD: 24,
      penaltyDays: 30,
    },
  },
  {
    id: 'tier3',
    slug: 'the-inner-circle',
    key: 'T3',
    name: 'The Inner Circle',
    shortName: 'Tier 3 · VIP',
    tagline: 'Personal, 1-on-1, and strictly limited.',
    longDescription:
      'Tier 3 is everything in Tier 2, plus three months of weekly 1-on-1 consultation and a personal portfolio and trade review — genuinely 1-on-1, which is why it\'s capped at 5 students a month. This tier suits traders who want a mentor watching their actual trades, not just answering questions in a group chat.',
    idealFor: [
      'You want a mentor reviewing your real trades and portfolio, not just group Q&A',
      'You can commit to weekly 1-on-1 sessions for 3 months',
      'You\'re applying early — seats are strictly capped at 5 per month',
    ],
    priceBDT: 17999,
    priceUSD: 149,
    badge: 'LIMITED SEATS',
    addonsIncluded: true,
    features: [
      { label: 'Everything in Tier 2', included: true },
      { label: 'Weekly 1-on-1 Consultation (3 months)', included: true },
      { label: 'Personal Portfolio & Trade Review', included: true },
    ],
    limitation: 'Strictly 5 students per month',
    // Joins through the normal checkout flow, exactly like Tier 1 & 2 — no
    // external application form. The only thing that changes month to month
    // is this flag: flip it to `false` the moment this month's 5 seats are
    // full, and the pricing card + checkout automatically switch to a
    // "fully booked, join the waitlist" state. Flip it back to `true` when
    // next month's seats open back up.
    available: true,
    ctaLabel: 'Join the Inner Circle',
  },
];

export const paymentMethods = [
  { id: 'bkash', label: 'Bkash', number: '01XXXXXXXXX', note: 'Use "Send Money" (not "Payment") to this number, then attach your screenshot in Telegram.' },
  { id: 'nagad', label: 'Nagad', number: '01XXXXXXXXX', note: 'Use "Send Money" to this number, then attach your screenshot in Telegram.' },
  { id: 'binance', label: 'Binance UID (USDT)', number: '123456789', note: 'Send via Binance Pay / internal transfer to this UID. USDT only.' },
];

export const formatBDT = (amount) => `\u09F3${Number(amount).toLocaleString('en-US')}`;
export const formatUSD = (amount) => `$${Number(amount).toLocaleString('en-US')}`;
export const bdtFromUSD = (usd) => Math.round(usd * FX_RATE);

export function getTier(id) {
  return tiers.find((t) => t.id === id);
}

export function getTierBySlug(slug) {
  return tiers.find((t) => t.slug === slug);
}

export function getAddonBySlug(slug) {
  return addons.find((a) => a.slug === slug);
}
