import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

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

// A numbered, editorial list rather than a grid of identical cards — the
// large muted numerals and generous rhythm are the section's own visual
// signature instead of a decorative graphic.
export default function WhyChooseUs() {
  return (
    <section className="bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-[64rem] px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything here exists for one reason: to be different from the last course you tried."
        />
        <div className="mt-14 border-y border-border/70 divide-y divide-border/70">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="group grid gap-2 py-8 sm:grid-cols-[3.5rem,1fr] sm:gap-8 sm:py-9"
            >
              <span className="font-display text-3xl font-bold text-brand/20 transition-colors duration-300 group-hover:text-brand/45 sm:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="flex items-center gap-2.5 font-display text-lg font-semibold text-foreground sm:text-xl">
                  <Icon size={19} className="shrink-0 text-brand" strokeWidth={2.2} />
                  {title}
                </p>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
