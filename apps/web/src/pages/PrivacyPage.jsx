import React from 'react';
import LegalLayout, { LegalBlocks } from '@/components/site/LegalLayout';
import { privacy } from '@/i18n/content/privacy';

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated={privacy.updated}>
      <LegalBlocks blocks={privacy.blocks} />
    </LegalLayout>
  );
}
