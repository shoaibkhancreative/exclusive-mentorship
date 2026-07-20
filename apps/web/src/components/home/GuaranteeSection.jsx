import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, NotebookPen, LineChart } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

const requirements = [
  {
    icon: FileCheck2,
    title: 'Finish 100% of the course videos',
    desc: 'Every class, in every chapter — no skipping ahead to "the good parts".',
  },
  {
    icon: NotebookPen,
    title: 'Keep the Notion trading journal',
    desc: 'The provided journal template, maintained consistently, not filled in after the fact.',
  },
  {
    icon: LineChart,
    title: 'Execute 30 trades on a demo account',
    desc: 'Real, logged practice applying the framework — demo performance is a learning signal, not a live-results guarantee.',
  },
];

export default function GuaranteeSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-[64rem] px-6">
        <SectionHeading
          eyebrow="Guarantee"
          title="The ICT Mastery Accountability Protocol"
          subtitle="This isn't a money-back guarantee. It's a personal commitment — do the documented work, and if you're still not improving, the mentor gets personally involved."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {requirements.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <p className="mt-4 font-display text-sm font-semibold text-foreground">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="relative mt-6 flex flex-col gap-5 rounded-2xl border-2 border-brand bg-navy p-8 text-navy-foreground shadow-softLg sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
            <ShieldCheck size={22} strokeWidth={2.2} />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">Meet all three, and still not seeing it click?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/65">
              The Mentorship Team personally monitors your live trading for a full week and runs a free 1-on-1 Live
              Breakdown Session to find exactly what's going wrong — not a refund form, a real intervention.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
