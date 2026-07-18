import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'font-medium text-brand hover:underline';

export const disclaimer = {
  updated: { en: 'Last updated: July 16, 2026', bn: 'সর্বশেষ হালনাগাদ: ১৬ জুলাই, ২০২৬' },

  blocks: [
    {
      type: 'p',
      en: 'Please read this Disclaimer in full, carefully, before purchasing or using any part of the Exclusive Mentorship Program.',
      bn: 'Exclusive Mentorship Program-এর যেকোনো অংশ Purchase বা ব্যবহার করার আগে অনুগ্রহ করে এই Disclaimer সম্পূর্ণভাবে মনোযোগ সহকারে পড়ুন।',
    },
    { type: 'h2', en: '1. Not Financial Advice', bn: '১. আর্থিক পরামর্শ নয়' },
    {
      type: 'p',
      en: 'Everything in this Program — the recorded course, Add-ons, Live Q&A, and any 1-on-1 Session — is educational content only. It should not be treated, and will never be treated, as personal financial, investment, or Trading advice. We are not a Registered Financial Advisor, and nothing here recommends buying, selling, or holding any Financial Instrument.',
      bn: 'এই Program-এর সবকিছু — রেকর্ড করা কোর্স, Add-on, Live Q&A এবং যেকোনো 1-on-1 Session — শুধুমাত্র শিক্ষামূলক Content। এটিকে ব্যক্তিগত আর্থিক, বিনিয়োগ বা Trading সংক্রান্ত পরামর্শ হিসেবে গণ্য করা উচিত নয়, এবং তা কখনোই সেভাবে বিবেচিত হবে না। আমরা কোনো Registered Financial Advisor নই, এবং এখানে থাকা কোনো Content-ই কোনো Financial Instrument কেনা, বিক্রি বা ধরে রাখার সুপারিশ নয়।',
    },
    { type: 'h2', en: '2. Trading Involves Substantial Risk', bn: '২. Trading-এ যথেষ্ট ঝুঁকি জড়িত' },
    {
      type: 'p',
      en: 'Trading Forex, Crypto, Commodities, and other Leveraged Instruments carries substantial risk and is not suitable for everyone. You could lose part of your capital, all of it, or — due to Leverage — even more than that. Only trade with Money you can afford to lose, and independently assess your own financial situation before you start Trading.',
      bn: 'Forex, Crypto, Commodities এবং অন্যান্য Leveraged Instrument-এ Trading করা যথেষ্ট ঝুঁকিপূর্ণ এবং তা সবার জন্য উপযুক্ত নয়। আপনার মূল Capital-এর কিছু অংশ, সম্পূর্ণটাই, অথবা Leverage-এর কারণে তার চেয়েও বেশি হারানোর সম্ভাবনা থাকে। যে Money হারালে আপনার কোনো সমস্যা হবে না, শুধুমাত্র সেই পরিমাণ Money দিয়েই Trading করা উচিত, এবং Trading শুরুর আগে নিজের আর্থিক অবস্থা স্বাধীনভাবে যাচাই করে নেওয়া উচিত।',
    },
    { type: 'h2', en: '3. No Guarantee of Results or Income', bn: '৩. কোনো নির্দিষ্ট ফলাফল বা আয়ের গ্যারান্টি নেই' },
    {
      type: 'p',
      en: 'We make no promise, guarantee, or implication that completing this Program will earn you any specific amount of Profit, Win Rate, or Income, or that you\u2019ll pass any Prop-Firm Challenge. Trading results depend on many factors outside our control — your own Discipline, Risk Management, and the Market Conditions at the time.',
      bn: 'এই Program সম্পূর্ণ করলে আপনি নির্দিষ্ট কোনো পরিমাণ Profit, Win Rate বা Income অর্জন করবেন, কিংবা কোনো Prop-Firm Challenge Pass করবেন — এমন কোনো প্রতিশ্রুতি, নিশ্চয়তা বা ইঙ্গিত আমরা দিই না। Trading-এর ফলাফল অনেকগুলো বিষয়ের ওপর নির্ভর করে যা আমাদের নিয়ন্ত্রণের বাইরে — যেমন আপনার নিজের Discipline, Risk Management এবং তৎকালীন Market Condition।',
    },
    { type: 'h2', en: '4. Past Performance', bn: '৪. অতীত পারফরম্যান্স' },
    {
      type: 'p',
      en: 'Any Historical Chart Example, Backtest, or past Trade Breakdown shown in the course or its Add-ons is for illustration and educational purposes only. Past performance — ours or anyone else\u2019s — is never a guarantee of future results.',
      bn: 'কোর্স বা এর Add-on-এ দেখানো যেকোনো Historical Chart Example, Backtest বা পূর্বের Trade Breakdown শুধুমাত্র উদাহরণ ও শিক্ষামূলক উদ্দেশ্যে দেখানো হয়। অতীতের পারফরম্যান্স — আমাদের হোক বা অন্য কারো — ভবিষ্যৎ ফলাফলের কোনো নিশ্চয়তা দেয় না।',
    },
    { type: 'h2', en: '5. Demo Account Performance', bn: '৫. Demo Account-এর পারফরম্যান্স' },
    {
      type: 'p',
      en: 'One condition of the ICT Mastery Accountability Protocol is completing Trades on a Demo Account. While Demo Account performance is a useful learning signal, it doesn\u2019t fully reflect real Live Market conditions — such as Slippage, psychological pressure, or Liquidity — and doesn\u2019t guarantee the same results on a Live Account.',
      bn: 'ICT Mastery Accountability Protocol-এর একটি শর্ত হলো Demo Account-এ Trade সম্পন্ন করা। Demo Account-এর পারফরম্যান্স শেখার ক্ষেত্রে একটি কার্যকর Signal হলেও, তা Live Market-এর প্রকৃত পরিস্থিতি — যেমন Slippage, মানসিক চাপ, বা Liquidity — পুরোপুরি প্রতিফলিত করে না, এবং Live Account-এ একই ফলাফলের নিশ্চয়তা দেয় না।',
    },
    { type: 'h2', en: '6. The Accountability Protocol Is Not a Profit Guarantee', bn: '৬. Accountability Protocol কোনো Profit-এর গ্যারান্টি নয়' },
    {
      type: 'p',
      en: (
        <>
          If you meet the conditions of the ICT Mastery Accountability Protocol (details in our{' '}
          <Link to="/terms" className={linkCls}>Terms & Conditions</Link> and the Guarantee section on the Homepage)
          and still don\u2019t see results, it provides a Diagnostic Review and extra support from the mentor. This is a
          commitment of additional support only, not a guarantee of future profit.
        </>
      ),
      bn: (
        <>
          ICT Mastery Accountability Protocol (বিস্তারিত আমাদের{' '}
          <Link to="/terms" className={linkCls}>Terms & Conditions</Link> এবং Homepage-এর Guarantee Section-এ) এর শর্ত
          পূরণ করার পরও যদি আপনি ফলাফল না পান, তাহলে এটি একটি Diagnostic Review এবং মেন্টরের অতিরিক্ত সহায়তা প্রদান
          করে। এটি অতিরিক্ত সহায়তার একটি প্রতিশ্রুতি মাত্র, ভবিষ্যতে লাভবান হওয়ার কোনো নিশ্চয়তা নয়।
        </>
      ),
    },
    { type: 'h2', en: '7. Testimonials & Reviews', bn: '৭. Testimonial ও Review' },
    {
      type: 'p',
      en: 'Any Student Testimonial or Rating shown reflects that individual\u2019s own personal experience and opinion. These are not typical or expected results, are not a guarantee of your own results, and should not be relied on to predict what you personally will achieve.',
      bn: 'প্রদর্শিত যেকোনো Student Testimonial বা Rating তাদের নিজস্ব ব্যক্তিগত অভিজ্ঞতা ও মতামতের প্রতিফলন মাত্র। এগুলো সাধারণ বা প্রত্যাশিত ফলাফল নয়, আপনার নিজের ফলাফলের কোনো নিশ্চয়তা নয়, এবং আপনি ব্যক্তিগতভাবে কী অর্জন করবেন তার পূর্বাভাস হিসেবে এর ওপর নির্ভর করা উচিত নয়।',
    },
    { type: 'h2', en: '8. Third-Party Platforms', bn: '৮. Third-Party Platform সমূহ' },
    {
      type: 'ul',
      en: [
        'We are not responsible for the availability, performance, or policies of third-party Platforms used to run this Program, such as Telegram and Binance.',
        'We have no Affiliation with, and receive no Compensation from, any specific Broker or Prop-Trading Firm mentioned in the course.',
      ],
      bn: [
        'এই Program পরিচালনার জন্য ব্যবহৃত Third-Party Platform — যেমন Telegram এবং Binance — এর প্রাপ্যতা, পারফরম্যান্স বা নীতির জন্য আমরা দায়ী নই।',
        'কোর্সে উল্লেখিত কোনো নির্দিষ্ট Broker বা Prop-Trading Firm-এর সাথে আমাদের কোনো Affiliation নেই, এবং তাদের কাছ থেকে আমরা কোনো Compensation গ্রহণ করি না।',
      ],
    },
    { type: 'h2', en: '9. Your Responsibility', bn: '৯. আপনার দায়িত্ব' },
    {
      type: 'p',
      en: 'You alone are responsible for any Trading decision you make during or after this Program, and for independently verifying any information before acting on it.',
      bn: 'এই Program চলাকালীন বা তার পরে আপনি যেকোনো Trading সিদ্ধান্ত নিজে নেন, তার জন্য একমাত্র আপনি নিজেই দায়ী। পাশাপাশি, কোনো তথ্যের ভিত্তিতে পদক্ষেপ নেওয়ার আগে তা স্বাধীনভাবে যাচাই করে নেওয়ার দায়িত্বও আপনার নিজের।',
    },
    {
      type: 'note',
      en: 'This page is a general template and is not a substitute for legal advice. Before relying on it, we recommend having it reviewed by a lawyer experienced in Bangladesh\u2019s consumer-protection and financial-services law.',
      bn: 'এই Page-টি একটি সাধারণ Template এবং আইনি পরামর্শের বিকল্প নয়। নির্ভরযোগ্যভাবে ব্যবহারের আগে বাংলাদেশের Consumer-Protection ও Financial-Services সংক্রান্ত আইনে অভিজ্ঞ কোনো আইনজীবীর মাধ্যমে এটি যাচাই করিয়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।',
    },
  ],
};
