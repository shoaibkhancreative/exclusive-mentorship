import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import { pick } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export default function LegalLayout({ eyebrow, title, updated, children }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo title={title} />
      <Header />
      <section className="border-b border-border bg-secondary/40 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to home
          </Link>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-muted-foreground">{pick(updated)}</p>}
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6">{children}</div>
      </section>
      <Footer />
    </div>
  );
}

export function LegalH2({ children }) {
  return <h2 className="mt-10 font-display text-xl font-bold text-foreground first:mt-0">{children}</h2>;
}

export function LegalP({ children }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

export function LegalUl({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalNote({ children }) {
  return (
    <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

// Shared renderer for the `blocks` arrays defined in src/i18n/content/*.jsx
// (terms, privacy, disclaimer). Each block is { type: 'p' | 'h2' | 'ul' | 'note',
// en: ..., bn: ... } -- only the English copy is ever rendered now. 'p' and
// 'note' may hold JSX (e.g. inline <Link> elements), 'ul' holds an array of
// strings/JSX.
export function LegalBlocks({ blocks }) {
  return blocks.map((block, i) => {
    const content = pick(block);
    switch (block.type) {
      case 'h2':
        return <LegalH2 key={i}>{content}</LegalH2>;
      case 'ul':
        return <LegalUl key={i} items={content} />;
      case 'note':
        return <LegalNote key={i}>{content}</LegalNote>;
      case 'p':
      default:
        return <LegalP key={i}>{content}</LegalP>;
    }
  });
}
