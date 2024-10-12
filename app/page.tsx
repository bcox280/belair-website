'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import RainDropGenerator from '@/components/rain-drop-generator';
import { ThemeToggle } from '@/components/theme-toggle';

export const Page = () => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="overscroll-none">
      <ThemeToggle />
      <div className="flex h-screen items-center justify-center">
        <Button
          variant={'outline'}
          className="relative z-10 flex"
          onClick={() => {
            setClicked(true);
            setTimeout(() => router.push('/home'), 3000);
          }}
        >
          Enter
          {/** animation isnt on parent because then delay cant be overwritten. just a tailwind gotcha */}
          {clicked ? (
            <div className="absolute inline-flex h-full w-full *:absolute *:inline-flex *:h-full *:w-full *:rounded-md *:border-2 *:border-primary *:opacity-0">
              <span className="animate-ripple-large"></span>
              <span className="animate-ripple-large delay-150"></span>
              <span className="animate-ripple-large delay-300"></span>
              <span className="animate-ripple-large delay-500"></span>
              <span className="animate-ripple-large delay-700"></span>
            </div>
          ) : (
            <></>
          )}
        </Button>
        {/** dunno if i like this or not? */}
        {clicked ? <></> : <RainDropGenerator />}
      </div>
    </div>
  );
};

export default Page;
