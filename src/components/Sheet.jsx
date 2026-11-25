import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const SIDES = {
  right: 'sheet-right rounded-l ml-auto mr-0 h-dvh max-h-none w-full max-w-[480px]',
  left: 'sheet-left rounded-r mr-auto ml-0 h-dvh max-h-none w-full max-w-[420px]',
  center: 'sheet-center m-auto rounded max-h-[92dvh] w-[calc(100%-2rem)] max-w-4xl',
};

export default function Sheet({ open, onClose, title, side = 'right', className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      className={`bg-paper p-0 ${SIDES[side]} ${className}`}
    >
      {open && (
        <div className={`flex flex-col ${side === 'center' ? '' : 'h-full'}`}>
          <div className="flex flex-shrink-0 items-center justify-between border-b border-line py-2 pl-5 pr-2 sm:pl-6">
            <h2 className="t-h3">{title}</h2>
            <button type="button" className="icon-btn" onClick={onClose} aria-label={`Close ${title}`}><X size={22} /></button>
          </div>
          {children}
        </div>
      )}
    </dialog>
  );
}
