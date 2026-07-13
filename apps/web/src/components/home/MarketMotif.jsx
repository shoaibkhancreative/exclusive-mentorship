import React from 'react';

/**
 * A single signature visual: a stylized "liquidity sweep" — price wicks above
 * a prior high (the dashed reference line), then reverses hard and trends
 * higher. It's the one recurring ICT concept most native to this brand, used
 * sparingly as a quiet background motif rather than a literal chart.
 */
export default function MarketMotif({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1200 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="470" y1="66" x2="920" y2="66" stroke="hsl(var(--brand))" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="5 7" />
      <path
        d="M0 176 L120 158 L230 168 L300 132 L390 140 L470 96 L520 78 L568 46 L600 90 L650 128 L700 112 L760 132 L830 82 L900 44 L980 26 L1080 16 L1200 8"
        fill="none"
        stroke="hsl(var(--brand))"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="568" cy="46" r="5" fill="hsl(var(--background))" stroke="hsl(var(--brand))" strokeWidth="2.5" />
      <circle cx="900" cy="44" r="4" fill="hsl(var(--brand))" fillOpacity="0.7" />
    </svg>
  );
}
