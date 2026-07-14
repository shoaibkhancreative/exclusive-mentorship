import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import VideoEmbed from '@/components/site/VideoEmbed';
import CtaButton from '@/components/site/CtaButton';
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
import MarketMotif from '@/components/home/MarketMotif';

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

      {/* HERO — signature motif: the "liquidity sweep" line is the one visual
          native to this brand's own subject matter (price wicks above a
          prior high, then reverses hard) so it replaces the generic glow
          blob and quietly echoes the headline instead of decorating it. */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-tint to-background pb-24 pt-14 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-[0.16] sm:h-64">
          <MarketMotif className="h-full w-full" />
        </div>

        <div className="relative mx-auto grid max-w-[90rem] gap-14 px-6 lg:grid-cols-[1.05fr,1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
              Institutional Trading Mentorship
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              Trade like the institutions
              <br />
              <span className="mark-underline">actually</span> hunting your stop-loss.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              13 chapters. {totalClasses}+ classes. One complete system for reading liquidity, market structure,
              psychology, and risk the way professional desks do — built from zero to funded trader.
            </p>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <CtaButton to="/checkout" size="lg">
                Join the Mentorship
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </CtaButton>
              <CtaButton href="#curriculum" variant="outline" size="lg">
                See Full Curriculum
              </CtaButton>
            </div>
            <div className="mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border/70 pt-7 sm:grid-cols-4">
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

      {/* Closing CTA — bookends the hero's chart motif so the page opens and
          closes on the same signature line instead of a generic banner. */}
      <section className="relative overflow-hidden border-t border-border bg-navy py-16 text-navy-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 -scale-y-100 opacity-[0.14]">
          <MarketMotif className="h-full w-full" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 text-center">
          <TrendingUp className="text-brand" size={32} />
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Your next chart doesn't have to feel like noise.
          </h2>
          <CtaButton to="/checkout" variant="onDark" size="lg">
            Join Now <ArrowRight size={18} />
          </CtaButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
