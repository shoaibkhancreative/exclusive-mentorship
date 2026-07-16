import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, X, Sparkles } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CtaButton from '@/components/site/CtaButton';
import { tiers, formatBDT, formatUSD, bdtFromUSD, ADDONS_VALUE_BDT, getTierBySlug } from '@/data/pricing';
import { chapters, totalClasses } from '@/data/chapters';

const tierNumber = { tier1: '1', tier2: '2', tier3: '3' };

export default function ProgramPage() {
  const { slug } = useParams();
  const tier = getTierBySlug(slug);

  if (!tier) return <Navigate to="/" replace />;

  const isTier3 = tier.id === 'tier3';
  const isFull = tier.available === false;
  const otherTiers = tiers.filter((t) => t.id !== tier.id);
  const accent = isTier3 ? 'text-gold' : 'text-brand';

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[64rem] px-6">
          <Link to="/#offer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to all tiers
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-wide ${accent}`}>{tier.shortName}</span>
            {tier.badge && (
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
                  isFull ? 'bg-muted text-muted-foreground' : isTier3 ? 'bg-gold text-navy' : 'bg-brand text-brand-foreground'
                }`}
              >
                {isFull ? 'FULL THIS MONTH' : tier.badge}
              </span>
            )}
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{tier.name}</h1>
          <p className="mt-2 text-lg italic text-muted-foreground">{tier.tagline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{tier.longDescription}</p>

          <p className="mt-8 flex items-baseline gap-2">
            <span className="font-display text-4xl font-bold tracking-tight text-foreground">{formatBDT(tier.priceBDT)}</span>
            <span className="text-sm text-muted-foreground">≈ {formatUSD(tier.priceUSD)} USDT</span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {isFull ? (
              <div className="inline-flex flex-col items-start gap-0.5 rounded-full border-2 border-dashed border-muted-foreground/30 px-7 py-3.5">
                <span className="text-sm font-semibold text-muted-foreground">Full for this month</span>
                <span className="text-xs text-muted-foreground/70">Next batch opens next month</span>
              </div>
            ) : (
              <CtaButton to={`/checkout?tier=${tierNumber[tier.id]}`} size="lg">
                {tier.ctaLabel} <ArrowRight size={18} />
              </CtaButton>
            )}
            <Link to="/#offer" className="text-sm font-semibold text-brand hover:underline">
              Compare all 3 tiers
            </Link>
          </div>

          {tier.limitation && (
            <p className="mt-5 inline-block rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-muted-foreground">
              {tier.limitation}
            </p>
          )}
          {tier.splitPayment && (
            <p className="mt-3 text-sm text-muted-foreground">
              Or split it: {formatUSD(tier.splitPayment.installment1USD)} now (≈{formatBDT(bdtFromUSD(tier.splitPayment.installment1USD))}) +{' '}
              {formatUSD(tier.splitPayment.installment2USD)} within {tier.splitPayment.penaltyDays} days.
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[60rem] px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Who this tier is for</h2>
              <ul className="mt-5 space-y-3.5">
                {tier.idealFor.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">What's included</h2>
              <ul className="mt-5 space-y-3.5">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-sm">
                    {f.included ? (
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    ) : (
                      <X size={16} className="mt-0.5 shrink-0 text-muted-foreground/40" />
                    )}
                    <span className={f.included ? 'text-foreground' : 'text-muted-foreground'}>
                      {f.label}
                      {f.note && <span className="block text-xs text-muted-foreground">{f.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {tier.addonsIncluded && (
            <div className="mt-10 flex flex-col gap-2 rounded-2xl border border-brand/30 bg-accent px-6 py-5 text-sm font-medium text-accent-foreground sm:flex-row sm:items-center sm:gap-2.5">
              <Sparkles size={16} className="shrink-0" />
              <span>
                All 3 add-ons are included free with this tier — worth {formatBDT(ADDONS_VALUE_BDT)}. See{' '}
                <Link to="/#offer" className="underline underline-offset-2">
                  what's inside
                </Link>
                .
              </span>
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="font-display text-lg font-semibold text-foreground">Every tier includes the full curriculum</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {chapters.length} chapters, {totalClasses}+ classes — from market basics and ICT concepts to macroeconomics,
              psychology, risk, and prop-firm strategy, no matter which tier you choose.
            </p>
            <Link to="/curriculum" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              See the full curriculum <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-navy-foreground">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold">Ready for {tier.name}?</p>
                <p className="mt-1 text-sm text-navy-foreground/60">
                  Enrollment is handled securely through Telegram and verified manually by the team.
                </p>
              </div>
              {!isFull && (
                <Link
                  to={`/checkout?tier=${tierNumber[tier.id]}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
                >
                  {tier.ctaLabel} <ArrowRight size={16} />
                </Link>
              )}
            </div>

            <div className="mt-6 grid gap-3 border-t border-navy-foreground/10 pt-5 sm:grid-cols-2">
              {otherTiers.map((o) => (
                <Link
                  key={o.id}
                  to={`/programs/${o.slug}`}
                  className="flex items-center justify-between gap-2 text-sm text-navy-foreground/70 hover:text-navy-foreground"
                >
                  <span>Compare with {o.name}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
