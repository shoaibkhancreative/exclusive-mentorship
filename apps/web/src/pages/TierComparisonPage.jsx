import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X, BadgeCheck } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CtaButton from '@/components/site/CtaButton';
import { tiers, addons, comparisonGroups, formatUSD } from '@/data/pricing';
import { chapters, totalClasses } from '@/data/chapters';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const tierNumber = { tier1: '1', tier2: '2', tier3: '3' };
const ctaVariant = { tier1: 'outline', tier2: 'onDark', tier3: 'gold' };

// Shared grid template so the header "cards" and every feature row below
// line up into perfect columns — one label lane plus one lane per tier.
const GRID = 'grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-2 sm:gap-x-3';

function ValueCell({ value }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/12 text-brand">
        <Check size={14} strokeWidth={2.75} />
      </span>
    );
  }
  if (value === false) {
    return <X size={15} className="text-muted-foreground/30" strokeWidth={2} />;
  }
  return <span className="text-xs font-semibold leading-snug text-foreground">{value}</span>;
}

export default function TierComparisonPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      {/* Intro */}
      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[78rem] px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to home
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-wide text-brand">All Tier Comparison</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Every tier, side by side.
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            All three tiers include the exact same {chapters.length}-chapter, {totalClasses}+ class curriculum.
            What changes is the support around it, the add-ons, and how much of it is free. Scan the table below
            and pick the tier that matches how much support you want.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[78rem] px-6">
          <motion.div {...fadeUp} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <BadgeCheck size={19} strokeWidth={2.2} />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Every tier below includes the full recorded course</span> —
              {' '}{chapters.length} chapters, {totalClasses}+ classes, lifetime access. Nothing in the curriculum itself is
              held back for a higher tier.
            </p>
          </motion.div>

          {/* Comparison table */}
          <div className="mt-10 overflow-x-auto pb-3">
            <div className="min-w-[760px]">
              {/* Header row — one card per tier */}
              <div className={`${GRID} items-end`}>
                <div />
                {tiers.map((tier, i) => {
                  const isTier2 = tier.id === 'tier2';
                  const isTier3 = tier.id === 'tier3';
                  const isFull = tier.available === false;
                  return (
                    <motion.div
                      key={tier.id}
                      {...fadeUp}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                      className={`rounded-t-2xl border p-4 sm:p-5 ${
                        isTier2 ? 'border-brand bg-navy text-navy-foreground' : 'border-border bg-card'
                      }`}
                    >
                      {tier.badge ? (
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${
                            isFull ? 'bg-muted text-muted-foreground' : isTier3 ? 'bg-gold text-navy' : 'bg-brand text-brand-foreground'
                          }`}
                        >
                          {isFull ? 'FULL' : tier.badge}
                        </span>
                      ) : (
                        <span className="inline-block h-[22px]" />
                      )}
                      <p className={`mt-2.5 font-display text-base font-bold leading-tight sm:text-lg ${isTier2 ? 'text-navy-foreground' : 'text-foreground'}`}>
                        {tier.name}
                      </p>
                      <p className={`mt-3 flex items-baseline gap-1.5 ${isTier2 ? 'text-navy-foreground' : 'text-foreground'}`}>
                        <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">{formatUSD(tier.priceUSD)}</span>
                        <span className={`text-[11px] ${isTier2 ? 'text-navy-foreground/60' : 'text-muted-foreground'}`}>
                          USDT
                        </span>
                      </p>
                      <div className="mt-4">
                        {isFull ? (
                          <div className="rounded-full border-2 border-dashed border-muted-foreground/30 px-3 py-2.5 text-center text-[11px] font-semibold text-muted-foreground">
                            Full this month
                          </div>
                        ) : (
                          <CtaButton to={`/checkout?tier=${tierNumber[tier.id]}`} variant={ctaVariant[tier.id]} size="sm" full className="text-xs sm:text-sm">
                            {tier.ctaLabel}
                          </CtaButton>
                        )}
                      </div>
                      <Link
                        to={`/programs/${tier.slug}`}
                        className={`mt-3 block text-center text-[11px] font-semibold hover:underline ${
                          isTier2 ? 'text-navy-foreground/70' : 'text-brand'
                        }`}
                      >
                        Full tier details →
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Body — grouped feature rows */}
              <div className="border-b border-border">
                {comparisonGroups.map((group, gi) => (
                  <div key={group.group}>
                    <div className={GRID}>
                      <p className={`col-span-4 text-[11px] font-bold uppercase tracking-wide text-brand ${gi === 0 ? 'pb-2 pt-6' : 'pb-2 pt-8'}`}>
                        {group.group}
                      </p>
                    </div>
                    {group.rows.map((row) => (
                      <div key={row.label} className={`${GRID} items-center border-t border-border/70 py-3.5`}>
                        <div className="pr-3">
                          <p className="text-sm font-medium leading-snug text-foreground">{row.label}</p>
                          {row.note && <p className="mt-0.5 text-xs text-muted-foreground">{row.note}</p>}
                        </div>
                        {tiers.map((tier) => (
                          <div
                            key={tier.id}
                            className={`flex h-full items-center justify-center rounded-lg py-2 text-center ${
                              tier.id === 'tier2' ? 'bg-accent/40' : ''
                            }`}
                          >
                            <ValueCell value={row.values[tier.id]} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Repeat CTAs under the table so a decision doesn't require scrolling back up */}
              <div className={`${GRID} pt-6`}>
                <div />
                {tiers.map((tier) => {
                  const isFull = tier.available === false;
                  return (
                    <div key={tier.id}>
                      {isFull ? (
                        <div className="rounded-full border-2 border-dashed border-muted-foreground/30 px-3 py-2.5 text-center text-[11px] font-semibold text-muted-foreground">
                          Full this month
                        </div>
                      ) : (
                        <CtaButton to={`/checkout?tier=${tierNumber[tier.id]}`} variant={ctaVariant[tier.id]} size="sm" full className="text-xs sm:text-sm">
                          {tier.ctaLabel}
                        </CtaButton>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">Swipe sideways to see every tier →</p>

          {/* Add-ons + FAQ pointer */}
          <motion.div {...fadeUp} className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-tint p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-base font-semibold text-foreground">Want to see the add-ons on their own?</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {addons.map((a) => a.shortName || a.name).join(' · ')} — each can be purchased individually on Tier 1.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4 text-sm font-semibold text-brand">
              {addons.map((a) => (
                <Link key={a.id} to={`/addons/${a.slug}`} className="hover:underline">
                  {a.shortName}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Closing CTA */}
          <motion.div {...fadeUp} className="mt-6 rounded-2xl border border-border bg-navy p-8 text-navy-foreground">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold">Still not sure which one fits?</p>
                <p className="mt-1 text-sm text-navy-foreground/60">
                  Most students start with the Smart Money Arsenal — it's the only tier with everything free, all at once.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-4">
                <Link to="/faq" className="text-sm font-semibold text-navy-foreground/70 hover:text-navy-foreground">
                  Read the FAQ
                </Link>
                <Link
                  to="/checkout?tier=2"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
                >
                  Get the Anchor Plan <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
