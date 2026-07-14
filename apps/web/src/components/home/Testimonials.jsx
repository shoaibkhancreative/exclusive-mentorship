import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

// ---------------------------------------------------------------------------
// SAMPLE CONTENT — every name, location and quote below is placeholder text,
// written only so this section isn't empty. None of these are real
// students. Replace with genuine, verifiable reviews before this goes
// live — publishing invented reviews as if they were real would be
// misleading to buyers.
// ---------------------------------------------------------------------------
const SAMPLE_RATING = { score: '4.9', count: 47 };

const sampleReviews = [
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
];

export default function Testimonials() {
  return (
    <section className="bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading
          eyebrow="Student Reviews"
          title="What students say after going through it."
          subtitle="Every review here will be a real, verifiable student — checked the same way every enrollment is: personally, by the mentor."
        />

        <motion.div {...fadeUp} className="mt-10 flex items-center justify-center gap-2">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={16} className="fill-gold" />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{SAMPLE_RATING.score} / 5</span>
          <span className="text-sm text-muted-foreground">from {SAMPLE_RATING.count} early students</span>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {sampleReviews.map(({ name, location, quote }, i) => (
            <motion.div
              key={name}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <Quote className="text-brand/30" size={26} strokeWidth={1.75} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{quote}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
