import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Seo from '@/components/site/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const faqCategories = [
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
        q: 'Tier 3 — The Inner Circle-এ কীভাবে যোগ দেব?',
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
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo
        title="FAQ"
        description="Answers on tiers, add-ons, payment, the guarantee, and enrollment — everything you need before joining."
      />
      <Header />

      <section className="border-b border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">FAQ</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Every question, answered.
          </h1>
          <p className="font-bn mt-4 leading-relaxed text-muted-foreground">
            Tier, Add-on, Payment এবং Guarantee সংক্রান্ত প্রতিটি প্রশ্নের উত্তর বিষয়ভিত্তিকভাবে সাজানো — যাতে
            আপনি সহজেই আপনার উত্তরটি খুঁজে পান।
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {faqCategories.map((group, gi) => (
            <motion.div key={group.category} {...fadeUp} className={gi > 0 ? 'mt-12' : ''}>
              <h2 className="font-bn-display text-lg font-bold text-foreground">{group.category}</h2>
              <Accordion type="single" collapsible className="mt-4 space-y-3">
                {group.items.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`${group.category}-${i}`}
                    className="rounded-xl border border-border bg-card px-5 shadow-soft"
                  >
                    <AccordionTrigger className="font-bn text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="font-bn leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          <div className="mt-14 rounded-2xl border border-border bg-navy p-8 text-center text-navy-foreground">
            <p className="font-bn-display text-lg font-semibold">আরও কোনো প্রশ্ন আছে?</p>
            <p className="font-bn mx-auto mt-1.5 max-w-md text-sm text-navy-foreground/60">
              সরাসরি Telegram-এ আমাদের Team-কে মেসেজ করুন, অথবা সম্পূর্ণ Terms, Privacy ও Disclaimer সংক্রান্ত
              বিস্তারিত জানতে নিচের Legal Page গুলো দেখুন।
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <a
                href="https://t.me/exclusive_mentorship_bot"
                target="_blank"
                rel="noreferrer"
                className="font-bn font-semibold text-brand hover:underline"
              >
                Telegram-এ মেসেজ করুন
              </a>
              <Link to="/terms" className="font-medium text-navy-foreground/70 hover:text-navy-foreground">
                Terms &amp; Conditions
              </Link>
              <Link to="/disclaimer" className="font-medium text-navy-foreground/70 hover:text-navy-foreground">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
