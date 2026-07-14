import React from 'react';
import { PenLine } from 'lucide-react';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// For content that depends on real, specific input from the site owner
// (a mentor's real bio, genuine student reviews) and cannot be responsibly
// invented on their behalf. A dashed, clearly-editorial card reads to any
// visitor as "unfinished on purpose", never as broken or, worse, fabricated
// copy pretending to be real.
// ---------------------------------------------------------------------------
export default function ContentPlaceholder({ title, description, className = '', dark = false, align = 'center' }) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'rounded-2xl border-2 border-dashed p-6',
        centered ? 'text-center' : 'text-left',
        dark
          ? 'border-navy-foreground/20 bg-navy-foreground/[0.04]'
          : 'border-border bg-tint/70',
        className
      )}
    >
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full',
          centered && 'mx-auto',
          dark ? 'bg-navy-foreground/10 text-navy-foreground/60' : 'bg-background text-muted-foreground'
        )}
      >
        <PenLine size={16} strokeWidth={2} />
      </span>
      <p className={cn('mt-3 text-sm font-semibold', dark ? 'text-navy-foreground/85' : 'text-foreground')}>
        {title}
      </p>
      {description && (
        <p
          className={cn(
            'mt-1.5 text-xs leading-relaxed',
            centered ? 'mx-auto max-w-sm' : 'max-w-md',
            dark ? 'text-navy-foreground/55' : 'text-muted-foreground'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
