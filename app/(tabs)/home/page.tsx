'use client';

import Spinner from '@/components/ui/animations/lil-ghost';
import AnimatedGradientText from '@/components/ui/animations/text';
import { Separator } from '@/components/ui/separator';

import Projects from './projects';

export const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="flex flex-col items-center justify-center">
        <div className="flex w-2/5 flex-col items-center justify-center pb-2 text-4xl font-semibold leading-none tracking-tight">
          <AnimatedGradientText>Plz Hire Me</AnimatedGradientText>
          <Separator className="my-2 w-full animate-glow-text bg-gradient-to-r from-primary from-25% via-foreground via-50% to-primary/80 to-75% bg-[length:150%_auto]" />
          {/* turn this spinner into our lil ghost:) */}
          <Spinner
            childSize="h-6 w-6"
            className="bg-gradient-to-bl"
            outerSize="h-8 w-8"
          />
        </div>
        <Projects />
      </span>
    </div>
  );
};

export default Page;
