import React from 'react';
import LegalLayout, { LegalBlocks } from '@/components/site/LegalLayout';
import { terms } from '@/i18n/content/terms';

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms &amp; Conditions" updated={terms.updated}>
      <LegalBlocks blocks={terms.blocks} />
    </LegalLayout>
  );
}
