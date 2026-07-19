import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Seo from '@/components/site/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { pick } from '@/i18n/LanguageContext';
import { faqCategories } from '@/i18n/content/faq';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const pageCopy = {
  subtitle:
    'Answers on Tier, Add-on, Payment, and Guarantee questions, organized by topic \u2014 so you can find yours quickly.',
  moreQuestions: 'Still have a question?',
  moreQuestionsBody:
    'Message our Team directly on Telegram, or check the Legal pages below for the full Terms, Privacy, and Disclaimer details.',
  messageOnTelegram: 'Message us on Telegram',
};

export default function FAQPage() {
  const categories = pick(faqCategories);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo
        title="FAQ"
        description="Answers on tiers, add-ons, payment, the guarantee, and enrollment — everything you need before joining."
      />
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Every question, answered.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{pageCopy.subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {categories.map((group, gi) => (
            <motion.div key={group.category} {...fadeUp} className={gi > 0 ? 'mt-12' : ''}>
              <h2 className="font-display text-lg font-bold text-foreground">{group.category}</h2>
              <Accordion type="single" collapsible className="mt-4 space-y-3">
                {group.items.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`${group.category}-${i}`}
                    className="rounded-xl border border-border bg-card px-5 shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-center text-navy-foreground">
            <p className="font-display text-lg font-semibold">{pageCopy.moreQuestions}</p>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-navy-foreground/60">{pageCopy.moreQuestionsBody}</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href="https://t.me/exclusive_mentorship_bot"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand hover:underline"
              >
                {pageCopy.messageOnTelegram}
              </a>
              <Link to="/terms" className="font-medium text-navy-foreground/70 hover:text-navy-foreground">
                Terms &amp; Conditions
              </Link>
              <Link to="/disclaimer" className="font-medium text-navy-foreground/70 hover:text-navy-foreground">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
