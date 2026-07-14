import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading, { fadeUp } from './SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Do I need any trading experience to start?',
    a: 'None at all. Chapter 1 is built for complete beginners and takes you step by step to an institutional-level vocabulary before anything advanced begins.',
  },
  {
    q: "What's the actual difference between Tier 1 and Tier 2?",
    a: 'Both include the full recorded ICT course. Tier 2 adds Priority Support, Bi-Weekly Live Q&A, and all 3 add-ons completely free — which is why most students choose it over paying for Tier 1 plus add-ons separately.',
  },
  {
    q: 'How does the Tier 2 split payment work?',
    a: 'Pay $20 (≈৳2,460) to unlock Part 1 of the video modules. Pay the remaining $24 (≈৳2,952) within 30 days to unlock Part 2, all 3 add-ons, and Live Q&A access. Splitting costs $44 total instead of $39 one-time. If the second installment isn\'t paid within 30 days, Part 1 access is paused until it is.',
  },
  {
    q: 'How do I get into the Tier 3 Inner Circle?',
    a: 'Tier 3 is by application only, to keep it genuinely 1-on-1 — submit the VIP application form from the pricing section above. Only 5 seats open per month; if the current month is full, you\'re placed on the waitlist for the next one.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'All enrollments are final sale. In place of a cash refund, every tier is backed by the ICT Mastery Accountability Protocol — complete the course, keep the journal, and log 30 demo trades, and the mentor personally steps in if it still isn\'t clicking. See the Guarantee section above for the full details.',
  },
  {
    q: 'How do I pay, and is it safe?',
    a: 'Bkash, Nagad, and Binance UID (USDT) are all accepted. After paying, you send your screenshot as proof directly through our Telegram bot, and the mentor personally verifies every single payment before granting access.',
  },
  {
    q: 'What actually happens after I click "Confirm & Proceed"?',
    a: "You're taken to our Telegram bot with your package pre-loaded. The bot confirms your order and the exact amount due, you send payment and attach your screenshot, and access is granted manually once it's verified — usually within a few hours.",
  },
  {
    q: 'Do I need to sign up or create an account?',
    a: 'No. There is no separate login. Enrollment, verification, and delivery of your course access all happen through Telegram.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <motion.div {...fadeUp} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            More questions on terms, payment, or refunds? See our{' '}
            <Link to="/terms" className="font-medium text-brand hover:underline">Terms &amp; Conditions</Link> or{' '}
            <Link to="/disclaimer" className="font-medium text-brand hover:underline">Disclaimer</Link>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
