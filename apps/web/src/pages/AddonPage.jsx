import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { addons, tiers, formatUSD, getAddonBySlug } from '@/data/pricing';

export default function AddonPage() {
  const { slug } = useParams();
  const addon = getAddonBySlug(slug);

  if (!addon) return <Navigate to="/" replace />;

  const otherAddons = addons.filter((a) => a.id !== addon.id);
  const freeWithTiers = tiers.filter((t) => t.addonsIncluded);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-[60rem] px-6">
          <Link to="/#offer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to all add-ons
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">Standalone Add-on</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{addon.name}</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{addon.longDescription}</p>

          <p className="mt-8 flex items-baseline gap-2">
            <span className="font-display text-4xl font-bold tracking-tight text-foreground">{formatUSD(addon.priceUSD)}</span>
            <span className="text-sm text-muted-foreground">USDT</span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              to={`/checkout?addon=${addon.id}`}
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Buy This Add-on <ArrowRight size={18} />
            </Link>
            <Link to="/#offer" className="text-sm font-semibold text-brand hover:underline">
              See all add-ons &amp; tiers
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[60rem] px-6">
          <h2 className="font-display text-xl font-bold text-foreground">What's included</h2>
          <ul className="mt-5 space-y-3.5">
            {addon.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="leading-relaxed text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          {freeWithTiers.length > 0 && (
            <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-brand/30 bg-accent px-6 py-5 text-sm text-accent-foreground sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2.5 font-medium">
                <Sparkles size={16} className="shrink-0" />
                Included FREE with {freeWithTiers.map((t) => t.shortName).join(' & ')}
              </p>
              <div className="flex flex-wrap gap-4">
                {freeWithTiers.map((t) => (
                  <Link key={t.id} to={`/programs/${t.slug}`} className="font-semibold underline underline-offset-2">
                    View {t.shortName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-navy-foreground">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-semibold">Ready to add {addon.name}?</p>
                <p className="mt-1 text-sm text-navy-foreground/60">Buy it standalone, or get it free with Tier 2 or Tier 3.</p>
              </div>
              <Link
                to={`/checkout?addon=${addon.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
              >
                Buy Now <ArrowRight size={16} />
              </Link>
            </div>

            {otherAddons.length > 0 && (
              <div className="mt-6 grid gap-3 border-t border-navy-foreground/10 pt-5 sm:grid-cols-2">
                {otherAddons.map((o) => (
                  <Link
                    key={o.id}
                    to={`/addons/${o.slug}`}
                    className="flex items-center justify-between gap-2 text-sm text-navy-foreground/70 hover:text-navy-foreground"
                  >
                    <span>Also see: {o.name}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
