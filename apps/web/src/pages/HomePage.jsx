import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import VideoEmbed from '@/components/site/VideoEmbed';
import { totalClasses } from '@/data/chapters';

import WhoIsThisFor from '@/components/home/WhoIsThisFor';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AboutMentor from '@/components/home/AboutMentor';
import MainValue from '@/components/home/MainValue';
import Testimonials from '@/components/home/Testimonials';
import Curriculum from '@/components/home/Curriculum';
import PricingOffer from '@/components/home/PricingOffer';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import FAQSection from '@/components/home/FAQSection';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

// NOTE: kept identical to the previous hero, with one factual correction —
// the old "Money-Back Guarantee: 7 Days" stat no longer reflects the revised
// business model (there is no cash-refund guarantee under the new plan, only
// the Accountability Protocol), so it's swapped for an accurate, still
// concrete trust stat.
const trustStats = [
  { label: 'Chapters', value: '13' },
  { label: 'On-Demand Classes', value: `${totalClasses}+` },
  { label: 'Lifetime Access', value: '100%' },
  { label: 'Tier 2 Batch Cap', value: '50' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* HERO — unchanged */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-background pb-20 pt-16 md:pt-24">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="mx-auto grid max-w-[90rem] gap-14 px-6 lg:grid-cols-[1.05fr,1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
              Institutional Trading Mentorship
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Trade like the institutions
              <br />
              <span className="mark-underline">actually</span> hunting your stop-loss.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              13 chapters. {totalClasses}+ classes. One complete system for reading liquidity, market structure,
              psychology, and risk the way professional desks do — built from zero to funded trader.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/checkout"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Join the Mentorship
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See Full Curriculum
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {trustStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}>
            <VideoEmbed title="Mentorship Introduction" />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Watch the 2-minute program overview before you enroll.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections below the fold, in the requested order */}
      <WhoIsThisFor />
      <WhyChooseUs />
      <AboutMentor />
      <MainValue />
      <Testimonials />
      <Curriculum />
      <PricingOffer />
      <GuaranteeSection />
      <FAQSection />

      {/* Slim closing CTA banner */}
      <section className="border-t border-border bg-navy py-16 text-navy-foreground">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
          <TrendingUp className="text-brand" size={32} />
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Your next chart doesn't have to feel like noise.
          </h2>
          <Link
            to="/checkout"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
          >
            Join Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
