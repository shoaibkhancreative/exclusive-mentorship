import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';
import MarketMotif from './MarketMotif';

const reasons = [
  {
    icon: Building2,
    title: 'An Institutional Framework, Not Indicators',
    desc: 'Liquidity, market structure and order flow — the way desks actually read price — instead of a repainted indicator sold as a "signal".',
  },
  {
    icon: Users2,
    title: 'Small Batches, Real Access',
    desc: 'Tier 2 is capped at 50 students a batch. Tier 3 is capped at 5 a month. You get a mentor who knows your name, not a 10,000-member group chat.',
  },
  {
    icon: GraduationCap,
    title: 'Genuinely Built From Zero',
    desc: "Chapter 1 assumes nothing. Chapter 13 ends with your own written trading plan. Nothing in between skips a step.",
  },
  {
    icon: ShieldCheck,
    title: 'Manually Verified, Human-Run',
    desc: 'Every single enrollment is checked by the mentor personally — not an automated funnel approving payments in the dark.',
  },
  {
    icon: HeartHandshake,
    title: 'Accountability, Not Abandonment',
    desc: "Put in the documented work and still not improving? The mentor steps back in personally. Details in the Guarantee section below.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/40 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 opacity-70">
        <MarketMotif className="h-32 w-full sm:h-40" />
      </div>
      <div className="relative mx-auto max-w-[72rem] px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything here exists for one reason: to be different from the last course you tried."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className={`rounded-2xl border border-border bg-card p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <p className="mt-4 font-display font-semibold text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
