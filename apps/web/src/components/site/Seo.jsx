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
    </Helmet>
  );
}
