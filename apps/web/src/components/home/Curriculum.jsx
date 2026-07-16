import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { chapters, totalClasses } from '@/data/chapters';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading, { fadeUp } from './SectionHeading';
import CtaButton from '@/components/site/CtaButton';

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 md:py-24">
      <div className="mx-auto max-w-[72rem] px-6">
        <SectionHeading
          eyebrow="The Curriculum"
          title={`${chapters.length} chapters. ${totalClasses}+ classes. One complete trading education.`}
          subtitle="Every chapter builds on the last, from market basics to your own written trading plan. Tap a chapter to preview what's inside."
        />

        <div className="mt-14 space-y-3.5">
          {chapters.map((chapter) => (
            <motion.div key={chapter.id} {...fadeUp}>
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`chapter-${chapter.id}`}
                  className="overflow-hidden rounded-2xl border border-border bg-card px-0 shadow-soft"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline data-[state=open]:bg-tint/60">
                    <div className="flex flex-1 items-center gap-4 text-left">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xs font-bold text-accent-foreground">
                        {String(chapter.id).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="font-display font-semibold text-foreground">{chapter.title}</p>
                        <p className="text-sm italic text-muted-foreground">{chapter.tagline}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{chapter.overview}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {chapter.classes.map((cls) => (
                        <li key={cls.title} className="flex gap-3 text-sm">
                          <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                          <div>
                            <p className="font-medium text-foreground">{cls.title}</p>
                            <p className="text-xs italic text-brand/80">{cls.tagline}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            View Full Curriculum Page <ArrowRight size={14} />
          </Link>
          <CtaButton href="#offer" variant="outline" size="sm">
            See the Tiers &amp; Pricing <ArrowRight size={15} />
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
