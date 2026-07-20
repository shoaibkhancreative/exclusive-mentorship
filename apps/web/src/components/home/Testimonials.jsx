import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { rating, ratingBreakdown, reviews } from '@/data/testimonials';

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

function ReviewStars({ stars }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < stars ? 'fill-gold text-gold' : 'fill-transparent text-border'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ name, location, quote, stars }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <Quote className="text-brand/30" size={26} strokeWidth={1.75} />
        <ReviewStars stars={stars} />
      </div>
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
  const hasReviews = reviews.length > 0;

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
          title={hasReviews ? 'What students say after finishing the course.' : 'Reviews are just getting started.'}
          subtitle={
            hasReviews
              ? 'Every review here is a real, verified student — checked the same way every enrollment is: personally, by the mentor.'
              : "We only publish real, verified students — checked personally by the mentor. So instead of faking reviews, we're just saying: none yet."
          }
        />

        {!hasReviews ? (
          <motion.div
            {...fadeUp}
            className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-8 py-12 text-center shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Star size={20} strokeWidth={1.75} />
            </span>
            <p className="font-display text-lg font-semibold text-foreground">First reviews are on their way.</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Enroll now, and yours could be one of the first featured here — every review is personally verified by
              the mentor before it's published.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Rating showcase — replaces the old single-line rating with a proper, effective summary card */}
            <motion.div
              {...fadeUp}
              className="mx-auto mt-12 grid max-w-3xl gap-8 rounded-2xl border border-border bg-card p-7 shadow-soft sm:grid-cols-[auto,1fr] sm:gap-10 sm:p-8"
            >
              <div className="flex flex-col items-center justify-center border-b border-border pb-6 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
                <p className="font-display text-5xl font-bold tracking-tight text-foreground">{rating.score}</p>
                <div className="mt-2 flex text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="fill-gold" />
                  ))}
                </div>
                <p className="mt-2 whitespace-nowrap text-xs text-muted-foreground">from {rating.count} early students</p>
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
                    {reviews.map((review) => (
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
                  {reviews.map((review, i) => (
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
          </>
        )}
      </div>
    </section>
  );
}