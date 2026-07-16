import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles } from 'lucide-react';
import { tiers, addons, formatBDT, formatUSD, ADDONS_VALUE_BDT, bdtFromUSD } from '@/data/pricing';
import SectionHeading, { fadeUp } from './SectionHeading';
import CtaButton from '@/components/site/CtaButton';
import { motion } from 'framer-motion';

const cardStyles = {
  tier1: 'border-border bg-card shadow-soft hover:-translate-y-1',
  tier2: 'border-brand bg-navy text-navy-foreground shadow-softLg lg:-translate-y-3',
  tier3: 'border-gold/50 bg-card shadow-soft hover:-translate-y-1',
};

const badgeStyles = {
  tier1: '',
  tier2: 'bg-brand text-brand-foreground',
  tier3: 'bg-gold text-navy',
};

const ctaVariant = {
  tier1: 'outline',
  tier2: 'onDark',
  tier3: 'gold',
};

const tierNumber = { tier1: '1', tier2: '2', tier3: '3' };

function TierCard({ tier, index }) {
  const isTier2 = tier.id === 'tier2';
  const isTier3 = tier.id === 'tier3';
  const isFull = tier.available === false;
  const mutedText = isTier2 ? 'text-navy-foreground/60' : 'text-muted-foreground';
  const bodyText = isTier2 ? 'text-navy-foreground' : 'text-foreground';

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className={`relative flex flex-col rounded-2xl border-2 p-7 transition-transform duration-300 ${cardStyles[tier.id]}`}
    >
      {tier.badge && (
        <span
          className={`absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
            isFull ? 'bg-muted text-muted-foreground' : badgeStyles[tier.id]
          }`}
        >
          {isFull ? 'FULL THIS MONTH' : tier.badge}
        </span>
      )}
      <p className={`text-xs font-bold uppercase tracking-wide ${isTier3 ? 'text-gold' : 'text-brand'}`}>{tier.shortName}</p>
      <p className={`mt-1.5 font-display text-lg font-semibold ${bodyText}`}>{tier.name}</p>
      <p className={`mt-1 text-sm ${mutedText}`}>{tier.tagline}</p>

      <p className={`mt-6 flex items-baseline gap-2 ${bodyText}`}>
        <span className="font-display text-3xl font-bold tracking-tight">{formatBDT(tier.priceBDT)}</span>
        <span className={`text-sm ${mutedText}`}>≈ {formatUSD(tier.priceUSD)} USDT</span>
      </p>

      <ul className="mt-6 space-y-3 text-sm">
        {tier.features.map((f) => (
          <li key={f.label} className="flex items-start gap-2.5">
            {f.included ? (
              <Check size={16} className={`mt-0.5 shrink-0 ${isTier3 ? 'text-gold' : 'text-brand'}`} />
            ) : (
              <X size={16} className={`mt-0.5 shrink-0 ${isTier2 ? 'text-navy-foreground/30' : 'text-muted-foreground/40'}`} />
            )}
            <span className={f.included ? bodyText : mutedText}>
              {f.label}
              {f.note && <span className={`block text-xs ${mutedText}`}>{f.note}</span>}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex-1" />

      {tier.limitation && (
        <p className={`mt-5 rounded-lg px-3 py-2 text-xs font-medium ${isTier2 ? 'bg-navy-foreground/10 text-navy-foreground/70' : 'bg-secondary text-muted-foreground'}`}>
          {tier.limitation}
        </p>
      )}

      <div className="mt-7">
        {isFull ? (
          <div className="flex w-full flex-col items-center gap-0.5 rounded-full border-2 border-dashed border-muted-foreground/30 px-7 py-3.5 text-center">
            <span className="text-sm font-semibold text-muted-foreground">Full for this month</span>
            <span className="text-xs text-muted-foreground/70">Next batch opens next month</span>
          </div>
        ) : (
          <CtaButton to={`/checkout?tier=${tierNumber[tier.id]}`} variant={ctaVariant[tier.id]} full>
            {tier.ctaLabel}
          </CtaButton>
        )}
      </div>

      <Link
        to={`/programs/${tier.slug}`}
        className={`mt-4 block text-center text-xs font-semibold hover:underline ${isTier2 ? 'text-navy-foreground/70' : 'text-brand'}`}
      >
        Full tier details →
      </Link>

      {tier.splitPayment && (
        <p className={`mt-3 text-center text-xs ${mutedText}`}>
          Or split it: {formatUSD(tier.splitPayment.installment1USD)} now (≈{formatBDT(bdtFromUSD(tier.splitPayment.installment1USD))}) +{' '}
          {formatUSD(tier.splitPayment.installment2USD)} within {tier.splitPayment.penaltyDays} days
        </p>
      )}
    </motion.div>
  );
}

export default function PricingOffer() {
  return (
    <section id="offer" className="border-y border-border bg-tint py-20 md:py-24">
      <div className="mx-auto max-w-[78rem] px-6">
        <SectionHeading
          eyebrow="The Offer, Add-ons & Pricing"
          title="Three ways in. One clear best value."
          subtitle="Every tier includes the full recorded course. What changes is the support around it — and how much of it is free."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display text-lg font-semibold text-foreground">Standalone Add-ons</p>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-brand">
              <Sparkles size={14} /> All 3 are FREE inside Tier 2 &amp; Tier 3 — worth {formatBDT(ADDONS_VALUE_BDT)}
            </p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            On Tier 1 or on their own, each add-on can be purchased individually.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {addons.map((a) => (
              <div key={a.id} className="flex flex-col rounded-xl border border-border p-5">
                <p className="font-medium text-foreground">{a.name}</p>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">{a.description}</p>
                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-lg font-bold text-foreground">{formatBDT(a.priceBDT)}</span>
                  <span className="text-xs text-muted-foreground">≈{formatUSD(a.priceUSD)}</span>
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <Link to={`/addons/${a.slug}`} className="text-xs font-semibold text-brand hover:underline">
                    Learn more
                  </Link>
                  <CtaButton to={`/checkout?addon=${a.id}`} variant="ghost" size="sm" className="text-xs">
                    Buy separately
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
