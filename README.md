# Legal + FAQ Pages Rebuild — Exclusive Mentorship

## যা পরিবর্তন করা হয়েছে
৬টি ফাইল আপডেট করা হয়েছে, নিচের ফোল্ডার স্ট্রাকচার অনুযায়ী রাখা:

```
apps/web/src/pages/FAQPage.jsx
apps/web/src/pages/TermsPage.jsx
apps/web/src/pages/PrivacyPage.jsx
apps/web/src/pages/DisclaimerPage.jsx
apps/web/src/components/site/LegalLayout.jsx
apps/web/src/index.css
```

## কীভাবে বসাবেন
এই zip টি আপনার প্রজেক্টের রুট ফোল্ডারে Extract করুন এবং একই নামের ফাইলগুলো Overwrite করে দিন। প্রতিটি ফাইলের Path হুবহু আপনার প্রজেক্টের সাথে মিলবে। এরপর স্বাভাবিক নিয়মে `npm run build` বা `npm run dev` চালান — আমি ইতিমধ্যে আপনার আসল কোডবেসে `npm install` + `npm run build` চালিয়ে যাচাই করে দেখেছি, কোনো Error ছাড়াই সফলভাবে Build হয়েছে (2008 modules, ০ error)।

## ভাষা সংক্রান্ত সিদ্ধান্ত
- ৪টি পেজের Content বাংলায়, কিন্তু নিচের জিনিসগুলো ইচ্ছাকৃতভাবে ইংরেজিতে রাখা হয়েছে: পেজ Title (Terms & Conditions / Privacy Policy / Disclaimer / FAQ), Tier ও Add-on-এর নাম, Trading Terminology (Stop Loss, Leverage, FVG, ইত্যাদির মতো — যদিও এই ৪টি পেজে সরাসরি প্রযোজ্য এমন Term কম), Platform-এর নাম (Telegram, Bkash, Nagad, Binance), এবং Protocol/Product-এর নাম।
- Header, Footer, এবং সাইটের বাকি Navigation অপরিবর্তিত রাখা হয়েছে (ইংরেজিতেই আছে) — শুধু এই ৪টি পেজের মূল Content পরিবর্তন করা হয়েছে, যেভাবে অনুরোধ করা হয়েছিল।
- সংখ্যা (দাম, দিন সংখ্যা, সিট সংখ্যা) সব জায়গায় ইংরেজি Numeral-এই রাখা হয়েছে, বাকি সাইটের সাথে সামঞ্জস্য রাখতে (যেমন `৳4,799`)। শুধু "সর্বশেষ হালনাগাদ" তারিখে বাংলা Numeral ব্যবহার করা হয়েছে।

## ফন্ট যোগ করা হয়েছে
আপনার সাইট আগে শুধু Sora + Inter (দুটোই Latin-only ফন্ট) ব্যবহার করত — বাংলা লেখা যোগ করলে তা Browser-এর Default System ফন্টে পড়ে যেত, যা Design-এর সাথে না মিলিয়ে দেখাতো। তাই `index.css`-এ দুটো বাংলা-সমর্থিত Google Font যোগ করা হয়েছে:
- **Baloo Da 2** — Heading-গুলোর জন্য (Sora-এর মতো একই রকম আত্মবিশ্বাসী/Rounded ব্যক্তিত্ব)
- **Hind Siliguri** — সাধারণ লেখার জন্য (Inter-এর মতোই Clean ও Legible)

`.font-bn-display` এবং `.font-bn` — এই দুটো নতুন CSS Class `LegalLayout.jsx`-এর Heading/Paragraph/List Component-এ যোগ করা হয়েছে, এবং FAQPage-এর Category Heading ও Q&A Text-এও প্রযোজ্য করা হয়েছে।

## একটি তথ্যগত সংশোধনী (গুরুত্বপূর্ণ)
পুরনো `PrivacyPage.jsx`-এ Tier 3 আবেদনের জন্য একটি "Google Form (VIP application)"-এর উল্লেখ ছিল। কিন্তু আপনার `pricing.js` এবং `CheckoutPage.jsx` অনুযায়ী, Tier 3 এখন Tier 1/2-এর মতোই একই Checkout Flow ব্যবহার করে — আলাদা কোনো Google Form নেই (এটি `FAQPage.jsx`-এও একইভাবে লেখা ছিল)। তাই নতুন Privacy Policy-তে এই Google Form-এর উল্লেখ সরিয়ে ফেলা হয়েছে এবং Tier 3-কে সাধারণ Checkout Flow-এর অংশ হিসেবেই বর্ণনা করা হয়েছে। যদি Google Form সত্যিই এখনো ব্যবহৃত হয়, তাহলে জানাবেন — সেই অনুযায়ী আবার ঠিক করে দেব।

## যা যোগ করা হয়েছে (শুধু অনুবাদ নয়)
- **Terms**: একটি নতুন "সংজ্ঞা (Definitions)" সেকশন, একটি "যোগাযোগ ও Notice" সেকশন, এবং "সাধারণ শর্তাবলী" (Severability/Entire Agreement) সেকশন — মোট ১১টি থেকে বেড়ে ১৪টি সেকশন।
- **FAQ**: প্রতিটি Category-তে অন্তত ১টি নতুন প্রশ্ন যোগ করা হয়েছে (যেমন Telegram Bot-ই কেন চূড়ান্ত মূল্যের উৎস, Accountability Protocol কি Add-on-এও প্রযোজ্য কিনা, Access Share করা যাবে কিনা) — সবই আপনার বিদ্যমান Business Logic থেকে সরাসরি নেওয়া, নতুন করে কোনো প্রতিশ্রুতি তৈরি করা হয়নি।
- **Disclaimer**: শেষে একটি Legal-Template Note যোগ করা হয়েছে (Terms ও Privacy-এর সাথে সামঞ্জস্য রেখে), যা আগে ছিল না।

কোথাও নতুন কোনো Business Fact (যেমন নতুন Refund Timeframe, নতুন Feature, বা নির্দিষ্ট Mentor-এর নাম) বানিয়ে যোগ করা হয়নি — যা কিছু বিস্তারিত করা হয়েছে, তা আপনার বিদ্যমান `pricing.js`, `chapters.js`, `CheckoutPage.jsx`, ও `telegram.js`-এর সাথে সরাসরি সঙ্গতিপূর্ণ।
