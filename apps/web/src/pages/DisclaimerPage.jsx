import React from 'react';
import LegalLayout, { LegalH2, LegalP, LegalUl } from '@/components/site/LegalLayout';

export default function DisclaimerPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated="14 July 2026">
      <LegalP>
        Please read this Disclaimer carefully before purchasing or using any part of the Exclusive Mentorship
        Program.
      </LegalP>

      <LegalH2>1. Not Financial Advice</LegalH2>
      <LegalP>
        Everything in this Program — the recorded course, add-ons, Live Q&A, and any 1-on-1 sessions — is educational
        content only. It is not, and should not be treated as, personalized financial, investment, or trading advice.
        We are not registered financial advisors, and nothing here is a recommendation to buy, sell, or hold any
        financial instrument.
      </LegalP>

      <LegalH2>2. Trading Involves Substantial Risk</LegalH2>
      <LegalP>
        Trading forex, crypto, commodities, and other leveraged instruments carries a high level of risk and may not
        be suitable for everyone. It is possible to lose some, all, or — with leverage — more than your original
        capital. You should only trade with money you can afford to lose, and should independently assess your own
        financial situation before doing so.
      </LegalP>

      <LegalH2>3. No Guaranteed Results or Income</LegalH2>
      <LegalP>
        We do not promise, guarantee, or imply that you will achieve any particular level of profit, win rate, or
        income by completing this Program, nor that you will pass any prop-firm challenge. Trading outcomes depend on
        many factors outside our control, including your own discipline, risk management, and market conditions.
      </LegalP>

      <LegalH2>4. Past Performance</LegalH2>
      <LegalP>
        Any historical chart examples, backtests, or past trade breakdowns shown in the course or its add-ons are for
        illustrative and educational purposes only. Past performance — ours or anyone else's — is not indicative of
        future results.
      </LegalP>

      <LegalH2>5. Demo Account Performance</LegalH2>
      <LegalP>
        The ICT Mastery Accountability Protocol asks you to execute trades on a demo account as part of its
        requirements. Demo-account performance is a useful learning signal, but it does not replicate live-market
        conditions such as slippage, emotion, or liquidity, and does not guarantee equivalent results on a live
        account.
      </LegalP>

      <LegalH2>6. The Accountability Protocol Is Not a Profit Guarantee</LegalH2>
      <LegalP>
        The ICT Mastery Accountability Protocol (see our Terms and the homepage Guarantee section) provides a
        diagnostic review and additional mentor support if you meet its requirements and are still not seeing
        results. It is a commitment to additional support, not a promise of eventual profitability.
      </LegalP>

      <LegalH2>7. Testimonials &amp; Reviews</LegalH2>
      <LegalP>
        Any student testimonials or ratings shown reflect individual experiences and opinions. They are not typical,
        are not a guarantee of your own results, and should not be relied upon as a predictor of what you will
        personally achieve.
      </LegalP>

      <LegalH2>8. Third-Party Platforms</LegalH2>
      <LegalUl
        items={[
          'We are not responsible for the availability, performance, or policies of third-party platforms used to run this Program, including Telegram, Bkash, Nagad, Binance, and Google Forms.',
          'We are not affiliated with, and do not receive compensation from, any specific broker or prop-trading firm mentioned in the course.',
        ]}
      />

      <LegalH2>9. Your Responsibility</LegalH2>
      <LegalP>
        You are solely responsible for any trading decisions you make, whether during or after this Program, and for
        independently verifying any information before acting on it.
      </LegalP>
    </LegalLayout>
  );
}
