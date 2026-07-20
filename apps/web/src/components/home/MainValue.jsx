import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './SectionHeading';

const pillars = [
  {
    title: 'Framework over signals',
    desc: "You're never handed a 'buy here' alert. Every chapter teaches the reasoning behind the entry, so the skill still works on the day the mentor isn't watching.",
  },
  {
    title: 'Risk and psychology, first',
    desc: 'You learn position sizing, drawdown limits, and trade psychology before advanced entries — because the entry was rarely what blew the account.',
  },
  {
    title: 'Proof of work, not promises',
    desc: 'The Notion journal and demo-trade requirement make progress measurable — by you and by the mentor — instead of assumed.',
  },
];

export default function MainValue() {
  return (
    <section className="bg-navy py-20 text-navy-foreground md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div {...fadeUp} className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Our Main Value</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              What we actually believe.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-navy-foreground/60">
              Three principles behind every chapter, every Q&amp;A, and the guarantee itself.
            </p>
          </motion.div>

          <div className="divide-y divide-navy-foreground/10 border-t border-navy-foreground/10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="py-7 first:pt-0"
              >
                <p className="font-display text-xl font-semibold text-navy-foreground sm:text-2xl">{p.title}</p>
                <p className="mt-2.5 max-w-xl leading-relaxed text-navy-foreground/60">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
