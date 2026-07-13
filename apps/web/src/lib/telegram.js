// ---------------------------------------------------------------------------
// TELEGRAM BOT DEEP-LINK BUILDER
//
// Per the Technical Integration spec: the website is NOT the pricing authority.
// The generated link must carry only the Package ID and Add-on status — never
// the amount — so the Bot can look up pricing itself and stay the single
// source of truth. Replace BOT_USERNAME with your real bot's username.
// ---------------------------------------------------------------------------

const BOT_USERNAME = 'exclusive_mentorship_bot'; // TODO: replace with your live bot username

const ADDON_ORDER = ['insight', 'templates', 'archive'];

/**
 * Builds a `t.me` deep link whose `start` payload encodes only:
 *   - the package/tier id ("T1" | "T2" | "T3" | "ADDONS")
 *   - a 3-digit add-on bitmask in fixed order [insight, templates, archive]
 *   - the payment plan for Tier 2 ("FULL" | "SPLIT")
 * No name, contact info, or amount is ever included in the link itself.
 */
export function buildTelegramDeepLink({ packageKey, addonFlags = {}, plan = 'FULL' }) {
  const addonCode = ADDON_ORDER.map((k) => (addonFlags[k] ? '1' : '0')).join('');
  const payload = [packageKey, addonCode, plan].join('-');
  return `https://t.me/${BOT_USERNAME}?start=${encodeURIComponent(payload)}`;
}

export { BOT_USERNAME };
