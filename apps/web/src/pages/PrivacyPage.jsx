import React from 'react';
import LegalLayout, { LegalH2, LegalP, LegalUl, LegalNote } from '@/components/site/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="14 July 2026">
      <LegalP>
        This Privacy Policy explains what information Exclusive Mentorship collects when you check out, apply for
        Tier 3, or contact us, and how that information is used.
      </LegalP>

      <LegalH2>1. Information We Collect</LegalH2>
      <LegalUl
        items={[
          'Contact details you provide at checkout: full name, and at least one of phone number, email address, or Telegram username.',
          'Payment proof: screenshots of your Bkash, Nagad, or Binance transaction, sent to our Telegram bot to verify your payment.',
          'Telegram account information (such as your username and user ID) as made available to our bot when you start a conversation with it.',
          'For Tier 3 applicants: whatever information you submit on the VIP application form (a Google Form).',
          'Basic, non-identifying usage data (such as page views) if we enable analytics on this website.',
        ]}
      />

      <LegalH2>2. How We Use This Information</LegalH2>
      <LegalUl
        items={[
          'To verify your payment manually and grant access to the correct tier, add-ons, or private channels.',
          'To communicate with you about your order, your enrollment, or support requests.',
          'To screen and select applicants for the limited Tier 3 — Inner Circle seats, and to manage the Tier 3 waitlist.',
          'To maintain records required for our own accounting and fraud-prevention purposes.',
        ]}
      />

      <LegalH2>3. Manual Review</LegalH2>
      <LegalP>
        Because every payment is verified manually to guard against fraudulent or fake payment screenshots, a member
        of our team will personally view the payment proof and contact details you submit. Please only send genuine
        payment screenshots and accurate contact information.
      </LegalP>

      <LegalH2>4. Third-Party Services</LegalH2>
      <LegalP>
        We rely on third-party platforms to operate the Program, each with its own privacy practices that we don't
        control:
      </LegalP>
      <LegalUl
        items={[
          'Telegram — used to run our enrollment bot, deliver course access, and provide support.',
          'Bkash, Nagad, and Binance — payment platforms used to receive your payment; we only see what you choose to share as proof of payment.',
          'Google Forms — used to collect Tier 3 (VIP) applications, governed by Google\'s own privacy policy.',
        ]}
      />
      <LegalP>We encourage you to review each platform's own privacy policy before using it to contact or pay us.</LegalP>

      <LegalH2>5. Data Retention &amp; Security</LegalH2>
      <LegalP>
        We retain enrollment and payment-verification records for as long as reasonably necessary for support,
        accounting, and fraud-prevention purposes. We take reasonable steps to protect the information you share with
        us, but no method of electronic storage or transmission (including via Telegram or Google Forms) is
        completely secure.
      </LegalP>

      <LegalH2>6. Your Choices</LegalH2>
      <LegalP>
        You can ask us what information we hold about you, or request that we delete contact information we no longer
        need for support or record-keeping purposes, by messaging our Telegram support.
      </LegalP>

      <LegalH2>7. Children's Privacy</LegalH2>
      <LegalP>
        The Program is not directed at, and is not intended to be used by, anyone under 18. We do not knowingly
        collect information from minors.
      </LegalP>

      <LegalH2>8. Changes to This Policy</LegalH2>
      <LegalP>
        We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last
        updated" date above.
      </LegalP>

      <LegalH2>9. Contact</LegalH2>
      <LegalP>
        Questions about this policy or your information can be sent via our{' '}
        <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="font-medium text-brand hover:underline">
          Telegram support
        </a>.
      </LegalP>

      <LegalNote>
        This page is a general template and not a substitute for legal advice. We'd recommend having it reviewed by a
        lawyer familiar with Bangladeshi data-protection and digital-commerce regulations before relying on it.
      </LegalNote>
    </LegalLayout>
  );
}
