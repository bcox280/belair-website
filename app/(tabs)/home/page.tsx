'use client';

import AnimatedGradientText from '@/components/ui/animations/text';
import { Separator } from '@/components/ui/separator';

import Projects from './projects';

const Page = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <span className="flex flex-col items-center justify-center">
          <div className="flex w-2/5 flex-col items-center justify-center pb-2 text-4xl font-semibold leading-none tracking-tight">
            <AnimatedGradientText>Plz Hire Me</AnimatedGradientText>
            <Separator className="my-2 w-2/5 animate-glow-text bg-gradient-to-r from-primary from-25% via-foreground via-50% to-primary/80 to-75% bg-[length:150%_auto]" />
          </div>
          <Projects />
        </span>
      </div>
    </>
  );
};

export default Page;
