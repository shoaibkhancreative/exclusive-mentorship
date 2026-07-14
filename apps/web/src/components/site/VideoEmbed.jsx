import React from 'react';
import { Play, Clock } from 'lucide-react';

// No videoId is wired up by default. When the real intro recording is ready,
// pass videoId="..." from the caller and this plays normally on click. Until
// then this shows an honest "coming soon" state — the previous default
// silently pointed at a joke YouTube video, which would have embarrassed a
// real visitor who clicked play.
export default function VideoEmbed({ videoId = null, title = 'Mentorship Preview', className = '' }) {
  const [playing, setPlaying] = React.useState(false);

  if (!videoId) {
    return (
      <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-navy shadow-softLg ${className}`}>
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.5),transparent_55%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-foreground/10 ring-1 ring-navy-foreground/20 sm:h-16 sm:w-16">
            <Clock size={24} className="text-navy-foreground/55" strokeWidth={1.75} />
          </span>
          <p className="text-sm font-medium text-navy-foreground/65">{title} — coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-navy shadow-softLg ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-navy via-navy to-emerald-950 focus-ring"
          aria-label={`Play ${title}`}
        >
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.5),transparent_55%)]" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/40 transition-transform group-hover:scale-110 group-active:scale-95 sm:h-20 sm:w-20">
            <Play size={28} className="ml-0.5" fill="currentColor" />
          </span>
          <span className="absolute bottom-4 left-5 text-sm font-medium text-navy-foreground/80">{title}</span>
        </button>
      )}
    </div>
  );
}
