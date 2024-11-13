'use client';

import '@/styles/globals.css';

import { createContext, useEffect, useState } from 'react';

import { useWindowDimensions } from '@/lib/window';
import { Ghost } from '@/components/ui/animations/lil-ghost';
import { BlairTitleText } from '@/components/ui/animations/text-flip';
import { ThemeToggle } from '@/components/theme-toggle';

import { CommandLayout } from './command-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const LoadingContext = createContext<{
  setLoading: (_: boolean) => void;
}>({
  setLoading: () => null,
});

export const RootLayout = ({ children }: RootLayoutProps) => {
  const [onSplashScreen, setOnSplashScreen] = useState(true);
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => setOnSplashScreen(false), 7000);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
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

              {width === 0 || height === 0 ? (
                <></>
              ) : (
                <div className="flex w-2/5 flex-col items-center justify-center pb-2 text-4xl font-semibold leading-none tracking-tight">
                  <Ghost isLoading={loading} height={height} width={width} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default RootLayout;
