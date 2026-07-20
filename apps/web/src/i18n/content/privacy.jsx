import React from 'react';
import { BOT_USERNAME } from '@/lib/telegram';

const linkCls = 'font-medium text-brand hover:underline';

export const privacy = {
  updated: { en: 'Last updated: July 20, 2026', bn: 'সর্বশেষ হালনাগাদ: ২০ জুলাই, ২০২৬' },

  blocks: [
    {
      type: 'p',
      en: 'This Privacy Policy explains what information Exclusive Mentorship collects when you complete Checkout, enroll in Tier 3 — 1-on-1 Mentorship, or contact us, and how that information is used.',
      bn: 'এই Privacy Policy ব্যাখ্যা করে যে, আপনি যখন Checkout সম্পন্ন করেন, Tier 3 — 1-on-1 Mentorship-এ Enroll করেন, অথবা আমাদের সাথে যোগাযোগ করেন, তখন Exclusive Mentorship কী কী তথ্য সংগ্রহ করে এবং তা কীভাবে ব্যবহার করা হয়।',
    },
    { type: 'h2', en: '1. Information We Collect', bn: '১. আমরা যেসব তথ্য সংগ্রহ করি' },
    {
      type: 'ul',
      en: [
        'Contact details you share with our Telegram Bot when you start the enrollment conversation — such as your name and a way to reach you.',
        'A Screenshot of your Binance or USDT Wallet transaction as Payment Proof, sent to our Telegram Bot for Payment verification.',
        'Your Account information available through Telegram — such as Username and User ID — once you start a conversation with our Bot.',
        'Basic, non-identifying usage data generated while browsing the Website (such as which pages were viewed), if we have Analytics enabled.',
      ],
      bn: [
        'আপনি যখন Enrollment-এর কথোপকথন শুরু করেন, তখন আমাদের Telegram Bot-কে আপনি যে যোগাযোগের তথ্য দেন — যেমন আপনার নাম এবং যোগাযোগের একটি মাধ্যম।',
        'Payment Proof হিসেবে আপনার Binance বা USDT Wallet Transaction-এর Screenshot, যা Payment যাচাইয়ের জন্য আমাদের Telegram Bot-এ পাঠানো হয়।',
        'আপনি যখন আমাদের Bot-এর সাথে কথোপকথন শুরু করেন, তখন Telegram-এর মাধ্যমে উপলব্ধ আপনার Account তথ্য, যেমন Username এবং User ID।',
        'Website Browse করার সময় তৈরি হওয়া Basic, Non-Identifying Usage Data (যেমন কোন Page দেখা হয়েছে), যদি আমরা Analytics চালু রাখি।',
      ],
    },
    { type: 'h2', en: '2. How We Use This Information', bn: '২. এই তথ্য আমরা কীভাবে ব্যবহার করি' },
    {
      type: 'ul',
      en: [
        'To manually verify your Payment and grant Access to the correct Tier, Add-on, or Private Channel.',
        'To stay in touch with you about your Order, Enrollment, or Support needs.',
        'To confirm eligibility for the limited Tier 3 — 1-on-1 Mentorship seats, and manage the Waitlist when needed.',
        'To keep records required for our own accounting and fraud-prevention purposes.',
      ],
      bn: [
        'আপনার Payment ম্যানুয়ালি যাচাই করে সঠিক Tier, Add-on বা Private Channel-এর Access প্রদান করতে।',
        'আপনার Order, Enrollment বা Support সংক্রান্ত বিষয়ে আপনার সাথে যোগাযোগ রাখতে।',
        'সীমিত সংখ্যক Tier 3 — 1-on-1 Mentorship সিটের জন্য যোগ্যতা নিশ্চিত করতে, এবং প্রয়োজনে Waitlist পরিচালনা করতে।',
        'আমাদের নিজস্ব Accounting ও Fraud-Prevention সংক্রান্ত প্রয়োজনীয় Record সংরক্ষণ করতে।',
      ],
    },
    { type: 'h2', en: '3. Manual Review Process', bn: '৩. Manual Review প্রক্রিয়া' },
    {
      type: 'p',
      en: 'Because every Payment is manually verified to prevent fake or fraudulent Payment Screenshots, a member of our Team personally reviews the Payment Proof and contact details you submit. Please submit only genuine Payment Screenshots and accurate information.',
      bn: 'যেহেতু জাল বা ভুয়া Payment Screenshot ঠেকাতে প্রতিটি Payment ম্যানুয়ালি যাচাই করা হয়, তাই আমাদের Team-এর একজন সদস্য সরাসরি আপনার জমা দেওয়া Payment Proof এবং যোগাযোগের তথ্য পর্যালোচনা করবেন। অনুগ্রহ করে শুধুমাত্র প্রকৃত Payment Screenshot এবং সঠিক তথ্যই জমা দিন।',
    },
    { type: 'h2', en: '4. Third-Party Services', bn: '৪. Third-Party Service সমূহ' },
    {
      type: 'p',
      en: 'Running this Program relies on a few third-party Platforms, each with its own Privacy Practices outside our control:',
      bn: 'এই Program পরিচালনার জন্য আমরা কিছু Third-Party Platform-এর ওপর নির্ভর করি, যাদের প্রত্যেকের নিজস্ব Privacy Practice রয়েছে, যা আমাদের নিয়ন্ত্রণাধীন নয়:',
    },
    {
      type: 'ul',
      en: [
        'Telegram — used to run our Enrollment Bot, deliver course Access, and provide Support.',
        'Binance and the USDT Wallet/Blockchain Network — the Platforms used to receive your Payment; we only see what you choose to Share as Payment proof.',
      ],
      bn: [
        'Telegram — আমাদের Enrollment Bot পরিচালনা, কোর্স Access প্রদান এবং Support দেওয়ার জন্য ব্যবহৃত হয়।',
        'Binance এবং USDT Wallet/Blockchain Network — আপনার Payment গ্রহণের জন্য ব্যবহৃত Platform; আপনি Payment-এর প্রমাণ হিসেবে যা Share করেন, শুধু তা-ই আমরা দেখতে পাই।',
      ],
    },
    {
      type: 'p',
      en: 'Because Platforms like Telegram and Binance operate outside Bangladesh, some of your information may be processed or stored outside Bangladesh as well. We recommend reading each Platform\u2019s own Privacy Policy before using it to contact us or make a Payment.',
      bn: 'যেহেতু Telegram ও Binance-এর মতো এই Platform গুলো বাংলাদেশের বাইরে থেকে পরিচালিত হয়, তাই আপনার কিছু তথ্য বাংলাদেশের বাইরেও Process বা Store হতে পারে। প্রতিটি Platform ব্যবহার করে আমাদের সাথে যোগাযোগ বা Payment করার আগে সেই Platform-এর নিজস্ব Privacy Policy পড়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।',
    },
    { type: 'h2', en: '5. Data Retention & Security', bn: '৫. তথ্য সংরক্ষণ ও নিরাপত্তা' },
    {
      type: 'p',
      en: 'We retain Enrollment and Payment-Verification records for as long as reasonably necessary for Support, accounting, and fraud-prevention purposes. We take reasonable measures to keep information you Share secure, but no information stored or transmitted electronically (Telegram included) is ever 100% secure.',
      bn: 'Support, Accounting এবং Fraud-Prevention-এর প্রয়োজনে যতদিন যুক্তিসঙ্গতভাবে প্রয়োজন, ততদিন আমরা Enrollment ও Payment-Verification সংক্রান্ত Record সংরক্ষণ করি। আপনার Share করা তথ্য সুরক্ষিত রাখতে আমরা যুক্তিসঙ্গত ব্যবস্থা নিই, তবে মনে রাখবেন, Electronic মাধ্যমে (Telegram-সহ) সংরক্ষণ বা প্রেরণ করা কোনো তথ্যই ১০০% নিরাপদ নয়।',
    },
    { type: 'h2', en: '6. Your Rights & Choices', bn: '৬. আপনার অধিকার ও পছন্দ' },
    {
      type: 'p',
      en: 'You can ask what information we hold about you, or request deletion of contact details no longer needed for Support or record-keeping — just message our Telegram Support.',
      bn: 'আপনার সম্পর্কে আমরা কী তথ্য সংরক্ষণ করছি তা জানতে চাইতে পারেন, অথবা Support বা Record-Keeping-এর জন্য আর প্রয়োজন নেই এমন যোগাযোগের তথ্য মুছে ফেলার অনুরোধ করতে পারেন — এর জন্য শুধু আমাদের Telegram Support-এ মেসেজ করুন।',
    },
    { type: 'h2', en: '7. Children\u2019s Privacy', bn: '৭. শিশুদের গোপনীয়তা' },
    {
      type: 'p',
      en: 'This Program is not intended for, or designed to be used by, anyone under 18. We do not knowingly collect information from any Minor.',
      bn: 'এই Program ১৮ বছরের কম বয়সী কারো জন্য নয়, এবং তাদের ব্যবহারের উদ্দেশ্যেও তৈরি নয়। আমরা জেনেশুনে কোনো Minor-এর তথ্য সংগ্রহ করি না।',
    },
    { type: 'h2', en: '8. Changes to This Policy', bn: '৮. এই Policy-তে পরিবর্তন' },
    {
      type: 'p',
      en: 'We may update this Privacy Policy from time to time. Any significant change will be reflected by updating the "Last updated" date above.',
      bn: 'আমরা মাঝে মাঝে এই Privacy Policy Update করতে পারি। কোনো উল্লেখযোগ্য পরিবর্তন হলে উপরে থাকা "সর্বশেষ হালনাগাদ" তারিখ Update করে তা প্রতিফলিত করা হবে।',
    },
    { type: 'h2', en: '9. Contact', bn: '৯. যোগাযোগ' },
    {
      type: 'p',
      en: (
        <>
          Any question about this Policy or your information can be sent to our{' '}
          <a href={`https://t.me/${BOT_USERNAME}`} target="_blank" rel="noreferrer" className={linkCls}>
            Telegram Support
          </a>.
        </>
      ),
      bn: (
        <>
          এই Policy বা আপনার তথ্য সংক্রান্ত যেকোনো প্রশ্ন আমাদের{' '}
          <a href={`https://t.me/${BOT_USERNAME}`} target="_blank" rel="noreferrer" className={linkCls}>
            Telegram Support
          </a>
          -এ পাঠাতে পারেন।
        </>
      ),
    },
  ],
};
