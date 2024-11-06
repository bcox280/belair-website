'use client';

import { useEffect, useMemo, useRef } from 'react';

export const BlairTitleText = () => {
  // don't like this, repeat first and last....
  const words = useMemo(
    () => [
      'Frontend Engineer',
      'Nerd',
      'Board game fanatic',
      'Cook',
      'Barista',
      'Baker',
      'Frontend Engineer',
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
    <div className="box-content flex gap-4 text-3xl font-semibold">
      <p className="text-foreground">Blair: </p>
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-blue-400"
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
