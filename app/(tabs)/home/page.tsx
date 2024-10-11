'use client';

import { ThemeToggle } from '@/components/theme-toggle';

import Projects from './projects';

export const Page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <span className='flex items-center justify-center flex-col'>
        <div className='flex-1 text-4xl font-semibold leading-none tracking-tight pb-2 '>
          Plz Hire Me <div className=' pb-2 pt-2 border-b' />
        </div>
        <Projects />
      </span>
    </div>
  );
};

export default Page;
