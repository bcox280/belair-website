'use client';

import { ThemeToggle } from '@/components/theme-toggle';

import Projects from './projects';

export const Page = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="flex flex-col items-center justify-center">
        <div className="flex-1 pb-2 text-4xl font-semibold leading-none tracking-tight">
          Plz Hire Me <div className="border-b py-2" />
        </div>
        <Projects />
      </span>
    </div>
  );
};

export default Page;
