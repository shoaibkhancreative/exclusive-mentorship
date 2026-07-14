import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <motion.div {...fadeUp} className={`max-w-2xl ${alignClass} ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

export { fadeUp };
