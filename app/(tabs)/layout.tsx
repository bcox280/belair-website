'use client';

import '@/styles/globals.css';

import { useEffect, useState } from 'react';

import { Ghost } from '@/components/ui/animations/lil-ghost';
import { BlairTitleText } from '@/components/ui/animations/text-flip';
import { ThemeToggle } from '@/components/theme-toggle';

import { CommandLayout } from './command-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const [onSplashScreen, setOnSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setOnSplashScreen(false), 7000);
  }, []);

  return (
    <div className="overflow-hidden overscroll-none">
      <div className="flex h-screen flex-col justify-between">
        {onSplashScreen ? (
          <div className="flex h-full items-center justify-center duration-1000 animate-in ">
            <BlairTitleText className="" />
          </div>
        ) : (
          <>
            <ThemeToggle />
            {children}
            <CommandLayout />

            <div className="flex w-2/5 flex-col items-center justify-center pb-2 text-4xl font-semibold leading-none tracking-tight">
              <Ghost />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RootLayout;
