// ---------------------------------------------------------------------------
// STUDENT REVIEWS & RATING — pulled into its own data file (same pattern as
// chapters.js / pricing.js) so reviews can be added, edited, or removed in
// one place without touching the Testimonials component itself.
//
// Each review now carries its own `stars` (1-5). The aggregate `rating`
// (score + count) and the `ratingBreakdown` bars below are NOT hand-entered
// — they're calculated from the `stars` on every review in the array. Add,
// remove, or edit a review's stars and the average score, the student count,
// and every breakdown bar update on their own everywhere they're used
// (the rating card AND the individual star row on each review card), so
// there's no separate number that can drift out of sync with what's shown.
//
// STILL PLACEHOLDER: all 6 reviews below are sample content, not real
// students — carried over as-is from the original build. None of this
// should be published as genuine social proof; inventing student names,
// quotes, or ratings and presenting them as real is misleading to
// prospective buyers and is against most payment/marketplace platforms'
// policies on testimonials. Swap in real, verifiable reviews as you collect
// them (e.g. from the Telegram group used for enrollment) — everything below
// is a plain array, so the carousel, the star row on each card, the "N
// students" count, and the score/breakdown all update automatically with
// however many real entries you add.
// ---------------------------------------------------------------------------

export const reviews = [
  {
    name: 'Rakib Hasan',
    location: 'Dhaka',
    stars: 5,
    quote:
      'The way market structure and liquidity are explained finally made sense after months of random YouTube videos. Chapter by chapter, it just clicks.',
  },
  {
    name: 'Nusrat Jahan',
    location: 'Chattogram',
    stars: 5,
    quote:
      "What stood out was how personally the mentor responds in Q&A — it never feels like a pre-recorded course, it feels like actual mentorship.",
  },
  {
    name: 'Shakil Ahmed',
    location: 'Sylhet',
    stars: 4,
    quote:
      'I started completely at zero. By Chapter 6 I was reading charts I used to just stare at confused. Slow and steady, but it works.',
  },
  {
    name: 'Farhana Akter',
    location: 'Rajshahi',
    stars: 5,
    quote:
      'The risk management chapter alone was worth it. I stopped revenge trading after one blown demo account and actually started following a plan.',
  },
  {
    name: 'Imran Kabir',
    location: 'Khulna',
    stars: 5,
    quote:
      'Tier 2 support is the reason I stuck with it. Asking a question and getting a real answer within a day kept me from quitting in week two.',
  },
  {
    name: 'Mahin Rahman',
    location: 'Barishal',
    stars: 5,
    quote:
      "Passed my first prop firm challenge using exactly what's taught in Chapter 13. Didn't expect that chapter to matter this much until it did.",
  },
  {
    name: 'Sabuj Faysalo',
    location: 'Noakhali',
    stars: 1,
    quote:
      "Pgsmlkjtonbljf afhuiaghja vfuyaeiogv fuyeag",
  },
];

// --- Everything below is DERIVED from `reviews` above. Don't hand-edit. ---

export const rating = {
  score: (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1),
  count: reviews.length,
};

export const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => {
  const count = reviews.filter((r) => r.stars === stars).length;
  return {
    stars,
    pct: reviews.length ? Math.round((count / reviews.length) * 100) : 0,
  };
});