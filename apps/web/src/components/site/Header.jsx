import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, Youtube, ArrowRight } from 'lucide-react';
import CtaButton from './CtaButton';
import NavDropdown from './NavDropdown';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { chapters } from '@/data/chapters';
import { tiers, formatBDT } from '@/data/pricing';

const YOUTUBE_URL = 'https://www.youtube.com/@WeAreNLT';

// Shared row-trigger styling so the mobile accordion headers read as part of
// the same nav list as the plain links around them (no default border/underline).
const mobileGroupTrigger =
  'rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:no-underline data-[state=open]:bg-secondary/60';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  const location = useLocation();

  const curriculumActive = location.pathname === '/curriculum' || location.pathname.startsWith('/chapter/');
  const programsActive = location.pathname === '/compare-tiers' || location.pathname.startsWith('/programs/');
  const faqActive = location.pathname === '/faq';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TrendingUp size={18} strokeWidth={2.4} />
          </span>
          <span className="hidden sm:inline">Exclusive Mentorship</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <NavDropdown label="Curriculum" active={curriculumActive} panelClassName="w-80">
            {(closeMenu) => (
              <>
                <div className="p-2">
                  {chapters.map((chapter) => (
                    <Link
                      key={chapter.slug}
                      to={`/chapter/${chapter.slug}`}
                      onClick={closeMenu}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[11px] font-bold text-accent-foreground">
                        {String(chapter.id).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-snug text-foreground">{chapter.title}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{chapter.tagline}</span>
                      </span>
                    </Link>
                  ))}
                </div>
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

          <NavDropdown label="Programs" active={programsActive} panelClassName="w-80">
            {(closeMenu) => (
              <>
                <div className="p-2">
                  {tiers.map((tier) => {
                    const isFull = tier.available === false;
                    return (
                      <Link
                        key={tier.id}
                        to={`/programs/${tier.slug}`}
                        onClick={closeMenu}
                        className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 transition-colors hover:bg-secondary"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground">{tier.name}</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {isFull ? 'Full this month — join the waitlist' : tier.tagline}
                          </span>
                        </span>
                        <span className="shrink-0 text-sm font-bold text-foreground">{formatBDT(tier.priceBDT)}</span>
                      </Link>
                    );
                  })}
                </div>
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
            className={`transition-colors hover:text-foreground ${faqActive ? 'text-foreground' : ''}`}
          >
            FAQ
          </Link>

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

        <div className="flex items-center gap-2.5">
          <CtaButton to="/checkout" size="sm" className="hidden sm:inline-flex">
            Join Now
          </CtaButton>
          <CtaButton to="/checkout" size="sm" className="px-4 sm:hidden">
            Join
          </CtaButton>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
              >
                <Menu size={19} />
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
                <Link to="/" onClick={close} className="rounded-lg px-3 py-3 transition-colors hover:bg-secondary">
                  Home
                </Link>

                <Accordion type="single" collapsible>
                  <AccordionItem value="curriculum" className="border-none">
                    <AccordionTrigger className={mobileGroupTrigger}>Curriculum</AccordionTrigger>
                    <AccordionContent className="pb-1 pl-3 pt-0">
                      <div className="flex flex-col gap-0.5 border-l border-border pl-3">
                        {chapters.map((chapter) => (
                          <Link
                            key={chapter.slug}
                            to={`/chapter/${chapter.slug}`}
                            onClick={close}
                            className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <span className="font-semibold text-foreground/70">{String(chapter.id).padStart(2, '0')}.</span>{' '}
                            {chapter.title}
                          </Link>
                        ))}
                        <Link
                          to="/curriculum"
                          onClick={close}
                          className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-secondary"
                        >
                          View Full Curriculum <ArrowRight size={14} />
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="programs" className="border-none">
                    <AccordionTrigger className={mobileGroupTrigger}>Programs</AccordionTrigger>
                    <AccordionContent className="pb-1 pl-3 pt-0">
                      <div className="flex flex-col gap-0.5 border-l border-border pl-3">
                        {tiers.map((tier) => (
                          <Link
                            key={tier.id}
                            to={`/programs/${tier.slug}`}
                            onClick={close}
                            className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <span>{tier.name}</span>
                            <span className="shrink-0 text-xs font-semibold text-foreground/70">{formatBDT(tier.priceBDT)}</span>
                          </Link>
                        ))}
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

                <Link to="/faq" onClick={close} className="rounded-lg px-3 py-3 transition-colors hover:bg-secondary">
                  FAQ
                </Link>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-3 transition-colors hover:bg-secondary"
                >
                  <Youtube size={17} className="text-[#FF0000]" strokeWidth={2.2} />
                  Free YouTube Content
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
                <CtaButton to="/checkout" size="md" full onClick={close}>
                  Join Now
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
