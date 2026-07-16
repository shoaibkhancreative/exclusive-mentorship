import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, BookOpenCheck, TrendingUp, Users } from 'lucide-react';
import SectionHeading, { fadeUp } from './SectionHeading';

// ---------------------------------------------------------------------------
// SAMPLE CONTENT — everything below (name, credential line, bio paragraph,
// "Years Trading" and "Students Mentored" figures) is placeholder text
// written only so this section isn't empty. Swap in the mentor's real name,
// photo, story and actual figures before this goes live. "Chapters
// Authored" is left as the one real, verifiable number (5, from the
// curriculum itself).
// ---------------------------------------------------------------------------
const MENTOR_NAME = 'Tanvir Ahmed';
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
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground/70 ring-1 ring-navy-foreground/20">
                  <UserRound size={44} strokeWidth={1.5} />
                </span>
              </div>
              {/* SAMPLE — swap this box for the mentor's real photo. */}
              <p className="absolute bottom-5 left-0 right-0 text-center text-xs font-medium uppercase tracking-wide text-navy-foreground/45">
                Add mentor photo
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
            <p className="font-display text-xl font-bold text-foreground">{MENTOR_NAME}</p>
            <p className="mt-1 text-sm font-semibold text-brand">{MENTOR_CREDENTIAL}</p>
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
