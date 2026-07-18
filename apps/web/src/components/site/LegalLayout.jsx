import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';

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
          {updated && <p className="font-bn mt-3 text-sm text-muted-foreground">{updated}</p>}
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
  return <h2 className="font-bn-display mt-10 text-xl font-bold text-foreground first:mt-0">{children}</h2>;
}

export function LegalP({ children }) {
  return <p className="font-bn mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

export function LegalUl({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="font-bn leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalNote({ children }) {
  return (
    <div className="font-bn mt-4 rounded-xl border border-border bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}
