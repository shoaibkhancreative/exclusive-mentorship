import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

let uid = 0;

// ---------------------------------------------------------------------------
// A single hover/click-triggered dropdown for the desktop header nav.
// - Opens on hover (with a small close-delay so moving the pointer from the
//   trigger down into the panel never flickers shut) and on click/Enter/Space,
//   so it works for mouse, touch and keyboard users alike.
// - Closes on outside click, Escape, and on focus leaving the whole widget.
// - `children` is a render-prop — children(close) — so links inside the
//   panel can close the menu the moment they're clicked/navigated.
// ---------------------------------------------------------------------------
export default function NavDropdown({ label, active = false, panelClassName, children }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const wrapRef = React.useRef(null);
  const panelId = React.useRef(`nav-dd-${++uid}`).current;

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openNow = () => {
    cancelClose();
    setOpen(true);
  };
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };
  const closeNow = () => {
    cancelClose();
    setOpen(false);
  };

  React.useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeNow();
    };
    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) closeNow();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open]);

  React.useEffect(() => () => cancelClose(), []);

  const handleBlur = (e) => {
    if (wrapRef.current && !wrapRef.current.contains(e.relatedTarget)) closeSoon();
  };

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon} onBlur={handleBlur}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? closeNow() : openNow())}
        className={cn(
          'flex items-center gap-1 py-2 transition-colors hover:text-foreground focus-visible:text-foreground',
          active ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <div
            id={panelId}
            className={cn(
              'w-80 origin-top animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 overflow-hidden rounded-2xl border border-border bg-card shadow-softLg duration-150',
              panelClassName
            )}
          >
            {typeof children === 'function' ? children(closeNow) : children}
          </div>
        </div>
      )}
    </div>
  );
}
