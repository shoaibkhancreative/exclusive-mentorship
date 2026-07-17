import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, TrendingUp, Users } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

// ---------------------------------------------------------------------------
// SAMPLE CONTENT — the bio paragraph, "Years Trading" and "Students Mentored"
// figures below are placeholder text written only so this section isn't
// empty. Swap in the real story and actual figures before this goes live.
// "Chapters Authored" is left as the one real, verifiable number (5, from
// the curriculum itself). The name/brand (NLT — Next Level Trader) is real.
// ---------------------------------------------------------------------------
const MENTOR_NAME = 'NLT';
const MENTOR_FULL_NAME = 'Next Level Trader';
const MENTOR_CREDENTIAL = 'Independent Trader · Smart Money & ICT Concepts';
const MENTOR_BIO =
  "I spent my first two years jumping between indicators and \u2018free signal\u2019 channels, blowing three accounts before anything clicked. Learning to read the market the way institutional desks actually operate changed that \u2014 this mentorship is the structured path I wish had existed when I was starting out.";

const stats = [
  { icon: TrendingUp, label: 'Years Trading', value: '7+' },
  { icon: Users, label: 'Students Mentored', value: '500+' },
  { icon: BookOpenCheck, label: 'Chapters Authored', value: '5' },
];

export default function AboutMentor() {
  return (
    <section id="mentor" className="py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading eyebrow="About Your Mentor" title="Taught by a trader, not a marketing team." />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.85fr,1.15fr]">
          <motion.div {...fadeUp} className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-brand/30 shadow-softLg">
              <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_20%,hsl(var(--brand)/0.6),transparent_60%)]" />
              <TrendingUp size={230} strokeWidth={1} className="pointer-events-none absolute -bottom-12 -right-12 text-navy-foreground/[0.07]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="font-display text-7xl font-black leading-none tracking-tight text-navy-foreground sm:text-8xl">
                  NLT
                </span>
                <span className="h-px w-16 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-navy-foreground/60">
                  Next Level Trader
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
            <p className="font-display text-2xl font-black tracking-tight text-foreground">{MENTOR_NAME}</p>
            <p className="text-sm font-medium text-muted-foreground">{MENTOR_FULL_NAME}</p>
            <p className="mt-2 text-sm font-semibold text-brand">{MENTOR_CREDENTIAL}</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{MENTOR_BIO}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <Icon size={18} className="text-brand" strokeWidth={2.2} />
                  <p className="mt-2 font-display text-xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
