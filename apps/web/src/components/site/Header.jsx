import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Menu, Youtube } from 'lucide-react';
import CtaButton from './CtaButton';
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '@/components/ui/sheet';

const YOUTUBE_URL = 'https://www.youtube.com/@WeAreNLT';

const navLinks = [
  { label: 'Curriculum', to: '/curriculum' },
  { label: 'Compare Tiers', to: '/compare-tiers' },
  { label: 'FAQ', to: '/faq' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

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
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
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
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={close} className="rounded-lg px-3 py-3 transition-colors hover:bg-secondary">
                    {link.label}
                  </Link>
                ))}
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
