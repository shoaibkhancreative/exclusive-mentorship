import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

// Two-way EN / বাং toggle. Kept intentionally small and icon-led so it reads
// as a utility control rather than a nav item — English stays the default
// for every new visitor, this only ever flips the *current* session.
export default function LanguageSwitcher({ className }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        'flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-secondary/60 p-0.5 text-xs font-semibold',
        className
      )}
      role="group"
      aria-label="Language"
    >
      <Languages size={13} className="ml-1.5 mr-0.5 shrink-0 text-muted-foreground" strokeWidth={2.2} />
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn(
          'rounded-full px-2 py-1 transition-colors',
          lang === 'en' ? 'bg-background text-foreground shadow-soft' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('bn')}
        aria-pressed={lang === 'bn'}
        className={cn(
          'font-bn rounded-full px-2 py-1 transition-colors',
          lang === 'bn' ? 'bg-background text-foreground shadow-soft' : 'text-muted-foreground hover:text-foreground'
        )}
      >
        বাং
      </button>
    </div>
  );
}
