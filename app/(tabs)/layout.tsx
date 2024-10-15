'use client';

import '@/styles/globals.css';

import { ThemeToggle } from '@/components/theme-toggle';

import { CommandLayout } from './command-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="overflow-hidden overscroll-none">
      <div className="flex h-screen flex-col justify-between">
        <ThemeToggle />
        {children}
        <CommandLayout />
      </div>
    </div>
  );
};

export default RootLayout;
