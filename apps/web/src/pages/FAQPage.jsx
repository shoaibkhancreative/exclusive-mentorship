import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const faqCategories = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'Do I need any trading experience to start?',
        a: 'None at all. Chapter 1 assumes zero background and takes you step by step to an institutional-level vocabulary before anything advanced begins.',
      },
      {
        q: "What's the actual difference between the three tiers?",
        a: 'All three tiers include the complete 5-chapter course. Tier 1 is the course on its own. Tier 2 adds Priority Support, Bi-Weekly Live Q&A, and all 3 add-ons free. Tier 3 adds three months of weekly 1-on-1 consultation and a personal portfolio/trade review on top of everything in Tier 2.',
      },
      {
        q: 'Do I need to sign up or create an account?',
        a: 'No. There is no separate login. Enrollment, verification, and delivery of your course access all happen through Telegram.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    items: [
      {
        q: 'How do I pay, and is it safe?',
        a: 'Bkash, Nagad, and Binance UID (USDT) are all accepted. After paying, you send your screenshot as proof directly through the Telegram bot, and the team personally verifies every single payment before granting access.',
      },
      {
        q: 'How does the Tier 2 split payment work?',
        a: "Pay the first installment to unlock Part 1 of the video modules. Pay the second installment within 30 days to unlock Part 2, all 3 add-ons, and Live Q&A access. Splitting costs slightly more in total than paying once. If the second installment isn't paid within that window, Part 1 access is paused until it is.",
      },
      {
        q: 'Can I buy an add-on without enrolling in a tier?',
        a: "Yes. Each add-on can be purchased on its own from its add-on page, independent of any tier — though it comes free automatically if you're on Tier 2 or Tier 3.",
      },
    ],
  },
  {
    category: 'Tiers & Add-ons',
    items: [
      {
        q: 'Are the add-ons really free with Tier 2 and Tier 3?',
        a: 'Yes — all 3 add-ons, worth ৳3,897 combined, are included at no extra cost with Tier 2 and Tier 3. On Tier 1, or on their own, each add-on is purchased individually.',
      },
      {
        q: "What's actually in each add-on?",
        a: 'Daily Market Insight is a daily written session-bias read; Setup Templates gives you the course chart templates and trading journal; the Live Trade Breakdown Archive is the full back-catalogue of recorded trade breakdowns. Each add-on page has the full breakdown.',
      },
      {
        q: 'How do I get into the Tier 3 Inner Circle?',
        a: "Tier 3 goes through the same checkout flow as the other tiers, but seats are strictly capped at 5 students a month to keep it genuinely 1-on-1. If the current month is full, the tier shows as full on the site until the next batch opens.",
      },
    ],
  },
  {
    category: 'Guarantee & Refunds',
    items: [
      {
        q: 'Is there a refund policy?',
        a: "All enrollments are final sale. In place of a cash refund, every tier is backed by the ICT Mastery Accountability Protocol — complete the course, keep the journal, and log 30 demo trades, and the mentor personally steps in if it still isn't clicking.",
      },
      {
        q: 'What is the ICT Mastery Accountability Protocol, exactly?',
        a: "Finish 100% of the course videos, keep the provided trading journal consistently, and execute 30 trades on a demo account. Meet all three and still not seeing it click? The team personally monitors your live trading for a full week and runs a free 1-on-1 Live Breakdown Session to diagnose what's going wrong.",
      },
    ],
  },
  {
    category: 'Enrollment & Access',
    items: [
      {
        q: 'What actually happens after I click "Confirm & Proceed"?',
        a: "You're taken to the Telegram bot with your package pre-loaded. It confirms your order and the exact amount due, you send payment and attach your screenshot, and access is granted manually once it's verified — usually within a few hours.",
      },
      {
        q: 'How long do I have access to the course?',
        a: 'Lifetime access, once your enrollment is verified — the recorded curriculum is yours to revisit for as long as you need it.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Every question, answered.
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Everything about tiers, add-ons, payment, and the guarantee — organized by topic so you can find your
            answer fast.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {faqCategories.map((group, gi) => (
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
            <p className="font-display text-lg font-semibold">Still have a question?</p>
            <p className="mx-auto mt-1.5 max-w-md text-sm text-navy-foreground/60">
              Message the team directly on Telegram, or check the legal pages for the full terms, privacy, and
              disclaimer details.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href="https://t.me/exclusive_mentorship_bot"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-brand hover:underline"
              >
                Message us on Telegram
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
