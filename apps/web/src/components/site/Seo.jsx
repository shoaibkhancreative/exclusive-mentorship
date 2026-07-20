import { Helmet } from 'react-helmet';

const SITE_NAME = 'Exclusive Mentorship';

// ---------------------------------------------------------------------------
// One shared place that decides how every page's browser-tab title and meta
// description are built, so that never drifts page to page (previously the
// title was empty everywhere — every tab just said the blank <title></title>
// from index.html). Pass only the part that's unique to the page; the site
// name suffix is applied here, once, consistently.
// ---------------------------------------------------------------------------
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* Keeps link previews (Telegram, WhatsApp, Facebook) in sync with
          whatever page is actually being shared, not just the homepage
          defaults in index.html. */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
}
