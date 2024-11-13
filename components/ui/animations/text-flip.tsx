'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface TitleTextProps {
  className?: string;
}

export const BlairTitleText = (className: TitleTextProps) => {
  const [rerender, forceRerender] = useState(false);
  // don't like this, repeat first and last....
  const words = useMemo(() => {
    return rerender
      ? [
          'a Frontend Engineer',
          'a Board game fanatic',
          'a Cook',
          'a Barista',
          'a Baker',
          'Unemployed',
          'Looking for a Job',
        ]
      : [];
  }, [rerender]);

  // Lil cheeky, on first load there is a buffer of (I assume tailwindcss doing some JIT stuff, didn't really wanna deal
  // with it ima be honest) and all the text shows, so just waiting for the first render before loading in the text
  useEffect(() => {
    forceRerender(true);
  }, []);

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;

      words.forEach((word) => {
        const span = document.createElement('span');
        span.className = 'absolute opacity-0 w-2/5';
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div
      className={cn(
        className,
        'box-content flex flex-col gap-4 text-3xl font-semibold *:items-center'
      )}
    >
      <div className="flex flex-col text-foreground">Blair is </div>
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-primary"
      >
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
