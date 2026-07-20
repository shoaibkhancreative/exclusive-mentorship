import React from 'react';
import { Compass } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Seo from '@/components/site/Seo';
import CtaButton from '@/components/site/CtaButton';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo title="Page Not Found" description="This page doesn't exist or may have moved." />
      <Header />

      <section className="flex flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-muted-foreground">
          <Compass size={26} strokeWidth={1.75} />
        </span>
        <p className="mt-6 font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist, or may have moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton to="/" variant="primary" size="md">Back to home</CtaButton>
          <CtaButton to="/faq" variant="outline" size="md">Visit the FAQ</CtaButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
