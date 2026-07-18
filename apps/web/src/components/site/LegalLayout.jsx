import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';
import { useLanguage, pick } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export default function LegalLayout({ eyebrow, title, updated, children }) {
  const { lang } = useLanguage();
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
          {updated && (
            <p className={cn('mt-3 text-sm text-muted-foreground', lang === 'bn' && 'font-bn')}>{pick(lang, updated)}</p>
          )}
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
  const { lang } = useLanguage();
  return (
    <h2 className={cn('mt-10 text-xl font-bold text-foreground first:mt-0', lang === 'bn' ? 'font-bn-display' : 'font-display')}>
      {children}
    </h2>
  );
}

export function LegalP({ children }) {
  const { lang } = useLanguage();
  return <p className={cn('mt-4 leading-relaxed text-muted-foreground', lang === 'bn' && 'font-bn')}>{children}</p>;
}

export function LegalUl({ items }) {
  const { lang } = useLanguage();
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className={cn('leading-relaxed', lang === 'bn' && 'font-bn')}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalNote({ children }) {
  const { lang } = useLanguage();
  return (
    <div
      className={cn(
        'mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground',
        lang === 'bn' && 'font-bn'
      )}
    >
      {children}
    </div>
  );
}

// Shared renderer for the bilingual `blocks` arrays defined in
// src/i18n/content/*.jsx (terms, privacy, disclaimer). Each block is
// { type: 'p' | 'h2' | 'ul' | 'note', en: ..., bn: ... } -- 'p' and 'note' may
// hold JSX (e.g. inline <Link> elements), 'ul' holds an array of strings/JSX.
export function LegalBlocks({ blocks }) {
  const { lang } = useLanguage();
  return blocks.map((block, i) => {
    const content = pick(lang, block);
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
