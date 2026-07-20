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
// STILL PLACEHOLDER, NOW EMPTIED: this used to carry 6 sample reviews that
// were never real students — invented names, quotes, and ratings presented
// as genuine social proof. That's misleading to prospective buyers and
// against most payment/marketplace platforms' policies on testimonials, so
// the array ships empty rather than live with fabricated content. Add real,
// verifiable reviews here as you collect them (e.g. from the Telegram group
// used for enrollment) — the carousel, star rows, "N students" count, and
// the score/breakdown all pick them up automatically, no other file needs
// to change. Testimonials.jsx shows an honest "reviews coming soon" state
// for as long as this stays empty.
export const reviews = [];

// --- Everything below is DERIVED from `reviews` above. Don't hand-edit. ---

export const rating = {
  score: reviews.length ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1) : null,
  count: reviews.length,
};

export const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => {
  const count = reviews.filter((r) => r.stars === stars).length;
  return {
    stars,
    pct: reviews.length ? Math.round((count / reviews.length) * 100) : 0,
  };
});