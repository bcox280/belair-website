'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';

import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className="container z-10 flex max-w-full flex-row justify-between p-0 px-2 pt-2">
      <Button
        variant="ghost"
        size="icon"
        className="z-10"
        onClick={() => {
          router.push('/home');
        }}
      >
        <Home className="size-5" />
        <span className="sr-only">Go to home</span>
      </Button>
      <div className="flex flex-row justify-self-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavigationBar;
