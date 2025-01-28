'use client';

import '@/styles/globals.css';

import { createContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useWindowDimensions } from '@/lib/window';
import { Ghost } from '@/components/ui/animations/lil-ghost';
import { SplashText } from '@/components/ui/animations/text-flip';
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

const RootLayout = ({ children }: RootLayoutProps) => {
  const [onSplashScreen, setOnSplashScreen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => setOnSplashScreen(false), 6500);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      <AnimatePresence>
        <div className="flex h-screen max-h-screen w-screen flex-col items-center justify-center overflow-hidden overscroll-none">
          {onSplashScreen ? (
            <motion.div
              exit={{ opacity: 0, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="m-auto flex flex-col items-center"
            >
              <SplashText />
            </motion.div>
          ) : (
            <>
              <motion.div
                className="flex h-dvh max-h-dvh w-screen flex-col justify-between"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <ThemeToggle />
                <div className="flex max-h-[90dvh] grow flex-col items-center justify-center">
                  {children}
                </div>
                <CommandLayout />
              </motion.div>
              {width === 0 || height === 0 ? (
                <></>
              ) : (
                <div className="hidden lg:block">
                  <Ghost isLoading={loading} height={height} width={width} />
                </div>
              )}
            </>
          )}
        </div>
      </AnimatePresence>
    </LoadingContext.Provider>
  );
};

export default RootLayout;
