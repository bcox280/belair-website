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
      <div className="overflow-hidden overscroll-none">
        <ThemeToggle />

        <AnimatePresence>
          <div className="flex h-lvh max-h-lvh flex-col justify-between">
            {onSplashScreen ? (
              <motion.div
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full items-center justify-center"
              >
                <SplashText />
              </motion.div>
            ) : (
              <motion.div
                className="flex h-lvh max-h-lvh flex-col"
                exit={{ opacity: 0, scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex h-lvh max-h-lvh grow flex-col justify-center">
                  {children}
                </div>
                <CommandLayout />
                {width === 0 || height === 0 ? (
                  <></>
                ) : (
                  <Ghost isLoading={loading} height={height} width={width} />
                )}
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </LoadingContext.Provider>
  );
};

export default RootLayout;
