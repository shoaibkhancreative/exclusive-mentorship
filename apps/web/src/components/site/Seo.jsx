import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Exclusive Mentorship';
const SITE_URL = 'https://exclusivementorship.xyz';

// ---------------------------------------------------------------------------
// One shared place that decides how every page's browser-tab title and meta
// description are built, so that never drifts page to page (previously the
// title was empty everywhere — every tab just said the blank <title></title>
// from index.html). Pass only the part that's unique to the page; the site
// name suffix is applied here, once, consistently.
// ---------------------------------------------------------------------------
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  // Canonical is derived from the real route (not passed in per-page) so it
  // can never drift out of sync with the URL a visitor is actually on —
  // including dynamic routes like /chapter/:slug, /programs/:slug, and
  // /addons/:slug. The root path collapses to a bare trailing slash so the
  // homepage's canonical is https://exclusivementorship.xyz/, not .../ "".
  const { pathname } = useLocation();
  const canonicalPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* og:title/og:description update per page for anything that DOES render
          JS (browser tabs, Google's indexing renderer). og:url and og:image
          are deliberately left to the static tags in index.html instead —
          see the comment there for why. */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
}
