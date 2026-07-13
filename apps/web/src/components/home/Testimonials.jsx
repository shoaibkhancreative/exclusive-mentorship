import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

// ---------------------------------------------------------------------------
// TODO (before launch): every review below is placeholder copy, not a real
// student quote. Replace with genuine, verifiable student testimonials before
// this section goes live — publishing fabricated reviews as real is both
// misleading to buyers and a consumer-protection risk in most jurisdictions.
// ---------------------------------------------------------------------------
const reviews = [
  {
    name: '[Student Name]',
    location: 'Dhaka',
    tier: 'Tier 2 Student',
    rating: 5,
    quote:
      "[Placeholder] The chapter on liquidity finally explained why my stop-losses kept getting hit right before price reversed.",
  },
  {
    name: '[Student Name]',
    location: 'Chattogram',
    tier: 'Tier 1 Student',
    rating: 5,
    quote:
      '[Placeholder] I had tried three other Bangla-language courses before this one. This is the first time the curriculum actually built on itself chapter to chapter.',
  },
  {
    name: '[Student Name]',
    location: 'Sylhet',
    tier: 'Tier 3 · Inner Circle',
    rating: 5,
    quote:
      "[Placeholder] The weekly 1-on-1 review is what changed things for me — someone actually looking at my journal and telling me what to fix.",
  },
  {
    name: '[Student Name]',
    location: 'Khulna',
    tier: 'Tier 2 Student',
    rating: 4,
    quote:
      '[Placeholder] The Live Q&A add-on alone was worth it. Seeing setups reviewed live made the theory finally click.',
  },
  {
    name: '[Student Name]',
    location: 'Rajshahi',
    tier: 'Tier 2 Student',
    rating: 5,
    quote:
      '[Placeholder] Support actually replies. I was verified and added to the course within a few hours of sending my payment proof.',
  },
  {
    name: '[Student Name]',
    location: 'Dhaka',
    tier: 'Tier 1 Student',
    rating: 5,
    quote:
      '[Placeholder] The risk management chapter should honestly come before anyone is allowed to open a live account.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[80rem] px-6">
        <SectionHeading
          eyebrow="User Ratings & Reviews"
          title="What students say after going through the chapters."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={`${r.name}-${i}`}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className={s < r.rating ? 'fill-gold text-gold' : 'fill-none text-border'}
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{r.quote}&rdquo;</p>
              <div className="mt-5 flex items-center justify-between border-t border-dashed border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
                  {r.tier}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Individual results and experiences vary and are not guaranteed. See our Disclaimer for details.
        </p>
      </div>
    </section>
  );
}
