// ---------------------------------------------------------------------------
// STUDENT REVIEWS & RATING — pulled into its own data file (same pattern as
// chapters.js / pricing.js) so reviews can be added, edited, or removed in
// one place without touching the Testimonials component itself.
//
// STILL PLACEHOLDER: the score, count, breakdown and all 6 reviews below are
// sample content, not real students — carried over as-is from the original
// build. None of this should be published as genuine social proof; inventing
// student names, quotes, or ratings and presenting them as real is misleading
// to prospective buyers and is against most payment/marketplace platforms'
// policies on testimonials. Swap in real, verifiable reviews as you collect
// them (e.g. from the Telegram group used for enrollment) — everything below
// is a plain array, so the carousel, the "N students" count, and the star
// breakdown all update automatically with however many real entries you add.
// ---------------------------------------------------------------------------

export const rating = { score: '4.9', count: 47 };

export const ratingBreakdown = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

export const reviews = [
  {
    name: 'Rakib Hasan',
    location: 'Dhaka',
    quote:
      'The way market structure and liquidity are explained finally made sense after months of random YouTube videos. Chapter by chapter, it just clicks.',
  },
  {
    name: 'Nusrat Jahan',
    location: 'Chattogram',
    quote:
      "What stood out was how personally the mentor responds in Q&A — it never feels like a pre-recorded course, it feels like actual mentorship.",
  },
  {
    name: 'Shakil Ahmed',
    location: 'Sylhet',
    quote:
      'I started completely at zero. By Chapter 6 I was reading charts I used to just stare at confused. Slow and steady, but it works.',
  },
  {
    name: 'Farhana Akter',
    location: 'Rajshahi',
    quote:
      'The risk management chapter alone was worth it. I stopped revenge trading after one blown demo account and actually started following a plan.',
  },
  {
    name: 'Imran Kabir',
    location: 'Khulna',
    quote:
      'Tier 2 support is the reason I stuck with it. Asking a question and getting a real answer within a day kept me from quitting in week two.',
  },
  {
    name: 'Mahin Rahman',
    location: 'Barishal',
    quote:
      "Passed my first prop firm challenge using exactly what's taught in Chapter 13. Didn't expect that chapter to matter this much until it did.",
  },
];
