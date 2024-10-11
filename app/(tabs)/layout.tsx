'use client';

import '@/styles/globals.css';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ThemeToggle } from '@/components/theme-toggle';

import { CommandLayout } from './command-layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className='overscroll-none'>
      <ThemeToggle />
      <div className='h-screen '>{children}</div>
      <CommandLayout />
    </div>
  );
};

export default RootLayout;
