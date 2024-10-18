'use client';

import { useEffect, useState } from 'react';

import { getRandNumberBetween, getWindowDimensions } from '@/lib/window';
import Ghost from '@/components/ui/animations/lil-ghost';
import AnimatedGradientText from '@/components/ui/animations/text';
import { Separator } from '@/components/ui/separator';

import Projects from './projects';

export const Page = () => {
  const { width, height } = getWindowDimensions();
  const [transitionFunc, setTransitionFunc] = useState({});
  const [currentLoc, setCurrentLoc] = useState({
    left: getRandNumberBetween(-64, width - 64),
    top: getRandNumberBetween(-64, width - 64),
  });

  useEffect(() => {
    setTimeout(() => {
      const endLeft = getRandNumberBetween(-64, width - 64);
      const endTop = getRandNumberBetween(-64, height - 64);
      setCurrentLoc({ left: endLeft, top: endTop });
    }, 3000);
  }, [currentLoc.top, currentLoc.left]);

  return (
    <div className="flex h-screen items-center justify-center">
      <span className="flex flex-col items-center justify-center">
        <div className="flex w-2/5 flex-col items-center justify-center pb-2 text-4xl font-semibold leading-none tracking-tight">
          <AnimatedGradientText>Plz Hire Me</AnimatedGradientText>
          <Separator className="my-2 w-full animate-glow-text bg-gradient-to-r from-primary from-25% via-foreground via-50% to-primary/80 to-75% bg-[length:150%_auto]" />
          {/* turn this spinner into our lil ghost:) */}

          <div
            className="absolute"
            style={{
              top: currentLoc.top,
              left: currentLoc.left,
              transition: `3s`,
            }}
          >
            <Ghost childSize="h-6 w-6" className="bg-gradient-to-bl" />
          </div>
        </div>
        <Projects />
      </span>
    </div>
  );
};

export default Page;
