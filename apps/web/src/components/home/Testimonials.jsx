import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';
import ContentPlaceholder from '@/components/site/ContentPlaceholder';

// ---------------------------------------------------------------------------
// TODO (before launch): this section intentionally ships with ZERO reviews
// rather than fabricated ones. The previous version used placeholder quotes
// like "[Student Name]" / "[Placeholder]" — publishing those as real would be
// misleading to buyers and a consumer-protection risk in most jurisdictions.
// Once genuine, verifiable student reviews exist, replace the
// <ContentPlaceholder> below with a card grid (see git history for the
// original 3-column layout) — keep the same section background (bg-tint) so
// the page's light/tint/dark rhythm still alternates correctly.
// ---------------------------------------------------------------------------
export default function Testimonials() {
  return (
    <section className="bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Student Reviews"
          title="We'd rather show nothing than something fake."
          subtitle="Every review that appears here will be a real, verifiable student — checked the same way every enrollment is: personally, by the mentor."
        />
        <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="mt-10">
          <ContentPlaceholder
            title="First verified reviews land after the current cohort graduates"
            description="Once students complete chapters and log real progress, their reviews replace this note — with names, batch tier, and results exactly as submitted. No stock quotes, no stock photos."
          />
          <div className="mt-6 flex items-center justify-center gap-1.5 text-muted-foreground/40">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={16} className="fill-none" />
            ))}
            <span className="ml-2 text-xs font-medium">No rating to show yet</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
