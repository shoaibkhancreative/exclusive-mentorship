import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

// ---------------------------------------------------------------------------
// SAMPLE CONTENT — every name, location, quote, and the rating/breakdown
// numbers below are placeholder, written only so this section isn't empty.
// None of these are real students. Replace with genuine, verifiable reviews
// (and the real rating distribution) before this goes live — publishing
// invented reviews or numbers as if they were real would be misleading to
// buyers. The breakdown below is just 4.9/5 expressed as a distribution.
// ---------------------------------------------------------------------------
const SAMPLE_RATING = { score: '4.9', count: 47 };

const ratingBreakdown = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 9 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

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

function RatingBreakdownBar({ stars, pct }) {
  return (
    <div className="flex items-center gap-2.5 text-xs">
      <span className="flex w-8 shrink-0 items-center gap-1 font-medium text-muted-foreground">
        {stars} <Star size={11} className="fill-current" />
      </span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-gold" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-8 shrink-0 text-right text-muted-foreground">{pct}%</span>
    </div>
  );
}

function ReviewCard({ name, location, quote }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <Quote className="text-brand/30" size={26} strokeWidth={1.75} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{quote}</p>
      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
          {name.split(' ').map((n) => n[0]).join('')}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [api, setApi] = React.useState(null);
  const [selected, setSelected] = React.useState(0);
  const pausedRef = React.useRef(false);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => api.off('select', onSelect);
  }, [api]);

  // Gentle auto-advance — pauses while the pointer is over the carousel so
  // reading a longer quote never gets interrupted mid-sentence.
  React.useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      api.canScrollNext() ? api.scrollNext() : api.scrollTo(0);
    }, 4500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading
          eyebrow="Student Reviews"
          title="What students say after going through it."
          subtitle="Every review here will be a real, verifiable student — checked the same way every enrollment is: personally, by the mentor."
        />

        {/* Rating showcase — replaces the old single-line rating with a proper, effective summary card */}
        <motion.div
          {...fadeUp}
          className="mx-auto mt-12 grid max-w-3xl gap-8 rounded-2xl border border-border bg-card p-7 shadow-soft sm:grid-cols-[auto,1fr] sm:gap-10 sm:p-8"
        >
          <div className="flex flex-col items-center justify-center border-b border-border pb-6 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
            <p className="font-display text-5xl font-bold tracking-tight text-foreground">{SAMPLE_RATING.score}</p>
            <div className="mt-2 flex text-gold">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} className="fill-gold" />
              ))}
            </div>
            <p className="mt-2 whitespace-nowrap text-xs text-muted-foreground">from {SAMPLE_RATING.count} early students</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {ratingBreakdown.map((row) => (
              <RatingBreakdownBar key={row.stars} {...row} />
            ))}
          </div>
        </motion.div>

        {/* Sliding review carousel */}
        <motion.div {...fadeUp} className="relative mt-10">
          <div
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
          >
            <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }}>
              <CarouselContent>
                {sampleReviews.map((review) => (
                  <CarouselItem key={review.name} className="basis-[86%] sm:basis-1/2 lg:basis-1/3">
                    <ReviewCard {...review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous review"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex items-center gap-1.5">
              {sampleReviews.map((review, i) => (
                <button
                  key={review.name}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    selected === i ? 'w-5 bg-brand' : 'w-1.5 bg-border hover:bg-muted-foreground/40'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next review"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
