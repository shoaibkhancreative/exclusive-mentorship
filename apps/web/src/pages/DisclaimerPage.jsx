import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { LegalH2, LegalP, LegalUl, LegalNote } from '@/components/site/LegalLayout';

export default function DisclaimerPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Disclaimer" updated="সর্বশেষ হালনাগাদ: ১৬ জুলাই, ২০২৬">
      <LegalP>
        Exclusive Mentorship Program-এর যেকোনো অংশ Purchase বা ব্যবহার করার আগে অনুগ্রহ করে এই Disclaimer
        সম্পূর্ণভাবে মনোযোগ সহকারে পড়ুন।
      </LegalP>

      <LegalH2>1. আর্থিক পরামর্শ নয়</LegalH2>
      <LegalP>
        এই Program-এর সবকিছু — রেকর্ড করা কোর্স, Add-on, Live Q&A এবং যেকোনো 1-on-1 Session — শুধুমাত্র
        শিক্ষামূলক Content। এটিকে ব্যক্তিগত আর্থিক, বিনিয়োগ বা Trading সংক্রান্ত পরামর্শ হিসেবে গণ্য করা উচিত
        নয়, এবং তা কখনোই সেভাবে বিবেচিত হবে না। আমরা কোনো Registered Financial Advisor নই, এবং এখানে থাকা
        কোনো Content-ই কোনো Financial Instrument কেনা, বিক্রি বা ধরে রাখার সুপারিশ নয়।
      </LegalP>

      <LegalH2>2. Trading-এ যথেষ্ট ঝুঁকি জড়িত</LegalH2>
      <LegalP>
        Forex, Crypto, Commodities এবং অন্যান্য Leveraged Instrument-এ Trading করা যথেষ্ট ঝুঁকিপূর্ণ এবং তা
        সবার জন্য উপযুক্ত নয়। আপনার মূল Capital-এর কিছু অংশ, সম্পূর্ণটাই, অথবা Leverage-এর কারণে তার চেয়েও
        বেশি হারানোর সম্ভাবনা থাকে। যে Money হারালে আপনার কোনো সমস্যা হবে না, শুধুমাত্র সেই পরিমাণ Money দিয়েই
        Trading করা উচিত, এবং Trading শুরুর আগে নিজের আর্থিক অবস্থা স্বাধীনভাবে যাচাই করে নেওয়া উচিত।
      </LegalP>

      <LegalH2>3. কোনো নির্দিষ্ট ফলাফল বা আয়ের গ্যারান্টি নেই</LegalH2>
      <LegalP>
        এই Program সম্পূর্ণ করলে আপনি নির্দিষ্ট কোনো পরিমাণ Profit, Win Rate বা Income অর্জন করবেন, কিংবা
        কোনো Prop-Firm Challenge Pass করবেন — এমন কোনো প্রতিশ্রুতি, নিশ্চয়তা বা ইঙ্গিত আমরা দিই না। Trading-এর
        ফলাফল অনেকগুলো বিষয়ের ওপর নির্ভর করে যা আমাদের নিয়ন্ত্রণের বাইরে — যেমন আপনার নিজের Discipline, Risk
        Management এবং তৎকালীন Market Condition।
      </LegalP>

      <LegalH2>4. অতীত পারফরম্যান্স</LegalH2>
      <LegalP>
        কোর্স বা এর Add-on-এ দেখানো যেকোনো Historical Chart Example, Backtest বা পূর্বের Trade Breakdown
        শুধুমাত্র উদাহরণ ও শিক্ষামূলক উদ্দেশ্যে দেখানো হয়। অতীতের পারফরম্যান্স — আমাদের হোক বা অন্য কারো —
        ভবিষ্যৎ ফলাফলের কোনো নিশ্চয়তা দেয় না।
      </LegalP>

      <LegalH2>5. Demo Account-এর পারফরম্যান্স</LegalH2>
      <LegalP>
        ICT Mastery Accountability Protocol-এর একটি শর্ত হলো Demo Account-এ Trade সম্পন্ন করা। Demo
        Account-এর পারফরম্যান্স শেখার ক্ষেত্রে একটি কার্যকর Signal হলেও, তা Live Market-এর প্রকৃত পরিস্থিতি —
        যেমন Slippage, মানসিক চাপ, বা Liquidity — পুরোপুরি প্রতিফলিত করে না, এবং Live Account-এ একই ফলাফলের
        নিশ্চয়তা দেয় না।
      </LegalP>

      <LegalH2>6. Accountability Protocol কোনো Profit-এর গ্যারান্টি নয়</LegalH2>
      <LegalP>
        ICT Mastery Accountability Protocol (বিস্তারিত আমাদের{' '}
        <Link to="/terms" className="font-medium text-brand hover:underline">Terms & Conditions</Link> এবং
        Homepage-এর Guarantee Section-এ) এর শর্ত পূরণ করার পরও যদি আপনি ফলাফল না পান, তাহলে এটি একটি
        Diagnostic Review এবং মেন্টরের অতিরিক্ত সহায়তা প্রদান করে। এটি অতিরিক্ত সহায়তার একটি প্রতিশ্রুতি মাত্র,
        ভবিষ্যতে লাভবান হওয়ার কোনো নিশ্চয়তা নয়।
      </LegalP>

      <LegalH2>7. Testimonial ও Review</LegalH2>
      <LegalP>
        প্রদর্শিত যেকোনো Student Testimonial বা Rating তাদের নিজস্ব ব্যক্তিগত অভিজ্ঞতা ও মতামতের প্রতিফলন
        মাত্র। এগুলো সাধারণ বা প্রত্যাশিত ফলাফল নয়, আপনার নিজের ফলাফলের কোনো নিশ্চয়তা নয়, এবং আপনি
        ব্যক্তিগতভাবে কী অর্জন করবেন তার পূর্বাভাস হিসেবে এর ওপর নির্ভর করা উচিত নয়।
      </LegalP>

      <LegalH2>8. Third-Party Platform সমূহ</LegalH2>
      <LegalUl
        items={[
          'এই Program পরিচালনার জন্য ব্যবহৃত Third-Party Platform — যেমন Telegram, Bkash, Nagad এবং Binance — এর প্রাপ্যতা, পারফরম্যান্স বা নীতির জন্য আমরা দায়ী নই।',
          'কোর্সে উল্লেখিত কোনো নির্দিষ্ট Broker বা Prop-Trading Firm-এর সাথে আমাদের কোনো Affiliation নেই, এবং তাদের কাছ থেকে আমরা কোনো Compensation গ্রহণ করি না।',
        ]}
      />

      <LegalH2>9. আপনার দায়িত্ব</LegalH2>
      <LegalP>
        এই Program চলাকালীন বা তার পরে আপনি যেকোনো Trading সিদ্ধান্ত নিজে নেন, তার জন্য একমাত্র আপনি নিজেই
        দায়ী। পাশাপাশি, কোনো তথ্যের ভিত্তিতে পদক্ষেপ নেওয়ার আগে তা স্বাধীনভাবে যাচাই করে নেওয়ার দায়িত্বও
        আপনার নিজের।
      </LegalP>

      <LegalNote>
        এই Page-টি একটি সাধারণ Template এবং আইনি পরামর্শের বিকল্প নয়। নির্ভরযোগ্যভাবে ব্যবহারের আগে
        বাংলাদেশের Consumer-Protection ও Financial-Services সংক্রান্ত আইনে অভিজ্ঞ কোনো আইনজীবীর মাধ্যমে এটি
        যাচাই করিয়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।
      </LegalNote>
    </LegalLayout>
  );
}
