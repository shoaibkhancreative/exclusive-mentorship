import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Seo from '@/components/site/Seo';
import VideoEmbed from '@/components/site/VideoEmbed';
import CtaButton from '@/components/site/CtaButton';
import { chapters, totalClasses } from '@/data/chapters';
import { rating } from '@/data/testimonials';

import WhoIsThisFor from '@/components/home/WhoIsThisFor';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AboutMentor from '@/components/home/AboutMentor';
import MainValue from '@/components/home/MainValue';
import Curriculum from '@/components/home/Curriculum';
import Testimonials from '@/components/home/Testimonials';
import PricingOffer from '@/components/home/PricingOffer';
import GuaranteeSection from '@/components/home/GuaranteeSection';
import FAQSection from '@/components/home/FAQSection';
import YouTubeSection from '@/components/home/YouTubeSection';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const trustStats = [
  { label: 'Chapters', value: `${chapters.length}` },
  { label: 'Classes', value: `${totalClasses}+` },
  { label: 'Lifetime Access', value: '100%' },
  { label: 'Batch Cap', value: '50' },
];

// No real intro video is wired up yet — VideoEmbed shows an honest "coming
// soon" state until one is. Once the mentor's intro is recorded, pass its
// real YouTube video id here (e.g. SAMPLE_INTRO_VIDEO_ID = 'abc123XYZ').
const SAMPLE_INTRO_VIDEO_ID = null;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo
        title="Institutional Trading Mentorship"
        description={`${chapters.length} chapters, ${totalClasses}+ classes — one complete system for reading liquidity, market structure, psychology and risk the way professional desks do.`}
      />
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
              <span className="mark-underline">hunting</span> your stop-loss.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {chapters.length} chapters. {totalClasses}+ classes. One system to read liquidity, structure, psychology,
              and risk like a professional desk — from zero to funded trader.
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
            <p className="mb-3 text-center text-sm text-muted-foreground">
              Watch a quick 2-minute overview before you enroll.
            </p>
            <VideoEmbed title="Mentorship Introduction" videoId={SAMPLE_INTRO_VIDEO_ID} />
            {/* Reads live from src/data/testimonials.js — add real reviews there
                and this appears on its own, no edit needed here. Hidden
                entirely while there are zero reviews, instead of showing a
                hollow "null / 5". */}
            {rating.score && (
              <div className="absolute -bottom-2 -left-4 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-softLg sm:flex">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Star size={16} className="fill-gold" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-foreground">{rating.score} / 5</p>
                  <p className="text-xs text-muted-foreground">Early student rating</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sections below the fold, reordered for a stronger persuasion flow:
          qualify the visitor -> differentiate from what they've already tried ->
          build trust in the mentor -> explain the method -> show the concrete
          curriculum -> social proof -> the offer -> de-risk it with the guarantee ->
          answer remaining objections -> low-commitment alternative for anyone
          still undecided, right before they'd otherwise leave. */}
      <WhoIsThisFor />
      <WhyChooseUs />
      <AboutMentor />
      <MainValue />
      <Curriculum />
      <Testimonials />
      <PricingOffer />
      <GuaranteeSection />
      <FAQSection />
      <YouTubeSection />

      <Footer />
    </div>
  );
}