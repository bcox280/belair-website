'use client';

import { useEffect, useMemo, useRef } from 'react';

import { cn } from '@/lib/utils';

interface TitleTextProps {
  className?: string;
}

export const BlairTitleText = (className: TitleTextProps) => {
  // don't like this, repeat first and last....
  const words = useMemo(
    () => [
      'a Frontend Engineer',
      'a Nerd',
      'a Board game fanatic',
      'a Cook',
      'a Barista',
      'a Baker',
      'Looking to be Hired',
    ],
    []
  );

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
