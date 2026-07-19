import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, TrendingUp, Users } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

// ---------------------------------------------------------------------------
// MENTOR BIO & STATS — confirmed details: trading since 2019, first
// consistently profitable by the end of 2023, 120+ students mentored so far.
// "Chapters Authored" (5) is sourced directly from the curriculum itself.
// The name/brand (NLT — Next Level Trader) is real.
// ---------------------------------------------------------------------------
const MENTOR_NAME = 'NLT';
const MENTOR_FULL_NAME = 'Next Level Trader';
const MENTOR_CREDENTIAL = 'Independent Trader · Smart Money & ICT Concepts';
const MENTOR_BIO =
  "I opened my first trading account in 2019 with more confidence than a plan \u2014 jumping between indicators and \u2018free signal\u2019 channels, and blowing through three accounts before anything actually clicked. It took real time to unlearn the bad habits and rebuild my process around how institutional desks actually read the market. That discipline finally paid off by the end of 2023, when it turned into consistent, repeatable profitability \u2014 not a lucky streak, but a system I could trust and repeat. Since then, I\u2019ve mentored 120+ students through that same process. This mentorship is the structured path I wish had existed back in 2019.";

const stats = [
  { icon: TrendingUp, label: 'Years Trading', value: '7+' },
  { icon: Users, label: 'Students Mentored', value: '120+' },
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
