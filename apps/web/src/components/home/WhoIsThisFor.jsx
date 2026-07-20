import React from 'react';
import { motion } from 'framer-motion';
import { Compass, RefreshCcw, AlertTriangle, Target } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

const personas = [
  {
    icon: Compass,
    title: 'The Chart-Overwhelmed Beginner',
    desc: "You've watched a hundred random videos and remembered none of it. You need one clear path from zero — not another isolated tip.",
  },
  {
    icon: RefreshCcw,
    title: 'The Indicator-Hopping Trader',
    desc: "You've tried five strategies and three indicator packs this year. Nothing stuck, because none of it was ever a complete system.",
  },
  {
    icon: AlertTriangle,
    title: 'The Undisciplined Risk-Taker',
    desc: 'You know a few ICT terms already, but you trade without a real risk plan — so one bad week wipes out three good ones.',
  },
  {
    icon: Target,
    title: 'The Funded-Account Hopeful',
    desc: 'You want to pass a prop firm challenge and keep the account — that takes a repeatable process, not a lucky streak.',
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading
          eyebrow="Who Is This For"
          title="Built for four kinds of traders. Sound like you?"
          subtitle="Recognize yourself below? The curriculum was built for exactly your starting point."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
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
