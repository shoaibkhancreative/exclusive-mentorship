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
    name: 'Daily Market Insight',
    description: 'A daily read on session bias, key levels and liquidity draws before the candles print.',
    priceBDT: 1499,
    priceUSD: 15,
  },
  {
    id: 'templates',
    name: 'Setup Templates (Chart & Journal)',
    description: 'Plug-and-play chart templates plus the Notion trading journal used throughout the course.',
    priceBDT: 999,
    priceUSD: 10,
  },
  {
    id: 'archive',
    name: 'Live Trade Breakdown Archive',
    description: 'The full back-catalogue of recorded live trade breakdowns, sorted by setup type.',
    priceBDT: 1399,
    priceUSD: 14,
  },
];

export const tiers = [
  {
    id: 'tier1',
    key: 'T1',
    name: 'The Retailer Escape',
    shortName: 'Tier 1',
    tagline: 'The complete core system, on your own.',
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
    key: 'T2',
    name: 'Smart Money Arsenal',
    shortName: 'Tier 2',
    tagline: 'The anchor plan — everything, free, in one bundle.',
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
    key: 'T3',
    name: 'The Inner Circle',
    shortName: 'Tier 3 · VIP',
    tagline: 'Personal, 1-on-1, and strictly limited.',
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
