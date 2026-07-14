import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Copy, LifeBuoy, ShieldCheck, Send, Sparkles } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { tiers, addons, paymentMethods, formatBDT, formatUSD, bdtFromUSD, ADDONS_VALUE_BDT } from '@/data/pricing';
import { buildTelegramDeepLink } from '@/lib/telegram';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const STEPS = ['Package', 'Your Info', 'Terms', 'Payment', 'Confirm'];

const tier1 = tiers.find((t) => t.id === 'tier1');
const tier2 = tiers.find((t) => t.id === 'tier2');
const tier3 = tiers.find((t) => t.id === 'tier3');

export default function CheckoutPage() {
  const [params] = useSearchParams();
  const { toast } = useToast();

  // Tier 3 now runs through the same stepper as Tier 1 & 2. If someone lands
  // on ?tier=3 while it's marked unavailable (tier3.available === false),
  // fall back to the anchor plan instead of pre-selecting a tier they can't
  // actually pick.
  const requestedPackage =
    params.get('tier') === '1' ? 'tier1' : params.get('tier') === '2' ? 'tier2' : params.get('tier') === '3' ? 'tier3' : params.get('addon') ? 'addons' : 'tier2';
  const initialPackage = requestedPackage === 'tier3' && tier3.available === false ? 'tier2' : requestedPackage;
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [packageType, setPackageType] = React.useState(initialPackage);
  const [paymentPlan, setPaymentPlan] = React.useState('full'); // 'full' | 'split' — tier2 only
  const initialAddon = params.get('addon');
  const [selectedAddons, setSelectedAddons] = React.useState({
    insight: initialAddon === 'insight',
    templates: initialAddon === 'templates',
    archive: initialAddon === 'archive',
  });
  const [info, setInfo] = React.useState({ name: '', phone: '', email: '', telegram: '' });
  const [terms, setTerms] = React.useState({ agree: false, risk: false });
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const addonsIncludedFree = packageType === 'tier2' || packageType === 'tier3';
  const toggleAddon = (id) => setSelectedAddons((s) => ({ ...s, [id]: !s[id] }));
  const selectedAddonIds = Object.entries(selectedAddons).filter(([, v]) => v).map(([k]) => k);
  const anyAddonSelected = selectedAddonIds.length > 0;

  const addonsCostBDT = addonsIncludedFree ? 0 : selectedAddonIds.reduce((sum, id) => sum + (addons.find((a) => a.id === id)?.priceBDT || 0), 0);
  const addonsCostUSD = addonsIncludedFree ? 0 : selectedAddonIds.reduce((sum, id) => sum + (addons.find((a) => a.id === id)?.priceUSD || 0), 0);

  const isSplit = packageType === 'tier2' && paymentPlan === 'split';

  let dueNowBDT = 0;
  let dueNowUSD = 0;
  if (packageType === 'tier1') {
    dueNowBDT = tier1.priceBDT + addonsCostBDT;
    dueNowUSD = tier1.priceUSD + addonsCostUSD;
  } else if (packageType === 'tier2') {
    if (isSplit) {
      dueNowUSD = tier2.splitPayment.installment1USD;
      dueNowBDT = bdtFromUSD(dueNowUSD);
    } else {
      dueNowBDT = tier2.priceBDT;
      dueNowUSD = tier2.priceUSD;
    }
  } else if (packageType === 'tier3') {
    dueNowBDT = tier3.priceBDT;
    dueNowUSD = tier3.priceUSD;
  } else {
    dueNowBDT = addonsCostBDT;
    dueNowUSD = addonsCostUSD;
  }

  const contactFilled = Boolean(info.phone || info.email || info.telegram);
  const step1Valid = packageType === 'addons' ? anyAddonSelected : true;
  const step2Valid = Boolean(info.name.trim() && contactFilled);
  const step3Valid = terms.agree && terms.risk;
  const step4Valid = Boolean(paymentMethod);
  const canProceed = [step1Valid, step2Valid, step3Valid, step4Valid, true][step];

  const paymentLabel = paymentMethods.find((p) => p.id === paymentMethod)?.label;

  const packageKey = packageType === 'tier1' ? 'T1' : packageType === 'tier2' ? 'T2' : packageType === 'tier3' ? 'T3' : 'ADDONS';
  const effectiveAddonFlags = addonsIncludedFree ? { insight: true, templates: true, archive: true } : selectedAddons;
  const telegramUrl = buildTelegramDeepLink({
    packageKey,
    addonFlags: effectiveAddonFlags,
    plan: isSplit ? 'SPLIT' : 'FULL',
  });

  const handleCopy = (number) => {
    navigator.clipboard?.writeText(number);
    setCopied(true);
    toast({ title: 'Number copied', description: 'Payment number copied to clipboard.' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    setSent(true);
    window.open(telegramUrl, '_blank');
  };

  const packageSummaryLabel =
    packageType === 'tier1' ? tier1.name : packageType === 'tier2' ? tier2.name : packageType === 'tier3' ? tier3.name : 'Add-ons Only';

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <section className="border-b border-border bg-secondary/40 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft size={15} /> Back to home
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">Complete Your Enrollment</h1>
          <div className="mt-6 flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    i < step ? 'bg-brand text-brand-foreground' : i === step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className={`hidden text-xs font-medium sm:block ${i === step ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
                {i < STEPS.length - 1 && <div className="h-px flex-1 bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {step === 0 && (
                <div className="space-y-8">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setPackageType('tier1')}
                      className={`rounded-2xl border-2 p-6 text-left transition-colors ${
                        packageType === 'tier1' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                      }`}
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{tier1.shortName}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">{tier1.name}</p>
                      <p className="text-sm text-muted-foreground">Core recorded course, basic support</p>
                      <p className="mt-4 font-display text-2xl font-bold text-foreground">{formatBDT(tier1.priceBDT)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">≈ {formatUSD(tier1.priceUSD)} USDT · add-ons sold separately</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPackageType('tier2')}
                      className={`relative rounded-2xl border-2 p-6 text-left transition-colors ${
                        packageType === 'tier2' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                      }`}
                    >
                      <span className="absolute right-4 top-4 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-brand-foreground">
                        MOST POPULAR
                      </span>
                      <p className="text-xs font-bold uppercase tracking-wide text-brand">{tier2.shortName}</p>
                      <p className="mt-1 font-display text-lg font-semibold text-foreground">{tier2.name}</p>
                      <p className="text-sm text-muted-foreground">+ Priority Support, Live Q&A, all add-ons free</p>
                      <p className="mt-4 font-display text-2xl font-bold text-foreground">{formatBDT(tier2.priceBDT)}</p>
                      <p className="mt-1 text-xs text-muted-foreground">≈ {formatUSD(tier2.priceUSD)} USDT · or split into 2 payments</p>
                    </button>
                    {tier3.available ? (
                      <button
                        type="button"
                        onClick={() => setPackageType('tier3')}
                        className={`relative rounded-2xl border-2 p-6 text-left transition-colors ${
                          packageType === 'tier3' ? 'border-gold bg-gold/10' : 'border-border bg-card hover:border-gold/40'
                        }`}
                      >
                        <span className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold text-navy">
                          {tier3.badge}
                        </span>
                        <p className="text-xs font-bold uppercase tracking-wide text-gold">{tier3.shortName}</p>
                        <p className="mt-1 font-display text-lg font-semibold text-foreground">{tier3.name}</p>
                        <p className="text-sm text-muted-foreground">1-on-1 mentorship, strictly limited</p>
                        <p className="mt-4 font-display text-2xl font-bold text-foreground">{formatBDT(tier3.priceBDT)}</p>
                        <p className="mt-1 text-xs text-muted-foreground">≈ {formatUSD(tier3.priceUSD)} USDT · 5 seats a month</p>
                      </button>
                    ) : (
                      <div className="relative rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-6 text-left">
                        <span className="absolute right-4 top-4 rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                          FULL THIS MONTH
                        </span>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{tier3.shortName}</p>
                        <p className="mt-1 font-display text-lg font-semibold text-muted-foreground">{tier3.name}</p>
                        <p className="mt-2 text-sm text-muted-foreground">This month's 5 seats are filled — check back next month.</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border p-4 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
                    <span>Just want an add-on, without a mentorship tier?</span>
                    <button type="button" onClick={() => setPackageType('addons')} className="font-semibold text-brand hover:underline">
                      Browse add-ons only
                    </button>
                  </div>

                  {packageType === 'tier2' && (
                    <div>
                      <p className="font-display font-semibold text-foreground">Payment plan</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setPaymentPlan('full')}
                          className={`rounded-xl border-2 p-4 text-left transition-colors ${
                            paymentPlan === 'full' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                          }`}
                        >
                          <p className="text-sm font-semibold text-foreground">Pay in full</p>
                          <p className="text-xs text-muted-foreground">{formatBDT(tier2.priceBDT)} (≈{formatUSD(tier2.priceUSD)}) today</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentPlan('split')}
                          className={`rounded-xl border-2 p-4 text-left transition-colors ${
                            paymentPlan === 'split' ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                          }`}
                        >
                          <p className="text-sm font-semibold text-foreground">Split into 2 payments</p>
                          <p className="text-xs text-muted-foreground">
                            {formatUSD(tier2.splitPayment.installment1USD)} now + {formatUSD(tier2.splitPayment.installment2USD)} within {tier2.splitPayment.penaltyDays} days
                          </p>
                        </button>
                      </div>
                      {paymentPlan === 'split' && (
                        <p className="mt-3 text-xs text-muted-foreground">
                          Installment 1 unlocks Part 1 of the videos only (no add-ons, no Priority Support yet). Installment 2 unlocks
                          everything else. Splitting costs {formatUSD(tier2.splitPayment.installment1USD + tier2.splitPayment.installment2USD)}{' '}
                          total instead of {formatUSD(tier2.priceUSD)}, and Part 1 access pauses if installment 2 isn't paid within{' '}
                          {tier2.splitPayment.penaltyDays} days.
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-display font-semibold text-foreground">Add-ons</p>
                      {addonsIncludedFree && (
                        <p className="flex items-center gap-1.5 text-xs font-semibold text-brand">
                          <Sparkles size={13} /> All included free — worth {formatBDT(ADDONS_VALUE_BDT)}
                        </p>
                      )}
                    </div>
                    <div className="mt-3 space-y-2">
                      {addons.map((a) => (
                        <label
                          key={a.id}
                          className={`flex items-center justify-between gap-3 rounded-xl border border-border p-4 ${
                            addonsIncludedFree ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-secondary'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={addonsIncludedFree || Boolean(selectedAddons[a.id])}
                              disabled={addonsIncludedFree}
                              onCheckedChange={() => toggleAddon(a.id)}
                            />
                            <div>
                              <p className="text-sm font-medium text-foreground">{a.name}</p>
                              <p className="text-xs text-muted-foreground">{a.description}</p>
                            </div>
                          </div>
                          <span className="shrink-0 text-sm font-semibold text-foreground">
                            {addonsIncludedFree ? 'FREE' : formatBDT(a.priceBDT)}
                          </span>
                        </label>
                      ))}
                    </div>
                    {packageType === 'addons' && !anyAddonSelected && (
                      <p className="mt-2 text-xs text-destructive">Select at least one add-on to continue.</p>
                    )}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" className="mt-1.5" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <p className="text-sm text-muted-foreground">Provide at least one contact method below.</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="mt-1.5" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} placeholder="+880 1XXXXXXXXX" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" className="mt-1.5" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="telegram">Telegram Username</Label>
                    <Input id="telegram" className="mt-1.5" value={info.telegram} onChange={(e) => setInfo({ ...info, telegram: e.target.value })} placeholder="@yourusername" />
                  </div>
                  {!contactFilled && (
                    <p className="text-xs text-destructive">Please provide at least one of: phone, email, or Telegram username.</p>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div className="max-h-64 overflow-y-auto rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground scrollbar-thin">
                    <p className="font-display font-semibold text-foreground">Terms &amp; Conditions (Summary)</p>
                    <p className="mt-3">
                      By enrolling you acknowledge this is educational content only and does not constitute financial advice. All
                      purchases are final — there is no cash refund. Instead, every tier is backed by the ICT Mastery Accountability
                      Protocol described on the homepage.
                    </p>
                    {isSplit && (
                      <p className="mt-3">
                        You've selected the split payment plan: {formatUSD(tier2.splitPayment.installment1USD)} now, then{' '}
                        {formatUSD(tier2.splitPayment.installment2USD)} within {tier2.splitPayment.penaltyDays} days. If the second
                        installment isn't received in that window, your Part 1 access will be paused until it is.
                      </p>
                    )}
                    <p className="mt-3">
                      Access is granted for personal use only and may not be shared, resold, or redistributed. Tier 2 batches are
                      capped at 50 students; Tier 3 is capped at 5 students per month with excess applicants waitlisted.
                    </p>
                    <p className="mt-3">
                      Payment is accepted via Bkash, Nagad, or Binance UID (USDT). Enrollment is confirmed manually after your
                      payment proof is reviewed via our Telegram bot — please ensure all information you submit is accurate.
                    </p>
                    <p className="mt-3">
                      Trading financial markets carries substantial risk of loss and is not suitable for everyone. You are solely
                      responsible for your own trading decisions and outcomes. Full details:{' '}
                      <Link to="/terms" target="_blank" className="font-medium text-brand hover:underline">Terms &amp; Conditions</Link>,{' '}
                      <Link to="/privacy" target="_blank" className="font-medium text-brand hover:underline">Privacy Policy</Link>,{' '}
                      <Link to="/disclaimer" target="_blank" className="font-medium text-brand hover:underline">Disclaimer</Link>.
                    </p>
                  </div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
                    <Checkbox checked={terms.agree} onCheckedChange={(v) => setTerms((t) => ({ ...t, agree: Boolean(v) }))} className="mt-0.5" />
                    <span className="text-sm text-foreground">আমি সকল Terms &amp; Conditions সম্পূর্ণ পড়েছি ও সম্মত আছি।</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4">
                    <Checkbox checked={terms.risk} onCheckedChange={(v) => setTerms((t) => ({ ...t, risk: Boolean(v) }))} className="mt-0.5" />
                    <span className="text-sm text-foreground">Trading risk সম্পর্কে আমি সচেতন।</span>
                  </label>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {paymentMethods.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={`rounded-xl border-2 p-4 text-left transition-colors ${
                          paymentMethod === m.id ? 'border-brand bg-accent/60' : 'border-border bg-card hover:border-brand/40'
                        }`}
                      >
                        <p className="text-sm font-semibold text-foreground">{m.label}</p>
                      </button>
                    ))}
                  </div>

                  {paymentMethod && (
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <p className="text-sm font-medium text-foreground">{paymentMethods.find((m) => m.id === paymentMethod).label} Number</p>
                      <div className="mt-2 flex items-center gap-2 rounded-lg bg-secondary p-3">
                        <code className="flex-1 overflow-x-auto whitespace-nowrap text-xs text-foreground">
                          {paymentMethods.find((m) => m.id === paymentMethod).number}
                        </code>
                        <button
                          type="button"
                          onClick={() => handleCopy(paymentMethods.find((m) => m.id === paymentMethod).number)}
                          className="flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                        >
                          <Copy size={13} /> {copied ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">{paymentMethods.find((m) => m.id === paymentMethod).note}</p>
                    </div>
                  )}

                  <div className="rounded-2xl border border-brand/40 bg-accent/50 p-6">
                    <p className="text-sm text-muted-foreground">{isSplit ? 'Due Now (Installment 1)' : 'Total Due'}</p>
                    <p className="mt-1 font-display text-3xl font-bold text-foreground">{formatBDT(dueNowBDT)}</p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      ≈ {formatUSD(dueNowUSD)} USDT <span className="text-foreground/60">(estimate — the bot confirms the exact amount)</span>
                    </p>
                    {isSplit && (
                      <p className="mt-2 text-xs text-muted-foreground">
                        + {formatUSD(tier2.splitPayment.installment2USD)} (≈{formatBDT(bdtFromUSD(tier2.splitPayment.installment2USD))}) due within{' '}
                        {tier2.splitPayment.penaltyDays} days to unlock full access.
                      </p>
                    )}
                  </div>

                  <a
                    href={`https://t.me/exclusive_mentorship_bot`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border p-4 text-sm font-semibold text-brand hover:bg-secondary"
                  >
                    <LifeBuoy size={16} /> New to Bkash / Nagad / crypto? Get support before paying
                  </a>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 rounded-2xl border border-border bg-card p-8 text-center">
                  <ShieldCheck className="mx-auto text-brand" size={40} />
                  <h2 className="font-display text-2xl font-bold text-foreground">Review &amp; Confirm</h2>
                  <div className="mx-auto max-w-sm space-y-2 text-left text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Package</span><span className="font-medium text-foreground">{packageSummaryLabel}</span></div>
                    {isSplit && <div className="flex justify-between"><span>Plan</span><span className="font-medium text-foreground">Split (2 payments)</span></div>}
                    <div className="flex justify-between"><span>Payment Method</span><span className="font-medium text-foreground">{paymentLabel}</span></div>
                    <div className="flex justify-between border-t border-border pt-2"><span>{isSplit ? 'Due Now' : 'Total Due'}</span><span className="font-display text-lg font-bold text-foreground">{formatBDT(dueNowBDT)}</span></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You'll be redirected to our Telegram bot with your package pre-loaded. The bot will confirm the exact amount —
                    send your payment, then attach the screenshot as proof right there.
                  </p>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-4 text-base font-bold text-brand-foreground transition-transform active:scale-[0.98] hover:brightness-110"
                  >
                    {sent ? (
                      <>
                        <Send size={17} /> Open Telegram Again
                      </>
                    ) : (
                      <>
                        Confirm &amp; Proceed <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                  {sent && (
                    <p className="text-xs text-muted-foreground">
                      Didn't open?{' '}
                      <a href={telegramUrl} target="_blank" rel="noreferrer" className="font-semibold text-brand hover:underline">
                        Click here to open Telegram
                      </a>
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 4 && (
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground disabled:opacity-40"
              >
                <ArrowLeft size={15} /> Back
              </button>
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(4, s + 1))}
                disabled={!canProceed}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-40"
              >
                Next <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
