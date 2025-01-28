'use client';

import { useEffect, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

interface TitleTextProps {
  className?: string;
}

export const SplashText = (className: TitleTextProps) => {
  const [rerender, forceRerender] = useState(false);
  const words = useMemo(() => {
    return rerender
      ? [
          'a Board game fanatic',
          'a Cook',
          'a Barista',
          'a Baker',
          'a Frontend Engineer',
          'Unemployed',
          'Looking for a Job',
        ]
      : [];
  }, [rerender]);

  useEffect(() => {
    forceRerender(true);
  }, []);

  return (
    <div
      className={cn(
        className,
        'box-content flex flex-col gap-4 text-3xl font-semibold *:items-center'
      )}
    >
      <div className="flex flex-col text-foreground">Blair is </div>
      <div className="flex max-h-9 flex-col overflow-hidden text-primary">
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
