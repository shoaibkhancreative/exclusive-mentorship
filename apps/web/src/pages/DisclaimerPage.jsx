import React from 'react';
import LegalLayout, { LegalBlocks } from '@/components/site/LegalLayout';
import { disclaimer } from '@/i18n/content/disclaimer';

export default function DisclaimerPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated={disclaimer.updated}>
      <LegalBlocks blocks={disclaimer.blocks} />
    </LegalLayout>
  );
}
