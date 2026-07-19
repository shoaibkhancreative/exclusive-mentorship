// Content in src/i18n/content/ (terms, privacy, disclaimer, FAQ) still keeps
// its original { en, bn } shape. The site is English-only now, so `pick`
// just always resolves the English copy — kept as a small helper so the
// content files didn't need to be rewritten.
export function pick(entry) {
  if (entry == null) return entry;
  return entry.en ?? entry;
}
