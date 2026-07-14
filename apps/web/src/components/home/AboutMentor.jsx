import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, BookOpenCheck } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';
import ContentPlaceholder from '@/components/site/ContentPlaceholder';

// ---------------------------------------------------------------------------
// TODO (before launch): swap the photo placeholder and the ContentPlaceholder
// block below for the real mentor's photo, name, credentials and story, and
// fill in the two blank stats. Nothing in this section is real content yet —
// it's intentionally styled as an obvious "add your details" state (rather
// than plausible-looking bracket text) so it never gets mistaken for a
// finished bio if it ships before that content is ready.
// ---------------------------------------------------------------------------
const stats = [
  { label: 'Years Trading', value: null },
  { label: 'Students Mentored', value: null },
  { icon: BookOpenCheck, label: 'Chapters Authored', value: '13' },
];

export default function AboutMentor() {
  return (
    <section id="mentor" className="py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading eyebrow="About Your Mentor" title="Taught by a trader, not a marketing team." />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.85fr,1.15fr]">
          <motion.div {...fadeUp} className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-dashed border-navy-foreground/15 bg-gradient-to-br from-navy via-navy to-brand/30 shadow-softLg">
              <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_70%_20%,hsl(var(--brand)/0.6),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground/70 ring-1 ring-navy-foreground/20">
                  <UserRound size={44} strokeWidth={1.5} />
                </span>
              </div>
              <p className="absolute bottom-5 left-0 right-0 text-center text-xs font-medium uppercase tracking-wide text-navy-foreground/50">
                Add mentor photo
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
            <ContentPlaceholder
              align="left"
              title="Add the mentor's name, credentials & story here"
              description="Two or three honest sentences on how the mentor started trading, the turning point behind learning Smart Money / ICT concepts properly, and why this mentorship exists — in the mentor's own voice. Specific and real converts; a generic bio doesn't."
            />
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  {Icon ? (
                    <Icon size={18} className="text-brand" strokeWidth={2.2} />
                  ) : (
                    <span className="block h-[18px] w-[18px] rounded-full border border-dashed border-muted-foreground/40" />
                  )}
                  {value ? (
                    <p className="mt-2 font-display text-xl font-bold text-foreground">{value}</p>
                  ) : (
                    <p className="mt-2 font-display text-xl font-bold text-muted-foreground/35">—</p>
                  )}
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
