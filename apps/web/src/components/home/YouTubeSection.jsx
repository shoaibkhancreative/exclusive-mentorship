import React from 'react';
import { Youtube, PlayCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from './SectionHeading';

const YOUTUBE_URL = 'https://www.youtube.com/@WeAreNLT';

export default function YouTubeSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl border-2 border-brand bg-navy px-8 py-12 text-navy-foreground shadow-softLg sm:px-12 sm:py-14"
        >
          {/* decorative glow + watermark, matching the mentor card / CTA banner treatment elsewhere on the site */}
          <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_85%_15%,hsl(var(--brand)/0.55),transparent_55%)]" />
          <PlayCircle size={260} strokeWidth={1} className="pointer-events-none absolute -bottom-16 -right-10 text-navy-foreground/[0.06]" />

          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-foreground/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-navy-foreground/80 ring-1 ring-navy-foreground/15">
                <Youtube size={14} className="text-[#FF0000]" strokeWidth={2.2} /> Free Content
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Not ready to enroll? Start free on YouTube.
              </h2>
              <p className="mt-3 leading-relaxed text-navy-foreground/65">
                Real trading lessons from NLT, posted regularly — no sign-up required. See how the teaching actually
                works before you commit to a tier.
              </p>
            </div>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-brand px-7 py-4 text-base font-bold text-brand-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <Youtube size={20} />
              Watch Free on YouTube
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
