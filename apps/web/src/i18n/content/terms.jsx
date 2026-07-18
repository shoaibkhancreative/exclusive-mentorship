import React from 'react';
import { Link } from 'react-router-dom';

const linkCls = 'font-medium text-brand hover:underline';

export const terms = {
  updated: { en: 'Last updated: July 16, 2026', bn: 'সর্বশেষ হালনাগাদ: ১৬ জুলাই, ২০২৬' },

  blocks: [
    {
      type: 'p',
      en: 'These Terms & Conditions ("Terms") apply to the purchase and use of Exclusive Mentorship\u2019s educational content, Tiers, and Add-ons (together, the "Program"). Completing Checkout, or enrolling in Tier 3, means you agree to these Terms in full.',
      bn: 'এই Terms & Conditions ("Terms") Exclusive Mentorship-এর শিক্ষামূলক Content, বিভিন্ন Tier এবং Add-on (একত্রে "Program") ক্রয় ও ব্যবহারের ক্ষেত্রে প্রযোজ্য। Checkout সম্পন্ন করা কিংবা Tier 3-এর জন্য Enroll করা মাত্রই আপনি এই সম্পূর্ণ Terms-এর সাথে সম্মত হচ্ছেন বলে গণ্য হবে।',
    },
    { type: 'h2', en: '1. Definitions', bn: '১. সংজ্ঞা (Definitions)' },
    {
      type: 'p',
      en: 'A few terms used throughout these Terms are worth clarifying up front:',
      bn: 'এই Terms-এ ব্যবহৃত কিছু শব্দের অর্থ শুরুতেই স্পষ্ট করে নেওয়া ভালো:',
    },
    {
      type: 'ul',
      en: [
        '"We", "us", or "Exclusive Mentorship" refers to the Team running this Program.',
        '"You" or "Student" refers to anyone who has enrolled, is in the process of enrolling, or has purchased just an Add-on.',
        '"Program" refers collectively to every Chapter, Class, Add-on, Live Q&A, and 1-on-1 Consultation in the course, along with all related Content and Service.',
        '"Content" refers to any Video, Chart Template, Trading Journal, or written material delivered through the Program.',
      ],
      bn: [
        '"আমরা", "আমাদের" বা "Exclusive Mentorship" বলতে এই Program পরিচালনাকারী Team-কে বোঝানো হয়েছে।',
        '"আপনি" বা "Student" বলতে যিনি এই Program-এ Enroll করেছেন, করার প্রক্রিয়ায় আছেন, অথবা শুধু একটি Add-on কিনেছেন — তাকে বোঝানো হয়েছে।',
        '"Program" বলতে কোর্সের সবগুলো Chapter, Class, Add-on, Live Q&A এবং 1-on-1 Consultation-সহ এর সাথে সম্পর্কিত সব Content ও Service-কে একত্রে বোঝানো হয়েছে।',
        '"Content" বলতে Program-এর মাধ্যমে সরবরাহকৃত যেকোনো Video, Chart Template, Trading Journal বা লিখিত উপকরণকে বোঝানো হয়েছে।',
      ],
    },
    { type: 'h2', en: '2. Nature of the Program', bn: '২. প্রোগ্রামের প্রকৃতি' },
    {
      type: 'p',
      en: (
        <>
          This Program is educational content on Trading Concepts, Market Structure, and Risk Management, built
          around "ICT" (Smart Money Concepts). No part of this Program is financial, investment, or legal advice,
          and no specific outcome, profit, or Trading Result is, has been, or will ever be guaranteed. See our{' '}
          <Link to="/disclaimer" className={linkCls}>Disclaimer</Link> page for details.
        </>
      ),
      bn: (
        <>
          এই Program মূলত Trading Concept, Market Structure এবং Risk Management সংক্রান্ত একটি শিক্ষামূলক Content, যার
          মূল ভিত্তি "ICT" তথা Smart Money Concept। এই Program-এর কোনো অংশই কোনো ধরনের আর্থিক, বিনিয়োগ বা আইনি পরামর্শ
          নয়, এবং কোনো নির্দিষ্ট ফলাফল, লাভ বা Trading Result-এর নিশ্চয়তা এখানে দেওয়া হয় না, দেওয়া হয়নি, এবং কখনো
          দেওয়া হবে না। বিস্তারিত জানতে আমাদের{' '}
          <Link to="/disclaimer" className={linkCls}>Disclaimer</Link> পেজটি দেখুন।
        </>
      ),
    },
    { type: 'h2', en: '3. Eligibility', bn: '৩. যোগ্যতা' },
    {
      type: 'p',
      en: 'This Program is only for adults aged 18 or older. By completing a Purchase, you confirm you meet this age requirement, and you take full responsibility for complying with any laws or restrictions on Trading Education or Financial Markets in your own jurisdiction.',
      bn: 'এই Program শুধুমাত্র ১৮ বছর বা তার বেশি বয়সী প্রাপ্তবয়স্কদের জন্য প্রযোজ্য। Purchase সম্পন্ন করার মাধ্যমে আপনি নিশ্চিত করছেন যে আপনি এই বয়সসীমা পূরণ করেন, এবং নিজের Jurisdiction-এ Trading Education বা Financial Market সংক্রান্ত যেকোনো আইন বা বিধি-নিষেধ মেনে চলার দায়িত্ব সম্পূর্ণভাবে আপনার নিজের।',
    },
    { type: 'h2', en: '4. Tiers & Add-ons', bn: '৪. Tier ও Add-on সমূহ' },
    {
      type: 'p',
      en: 'This Program is offered as three Tiers plus a few standalone Add-ons:',
      bn: 'এই Program তিনটি Tier এবং কিছু Standalone Add-on আকারে প্রদান করা হয়:',
    },
    {
      type: 'ul',
      en: [
        'Tier 1 — The Retailer Escape: the core 5-Chapter recorded course plus general Chat Support. No Add-on is included; any Add-on must be purchased separately.',
        'Tier 2 — Smart Money Arsenal: the core course plus Priority Support, Bi-Weekly Live Q&A, and all 3 Add-ons completely free. Each Batch admits a maximum of 50 Students.',
        'Tier 3 — The Inner Circle: everything in Tier 2 plus 3 months of Weekly 1-on-1 Consultation and a personal Portfolio/Trade Review. Seats are strictly capped at 5 Students per month; once filled, new applicants are placed on a Waitlist for the following month.',
        'Standalone Add-ons (Daily Market Insight, Setup Templates, Live Trade Breakdown Archive) can be purchased separately at any time, with no Tier required.',
      ],
      bn: [
        'Tier 1 — The Retailer Escape: মূল ৫-Chapter রেকর্ড করা কোর্স এবং সাধারণ Chat Support। এখানে কোনো Add-on অন্তর্ভুক্ত নেই, প্রয়োজন হলে আলাদাভাবে কিনতে হবে।',
        'Tier 2 — Smart Money Arsenal: মূল কোর্সের পাশাপাশি Priority Support, Bi-Weekly Live Q&A, এবং ৩টি Add-on সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত। প্রতি Batch-এ সর্বোচ্চ ৫০ জন Student ভর্তি করা হয়।',
        'Tier 3 — The Inner Circle: Tier 2-এর সবকিছুর পাশাপাশি ৩ মাসের Weekly 1-on-1 Consultation এবং ব্যক্তিগত Portfolio/Trade Review। প্রতি মাসে কঠোরভাবে মাত্র ৫ জন Student-এর জন্য সিট খোলা থাকে; সংখ্যা পূর্ণ হয়ে গেলে নতুন আবেদনকারীদের পরবর্তী মাসের জন্য Waitlist-এ রাখা হয়।',
        'Standalone Add-on (Daily Market Insight, Setup Templates, Live Trade Breakdown Archive) যেকোনো সময় আলাদাভাবে কেনা যায়, কোনো Tier ছাড়াই।',
      ],
    },
    { type: 'h2', en: '5. Pricing, Currency & Payment Method', bn: '৫. মূল্য, Currency ও Payment পদ্ধতি' },
    {
      type: 'p',
      en: 'All prices on this Website are shown in USD (USDT) only — this Website is our sole and final source of Pricing. Payment is accepted via Binance UID and a direct USDT (TRC20) Wallet Address. Whatever Package, Add-on, or Payment Plan you select at Checkout, our Telegram Bot only confirms that same Amount and manually verifies your Payment Screenshot before granting Access.',
      bn: 'এই Website-এ সকল মূল্য শুধুমাত্র USD (USDT)-তে দেখানো হয় — এই Website-ই আমাদের একমাত্র ও চূড়ান্ত Pricing-এর উৎস। Payment গ্রহণ করা হয় Binance UID এবং সরাসরি USDT (TRC20) Wallet Address-এর মাধ্যমে। Checkout-এ আপনি যে Package, Add-on বা Payment Plan বেছে নেবেন, আমাদের Telegram Bot শুধু সেই একই Amount Confirm করে এবং আপনার Payment-এর Screenshot ম্যানুয়ালি যাচাই করে Access প্রদান করে।',
    },
    { type: 'h2', en: '6. Split Payment (Tier 2 only)', bn: '৬. Split Payment (শুধুমাত্র Tier 2)' },
    {
      type: 'p',
      en: 'Tier 2 can be paid in full or split across two Installments — splitting it costs somewhat more than paying in full. Paying the first Installment unlocks Part 1 of the Video Module (roughly 50%); Add-ons and Priority Support are not unlocked yet. The second Installment must be paid within 30 days of the first; once received, your full Access (the remaining Video, all Add-ons, and Live Q&A) unlocks. If the second Installment isn\u2019t paid within those 30 days, Access to Part 1 is temporarily suspended until it is.',
      bn: 'Tier 2 চাইলে একবারে, অথবা দুই Installment-এ ভাগ করে পরিশোধ করা যায় — তবে ভাগ করে পরিশোধ করলে মোট খরচ একবারে পরিশোধের চেয়ে কিছুটা বেশি হয়। প্রথম Installment পরিশোধ করলে Video Module-এর Part 1 (আনুমানিক ৫০%) Unlock হয়; তখনো Add-on ও Priority Support Unlock হয় না। দ্বিতীয় Installment অবশ্যই প্রথম Installment-এর ৩০ দিনের মধ্যে পরিশোধ করতে হবে; তা পাওয়ার পর আপনার সম্পূর্ণ Access (বাকি Video, সব Add-on, এবং Live Q&A) Unlock হয়ে যায়। এই ৩০ দিনের মধ্যে দ্বিতীয় Installment পরিশোধ না হলে, তা সম্পন্ন না হওয়া পর্যন্ত Part 1-এর Access সাময়িকভাবে বন্ধ থাকবে।',
    },
    { type: 'h2', en: '7. Enrollment, Verification & Delivery', bn: '৭. Enrollment, Verification ও Delivery' },
    {
      type: 'p',
      en: 'After Checkout you\u2019ll be sent to our Telegram Bot, where you complete Payment and submit proof (a Screenshot). Every Payment is manually verified by our Team before Access is granted — this usually takes a few hours, though it can occasionally take longer. Once Verification is complete, course Access, Add-ons, and any Private Group/Channel invitations are delivered through Telegram. No separate Account or Login is needed.',
      bn: 'Checkout সম্পন্ন করার পর আপনাকে আমাদের Telegram Bot-এ পাঠানো হবে, যেখানে Payment সম্পন্ন করে তার প্রমাণ (Screenshot) জমা দিতে হবে। Access প্রদানের আগে প্রতিটি Payment আমাদের Team ব্যক্তিগতভাবে ম্যানুয়ালি যাচাই করে — সাধারণত এতে কয়েক ঘণ্টা সময় লাগে, তবে কখনো কখনো এর চেয়ে বেশি সময়ও লাগতে পারে। Verification সম্পন্ন হওয়ার পর কোর্স Access, Add-on এবং যেকোনো Private Group/Channel-এর Invitation Telegram-এর মাধ্যমেই Deliver করা হয়। এর জন্য আলাদা কোনো Account বা Login-এর প্রয়োজন নেই।',
    },
    { type: 'h2', en: '8. All Sales Final — and Our Guarantee', bn: '৮. সকল বিক্রয় চূড়ান্ত — এবং আমাদের Guarantee' },
    {
      type: 'p',
      en: 'Every Tier and Add-on Purchase is final; we do not offer cash Refunds. In place of a Refund, every Tier includes the ICT Mastery Accountability Protocol: watch 100% of the course Video, keep the provided Trading Journal consistently, and complete 30 Trades on a Demo Account. If you genuinely meet all three conditions and still see no improvement, our Team will personally observe your Live Trading for a week and run a completely free 1-on-1 Live Breakdown Session. This is a Diagnostic Support Commitment, not a financial guarantee, and it does not promise any specific Trading Result. Note that this Protocol applies only to Tier Enrollment — it does not apply to an Add-on-only purchase, since meeting its conditions requires enrolling in a Tier with the full course.',
      bn: 'প্রতিটি Tier ও Add-on-এর সব Purchase চূড়ান্ত (Final); আমরা কোনো নগদ Refund প্রদান করি না। Refund-এর পরিবর্তে, প্রতিটি Tier-এর সাথে থাকছে ICT Mastery Accountability Protocol: কোর্সের ১০০% Video সম্পূর্ণ দেখা, প্রদত্ত Trading Journal নিয়মিত Maintain করা, এবং Demo Account-এ ৩০টি Trade সম্পন্ন করা। এই তিনটি শর্ত প্রকৃতপক্ষে পূরণ করার পরও যদি কোনো উন্নতি লক্ষ্য না করেন, তাহলে আমাদের Team ব্যক্তিগতভাবে এক সপ্তাহ ধরে আপনার Live Trading পর্যবেক্ষণ করবে এবং একটি সম্পূর্ণ বিনামূল্যের 1-on-1 Live Breakdown Session পরিচালনা করবে। এটি একটি Diagnostic Support Commitment, কোনো আর্থিক গ্যারান্টি নয়, এবং এটি কোনো নির্দিষ্ট Trading Result-এর নিশ্চয়তা দেয় না। উল্লেখ্য, এই Protocol শুধুমাত্র Tier Enrollment-এর সাথে প্রযোজ্য — শুধু Add-on ক্রয়ের ক্ষেত্রে এটি প্রযোজ্য নয়, কারণ এর শর্ত পূরণ করতে হলে সম্পূর্ণ কোর্সসহ একটি Tier-এ Enroll করা আবশ্যক।',
    },
    { type: 'h2', en: '9. Intellectual Property & Personal Use', bn: '৯. Intellectual Property ও ব্যক্তিগত ব্যবহার' },
    {
      type: 'p',
      en: 'All course Video, Templates, Journals, and written material remain the Intellectual Property of Exclusive Mentorship. Access is granted to you personally and may not be Shared, Resold, Redistributed, or used as the basis for a competing Product or Service.',
      bn: 'কোর্সের সব Video, Template, Journal এবং লিখিত উপকরণ Exclusive Mentorship-এর Intellectual Property হিসেবে সংরক্ষিত থাকে। আপনাকে ব্যক্তিগতভাবে Access দেওয়া হয়, যা Share, Resell, Redistribute করা কিংবা এর ভিত্তিতে প্রতিদ্বন্দ্বী কোনো Product বা Service তৈরির উদ্দেশ্যে ব্যবহার করা যাবে না।',
    },
    { type: 'h2', en: '10. Trading Risk Acknowledgment & Limitation of Liability', bn: '১০. Trading Risk স্বীকৃতি ও দায়বদ্ধতার সীমাবদ্ধতা' },
    {
      type: 'p',
      en: 'Trading in the Financial Markets carries substantial risk and is not suitable for everyone. You alone are responsible for your own Trading decisions, Accounts, and their outcomes, during and after the Program. To the maximum extent permitted by law, Exclusive Mentorship and its Team are not liable for any direct, indirect, incidental, or consequential loss (including any Trading Loss) arising from use of the Program.',
      bn: 'Financial Market-এ Trading করা যথেষ্ট ঝুঁকিপূর্ণ এবং তা সবার জন্য উপযুক্ত নয়। Program চলাকালীন বা পরবর্তীতে আপনার নিজের সব Trading সিদ্ধান্ত, Account এবং তার ফলাফলের জন্য একমাত্র আপনি নিজেই দায়ী। আইন দ্বারা সর্বোচ্চ অনুমোদিত সীমা পর্যন্ত, Program ব্যবহারের ফলে সৃষ্ট কোনো প্রত্যক্ষ, পরোক্ষ, আনুষঙ্গিক বা ফলস্বরূপ ক্ষতি (যেমন কোনো Trading Loss)-এর জন্য Exclusive Mentorship বা এর Team দায়ী থাকবে না।',
    },
    { type: 'h2', en: '11. Communication & Notice', bn: '১১. যোগাযোগ ও Notice' },
    {
      type: 'p',
      en: 'All communication about Orders, Enrollment, or Support runs through our Telegram Bot. We\u2019ll share any important Notice about these Terms or the Program the same way, or by updating this Website.',
      bn: 'Order, Enrollment বা Support সংক্রান্ত সব যোগাযোগ আমাদের Telegram Bot-এর মাধ্যমেই পরিচালিত হয়। এই Terms বা Program সংক্রান্ত যেকোনো গুরুত্বপূর্ণ Notice আমরা একইভাবে Telegram-এর মাধ্যমে, অথবা এই Website Update করে জানিয়ে দেব।',
    },
    { type: 'h2', en: '12. Changes to Content & Terms', bn: '১২. Content ও Terms-এ পরিবর্তন' },
    {
      type: 'p',
      en: 'Pricing, Tier structure, and Add-on availability may change without prior notice; however, Access already granted at the time of Purchase will never be reduced or revoked afterward. We may update these Terms from time to time — continuing to use the Program after an update means you accept the revised Terms.',
      bn: 'পূর্ব ঘোষণা ছাড়াই মূল্য, Tier-এর গঠন এবং Add-on-এর প্রাপ্যতা পরিবর্তন হতে পারে; তবে Purchase করার সময় আপনাকে দেওয়া Access পরবর্তীতে কমানো বা বাতিল করা হবে না। আমরা মাঝে মাঝে এই Terms Update করতে পারি — Update-এর পরও Program ব্যবহার চালিয়ে যাওয়া মানে হলো, আপনি সংশোধিত Terms-এর সাথে সম্মত।',
    },
    { type: 'h2', en: '13. General Terms', bn: '১৩. সাধারণ শর্তাবলী' },
    {
      type: 'p',
      en: (
        <>
          If any clause of these Terms is found unenforceable by a court, the remaining clauses stay in full effect.
          These Terms, together with our{' '}
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link> and{' '}
          <Link to="/disclaimer" className={linkCls}>Disclaimer</Link>, form the entire agreement between you and
          Exclusive Mentorship regarding the Program.
        </>
      ),
      bn: (
        <>
          এই Terms-এর কোনো একটি ধারা যদি কোনো আদালত কর্তৃক অকার্যকর বা প্রয়োগযোগ্য নয় বলে বিবেচিত হয়, তাহলে বাকি
          ধারাগুলো পূর্ণ কার্যকর থাকবে। এই Terms, আমাদের{' '}
          <Link to="/privacy" className={linkCls}>Privacy Policy</Link> ও{' '}
          <Link to="/disclaimer" className={linkCls}>Disclaimer</Link>-সহ, Program সংক্রান্ত আপনার ও Exclusive
          Mentorship-এর মধ্যে সম্পূর্ণ সমঝোতা গঠন করে।
        </>
      ),
    },
    { type: 'h2', en: '14. Governing Law & Contact', bn: '১৪. Governing Law ও Contact' },
    {
      type: 'p',
      en: (
        <>
          These Terms are written to be read consistently with the Consumer-Protection and Digital-Commerce laws
          applicable in Bangladesh. For any question about these Terms, reach out to our{' '}
          <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className={linkCls}>
            Telegram Support
          </a>.
        </>
      ),
      bn: (
        <>
          এই Terms বাংলাদেশে প্রযোজ্য Consumer-Protection ও Digital-Commerce সংক্রান্ত আইনের সাথে সামঞ্জস্য রেখে পড়ার
          উদ্দেশ্যে তৈরি। এই Terms সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের{' '}
          <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className={linkCls}>
            Telegram Support
          </a>
          -এ যোগাযোগ করুন।
        </>
      ),
    },
    {
      type: 'note',
      en: 'This page is a general template and is not a substitute for legal advice. Before relying on it, we recommend having it reviewed by a lawyer experienced in Bangladesh\u2019s e-commerce and digital-service law.',
      bn: 'এই Page-টি একটি সাধারণ Template, এবং এটি আইনি পরামর্শের বিকল্প নয়। নির্ভরযোগ্যভাবে ব্যবহারের আগে বাংলাদেশের E-commerce ও Digital-Service সংক্রান্ত আইনে অভিজ্ঞ কোনো আইনজীবীর মাধ্যমে এটি যাচাই করিয়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।',
    },
  ],
};
