// Bilingual FAQ data. Shape: { en: [ {category, items:[{q,a}]} ], bn: [ ... ] }
// Categories/items are matched by array index between en and bn, so keep the
// two arrays in lockstep when editing.

export const faqCategories = {
  en: [
    {
      category: 'Before You Start',
      items: [
        {
          q: 'Do I need any Trading experience to start?',
          a: 'None at all. Chapter 1 starts with no prior experience assumed and builds you up step by step to institutional-level vocabulary before any advanced topics begin. All 5 Chapters are sequenced so each step builds on the last — so being a complete beginner is not a problem.',
        },
        {
          q: 'What\u2019s the real difference between the three Tiers?',
          a: 'All three Tiers include the full 5-Chapter course — the difference is in what surrounds it. Tier 1 gets you just the core course. Tier 2 adds Priority Support, Bi-Weekly Live Q&A, and all 3 Add-ons completely free. Tier 3 includes everything in Tier 2 plus 3 months of Weekly 1-on-1 Consultation and a Personal Portfolio and Trade Review.',
        },
        {
          q: 'Do I need to create a separate Account or Sign Up?',
          a: 'No, there\u2019s no separate Account or Login to create. Enrollment, Payment Verification, and course Access all happen entirely through Telegram. No new Password to remember — your Telegram Account is enough.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      items: [
        {
          q: 'How do I pay, and is it safe?',
          a: 'Payment is accepted via Binance UID or a direct USDT (TRC20) Wallet Address. After paying, you send the Payment Screenshot directly through our Telegram Bot as proof. Our Team then personally verifies every Payment before Access is granted — so every Enrollment is manually confirmed, keeping the whole process secure.',
        },
        {
          q: 'How does Tier 2\u2019s Split Payment work?',
          a: 'Instead of paying the full amount at once, you can split it into two Installments. Paying the first Installment unlocks Part 1 of the Video Module (roughly half). Paying the second Installment within 30 days unlocks everything else — Part 2, all 3 Add-ons, and Live Q&A access. Note that splitting the Payment costs slightly more overall than paying in full at once. If the second Installment isn\u2019t paid within 30 days, Access to Part 1 is temporarily suspended until it is.',
        },
        {
          q: 'Can I buy just an Add-on without buying a Tier?',
          a: 'Yes. Each Add-on can be purchased entirely on its own from its Add-on Page, with no Tier required. If you\u2019re already on Tier 2 or Tier 3, though, you get all 3 Add-ons automatically for free.',
        },
        {
          q: 'Is the Price shown on the Website final, or could the Telegram Bot ask for a different Amount?',
          a: 'Yes, the Price shown on the Website in USD (USDT) is completely final and accurate — this Website is the only reliable source for Pricing. The Telegram Bot never sets its own Amount; it simply confirms whichever Package, Add-on, or Payment Plan you choose at Checkout, then verifies your Payment Screenshot before granting Access.',
        },
      ],
    },
    {
      category: 'Tiers and Add-ons',
      items: [
        {
          q: 'Are all the Add-ons really free with Tier 2 and Tier 3?',
          a: 'Yes, completely true. All 3 Add-ons — worth $39 together — are fully included free with Tier 2 and Tier 3, at no extra cost. If you take Tier 1, or only want the Add-ons, each one needs to be purchased separately.',
        },
        {
          q: 'What\u2019s actually included in each Add-on?',
          a: 'Daily Market Insight is a written daily Session Bias Analysis, sent before the London and New York Sessions open. The Setup Templates Add-on gives you the Chart Template and Trading Journal used in the course. The Live Trade Breakdown Archive Add-on gives you the full archive of every previously recorded Live Trade Breakdown, organized by Setup. Full details for each Add-on are on its own Add-on Page.',
        },
        {
          q: 'How do I join Tier 3 — ICT Inner Circle?',
          a: 'Joining Tier 3 follows the same Checkout Process as any other Tier — no separate Application Form is needed. To genuinely guarantee 1-on-1 support, though, seats are strictly capped at 5 Students per month. Once this month\u2019s seats fill up, the Website will show Tier 3 as "Full" and new Enrollment stays closed until the next Batch opens.',
        },
      ],
    },
    {
      category: 'Guarantee & Refunds',
      items: [
        {
          q: 'Is there a Refund policy?',
          a: 'All Enrollments are final sale — meaning no cash Refunds are given. In its place, every Tier includes our ICT Mastery Accountability Protocol. If you finish the entire course, keep your Journal consistently, and complete 30 Trades on a Demo Account, and still see no results, the mentor personally steps in to help.',
        },
        {
          q: 'What exactly is the ICT Mastery Accountability Protocol?',
          a: 'This Protocol has three conditions — watch 100% of the course Video, consistently maintain the provided Trading Journal, and actually complete 30 Trades on a Demo Account. If you\u2019ve properly met all three and still see no improvement in results, our Team will directly observe your Live Trading for a full week and run a completely free 1-on-1 Live Breakdown Session to pinpoint exactly where the issue is.',
        },
        {
          q: 'Does this Protocol apply if I only buy an Add-on?',
          a: 'No. The ICT Mastery Accountability Protocol is tied to Tier Enrollment, because meeting its conditions (like finishing the full course) requires enrolling in a Tier that includes the course. Buying only an Add-on is not covered by this Protocol.',
        },
      ],
    },
    {
      category: 'Enrollment & Access',
      items: [
        {
          q: 'What actually happens after I click "Confirm & Proceed"?',
          a: 'The moment you click "Confirm & Proceed," you\u2019re taken straight to our Telegram Bot, with your chosen Package already loaded. The Bot confirms your Order and the exact Amount payable. You then make the Payment and attach the Screenshot in the Bot, and once it\u2019s verified, Access is granted manually — usually within a few hours, though it can occasionally take a bit longer.',
        },
        {
          q: 'How long does course Access last?',
          a: 'Once your Enrollment is verified, you get Lifetime Access. That means you can revisit the entire recorded Curriculum as many times as you need — there\u2019s no fixed expiry attached.',
        },
        {
          q: 'Can one Enrollment be shared with family or a friend?',
          a: 'No. Access is granted strictly for your own personal use, and it cannot be Shared, Resold, or Redistributed. This is an important part of our Terms & Conditions, and it helps protect course quality and every Student\u2019s interests.',
        },
      ],
    },
  ],
  bn: [
    {
      category: 'শুরু করার আগে',
      items: [
        {
          q: 'শুরু করতে কি কোনো Trading অভিজ্ঞতা লাগবে?',
          a: 'একদমই না। Chapter 1 কোনো পূর্ব-অভিজ্ঞতা ছাড়াই শুরু হয় এবং ধাপে ধাপে আপনাকে institutional-level vocabulary পর্যন্ত নিয়ে যায়, তারপরই advanced বিষয়গুলো শুরু হয়। পুরো ৫টি Chapter এমনভাবে সাজানো, যাতে প্রতিটি ধাপ আগের ধাপের ওপর ভিত্তি করে তৈরি হয় — তাই সম্পূর্ণ নতুন হলেও কোনো সমস্যা নেই।',
        },
        {
          q: 'তিনটি Tier-এর মধ্যে প্রকৃত পার্থক্য কী?',
          a: 'তিনটি Tier-এই সম্পূর্ণ ৫-Chapter কোর্স অন্তর্ভুক্ত থাকে, পার্থক্য তৈরি হয় এর বাইরের সুবিধাগুলোতে। Tier 1-এ শুধু মূল কোর্সটিই পাবেন। Tier 2-তে মূল কোর্সের সাথে যুক্ত হয় Priority Support, Bi-Weekly Live Q&A, এবং ৩টি Add-on সম্পূর্ণ ফ্রি। আর Tier 3-তে Tier 2-এর সবকিছুর পাশাপাশি টানা ৩ মাসের Weekly 1-on-1 Consultation এবং একটি Personal Portfolio ও Trade Review যুক্ত হয়।',
        },
        {
          q: 'আলাদা করে কোনো Account বা Sign Up করতে হবে কি?',
          a: 'না, আলাদা কোনো Account বা Login তৈরির প্রয়োজন নেই। Enrollment, Payment Verification এবং কোর্স Access — সবকিছুই সম্পূর্ণভাবে Telegram-এর মাধ্যমে সম্পন্ন হয়। নতুন কোনো Password মনে রাখার ঝামেলা নেই — আপনার Telegram Account-ই যথেষ্ট।',
        },
      ],
    },
    {
      category: 'মূল্য ও পেমেন্ট',
      items: [
        {
          q: 'Payment কীভাবে করবো, এবং এটি কি নিরাপদ?',
          a: 'Payment-এর জন্য Binance UID এবং সরাসরি USDT (TRC20) Wallet Address — এই দুইটি মাধ্যমই গ্রহণযোগ্য। Payment করার পর সেই Payment-এর Screenshot Telegram Bot-এর মাধ্যমে সরাসরি পাঠাতে হবে প্রমাণ হিসেবে। এরপর আমাদের Team ব্যক্তিগতভাবে প্রতিটি Payment যাচাই করে, তারপরই Access দেওয়া হয় — তাই প্রতিটি Enrollment ম্যানুয়ালি নিশ্চিত করা হয়, যা পুরো প্রক্রিয়াটিকে নিরাপদ রাখে।',
        },
        {
          q: 'Tier 2-এর Split Payment কীভাবে কাজ করে?',
          a: 'পুরো Payment একবারে না করে দুই ভাগে (Installment) দেওয়া যায়। প্রথম Installment পরিশোধ করলে Video Module-এর Part 1 (প্রায় অর্ধেক) Unlock হয়ে যায়। এরপর ৩০ দিনের মধ্যে দ্বিতীয় Installment পরিশোধ করলে বাকি Part 2, ৩টি Add-on এবং Live Q&A অ্যাক্সেস সহ সবকিছু Unlock হয়। মনে রাখবেন, Split করে Payment করলে মোট খরচ একবারে পরিশোধের চেয়ে সামান্য বেশি পড়ে। আর ৩০ দিনের মধ্যে দ্বিতীয় Installment পরিশোধ না করলে, তা সম্পন্ন না হওয়া পর্যন্ত Part 1-এর Access সাময়িকভাবে বন্ধ থাকবে।',
        },
        {
          q: 'কোনো Tier না কিনে শুধু একটি Add-on কেনা যাবে কি?',
          a: 'হ্যাঁ। প্রতিটি Add-on তার নিজস্ব Add-on Page থেকে সম্পূর্ণ আলাদাভাবে, কোনো Tier না কিনেও কেনা সম্ভব। তবে আপনি যদি Tier 2 বা Tier 3-তে থাকেন, তাহলে ৩টি Add-onই স্বয়ংক্রিয়ভাবে বিনামূল্যে পেয়ে যাবেন।',
        },
        {
          q: 'Website-এ দেখানো Price-ই কি চূড়ান্ত, নাকি Telegram Bot ভিন্ন কোনো Amount চাইতে পারে?',
          a: 'হ্যাঁ, Website-এ USD (USDT)-তে দেখানো Price-ই সম্পূর্ণ চূড়ান্ত ও সঠিক — Pricing-এর একমাত্র নির্ভরযোগ্য উৎস এই Website। Telegram Bot নিজে থেকে আলাদা কোনো Amount ঠিক করে না; আপনি Checkout-এ যে Package, Add-on বা Payment Plan বেছে নেবেন, Bot শুধু সেটিই Confirm করে এবং আপনার Payment-এর Screenshot যাচাই করে Access প্রদান করে।',
        },
      ],
    },
    {
      category: 'Tier এবং Add-on',
      items: [
        {
          q: 'Tier 2 এবং Tier 3-এর সাথে কি সত্যিই সব Add-on ফ্রি?',
          a: 'হ্যাঁ, সম্পূর্ণ সত্যি। একসাথে $39 মূল্যের ৩টি Add-on-ই Tier 2 এবং Tier 3-এর সাথে সম্পূর্ণ বিনামূল্যে অন্তর্ভুক্ত থাকে, কোনো অতিরিক্ত খরচ ছাড়াই। তবে আপনি যদি Tier 1 নেন, বা শুধু Add-on-ই কিনতে চান, সেক্ষেত্রে প্রতিটি Add-on আলাদাভাবে কিনতে হবে।',
        },
        {
          q: 'প্রতিটি Add-on-এ আসলে কী থাকে?',
          a: 'Daily Market Insight হলো প্রতিদিনের একটি লিখিত Session Bias Analysis, যা London ও New York Session শুরুর আগেই পাঠানো হয়। Setup Templates Add-on-এ পাবেন কোর্সে ব্যবহৃত Chart Template এবং Trading Journal। আর Live Trade Breakdown Archive Add-on-এ থাকছে আগের সব রেকর্ড করা Live Trade Breakdown-এর সম্পূর্ণ Archive, যা Setup অনুযায়ী সাজানো। প্রতিটি Add-on-এর সম্পূর্ণ বিস্তারিত বিবরণ সংশ্লিষ্ট Add-on Page-এ পাওয়া যাবে।',
        },
        {
          q: 'Tier 3 — ICT Inner Circle-এ কীভাবে যোগ দেব?',
          a: 'Tier 3-এ যোগ দিতে অন্যান্য Tier-এর মতোই একই Checkout Process অনুসরণ করতে হয়, আলাদা কোনো Application Form পূরণের প্রয়োজন নেই। তবে সত্যিকার অর্থে 1-on-1 সহায়তা নিশ্চিত করতে প্রতি মাসে সিট সংখ্যা কঠোরভাবে মাত্র ৫ জনে সীমাবদ্ধ রাখা হয়। চলতি মাসের সিট পূর্ণ হয়ে গেলে Website-এ Tier 3 "Full" দেখাবে এবং পরবর্তী Batch শুরু না হওয়া পর্যন্ত নতুন Enrollment বন্ধ থাকবে।',
        },
      ],
    },
    {
      category: 'গ্যারান্টি ও রিফান্ড',
      items: [
        {
          q: 'কোনো Refund নীতি আছে কি?',
          a: 'সব ধরনের Enrollment চূড়ান্ত (Final Sale) — অর্থাৎ কোনো নগদ Refund দেওয়া হয় না। তবে এর পরিবর্তে প্রতিটি Tier-এর সাথে থাকছে আমাদের ICT Mastery Accountability Protocol। আপনি যদি সম্পূর্ণ কোর্স শেষ করেন, নিয়মিত Journal Maintain করেন এবং Demo Account-এ ৩০টি Trade সম্পন্ন করেন, তারপরও যদি ফলাফল না আসে, তাহলে মেন্টর ব্যক্তিগতভাবে আপনার পাশে দাঁড়াবেন।',
        },
        {
          q: 'ICT Mastery Accountability Protocol আসলে কী?',
          a: 'এই Protocol-এর শর্ত তিনটি — কোর্সের ১০০% Video সম্পূর্ণ দেখা, প্রদত্ত Trading Journal নিয়মিতভাবে Maintain করা, এবং Demo Account-এ ৩০টি Trade বাস্তবে সম্পন্ন করা। এই তিনটি শর্তই সঠিকভাবে পূরণ করার পরও যদি ফলাফলে কোনো উন্নতি না দেখেন, তাহলে আমাদের Team সরাসরি এক সপ্তাহ ধরে আপনার Live Trading পর্যবেক্ষণ করবে এবং সমস্যাটি ঠিক কোথায় হচ্ছে তা খুঁজে বের করতে একটি সম্পূর্ণ বিনামূল্যের 1-on-1 Live Breakdown Session পরিচালনা করবে।',
        },
        {
          q: 'শুধু Add-on কিনলে কি এই Protocol প্রযোজ্য হবে?',
          a: 'না। ICT Mastery Accountability Protocol মূলত প্রতিটি Tier Enrollment-এর সাথে যুক্ত, কারণ এর শর্তগুলো (যেমন সম্পূর্ণ কোর্স শেষ করা) পূরণ করতে হলে আপনাকে কোর্সসহ একটি Tier-এ Enroll করতে হবে। শুধুমাত্র Add-on কেনা হলে তা এই Protocol-এর অন্তর্ভুক্ত নয়।',
        },
      ],
    },
    {
      category: 'এনরোলমেন্ট ও অ্যাক্সেস',
      items: [
        {
          q: '"Confirm & Proceed"-এ ক্লিক করার পর আসলে কী হয়?',
          a: '"Confirm & Proceed" বাটনে ক্লিক করার সাথে সাথে আপনি সরাসরি আমাদের Telegram Bot-এ চলে যাবেন, যেখানে আপনার বেছে নেওয়া Package আগে থেকেই Load করা থাকবে। Bot আপনার Order এবং পরিশোধযোগ্য সঠিক Amount নিশ্চিত করবে। এরপর আপনি Payment করে তার Screenshot Bot-এ সংযুক্ত করবেন, এবং তা যাচাই হওয়ার পর ম্যানুয়ালি Access দেওয়া হবে — সাধারণত এতে কয়েক ঘণ্টার মধ্যেই সম্পন্ন হয়ে যায়, তবে কখনো কখনো এর চেয়ে একটু বেশি সময়ও লাগতে পারে।',
        },
        {
          q: 'কোর্সের Access কতদিন পর্যন্ত থাকবে?',
          a: 'একবার আপনার Enrollment Verify হয়ে গেলে, আপনি পাবেন Lifetime Access। অর্থাৎ, রেকর্ড করা পুরো Curriculum যতবার প্রয়োজন, ততবারই আপনি ফিরে দেখতে পারবেন — এর জন্য কোনো নির্দিষ্ট মেয়াদ বেঁধে দেওয়া নেই।',
        },
        {
          q: 'একটি Enrollment কি পরিবার বা বন্ধুর সাথে Share করা যাবে?',
          a: 'না। Access একান্তভাবে আপনার ব্যক্তিগত ব্যবহারের জন্য দেওয়া হয়, এবং তা Share, Resell বা Redistribute করা যাবে না। এটি আমাদের Terms & Conditions-এর একটি গুরুত্বপূর্ণ অংশ, যা কোর্সের মান এবং সব Student-এর স্বার্থ রক্ষা করতে সহায়তা করে।',
        },
      ],
    },
  ],
};
