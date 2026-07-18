import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X, Youtube, Send, Home, BookOpen, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import CtaButton from './CtaButton';
import NavDropdown from './NavDropdown';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { chapters, totalClasses } from '@/data/chapters';
import { tiers, formatUSD } from '@/data/pricing';
import { BOT_USERNAME } from '@/lib/telegram';
import { cn } from '@/lib/utils';

const YOUTUBE_URL = 'https://www.youtube.com/@WeAreNLT';
const TELEGRAM_URL = `https://t.me/${BOT_USERNAME}`;

// Cheapest way in — used for the "Starts at" price anchor next to the CTA.
const entryTier = tiers.find((t) => t.id === 'tier1');

// Same badge language as the pricing cards (PricingOffer.jsx), just resized
// for a compact nav row: MOST POPULAR / LIMITED SEATS in their tier color,
// or a muted "FULL" the moment a capped tier's `available` flag flips false.
const badgeTint = {
  tier1: '',
  tier2: 'bg-brand text-brand-foreground',
  tier3: 'bg-gold text-navy',
};

function TierBadge({ tier }) {
  const isFull = tier.available === false;
  const label = isFull ? 'FULL' : tier.badge;
  if (!label) return null;
  return (
    <span
      className={cn(
        'shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
        isFull ? 'bg-muted text-muted-foreground' : badgeTint[tier.id]
      )}
    >
      {label}
    </span>
  );
}

// Shared row-trigger styling so the mobile accordion headers read as part of
// the same nav list as the plain links around them (no default border/underline).
// `tint` layers in a soft "you're already in this section" background even
// before the row is tapped open.
const mobileGroupTrigger = (tint) =>
  cn(
    'rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:no-underline data-[state=open]:bg-secondary/60',
    tint && 'bg-secondary/40'
  );

// The one place in the nav where numbering earns its keep: the curriculum is
// a real, ordered sequence (Foundation \u2192 Financial Freedom), so chapters are
// drawn as numbered stops on a single connecting line rather than a plain list.
function CurriculumPanelHeader() {
  return (
    <div className="border-b border-border bg-tint/60 px-5 py-3">
      <p className="text-[11px] font-bold uppercase tracking-wide text-brand">The Curriculum</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {chapters.length} chapters &middot; {totalClasses}+ classes &middot; lifetime access
      </p>
    </div>
  );
}

