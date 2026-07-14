import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// One button system for the entire marketing site. Every call-to-action —
// header, hero, curriculum, pricing tiers, guarantee, closing banner — draws
// from this single source so padding, radius, weight and hover/focus states
// can never quietly drift apart between sections again.
// ---------------------------------------------------------------------------

const variants = {
  primary: 'bg-primary text-primary-foreground shadow-soft hover:brightness-110',
  onDark: 'bg-brand text-brand-foreground shadow-soft hover:brightness-110',
  outline: 'border border-border bg-background text-foreground hover:bg-secondary',
  outlineOnDark: 'border border-navy-foreground/25 text-navy-foreground hover:bg-navy-foreground/10',
  gold: 'bg-gold text-navy hover:brightness-105',
  ghost: 'text-brand hover:underline underline-offset-4',
};

const sizes = {
  lg: 'px-7 py-4 text-base',
  md: 'px-6 py-3 text-sm',
  sm: 'px-5 py-2.5 text-sm',
};

export default function CtaButton({
  to,
  href,
  variant = 'primary',
  size = 'md',
  full = false,
  className = '',
  children,
  ...props
}) {
  const isGhost = variant === 'ghost';
  const classes = cn(
    'focus-ring group inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-[0.98]',
    !isGhost && 'rounded-full',
    !isGhost && sizes[size],
    full && 'w-full',
    variants[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}
