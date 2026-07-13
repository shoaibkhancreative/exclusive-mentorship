import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { LegalH2, LegalP, LegalUl, LegalNote } from '@/components/site/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms &amp; Conditions" updated="14 July 2026">
      <LegalP>
        These Terms &amp; Conditions ("Terms") govern your purchase and use of Exclusive Mentorship's educational
        content, tiers, and add-ons (the "Program"). By completing checkout or submitting a Tier 3 application, you
        agree to these Terms in full.
      </LegalP>

      <LegalH2>1. Nature of the Program</LegalH2>
      <LegalP>
        The Program is educational content about trading concepts, market structure, and risk management (including
        "ICT" / Smart Money concepts). Nothing in the Program constitutes financial, investment, or legal advice, and
        no outcome, profit, or trading result is promised or guaranteed. See our{' '}
        <Link to="/disclaimer" className="font-medium text-brand hover:underline">Disclaimer</Link> for full detail.
      </LegalP>

      <LegalH2>2. Eligibility</LegalH2>
      <LegalP>
        The Program is intended for adults aged 18 and over. By purchasing, you confirm you meet this requirement and
        that you are solely responsible for complying with any laws or regulations that apply to you regarding
        trading education or financial markets in your jurisdiction.
      </LegalP>

      <LegalH2>3. Tiers &amp; Add-ons</LegalH2>
      <LegalP>The Program is offered in three tiers, plus standalone add-ons:</LegalP>
      <LegalUl
        items={[
          'Tier 1 — The Retailer Escape: the core recorded course with basic chat support. Add-ons are not included and must be purchased separately.',
          'Tier 2 — Smart Money Arsenal: the core course, Priority Support, Bi-Weekly Live Q&A, and all 3 add-ons included free. Limited to 50 students per batch.',
          'Tier 3 — The Inner Circle: everything in Tier 2 plus a Weekly 1-on-1 Consultation (3 months) and personal portfolio/trade review. Access is by application only and strictly limited to 5 students per month; applicants beyond that cap are placed on a waitlist for the following month.',
          'Standalone Add-ons (Daily Market Insight, Setup Templates, Live Trade Breakdown Archive) may be purchased individually at any time.',
        ]}
      />

      <LegalH2>4. Pricing, Currency &amp; Payment</LegalH2>
      <LegalP>
        Prices are displayed primarily in Bangladeshi Taka (BDT), with an approximate USD/USDT equivalent shown for
        reference. We accept Bkash, Nagad, and Binance UID (USDT). The amount you are asked to pay is confirmed by
        our Telegram bot and verified manually — the figures on this website are estimates for your convenience, and
        the bot is the authoritative source for the exact amount due on your order.
      </LegalP>

      <LegalH2>5. Split Payment (Tier 2 only)</LegalH2>
      <LegalP>
        Tier 2 may be paid in full, or split into two installments totaling more than the one-time price. On payment
        of Installment 1, you receive access to Part 1 (approximately 50%) of the video modules only — add-ons and
        Priority Support are not yet unlocked. Installment 2 must be paid within 30 days of Installment 1; on receipt,
        your full access (remaining videos, all add-ons, and Live Q&A) is unlocked. If Installment 2 is not received
        within that 30-day window, your Part 1 access is paused until payment is completed.
      </LegalP>

      <LegalH2>6. Enrollment, Verification &amp; Delivery</LegalH2>
      <LegalP>
        After checkout, you are directed to our Telegram bot to complete payment and submit proof of payment
        (screenshot). Every payment is verified manually by our team before access is granted — this typically takes
        a few hours, though it may take longer. Course access, add-ons, and any private group/channel invitations are
        delivered via Telegram once verification is complete. No separate account or login is required.
      </LegalP>

      <LegalH2>7. All Sales Are Final</LegalH2>
      <LegalP>
        All purchases across every tier and add-on are final; we do not offer cash refunds. In place of a refund,
        every tier is backed by the ICT Mastery Accountability Protocol: complete 100% of the course videos, maintain
        the provided trading journal, and execute 30 trades on a demo account. If no improvement is observed after
        genuinely meeting all three requirements, our team will personally monitor your live trading for one week and
        provide a free 1-on-1 Live Breakdown Session. This is a diagnostic support commitment, not a monetary
        guarantee, and does not guarantee any specific trading outcome.
      </LegalP>

      <LegalH2>8. Intellectual Property &amp; Personal Use</LegalH2>
      <LegalP>
        All course videos, templates, journals, and written materials remain the intellectual property of Exclusive
        Mentorship. Access is granted to you personally and may not be shared, resold, redistributed, or used to
        create a competing product or service.
      </LegalP>

      <LegalH2>9. Trading Risk Acknowledgment</LegalH2>
      <LegalP>
        Trading financial markets carries substantial risk of loss and is not suitable for everyone. You alone are
        responsible for your own trading decisions, account, and outcomes, whether made during or after the Program.
      </LegalP>

      <LegalH2>10. Changes to Content &amp; Terms</LegalH2>
      <LegalP>
        Pricing, tier composition, and add-on availability may be updated from time to time without prior notice;
        access already granted to you at the time of your purchase will not be revoked or reduced as a result. We may
        update these Terms periodically — continued use of the Program after an update constitutes acceptance of the
        revised Terms.
      </LegalP>

      <LegalH2>11. Governing Law &amp; Contact</LegalH2>
      <LegalP>
        These Terms are intended to be read alongside applicable consumer-protection and digital-commerce law in
        Bangladesh. For questions about these Terms, contact us via our{' '}
        <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="font-medium text-brand hover:underline">
          Telegram support
        </a>.
      </LegalP>

      <LegalNote>
        This page is a general template and not a substitute for legal advice. We'd recommend having it reviewed by a
        lawyer familiar with Bangladeshi e-commerce and digital-service regulations before relying on it.
      </LegalNote>
    </LegalLayout>
  );
}
