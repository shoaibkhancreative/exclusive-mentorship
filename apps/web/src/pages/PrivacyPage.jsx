import React from 'react';
import LegalLayout, { LegalH2, LegalP, LegalUl, LegalNote } from '@/components/site/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="সর্বশেষ হালনাগাদ: ১৬ জুলাই, ২০২৬">
      <LegalP>
        এই Privacy Policy ব্যাখ্যা করে যে, আপনি যখন Checkout সম্পন্ন করেন, Tier 3 — The Inner Circle-এ Enroll
        করেন, অথবা আমাদের সাথে যোগাযোগ করেন, তখন Exclusive Mentorship কী কী তথ্য সংগ্রহ করে এবং তা কীভাবে
        ব্যবহার করা হয়।
      </LegalP>

      <LegalH2>1. আমরা যেসব তথ্য সংগ্রহ করি</LegalH2>
      <LegalUl
        items={[
          'Checkout সম্পন্ন করার সময় আপনার দেওয়া যোগাযোগের তথ্য: পূর্ণ নাম, এবং Phone Number, Email অথবা Telegram Username-এর মধ্যে অন্তত একটি।',
          'Payment Proof হিসেবে আপনার Binance বা USDT Wallet Transaction-এর Screenshot, যা Payment যাচাইয়ের জন্য আমাদের Telegram Bot-এ পাঠানো হয়।',
          'আপনি যখন আমাদের Bot-এর সাথে কথোপকথন শুরু করেন, তখন Telegram-এর মাধ্যমে উপলব্ধ আপনার Account তথ্য, যেমন Username এবং User ID।',
          'Website Browse করার সময় তৈরি হওয়া Basic, Non-Identifying Usage Data (যেমন কোন Page দেখা হয়েছে), যদি আমরা Analytics চালু রাখি।',
        ]}
      />

      <LegalH2>2. এই তথ্য আমরা কীভাবে ব্যবহার করি</LegalH2>
      <LegalUl
        items={[
          'আপনার Payment ম্যানুয়ালি যাচাই করে সঠিক Tier, Add-on বা Private Channel-এর Access প্রদান করতে।',
          'আপনার Order, Enrollment বা Support সংক্রান্ত বিষয়ে আপনার সাথে যোগাযোগ রাখতে।',
          'সীমিত সংখ্যক Tier 3 — The Inner Circle সিটের জন্য আবেদনকারীদের যাচাই করতে, এবং প্রয়োজনে Waitlist পরিচালনা করতে।',
          'আমাদের নিজস্ব Accounting ও Fraud-Prevention সংক্রান্ত প্রয়োজনীয় Record সংরক্ষণ করতে।',
        ]}
      />

      <LegalH2>3. Manual Review প্রক্রিয়া</LegalH2>
      <LegalP>
        যেহেতু জাল বা ভুয়া Payment Screenshot ঠেকাতে প্রতিটি Payment ম্যানুয়ালি যাচাই করা হয়, তাই আমাদের
        Team-এর একজন সদস্য সরাসরি আপনার জমা দেওয়া Payment Proof এবং যোগাযোগের তথ্য পর্যালোচনা করবেন। অনুগ্রহ
        করে শুধুমাত্র প্রকৃত Payment Screenshot এবং সঠিক তথ্যই জমা দিন।
      </LegalP>

      <LegalH2>4. Third-Party Service সমূহ</LegalH2>
      <LegalP>
        এই Program পরিচালনার জন্য আমরা কিছু Third-Party Platform-এর ওপর নির্ভর করি, যাদের প্রত্যেকের নিজস্ব
        Privacy Practice রয়েছে, যা আমাদের নিয়ন্ত্রণাধীন নয়:
      </LegalP>
      <LegalUl
        items={[
          'Telegram — আমাদের Enrollment Bot পরিচালনা, কোর্স Access প্রদান এবং Support দেওয়ার জন্য ব্যবহৃত হয়।',
          'Binance এবং USDT Wallet/Blockchain Network — আপনার Payment গ্রহণের জন্য ব্যবহৃত Platform; আপনি Payment-এর প্রমাণ হিসেবে যা Share করেন, শুধু তা-ই আমরা দেখতে পাই।',
        ]}
      />
      <LegalP>
        যেহেতু Telegram ও Binance-এর মতো এই Platform গুলো বাংলাদেশের বাইরে থেকে পরিচালিত হয়, তাই আপনার কিছু
        তথ্য বাংলাদেশের বাইরেও Process বা Store হতে পারে। প্রতিটি Platform ব্যবহার করে আমাদের সাথে যোগাযোগ বা
        Payment করার আগে সেই Platform-এর নিজস্ব Privacy Policy পড়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।
      </LegalP>

      <LegalH2>5. তথ্য সংরক্ষণ ও নিরাপত্তা</LegalH2>
      <LegalP>
        Support, Accounting এবং Fraud-Prevention-এর প্রয়োজনে যতদিন যুক্তিসঙ্গতভাবে প্রয়োজন, ততদিন আমরা
        Enrollment ও Payment-Verification সংক্রান্ত Record সংরক্ষণ করি। আপনার Share করা তথ্য সুরক্ষিত রাখতে
        আমরা যুক্তিসঙ্গত ব্যবস্থা নিই, তবে মনে রাখবেন, Electronic মাধ্যমে (Telegram-সহ) সংরক্ষণ বা প্রেরণ করা
        কোনো তথ্যই ১০০% নিরাপদ নয়।
      </LegalP>

      <LegalH2>6. আপনার অধিকার ও পছন্দ</LegalH2>
      <LegalP>
        আপনার সম্পর্কে আমরা কী তথ্য সংরক্ষণ করছি তা জানতে চাইতে পারেন, অথবা Support বা Record-Keeping-এর জন্য
        আর প্রয়োজন নেই এমন যোগাযোগের তথ্য মুছে ফেলার অনুরোধ করতে পারেন — এর জন্য শুধু আমাদের Telegram Support-এ
        মেসেজ করুন।
      </LegalP>

      <LegalH2>7. শিশুদের গোপনীয়তা</LegalH2>
      <LegalP>
        এই Program ১৮ বছরের কম বয়সী কারো জন্য নয়, এবং তাদের ব্যবহারের উদ্দেশ্যেও তৈরি নয়। আমরা জেনেশুনে
        কোনো Minor-এর তথ্য সংগ্রহ করি না।
      </LegalP>

      <LegalH2>8. এই Policy-তে পরিবর্তন</LegalH2>
      <LegalP>
        আমরা মাঝে মাঝে এই Privacy Policy Update করতে পারি। কোনো উল্লেখযোগ্য পরিবর্তন হলে উপরে থাকা
        "সর্বশেষ হালনাগাদ" তারিখ Update করে তা প্রতিফলিত করা হবে।
      </LegalP>

      <LegalH2>9. যোগাযোগ</LegalH2>
      <LegalP>
        এই Policy বা আপনার তথ্য সংক্রান্ত যেকোনো প্রশ্ন আমাদের{' '}
        <a href="https://t.me/exclusive_mentorship_bot" target="_blank" rel="noreferrer" className="font-medium text-brand hover:underline">
          Telegram Support
        </a>-এ পাঠাতে পারেন।
      </LegalP>

      <LegalNote>
        এই Page-টি একটি সাধারণ Template এবং আইনি পরামর্শের বিকল্প নয়। নির্ভরযোগ্যভাবে ব্যবহারের আগে
        বাংলাদেশের Data-Protection ও Digital-Commerce সংক্রান্ত আইনে অভিজ্ঞ কোনো আইনজীবীর মাধ্যমে এটি যাচাই
        করিয়ে নেওয়ার পরামর্শ দেওয়া হচ্ছে।
      </LegalNote>
    </LegalLayout>
  );
}
