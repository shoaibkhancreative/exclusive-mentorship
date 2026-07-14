import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const trustStats = [
  { label: 'Chapters', value: '13' },
  { label: 'On-Demand Classes', value: `${totalClasses}+` },
  { label: 'Lifetime Access', value: '100%' },
  { label: 'Tier 2 Batch Cap', value: '50' },
];

// SAMPLE — Replace with the mentor's real intro video once it's recorded.
// This is the official, freely-licensed Blender Foundation short film
// "Big Buck Bunny" (Creative Commons), used only so this component isn't
// empty — swap the id below for your real YouTube video id.
const SAMPLE_INTRO_VIDEO_ID = 'aqz-KE-bpKQ';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* HERO — a fine dot-grid (fading toward the edges) stands in for any
          literal illustration: enough texture to feel considered, restrained
          enough to stay out of the way of the typography. A small floating
          rating card gives the video frame some depth. */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-tint to-background pb-24 pt-14 md:pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(hsl(var(--brand) / 0.35) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse 65% 55% at 50% 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 0%, black 30%, transparent 100%)',
          }}
        />

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

          <motion.div {...fadeUp} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }} className="relative">
            <VideoEmbed title="Mentorship Introduction" videoId={SAMPLE_INTRO_VIDEO_ID} />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Watch the 2-minute program overview before you enroll.
            </p>
            {/* SAMPLE rating — replace once real reviews exist (see Testimonials). */}
            <div className="absolute -bottom-2 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-softLg sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Star size={16} className="fill-gold" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">4.9 / 5</p>
                <p className="text-xs text-muted-foreground">Early student rating</p>
              </div>
            </div>
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

      {/* Closing CTA — an asymmetric, typographic close instead of a centered
          icon-and-banner template. */}
      <section className="border-t border-border bg-navy py-20 text-navy-foreground md:py-24">
        <div className="mx-auto max-w-[72rem] px-6">
          <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">Enrollment Open</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Stop trading on guesses.
                <br />
                Start trading on structure.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-navy-foreground/60">
                {totalClasses}+ classes across 13 chapters, already recorded and waiting — built to take you from
                your first chart to a funded account.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col items-start gap-3 md:items-end"
            >
              <CtaButton to="/checkout" variant="onDark" size="lg">
                Join the Mentorship <ArrowRight size={18} />
              </CtaButton>
              <p className="text-xs text-navy-foreground/45 md:text-right">
                Backed by the ICT Mastery Accountability Protocol
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
