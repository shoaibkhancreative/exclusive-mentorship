import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { tiers, addons } from '@/data/pricing';

// TODO: replace with your real support inbox before this goes live.
const SUPPORT_EMAIL = 'support@exclusivementorship.com';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-[90rem] px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <TrendingUp size={18} strokeWidth={2.4} />
              </span>
              Exclusive Mentorship
            </div>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/60">
              A 13-chapter institutional trading mentorship — market structure, liquidity, psychology, risk and prop-firm mastery, taught step by step.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 text-sm">
            <div className="space-y-2.5">
              <p className="font-semibold text-navy-foreground/90">Programs</p>
              {tiers.map((tier) => (
                <Link
                  key={tier.id}
                  to={`/programs/${tier.slug}`}
                  className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground"
                >
                  {tier.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2.5">
              <p className="font-semibold text-navy-foreground/90">Support</p>
              <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">Telegram</a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">Email</a>
              <Link to="/faq" className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">FAQ</Link>
            </div>
            <div className="space-y-2.5">
              <p className="font-semibold text-navy-foreground/90">Add-ons</p>
              {addons.map((addon) => (
                <Link
                  key={addon.id}
                  to={`/addons/${addon.slug}`}
                  className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground"
                >
                  {addon.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2.5">
              <p className="font-semibold text-navy-foreground/90">Legal</p>
              <Link to="/terms" className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">Privacy Policy</Link>
              <Link to="/disclaimer" className="block text-navy-foreground/60 transition-colors hover:text-navy-foreground">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Exclusive Mentorship. All rights reserved.</p>
          <p>Trading involves substantial risk of loss. Past results are not indicative of future performance. Educational content only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
