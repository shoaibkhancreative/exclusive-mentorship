import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { LegalH2, LegalP, LegalUl, LegalNote } from '@/components/site/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms &amp; Conditions" updated="সর্বশেষ হালনাগাদ: ১৬ জুলাই, ২০২৬">
      <LegalP>
        এই Terms & Conditions ("Terms") Exclusive Mentorship-এর শিক্ষামূলক Content, বিভিন্ন Tier এবং Add-on
        (একত্রে "Program") ক্রয় ও ব্যবহারের ক্ষেত্রে প্রযোজ্য। Checkout সম্পন্ন করা কিংবা Tier 3-এর জন্য
        Enroll করা মাত্রই আপনি এই সম্পূর্ণ Terms-এর সাথে সম্মত হচ্ছেন বলে গণ্য হবে।
      </LegalP>

      <LegalH2>1. সংজ্ঞা (Definitions)</LegalH2>
      <LegalP>এই Terms-এ ব্যবহৃত কিছু শব্দের অর্থ শুরুতেই স্পষ্ট করে নেওয়া ভালো:</LegalP>
      <LegalUl
        items={[
          '"আমরা", "আমাদের" বা "Exclusive Mentorship" বলতে এই Program পরিচালনাকারী Team-কে বোঝানো হয়েছে।',
          '"আপনি" বা "Student" বলতে যিনি এই Program-এ Enroll করেছেন, করার প্রক্রিয়ায় আছেন, অথবা শুধু একটি Add-on কিনেছেন — তাকে বোঝানো হয়েছে।',
          '"Program" বলতে কোর্সের সবগুলো Chapter, Class, Add-on, Live Q&A এবং 1-on-1 Consultation-সহ এর সাথে সম্পর্কিত সব Content ও Service-কে একত্রে বোঝানো হয়েছে।',
          '"Content" বলতে Program-এর মাধ্যমে সরবরাহকৃত যেকোনো Video, Chart Template, Trading Journal বা লিখিত উপকরণকে বোঝানো হয়েছে।',
        ]}
      />

      <LegalH2>2. প্রোগ্রামের প্রকৃতি</LegalH2>
      <LegalP>
        এই Program মূলত Trading Concept, Market Structure এবং Risk Management সংক্রান্ত একটি শিক্ষামূলক
        Content, যার মূল ভিত্তি "ICT" তথা Smart Money Concept। এই Program-এর কোনো অংশই কোনো ধরনের আর্থিক,
        বিনিয়োগ বা আইনি পরামর্শ নয়, এবং কোনো নির্দিষ্ট ফলাফল, লাভ বা Trading Result-এর নিশ্চয়তা এখানে দেওয়া
        হয় না, দেওয়া হয়নি, এবং কখনো দেওয়া হবে না। বিস্তারিত জানতে আমাদের{' '}
        <Link to="/disclaimer" className="font-medium text-brand hover:underline">Disclaimer</Link> পেজটি দেখুন।
      </LegalP>

      <LegalH2>3. যোগ্যতা</LegalH2>
      <LegalP>
        এই Program শুধুমাত্র ১৮ বছর বা তার বেশি বয়সী প্রাপ্তবয়স্কদের জন্য প্রযোজ্য। Purchase সম্পন্ন করার
        মাধ্যমে আপনি নিশ্চিত করছেন যে আপনি এই বয়সসীমা পূরণ করেন, এবং নিজের Jurisdiction-এ Trading Education বা
        Financial Market সংক্রান্ত যেকোনো আইন বা বিধি-নিষেধ মেনে চলার দায়িত্ব সম্পূর্ণভাবে আপনার নিজের।
      </LegalP>

      <LegalH2>4. Tier ও Add-on সমূহ</LegalH2>
      <LegalP>এই Program তিনটি Tier এবং কিছু Standalone Add-on আকারে প্রদান করা হয়:</LegalP>
      <LegalUl
        items={[
          'Tier 1 — The Retailer Escape: মূল ৫-Chapter রেকর্ড করা কোর্স এবং সাধারণ Chat Support। এখানে কোনো Add-on অন্তর্ভুক্ত নেই, প্রয়োজন হলে আলাদাভাবে কিনতে হবে।',
          'Tier 2 — Smart Money Arsenal: মূল কোর্সের পাশাপাশি Priority Support, Bi-Weekly Live Q&A, এবং ৩টি Add-on সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত। প্রতি Batch-এ সর্বোচ্চ ৫০ জন Student ভর্তি করা হয়।',
          'Tier 3 — The Inner Circle: Tier 2-এর সবকিছুর পাশাপাশি ৩ মাসের Weekly 1-on-1 Consultation এবং ব্যক্তিগত Portfolio/Trade Review। প্রতি মাসে কঠোরভাবে মাত্র ৫ জন Student-এর জন্য সিট খোলা থাকে; সংখ্যা পূর্ণ হয়ে গেলে নতুন আবেদনকারীদের পরবর্তী মাসের জন্য Waitlist-এ রাখা হয়।',
          'Standalone Add-on (Daily Market Insight, Setup Templates, Live Trade Breakdown Archive) যেকোনো সময় আলাদাভাবে কেনা যায়, কোনো Tier ছাড়াই।',
        ]}
      />

      <LegalH2>5. মূল্য, Currency ও Payment পদ্ধতি</LegalH2>
      <LegalP>
        এই Website-এ সকল মূল্য শুধুমাত্র USD (USDT)-তে দেখানো হয় — এই Website-ই আমাদের একমাত্র ও চূড়ান্ত
        Pricing-এর উৎস। Payment গ্রহণ করা হয় Binance UID এবং সরাসরি USDT (TRC20) Wallet Address-এর মাধ্যমে।
        Checkout-এ আপনি যে Package, Add-on বা Payment Plan বেছে নেবেন, আমাদের Telegram Bot শুধু সেই একই
        Amount Confirm করে এবং আপনার Payment-এর Screenshot ম্যানুয়ালি যাচাই করে Access প্রদান করে।
      </LegalP>

      <LegalH2>6. Split Payment (শুধুমাত্র Tier 2)</LegalH2>
      <LegalP>
        Tier 2 চাইলে একবারে, অথবা দুই Installment-এ ভাগ করে পরিশোধ করা যায় — তবে ভাগ করে পরিশোধ করলে মোট
        খরচ একবারে পরিশোধের চেয়ে কিছুটা বেশি হয়। প্রথম Installment পরিশোধ করলে Video Module-এর Part 1
        (আনুমানিক ৫০%) Unlock হয়; তখনো Add-on ও Priority Support Unlock হয় না। দ্বিতীয় Installment অবশ্যই
        প্রথম Installment-এর ৩০ দিনের মধ্যে পরিশোধ করতে হবে; তা পাওয়ার পর আপনার সম্পূর্ণ Access (বাকি Video,
        সব Add-on, এবং Live Q&A) Unlock হয়ে যায়। এই ৩০ দিনের মধ্যে দ্বিতীয় Installment পরিশোধ না হলে, তা
        সম্পন্ন না হওয়া পর্যন্ত Part 1-এর Access সাময়িকভাবে বন্ধ থাকবে।
      </LegalP>

      <LegalH2>7. Enrollment, Verification ও Delivery</LegalH2>
      <LegalP>
        Checkout সম্পন্ন করার পর আপনাকে আমাদের Telegram Bot-এ পাঠানো হবে, যেখানে Payment সম্পন্ন করে তার
        প্রমাণ (Screenshot) জমা দিতে হবে। Access প্রদানের আগে প্রতিটি Payment আমাদের Team ব্যক্তিগতভাবে
        ম্যানুয়ালি যাচাই করে — সাধারণত এতে কয়েক ঘণ্টা সময় লাগে, তবে কখনো কখনো এর চেয়ে বেশি সময়ও লাগতে পারে।
        Verification সম্পন্ন হওয়ার পর কোর্স Access, Add-on এবং যেকোনো Private Group/Channel-এর Invitation
        Telegram-এর মাধ্যমেই Deliver করা হয়। এর জন্য আলাদা কোনো Account বা Login-এর প্রয়োজন নেই।
      </LegalP>

      <LegalH2>8. সকল বিক্রয় চূড়ান্ত — এবং আমাদের Guarantee</LegalH2>
      <LegalP>
        প্রতিটি Tier ও Add-on-এর সব Purchase চূড়ান্ত (Final); আমরা কোনো নগদ Refund প্রদান করি না। Refund-এর
        পরিবর্তে, প্রতিটি Tier-এর সাথে থাকছে ICT Mastery Accountability Protocol: কোর্সের ১০০% Video সম্পূর্ণ
        দেখা, প্রদত্ত Trading Journal নিয়মিত Maintain করা, এবং Demo Account-এ ৩০টি Trade সম্পন্ন করা। এই
        তিনটি শর্ত প্রকৃতপক্ষে পূরণ করার পরও যদি কোনো উন্নতি লক্ষ্য না করেন, তাহলে আমাদের Team ব্যক্তিগতভাবে
        এক সপ্তাহ ধরে আপনার Live Trading পর্যবেক্ষণ করবে এবং একটি সম্পূর্ণ বিনামূল্যের 1-on-1 Live Breakdown
        Session পরিচালনা করবে। এটি একটি Diagnostic Support Commitment, কোনো আর্থিক গ্যারান্টি নয়, এবং এটি
        কোনো নির্দিষ্ট Trading Result-এর নিশ্চয়তা দেয় না। উল্লেখ্য, এই Protocol শুধুমাত্র Tier Enrollment-এর
        সাথে প্রযোজ্য — শুধু Add-on ক্রয়ের ক্ষেত্রে এটি প্রযোজ্য নয়, কারণ এর শর্ত পূরণ করতে হলে সম্পূর্ণ
        কোর্সসহ একটি Tier-এ Enroll করা আবশ্যক।
      </LegalP>

      <LegalH2>9. Intellectual Property ও ব্যক্তিগত ব্যবহার</LegalH2>
      <LegalP>
        কোর্সের সব Video, Template, Journal এবং লিখিত উপকরণ Exclusive Mentorship-এর Intellectual Property
        হিসেবে সংরক্ষিত থাকে। আপনাকে ব্যক্তিগতভাবে Access দেওয়া হয়, যা Share, Resell, Redistribute করা কিংবা
        এর ভিত্তিতে প্রতিদ্বন্দ্বী কোনো Product বা Service তৈরির উদ্দেশ্যে ব্যবহার করা যাবে না।
      </LegalP>

      <LegalH2>10. Trading Risk স্বীকৃতি ও দায়বদ্ধতার সীমাবদ্ধতা</LegalH2>
      <LegalP>
        Financial Market-এ Trading করা যথেষ্ট ঝুঁকিপূর্ণ এবং তা সবার জন্য উপযুক্ত নয়। Program চলাকালীন বা
        পরবর্তীতে আপনার নিজের সব Trading সিদ্ধান্ত, Account এবং তার ফলাফলের জন্য একমাত্র আপনি নিজেই দায়ী।
        আইন দ্বারা সর্বোচ্চ অনুমোদিত সীমা পর্যন্ত, Program ব্যবহারের ফলে সৃষ্ট কোনো প্রত্যক্ষ, পরোক্ষ,
        আনুষঙ্গিক বা ফলস্বরূপ ক্ষতি (যেমন কোনো Trading Loss)-এর জন্য Exclusive Mentorship বা এর Team দায়ী
        থাকবে না।
      </LegalP>

      <LegalH2>11. যোগাযোগ ও Notice</LegalH2>
      <LegalP>
        Order, Enrollment বা Support সংক্রান্ত সব যোগাযোগ আমাদের Telegram Bot-এর মাধ্যমেই পরিচালিত হয়। এই
        Terms বা Program সংক্রান্ত যেকোনো গুরুত্বপূর্ণ Notice আমরা একইভাবে Telegram-এর মাধ্যমে, অথবা এই
        Website Update করে জানিয়ে দেব।
      </LegalP>

      <LegalH2>12. Content ও Terms-এ পরিবর্তন</LegalH2>
      <LegalP>
        পূর্ব ঘোষণা ছাড়াই মূল্য, Tier-এর গঠন এবং Add-on-এর প্রাপ্যতা পরিবর্তন হতে পারে; তবে Purchase করার
        সময় আপনাকে দেওয়া Access পরবর্তীতে কমানো বা বাতিল করা হবে না। আমরা মাঝে মাঝে এই Terms Update করতে
        পারি — Update-এর পরও Program ব্যবহার চালিয়ে যাওয়া মানে হলো, আপনি সংশোধিত Terms-এর সাথে সম্মত।
      </LegalP>

      <LegalH2>13. সাধারণ শর্তাবলী</LegalH2>
      <LegalP>
        এই Terms-এর কোনো একটি ধারা যদি কোনো আদালত কর্তৃক অকার্যকর বা প্রয়োগযোগ্য নয় বলে বিবেচিত হয়, তাহলে
        বাকি ধারাগুলো পূর্ণ কার্যকর থাকবে। এই Terms, আমাদের{' '}
        <Link to="/privacy" className="font-medium text-brand hover:underline">Privacy Policy</Link> ও{' '}
        <Link to="/disclaimer" className="font-medium text-brand hover:underline">Disclaimer</Link>-সহ, Program
        সংক্রান্ত আপনার ও Exclusive Mentorship-এর মধ্যে সম্পূর্ণ সমঝোতা গঠন করে।
      </LegalP>

      <LegalH2>14. Governing Law ও Contact</LegalH2>
      <LegalP>
        এই Terms বাংলাদেশে প্রযোজ্য Consumer-Protection ও Digital-Commerce সংক্রান্ত আইনের সাথে সামঞ্জস্য রেখে
        পড়ার উদ্দেশ্যে তৈরি। এই Terms সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের{' '}
        <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="font-medium text-brand hover:underline">
          Telegram Support
        </a>-এ যোগাযোগ করুন।
      </LegalP>

      <LegalNote>
        এই Page-টি একটি সাধারণ Template, এবং এটি আইনি পরামর্শের বিকল্প নয়। নির্ভরযোগ্যভাবে ব্যবহারের আগে
        বাংলাদেশের E-commerce ও Digital-Service সংক্রান্ত আইনে অভিজ্ঞ কোনো আইনজীবীর মাধ্যমে এটি যাচাই করিয়ে
        নেওয়ার পরামর্শ দেওয়া হচ্ছে।
      </LegalNote>
    </LegalLayout>
  );
}
