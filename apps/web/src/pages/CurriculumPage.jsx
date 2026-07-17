import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CtaButton from '@/components/site/CtaButton';
import { chapters, totalClasses } from '@/data/chapters';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[72rem] px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">The Full Curriculum</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {chapters.length} chapters. {totalClasses}+ classes. Every class, in full.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            The complete syllabus, chapter by chapter, with every class description in one place — so you know
            exactly what you're getting before you enroll. Every tier includes the entire curriculum below.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <CtaButton to="/checkout" size="md">
              Join the Mentorship <ArrowRight size={16} />
            </CtaButton>
            <CtaButton to="/compare-tiers" variant="outline" size="md">
              Compare Tiers &amp; Pricing
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[72rem] px-6">
          <div className="space-y-3.5">
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
                      <ul className="grid gap-4 sm:grid-cols-2">
                        {chapter.classes.map((cls) => (
                          <li key={cls.title} className="flex gap-3 text-sm">
                            <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                            <div>
                              <p className="font-medium text-foreground">{cls.title}</p>
                              <p className="mt-1 leading-relaxed text-muted-foreground">{cls.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/chapter/${chapter.slug}`}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                      >
                        View this chapter's page <ArrowRight size={14} />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-navy-foreground">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold">All {chapters.length} chapters, every tier.</p>
                <p className="mt-1 text-sm text-navy-foreground/60">
                  Every tier includes the complete curriculum above — what changes is the support around it.
                </p>
              </div>
              <Link
                to="/checkout"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Enroll Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
