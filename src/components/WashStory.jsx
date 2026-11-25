import React, { useEffect, useRef, useState } from 'react';

const LINES = [
  [0, 'Day one. It looks great.'],
  [4, 'A few washes in, the black isn’t black.'],
  [11, 'The collar has started to wave.'],
  [20, 'It’s shorter. Wider. Somehow both.'],
  [27, 'Now it’s the one you sleep in.'],
];

const mix = (a, b, t) => Math.round(a + (b - a) * t);

// An ordinary cheap T-shirt ageing: t runs from 0 (new) to 1 (worn out).
function TiredTee({ t }) {
  const shade = `rgb(${mix(22, 150, t)} ${mix(22, 147, t)} ${mix(24, 143, t)})`;
  const hem = 940 - 125 * t;
  const wide = 42 * t;
  const neck = 400 + 48 * t;
  const twist = 34 * t;
  const body = `M${345 - wide / 2} 310 L235 350 Q190 370 165 420 L95 590 L205 640 L250 560 L${245 - wide} ${hem - twist} Q${450 + twist} ${hem + 22} ${655 + wide} ${hem + twist} L650 560 L695 640 L805 590 L735 420 Q710 370 665 350 L${555 + wide / 2} 310 Q450 ${neck} ${345 - wide / 2} 310Z`;
  const wave = 14 * t;
  const collar = `M${326 - wide / 2} 318 Q${385 - wave} ${neck - 10 + wave} 450 ${neck - 18} T${574 + wide / 2} 318`;
  return (
    <svg viewBox="60 270 780 720" className="h-full w-full" role="img" aria-label="Illustration of an ordinary T-shirt fading and losing its shape">
      <path d={body} fill={shade} />
      <path d={collar} fill="none" stroke="#000" strokeOpacity=".35" strokeWidth="4" />
      <path d={`M${250 - wide} ${hem - twist - 26} Q${450 + twist} ${hem - 4} ${650 + wide} ${hem + twist - 26}`} fill="none" stroke="#000" strokeOpacity=".3" strokeWidth="3" />
      <g fill="none" stroke="#fff" strokeOpacity={0.28 * t} strokeWidth="5" strokeLinecap="round">
        <path d="M330 520 Q350 640 320 760" /><path d="M560 470 Q540 600 585 720" /><path d="M430 600 Q450 700 425 800" />
      </g>
    </svg>
  );
}

export default function WashStory() {
  const ref = useRef(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const box = ref.current.getBoundingClientRect();
      const travel = box.height - window.innerHeight;
      setT(Math.min(1, Math.max(0, -box.top / travel)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const wash = Math.round(t * 30);
  const line = LINES.filter(([from]) => wash >= from).pop()[1];

  return (
    <section id="story" ref={ref} className="relative h-[260vh] scroll-mt-16 border-t border-line">
      <div className="sticky top-16 flex h-[calc(100dvh-4rem)] flex-col overflow-hidden">
        <div className="page grid min-h-0 flex-grow grid-rows-[auto_1fr_auto] gap-4 pb-8 pt-8 lg:grid-cols-12 lg:grid-rows-[1fr_auto_1fr] lg:gap-x-10 lg:gap-y-0 lg:py-0">
          <h2 className="t-h2 lg:col-span-5 lg:row-start-1 lg:self-end lg:pb-8">You know this T-shirt.</h2>
          <div className="h-full min-h-0 lg:col-span-7 lg:col-start-6 lg:row-span-3 lg:row-start-1 lg:max-h-[58vh] lg:self-center"><TiredTee t={t} /></div>
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <p className="t-num tabular-nums" aria-hidden="true">{wash}</p>
            <p className="text-stone">{wash === 1 ? 'wash' : 'washes'}</p>
            <p className="t-h3 mt-3 min-h-[2.6em] max-w-sm">{line}</p>
            <div className="mt-4 h-1 max-w-sm overflow-hidden rounded-sm bg-line"><div className="h-full rounded-sm bg-ink" style={{ width: `${t * 100}%` }} /></div>
            <p className="mt-3 text-[13px] text-stone">An illustration of an ordinary cheap tee, not a test result.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