function ChapterList({ onNavigate }) {
  return (
    <div className="p-2">
      {chapters.map((chapter, i) => {
        const isLast = i === chapters.length - 1;
        return (
          <Link
            key={chapter.slug}
            to={`/chapter/${chapter.slug}`}
            onClick={onNavigate}
            className="flex items-stretch gap-3 rounded-xl px-3 transition-colors hover:bg-secondary"
          >
            {/* Badge + connector share a stretched column, so the segment
                below each badge always grows to exactly this row's own
                rendered height \u2014 no hand-measured offsets to keep in sync
                with however many lines the tagline wraps to. */}
            <span className="flex shrink-0 flex-col items-center">
              <span className="mt-2.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[11px] font-bold text-accent-foreground">
                {String(chapter.id).padStart(2, '0')}
              </span>
              {!isLast && <span className="my-1.5 w-px flex-1 bg-border" aria-hidden="true" />}
            </span>
            <span className="min-w-0 py-2.5">
              <span className="block text-sm font-semibold leading-snug text-foreground">{chapter.title}</span>
              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{chapter.tagline}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function TierList({ onNavigate }) {
  return (
    <div className="p-2">
      {tiers.map((tier) => {
        const isFull = tier.available === false;
        return (
          <Link
            key={tier.id}
            to={`/programs/${tier.slug}`}
            onClick={onNavigate}
            className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 transition-colors hover:bg-secondary"
          >
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{tier.name}</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {isFull ? 'Full this month \u2014 join the waitlist' : tier.tagline}
              </span>
            </span>
            <span className="flex shrink-0 flex-col items-end gap-1">
              <TierBadge tier={tier} />
              <span className="text-sm font-bold text-foreground">{formatUSD(tier.priceUSD)}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const close = () => setOpen(false);
  const location = useLocation();

  const homeActive = location.pathname === '/';
  const curriculumActive = location.pathname === '/curriculum' || location.pathname.startsWith('/chapter/');
  const programsActive = location.pathname === '/compare-tiers' || location.pathname.startsWith('/programs/');
  const faqActive = location.pathname === '/faq';

  // Sticky chrome tightens up the moment the page scrolls: a touch shorter,
  // a touch more opaque, a soft shadow to lift it off the content beneath.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300',
        scrolled ? 'border-b border-border bg-background/95 shadow-soft' : 'border-b border-transparent bg-background/80'
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[90rem] items-center justify-between px-6 transition-all duration-300',
          scrolled ? 'h-16' : 'h-[4.5rem]'
        )}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp size={18} strokeWidth={2.4} />
          </span>
          <span className="hidden sm:inline">Exclusive Mentorship</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <NavDropdown label="Curriculum" active={curriculumActive}>
            {(closeMenu) => (
              <>
                <CurriculumPanelHeader />
                <ChapterList onNavigate={closeMenu} />
                <Link
                  to="/curriculum"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-t border-border bg-tint/60 px-5 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-tint"
                >
                  View Full Curriculum
                  <ArrowRight size={14} />
                </Link>
              </>
            )}
          </NavDropdown>

          <NavDropdown label="Programs" active={programsActive}>
            {(closeMenu) => (
              <>
                <TierList onNavigate={closeMenu} />
                <Link
                  to="/compare-tiers"
                  onClick={closeMenu}
                  className="flex items-center justify-between border-t border-border bg-tint/60 px-5 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-tint"
                >
                  Compare All Tiers
                  <ArrowRight size={14} />
                </Link>
              </>
            )}
          </NavDropdown>

          <Link
            to="/faq"
            className={cn(
              'group relative py-2 transition-colors hover:text-foreground focus-visible:text-foreground',
              faqActive ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            FAQ
            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute -bottom-[3px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100',
                faqActive && 'scale-x-100'
              )}
            />
          </Link>

          <span className="h-4 w-px bg-border" aria-hidden="true" />

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on Telegram"
            title="Message us on Telegram"
            className="transition-colors hover:text-foreground"
          >
            <Send size={17} strokeWidth={2.2} />
          </a>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NLT on YouTube"
            title="NLT on YouTube"
            className="transition-colors hover:text-foreground"
          >
            <Youtube size={18} />
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right leading-tight lg:block">
            <p className="text-[11px] text-muted-foreground">Starts at</p>
            <p className="text-sm font-bold text-foreground">{formatUSD(entryTier.priceUSD)}</p>
          </div>

          <CtaButton to="/checkout" size="sm" className="hidden sm:inline-flex">
            Join Now
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </CtaButton>
          <CtaButton to="/checkout" size="sm" className="px-4 sm:hidden">
            Join
          </CtaButton>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
              >
                {open ? <X size={19} /> : <Menu size={19} />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85vw] max-w-xs flex-col gap-0 p-0">
              <div className="flex items-center gap-2.5 border-b border-border px-6 py-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <TrendingUp size={18} strokeWidth={2.4} />
                </span>
                <SheetTitle className="font-display text-base font-bold text-foreground">Exclusive Mentorship</SheetTitle>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5 text-base font-medium text-foreground">
                <Link
                  to="/"
                  onClick={close}
                  className={cn('flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary', homeActive && 'bg-secondary/60')}
                >
                  <Home size={17} className="text-muted-foreground" strokeWidth={2.2} />
                  Home
                </Link>

                <Accordion type="single" collapsible defaultValue={curriculumActive ? 'curriculum' : undefined}>
                  <AccordionItem value="curriculum" className="border-none">
                    <AccordionTrigger className={mobileGroupTrigger(curriculumActive)}>
                      <span className="flex items-center gap-3">
                        <BookOpen size={17} className="text-muted-foreground" strokeWidth={2.2} />
                        Curriculum
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-1 pt-0">
                      <div className="mb-1.5 rounded-lg bg-tint/60 px-3.5 py-2.5">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-brand">The Curriculum</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {chapters.length} chapters &middot; {totalClasses}+ classes &middot; lifetime access
                        </p>
                      </div>
                      <ChapterList onNavigate={close} />
                      <Link
                        to="/curriculum"
                        onClick={close}
                        className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-secondary"
                      >
                        View Full Curriculum <ArrowRight size={14} />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible defaultValue={programsActive ? 'programs' : undefined}>
                  <AccordionItem value="programs" className="border-none">
                    <AccordionTrigger className={mobileGroupTrigger(programsActive)}>
                      <span className="flex items-center gap-3">
                        <Layers size={17} className="text-muted-foreground" strokeWidth={2.2} />
                        Programs
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-1 pl-3 pt-0">
                      <div className="flex flex-col gap-0.5 border-l border-border pl-3">
                        {tiers.map((tier) => {
                          const isFull = tier.available === false;
                          return (
                            <Link
                              key={tier.id}
                              to={`/programs/${tier.slug}`}
                              onClick={close}
                              className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary"
                            >
                              <span className="min-w-0">
                                <span className="block font-medium text-foreground">{tier.name}</span>
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {isFull ? 'Full this month \u2014 join the waitlist' : tier.tagline}
                                </span>
                              </span>
                              <span className="flex shrink-0 flex-col items-end gap-1">
                                <TierBadge tier={tier} />
                                <span className="text-xs font-semibold text-foreground/70">{formatUSD(tier.priceUSD)}</span>
                              </span>
                            </Link>
                          );
                        })}
                        <Link
                          to="/compare-tiers"
                          onClick={close}
                          className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-secondary"
                        >
                          Compare All Tiers <ArrowRight size={14} />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  to="/faq"
                  onClick={close}
                  className={cn('flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary', faqActive && 'bg-secondary/60')}
                >
                  <HelpCircle size={17} className="text-muted-foreground" strokeWidth={2.2} />
                  FAQ
                </Link>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary"
                >
                  <Youtube size={17} className="text-[#FF0000]" strokeWidth={2.2} />
                  Free YouTube Content
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-secondary"
                >
                  <Send size={17} className="text-brand" strokeWidth={2.2} />
                  Message Us on Telegram
                </a>

                <div className="mt-2 border-t border-border pt-3 text-sm text-muted-foreground">
                  <Link to="/terms" onClick={close} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary hover:text-foreground">
                    Terms of Service
                  </Link>
                  <Link to="/privacy" onClick={close} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary hover:text-foreground">
                    Privacy Policy
                  </Link>
                  <Link to="/disclaimer" onClick={close} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary hover:text-foreground">
                    Risk Disclaimer
                  </Link>
                </div>
              </nav>

              <div className="border-t border-border p-4">
                <p className="mb-2.5 text-center text-xs text-muted-foreground">
                  Starting at <span className="font-semibold text-foreground">{formatUSD(entryTier.priceUSD)}</span> &middot; Lifetime access
                </p>
                <CtaButton to="/checkout" size="md" full onClick={close}>
                  Join Now
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
