'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BlairTitleText } from '@/components/ui/animations/text-flip';
import { Button } from '@/components/ui/button';
import RainDropGenerator from '@/components/rain-drop-generator';
import { ThemeToggle } from '@/components/theme-toggle';

export const Page = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <ThemeToggle />
      <div className="flex h-full items-center justify-center">
        <>
          <Button
            variant={'enter'}
            className="z-10 duration-300 animate-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse"
            onClick={() => {
              router.push('/home');
            }}
          >
            <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full overflow-hidden rounded-full bg-primary transition-all duration-500 ease-in-out group-hover:translate-y-14"></span>

            <span className="z-10 font-semibold text-foreground">Enter</span>
          </Button>
          <RainDropGenerator />
        </>
      </div>
    </div>
  );
};

export default Page;
